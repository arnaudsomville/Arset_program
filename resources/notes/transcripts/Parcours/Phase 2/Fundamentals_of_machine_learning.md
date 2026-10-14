# Fundamentals of Machine Learning Transcript

## Part 1

00:03 Welcome everyone to the training series
00:05 

00:05 Fundamentals of Machine Learning for
00:07 

00:07 Earth Science.
00:09 

00:09 This is part one of the three-part
00:11 

00:11 series, an overview of machine learning.
00:15 

00:15 Before we get started, I wanted to
00:17 

00:17 introduce myself and the NASA Applied
00:19 

00:19 Remote Sensing Training Program, or
00:21 

00:21 ARSET.
00:22 

00:22 My name is Brock Blevins. I am a
00:24 

00:24 training coordinator for the ARSET
00:26 

00:26 program, and I will be your host for
00:28 

00:28 this training.
00:33 

00:33 NASA's Applied Remote Sensing Training
00:34 

00:34 Program's goal is to empower the global
00:37 

00:37 community to incorporate Earth observing
00:40 

00:40 data into environmental management and
00:42 

00:42 decision-making.
00:43 

00:43 Our trainings are designed for
00:45 

00:45 professionals in the public public and
00:47 

00:47 private sector, environmental managers,
00:49 

00:49 researchers, policymakers, and we offer
00:52 

00:52 these trainings in application themes of
00:55 

00:55 agriculture, climate, disasters, health
00:58 

00:58 and air quality, land management, and
01:01 

01:01 water resources management.
01:06 

01:06 ARSET training availability. We offer
01:08 

01:08 trainings online in a webinar series
01:11 

01:11 such as we are starting today. We offer
01:13 

01:13 self-paced trainings and custom
01:16 

01:16 in-person trainings.
01:18 

01:18 All training is cost-free to the
01:20 

01:20 participants. There are often a
01:22 

01:22 bilingual option, typically in Spanish.
01:26 

01:26 And to meet the diversity of needs and
01:28 

01:28 skill levels from a global audience, we
01:31 

01:31 we offer trainings introductory to
01:33 

01:33 advanced, and as always, all the
01:35 

01:35 materials are free to use and adapt. We
01:38 

01:38 only ask that you give attribution or
01:39 

01:39 credit to NASA ARSET.
01:46 

01:46 At the end of this training,
01:47 

01:47 we aim for participants to be able to
01:49 

01:49 recognize the most common machine
01:51 

01:51 learning method used in processing Earth
01:54 

01:54 science data,
01:55 

01:55 describe the benefits and the
01:57 

01:57 limitations of machine learning,
01:59 

01:59 explain how to apply basic machine
02:02 

02:02 learning algorithms and techniques in a
02:03 

02:03 meaningful manner,
02:05 

02:05 use analysis-appropriate training data
02:08 

02:08 sets to evaluate conditions and
02:10 

02:10 solutions for a given case study, and
02:12 

02:12 complete basic procedures to interpret,
02:15 

02:15 refine,
02:17 

02:17 and evaluate the accuracy of the results
02:18 

02:18 of machine learning analysis.
02:22 

02:22 As this is an introductory webinar
02:24 

02:24 series, there are not many prerequisites
02:26 

02:26 coming into the training today. We do
02:28 

02:28 suggest that participants have an
02:30 

02:30 understanding of the fundamentals of
02:32 

02:32 remote sensing
02:33 

02:33 concepts and terminology. You can do so
02:36 

02:36 by viewing our session one of the
02:39 

02:39 on-demand fundamentals of remote sensing
02:41 

02:41 series, or if you already have
02:43 

02:43 equivalent experience, that's not
02:45 

02:45 necessary, but please feel free to
02:48 

02:48 uh review if you like.
02:50 

02:50 Attendees will need to access a Google
02:52 

02:52 Drive and Google Colab um to work with
02:56 

02:56 the code here today. So, in order to
02:58 

02:58 access those resources, users must use
03:01 

03:01 an email ending in gmail.com. So, you
03:03 

03:03 just have to have a a gmail.com account.
03:06 

03:06 We'll have a video of the demonstration
03:07 

03:07 shown today available within 48 hours on
03:11 

03:11 the training webpage, so you are able to
03:14 

03:14 go through this process at your own
03:16 

03:16 pace.
03:20 

03:20 Here's the schedule for each of the
03:21 

03:21 three-part training that we'll cover
03:23 

03:23 from April 20th through May 4th.
03:26 

03:26 There'll be one homework associated with
03:28 

03:28 the series, and that'll be available on
03:30 

03:30 May 4th. It'll be due on April 4th 19th.
03:33 

03:33 And this will be a Google Form
03:34 

03:34 submission.
03:36 

03:36 Throughout this presentation, please
03:38 

03:38 feel free to type your questions for the
03:39 

03:39 trainers in the questions section.
03:42 

03:42 All the questions that are being asked
03:43 

03:43 will be moved over to a Q&A document,
03:46 

03:46 and you'll be able to view all the
03:47 

03:47 questions and answers at the end of this
03:49 

03:49 presentation
03:51 

03:51 during our Q&A session in a document,
03:54 

03:54 and then we also answer those audibly.
03:56 

03:56 And we'll also provide this Q&A document
04:00 

04:00 as a resource as a PDF, and we'll put
04:02 

04:02 that on our training webpage within a
04:05 

04:05 week. We just need to clean it up for
04:06 

04:06 accuracy, and you're able to obtain that
04:08 

04:08 from there.
04:11 

04:11 So now, I will hand this off to our
04:13 

04:13 first train trainer today, Jordan
04:16 

04:16 Carballo Vega, to introduce us to part
04:19 

04:19 one.
04:20 

04:20 Thank you, Jordan.
04:25 

04:25 Thank you very much, everyone, for
04:27 

04:27 attending today. We're going to be
04:29 

04:29 talking about some of the fundamentals
04:30 

04:30 of machine learning for Earth Science.
04:33 

04:33 The part one is going to be an overview
04:35 

04:35 of some of these algorithms and some of
04:37 

04:37 the applications.
04:39 

04:39 So, we have the instructor team. We have
04:41 

04:41 Jordan Carballo Vega, which is myself.
04:43 

04:43 We have Mark Carroll, which is our lead
04:46 

04:46 the data science group at GSFC.
04:48 

04:48 We have Jules Cacho
04:50 

04:50 at GSFC as well. We have Jian Li,
04:54 

04:54 and we have Caleb Spratlin, which also
04:56 

04:56 works for the data science group.
04:59 

04:59 The outline is for today's session.
05:01 

05:01 We're going to first look at an overview
05:03 

05:03 of machine learning, some of the
05:05 

05:05 fundamentals and basic concepts.
05:07 

05:07 We're going to then look at the
05:08 

05:08 importance of machine learning targeted
05:10 

05:10 towards Earth science and some of the
05:12 

05:12 applications
05:13 

05:13 that support this. We're going to see
05:15 

05:15 how usable machine learning algorithms
05:17 

05:17 are
05:18 

05:18 for remote sensing data. We're going to
05:20 

05:20 discuss some of the software that
05:21 

05:21 supports some of these machine learning
05:23 

05:23 algorithms.
05:24 

05:24 We're going to talk about some of the
05:26 

05:26 applications in detail, and then we're
05:28 

05:28 going to have a single hands-on
05:29 

05:29 experiment just to use Google Colab and
05:32 

05:32 then load and visualize some of the
05:34 

05:34 data.
05:35 

05:35 After this, we're going to have a
05:37 

05:37 post-session assignment that we're going
05:39 

05:39 to briefly discuss, and then we can
05:41 

05:41 proceed with the Q&A session.
05:43 

05:43 For all of the three sessions that we're
05:44 

05:44 going to discuss,
05:46 

05:46 we have this Git GitHub repository where
05:48 

05:48 going to have the resources and all of
05:50 

05:50 the materials that you can use later on
05:52 

05:52 after the session is done.
05:55 

05:55 The objectives of today,
05:58 

05:58 after participating in this training,
05:60 

06:00 attendees will be able to recognize the
06:02 

06:02 most common machine learning methods
06:05 

06:05 used for processing Earth science data.
06:08 

06:08 They're going to be able to describe the
06:09 

06:09 benefits and limitations of machine
06:11 

06:11 learning for Earth science analysis.
06:14 

06:14 And they're going to be able to explain
06:16 

06:16 how to apply some of these basic machine
06:18 

06:18 learning algorithms and techniques in a
06:20 

06:20 meaningful manner for remote sensing
06:22 

06:22 data.
06:24 

06:24 Jules, please take it over.
06:30 

06:30 In 1959,
06:32 

06:32 Arthur Samuel introduced the concept of
06:34 

06:34 machine learning with the following
06:36 

06:36 quote.
06:37 

06:37 Machine learning enable machine to
06:40 

06:40 automatically learn from data,
06:42 

06:42 improve performance from experiences,
06:45 

06:45 and predict things without being
06:47 

06:47 explicitly programmed.
06:50 

06:50 Machine learning can be understood as
06:52 

06:52 computational methods that use
06:55 

06:55 experience to improve performance or
06:58 

06:58 make accurate prediction.
07:01 

07:01 In this case,
07:02 

07:02 experience refer to past information or
07:05 

07:05 data that is available to us.
07:09 

07:09 As with any computational exercise,
07:13 

07:13 the quality and amount of the data will
07:15 

07:15 be crucial to the accuracy of the
07:17 

07:17 prediction that will be made.
07:20 

07:20 The major focus of machine learning is
07:23 

07:23 to extract information from data
07:25 

07:25 automatically by computational and
07:28 

07:28 statistical methods.
07:31 

07:31 How does machine learning works?
07:34 

07:34 The following diagram give us some kind
07:36 

07:36 of overview of the main step of machine
07:38 

07:38 learning. And in the following slide, we
07:41 

07:41 are going to go into more details.
07:45 

07:45 A machine learning algorithm can be seen
07:47 

07:47 as a mathematical function containing
07:50 

07:50 many free parameters, thousand, even
07:53 

07:53 millions,
07:55 

07:55 that take input that we'll call
07:57 

07:57 features,
07:58 

07:58 and map those features into one or more
08:02 

08:02 output that we'll call also target.
08:06 

08:06 The process of training a machine
08:08 

08:08 learning algorithm involve optimizing
08:11 

08:11 the free parameters
08:13 

08:13 to map the features to the target
08:16 

08:16 accurately.
08:18 

08:18 New input data
08:20 

08:20 that we'll call the test data is fed
08:23 

08:23 into the machine learning algorithm to
08:26 

08:26 test whether the method works correctly.
08:30 

08:30 The prediction and result are then
08:32 

08:32 checked against each other.
08:34 

08:34 A numerical score is then calculated.
08:39 

08:39 If the prediction and result don't match
08:41 

08:41 well,
08:42 

08:42 the method is retrained multiple time
08:45 

08:45 until the data scientist get the desired
08:47 

08:47 outcome.
08:49 

08:49 This enable the machine learning method
08:52 

08:52 to continually learn on its own and
08:54 

08:54 produce optimal answer, gradually
08:57 

08:57 increasing in accuracy over time.
09:03 

09:03 Now, here are the basic simplified step
09:06 

09:06 of machine learning.
09:08 

09:08 First of all, you need to state the
09:09 

09:09 problem.
09:11 

09:11 You need to gather and then gather the
09:13 

09:13 data.
09:15 

09:15 And after that, we have to do some kind
09:17 

09:17 of data pre-processing.
09:20 

09:20 It's important to mention that this data
09:22 

09:22 pre-processing it might be the most
09:23 

09:23 important step of machine learning.
09:26 

09:26 People believe that 80% of the time need
09:28 

09:28 to spend on data processing. And we are
09:31 

09:31 going to see in session number two, when
09:34 

09:34 we are going to learn about exploratory
09:35 

09:35 data analysis, it's where really the
09:38 

09:38 focus will be on.
09:40 

09:40 After that,
09:42 

09:42 we need to go to the process of
09:44 

09:44 to of training the model.
09:47 

09:47 The data set connect the algorithm, and
09:50 

09:50 the method leverages sophisticated
09:53 

09:53 mathematical modeling to learn and
09:55 

09:55 develop prediction.
09:58 

09:58 When the model is trained,
09:60 

09:60 we need to go to the the process of
10:02 

10:02 testing the model.
10:03 

10:03 We use a test set to check the model's
10:06 

10:06 accuracy.
10:08 

10:08 And finally, the last step,
10:10 

10:10 we need to improve,
10:12 

10:12 review the model result,
10:15 

10:15 reconsider the method selected,
10:18 

10:18 we make adjustment by changing some kind
10:21 

10:21 of parameters and see if you can improve
10:24 

10:24 the performance.
10:25 

10:25 Sometimes, small adjustment have a
10:28 

10:28 significant impact.
10:34 

10:34 Machine learning algorithm.
10:37 

10:37 There are two broad categories of
10:40 

10:40 machine learning method relevant in most
10:42 

10:42 Earth science application.
10:45 

10:45 The first one, supervised learning.
10:49 

10:49 It involved presenting a machine
10:51 

10:51 learning method with many example of
10:54 

10:54 input-output pairs,
10:56 

10:56 called the training set.
10:59 

10:59 Can be further divided according to the
11:01 

11:01 type of target that is being learned.
11:04 

11:04 Has either categorical, this means that
11:07 

11:07 we deal with classification a
11:08 

11:08 classification problem, or continuous,
11:12 

11:12 and we'll deal with a regression
11:13 

11:13 problem.
11:15 

11:15 Like for instance, the temperature at
11:17 

11:17 the given location on Earth.
11:21 

11:21 The model is trained with labeled data
11:23 

11:23 set,
11:24 

11:24 which allow the model to learn and grow
11:26 

11:26 more accurate over time.
11:30 

11:30 The second category,
11:32 

11:32 unsupervised learning.
11:34 

11:34 In this particular category, algorithm
11:37 

11:37 are not given a particular target to
11:40 

11:40 predict.
11:41 

11:41 Rather,
11:42 

11:42 an algorithm task is to learn the
11:45 

11:45 natural structure to identifying
11:48 

11:48 patterns or trend in the data set
11:51 

11:51 without being told what structure it is.
11:55 

11:55 Here, the model looks for patterns in
11:58 

11:58 unlabeled data.
12:01 

12:01 A third category,
12:02 

12:02 reinforcement learning, is not commonly
12:05 

12:05 used in Earth science.
12:07 

12:07 Here, the model trains machine through
12:10 

12:10 trials and error to take the best action
12:14 

12:14 by establishing a reward system.
12:21 

12:21 Big data in Earth science.
12:25 

12:25 The amount of data from observation and
12:28 

12:28 output model is exploding.
12:31 

12:31 The data is characterized as being
12:33 

12:33 massive, multi-source, heterogeneous,
12:37 

12:37 multi-temporal, multi-scalar,
12:40 

12:40 highly dimensional, highly complex,
12:43 

12:43 non-stationary,
12:45 

12:45 and unstructured.
12:47 

12:47 Our ability to collect and create data
12:50 

12:50 far out outpaces our ability to sensibly
12:54 

12:54 assimilate it, let alone understand it.
12:59 

12:59 To get the most out of the explosive
13:01 

13:01 growth and diversity of Earth system
13:04 

13:04 data,
13:06 

13:06 we face at least two major task.
13:09 

13:09 Extracting knowledge and insight from
13:11 

13:11 the large and complex collection of
13:14 

13:14 data, and
13:16 

13:16 deriving models that learn much more
13:19 

13:19 from data than traditional data
13:21 

13:21 assimilation approaches can,
13:24 

13:24 whilst still respecting our evolving
13:26 

13:26 understanding of nature's laws.
13:30 

13:30 Machine learning is now a successful
13:33 

13:33 part of several research-driven and
13:36 

13:36 operational geo- scientific processing
13:39 

13:39 schemes, addressing the atmosphere, the
13:42 

13:42 land surface, and the ocean, and has
13:46 

13:46 co-evolved with data availability.
13:53 

13:53 Machine learning in Earth science.
13:56 

13:56 I like this this quote that was written
13:59 

13:59 in an article
14:01 

14:01 in 2021
14:03 

14:03 that shows the importance of machine
14:06 

14:06 learning in geo-science for research and
14:10 

14:10 training.
14:12 

14:12 Basically,
14:13 

14:13 the goal here is to show how critical
14:17 

14:17 is to do some research to provide
14:19 

14:19 funding in
14:21 

14:21 machine learning and also to train
14:23 

14:23 people in how to use machine learning
14:26 

14:26 algorithm in Earth science.
14:29 

14:29 And that is the goal of this the
14:31 

14:31 particular training that we are having
14:32 

14:32 today.
14:42 

14:42 Machine learning
14:44 

14:44 has been applied to many domain in Earth
14:46 

14:46 science. We can mention for instance,
14:49 

14:49 land cover and land use classification,
14:53 

14:53 precipitation and swarm moisture
14:56 

14:56 estimation,
14:57 

14:57 cloud processes representation in
14:59 

14:59 climate models,
15:01 

15:01 crop type detection and crop yield
15:03 

15:03 prediction,
15:05 

15:05 estimation of water, carbon, and energy
15:08 

15:08 fluxes between the land and atmosphere,
15:11 

15:11 special downscaling of satellite
15:13 

15:13 observations, ocean turbulence modeling,
15:17 

15:17 tropical cyclone and intensity
15:19 

15:19 estimation.
15:21 

15:21 There are many other domain where
15:23 

15:23 machine learning can be applied in Earth
15:26 

15:26 science.
15:30 

15:30 How machine learning is applied in Earth
15:32 

15:32 science.
15:34 

15:34 An illustration of model-driven and
15:37 

15:37 data-driven method.
15:41 

15:41 On the left
15:42 

15:42 are the research topic in, let's say, in
15:46 

15:46 Earth science.
15:48 

15:48 On the right, we have the observations.
15:52 

15:52 In the middle are examples of
15:54 

15:54 model-driven and data-driven method.
15:58 

15:58 In model-driven methods,
16:00 

16:00 the principle of geophysical phenomena
16:04 

16:04 are induced from a large amount of
16:07 

16:07 observed data based on physical
16:09 

16:09 causality.
16:11 

16:11 Then, the models are used to deduct the
16:14 

16:14 geophysical phenomena in the future or
16:17 

16:17 in the past.
16:18 

16:18 This approach can be limited by the
16:21 

16:21 difficulties of finding patterns where
16:24 

16:24 we don't expect them.
16:28 

16:28 In data-driven method,
16:30 

16:30 the computer first induct a regression
16:34 

16:34 or classification model without
16:36 

16:36 considering physical causality.
16:39 

16:39 Then, this model will perform task such
16:41 

16:41 as classification on incoming data set.
16:46 

16:46 The use of machine learning here can
16:49 

16:49 help us discover patterns and trend
16:52 

16:52 buried between vast volume of data that
16:56 

16:56 are not apparent of human are not
16:59 

16:59 apparent to
17:00 

17:00 human analysis.
17:03 

17:03 Machine learning technique learn
17:05 

17:05 relationship among physical parameters
17:08 

17:08 from both input and output data
17:11 

17:11 in contrast to traditional of physical
17:13 

17:13 modeling method in which modeler
17:17 

17:17 explicitly account for those
17:19 

17:19 relationship when they set up a model.
17:29 

17:29 So, in the next session, I will talk
17:31 

17:31 about the benefit of utilizing machine
17:33 

17:33 learning in Earth science. As machine
17:35 

17:35 learning application became very popular
17:38 

17:38 in the industry about a decade ago, NASA
17:41 

17:41 scientist also quickly realized that
17:44 

17:44 such technology can greatly accelerate
17:47 

17:47 the scientific researches in many
17:49 

17:49 aspects. I just point out a few examples
17:52 

17:52 here.
17:53 

17:53 First of all, using machine learning
17:55 

17:55 tools can increase the efficiency of
17:58 

17:58 processing and analyzing large amount of
18:01 

18:01 data.
18:02 

18:02 Every day, NASA collects tons of data by
18:05 

18:05 observing our Earth and outer space.
18:08 

18:08 And such amount of data increasing every
18:12 

18:12 second. It's a big challenge to process
18:15 

18:15 those data in a traditional way.
18:18 

18:18 But, we can use some machine learning
18:20 

18:20 algorithm to simplify and automate
18:23 

18:23 analysis such complex data sets.
18:27 

18:27 Secondly,
18:28 

18:28 machine learning algorithms have proved
18:31 

18:31 its capability to identify objects,
18:34 

18:34 patterns, and relationships in complex
18:37 

18:37 data set.
18:38 

18:38 Sometimes, it can provide insights
18:41 

18:41 that's that's even difficult to be
18:43 

18:43 identified by our human eyes.
18:46 

18:46 And those insights often leading to a
18:49 

18:49 new discoveries.
18:51 

18:51 Last but not least, we can apply machine
18:54 

18:54 learning algorithm to to the areas where
18:56 

18:56 we are lack lack of observations and
18:59 

18:59 making predictions over there. Or in
19:02 

19:02 some cases, we can even use machine
19:05 

19:05 learning algorithms to replace physical
19:07 

19:07 models and make better predictions of
19:11 

19:11 Earth science phenomena.
19:13 

19:13 I will provide two use cases among many
19:17 

19:17 in the following slides.
19:21 

19:21 The first use case is
19:24 

19:24 uh to NASA scientist use machine
19:27 

19:27 learning algorithms to identify new
19:29 

19:29 stars and star systems.
19:32 

19:32 The uh
19:34 

19:34 the data was collected by instrument
19:36 

19:36 called the Transiting
19:38 

19:38 Exoplanet Survey Satellite Test, in
19:41 

19:41 short. The satellite was launched in
19:44 

19:44 April 2018. The mission is to search for
19:47 

19:47 planets outside our solar systems,
19:50 

19:50 including those planets that suitable
19:53 

19:53 for life.
19:55 

19:55 And the test satellite collecting tons
19:58 

19:58 of data
19:59 

19:59 uh
20:01 

20:01 every day and allow scientists to view
20:03 

20:03 the amount of optical lights
20:06 

20:06 arriving from the stars over time. It's
20:08 

20:08 called light curves. But it also
20:11 

20:11 provides a challenge because it's nearly
20:13 

20:13 impossible to thoroughly investigate the
20:16 

20:16 terabytes of astronomi- astronomical
20:19 

20:19 data to find a rare phenomenon
20:22 

20:22 such as multiple star systems.
20:25 

20:25 But NASA scientist Brian Poll and his
20:27 

20:27 colleagues have developed a and
20:30 

20:30 leveraged a set of machine learning and
20:33 

20:33 high-performance computing tools.
20:35 

20:35 Therefore, they can quickly extract more
20:38 

20:38 than 60 60 million light curves from for
20:42 

20:42 further investigations.
20:44 

20:44 And based on those uh
20:46 

20:46 filtered uh light curves,
20:49 

20:49 NASA astronomers have identified more
20:52 

20:52 than 50
20:53 

20:53 more than 50 planet candidates and more
20:56 

20:56 than 200 potential binary star systems
20:60 

20:60 and more than 10 potential triple star
21:02 

21:02 system and a 20 potential quadruple star
21:06 

21:06 systems.
21:07 

21:07 And uh even one potential
21:11 

21:11 sextu- tuple star systems. And it to
21:15 

21:15 be clear, all those discovers
21:19 

21:19 are new. That means we have human being
21:22 

21:22 have never identified such solar systems
21:25 

21:25 and plan- planet previously.
21:29 

21:29 The second example I provide here is a
21:32 

21:32 corporation between NASA Goddard Center
21:34 

21:34 and uh Millennium Challenge Corporation
21:37 

21:37 MCC. One of the goal of this corporation
21:41 

21:41 is to investigate in uh agriculture
21:44 

21:44 development projects to empower local
21:48 

21:48 uh farmers and to combat with uh food
21:51 

21:51 insecurity.
21:52 

21:52 And uh
21:53 

21:53 research scientists use Sentinel-2
21:56 

21:56 remote sensing data and in situ
21:58 

21:58 observations
21:60 

21:60 uh to train a five different random
22:02 

22:02 forest model to estimate crop types and
22:06 

22:06 crop yield across the study area
22:08 

22:08 uh region of uh
22:11 

22:11 Burkina Faso.
22:14 

22:14 Uh and it's turned out the model shows
22:17 

22:17 more than 88% accuracy on crop types and
22:21 

22:21 a 60% on crop yields during the 2019
22:25 

22:25 rainy season.
22:27 

22:27 And uh accuracy drops slightly to 64%
22:31 

22:31 and 53%
22:33 

22:33 re- uh respectively during the 2019 dry
22:36 

22:36 seasons.
22:37 

22:37 But it provide impressive
22:40 

22:40 uh accuracy to predict uh
22:43 

22:43 crop type for year 2020 dry season. It
22:48 

22:48 had it It has a 60% accuracy for the
22:52 

22:52 crop types. And uh remember, that year
22:55 

22:55 we don't have any training data so
22:58 

22:58 available.
22:59 

22:59 Therefore, the
23:03 

23:03 the machine learning model actually
23:05 

23:05 filled the gaps
23:07 

23:07 to predict the crop types
23:10 

23:10 when we don't have any observation data
23:13 

23:13 in that areas.
23:21 

23:21 In the past many years, we have a build
23:23 

23:23 a quite broad tech communities around
23:26 

23:26 the concept of machine learning
23:28 

23:28 including companies that provide
23:31 

23:31 computing resources, commercial
23:33 

23:33 companies and open-source communities
23:35 

23:35 develop a tons of softwares and the
23:38 

23:38 programming packages,
23:39 

23:39 data uh database services, programming
23:43 

23:43 interface, IDE and so on and so forth.
23:46 

23:46 There's no way to provide a
23:48 

23:48 comprehensive list of uh technique we're
23:51 

23:51 going to use in machine learning uh
23:54 

23:54 applications.
23:55 

23:55 Uh and uh such list, even it exist, will
24:01 

24:01 change year to year and rapidly. So, I
24:04 

24:04 will just scratch a very surface of this
24:06 

24:06 tech stacks and introducing in a few
24:10 

24:10 commonly used programming language and
24:12 

24:12 packages in machine learning.
24:19 

24:19 So, I will start with a program language
24:21 

24:21 and go into the
24:24 

24:24 uh
24:25 

24:25 pro- uh programming libraries and
24:27 

24:27 packages. At the top of the list, Python
24:30 

24:30 is most used program language in machine
24:33 

24:33 learning due to its independence across
24:35 

24:35 platform, flexibility, simplicity, and
24:39 

24:39 uh
24:40 

24:40 the Python code is often concise and
24:43 

24:43 readable. It also have massive or
24:45 

24:45 reliable libraries or packages ready to
24:48 

24:48 reduce your software development time
24:52 

24:52 sig- significantly.
24:55 

24:55 The second language is R. R is widely
24:58 

24:58 popular uh
24:60 

24:60 is very popular because it's a
25:02 

25:02 build It's a built in to perform
25:05 

25:05 mathematic and statistical calculation
25:08 

25:08 on big data.
25:09 

25:09 It's still very popular for conducting
25:11 

25:11 statistical analysis in many industrial.
25:14 

25:14 So, I would not be surprised if to see a
25:16 

25:16 data scientist to use R as their working
25:20 

25:20 language.
25:21 

25:21 And uh third language is Java
25:25 

25:25 because Java is uh very
25:27 

25:27 uh very popular in development mobile
25:31 

25:31 apps. And uh
25:34 

25:34 we can imagine how many mobile apps will
25:36 

25:36 take advantage of artificial
25:38 

25:38 intelligence and it's a perfect match
25:41 

25:41 for those programmer who
25:43 

25:43 uh who main job task is to building
25:46 

25:46 mobile apps using machine learning or
25:48 

25:48 AI.
25:51 

25:51 And uh we also have a Julia. Julia is
25:54 

25:54 one of the newer language and it's
25:58 

25:58 mainly targeting on computing scientific
26:02 

26:02 and uh
26:03 

26:03 technical field. And uh
26:06 

26:06 it it's starting more users of Julia as
26:10 

26:10 a
26:10 

26:10 uh
26:11 

26:11 among the programmers.
26:19 

26:19 So, in summary, uh
26:20 

26:20 I think all programming languages have
26:23 

26:23 its similarity. If you are mastered with
26:27 

26:27 uh logic and structure of one language,
26:30 

26:30 it's relatively easy for you to adopt to
26:33 

26:33 a different program language. You just
26:35 

26:35 need to relearn the syntax if you have
26:38 

26:38 to relearn a new new program language.
26:41 

26:41 But the the backbone of each program
26:45 

26:45 language are similar. You just need to
26:47 

26:47 understand the logic and structure of
26:49 

26:49 the coding.
26:56 

26:56 In the following slides, I will
26:57 

26:57 emphasize on introducing Python packages
27:01 

27:01 for machine learning because based on
27:02 

27:02 2021 Kaggle survey among data scientist,
27:06 

27:06 Python based to dominate the machine
27:08 

27:08 learning frameworks. That's also the
27:11 

27:11 case
27:12 

27:12 for our group.
27:15 

27:15 Uh among all those uh instructors, we
27:18 

27:18 are heavily reliant on Python packages
27:21 

27:21 to conduct our day-to-day work. So, we
27:23 

27:23 have uh
27:25 

27:25 more familiarity with this language and
27:28 

27:28 uh
27:28 

27:28 the packages associated with it.
27:31 

27:31 A few fun facts from that uh Kaggle
27:35 

27:35 survey is that
27:37 

27:37 uh among those Python tools, 80% of data
27:42 

27:42 scientists use scikit-learn for their
27:45 

27:45 machine learning uh
27:47 

27:47 applications.
27:49 

27:49 And uh TensorFlow and Keras
27:52 

27:52 uh was mostly used for building deep
27:55 

27:55 learning models. And actually boost is
27:57 

27:57 quite popular choice if you wanted to
27:60 

27:60 train a gradient boosting model.
28:04 

28:04 I believe all of you use some of this
28:07 

28:07 tools during the notebook session of
28:09 

28:09 this training.
28:15 

28:15 In the next few slides, I will go a
28:17 

28:17 little bit deeper into
28:20 

28:20 introducing each of this packages or
28:24 

28:24 frameworks I mentioned above.
28:27 

28:27 And uh at the top of my list,
28:29 

28:29 scikit-learn is definitely definitely
28:32 

28:32 the Swiss knife of machine learning. It
28:35 

28:35 provides vast functionality to implement
28:38 

28:38 machine learning algorithm such as
28:40 

28:40 classification,
28:42 

28:42 uh regression, clustering algorithm,
28:44 

28:44 dimensionality dimensional reduction,
28:47 

28:47 model selection, data pre-processing and
28:50 

28:50 so on and so forth.
28:52 

28:52 And uh it also have uh very wonderful
28:56 

28:56 website provide thorough documentation
28:58 

28:58 to help you understand and use it those
29:01 

29:01 function.
29:02 

29:02 I will strongly recommend to start your
29:04 

29:04 journey of machine learning from
29:06 

29:06 scikit-learn.
29:08 

29:08 And the TensorFlow and Keras as I
29:10 

29:10 mentioned above are two high-level
29:12 

29:12 Python frameworks to help you build and
29:15 

29:15 the train neural network models or
29:18 

29:18 somebody call them deep learning models.
29:22 

29:22 Besides those two packages, PyTorch is
29:24 

29:24 another uh option for deep learning
29:27 

29:27 model. Each frameworks has its own
29:30 

29:30 advantage and disadvantage. You may
29:32 

29:32 choose uh different frameworks based on
29:36 

29:36 your requirement of your specific tasks.
29:41 

29:41 Also, a frameworks also pro- provide
29:43 

29:43 plenty of examples and in instructions
29:46 

29:46 in their website.
29:51 

29:51 On this slide, I will introduce
29:54 

29:54 some utility softwares surrounding
29:58 

29:58 machine learning. First of all, Jupyter
30:01 

30:01 Notebook
30:02 

30:02 is not
30:03 

30:03 only developed developed for machine
30:06 

30:06 learning, but because it's provide a
30:08 

30:08 web-based interactive coding
30:10 

30:10 environment, notebooks become a great
30:13 

30:13 way to build prototype or sharing your
30:16 

30:16 models with other colleagues or friends.
30:19 

30:19 We will gain a lot of hand-on experience
30:21 

30:21 during this training with notebooks
30:25 

30:25 later on.
30:26 

30:26 And Matplotlib and Seaborn are two
30:29 

30:29 visualization libraries often used by
30:32 

30:32 data scientists for examining their
30:35 

30:35 datasets and their machine learning
30:37 

30:37 results.
30:46 

30:46 In this slide, I would like to touch
30:49 

30:49 uh a little bit about graphic processing
30:52 

30:52 unit GPU role in machine learning.
30:56 

30:56 Because not all, but many machine
30:58 

30:58 learning algorithms can divide tasks
31:01 

31:01 into thousands of smaller subtasks and
31:04 

31:04 the process them all at the same time.
31:06 

31:06 For instance, most often neural networks
31:09 

31:09 are designed to run in parallel.
31:11 

31:11 Therefore, GPU has uh
31:15 

31:15 perfect match
31:17 

31:17 for such tasks because GPU can have
31:20 

31:20 thousands of cores that can run
31:23 

31:23 operations in parallel on multiple data
31:25 

31:25 points.
31:26 

31:26 In this way, GPU can provide massive
31:29 

31:29 acceleration for machine learning
31:31 

31:31 training and predictions. There are many
31:34 

31:34 platforms to
31:36 

31:36 support parallel computing with GPUs.
31:39 

31:39 Out of them, CUDA, developed by Nvidia,
31:42 

31:42 is the most popular one because CUDA can
31:45 

31:45 run on both Windows and Linux
31:48 

31:48 operational system and many Python
31:50 

31:50 libraries such as TensorFlow, Keras,
31:53 

31:53 PyTorch, XGBoost, OpenCV, etc. can be
31:57 

31:57 run on Nvidia CUDA-enabled graphic
31:59 

31:59 cards. So, you can take advantage of
32:03 

32:03 high-speed computing of GPU and the
32:05 

32:05 train your models
32:14 

32:14 So, now we're going to introduce some of
32:16 

32:16 these machine learning algorithms. And
32:19 

32:19 note that we're going to only introduce
32:21 

32:21 some of the basics and the fundamentals
32:23 

32:23 of these. They're going to provide you
32:25 

32:25 with the base then to infer from other
32:29 

32:29 algorithms that can be
32:31 

32:31 been released out there.
32:33 

32:33 Now, one of the main questions that we
32:35 

32:35 normally raise is which algorithm to
32:38 

32:38 choose.
32:39 

32:39 We have many machine learning algorithms
32:42 

32:42 being released on a weekly basis for
32:45 

32:45 many applications, particularly on Earth
32:47 

32:47 science and even on general purpose
32:50 

32:50 applications.
32:51 

32:51 The development of machine learning
32:53 

32:53 algorithms has just been exponentially
32:55 

32:55 increasing over the past few years.
32:58 

32:58 And many of these, they relies on
33:01 

33:01 foundations of models that people
33:03 

33:03 normally just modify for their own
33:06 

33:06 applications.
33:07 

33:07 So, we will not dive into the specifics
33:11 

33:11 of each one of those algorithms, but we
33:13 

33:13 will provide the tools to aid the
33:16 

33:16 selection of some of these for your
33:18 

33:18 Earth science problem. We're going to
33:20 

33:20 introduce some of the actual mathematic
33:22 

33:22 basics of them, but we're going to also
33:24 

33:24 provide hints or highlights on how many
33:27 

33:27 of these algorithms can be a good fit
33:30 

33:30 for your own application based on
33:32 

33:32 specific questions.
33:35 

33:35 Just to be clear, you're never bounded
33:37 

33:37 to a single algorithm. You can choose an
33:39 

33:39 algorithm now and might be able to
33:42 

33:42 change the algorithm along the
33:44 

33:44 development process, but it's always
33:46 

33:46 good to start from a good base or from
33:49 

33:49 at least a core base that you can then
33:52 

33:52 start working on your way to like other
33:55 

33:55 applications.
33:57 

33:57 On the right side, we have kind of
33:59 

33:59 a diagram of some of these huge numbers
34:02 

34:02 of algorithms that we have. But note how
34:04 

34:04 they go from a natural branch, let's say
34:06 

34:06 supervised learning, but then they kind
34:09 

34:09 of divide into that same base where like
34:11 

34:11 classification or regression or they
34:14 

34:14 just modify, let's say, some of the ways
34:16 

34:16 they approach the mechanisms of
34:20 

34:20 predicting the target that we're looking
34:21 

34:21 for.
34:24 

34:24 So, first thing that we need to do
34:26 

34:26 before choosing an algorithm is to
34:29 

34:29 specify the science problem.
34:31 

34:31 It's not a good practice to just go
34:33 

34:33 ahead and say, "I'm going to use machine
34:36 

34:36 learning for my problem." without
34:37 

34:37 knowing how machine learning will
34:39 

34:39 benefit your problem or your
34:41 

34:41 application. So, the first step that we
34:43 

34:43 need to do is to identify the science
34:45 

34:45 problem and what scientific questions we
34:48 

34:48 want to answer.
34:49 

34:49 From there, we can go down through all
34:52 

34:52 of these steps of the machine learning
34:53 

34:53 workflow where we identify our data.
34:56 

34:56 We test and see how the performance
34:59 

34:59 is going to be on our application and
35:02 

35:02 what performance are we required to have
35:04 

35:04 for this specific application.
35:06 

35:06 We also We also go by and check on the
35:09 

35:09 explainability of our model. How much do
35:12 

35:12 we need to explain our model in order to
35:15 

35:15 trust it for a specific application? An
35:18 

35:18 example here is that for disaster
35:19 

35:19 response, you're probably not going to
35:21 

35:21 be comfortable using an algorithm that
35:24 

35:24 is just a black box that you just just
35:27 

35:27 don't understand that much. So, you
35:29 

35:29 probably end up having an algorithm that
35:31 

35:31 you can understand its decision
35:33 

35:33 decisions and drivers to avoid false
35:36 

35:36 positives or false negatives.
35:39 

35:39 The other concept that we need to look
35:41 

35:41 into play is the dimensionality of our
35:42 

35:42 data.
35:43 

35:43 What are the dimensions of the of our
35:45 

35:45 data? Do we need need to reduce the
35:48 

35:48 dimensions of our data to find more
35:50 

35:50 actionable results? Do we need to look
35:52 

35:52 at specifics of how to do feature
35:54 

35:54 engineering to improve our dataset in
35:57 

35:57 order to find some of these solutions?
35:60 

35:60 Okay. So, now let's just dive into some
36:02 

36:02 of these questions. And while I start
36:04 

36:04 discussing some of them, feel free to
36:06 

36:06 think about your specific problem in
36:08 

36:08 hand and how would you answer some of
36:10 

36:10 these based on your application?
36:13 

36:13 Our first question is which scientific
36:15 

36:15 questions would you like to address and
36:18 

36:18 what information is missing to answer
36:20 

36:20 this question?
36:21 

36:21 Well, the first answer to this is that
36:23 

36:23 in this application or in this use case
36:26 

36:26 during session one and two, we'll be
36:29 

36:29 wanting to identify the signs, the
36:31 

36:31 magnitude, and the potential drivers of
36:34 

36:34 change in surface water extent in X
36:37 

36:37 study area. In our case, we're going to
36:40 

36:40 select X as being Lake Powell in the
36:42 

36:42 United States, but your study area can
36:45 

36:45 be as small as a single site,
36:48 

36:48 as big as multiple sites, and then it
36:51 

36:51 can also be considered as temporary and
36:54 

36:54 spatially different. You can have a
36:56 

36:56 single year that you might be looking at
36:59 

36:59 or you can have multiple years and dates
37:01 

37:01 that you're going to be looking at when
37:03 

37:03 selecting the algorithm.
37:05 

37:05 In regards to the information that might
37:07 

37:07 that might be missing, we actually need
37:09 

37:09 to compute and do and create surface
37:13 

37:13 water extent maps to quantify and
37:15 

37:15 analyze these drivers.
37:17 

37:17 So, we know what is missing. We know
37:19 

37:19 what is missing out there from
37:20 

37:20 literature and it's these surface water
37:22 

37:22 extent maps across our temporal and then
37:25 

37:25 spatial domain.
37:28 

37:28 Once we know what is our problem and how
37:31 

37:31 we want to solve it, we need to look at
37:33 

37:33 what data do you have available?
37:35 

37:35 How much training data do you have
37:37 

37:37 available, if you have any, and then
37:40 

37:40 what is going to be the data structure
37:41 

37:41 of your data in question?
37:44 

37:44 Based on the dataset structure that you
37:46 

37:46 might have, you can go through this tree
37:49 

37:49 and kind of have an idea of which
37:51 

37:51 algorithms might be useful based on your
37:53 

37:53 use case. For example,
37:57 

37:57 let's say that of, let's say,
37:59 

37:59 categorical options. Let's say that we
38:01 

38:01 want to identify land cover in a
38:03 

38:03 particular map where we go from one that
38:05 

38:05 is a tree, two that is crop, three that
38:08 

38:08 is building or structures, and so forth.
38:12 

38:12 If we have the data in spatial format,
38:14 

38:14 let's say in raster where each one of
38:16 

38:16 those pixels is an observation, we can
38:20 

38:20 go through algorithms that use spatial
38:22 

38:22 extent as a driver for performing those
38:25 

38:25 classifications.
38:26 

38:26 One example of those algorithms could be
38:29 

38:29 a convolutional neural network where we
38:31 

38:31 take spatial and spectral responses from
38:34 

38:34 our raster to then perform the
38:35 

38:35 classification.
38:38 

38:38 Now, let's say that we only have
38:39 

38:39 point-wise data. We only have tabular
38:41 

38:41 data format where we don't have any
38:43 

38:43 spatial information of our data. Well,
38:46 

38:46 for that end, we could go for an
38:48 

38:48 algorithm that is not going to care
38:49 

38:49 about that much about the spatial, but
38:52 

38:52 more about the spectral response. And
38:54 

38:54 some of those algorithms could be a
38:56 

38:56 random forest, could be an XGBoost
38:58 

38:58 algorithms where we are only looking at
39:01 

39:01 the column features of that observation,
39:04 

39:04 we are caring about the neighborhood of
39:06 

39:06 that pixel.
39:07 

39:07 Another example is on the continuous
39:10 

39:10 side of things. We might have a target
39:13 

39:13 variable that is not a categorical
39:15 

39:15 option, but it's kind of a regression
39:16 

39:16 option or a continuous value.
39:19 

39:19 Think about some applications like lake
39:21 

39:21 depth. Think about canopy height models
39:24 

39:24 where you want to actually
39:26 

39:26 identify the height of that particular
39:28 

39:28 pixel or that particular object. In this
39:31 

39:31 case, we also have the option of having
39:33 

39:33 data in a spatial or tabular format. If
39:36 

39:36 we have a spatial
39:38 

39:38 uh data structure, we might be able to
39:41 

39:41 also leverage convolutional neural
39:43 

39:43 networks or even transformers
39:46 

39:46 to then increase our way of looking at
39:49 

39:49 both the spectral response, but also the
39:52 

39:52 neighboring pixels across that
39:54 

39:54 particular observation.
39:56 

39:56 This can be a way of quantifying the way
40:01 

40:01 we learn
40:02 

40:02 through the model or the way the way we
40:04 

40:04 represent our actual training data.
40:07 

40:07 Assuming we have the data on a tabular
40:09 

40:09 format, we could also use another
40:12 

40:12 deviation of the random forest forest,
40:14 

40:14 which would be a random forest
40:15 

40:15 regressor.
40:17 

40:17 We can also use things like neural
40:19 

40:19 networks where we only look at specific
40:22 

40:22 pixels and then take decisions and train
40:24 

40:24 a model based based on that.
40:27 

40:27 Now, let's answer some of these
40:28 

40:28 questions with our use case for session
40:30 

40:30 one and two.
40:32 

40:32 The data we have available is going to
40:33 

40:33 be the global coverage we have with
40:36 

40:36 MODIS satellite data. We're going to be
40:38 

40:38 using data from the MODIS instrument,
40:41 

40:41 and we do have global coverage from this
40:43 

40:43 instrument across several temporal
40:46 

40:46 windows.
40:47 

40:47 Do we have the training data available?
40:50 

40:50 Well, in this case, we have gathered
40:52 

40:52 large extents of training data points
40:54 

40:54 that are going to be quantifying the
40:56 

40:56 water extent over the surface.
40:59 

40:59 What is the data structure of these
41:00 

41:00 data? Well, the data structure of our
41:03 

41:03 data comes on a raster format, but we
41:06 

41:06 can actually pre-process these data and
41:08 

41:08 perform feature engineering to make it
41:11 

41:11 into a tabular format.
41:14 

41:14 The last piece of this
41:16 

41:16 if this is a continuous or discrete
41:17 

41:17 problem. In our case, our dependent
41:19 

41:19 variable is going to be water pixels,
41:21 

41:21 which we are discretizing as no water
41:23 

41:23 and water.
41:25 

41:25 So, we have looked at the data structure
41:29 

41:29 and some of the options that we have
41:30 

41:30 based on the algorithms, but we also
41:32 

41:32 need to take into account performance.
41:34 

41:34 And some of the questions we need to
41:36 

41:36 answer for performance wise is, what are
41:38 

41:38 the performance requirements based on
41:40 

41:40 the science question we have? Do we need
41:43 

41:43 real-time observations or do we have
41:46 

41:46 static maps that we're going to create
41:48 

41:48 that can be then looked at later on?
41:51 

41:51 We also need to take into account which
41:52 

41:52 software we're going to be running the
41:55 

41:55 application on. For example, we can have
41:57 

41:57 on-premise resources where we would have
42:00 

42:00 probably server on our lab. We can also
42:03 

42:03 leverage commercial cloud like Amazon
42:05 

42:05 Web Services or Azure cloud where we
42:08 

42:08 leverage systems that are being
42:10 

42:10 controlled or managed on an external
42:12 

42:12 cloud. We can also run applications on
42:15 

42:15 embedded hardware.
42:16 

42:16 Hardware that could actually be running
42:18 

42:18 on a space cube or on a satellite that
42:20 

42:20 is on orbit.
42:22 

42:22 Last question that we have is what is
42:25 

42:25 the most important for your project? Is
42:27 

42:27 it inference time or is it model
42:29 

42:29 performance? Is it how fast your model
42:31 

42:31 can provide
42:33 

42:33 responses or how good your model is in
42:35 

42:35 terms of accuracy?
42:37 

42:37 Based on the actual algorithms of
42:39 

42:39 machine learning that we have these
42:41 

42:41 days, there's always a
42:44 

42:44 way of paying attention to some of
42:45 

42:45 these. You might be able to have a
42:47 

42:47 really accurate model that might take
42:50 

42:50 additional time to perform inference.
42:53 

42:53 And this is because some of these
42:55 

42:55 models, they are created to be large
42:57 

42:57 enough
42:58 

42:58 to be able to discretize additional
43:00 

43:00 features from the data, but they are
43:02 

43:02 normally bigger, which means that they
43:04 

43:04 need to perform additional computations
43:07 

43:07 and discretization from the actual data.
43:10 

43:10 An example on this right side image that
43:12 

43:12 we have in here, we have simplicity over
43:14 

43:14 time versus the accuracy.
43:17 

43:17 Many of these simple algorithms like
43:19 

43:19 linear regression where we only solving
43:20 

43:20 for an equation or logistic
43:23 

43:23 regression, they're very simple, but
43:25 

43:25 they also lack on most of the accuracy
43:28 

43:28 on data sets that are kind of complex.
43:31 

43:31 We also have K-means clustering
43:32 

43:32 algorithm where we perform on supervised
43:35 

43:35 classification
43:37 

43:37 of specific data sets where accuracy
43:39 

43:39 might be limited by the simplicity and
43:41 

43:41 time they take to be processed or to be
43:44 

43:44 run.
43:45 

43:45 Our accuracy continues then to increase
43:48 

43:48 when we start looking at more complex
43:50 

43:50 algorithms like neural networks,
43:53 

43:53 decisions trees, and ensembles of these,
43:56 

43:56 even support vector machines, but they
43:59 

43:59 are limited by the simplicity or the
44:01 

44:01 time that they're going to take. So, we
44:03 

44:03 can get more accurate observations,
44:05 

44:05 let's say from a neural network, but
44:07 

44:07 it's going to take longer to train and
44:09 

44:09 to do inference compared to some simple
44:12 

44:12 models like linear regressions.
44:16 

44:16 To answer these questions based on these
44:18 

44:18 session one and two objectives,
44:21 

44:21 we have that for our first question,
44:22 

44:22 which is what are our performance
44:23 

44:23 requirements, we really don't need
44:26 

44:26 real-time maps of water, at least for
44:29 

44:29 this application. Now, consider that
44:31 

44:31 you're doing, let's say fire occurrence
44:33 

44:33 modeling or that you're modeling fire
44:35 

44:35 spread to assess and to inform some of
44:38 

44:38 these stakeholders at the field trying
44:40 

44:40 to put on the fire. Well, for that
44:43 

44:43 particular use case, you might need
44:45 

44:45 real-time predictions or real-time uh
44:50 

44:50 inference of your data set, which might
44:52 

44:52 require more complex algorithm that can
44:54 

44:54 give you both the accuracy, but also the
44:56 

44:56 simplicity.
44:58 

44:58 For where our model needs to run, we
45:01 

45:01 want our software to actually run on
45:02 

45:02 both on-premise and in the cloud. We
45:04 

45:04 want to be flexible enough to run on
45:07 

45:07 both places. You can invest some time to
45:10 

45:10 make sure that your model runs on both,
45:12 

45:12 but you can also concentrate on the
45:14 

45:14 specific application you're going to be
45:15 

45:15 running on. For example, you can
45:17 

45:17 optimize your model to only run
45:19 

45:19 on-premises without having to consider
45:21 

45:21 on the cloud resources.
45:23 

45:23 The last question that we have in here
45:25 

45:25 is what is more important for us, the
45:27 

45:27 inference time or the model performance?
45:30 

45:30 In our case, we actually have to have
45:32 

45:32 better model performance rather than
45:35 

45:35 inference time because we're going to be
45:37 

45:37 creating these maps once and then
45:40 

45:40 looking at them from a science
45:42 

45:42 perspective. So, we don't need to
45:44 

45:44 actually create them as fast as we need
45:47 

45:47 them. We actually need to process the
45:49 

45:49 entire global coverage on a timely
45:52 

45:52 fashion, which we're going to leverage
45:54 

45:54 GPUs for it, but we don't need real-time
45:56 

45:56 observations like something like a
45:58 

45:58 satellite would need to perform
46:00 

46:00 decisions on.
46:04 

46:04 The last piece is kind of the operations
46:06 

46:06 side of things. How do we choose the
46:09 

46:09 specific model based on the data we
46:11 

46:11 have, but also our requirements? And
46:15 

46:15 scikit-learn provides a good overview of
46:17 

46:17 how some of these decisions would go.
46:20 

46:20 One example of this is we can start
46:22 

46:22 from, let's say, the start endpoint.
46:24 

46:24 And the first questions that we have is
46:27 

46:27 how many samples are we going to
46:28 

46:28 process?
46:29 

46:29 Do we have more than 50 samples or do we
46:32 

46:32 have less than 50 samples? In some
46:35 

46:35 applications, let's say for the water
46:37 

46:37 extent mapping of the entire globe, you
46:40 

46:40 would need more than 50 samples to
46:42 

46:42 perform an accurate
46:44 

46:44 prediction or classification in this
46:46 

46:46 case just because of how spectral
46:48 

46:48 diverse the actual globe is. You can
46:50 

46:50 have more than 50 different
46:53 

46:53 spectral differences or spectral
46:55 

46:55 responses on different locations. Let's
46:57 

46:57 just compare what how a bare soil would
46:59 

46:59 look like compared to how the actual
47:02 

47:02 water would look like compared to how a
47:04 

47:04 wetland field would look like. There
47:06 

47:06 going to be many spectral responses
47:08 

47:08 where just having 50 pixels or 50
47:11 

47:11 observations is not going to be enough.
47:13 

47:13 Well, once we gather more more data, we
47:16 

47:16 can then proceed to select which
47:18 

47:18 category we're going to be looking at.
47:20 

47:20 Are we going to quantify or get a
47:22 

47:22 prediction of the quantification of a
47:24 

47:24 value?
47:25 

47:25 We have going to have labeled data that
47:27 

47:27 we then need to
47:29 

47:29 classify into other means. What is going
47:31 

47:31 to be the actual target on our use case?
47:34 

47:34 Well, we're going to have labeled data
47:37 

47:37 and we have less than, let's say,
47:38 

47:38 100,000 of samples, we can use
47:41 

47:41 algorithms that are not very data
47:44 

47:44 intensive or that
47:45 

47:45 not require vast amounts of data to have
47:47 

47:47 at least accurate predictions.
47:50 

47:50 Let's say that you have less than
47:51 

47:51 100,000 samples and you want to quantify
47:54 

47:54 something, you can also look at several
47:57 

47:57 regressors that can provide you with the
47:60 

47:60 accurate resource that you might need
48:01 

48:01 based on the small sample that you might
48:03 

48:03 have.
48:04 

48:04 Now, let's say that you can actually
48:06 

48:06 have more samples than the actual
48:09 

48:09 application that you can increase your
48:10 

48:10 training data set to be representative
48:13 

48:13 enough across the actual data. Well,
48:16 

48:16 that's where we can start looking at
48:18 

48:18 maybe neural networks, maybe other
48:20 

48:20 ensemble algorithms that can
48:22 

48:22 take into account both generalization,
48:25 

48:25 but also accuracy based on the
48:27 

48:27 representatives of your training data.
48:36 

48:36 Okay, so now we're going to run our
48:38 

48:38 exercise for this particular session.
48:41 

48:41 To gather some of the material that
48:44 

48:44 you're going to need for this exercise,
48:46 

48:46 you need to go to the Git repository
48:47 

48:47 that we just mentioned. And the address
48:50 

48:50 is listed on the session, but here you
48:52 

48:52 can access the URL for getting
48:56 

48:56 to the repository. And just to give a
48:58 

48:58 quick overview of how the repository is
48:59 

48:59 organized, you're going to have a
49:01 

49:01 several directories that are going to
49:02 

49:02 have individual materials for some of
49:05 

49:05 the sessions including additional
49:07 

49:07 resources that you can take a look at it
49:09 

49:09 after the training is done or after all
49:11 

49:11 of these sessions are done.
49:15 

49:15 The most important piece in here is
49:16 

49:16 going to be
49:17 

49:17 this readme in here where you have
49:19 

49:19 access to all of the notebooks that are
49:21 

49:21 be going to be used for this session.
49:23 

49:23 For example, for these session one
49:25 

49:25 materials, you can look at them in this
49:27 

49:27 particular table where you have one, the
49:30 

49:30 actual exercise we're going to be doing,
49:32 

49:32 but also the assignment that is going to
49:34 

49:34 be need to turn in after the session is
49:36 

49:36 done.
49:38 

49:38 Okay, so let's gather and use our
49:41 

49:41 notebook. The way we're going to start
49:43 

49:43 this and run the software instead of
49:45 

49:45 doing it locally on your laptop, we're
49:47 

49:47 going to use the free resources from
49:50 

49:50 Google Colaboratory.
49:52 

49:52 And for this you're going to need an
49:54 

49:54 actual
49:55 

49:55 Google account to access it.
49:59 

49:59 Once we click on that button, we can
50:02 

50:02 actually access our notebook that we can
50:05 

50:05 and then start executing across the way.
50:08 

50:08 One of the
50:10 

50:10 let's say benefits from Google Colab is
50:12 

50:12 that you can have both text but also
50:14 

50:14 software being drawn in the same
50:16 

50:16 location. This is basically a Jupyter
50:18 

50:18 notebook just embedded on a visual
50:20 

50:20 hardware. Another benefit from Google
50:23 

50:23 Colab is that you can leverage free
50:25 

50:25 resources and even take some GPU time to
50:29 

50:29 do some of your work. So if you need to
50:31 

50:31 have let's say low-level applications or
50:34 

50:34 even like exploratory data analysis,
50:37 

50:37 just to take a look at your data, you
50:39 

50:39 can leverage some of these resources for
50:40 

50:40 free.
50:43 

50:43 Some of the important pieces in here,
50:45 

50:45 you have the file tab where you can open
50:47 

50:47 new
50:48 

50:48 notebooks or create new notebooks. You
50:50 

50:50 can edit some of these cells that you
50:52 

50:52 have in there like pasting and cutting
50:55 

50:55 some of these cells that we're going to
50:56 

50:56 be working with, but the most important
50:58 

50:58 and the one we want to focus on for this
50:60 

51:00 session is the runtime.
51:02 

51:02 So not only runtime where we have
51:04 

51:04 options to run all, which would be
51:06 

51:06 running every single cell on our
51:08 

51:08 session,
51:09 

51:09 or run before or run the selection cell
51:12 

51:12 that we have.
51:13 

51:13 If we go straight to each one of these
51:16 

51:16 of these cells, you're going to see that
51:18 

51:18 there is a play button at the left side
51:21 

51:21 of the cell. That means that you're
51:22 

51:22 going to run that particular cell and
51:24 

51:24 it's going to do something.
51:26 

51:26 So let's just start from scratch and
51:28 

51:28 clean up all of these actions.
51:40 

51:40 We can go and then play button like the
51:42 

51:42 play button. We're going to have that
51:44 

51:44 option of says warning this notebook was
51:45 

51:45 not authored by Google, but it's
51:47 

51:47 actually authored by us. So just click
51:49 

51:49 on run anyway and that is going to
51:51 

51:51 actually execute that cell that you have
51:54 

51:54 in there. This first option is a Wget
51:58 

51:58 command. We normally use this command to
52:00 

52:00 download any files that we might be
52:02 

52:02 missing
52:03 

52:03 from public repositories. If you have
52:05 

52:05 any URL or file that you want to load
52:08 

52:08 into your session, you can always paste
52:10 

52:10 the URL after the Wget option to have it
52:13 

52:13 available on your session.
52:15 

52:15 If you look at the directory files in
52:17 

52:17 here, you can see that the actual file
52:19 

52:19 was downloaded and we're going to be
52:21 

52:21 using that for later later purposes.
52:24 

52:24 If you have any dependencies that you
52:25 

52:25 might need for your own application, you
52:27 

52:27 can then click on that particular cell
52:30 

52:30 and you're going to be then installing
52:32 

52:32 some of all dependencies on the fly.
52:34 

52:34 By default, this Google Colab has a
52:37 

52:37 Python environment that has most of the
52:39 

52:39 applications or machine learning
52:41 

52:41 libraries that you're going to need for
52:42 

52:42 specific applications.
52:44 

52:44 That being said, let's dive in into some
52:47 

52:47 of the material from this session. In
52:49 

52:49 here we're going to first familiarize
52:51 

52:51 with the Google Colab environment, which
52:53 

52:53 we have been doing so far, but we want
52:56 

52:56 to also familiarize ourselves with some
52:57 

52:57 of the machine learning software
52:58 

52:58 libraries and how to look at some of
53:00 

53:00 these problems.
53:02 

53:02 In this first section, we're importing
53:04 

53:04 some of the Python packages that we're
53:05 

53:05 going to need.
53:07 

53:07 Note that we have some
53:08 

53:08 general data science packages like NumPy
53:10 

53:10 to deal with arrays and also Pandas to
53:13 

53:13 deal with data frames, but we also have
53:15 

53:15 some geospatial packages like GeoXarray
53:19 

53:19 and Geo
53:20 

53:20 to work with some of those geospatial
53:22 

53:22 data structures that we might need.
53:25 

53:25 Last but not least, we also include some
53:27 

53:27 of the actual libraries that we're going
53:29 

53:29 to use for our software, which in this
53:31 

53:31 case would be scikit-learn and then the
53:33 

53:33 specific model that you would be using.
53:35 

53:35 For example, this would be how to call a
53:37 

53:37 random forest classifier.
53:42 

53:42 The structure of this particular
53:43 

53:43 notebook, we're going to kind of follow
53:45 

53:45 on on the questions that we were
53:47 

53:47 answering on the first session of these
53:49 

53:49 slides, but we're going to be looking at
53:51 

53:51 how to think about them through the
53:54 

53:54 actual exercise. So for example,
53:57 

53:57 we know now that we need surface water
53:60 

53:60 extent maps to quantify and analyze the
54:02 

54:02 drivers of change in let's say the
54:04 

54:04 global MODIS data set.
54:07 

54:07 We have access to the MODIS data,
54:09 

54:09 so we're not limited in terms of the
54:11 

54:11 data we have. Now we need to think about
54:13 

54:13 how we want to approach our problem. And
54:16 

54:16 there are many ways to think about it
54:18 

54:18 cuz we can just go through some of these
54:20 

54:20 questions. Well, first one is our
54:22 

54:22 problem a classification or a regression
54:24 

54:24 problem?
54:26 

54:26 Based on that answer, you can think
54:28 

54:28 about what actual model or what actual
54:30 

54:30 algorithm to use. And we already
54:33 

54:33 discussed that if we're going to do a
54:34 

54:34 simple classification, we might be able
54:36 

54:36 to use a random forest classifier.
54:40 

54:40 If we're going to do any regression or
54:41 

54:41 quantify values, then we can use a
54:44 

54:44 random forest regressor. And that same
54:46 

54:46 concept of the actual algorithm and the
54:49 

54:49 actual application are going to be used
54:52 

54:52 across the board. For example, there can
54:54 

54:54 be a logistic regressor and so forth.
54:57 

54:57 Now, our next question is we know that
54:60 

54:60 we have a classification problem. Now,
55:02 

55:02 how many classes are we going to have in
55:04 

55:04 this problem?
55:05 

55:05 You can have a binary problem where we
55:07 

55:07 can just identify water and not water
55:10 

55:10 pixels, but we can also quantify let's
55:12 

55:12 say multiple classes within a individual
55:15 

55:15 class. Let's say that you want to
55:17 

55:17 differentiate between like open waters,
55:19 

55:19 rivers, oceans, etc.
55:22 

55:22 Depending on that particular problem,
55:24 

55:24 you can have a binary algorithm or you
55:26 

55:26 can have a multi-class algorithm.
55:31 

55:31 Now, we know how we're going to approach
55:33 

55:33 the problem. We know we want a
55:34 

55:34 classifier that is going to then be
55:36 

55:36 doing binary segmentation or binary
55:39 

55:39 classification.
55:41 

55:41 There is always the main question of
55:44 

55:44 do we have training data? Do we have
55:46 

55:46 labels that can provide the insights to
55:49 

55:49 the machine learning algorithm of how
55:50 

55:50 much
55:52 

55:52 how well we're going to predict on
55:55 

55:55 let's say given new data into the model.
55:57 

55:57 Well, for example, the random forest
55:60 

55:60 might not need as many observations that
56:02 

56:02 what a like convolutional neural network
56:04 

56:04 model would need. Thus, the amount of
56:07 

56:07 training data available is going to play
56:09 

56:09 a big role at the time of selecting
56:10 

56:10 which algorithm to use.
56:13 

56:13 We can also use feature engineering
56:16 

56:16 techniques as adding new features and so
56:18 

56:18 forth to increase the amount of data we
56:21 

56:21 have like for example using data
56:23 

56:23 augmentation techniques where we do
56:25 

56:25 small deviations of existing training
56:28 

56:28 data points to increase the amount of
56:30 

56:30 data we have.
56:31 

56:31 Now, some of the questions that you need
56:34 

56:34 to do before performing any feature
56:35 

56:35 engineering is is our training data of
56:38 

56:38 good quality? And the quality of your
56:40 

56:40 data is going to going to be a huge
56:42 

56:42 driver at when deciding which train data
56:44 

56:44 set to use. For example, the
56:47 

56:47 disaster responding applications might
56:49 

56:49 not be flexible enough to have
56:51 

56:51 mislabeled data in the training since it
56:54 

56:54 might bring additional noise to the
56:55 

56:55 models. However, when dealing with other
56:58 

56:58 types of simple classifications, we
56:60 

56:60 might be able to
57:02 

57:02 consolidate or even
57:04 

57:04 be okay with some mislabeled data that
57:07 

57:07 we can then maybe downsize on our actual
57:09 

57:09 training data set.
57:11 

57:11 Thus, the quality of the labeling data
57:14 

57:14 is going to be really a factor of to
57:16 

57:16 account for depending on your
57:18 

57:18 application. Now, is there any
57:21 

57:21 labeling data available out there? Like
57:23 

57:23 are there any crowd-sourced labels that
57:26 

57:26 you might be able to leverage into your
57:27 

57:27 problem? Can you use labels that other
57:30 

57:30 people have created for your own
57:31 

57:31 application? Let's say that you have
57:33 

57:33 labels
57:34 

57:34 someone created at 2-m resolution and
57:37 

57:37 you need those labels at 10-m. Well, you
57:39 

57:39 might be able to upsample your
57:40 

57:40 observations to then get them into the
57:43 

57:43 grid that you might need for your own
57:44 

57:44 application.
57:46 

57:46 The last question that we have and which
57:48 

57:48 is really important depending on the
57:49 

57:49 problem is how much budget do you have
57:51 

57:51 to invest in training data? Maybe your
57:53 

57:53 project didn't have any budget to invest
57:56 

57:56 on creating train data because it just
57:58 

57:58 takes times. It takes money to actually
58:00 

58:00 get the training data, get the observers
58:03 

58:03 to quantify some of these. Or you might
58:05 

58:05 need to then use unsupervised methods to
58:08 

58:08 try to account for the lack of training
58:11 

58:11 data.
58:12 

58:12 One
58:13 

58:13 technique that you can use for let's say
58:16 

58:16 doing unsupervised labeling of data is
58:19 

58:19 using clustering algorithms. And here
58:21 

58:21 I'm going to I'm going to introduce one
58:23 

58:23 of them, which is the K-means clustering
58:24 

58:24 algorithm, but it's basically the
58:26 

58:26 foundation for other clustering
58:28 

58:28 algorithms that are similarly out there.
58:31 

58:31 The main idea of clustering algorithms
58:33 

58:33 is that we provide a K number of
58:35 

58:35 clusters that we're going to be dividing
58:37 

58:37 our data into. And where all of the
58:40 

58:40 other algorithms kind of differentiate
58:42 

58:42 from K-means is how they calculate
58:44 

58:44 distance between our groups, how they
58:46 

58:46 calculate the centroids that we're going
58:47 

58:47 to be clustering our data into.
58:50 

58:50 The main idea here is that we're going
58:51 

58:51 to have let's say bucket of points of
58:54 

58:54 our data
58:55 

58:55 that the algorithm is going to one, look
58:58 

58:58 at it,
58:59 

58:59 two, calculate centroids of distance
59:02 

59:02 across them, and then randomly initiate
59:05 

59:05 some of these clusters across the data.
59:07 

59:07 This can provide based on the data set
59:10 

59:10 good options to visualize or to even
59:13 

59:13 segregate some of the observations. We
59:15 

59:15 might even be able to identify outliers
59:17 

59:17 in our data set that can help us
59:19 

59:19 understand how our data is looking at
59:21 

59:21 like for the specific application.
59:24 

59:24 Even taking it further,
59:26 

59:26 we can
59:28 

59:28 observe how we can perform some K-means
59:30 

59:30 clustering simply by using the
59:32 

59:32 scikit-learn library. For example, we
59:34 

59:34 here select the number of clusters that
59:37 

59:37 we want to do.
59:38 

59:38 We then take and download specific bands
59:41 

59:41 from our raster.
59:43 

59:43 And then we go ahead and perform a fit
59:45 

59:45 operation of our data set, which in this
59:48 

59:48 case is allowing the model to learn or
59:51 

59:51 to iterate across the data.
59:53 

59:53 Once we have fitted our algorithm, we
59:56 

59:56 can then proceed to perform any
59:58 

59:58 predictions.
59:59 

59:59 And then since we were using the data
60:02 

60:02 set tabular format, we can just reshape
60:03 

60:03 it back into our raster data.
60:06 

60:06 An example is in here where we have one,
60:09 

60:09 the imagery that was input
60:12 

60:12 to the K-means cluster, and also the
60:14 

60:14 output of that K-means cluster, which in
60:16 

60:16 this case are a group of four
60:20 

60:20 clusters across the raster.
60:22 

60:22 If we look into more detail across it,
60:25 

60:25 we can see how these four groups are
60:27 

60:27 being classified in this cluster. Note
60:30 

60:30 that there's extremely a lot of noise,
60:33 

60:33 and the lake in here that is in the
60:35 

60:35 middle, which is like Powell, is not
60:37 

60:37 really well segmented through K-means.
60:40 

60:40 Now, one of those masks actually
60:42 

60:42 gathered all of the pixels from Lake
60:44 

60:44 Powell into a single cluster.
60:47 

60:47 The downside of this is that we also
60:49 

60:49 have noise from other features that were
60:51 

60:51 not water pixels. That being said, said,
60:55 

60:55 this can be a good start for creating
60:57 

60:57 the labeling points. Now, instead of
60:59 

60:59 having to manually label each one of the
61:01 

61:01 pixels from Lake Powell, you can use
61:03 

61:03 this as a starting point, and then
61:04 

61:04 disaggregate some of these clusters to
61:07 

61:07 then create, let's say, the ground truth
61:09 

61:09 map that you might need to train other
61:11 

61:11 models that might be on an unsupervised
61:13 

61:13 fashion.
61:15 

61:15 Okay. So, now let's just discuss some of
61:17 

61:17 these
61:18 

61:18 algorithms and at least some of the
61:20 

61:20 basics. The first one that we have is
61:22 

61:22 the random forest.
61:24 

61:24 And the basics of random forest is that
61:26 

61:26 we have n observations, and we have a
61:28 

61:28 target variable that we want to match
61:30 

61:30 based on those observations.
61:33 

61:33 The idea is that we're going to create
61:35 

61:35 independent trees that are going to be
61:38 

61:38 then aggregated at the end, and we're
61:40 

61:40 going to get or a majority score
61:43 

61:43 or the average of those independent
61:46 

61:46 trees.
61:47 

61:47 The idea of how these independent trees
61:50 

61:50 are aggregated is that we do a
61:52 

61:52 bootstrapping technique, which is
61:54 

61:54 basically creating additional
61:56 

61:56 training data sets from the initial,
61:58 

61:58 let's say, training data set that we
61:60 

61:60 provide in the model. So, we have
62:01 

62:01 multiple observations that we're going
62:03 

62:03 to be be then creating independent
62:05 

62:05 trees, and each one of those trees are
62:08 

62:08 going to gather a particular decision.
62:10 

62:10 At the end,
62:12 

62:12 the trees that have the majority or the
62:14 

62:14 majority rule is applied to all of the
62:16 

62:16 trees, and we get the classification or
62:18 

62:18 the regression value that we want.
62:21 

62:21 One of the downsides of random forest is
62:23 

62:23 that generally, they don't generalize
62:26 

62:26 very well because they need to use or
62:29 

62:29 they need to have decisions that are
62:30 

62:30 supported by individual features.
62:33 

62:33 If your feature engineering process was
62:35 

62:35 not good enough, then your models might
62:38 

62:38 not be able to generalize across
62:39 

62:39 different samples that the model hasn't
62:42 

62:42 seen.
62:43 

62:43 Here we present a simple way of applying
62:45 

62:45 a random forest classifier, and we're
62:47 

62:47 going to deep dive a bit more on other
62:49 

62:49 sessions.
62:51 

62:51 So, next we have the XGBoost. The XG
62:54 

62:54 XGBoost takes the ensemble or tree
62:56 

62:56 ensemble as the random forest to the
62:59 

62:59 next level. In here, instead of taking
63:02 

63:02 each one of the trees as a single
63:04 

63:04 observation, each one of them weighted
63:07 

63:07 at the same
63:09 

63:09 way, in this case we prioritize the
63:12 

63:12 trees or the observations where our
63:14 

63:14 ensemble failed on. The trees and
63:16 

63:16 observations that need or require
63:19 

63:19 additional training on.
63:21 

63:21 And the idea is that we use a mini
63:23 

63:23 minimization function where we kind of
63:25 

63:25 penalize our model
63:27 

63:27 based on observations that were missing.
63:30 

63:30 So, we do have the same option of having
63:31 

63:31 multiple trees, but then the way we
63:34 

63:34 approach retraining the trees is based
63:37 

63:37 on a weighted function where we take
63:40 

63:40 gradient descent calculation
63:43 

63:43 to improve on this. And the basic of
63:45 

63:45 gradient descent is that is basically
63:47 

63:47 just a strategy of missing minimizing
63:49 

63:49 that cost function or minimizing that
63:51 

63:51 error between the predicted values from
63:54 

63:54 those trees by doing many iterations on
63:57 

63:57 the data.
63:59 

63:59 Another nice thing about this compared
64:01 

64:01 to the random forest is that we can use
64:03 

64:03 what are called regularization
64:04 

64:04 techniques across the XGBoost. So, we
64:07 

64:07 can try to avoid overfitting by
64:10 

64:10 penalizing the model when we see that
64:12 

64:12 it's actually overfitting in some of
64:13 

64:13 these observations.
64:16 

64:16 A simple example of how to implement the
64:18 

64:18 XGBoost is also in here. And note that
64:21 

64:21 the basic approach is the same. We have
64:24 

64:24 three operations that we need to do
64:26 

64:26 where we fit the model and then perform
64:28 

64:28 the predictions, very similarly to the
64:30 

64:30 other two that we already discussed.
64:34 

64:34 Another application or another
64:35 

64:35 algorithms are the neural networks. And
64:37 

64:37 in this case, we are kind of moving
64:39 

64:39 towards a more complex algorithm that
64:42 

64:42 then requires more training data to work
64:44 

64:44 from.
64:46 

64:46 And the main idea here is that we use,
64:48 

64:48 instead of decision trees or instead of
64:50 

64:50 like a structured decision, we allow our
64:53 

64:53 model or algorithm to learn features out
64:56 

64:56 of the data.
64:57 

64:57 So, instead of spending a lot of time in
64:59 

64:59 the feature engineering process to
65:01 

65:01 differentiate representative training
65:03 

65:03 from other non-representative training
65:06 

65:06 and find generalization, in this case,
65:09 

65:09 we're actually allowing the model to
65:11 

65:11 learn the patterns by itself.
65:13 

65:13 And this is done by a process of
65:16 

65:16 forward propagation and back
65:17 

65:17 propagation. And the idea is that the
65:19 

65:19 model,
65:20 

65:20 let's say, penalizes each one of these
65:23 

65:23 locations or decisions that the model is
65:26 

65:26 doing, and then it relearns what is
65:29 

65:29 happening or the features that are being
65:31 

65:31 misclassified, and goes again and
65:34 

65:34 iterates over the process on and on and
65:36 

65:36 on.
65:37 

65:37 And the idea here is that we're going to
65:38 

65:38 be mimicking, let's say, the human brain
65:40 

65:40 by having multiple neurons that are
65:42 

65:42 extremely connected, and based on
65:45 

65:45 weights or based on values that we have
65:48 

65:48 on each neuron, we're going to be able
65:50 

65:50 to then click on and off for each one of
65:53 

65:53 the patterns or each one of the features
65:55 

65:55 that we're we're going to be learning
65:56 

65:56 from.
65:59 

65:59 Below this, we also have kind of an
66:01 

66:01 example of how to implement some of
66:03 

66:03 this. And note that
66:05 

66:05 this is basically the same approach that
66:06 

66:06 we had before, just by adding one more
66:09 

66:09 step, which in this case would be the
66:11 

66:11 compilation.
66:12 

66:12 And again, we don't dive into many
66:14 

66:14 details in here, but this can provide
66:15 

66:15 you with the base
66:17 

66:17 to think about your problem and then go
66:18 

66:18 from there.
66:20 

66:20 The three algorithms that we just
66:22 

66:22 mentioned, they're basically pixel-based
66:24 

66:24 algorithms or algorithms that didn't
66:25 

66:25 take into account the neighborhood of
66:27 

66:27 those pixels.
66:29 

66:29 For that, we have convolutional neural
66:30 

66:30 networks. And the main idea of
66:33 

66:33 convolutional neural networks is
66:34 

66:34 basically having also the
66:36 

66:36 neural approach where each one of those
66:38 

66:38 neurons are connected, but we include
66:41 

66:41 the convolution piece into the model.
66:44 

66:44 And the idea of convolutions is that
66:46 

66:46 we're going to both take the spectral
66:47 

66:47 response or the value of that individual
66:49 

66:49 pixel, but we are also going to
66:51 

66:51 calculate values across the neighborhood
66:53 

66:53 of that pixel to take into account the
66:55 

66:55 spatial characteristics of it.
66:58 

66:58 And this is really useful, let's say,
66:60 

66:60 for applications where you actually care
67:02 

67:02 about the neighborhood of the individual
67:04 

67:04 pixel in order to get the prediction of
67:06 

67:06 it. Let's say, for example, you want to
67:08 

67:08 classify if a tree
67:10 

67:10 is actually a tree or not, you might be
67:13 

67:13 able to hit on a, let's say, the middle
67:15 

67:15 point of the crown,
67:16 

67:16 but a CNN would allow you to learn that
67:18 

67:18 this is a tree by looking at that
67:20 

67:20 individual crown pixel, but also its
67:22 

67:22 boundaries.
67:24 

67:24 Okay. So, as some closing thoughts, we
67:27 

67:27 have introduced some of the basics of
67:29 

67:29 these algorithms. We have provided some
67:31 

67:31 of the foundations of how to look for
67:34 

67:34 characteristics in these individual
67:36 

67:36 algorithms and how they play a role when
67:38 

67:38 deciding which one to use.
67:41 

67:41 We have also discussed some of the
67:42 

67:42 basics of looking at the data and
67:45 

67:45 understanding the data in order to
67:47 

67:47 choose the actual algorithm.
67:49 

67:49 And we have also discussed on some of
67:50 

67:50 the techniques to better choose the
67:53 

67:53 initial algorithm without
67:56 

67:56 having to stick with that specific
67:57 

67:57 algorithm across the development
67:59 

67:59 process. And making it clear that you
68:02 

68:02 can start with a single algorithm, but
68:04 

68:04 you can also change the same algorithm
68:06 

68:06 by simply
68:08 

68:08 doing some simple code changes.
68:20 

68:20 Thank you very much for listening in.
68:22 

68:22 Just a couple of remarks, remember that
68:25 

68:25 you have an assignment for this week.
68:27 

68:27 Please make sure to look at it. You're
68:29 

68:29 going to If you go to the actual GitHub
68:31 

68:31 repository, you're going to see that
68:32 

68:32 there is assignment section one.
68:34 

68:34 Click on the open Google Colab option
68:37 

68:37 and follow the instructions from the
68:38 

68:38 assignment, and you're going to just
68:40 

68:40 going to be pointed out some questions
68:42 

68:42 after the assignment
68:44 

68:44 to get more experience and and
68:46 

68:46 practices as across the
68:48 

68:48 the topic we included in here.
68:50 

68:50 So, now,
68:51 

68:51 Brooke, please feel free to continue on.
68:56 

68:56 Thank you very much, Jordan.
68:57 

68:57 Before we open it up to address your
68:59 

68:59 questions, let's review what we did here
69:01 

69:01 today.
69:02 

69:02 Through the overview of machine
69:03 

69:03 learning, we're able to identify the
69:05 

69:05 importance and utility of machine
69:07 

69:07 learning targeted towards Earth science.
69:09 

69:09 We covered software to support machine
69:11 

69:11 learning, machine learning applications,
69:14 

69:14 and ended with a hands-on Jupyter
69:16 

69:16 notebook exercises or an exercise
69:18 

69:18 showing how to load and visualize that
69:20 

69:20 data. We hope that after this part one,
69:23 

69:23 you are able to
69:24 

69:24 recognize the most common machine
69:25 

69:25 learning methods used for processing
69:27 

69:27 Earth science data.
69:29 

69:29 Describe the benefits and limitations,
69:32 

69:32 um and then explain how to apply the
69:34 

69:34 basic machine learning algorithms and
69:36 

69:36 techniques in a meaningful manner.
69:39 

69:39 Looking ahead to part two next week,
69:42 

69:42 we'll be covering training data and a
69:43 

69:43 land cover classification example.
69:47 

69:47 We'll do this by downloading and
69:48 

69:48 exploring training data, extracting that
69:50 

69:50 training data, model evaluation,
69:53 

69:53 and another Jupiter notebook exercise on
69:56 

69:56 a MODIS water classification case study.
69:59 

69:59 So, look forward to that next week.
70:02 

70:02 If you have any further questions, you
70:03 

70:03 can contact myself
70:05 

70:05 or my ARSET colleagues
70:08 

70:08 at our email addresses here. As a
70:10 

70:10 reminder, here is a course website where
70:12 

70:12 you can find all the materials,
70:14 

70:14 including the PDF of the PowerPoint
70:16 

70:16 presentation and the recording of the
70:19 

70:19 video that will be uploaded shortly.
70:22 

70:22 The homework link can be avail- will be
70:23 

70:23 available on the course website during
70:25 

70:25 the final session, so or the final part
70:29 

70:29 on May 4th.
70:30 

70:30 And I've also included our primary ARSET
70:32 

70:32 website where you can check out all the
70:34 

70:34 great trainings and follow us on Twitter
70:37 

70:37 for exciting announce- announcements
70:39 

70:39 from NASA's Earth sciences.
70:42 

70:42 So, now we'll enter into the question
70:44 

70:44 and answer period.
70:46 

70:46 Please enter your question in the
70:47 

70:47 question box. We'll answer them in the
70:49 

70:49 order that they were received.
70:52 

70:52 As a reminder, all questions asked
70:54 

70:54 previously have been moved over to this
70:56 

70:56 Q&A document and we'll provide that as a
70:58 

70:58 PDF on our training webpage within about
71:01 

71:01 a week for you to download.
71:03 

71:03 Thank you.
71:10 

71:10 Okay, we will open up our question and
71:12 

71:12 answer session now. Thank you for
71:14 

71:14 sending in your questions and please
71:15 

71:15 keep them coming.
71:18 

71:18 So, we have been moving these over
71:21 

71:21 throughout the presentation
71:24 

71:24 and um we'll start addressing these one
71:26 

71:26 by one.
71:30 

71:30 Just going to
71:31 

71:31 make this a little bit bigger for
71:32 

71:32 everybody.
71:37 

71:37 Okay.
71:38 

71:38 All right, so
71:39 

71:39 uh I'll just start with question one.
71:43 

71:43 What counts as very loud large numbers?
71:45 

71:45 And I believe this was part of the
71:48 

71:48 presentation that Jian was giving. Um
71:50 

71:50 what counts as very large numbers for
71:52 

71:52 the comments about R versus Python?
71:55 

71:55 Millions, billions, or trillions?
71:58 

71:58 I'm not sure if Jordan or Jian you
72:00 

72:00 wanted to uh address this, you can
72:02 

72:02 unmute your mic.
72:06 

72:06 Sure. Actually, by very large number, I
72:09 

72:09 mean mathematically mathematically
72:11 

72:11 large. For instance, R provided package
72:14 

72:14 called GMP that can help to calculate
72:17 

72:17 the
72:18 

72:18 uh
72:20 

72:20 simple equation like if n equals 10 to
72:23 

72:23 the two 250,
72:26 

72:26 then
72:27 

72:27 what what if n square will be?
72:30 

72:30 Uh instead of return infinity, R with
72:33 

72:33 GMP can provide the correct answer of 10
72:37 

72:37 to the 500.
72:39 

72:39 Uh this is just like a minor advantage.
72:42 

72:42 Uh the most important strength or
72:44 

72:44 advantage of R is its capability of
72:47 

72:47 building statistic model. And that's why
72:50 

72:50 many people still choosing R as their
72:53 

72:53 machine learning tool
72:55 

72:55 because most of machine learning
72:57 

72:57 uh algorithms are
72:59 

72:59 are basically statistics and there are
73:03 

73:03 provided vast packages vast amount of
73:06 

73:06 packages for statistic computing. That's
73:09 

73:09 uh
73:09 

73:09 that's a main attractive attractive
73:12 

73:12 points of R language.
73:15 

73:15 Thank you. Yeah, and that last point,
73:17 

73:17 very important.
73:19 

73:19 Thank you. Question two, are there any
73:21 

73:21 case studies where a hybrid method is
73:23 

73:23 used? Um
73:24 

73:24 are data driven and model
73:28 

73:28 are data driven and model drives applied
73:30 

73:30 at the same time?
73:32 

73:32 And at which level can we use each one
73:35 

73:35 in the same process? Uh it looks like
73:37 

73:37 you have some answers here.
73:41 

73:41 Um
73:42 

73:42 Whoever feels comfortable speaking to
73:44 

73:44 this or filled in most of it, please
73:46 

73:46 feel free.
73:48 

73:48 I can probably speak on that. Um
73:50 

73:50 So, there are actually many cases where
73:52 

73:52 you can use kind of a hybrid method
73:54 

73:54 between model driven and data driven
73:57 

73:57 uh applications and
73:59 

73:59 some of these techniques are actually
74:01 

74:01 called physics informed models or
74:02 

74:02 knowledge informed models in machine
74:04 

74:04 learning.
74:05 

74:05 And the idea is that you have cases
74:08 

74:08 where you have your data driven model
74:10 

74:10 that can be informed by some equations
74:12 

74:12 from the physics side of things.
74:15 

74:15 Um you can also have applications where
74:18 

74:18 the data driven models are used used for
74:20 

74:20 one task and then your model driven
74:22 

74:22 model is kind of like used for a
74:24 

74:24 downstream task. And and even vice
74:26 

74:26 versa, you can start with one and then
74:28 

74:28 end your workflow with another.
74:30 

74:30 Um there are actually kind of no
74:31 

74:31 specifics on where to use one over the
74:33 

74:33 other.
74:34 

74:34 So, my recommendation would be like if
74:36 

74:36 you have the data available to train the
74:38 

74:38 data driven model, you can always rely
74:40 

74:40 on it
74:41 

74:41 and then validate with some of the model
74:43 

74:43 driven data. Most of these machine
74:45 

74:45 learning based model, they they will be
74:47 

74:47 they'll have better performance, so be
74:49 

74:49 faster uh
74:51 

74:51 than some of these model driven,
74:52 

74:52 but it can also be um kind of the other
74:54 

74:54 way depending on your task.
74:56 

74:56 Uh another thing is that you could
74:58 

74:58 accelerate some of the synthetic
74:59 

74:59 training
75:00 

75:00 training data generation
75:02 

75:02 um by using some of these model driven
75:05 

75:05 to generate some of these synthetic
75:06 

75:06 training data.
75:07 

75:07 And then there are also some use cases
75:10 

75:10 where people use machine learning
75:11 

75:11 methods to kind of do feature selection
75:14 

75:14 or parameter tuning on those um data
75:16 

75:16 driven models.
75:17 

75:17 So, it's kind of taking the the
75:19 

75:19 advantage of kind of the potential speed
75:21 

75:21 of machine learning to then boost some
75:23 

75:23 of those model driven or physics based
75:25 

75:25 models. Um we added one reference there
75:28 

75:28 that you can
75:29 

75:29 kind of look at later.
75:31 

75:31 Yes, thank you very much for that
75:33 

75:33 reference and I I pointed or I put that
75:35 

75:35 link in the chat, so
75:38 

75:38 people can have that. We'll also
75:41 

75:41 uh have this available on the training
75:42 

75:42 webpage in about a week. Uh question
75:44 

75:44 three,
75:46 

75:46 how is the trade-off between speed and
75:48 

75:48 accuracy determined for the models shown
75:50 

75:50 in figure
75:51 

75:51 slide 36? How do you define accuracy
75:54 

75:54 here?
75:57 

75:57 So, slide 36 was kind of a simplistic
76:01 

76:01 simp- simply simple approach
76:04 

76:04 to kind of defining that trade-off. And
76:05 

76:05 accuracy can be any metric on your end
76:08 

76:08 and this is something that is really
76:09 

76:09 like use case um
76:11 

76:11 on a use case basis, but the idea is
76:14 

76:14 that accuracy would be kind of that
76:16 

76:16 equation or that um
76:18 

76:18 metric that you want your model to
76:20 

76:20 improve on or to kind of be better on.
76:22 

76:22 And like accuracy can be either just
76:25 

76:25 plain accuracy or kind of the average
76:27 

76:27 approach, it can be precision, it can be
76:29 

76:29 even recall.
76:30 

76:30 Um
76:31 

76:31 it can be a metric of your own just
76:34 

76:34 trying to minimize that loss error.
76:37 

76:37 Um but then that trade-off between speed
76:40 

76:40 and accuracy is going to depend on how
76:41 

76:41 many observations you need per second or
76:43 

76:43 how many um
76:45 

76:45 let's say
76:47 

76:47 how many things you need process on X
76:49 

76:49 number of time
76:51 

76:51 and many of these simple algorithms like
76:53 

76:53 logistic regression, they're really
76:54 

76:54 fast, but normally they just don't
76:56 

76:56 generalize on data they haven't seen
76:59 

76:59 they haven't seen before.
77:00 

77:00 Um so, that's kind of where the the
77:01 

77:01 trade-off is at.
77:06 

77:06 Thank you.
77:08 

77:08 And question four, can we use the random
77:09 

77:09 forest model to find crop water use?
77:14 

77:14 I'll
77:15 

77:15 I'll take that one. Um
77:17 

77:17 so, basically, I mean if you have
77:20 

77:20 a if you have something you want to
77:21 

77:21 predict, if you have training for that,
77:24 

77:24 if you have labeled training for that,
77:26 

77:26 then in theory, you can try to train a
77:28 

77:28 model to predict it using some set of
77:32 

77:32 input predictors.
77:34 

77:34 Uh the skill at which you'll be able to
77:36 

77:36 predict, you know, crop water use for
77:37 

77:37 example, is going to depend on the
77:40 

77:40 quality of your training labels
77:42 

77:42 and the the ability of the the predictor
77:45 

77:45 stack
77:46 

77:46 to tell you
77:48 

77:48 to predict that particular feature, in
77:49 

77:49 this case crop water use.
77:54 

77:54 Thank you. Yeah, no, I and that is
77:57 

77:57 a good point
77:59 

77:59 to to make there that
78:01 

78:01 these models
78:03 

78:03 they they do their function, but it
78:06 

78:06 really is how what how are you defining
78:08 

78:08 your problem? And if you have all the
78:10 

78:10 the right data going in, uh in theory,
78:12 

78:12 it should should be uh useful for that.
78:15 

78:15 Um question five,
78:17 

78:17 Oh, wait. How do you choose the number
78:19 

78:19 of clusters?
78:23 

78:23 Um I'll take a stab at that one, too.
78:25 

78:25 I'm I'm assuming they're talking about
78:26 

78:26 K-means clusters here
78:29 

78:29 and it really depends on your question.
78:32 

78:32 So, you can have, you know, there is an
78:34 

78:34 upper limit on how many you can uh
78:37 

78:37 you can set
78:38 

78:38 based on the the software.
78:50 

78:50 Thank you. And uh part uh question six,
78:53 

78:53 could you please explain how K-means is
78:55 

78:55 supervised?
79:08 

79:08 I can just speak to that one, then. Um
79:10 

79:10 so, K-means is is not dependent on any
79:12 

79:12 labels. You can
79:14 

79:14 input your data into the algorithm and
79:17 

79:17 you're going to get kind of a distance
79:19 

79:19 metric from that specific data. It's
79:21 

79:21 it's to be looking at
79:22 

79:22 what features from your data are similar
79:24 

79:24 and then which what features are kind of
79:26 

79:26 like different or or even outliers that
79:29 

79:29 I've been going to be clusterizing all
79:31 

79:31 the locations. So, you don't need any
79:33 

79:33 training data
79:34 

79:34 to perform this K-means clustering and
79:37 

79:37 you can even use it for like some
79:38 

79:38 classification task.
79:41 

79:41 All right, thank you.
79:43 

79:43 Question seven, why does random forest
79:45 

79:45 not work well when doing a cross
79:47 

79:47 validation?
79:58 

79:58 So, I'm not sure if I understood that
80:01 

80:01 question correctly, but I'm just going
80:03 

80:03 to try to aim for
80:05 

80:05 um
80:06 

80:06 Cross-validation is a second step that
80:09 

80:09 is done, let's say, during training or
80:11 

80:11 even trying to do some of the validation
80:13 

80:13 of your model to see how it can
80:15 

80:15 generalize across multiple sets of
80:17 

80:17 training data.
80:18 

80:18 So, random forest can be used with
80:21 

80:21 cross-validation and some of those
80:23 

80:23 techniques can be even like K-fold
80:25 

80:25 cross-validation which we're going to
80:26 

80:26 discuss on the section two.
80:28 

80:28 Um
80:29 

80:29 So, it's not that it doesn't work with
80:31 

80:31 cross-validation, it just have some
80:33 

80:33 let's say, downsides where
80:36 

80:36 it is only going to be able to kind of
80:38 

80:38 classify or perform well on data that it
80:40 

80:40 has seen or at least representative
80:42 

80:42 training.
80:43 

80:43 So, it might not be able to generalize
80:45 

80:45 very well on other things just because
80:47 

80:47 features that it's learning are based on
80:49 

80:49 the training data that you input.
80:52 

80:52 Um
80:55 

80:55 Thank you.
80:56 

80:56 No, I think that that
80:58 

80:58 hopefully got to the heart of what this
81:00 

81:00 participant was asking.
81:03 

81:03 But, please pay attention to part two
81:06 

81:06 next week where we're going to go a
81:08 

81:08 little bit deeper into that.
81:10 

81:10 Question eight, when we use algorithms
81:11 

81:11 such as random forest or tree decision,
81:14 

81:14 we have different inputs for the model.
81:15 

81:15 Is it advisable to do a preliminary
81:18 

81:18 analysis to avoid collinearity
81:20 

81:20 or is the algorithm able to manage that?
81:34 

81:34 Okay, I'm going to take a stab at that
81:35 

81:35 one as well. So, it's always good to not
81:38 

81:38 even you might not need to go into
81:40 

81:40 collinearity that much, but at least do
81:42 

81:42 exploratory data analysis
81:45 

81:45 of how your data looks like and then how
81:48 

81:48 are your features aligned based on the
81:49 

81:49 features that you're trying to find or
81:51 

81:51 that you're trying to
81:53 

81:53 classify. Um the idea here is that with
81:55 

81:55 exploratory data analysis, which we're
81:57 

81:57 also going to discuss in session two,
81:60 

81:60 you can find what features from your
82:01 

82:01 data are similar enough
82:04 

82:04 to know how the model is going to
82:04 

82:04 respond or how the model is going to be
82:06 

82:06 learning from those features.
82:08 

82:08 So, we do advise always to do
82:10 

82:10 exploratory data analysis. One, for
82:12 

82:12 yourself to kind of understand how your
82:14 

82:14 data looks like and to see if there are
82:16 

82:16 any like correlations between the data,
82:18 

82:18 but two also to kind of have a heads up
82:20 

82:20 of how the model is going to be learning
82:22 

82:22 the features from your data.
82:27 

82:27 Thank you very much.
82:28 

82:28 Okay, question nine.
82:31 

82:31 We have three-parter here. I have three
82:33 

82:33 questions. What are the possible
82:34 

82:34 solutions
82:35 

82:35 if the number of samples of the
82:37 

82:37 classified class is unequal?
82:41 

82:41 Two, what is the overfitting problem?
82:44 

82:44 I don't know if you just want to attach
82:46 

82:46 attack the first couple parts of this
82:48 

82:48 one.
82:50 

82:50 Okay, there there are several
82:52 

82:52 ways of attacking some of these
82:54 

82:54 problems. So,
82:56 

82:56 just going to briefly start talking
82:58 

82:58 about number nine. Uh
83:00 

83:00 So,
83:01 

83:01 number of samples is unequal. So, there
83:04 

83:04 are many ways of doing this. First of
83:05 

83:05 all is you can try to drop some of your
83:08 

83:08 features from the data, let's say, of
83:10 

83:10 the class that you have the most
83:12 

83:12 and then make like try to make it
83:14 

83:14 balance between them. And this would be
83:16 

83:16 fine for some of these like tabular
83:18 

83:18 algorithms like random forest or
83:19 

83:19 XGBoost.
83:21 

83:21 You can also try to increase the number
83:23 

83:23 of features you have from your
83:24 

83:24 underrepresented
83:26 

83:26 class or data by just increasing the
83:29 

83:29 number of like
83:31 

83:31 observations you have by just like doing
83:32 

83:32 synthetic
83:35 

83:35 data creation or even like doing data
83:37 

83:37 augmentation to increase the number of
83:39 

83:39 features.
83:40 

83:40 There is another solution for other like
83:42 

83:42 more complicated methods like neural
83:44 

83:44 networks where
83:46 

83:46 you can use a loss function or the
83:48 

83:48 function that is going to penalize your
83:49 

83:49 model while learning to then account for
83:52 

83:52 that class imbalance as well. So, there
83:54 

83:54 are there are many techniques. We can
83:55 

83:55 just append some references to these
83:57 

83:57 questions just to like so you can look
83:59 

83:59 at look at them later.
84:01 

84:01 Um and we're going to probably discuss
84:02 

84:02 some of those on session two as well.
84:07 

84:07 Thank you.
84:08 

84:08 Question 10, do you have any additional
84:09 

84:09 machine learning references that would
84:11 

84:11 be helpful to read or use, particularly
84:14 

84:14 in the wide variety of algorithms and
84:16 

84:16 their uses?
84:18 

84:18 And it looks like we have a couple.
84:22 

84:22 We have a Coursera's course
84:26 

84:26 which is open.
84:27 

84:27 So I'm just going to put that in the
84:28 

84:28 chat. Uh we also have a couple books. We
84:32 

84:32 will add some more to this as we come up
84:35 

84:35 with them.
84:36 

84:36 But, for now I'm just kind of placing
84:37 

84:37 these in the chat and I'll look for
84:39 

84:39 these
84:41 

84:41 links to be available to you uh when we
84:43 

84:43 post this to the training web page.
84:46 

84:46 Okay, question 11. When I try to change
84:48 

84:48 the runtime type, the hardware
84:50 

84:50 accelerators are already set to GPU and
84:52 

84:52 the GPU class is standard.
84:55 

84:55 Is that correct?
84:57 

84:57 Does that sound
84:58 

84:58 Yes, and this is regarding assignment
85:01 

85:01 one and the session that is in there.
85:03 

85:03 Yes, what you want to have is that
85:05 

85:05 particular option. You don't need to
85:06 

85:06 purchase any premium GPUs. All you need
85:09 

85:09 to do is change your runtime type to
85:12 

85:12 have the GPU. If your your runtime type
85:14 

85:14 is already on GPU, then that's fine. You
85:16 

85:16 can just proceed to run some of the
85:18 

85:18 cells and make sure to kind of follow
85:20 

85:20 some of the instructions that are above
85:22 

85:22 the cells cuz you're going to need to do
85:24 

85:24 kind of
85:26 

85:26 press play on some cells before you can
85:27 

85:27 just proceed with the entirety of the
85:30 

85:30 exercise.
85:33 

85:33 Great, thank you and I hope everybody
85:35 

85:35 has
85:36 

85:36 had a chance to access the the link to
85:39 

85:39 the GitHub that also takes you to all
85:41 

85:41 the notebooks. We have that on the
85:43 

85:43 training web page and we'll be placing
85:45 

85:45 that in the chat.
85:47 

85:47 So, you have it's also included in the
85:48 

85:48 presentation itself.
85:51 

85:51 Question 12, what do you think are the
85:52 

85:52 downsides of machine learning as regards
85:54 

85:54 to dry as regards to land change science
85:58 

85:58 knowing that natural and anthropogenic
86:00 

86:00 activities are dynamic?
86:02 

86:02 More of a
86:04 

86:04 theoretical type of Yeah, that is an
86:06 

86:06 interesting question. So,
86:09 

86:09 many of the downsides of machine
86:10 

86:10 learning are based on what data do we
86:12 

86:12 have available.
86:13 

86:13 And the model is going to be probably as
86:16 

86:16 good as the data that you actually
86:17 

86:17 provide and it's going to try
86:20 

86:20 to infer or extract features out of the
86:22 

86:22 data,
86:24 

86:24 but sometimes the features that it it
86:26 

86:26 extracts are just like too simple to
86:29 

86:29 kind of model the actual anthropogenic
86:31 

86:31 activities or even like the dynamic
86:33 

86:33 realm of our atmosphere even Earth.
86:36 

86:36 So, I think that the the biggest
86:38 

86:38 downside is going to be how much data or
86:41 

86:41 how representative data we can input our
86:43 

86:43 model with so it can learn those kind of
86:46 

86:46 different
86:48 

86:48 characteristics or or different aspects
86:51 

86:51 of what we're trying to model in our
86:53 

86:53 model. Yeah.
86:59 

86:59 Okay, we have a couple minutes left, so
87:01 

87:01 I think we might just take this question
87:03 

87:03 number 13 and close it out for today.
87:07 

87:07 However, we have been collecting your
87:08 

87:08 questions and we will do our best to
87:11 

87:11 address these before we post to our
87:13 

87:13 training web page.
87:16 

87:16 Question 13, I'm trying to work with
87:17 

87:17 atmospheric phenomenon forecasts and
87:19 

87:19 predictions.
87:20 

87:20 What should guide my choice of training
87:22 

87:22 data, reanalysis data or forecasts of
87:25 

87:25 numerical weather prediction models?
87:29 

87:29 Okay, so
87:31 

87:31 that guidance and your choice of data is
87:34 

87:34 going to be based both on your temporal
87:35 

87:35 resolution, but also on your spatial
87:37 

87:37 resolution.
87:38 

87:38 So, it would actually depend on how
87:41 

87:41 temporal specific and how spatial
87:44 

87:44 specific your model is going to be to
87:46 

87:46 then select that training data. For
87:48 

87:48 example, um I've seen some forecasting
87:50 

87:50 models that would rely on some synthetic
87:53 

87:53 data generated from like the weather
87:54 

87:54 forecasting model.
87:56 

87:56 And those models they're going to kind
87:58 

87:58 of depend on some of the NOAA GFS models
88:01 

88:01 that do some of the forecasting and some
88:03 

88:03 of those are like one 1 km half degree
88:07 

88:07 resolution at the most.
88:09 

88:09 Uh so, whatever training data you're
88:12 

88:12 looking for is going to depend also on
88:14 

88:14 your area of study. There are some
88:16 

88:16 studies of how biased some of these
88:18 

88:18 models are depending on the actual study
88:21 

88:21 area you're concentrating on. So, if
88:23 

88:23 this is globally related, you're you're
88:25 

88:25 going to need to look at what are the
88:26 

88:26 bias of these existing
88:28 

88:28 um training data sets that are out there
88:30 

88:30 um to see how specific it would be or
88:32 

88:32 how how much how what is going to be the
88:34 

88:34 quality of the training data you're
88:35 

88:35 going to be looking for.
88:37 

88:37 Uh the also
88:39 

88:39 other part of your question is can we
88:40 

88:40 also take real-time observations
88:42 

88:42 available for a short period of time?
88:44 

88:44 And yeah, and that is of course. Um you
88:46 

88:46 can also have um training data that is
88:49 

88:49 going to be um close to real-time just
88:51 

88:51 to do some of the forecasting. You can
88:53 

88:53 go from like minutes to hours to even
88:56 

88:56 like do 10-day forecast just by choosing
88:58 

88:58 whatever um temporal resolution you're
89:01 

89:01 going to need for your specific use
89:02 

89:02 case.
89:05 

89:05 And I I can add
89:07 

89:07 one sentence for that real-time
89:09 

89:09 observation for validation. Please keep
89:12 

89:12 in mind that even the real-time
89:14 

89:14 observation is not fully truth. There
89:16 

89:16 are still uncertainty located in the
89:19 

89:19 real-time observations.
89:21 

89:21 If If it's on ground observations,
89:23 

89:23 there's a human-induced errors. If it's
89:25 

89:25 remote sensing, maybe we have
89:28 

89:28 retrieval
89:30 

89:30 errors occurred when we processing the
89:32 

89:32 remote sensing data. So, keep in mind
89:34 

89:34 that real-time observation is not fully
89:37 

89:37 truth.
89:40 

89:40 Okay, thank you.
89:42 

89:42 Okay, so we are going to close this out
89:44 

89:44 for today. I thank you everybody for
89:47 

89:47 attending.
89:48 

89:48 We are going to pick this back up next
89:51 

89:51 week for part two. Please take a look at
89:54 

89:54 the the code, the notebooks, and the the
89:58 

89:58 assignment that's in the in the GitHub.
90:00 

90:00 And those assignment questions
90:03 

90:03 use those to think about the
90:06 

90:06 the code and
90:08 

90:08 explore it.
90:10 

90:10 We will have a Google form available at
90:13 

90:13 the end of the training on May 4th.
90:15 

90:15 Um that will contain these questions in
90:17 

90:17 for you to submit your answers, which
90:19 

90:19 will lead to
90:20 

90:20 a certificate of completion, which is
90:22 

90:22 attending all three trainings, all three
90:24 

90:24 parts, of course, and submitting the
90:27 

90:27 training
90:28 

90:28 homework.
90:29 

90:29 So, with that, um I just want to leave
90:31 

90:31 it to Jordan or Mark or Jules or Jean,
90:35 

90:35 if you have anything that you wanted to
90:36 

90:36 say to the participants here today,
90:39 

90:39 please feel free.
90:43 

90:43 No, just thank you very much for
90:45 

90:45 attending, and hopefully we do some more
90:47 

90:47 exciting things on session two and
90:48 

90:48 three.
90:50 

90:50 We certainly will. Okay, uh
90:53 

90:53 thank you, and enjoy the rest of your
90:55 

90:55 day, everybody.

## Part 2

00:01 good morning good afternoon good evening
00:04 

00:04 welcome everyone to the training series
00:07 

00:07 fundamentals of machine learning for
00:09 

00:09 Earth science
00:10 

00:10 of the three-part Series this is part
00:12 

00:12 two training data and land color
00:14 

00:14 classification example
00:18 

00:18 once again I am your host my name is
00:21 

00:21 Brock Blevins I am training coordinator
00:24 

00:24 for NASA's applied remote sensing
00:26 

00:26 training program
00:28 

00:28 let's discuss our training objectives
00:30 

00:30 for this series overall we hope that by
00:33 

00:33 the end of this training participants
00:34 

00:34 will be able to recognize the most
00:36 

00:36 common machine learning methods used for
00:38 

00:38 processing earth science data describe
00:40 

00:40 their benefits and limitations
00:43 

00:43 explain how to apply basic machine
00:45 

00:45 learning algorithms and techniques
00:48 

00:48 use an analysis appropriate training
00:50 

00:50 data set to evaluate conditions and
00:52 

00:52 solutions for a given case study and
00:54 

00:54 complete basic procedures to interpret
00:56 

00:56 refine and evaluate the accuracy of
00:58 

00:59 machine learning analysis
01:02 

01:02 once again a reminder of the
01:03 

01:03 prerequisites if you don't already have
01:05 

01:05 a good handle of the fundamentals remote
01:07 

01:07 sensing we suggest you take a look at
01:09 

01:09 our session one that we have on demand
01:12 

01:12 fundamentals of remote sensing
01:15 

01:15 attendees will also need to access
01:17 

01:17 Google Drive and Google collabs so in
01:20 

01:20 order to do this you'll have to have an
01:22 

01:22 email ending in gmail.com
01:25 

01:25 we will have this training recording
01:28 

01:28 available within 48 hours so you can go
01:30 

01:30 through this perceive these procedures
01:32 

01:32 at your own pace
01:36 

01:36 here's a schedule for each of the three
01:37 

01:37 parts of this training April 20th
01:40 

01:40 through May 4th
01:42 

01:42 there'll be one homework associated with
01:43 

01:43 this series and it'll be made available
01:45 

01:45 by May 4th this would be a Google form
01:47 

01:47 submission and it'll be very similar to
01:50 

01:50 the questions that you are asked to
01:52 

01:52 reflect upon at the end of each Google
01:55 

01:55 collab session
02:01 

02:01 so with that I'm going to hand this over
02:02 

02:02 to Jordan who will introduce us to part
02:06 

02:06 two training data and land cover
02:09 

02:09 classification example
02:16 

02:16 okay so this is part two of our
02:19 

02:19 fundamentals of machine learning for its
02:21 

02:21 science
02:22 

02:22 today we're going to talk about some of
02:24 

02:24 the churning data generation how we can
02:26 

02:26 do exploratory data analysis or Jada and
02:30 

02:30 then a particular land cover
02:31 

02:31 classification example
02:35 

02:35 the outline of session two we're going
02:38 

02:38 to first kind of explain how to download
02:39 

02:39 some of the training data we're going to
02:42 

02:42 discuss some of the Expo exploratory
02:44 

02:44 data analysis techniques
02:46 

02:46 we're going to extract data from tabular
02:49 

02:49 data sets and also from raster data sets
02:51 

02:51 and then we're going to have an exercise
02:53 

02:53 where we're going to be doing training
02:55 

02:55 and prediction of these double line
02:58 

02:58 raster data set formats
02:60 

02:60 lastly we're going to do some metrics
03:02 

03:02 and model evaluation we're going to
03:03 

03:03 discuss the concept of cross validation
03:06 

03:06 and how you can improve some of your
03:08 

03:08 models even when you have small data
03:10 

03:10 sets
03:11 

03:11 at the end we're going to have a post
03:13 

03:13 session assignment we're going to
03:15 

03:15 discuss briefly and then we're going to
03:17 

03:17 have the QA session
03:19 

03:19 as always the resources for this
03:21 

03:21 training are going to be on the kid of
03:23 

03:23 repository that we shared across these
03:26 

03:26 sessions
03:28 

03:28 the objectives of today after
03:30 

03:30 participating in this training the
03:33 

03:33 attendees will be able to one use basic
03:35 

03:35 programming procedures to download use
03:37 

03:38 and process remote sensing data use an
03:41 

03:41 analysis appropriate training data set
03:42 

03:42 to evaluate the conditions and solutions
03:45 

03:45 for a given case study and complete
03:48 

03:48 basic procedures to interpret refine and
03:51 

03:51 evaluate the accuracy of the results of
03:53 

03:53 material learning analysis so with that
03:55 

03:55 said please
03:59 

03:59 so in today's training we will use some
04:02 

04:02 remote sensing data set clocked by an
04:06 

04:06 instrument called moderate resolution
04:09 

04:09 imaging spectral radiometer modest in
04:12 

04:12 short
04:13 

04:14 and I will give a briefing introduction
04:16 

04:16 about the instrument and the data and
04:19 

04:19 how to access some of those modest
04:21 

04:21 products
04:24 

04:24 first of all modest is a key instrument
04:27 

04:27 aboard both Tara and aqua satellites
04:30 

04:30 those satellites are polar orbiting
04:34 

04:34 flying at an attitude
04:36 

04:36 altitude between 700 to 800 kilometers
04:40 

04:40 and orbiting around the earth about 100
04:44 

04:44 meters and producing a stripe of the
04:48 

04:48 observation of Earth's surface and the
04:52 

04:52 satellite observation will cover the
04:54 

04:54 entire Earth's surface every one to two
04:57 

04:57 days
04:58 

04:58 and data acquired by those instruments
05:02 

05:02 will further persist and generate
05:05 

05:05 different products including atmosphere
05:09 

05:09 ocean land and crossfair this product
05:12 

05:12 will help scientists to better
05:14 

05:14 understand Global Dynamics and the
05:17 

05:17 process
05:19 

05:19 uh occurring on the land in the ocean
05:22 

05:22 and in the lower atmosphere
05:24 

05:24 our groups our group have multiple
05:28 

05:28 applications with modest products and
05:30 

05:30 one of them is to use modest land
05:32 

05:32 products to generate Global Water mask
05:35 

05:35 at a 250 meter resolution
05:38 

05:38 such water mask plays fundamental and
05:41 

05:41 critical role in processing remote
05:44 

05:44 sensing data for example scientists
05:46 

05:46 relied on collaboration algorithms to
05:50 

05:50 convert spatial signals clocked by
05:53 

05:53 Modest instrument and convert those
05:57 

05:57 signals into physical variables such as
05:59 

05:59 surface temperature if we mistakenly
06:01 

06:01 apply Lan algorithm to water pixels I
06:05 

06:05 will definitely introduce unnecessary
06:06 

06:06 arrows so our goal is to generate a high
06:10 

06:10 resolution a water mask over global and
06:14 

06:14 have a higher accuracy of water pixel
06:18 

06:18 and the land pixel distinguished
06:22 

06:22 in the
06:24 

06:24 in this slides we list a high level
06:28 

06:28 workflow of the process we taken we use
06:31 

06:31 machine learning and
06:34 

06:34 basic workflow are split into three
06:37 

06:37 different components
06:40 

06:40 the during the data processing with
06:43 

06:43 subset and extract surface reflectance
06:46 

06:46 from the modest land products and apply
06:49 

06:49 quality assurance
06:51 

06:51 to figure out
06:53 

06:53 missing data or bad data and we're
06:57 

06:57 constructing training data sets
06:60 

06:60 with those training data sets we build a
07:02 

07:02 random Forest actionables
07:06 

07:06 gbr models and train ways both GPU and
07:10 

07:10 CPU we also conduct a few hyper
07:13 

07:13 parameter tuning
07:15 

07:15 technique to get a better model and the
07:20 

07:20 final outputs will be annual and daily
07:23 

07:23 water land map and also a seven class
07:27 

07:27 water Maps per year
07:29 

07:29 on the right hand side you can see our
07:32 

07:32 product compared with other products
07:34 

07:34 generate with traditional
07:37 

07:37 method are slightly different we have a
07:42 

07:42 missed we have a different label on
07:45 

07:45 water or land pixels
07:47 

07:47 back to modest data
07:50 

07:50 all modest products are stored at the
07:54 

07:54 distributed active icon centers of NASA
07:58 

07:58 we call Dax and different products were
08:02 

08:02 stored in different location each link
08:05 

08:05 depends on what your specific task you
08:09 

08:09 can identify the
08:12 

08:12 modest products through different attack
08:15 

08:15 Center and each link will lead you to
08:18 

08:18 the introduction of data products and
08:20 

08:20 the different methods to download and or
08:25 

08:25 view those data products
08:27 

08:27 NASA also provides my web-based
08:31 

08:31 interface to access all that data
08:35 

08:35 models is one of those data products you
08:38 

08:38 can access through illustrator search
08:41 

08:41 here I showed one example you can use
08:45 

08:45 Earth data search to filter
08:48 

08:48 instrument
08:50 

08:50 like select models you can view the list
08:55 

08:55 of modest products show up in the second
08:58 

08:58 panel and you can also reveal certain
09:02 

09:02 modest data products on the map
09:06 

09:06 the next slides actually I did a spatial
09:10 

09:10 and the temporal filter
09:13 

09:13 of us uh surface reflectance and
09:18 

09:18 a small preview map will show up on the
09:23 

09:23 eastern part of United States
09:27 

09:27 as a part of NASA open science policy
09:29 

09:29 and the related goals all that
09:32 

09:32 are migrating their collections to the
09:34 

09:34 Earth data clock and the different
09:37 

09:37 centers have a different schedule to
09:39 

09:39 proceed and on left hand side I show one
09:43 

09:43 example to
09:45 

09:45 migrating atmosphere data collections to
09:49 

09:49 the firstly the cloud and some of models
09:52 

09:52 data is already available in AWS Cloud
09:56 

09:56 as rebucket you can access with a
10:01 

10:01 database credential and AWS softwares to
10:08 

10:08 retrieve the data
10:11 

10:11 is necessary for you
10:13 

10:13 all right no I'm having heading to Caleb
10:20 

10:20 now we will look at uh exploratory data
10:23 

10:23 analysis
10:26 

10:26 in the first session session Jules
10:28 

10:28 showed us this wonderful diagram of the
10:30 

10:30 machine learning pipeline here we will
10:32 

10:32 focus on a subsection of this pipeline
10:38 

10:38 exploratory data analysis or Eda is a
10:42 

10:42 critical step in this pipeline
10:45 

10:45 Eda is the process of understanding the
10:48 

10:48 data that you have collected or that you
10:50 

10:50 are going to use in your machine
10:52 

10:52 learning model Eda can help identify
10:54 

10:54 missing values outliers correlations and
10:58 

10:58 patterns in the data through cleaning
11:00 

11:00 pre-processing statistical analyzes and
11:04 

11:04 visualizations to get a high quality
11:06 

11:06 data set
11:11 

11:11 data quality is a critical factor that
11:14 

11:14 can significantly impact machine
11:16 

11:16 learning model performance poor data
11:18 

11:18 quality can lead to inaccurate
11:20 

11:20 predictions biased results and poor
11:22 

11:22 model performance emphasizing the
11:24 

11:24 importance of high quality data
11:26 

11:26 pre-processing and cleaning therefore it
11:29 

11:29 is essential to ensure that the data
11:31 

11:31 used to train a machine learning model
11:33 

11:33 is of high quality
11:35 

11:35 we can do this with with proper
11:37 

11:37 pre-processing and cleaning to remove
11:39 

11:39 the outliers missing values and
11:41 

11:41 inconsistencies in the data as well as
11:43 

11:43 identifying things like correlations and
11:46 

11:46 patterns by visualizing the data
11:49 

11:49 ensuring the data quality is high is
11:51 

11:51 critical for building accurate and
11:53 

11:53 reliable machine learning models that
11:55 

11:55 can be used to make informed decisions
11:57 

11:57 the main data types that most people
11:60 

11:60 would be working with in a machine
12:01 

12:01 learning data set in a training data set
12:05 

12:05 are numerical categorical data Text data
12:10 

12:10 or time series data
12:12 

12:12 numerical data includes continuous or
12:14 

12:14 discrete values while categorical data
12:17 

12:17 includes discrete values that represent
12:19 

12:19 categories or groups text Data includes
12:22 

12:22 unstructured data in the form of text or
12:24 

12:24 natural language time series data
12:26 

12:26 includes data points that are collected
12:28 

12:28 at regular intervals over time and can
12:30 

12:30 be used to forecast future values or
12:32 

12:32 identify Trends and patterns in the data
12:35 

12:35 off to the right we see a real world
12:37 

12:37 example from our Modis training data set
12:40 

12:40 we use pandas to describe the data set
12:42 

12:42 variables and we can see if there are
12:44 

12:44 any null data set null values as well as
12:48 

12:48 the numerical data type all of these are
12:51 

12:51 a part of the numerical data format they
12:54 

12:54 are continuous except for the water
12:57 

12:57 variable which is categorical of water
13:00 

13:00 or not water
13:02 

13:02 after understanding the data types the
13:04 

13:04 next step in Eda is to clean and
13:06 

13:06 pre-process the data
13:08 

13:08 missing values compose a challenge for
13:10 

13:10 machine learning models so it's
13:12 

13:12 important to understand the extent of
13:14 

13:14 missing or null data in the data set we
13:16 

13:16 are working with
13:17 

13:17 this includes handling missing values
13:20 

13:20 removing duplicates and dealing with
13:21 

13:21 outliers
13:23 

13:23 missing values can be handled by
13:25 

13:25 imputing the mean or median value of the
13:27 

13:27 feature by using more complex imputation
13:30 

13:30 techniques
13:31 

13:32 removing duplicates and dealing with
13:33 

13:33 outliers can help improve the quality of
13:35 

13:35 the data which in turn will affect the
13:37 

13:37 model performance
13:40 

13:40 to the right
13:41 

13:41 we describe some methods to detecting
13:43 

13:43 and handling null values in pandas
13:46 

13:46 we can use is null to detect null values
13:49 

13:49 in a pandas data frame that's in your
13:51 

13:51 machine learning data set we can also
13:53 

13:53 handle those null values using methods
13:55 

13:56 like Drop n a to drop rows of your data
13:58 

13:58 set that contain a null value you can
14:00 

14:00 use fill and a to fill out null values
14:03 

14:03 with a special value like mean or median
14:05 

14:05 we'll see more of this in our uh
14:08 

14:08 exercise and on Eda
14:10 

14:11 in exploratory data analysis visualizing
14:13 

14:13 data distributions is a critical step in
14:16 

14:16 understanding the underlying patterns
14:18 

14:18 and characteristics of a machine
14:20 

14:20 learning data set
14:22 

14:22 by exploring the distribution of the
14:24 

14:24 data we can identify outliers assess the
14:27 

14:27 data's normality and determine if there
14:29 

14:29 are any relationships or correlations
14:31 

14:31 between the variables
14:33 

14:33 there are several common methods for
14:35 

14:35 visualizing data distributions including
14:37 

14:37 histograms box plots and density plots
14:40 

14:40 here we're looking at histograms
14:42 

14:42 histograms provide a visual
14:44 

14:44 representation of the distribution of a
14:45 

14:45 single variable box plots and density
14:49 

14:49 plots show the distribution of multiple
14:50 

14:50 variables
14:53 

14:53 histograms are a graphical
14:55 

14:55 representation of the distribution of a
14:58 

14:58 data set it shows the frequency
14:60 

14:60 distribution of a single variable with
15:02 

15:02 the X asset axis representing the range
15:04 

15:05 of values in the y-axis representing the
15:07 

15:07 frequency or count of the observations
15:09 

15:09 in that range
15:11 

15:11 histograms can be used to identify the
15:13 

15:13 presence of outliers and or unusual
15:15 

15:15 patterns in the data
15:18 

15:18 to the right we see a histogram that
15:20 

15:20 shows the spectral response for a single
15:22 

15:22 modus surface reflectance band grouped
15:24 

15:24 by class
15:25 

15:25 up top is the class of not water
15:28 

15:28 down low is the class of water
15:32 

15:32 what we can tell from this is that there
15:34 

15:34 is a significant difference between the
15:36 

15:36 range of spectral responses for this
15:37 

15:37 band across the top class compared to
15:39 

15:39 the second class which is water this
15:41 

15:41 lets us know that there's a relationship
15:43 

15:43 between the spectral response of this
15:46 

15:46 band and the water not water classes
15:49 

15:49 a machine learning outlier detection is
15:51 

15:51 the process of identifying and handling
15:53 

15:53 data points that deviate significantly
15:55 

15:55 from the rest of the data set outliers
15:58 

15:58 can be caused by measurement errors data
16:00 

16:00 entry errors or represent genuine
16:02 

16:02 extreme values in the data in either
16:04 

16:04 case outliers can have a significant
16:07 

16:07 impact on the accuracy of our machine
16:09 

16:09 learning models and it's essential to
16:10 

16:10 identify and handle them correctly
16:13 

16:13 box plots are a powerful visualization
16:15 

16:15 tool for detecting outliers they display
16:18 

16:18 the distribution of a data set by
16:20 

16:20 showing the median quartiles and
16:22 

16:22 outliers outliers in a box plotter
16:25 

16:25 points that are more than 1.5 times the
16:27 

16:27 interquartile range away from the
16:29 

16:29 nearest quartile
16:31 

16:31 box plots can be created for individual
16:33 

16:33 variables or multiple variables At Once
16:35 

16:35 by visually inspecting box plots we can
16:37 

16:37 quickly identify the presence of
16:39 

16:39 outliers in our data
16:41 

16:41 we can see an example of a box plot here
16:43 

16:43 to our right
16:44 

16:44 the black plot on the left is a box plot
16:47 

16:47 of a surface reflectance band where the
16:49 

16:49 points are labeled land the box plot on
16:51 

16:51 the right is where the points are
16:52 

16:52 labeled water what we see here is that
16:54 

16:54 there are some outliers in the right box
16:56 

16:56 plot labeled water it could be the case
16:59 

16:59 that some pixels in there should have
17:00 

17:00 been labeled land or distribution isn't
17:03 

17:03 normal enough
17:05 

17:05 outlier detection is an essential step
17:08 

17:08 in machine learning and visualizing box
17:10 

17:10 plots and Scatter Plots is a powerful
17:11 

17:11 tool for identifying outliers in our
17:13 

17:13 data set
17:14 

17:14 by detecting and handling outliers
17:16 

17:16 correctly we can improve the accuracy
17:18 

17:18 and robustness of our machine learning
17:19 

17:19 models
17:22 

17:23 in machine learning understanding the
17:25 

17:25 relationships between variables is
17:26 

17:26 crucial for developing accurate and
17:28 

17:28 robust models investigating correlations
17:30 

17:30 between variables can help us identify
17:32 

17:32 which features are most relevant to the
17:35 

17:35 problem we are trying to solve and
17:37 

17:37 improve the performance of our models
17:39 

17:39 one common approach to investigating
17:42 

17:42 correlations in machine learning data
17:44 

17:44 sets is by using a correlation
17:46 

17:46 coefficient heat map
17:48 

17:48 the correlation coefficient is a
17:51 

17:51 statistical measure that quantifies the
17:53 

17:53 degree of linear relationship between
17:55 

17:55 two variables it ranges from negative
17:58 

17:58 one to one where negative one indicates
18:00 

18:00 a perfect negative correlation zero
18:03 

18:03 indicates no correlation and one
18:05 

18:05 indicates a perfect positive correlation
18:08 

18:08 the sign of the coefficient indicates
18:10 

18:10 the the direction of the relationship
18:12 

18:12 with positive values indicating a
18:14 

18:14 positive correlation and negative values
18:16 

18:16 indicating a negative correlation
18:19 

18:19 by using this correlation coefficient
18:22 

18:22 heat map we can identify which variables
18:25 

18:25 are highly correlated with each other
18:28 

18:28 highly correlated variables can lead to
18:30 

18:30 multi-collinearity which can cause
18:32 

18:32 issues in model interpretation and lead
18:34 

18:34 to unstable and unreliable model
18:37 

18:37 coefficients
18:38 

18:38 therefore it is important to identify
18:40 

18:41 and handle highly correlated variables
18:43 

18:43 in the data set before developing our
18:45 

18:45 machine learning models
18:47 

18:47 a correlation coefficient heat map is a
18:49 

18:50 powerful tool for investigating
18:51 

18:51 correlations between variables in a
18:53 

18:53 machine learning data set by identifying
18:56 

18:56 highly correlated variables we can
18:58 

18:58 improve the performance and
18:59 

18:59 interpretability of our models however
19:01 

19:02 it is important to remember that
19:03 

19:03 correlation does not imply causation and
19:06 

19:06 other factors may be influencing the
19:08 

19:08 relationships between variables
19:12 

19:12 here we take a closer look at the
19:14 

19:14 correlation coefficient heat map of our
19:16 

19:16 Modis training data set as expected we
19:19 

19:19 can see that some bands that are closer
19:21 

19:21 together in wavelength have a strong
19:23 

19:23 relationship with each other we can look
19:25 

19:25 at how each band affects the water
19:27 

19:27 classification as expected from seeing
19:30 

19:30 our histogram of the distribution of
19:31 

19:31 values we can see that a lower value
19:33 

19:33 from each of the Bands Trends towards a
19:36 

19:36 classification of water although no band
19:39 

19:39 stands out by having a very strong
19:41 

19:41 negative correlation
19:43 

19:43 in conclusion Eda is a critical step in
19:46 

19:47 any machine learning project to
19:48 

19:48 understand the structure and properties
19:49 

19:49 of the machine learning data set
19:52 

19:52 visualizations and Analysis techniques
19:55 

19:55 such as data distributions correlations
19:57 

19:57 missing value handling and outlier
19:60 

19:60 detections can provide valuable insights
20:03 

20:03 for feature selection pre-processing and
20:05 

20:05 model selection
20:07 

20:07 with these Eda techniques and tools
20:09 

20:09 machine learning models can be developed
20:10 

20:10 with a better understanding of the
20:12 

20:12 outlying underlying data
20:21 

20:21 now that we've talked about exploratory
20:24 

20:24 data analysis let's do some in practice
20:26 

20:26 here we're at the rset ml fundamentals
20:29 

20:29 GitHub and we can access our next
20:31 

20:31 exercise it is the Modis Eda one and we
20:35 

20:35 can click on the link to open it in
20:37 

20:37 Google collaboratory and run it there
20:40 

20:40 remember you do have to have a Google
20:42 

20:42 account to access this
20:44 

20:44 is an introductory notebook to
20:45 

20:45 familiarize yourself with Eda techniques
20:47 

20:47 for machine learning for this work we
20:49 

20:50 will use data from the Modis instrument
20:52 

20:52 to test several data science techniques
20:54 

20:54 and machine learning algorithms the
20:56 

20:56 intent of this notebook is threefold
20:58 

20:58 first an exploratory data analysis is
21:01 

21:01 conducted to visualize the optical data
21:03 

21:03 of the Modis instrument and the
21:05 

21:05 distribution of this tabular data set
21:07 

21:07 across water pixels
21:08 

21:08 next this notebook briefly reviews the
21:11 

21:11 correlation of some of the spectral
21:12 

21:12 bands in the task water classification
21:15 

21:15 finally we introduce the topic of
21:16 

21:17 feature engineering and outlier
21:18 

21:18 detection that might be of use for other
21:20 

21:20 applications
21:21 

21:21 this entire work is done using the
21:23 

21:23 Python programming language and based on
21:25 

21:25 a data set uploading the hugging phase
21:30 

21:30 so here we're going to start running
21:33 

21:33 remember we're gonna get this warning
21:36 

21:36 that's okay we wrote this
21:39 

21:39 thank you
21:41 

21:41 so while the collaboratory environment
21:44 

21:44 has many of our packages like before we
21:47 

21:47 still need to install some of our own
21:51 

21:51 so we've installed the packages that we
21:54 

21:54 need now we're going to import some
21:55 

21:55 other packages that we'll use for
21:57 

21:57 performing the exploratory data analysis
22:01 

22:01 we're going to Define some general
22:03 

22:03 variables that kind of sets us up
22:07 

22:07 and we're going to load in our data set
22:08 

22:08 this is coming in from hugging face a
22:11 

22:11 tool that you're able to share data sets
22:14 

22:14 and models
22:16 

22:16 we load this into a pandas data frame
22:18 

22:18 and we can kind of examine a sample of
22:21 

22:21 it here we see that we have our water
22:22 

22:22 classification and we have our surface
22:25 

22:25 reflectance bands that come from the
22:26 

22:26 Modis instrument we also have some
22:28 

22:28 calculated indices that are some indices
22:30 

22:30 that are calculated from the surface
22:33 

22:33 reflectance bands
22:36 

22:36 in this section we'll start to inspect
22:38 

22:38 and understand the nature of our data
22:39 

22:39 set
22:40 

22:40 the simplest first step when we have a
22:42 

22:42 data set is to inspect the data types
22:45 

22:45 columns attributes and the shape of our
22:47 

22:47 data set
22:48 

22:48 here we see that all of our data are of
22:51 

22:51 type in 64. if we don't have any null
22:54 

22:54 values and we have 800 of these values
22:58 

22:58 and we have 10 columns variables
23:02 

23:02 pandas provides an excellent function to
23:04 

23:04 inspect the contents of our data frames
23:06 

23:06 in a more concise way note the number of
23:08 

23:08 observations per feature and the minimum
23:10 

23:10 maximum values per modus band
23:15 

23:15 unfortunately the described function
23:17 

23:17 does not provide any information for us
23:19 

23:19 to notice if there were any no data
23:21 

23:21 values in the data set for example let's
23:24 

23:24 copy a row from the data set and
23:26 

23:26 introduce a no data value in the water
23:28 

23:28 column our label and note how the
23:31 

23:31 described function from pandas does not
23:32 

23:32 change the overall statistics besides
23:35 

23:35 showing an item Less in the count
23:37 

23:37 section here we do that we put in the
23:39 

23:39 first as Nan and then we look at the
23:43 

23:43 describe and we see that there is no
23:45 

23:45 sort of indication that there's null
23:47 

23:47 value
23:49 

23:49 thus if we want to know if our data set
23:51 

23:51 contains any no data values we need to
23:53 

23:53 perform one more step in order to
23:55 

23:55 understand which columns might have no
23:57 

23:57 data values we can use the is null
23:59 

23:59 function which gives us the co the rows
24:02 

24:02 that show us where there's a null value
24:04 

24:04 we see here sure enough that we have a
24:07 

24:07 nand value in our water column
24:11 

24:11 okay
24:13 

24:13 there are many ways of handling no data
24:15 

24:15 values in machine learning we'll not
24:17 

24:17 dive too deep into the details of it but
24:19 

24:19 as a general idea we can remove rows
24:21 

24:21 with no data values and if we know no
24:24 

24:24 data's values belong to a specific group
24:26 

24:26 we might be able to convert it to the
24:28 

24:28 appropriate value for example our
24:30 

24:30 digital surface model returns no data
24:32 

24:32 values only on water bodies which could
24:34 

24:34 be useful to apply here for additional
24:36 

24:36 data points
24:37 

24:37 once we We have dealt with our no data
24:40 

24:40 values we can go ahead and visualize
24:41 

24:41 some of the data to understand its
24:42 

24:42 structure and find any patterns
24:45 

24:45 here we're taking a sample of the
24:48 

24:48 overall data set 10 of it
24:51 

24:51 to speed up some of the visualizations
24:54 

24:54 that we're going to perform
24:56 

24:56 this will still give us a general idea
24:58 

24:58 of what the overall data set is doing
24:60 

24:60 but it's useful to do if your data set
25:02 

25:02 is too large and it might be too
25:04 

25:04 computationally expensive to perform
25:06 

25:06 some of the
25:07 

25:07 tests here in our exploratory data
25:10 

25:10 analysis
25:11 

25:11 we see another sample of the data set
25:15 

25:15 and here we're going to do a correlation
25:16 

25:16 plot with water points as the orange
25:21 

25:21 this is a lot to take in but what we can
25:23 

25:23 read from this is the X and Y axes are
25:27 

25:27 our bands and those are the correlations
25:30 

25:30 between those bands so we can see
25:33 

25:33 down here we see the correlation between
25:36 

25:37 ndwi the normalized differentiable water
25:39 

25:39 index 2 and the surface reflectance band
25:42 

25:42 1. the orange points are labeled are the
25:46 

25:46 points labeled water while the blue
25:48 

25:48 points are the points labeled land
25:51 

25:51 we can see there are some sort of
25:53 

25:53 relationships but it's a little messy to
25:55 

25:55 tell we can get a little more idea from
25:58 

25:58 some other points such as surface
26:01 

26:01 reflectance band 5.
26:03 

26:03 and surface reflectance band 2. we can
26:05 

26:05 see that there's a little better
26:06 

26:06 grouping of the land pixels against the
26:09 

26:09 water pixels that are down here
26:12 

26:12 this is useful in telling the
26:14 

26:14 correlation relationships between
26:15 

26:15 different variables in addition to being
26:18 

26:18 able to separate those correlation
26:20 

26:20 relationships between land and water
26:22 

26:23 values
26:26 

26:26 another good practice is to understand
26:28 

26:28 the distribution of values for each
26:30 

26:30 column feature this will show you where
26:33 

26:33 most of your data lives for each feature
26:34 

26:34 in the data set including the
26:36 

26:36 distribution of training labels
26:38 

26:38 here we have a pretty perfect split
26:40 

26:40 between land and water values so we
26:42 

26:42 would expect to see almost the same
26:44 

26:44 number of land pixels and water pixels
26:47 

26:47 in our data set
26:50 

26:50 now we have the distribution of the
26:52 

26:52 total data set of each of the Bands we
26:55 

26:55 see it doesn't look like a totally
26:56 

26:56 normal distribution where you have tails
26:58 

26:58 on both ends this is mostly because we
27:01 

27:01 have a the water distribution is
27:04 

27:04 different from the land distribution and
27:07 

27:07 combined it makes it look a little
27:08 

27:08 strange
27:10 

27:10 we can see here that we have two humps
27:13 

27:13 and we can kind of identify that this
27:15 

27:15 may be the water Distribution off to the
27:18 

27:18 left and off to the right we have the
27:20 

27:20 land distribution
27:24 

27:24 now how can we do a more statistical
27:26 

27:26 approach to correlation using we can use
27:29 

27:29 the pandas core function
27:31 

27:31 this will give us the previously talked
27:33 

27:33 about correlation coefficient heat map
27:35 

27:35 that we had seen earlier
27:37 

27:37 this tells us between negative one and
27:40 

27:40 one if if two different variables have a
27:44 

27:44 negative relationship or a positive
27:46 

27:47 correlation relationship
27:49 

27:49 we see that previously stated the
27:52 

27:52 surface reflectance bands that are
27:54 

27:54 closer together and the way in
27:56 

27:56 wavelength are highly correlated and we
27:59 

27:59 also see that there are negative
28:01 

28:01 correlations between the Water band The
28:03 

28:03 Water classification and the surface
28:05 

28:05 reflectance bands meaning that the lower
28:07 

28:07 the surface reflectance bands may be the
28:10 

28:10 more water it could be
28:16 

28:16 here we take another look at the
28:18 

28:18 distributions this gives us a nice
28:20 

28:20 little line that follows along with the
28:22 

28:22 distribution it might be a little easier
28:23 

28:23 to look at
28:25 

28:25 um
28:26 

28:26 we see kind of the same distributions
28:28 

28:28 and we can just kind of see the
28:30 

28:30 relationship of water and land between
28:32 

28:32 the two
28:36 

28:36 we can also Target specifically the
28:38 

28:38 distributions of specific features when
28:41 

28:41 related to this corresponding label this
28:44 

28:44 first one is the surface reflectance
28:46 

28:46 Band 1 corresponding to the water label
28:49 

28:49 the water label is the one down low
28:52 

28:52 the land label is the one up top
28:55 

28:55 we see that there's a pretty normal
28:57 

28:57 distribution up top with a higher median
28:60 

28:60 value
29:01 

29:01 um
29:02 

29:02 and then down low we see kind of a
29:05 

29:05 different type of distribution for water
29:07 

29:07 where most of those Trend towards zero
29:10 

29:10 and much lower than the land
29:11 

29:11 distribution
29:14 

29:14 we can do this again for all of the
29:17 

29:17 other variables in our data set we see
29:20 

29:20 pretty much similar things some bands
29:22 

29:23 have closer together
29:24 

29:24 distributions than others
29:29 

29:29 and some bands it's pretty easy to tell
29:31 

29:31 the difference between what a land pixel
29:33 

29:33 might look like in a water pixel might
29:35 

29:35 look like based off of the distribution
29:37 

29:37 of the variables
29:45 

29:45 I'm going to keep going
29:50 

29:50 so now that we've taken a look at the
29:52 

29:52 distribution of our variables we can
29:53 

29:53 start looking at outlier detection
29:55 

29:55 finding outliers is important to
29:57 

29:57 understand those Corner cases where our
29:59 

29:59 models might not perform as expected or
30:01 

30:01 where we might need additional training
30:03 

30:03 data from
30:04 

30:04 there are several ways of finding
30:06 

30:06 outlier values but we will concentrate
30:08 

30:08 on Turkey IQR for this example
30:12 

30:12 turkey IQR rule says the outliers are
30:15 

30:15 values more than 1.5 times the
30:17 

30:17 interquartile range from the quartiles
30:19 

30:19 either below q1 minus 1.5 IQR or above
30:24 

30:24 Q3 plus 1.5 IQR thus we can simply
30:28 

30:28 calculate outliers per column feature by
30:30 

30:30 taking the necessary necessary
30:32 

30:32 percentiles
30:35 

30:35 here's our function to do that here we
30:37 

30:37 see the floor which is the q1 minus 1.5
30:40 

30:40 and the Q3 plus the 1.5 interquartile
30:44 

30:44 range
30:46 

30:46 for example we do this for ndwi2 and we
30:50 

30:50 can get the outliers from ndwi2
30:54 

30:54 we see these are really low or really
30:56 

30:56 high values
30:58 

30:58 this might tell us that there's
30:59 

30:59 something wrong going on than the
31:01 

31:01 calculation of ndwi2 or that there's
31:05 

31:05 something wrong in the surface
31:08 

31:08 reflectance bands that are leading to
31:09 

31:09 these calculations being way off from
31:11 

31:11 the normal distribution
31:16 

31:16 next we're going to look at feature
31:18 

31:18 engineering or creating new features
31:20 

31:20 there are cases where our features might
31:23 

31:23 not be enough for our model we might
31:25 

31:25 have a small number of features or a set
31:27 

31:27 of features that might not be
31:28 

31:28 representative enough
31:30 

31:30 one General approach to solve this is to
31:32 

31:32 use future engineering technique
31:34 

31:34 techniques to increase and or improve
31:36 

31:36 our data set representativeness
31:39 

31:39 for our water classification example we
31:41 

31:41 do not need any feature engineering
31:43 

31:43 techniques since we were able to perform
31:44 

31:44 accurate detections by simply
31:46 

31:46 calculating several indices and using
31:48 

31:48 the original band Optical bands however
31:51 

31:51 this might be necessary in other
31:53 

31:53 problems where your data by itself might
31:55 

31:55 not provide enough representativeness
31:58 

31:58 here we have a function to do pollinate
32:01 

32:01 polynomial features between the um the
32:05 

32:05 surface reflectance bands or the
32:07 

32:07 features in our data set
32:08 

32:08 these are going to be relationships
32:10 

32:10 between the Surface reflectance bands
32:13 

32:13 and we can generate a variable for each
32:15 

32:15 one of those
32:17 

32:17 here we simply reduce the combinations
32:19 

32:19 of the bands and this increases our
32:22 

32:22 future space from 10 to 65.
32:25 

32:25 for an algorithm like a random Force
32:26 

32:26 where decisions are being made this
32:28 

32:28 could provide a substantial Improvement
32:30 

32:30 algorithms like convolutional neural
32:32 

32:32 networks might not need this since they
32:35 

32:35 can extract patterns directly out of the
32:37 

32:37 data on their own
32:39 

32:39 here we see the updated data set where
32:42 

32:42 we have the usual features that we've
32:43 

32:43 been looking at before but also we have
32:46 

32:46 additional features which are the
32:48 

32:48 combinations of each of the Bands
32:52 

32:52 we see that we've upped our column count
32:54 

32:54 to 66 from 10.
32:57 

32:57 next we're going to look at
32:58 

32:58 dimensionality reduction using principal
33:00 

33:00 component analysis or PCA
33:03 

33:03 PCA is a technique that transforms a
33:05 

33:05 data set of many features into principal
33:08 

33:08 components that summarize the variance
33:10 

33:10 that underlies the data this can also be
33:13 

33:13 used to extract the principal components
33:15 

33:15 from each feature so they can be used in
33:17 

33:17 training
33:18 

33:18 here we apply the princip the PCA
33:20 

33:20 algorithm telling it that we have 66
33:23 

33:23 columns to apply it to
33:25 

33:25 we apply that transform to our data set
33:28 

33:28 which is the data frame
33:30 

33:30 here we see the output of the PCA
33:32 

33:32 algorithm we have a sample here of five
33:35 

33:35 rows we can see that 66 columns are
33:38 

33:38 accounted for in each of them the output
33:40 

33:40 of the PCA is the removing of the
33:42 

33:42 variance
33:45 

33:45 in summary well what have we done we've
33:49 

33:49 downloaded a modis-based data set for
33:51 

33:51 training which we'll use in the next
33:52 

33:52 portion of this training
33:54 

33:54 we've performed exploratory data
33:56 

33:56 analysis on the provided data set and
33:58 

33:58 understood some of the characteristics
33:60 

34:00 of the given data set we've introduced
34:03 

34:03 several feature engineering techniques
34:05 

34:05 for dealing with no data and to increase
34:07 

34:07 the training data representativeness
34:08 

34:08 we've also provided additional tools to
34:12 

34:12 deal with the data and drive physical
34:13 

34:14 conclusions before going into training
34:16 

34:16 our machine learning model
34:23 

34:23 now I'm going to hand it over to Jules
34:25 

34:25 to talk about training and testing of
34:28 

34:28 the random Forest
34:33 

34:33 now to start the training and evaluation
34:36 

34:36 from a model we need to go
34:40 

34:40 to the GitHub repository and click on
34:44 

34:44 the the Google Scholar link and train
34:48 

34:48 and evaluation
34:57 

34:57 to start this section we need to obtain
34:59 

34:59 the data set
35:00 

35:00 and these particular cells help us to
35:03 

35:03 download all the data that we need for
35:05 

35:05 this here
35:12 

35:12 in order to design a
35:15 

35:15 python workflow it's important first of
35:18 

35:18 all to import the necessary module that
35:21 

35:21 we need for our application and here we
35:24 

35:24 we have a list of important module and I
35:27 

35:27 want to highlight a couple of them
35:28 

35:28 especially the one the one related to a
35:31 

35:31 cycle Loan in this particular cell we
35:36 

35:36 import all the necessary cycle learn
35:39 

35:39 tool that we need we'll need for our
35:41 

35:41 application
35:42 

35:42 on top of cycling we are going also to
35:45 

35:45 we need also some kind of visualization
35:48 

35:48 Tools in Python especially C bone that
35:52 

35:52 is that is needed to have some kind of
35:54 

35:54 statistical plot and also Matt proudly
35:56 

35:56 who have basic plot on top of that we
35:59 

35:59 need also some kind of a geospatial
36:02 

36:02 special related tools especially osgos
36:06 

36:06 and volume
36:13 

36:13 now that we have imported all our module
36:16 

36:16 it's important to consider to set some
36:19 

36:19 kind of parameters that will need to to
36:20 

36:20 download the data and also to determine
36:23 

36:23 what kind of uh features we need to
36:26 

36:26 extract from the data set that we have
36:28 

36:28 and it's important to note here that the
36:32 

36:32 feature that we selected here uh
36:35 

36:35 were done based on the exploratory data
36:38 

36:38 analysis
36:39 

36:39 work that Caleb did previously
36:49 

36:49 the first thing that we need after we
36:52 

36:52 selected the features the first thing
36:53 

36:53 that we need to do is to load the data
36:57 

36:57 in machine learning we need to split the
36:60 

36:60 data set into two groups
37:05 

37:05 after we download our data set
37:08 

37:08 we proceed to split into
37:10 

37:10 a training set and test set
37:13 

37:13 it's important to see that the water
37:16 

37:16 column is set has the Y features and is
37:20 

37:20 dropped from the X features
37:24 

37:24 and it's important to note that if you
37:27 

37:27 look at the shape of the the training
37:29 

37:29 set and the the test set we have exactly
37:34 

37:34 10 800 data points in the training set
37:37 

37:37 and 200 data point in the test set it
37:41 

37:41 straight it split like 80 for the
37:43 

37:43 training set and 20 for the test side
37:47 

37:47 for this exercise we have downloaded our
37:50 

37:50 data directly from
37:52 

37:52 from the database where we already had
37:54 

37:54 made the split between training set and
37:57 

37:57 test set but in real life that is not
37:59 

37:59 the case
38:00 

38:00 and we may we may need to to use uh the
38:05 

38:05 cycle learn tools train test split
38:07 

38:08 function
38:09 

38:09 to really split our data and here is how
38:13 

38:13 you can it can be done
38:15 

38:15 something that's very important is if
38:18 

38:18 you want to duplicate the result in
38:20 

38:20 spicy when you do the when you do the
38:22 

38:22 training and you want to have a when any
38:25 

38:25 time that you do the training you want
38:26 

38:26 to have exactly the same result it's
38:28 

38:28 good to use the random state
38:31 

38:31 and the random State parameters so that
38:35 

38:35 the result can be easily duplicated and
38:37 

38:37 also in this particular case we say we
38:39 

38:39 say that the training set the size
38:41 

38:41 should be 80 percent
38:42 

38:42 in general and and we want to mention
38:44 

38:44 that 80 is not some kind of a set number
38:47 

38:47 that can be used over and over and it's
38:49 

38:49 applicant depend application dependent
38:51 

38:51 sometimes it can be seventy percent
38:53 

38:53 sixty percent and depending what uh
38:56 

38:56 depends on the application
39:01 

39:01 it's also very important to find a
39:04 

39:04 little bit the distribution of the of
39:07 

39:07 the water in in our case in in the
39:09 

39:09 training set and the test set as we can
39:12 

39:12 see here if you count the number of
39:14 

39:14 values you have you see that we are
39:16 

39:16 almost 50 percent 50 percent of uh the
39:19 

39:19 data are water and uh on both the
39:22 

39:22 training set and and the test set so we
39:25 

39:25 can use the stratification parameters to
39:29 

39:29 really mimic the distribution of the
39:32 

39:32 water in the training data set and this
39:34 

39:34 and the test data set to have some kind
39:36 

39:36 of similar similar distribution in term
39:39 

39:39 of water so we pass the stratification
39:41 

39:41 parameters in the split function
39:46 

39:46 and that allow us to have some kind of
39:48 

39:48 even distribution of water in both the
39:51 

39:51 training data set and the test data set
39:58 

39:58 once we have our training set
40:01 

40:01 and test set
40:03 

40:03 we can we can proceed to prepare our
40:06 

40:06 training model for training
40:10 

40:10 one technique often used to better
40:13 

40:13 validate the robustness of a machine
40:15 

40:15 learning model is the careful
40:17 

40:17 cross-validation method
40:21 

40:21 cross validation is that it's a
40:24 

40:24 statistical method used to estimate the
40:25 

40:26 skill of machine learning models
40:30 

40:30 when using careful the data set is split
40:32 

40:32 into K number of subset
40:37 

40:37 K1 subset then are used to train the
40:41 

40:41 model
40:42 

40:42 and the last subset is kept has a
40:45 

40:45 validation set to test the model
40:48 

40:48 assuming that we have a five-fold
40:53 

40:53 cross-validation we want to use a
40:55 

40:55 five-fold cross-validation method
40:57 

40:57 basically
40:59 

40:59 the data set are going to split into
41:01 

41:01 five groups the first group
41:04 

41:04 will be used for testing and the
41:07 

41:07 remaining four groups will be used for
41:09 

41:09 training
41:10 

41:10 and we are going to rotate the groups
41:12 

41:12 until we run the model four five times
41:16 

41:16 and every time we are going to we are
41:19 

41:19 going to get the scores
41:20 

41:20 that is the idea behind the keyfold uh
41:24 

41:24 cross validation method
41:26 

41:26 here we are going to set the value of uh
41:28 

41:28 of K to be five
41:30 

41:30 basically we are going to split the the
41:33 

41:33 data set into five group
41:37 

41:37 before we proceed
41:39 

41:39 we need to have some kind of a basic
41:42 

41:42 status statistic on the training data
41:45 

41:45 set and we use the describe function to
41:48 

41:48 re to really produce some kind of the
41:50 

41:50 mean the standard deviation and the
41:53 

41:53 different type of percentile
41:55 

41:55 that gives you some kind of idea of the
41:57 

41:57 distribution of each features and see if
42:00 

42:00 any identify possibly some kind of
42:02 

42:02 outlier
42:04 

42:04 outlier but the work was already done in
42:07 

42:07 the exploratory data analysis
42:09 

42:09 we can use
42:11 

42:11 thresholding method base on our physical
42:14 

42:14 knowledge to extract and straight
42:16 

42:16 interesting features of outlier that we
42:19 

42:19 may want to visualize later when
42:21 

42:21 evaluating the model and we Define this
42:24 

42:24 particular function to identify some
42:27 

42:27 kind of outlier that will be used later
42:31 

42:31 model definition and and training
42:36 

42:36 in this particular
42:39 

42:39 prop application we are going to use the
42:42 

42:42 random random Forest method
42:44 

42:44 for for training the model
42:47 

42:47 and in order to Define and we need to
42:49 

42:49 First Define some kind of parameters
42:51 

42:51 that are needed to for the random forest
42:54 

42:54 in this particular cell we set all the
42:57 

42:57 needed parameters that would be that
42:60 

42:60 would be will be need to define the
43:02 

43:02 model after we Define the parameters now
43:05 

43:05 we need to pass those parameters as
43:07 

43:07 argument of the random Forest function
43:11 

43:11 and that defines here our model the
43:14 

43:14 classifier is our model
43:16 

43:17 now in order to use the k-fold method
43:19 

43:19 and we remember that we set k equal 5.
43:24 

43:24 now we are going to go to a set of
43:26 

43:26 iteration where we are going to train
43:28 

43:29 based on the the the five groups we are
43:31 

43:31 going to train the model
43:34 

43:35 test
43:36 

43:36 the accuracy of the model and determine
43:40 

43:40 some kind of score and based on the
43:41 

43:41 value of score the score we are going to
43:43 

43:43 determine if that particular uh uh the
43:47 

43:47 model is good enough and don't forget
43:49 

43:49 that in terms of score the ideal score
43:52 

43:52 is equal is one
43:54 

43:54 if the closer we are one the better we
43:57 

43:57 are
44:02 

44:02 as you can see when to test the accuracy
44:06 

44:06 of our model we have some kind of
44:08 

44:08 accuracy that above when
44:11 

44:11 0.95 and we are closer to one and that
44:14 

44:14 is give you some kind of good indication
44:16 

44:16 that perhaps the random forward can be a
44:19 

44:19 good model for that for this particular
44:21 

44:21 application as we you can see here that
44:25 

44:25 we can have uh an accuracy of about
44:30 

44:30 99 percent
44:42 

44:42 now that we have done the the k-fold
44:46 

44:46 analysis we can now focus on the random
44:50 

44:50 forest model
44:52 

44:52 now the random forest model will be
44:55 

44:55 applied to the entire training set
44:57 

44:57 and when we are done with the training
44:59 

44:59 set we are going to go to the test set
45:02 

45:02 but it's very important when you define
45:03 

45:03 some kind of model the model has to be
45:07 

45:07 performed in acceptable way with the
45:09 

45:09 training set first before even moving to
45:11 

45:11 the test side because if the score is
45:13 

45:13 very low in the training set we don't
45:16 

45:16 expect anything go to come out of the
45:18 

45:18 test set so it's very perhaps you need
45:21 

45:21 to redefine some kind of parameters in
45:24 

45:24 this particular example we Define again
45:26 

45:26 our random first model
45:29 

45:29 we apply it to the training set
45:33 

45:33 and we see how it fit well with the
45:35 

45:35 training set and now we go and we check
45:39 

45:39 what is the score that we have on the on
45:42 

45:42 the test set and we have a score of 98
45:45 

45:45 that is very good though we may we may
45:48 

45:48 we may have something better but it a
45:52 

45:52 score has closed has one has this one
45:55 

45:55 give us an indication that more likely
45:57 

45:57 we have a good unacceptable model
46:01 

46:01 now I'm going to pass to Jordan who's
46:03 

46:03 going to continue with the evaluation of
46:06 

46:06 the model
46:09 

46:09 okay so now we're going to proceed to do
46:11 

46:11 the model testing and training and
46:14 

46:14 testing of the data through validation
46:16 

46:16 so once we have actually trained our
46:18 

46:18 model we can then proceed to use this
46:21 

46:21 best model that we found from the k-fold
46:23 

46:23 cross-validation and then use that model
46:25 

46:25 to perform validation of the actual test
46:27 

46:27 data set
46:29 

46:29 first we're going to get some more of
46:30 

46:30 the model metrics the first thing that
46:32 

46:32 we need to do is load the actual best
46:34 

46:34 model that we found from the cape fold
46:36 

46:36 cross-validation and then get this score
46:39 

46:39 over the test data set and we can see
46:41 

46:41 that we have a score of 99. in many
46:43 

46:43 applications and since this data sets
46:45 

46:45 small this might be let's say in an
46:48 

46:48 excellent score but in other
46:51 

46:51 applications we could actually be seeing
46:52 

46:52 an overfitting effects while having a
46:55 

46:55 small data set so we do need to make
46:57 

46:57 sure that you kind of test on a test
46:59 

46:59 data set or a validation data set that
47:01 

47:01 is hard enough or that has complex
47:04 

47:04 dependencies on the test data set so you
47:06 

47:06 can evaluate how generalized your model
47:09 

47:09 is or how good your model is to
47:11 

47:11 predicting on scene samples once we have
47:14 

47:14 the score of our test data set we can
47:17 

47:17 then easily perform predictions over all
47:19 

47:19 of our training data sets test data sets
47:22 

47:22 and then create a on object for storing
47:25 

47:25 those probabilities and the
47:27 

47:27 probabilities of the random Forest allow
47:30 

47:30 us to understand how good the model or
47:33 

47:33 confident the model was in regards to
47:35 

47:35 predicting individual observations
47:38 

47:38 by calculating the probabilities from
47:40 

47:40 each one of the features from our data
47:42 

47:42 set we can understand if our model was
47:45 

47:45 simply randomly outputting decisions or
47:48 

47:48 if it was actually being confident
47:50 

47:50 enough to provide probabilities of 4-H
47:53 

47:53 observations that are higher than 50
47:55 

47:55 percentage
47:56 

47:56 anything below 50 percentage in regards
47:59 

47:59 to the actual probability means that
48:01 

48:01 will be kind of in the low range of not
48:03 

48:03 being able to assess very well how a
48:05 

48:05 pixel is performing or with the actual
48:08 

48:08 class of that particular pixel
48:10 

48:10 in this graph over here we're looking at
48:12 

48:12 all the probabilities and we can see
48:14 

48:14 that we have huge picks on how confident
48:17 

48:17 the model was in regards to water pixel
48:20 

48:20 and then how confident the the model was
48:22 

48:22 in order to Lan pixels know that we
48:26 

48:26 don't have many occurrences on that
48:29 

48:29 middle range between like 40 percentage
48:31 

48:31 and 60 percentage of probability which
48:34 

48:34 means that our model lean towards more
48:36 

48:36 confidence along both ends of the
48:38 

48:38 classification problem
48:42 

48:42 besides looking at some of the
48:44 

48:44 probabilities we can go ahead and look
48:46 

48:46 deeply at the actual scores and getting
48:48 

48:48 all the metrics besides accuracy we can
48:50 

48:50 look at recall on precisions looking at
48:53 

48:53 how a model is doing in regards to like
48:54 

48:54 false positives and false negatives
48:56 

48:56 we're going to also look at the f1s
48:59 

48:59 score which is basically the harmonic
49:01 

49:01 mean of precision and recall and we can
49:05 

49:05 also look at some of the confusion
49:06 

49:06 Matrix to see where are failures or
49:10 

49:10 where are missing features land on and
49:13 

49:13 in this example we have that we
49:15 

49:15 calculated properly 119 features on both
49:18 

49:18 ends but then we misclassified some of
49:21 

49:21 the pixels between water and land
49:24 

49:24 basically over committing to one of
49:26 

49:26 those
49:27 

49:27 we can also look at the receiver
49:29 

49:29 operating characteristics of the model
49:31 

49:31 which is going to tell us our break
49:33 

49:33 between true positives and false
49:35 

49:35 positives
49:36 

49:36 in the idea here is that we want to have
49:39 

49:39 an rocau score at least of one another
49:42 

49:42 we're actually matching that pretty well
49:44 

49:44 in regards to the actual performance of
49:46 

49:46 our model and again depending on the
49:49 

49:49 model that you might be training on it
49:51 

49:51 might be more complex you might have an
49:53 

49:53 Roc curve that could be a lot smaller or
49:56 

49:56 smoother which would tell you that your
49:58 

49:58 model is performing at least decently or
50:01 

50:01 if you're missing any training data or
50:03 

50:03 additional training to improve your
50:05 

50:05 model
50:07 

50:07 once we have trainer model we have seen
50:09 

50:09 that the accuracy score and some of the
50:11 

50:11 other metrics that we have been using
50:12 

50:12 are pretty substantially positive we can
50:15 

50:15 look at how the model is looking at
50:17 

50:17 things how is the model learning and the
50:20 

50:20 first step that we can do here is to do
50:21 

50:21 some permutation importance to look at
50:24 

50:24 what features from the data are the most
50:27 

50:27 important for this model to perform the
50:29 

50:29 proper classifications that it's doing
50:31 

50:31 so far
50:32 

50:32 if you look at this graph over here we
50:34 

50:34 can see how the importance of each one
50:36 

50:36 of the variables is
50:38 

50:38 in regards to how the model is learning
50:40 

50:40 and we can see the software reflection
50:42 

50:42 span 2 is actually one of the most
50:44 

50:44 important features at the time of doing
50:46 

50:46 the selection between land and water and
50:49 

50:49 also the ndvi who continues after that
50:52 

50:52 one
50:54 

50:54 we can also see that the nvwi one band
50:58 

50:58 is the least useful band to actually
51:01 

51:01 talk on the prediction but at the end of
51:04 

51:04 the day some of these features they
51:07 

51:07 might not be showing a lot of
51:08 

51:08 permutation importance on the graph but
51:11 

51:11 when they are combined or when they are
51:13 

51:13 removed this permutation importance can
51:16 

51:16 change just because of how our tree
51:18 

51:18 structure is looking like on the random
51:20 

51:20 Forest
51:22 

51:22 the last step is to actually save our
51:24 

51:24 model we have look at the model we have
51:25 

51:26 look at how the feature importance deals
51:28 

51:28 at the model but we can now save the
51:30 

51:30 model so we can do additional
51:31 

51:31 predictions and we have so far been
51:34 

51:34 looking at predicting on a tabular data
51:36 

51:36 set but we can also take rasters and
51:39 

51:39 then predict over them by modifying or
51:42 

51:42 pre-processing them to account for a
51:44 

51:44 tabular data set so the first step is to
51:47 

51:47 download some of our
51:48 

51:48 geotif files that we have uploaded to
51:51 

51:51 the database particularly using the
51:53 

51:53 hogging phase repository for this
51:54 

51:54 tutorial
51:55 

51:55 then we can get a list of those files by
51:58 

51:58 only using rejects options and by taking
52:01 

52:01 all of the files and individual bands
52:03 

52:03 and stacking them into a single raster
52:06 

52:06 once we stack our bands into a single
52:09 

52:09 raster we can then proceed and do some
52:12 

52:12 of the feature engineering by
52:13 

52:13 calculating the indices or validation
52:15 

52:15 instances that we have been using before
52:17 

52:17 to the training in this case the ndvi
52:21 

52:21 the n3wi one and then the ndwi2 and we
52:25 

52:25 can do this on the fly so once we get a
52:29 

52:29 geotif file that only has the software
52:31 

52:31 surface reflectance band we can
52:33 

52:33 calculate some of these indices without
52:35 

52:35 needing to to look for additional
52:37 

52:37 external data
52:39 

52:39 once we have created our data set and we
52:41 

52:41 have an array of features we can then
52:44 

52:44 look at some of the imagery and then we
52:47 

52:47 can just start predicting and know how
52:49 

52:49 we came from what a array format
52:52 

52:52 we has an input to then a tabular format
52:55 

52:55 that we can then use for doing the
52:57 

52:57 predictions that we need
52:59 

52:59 the last step here is to actually go
53:01 

53:01 through and perform the prediction you
53:04 

53:04 know how we are just getting the
53:05 

53:05 classifier and then one performing a
53:08 

53:08 single prediction and two outputting the
53:11 

53:11 probabilities per picks or or per actual
53:14 

53:14 feature to see how the model is
53:16 

53:16 performing for each one of those
53:18 

53:18 features and this is really use for us
53:20 

53:20 and can be used as a Q8 mask because you
53:22 

53:22 can actually
53:23 

53:23 take the uncertain of those observations
53:26 

53:26 from the prediction output
53:29 

53:29 the last piece of here is that we then
53:32 

53:32 want to reshape our tabular data set
53:34 

53:34 into the exact shape of the geotif that
53:37 

53:37 we initially predicted so once we reach
53:40 

53:40 a our data set we can see that we have a
53:42 

53:42 single band array with all the
53:45 

53:45 probability predictions per observation
53:50 

53:50 once we have a prediction we can then
53:53 

53:53 perform
53:54 

53:54 post-processing techniques and many of
53:57 

53:57 these post-processing techniques can
53:58 

53:59 include smoothing the the imagery that
54:02 

54:02 you're predicting on it could be
54:04 

54:04 removing small observations that might
54:06 

54:06 not be relevant to the actual product
54:08 

54:08 and there might be noise from the model
54:10 

54:10 but in this case we're only doing
54:12 

54:12 post-processing by applying the QA mask
54:15 

54:15 that we take from the Modis data set and
54:18 

54:18 the idea is that we read the mask and
54:21 

54:21 then we add no data values to all of
54:23 

54:23 those features that we know are for sure
54:26 

54:26 or uncertainty features or features are
54:29 

54:29 just not relevant to the final product
54:31 

54:31 that we want to generate
54:34 

54:34 once we have produced our QA geotif we
54:40 

54:40 can then proceed to visualize it on a an
54:43 

54:43 interactive visualizer and in this case
54:45 

54:45 we're using volume there are many
54:47 

54:47 Alternatives out there but the idea is
54:49 

54:49 that you want to relate the performance
54:52 

54:52 of your predictions across the spatial
54:55 

54:55 extent of the data there are cases where
54:58 

54:58 you might have representative training
54:60 

54:60 of particular observations based on
55:03 

55:03 let's say the Specter of audience of
55:05 

55:05 them but there might be some cases where
55:07 

55:07 you might not have enough spatial
55:09 

55:09 representativeness on your training data
55:11 

55:11 set to account for some of these
55:13 

55:13 observations so in here what we do is
55:16 

55:16 that we create a stack of one a base map
55:18 

55:18 taken from Google satellite and then the
55:21 

55:21 actual prediction of our water mask the
55:23 

55:23 Water Mass is in here and this is the
55:26 

55:26 Lake Powell which is our tile of
55:27 

55:27 interest you can see that if we turn on
55:30 

55:30 and off a water mask we are do we do
55:34 

55:34 predict the leg power observations
55:37 

55:37 from this base map we can also see in
55:40 

55:40 other locations where we might actually
55:42 

55:42 have some other water bodies that we're
55:45 

55:45 identifying and then even some noise
55:49 

55:49 that can be taking on from other
55:52 

55:52 locations where there are no water
55:53 

55:53 bodies or water pixels attached
55:58 

55:58 okay
56:00 

56:00 so as a summary we have one downloaded a
56:05 

56:05 Modis based data set for training and
56:08 

56:08 testing a model
56:09 

56:09 we have performed additional exploratory
56:11 

56:11 data analysis on the provided data set
56:13 

56:13 to complement the information we already
56:16 

56:16 have for training and testing this model
56:18 

56:18 we have training performing fairings
56:21 

56:21 using a random fourth model of a binary
56:24 

56:24 classification problem which in this
56:25 

56:25 case is getting water surfixed and maps
56:28 

56:28 and we have also created interactive
56:30 

56:30 visualization by predicting both tabular
56:33 

56:33 and then thruster-based data sets across
56:36 

56:36 the random forest model
56:38 

56:38 we have also provided a quick overview
56:41 

56:41 of more explainability which we will
56:43 

56:43 dive in more the in more details on a
56:46 

56:46 future session in regards to how to
56:48 

56:48 understand how the model is thinking and
56:50 

56:50 then how the model is learning
56:52 

56:52 last but not least we provided some
56:54 

56:54 cross validation techniques to
56:56 

56:56 understand how the model can be trained
56:59 

56:59 automatically in several iterations of
57:01 

57:01 the training data set to get the best
57:03 

57:03 model out of the existing training data
57:05 

57:05 set that we might have
57:19 

57:19 so just as a reminder we have an
57:22 

57:22 assignment for this session 2 topic
57:24 

57:24 particularly looking at some of the
57:25 

57:25 techniques we already used and then
57:27 

57:27 expanding on them you can just click on
57:29 

57:29 the open Google collab button here and
57:33 

57:33 it would take you automatically to the
57:34 

57:35 assignment notebook that you can work
57:36 

57:36 from
57:42 

57:42 thank you very much Jordan
57:46 

57:46 before we open up to address your
57:48 

57:48 questions uh let's review what we did
57:49 

57:49 here today
57:50 

57:50 we hope that after this part of the
57:52 

57:52 series you're able to see some examples
57:54 

57:54 of downloading the training data and
57:56 

57:56 doing some exploratory data analysis
57:59 

57:59 extracting training data
58:01 

58:01 taking a look at some metrics and
58:03 

58:03 evaluating your model and then a
58:06 

58:06 Hands-On Jupiter notebook experience on
58:08 

58:08 a modus water classification case study
58:11 

58:11 looking ahead to part three
58:13 

58:13 the final part in this series next week
58:15 

58:15 will cover an overview of model tuning a
58:19 

58:19 little bit on parameter optimization and
58:22 

58:22 exercise to optimize existing models and
58:25 

58:26 then we'll also go into another exercise
58:29 

58:29 doing improvements to the Modis water
58:33 

58:33 classification model so we hope that you
58:35 

58:35 join us for part three
58:38 

58:38 if you have any questions you can
58:40 

58:40 contact myself or our set colleagues
58:42 

58:42 with the email addresses here
58:45 

58:45 as a reminder here's the course web page
58:47 

58:47 where you can find all the materials
58:49 

58:49 including the PowerPoint presentations
58:50 

58:50 the videos links to the Google collab
58:54 

58:54 homework in Jupiter notebooks as well as
58:56 

58:56 the homework link that will be available
58:58 

58:58 by May 4th this is also our primary rsat
59:01 

59:01 website you can check out for other
59:03 

59:03 great trainings follow us on Twitter or
59:07 

59:07 our trainings as well as exciting
59:09 

59:09 announcements from NASA's Earth Sciences
59:12 

59:12 now let's enter into the question and
59:14 

59:14 answer period please enter your
59:15 

59:15 questions in the questions box and we
59:18 

59:18 will answer them in the order in which
59:20 

59:20 they are received
59:22 

59:22 thank you
59:27 

59:27 thank you Brock hi everyone my name is
59:31 

59:31 Melanie fallette cook I Am project
59:33 

59:33 scientist for the rset program and I
59:35 

59:35 will be moderating the Q a today
59:38 

59:38 so let's start off uh question zero we
59:43 

59:43 saw a couple of these questions in the Q
59:44 

59:44 a so just want to have some
59:46 

59:46 clarification on the homework
59:48 

59:48 so as you complete the assignments that
59:51 

59:51 are linked in the rset GitHub machine
59:54 

59:54 learning training we have a link to that
59:57 

59:57 in the chat
59:59 

59:59 um you'll see some kind of guiding
60:01 

60:01 questions at the end of each
60:03 

60:03 at the end of part three so at the end
60:05 

60:05 of the completion of each part of this
60:07 

60:07 training we will open up a Google form
60:09 

60:09 homework at which point you can enter in
60:12 

60:12 your answers to the questions there and
60:15 

60:15 that will be the homework submission so
60:16 

60:16 there's nothing to submit anywhere until
60:19 

60:19 we open the homework at the end of part
60:21 

60:21 three
60:22 

60:22 and you can access recordings q a docs
60:26 

60:26 once we've posted them and the homework
60:28 

60:28 from the training web page which is
60:30 

60:30 linked here
60:32 

60:32 question one
60:34 

60:34 are the Modis 250 meter data corrected
60:38 

60:38 for bow effects in other words
60:40 

60:40 enlargement and stretching of the pixels
60:42 

60:42 because Earth curvature at the edges of
60:44 

60:44 the swath
60:46 

60:46 so Jean you covered this part did you
60:49 

60:49 want to take this question
60:56 

60:56 so
61:01 

61:01 yeah the mode is so yes the Modis data
61:04 

61:04 is affected by the bow tie effect uh
61:07 

61:07 there's no real correction for that uh
61:10 

61:10 it is mitigated by gridding the the
61:14 

61:14 swaths into uh integrated tiles uh I as
61:19 

61:19 referenced here in the l2g product
61:22 

61:22 so the the pixels in the in the tiled
61:25 

61:25 products are identical size but they're
61:27 

61:27 you know the underlying observation is
61:30 

61:30 still the the bow tie affected
61:32 

61:32 observation uh there's a lot more
61:34 

61:34 information you can get by following the
61:36 

61:36 link there to understand uh all of this
61:39 

61:39 I don't think I want to use any more
61:41 

61:41 time here to go into that
61:43 

61:43 um but what we do in our production
61:44 

61:44 algorithm is just exclude uh pixels that
61:48 

61:48 have a very large uh viewing angle
61:54 

61:54 great thank you Mark
61:57 

61:57 question two and the homework for part
61:60 

61:60 one we did the k-means with CPU and GPU
62:03 

62:03 and I'm getting very different results
62:05 

62:05 the number of grid points assigned to
62:07 

62:07 each cluster is very different
62:09 

62:09 is that how it's supposed to be
62:14 

62:14 yeah I can answer that one so oftentimes
62:17 

62:17 there are actually differences between
62:18 

62:18 CPU and GPU algorithms and this is
62:21 

62:21 because of some pieces in the
62:23 

62:23 parallelization of these
62:25 

62:25 so these differences they should not be
62:27 

62:27 significant but they can just be present
62:30 

62:30 it can just be like calculation errors
62:33 

62:33 you hear it from some of the like
62:34 

62:34 processors that are being merged at the
62:36 

62:36 end there
62:38 

62:38 some of the difference that you might
62:40 

62:40 see in the actual like centroid
62:41 

62:41 calculations of Decay means so don't
62:43 

62:43 worry about it the main idea of the
62:45 

62:45 payments algorithms just to calculate
62:47 

62:47 some centroids from the only spectral
62:49 

62:49 data we're fitting into the into the
62:51 

62:51 algorithm so they should at least
62:53 

62:53 provide some segregation between the
62:55 

62:55 vector values
63:03 

63:03 question three what are some of the key
63:06 

63:06 methods used to remove outliers from the
63:09 

63:09 data once detected
63:20 

63:20 yeah I can answer that
63:23 

63:23 um
63:24 

63:24 so there are generally a few methods
63:26 

63:26 that I didn't get to all of them but for
63:29 

63:29 removing the outliers
63:32 

63:32 um I I gave a link and I can
63:34 

63:34 um basically there's a there's a few
63:36 

63:36 pandas methods that you can use
63:38 

63:38 that just gets rid of outliers based off
63:42 

63:42 of the number of standard deviations
63:44 

63:44 it's really up to you as the user to
63:47 

63:47 determine how you want to remove or
63:49 

63:49 which outliers to remove but
63:52 

63:52 um if we could copy and paste that that
63:55 

63:55 link that that'll give a coding example
64:01 

64:01 right and as a reminder we will post
64:03 

64:03 this q a so the document that you see
64:07 

64:07 um in just a couple of days after the
64:09 

64:09 completion of this part
64:12 

64:12 so everybody will have access to those
64:14 

64:14 links
64:15 

64:15 and it looks like Natasha is copying
64:17 

64:17 into the chat right now
64:19 

64:19 question four can bias correction help
64:22 

64:22 to improve the quality of data sets also
64:25 

64:25 why don't we use negative 999 to
64:29 

64:29 represent missing values rather than
64:31 

64:31 using mean values
64:36 

64:36 so this is this is Mark again
64:38 

64:38 um I'll uh I'll jump in on I'll jump in
64:41 

64:41 on this one so there's there's some
64:43 

64:43 disagreement among Among Us developers
64:46 

64:46 on this particular one uh it kind of has
64:48 

64:48 to do with your point of view about
64:50 

64:50 interpolating data or not I come from
64:53 

64:53 the campus never interpolate under any
64:55 

64:55 circumstance ever Just Produce just
64:58 

64:58 leave a hole and let it go uh there's
65:01 

65:01 definitely other camps that have less
65:04 

65:04 strong feelings about interpolating uh
65:06 

65:06 output values or input values
65:10 

65:10 the result of the answer is if you if
65:13 

65:14 you interpolate values then you're going
65:15 

65:15 to get some you know unknown response
65:20 

65:20 so it
65:21 

65:21 under the tolerance of the project for
65:24 

65:24 having holes in the output date and the
65:25 

65:26 output data if you can't tolerate holes
65:28 

65:28 then you need to interpolate if you can
65:30 

65:30 tolerate holes then uh you're in my
65:34 

65:34 opinion you're better off leaving the
65:36 

65:36 leaving the the values that are are
65:38 

65:38 missing just just leave them out and let
65:40 

65:40 there be a hole
65:43 

65:43 so it's a judgment call
65:52 

65:52 thanks Mark did anybody else want to
65:54 

65:54 weigh in before we move on to question
65:55 

65:56 five
66:01 

66:01 sounds good oh Caleb I'm sorry I was
66:05 

66:05 just gonna say Mark summed it up pretty
66:06 

66:06 well
66:07 

66:07 um just to specifically answer why not
66:10 

66:10 negative 999.
66:12 

66:12 um generally if you're gonna
66:15 

66:15 so
66:17 

66:17 ideally you want to just get rid of it
66:19 

66:19 and not fill it in with anything if you
66:21 

66:21 were to impute something you know you'd
66:23 

66:23 want to take a statistical measure to
66:26 

66:26 impute a value that kind of makes sense
66:28 

66:28 in the data distribution and not use
66:30 

66:30 some sort of place placeholder like
66:32 

66:32 negative 999.
66:40 

66:40 thanks okay question five
66:44 

66:44 is there any guideline or accepted
66:46 

66:46 practice for how high of a correlation
66:48 

66:48 coefficient should prompt you to discard
66:50 

66:50 one of the variables there's often High
66:52 

66:52 correlation between spectral Brands but
66:55 

66:55 they still contain distinct information
66:59 

66:59 they can jump into that one so from the
67:01 

67:01 data science and statistical point of
67:04 

67:04 view any other features that would have
67:07 

67:07 kind of a correlation higher than like
67:08 

67:08 0.95 you normally just drop them in
67:11 

67:11 algorithms are just
67:13 

67:13 say decision based now there are other
67:16 

67:16 algorithms that you could even just
67:18 

67:18 allow them to be there just because
67:20 

67:20 they're looking at non-linear
67:21 

67:21 relationships that might not be
67:22 

67:22 represented by some of these like
67:25 

67:25 correlation matrices like the experiment
67:27 

67:27 or the Pearson it's going to depend on
67:30 

67:30 on the use case but some of the best
67:31 

67:32 practices are just like dropping some of
67:34 

67:34 these highly correlated variables and
67:36 

67:36 allowing your machine learning decision
67:38 

67:38 model to just um extract features out of
67:41 

67:41 them
67:42 

67:42 in high perspectral data sets then you
67:44 

67:44 kind of go into more complex details
67:46 

67:46 because you're then looking at some
67:48 

67:48 really small
67:49 

67:49 deviations between these um these bands
67:51 

67:51 so you can go into like principle
67:53 

67:53 component analysis or other more complex
67:55 

67:56 algorithms I can group some of these
67:57 

67:57 like individual features and you can
68:00 

68:00 look at the variants from there
68:06 

68:06 thank you
68:08 

68:08 question six what is the difference
68:11 

68:11 between random tree classifier or RTC
68:14 

68:14 and random Forest classifier which
68:18 

68:18 machine learning classifier is also good
68:20 

68:20 for coarse moderate and high resolution
68:22 

68:22 satellite images
68:37 

68:37 I can jump into that one then
68:40 

68:40 um so generally speaking the best
68:43 

68:43 classifier for like fine spatial
68:46 

68:46 resolution data is going to be one
68:48 

68:48 that is might not be the best for like a
68:50 

68:50 course resolution or even like moderate
68:52 

68:52 resolution so some of the times we
68:55 

68:55 actually leverage spatial algorithms
68:57 

68:57 like cnns or convolution neural networks
68:60 

68:60 to do some of the very high resolution
69:03 

69:03 um imagery classification just because
69:04 

69:04 it can take into account
69:07 

69:07 individual pixels but also surrounding
69:09 

69:09 pixels for the neighborhood to actually
69:11 

69:11 calculate some of these predictions
69:14 

69:14 so it's gonna also depend on let's say
69:17 

69:17 the resolution of your data but just
69:19 

69:19 take into account the course resolution
69:21 

69:21 you might not need some of those spatial
69:24 

69:24 um
69:26 

69:26 no knowledge or or information to do
69:28 

69:29 some of these predictions
69:36 

69:36 thanks question seven can we
69:38 

69:38 differentiate minerals using deep
69:41 

69:41 learning models on hyperspectral data
69:43 

69:43 like Hyperion data
69:47 

69:47 I'll take that one
69:49 

69:49 so yeah this is I mean this is obviously
69:51 

69:51 an open area of research uh there's
69:54 

69:54 definitely been you know success in
69:56 

69:56 looking for certain types of minerals uh
69:59 

69:59 using you know not only High perspective
70:01 

70:01 data but other instruments such as Oster
70:06 

70:06 um it really depends on exactly what the
70:08 

70:08 minerals are and you know you have to
70:11 

70:11 consider the the spatial resolution of
70:13 

70:13 the spaceborne instruments in particular
70:15 

70:15 because they tend to be much coarser uh
70:18 

70:18 in terms of being able to identify the
70:20 

70:20 feature the future has to be large
70:21 

70:21 enough for the instrument to have seen
70:24 

70:24 it
70:25 

70:25 and then to be able to to develop an
70:28 

70:28 algorithm to detect it so
70:30 

70:30 it's a it's a complicated relationship
70:32 

70:32 between spatial and spectral resolution
70:35 

70:35 to be able to detect uh minerals on the
70:38 

70:38 surface
70:40 

70:40 foreign
70:45 

70:45 question eight can you discuss the bin
70:48 

70:48 width sensitivity in the histogram what
70:51 

70:51 is the importance of the box plot over
70:54 

70:54 the histogram
70:57 

70:57 I can take that one
70:59 

70:59 um so been with sensitivity I mean so
71:03 

71:03 the choice of bin size for a histogram
71:05 

71:05 can certainly affect like the adherence
71:07 

71:07 and interpretation of a histogram uh if
71:11 

71:11 a bin is too large it okay it could be a
71:14 

71:14 little too coarse and fail to capture uh
71:17 

71:17 details of the distribution that you
71:18 

71:18 might want to see
71:20 

71:20 um too small of a been with
71:22 

71:22 um and you could get a histogram that's
71:25 

71:25 a little too detailed and captures a
71:27 

71:27 little too much noise and doesn't fully
71:29 

71:29 capture the underlying distribution
71:32 

71:32 um that we're trying to look at as far
71:34 

71:34 as like box plot over the histogram the
71:37 

71:37 histogram can show us information such
71:39 

71:39 as like the central tendency the spread
71:41 

71:41 and some and the the skewness of the
71:43 

71:43 distribution a box block is better to
71:46 

71:46 show something like the median and the
71:48 

71:48 interquartile range
71:50 

71:50 um and any outliers or extreme values I
71:53 

71:53 guess a box plot can provide a quick
71:55 

71:55 visual summary
71:57 

71:57 um just of those things over a histogram
71:59 

71:59 would be my first shot at it
72:05 

72:05 thanks
72:08 

72:08 question nine when you take a sample of
72:11 

72:11 the data to conserve Computing costs is
72:14 

72:14 this process randomly selecting rows
72:19 

72:19 okay
72:27 

72:27 I can take that if no one else's
72:30 

72:30 um
72:31 

72:31 so yes when in the case we were just
72:35 

72:35 randomly selecting a subset just for the
72:38 

72:38 Simplicity of the demo
72:40 

72:40 um you know in a science scenario you'd
72:41 

72:41 probably use the entire data set if you
72:43 

72:43 have enough computational bandwidth you
72:45 

72:45 don't want to lose any data
72:47 

72:47 um and if you don't have enough
72:51 

72:51 computational bandwidth you could always
72:53 

72:53 you know stratify a subset that might be
72:55 

72:55 fully representative of the training
72:57 

72:57 data set to do some Eda
72:60 

72:60 um it'll only be really useful to
73:02 

73:02 inspect that data and it won't really
73:04 

73:04 none of this will really be useful for
73:06 

73:06 data cleaning since uh you might be
73:09 

73:09 missing out on some important rows or
73:11 

73:11 pieces of the distribution that you
73:13 

73:13 really want the model to capture
73:17 

73:17 foreign
73:24 

73:24 if we want correlation with the bands
73:27 

73:27 and multiple classes for example water
73:29 

73:29 Forest settlement Etc does it work with
73:33 

73:33 this heat map correlation chart
73:39 

73:39 me as well
73:40 

73:40 um that can certainly work you can just
73:43 

73:43 add those classes
73:45 

73:45 um as each and individual column and you
73:47 

73:47 can use the same exact uh method call
73:50 

73:50 the DF dot c-o-r-r
73:54 

73:54 um
73:54 

73:54 and that'll give you a correlation
73:57 

73:57 um between those those classes in those
73:60 

74:00 rows and and the rest of the features so
74:03 

74:03 that's certainly a one way to do it
74:09 

74:09 question 11 can you tell me a bit about
74:13 

74:13 rank of data and plotting of Pearson
74:16 

74:16 rate correlation in machine learning
74:20 

74:20 second thing that one I was still typing
74:23 

74:23 but so the basic idea is that you can
74:25 

74:26 even see correlation using Scatter Plots
74:29 

74:29 but we use some of these spirits on
74:33 

74:33 correlation just to get that statistical
74:35 

74:35 value that we can then use to kind of
74:37 

74:37 observe or quantify some of these
74:39 

74:39 correlations
74:40 

74:40 the ranking of some of these correlation
74:42 

74:42 matrices is just basically you have
74:45 

74:45 these two variables that you're going to
74:46 

74:46 be then be ranking per feature like one
74:49 

74:49 to the biggest number two to the second
74:51 

74:51 biggest one
74:52 

74:52 Etc
74:53 

74:53 um so at the end what you're finished
74:54 

74:54 doing is just doing a square of the
74:58 

74:58 differences and you just sum some of
74:60 

74:60 those to remove some of the like
75:01 

75:01 negative values Etc so it's basically a
75:05 

75:05 correlation given two variables that you
75:07 

75:07 can then minimize or get the values from
75:10 

75:10 from the um correlation calculation or
75:14 

75:14 these statistics to them plot into like
75:16 

75:16 a simple confusion Matrix
75:24 

75:24 thanks question 12.
75:28 

75:28 what is the maximum size of an image
75:30 

75:30 that is practical to work with with
75:33 

75:33 pandas
75:36 

75:36 yeah
75:37 

75:37 um there's no real maximum size
75:42 

75:42 um it all depends on the the limits uh
75:45 

75:45 the resources that you're working with
75:48 

75:48 um I remember like pandas only takes
75:50 

75:50 tabular formats that's why we converted
75:52 

75:52 a raster into like a per pixel data set
75:54 

75:54 uh an image that's uh 4800 by 4800 uh
75:59 

75:59 that's turned into the uh that format of
76:01 

76:01 data can
76:03 

76:03 fit very comfortably into a pandas data
76:06 

76:06 frame
76:07 

76:07 um eventually you're going to run out of
76:09 

76:09 memory with a large enough image one
76:12 

76:12 method is to use what's uh a tool called
76:15 

76:15 desk and they Implement something called
76:17 

76:17 also a data frame but it basically uses
76:20 

76:20 pandas and it splits up really really
76:23 

76:23 large data sets
76:25 

76:25 um into something that can work in
76:27 

76:27 memory and kind of works in parallel to
76:29 

76:29 perform computations on these these data
76:32 

76:32 sets and you know we can we can do
76:35 

76:35 something with like a billion rows in
76:36 

76:36 there it just kind of brings stuff up
76:39 

76:39 from disk and works on them and then
76:41 

76:41 puts them back so no real limit just
76:44 

76:44 depends on the resources and there are
76:46 

76:46 tools if you run out of resources that
76:48 

76:48 can help you
76:51 

76:51 I mean
76:52 

76:52 if possible I mean I'd also
76:56 

76:56 to what color just said that when you
76:59 

76:59 use x-ray
77:01 

77:01 the calculations are done out of memory
77:03 

77:03 basically you are going to bring
77:04 

77:04 everything in in memory only what you
77:07 

77:07 need
77:08 

77:08 so you can manipulate the data frame as
77:10 

77:10 large as you want it doesn't matter even
77:13 

77:13 billions of data points doesn't matter
77:17 

77:17 xra is gone just to read
77:19 

77:19 to bring up to memory what is need at
77:22 

77:22 any given time for the calculation
77:33 

77:33 question 13 will we be able to plot the
77:36 

77:36 results of the PCA
77:51 

77:51 it looks like the answer is typed out
77:53 

77:53 here it looks like not in this exercise
77:56 

77:56 but you can
77:60 

77:60 take the output array from the PCA
78:01 

78:01 output reshape it and plot it using
78:04 

78:04 visualization tools like matplotlib
78:08 

78:08 question 14. as far as I understand Tuki
78:12 

78:12 IQR works well for normal distribution
78:15 

78:15 but most of the band values in the data
78:18 

78:18 set are skewed with a long tail are
78:20 

78:20 there any methods more fitted for data
78:22 

78:22 like this
78:25 

78:25 I can answer that one so there are many
78:28 

78:28 other techniques we just kind of
78:30 

78:30 Hues or introduce the topic of 2K IQR
78:34 

78:34 because it's one of the like main ones
78:36 

78:36 that we're kind of use in the data
78:37 

78:38 science room regarding like multispretto
78:40 

78:40 data the idea is that this method you're
78:42 

78:42 going to be more focused like local and
78:44 

78:44 Global neighborhoods
78:45 

78:45 so a simple distance calculation like 2K
78:48 

78:48 IQR might not be the like the best one
78:51 

78:51 at the end but there are other
78:53 

78:53 algorithms like isolation 4 is local
78:56 

78:56 outlier factors Etc that you could use
78:58 

78:58 we added some references there that you
79:00 

79:00 could um kind of try or give it a try
79:03 

79:03 and psychic learn provides even more
79:06 

79:06 other outlier detection algorithms that
79:08 

79:08 you could try for your data set
79:15 

79:15 wait question 15.
79:18 

79:18 while cleaning the data if there are
79:20 

79:20 many null values what kind of techniques
79:22 

79:22 can be applied for filling the data gaps
79:25 

79:25 and I see the advice here is it would be
79:27 

79:27 better to exclude those data from the
79:30 

79:30 training than to fill them
79:32 

79:32 um did anybody want to add any
79:35 

79:35 additional information
79:40 

79:40 this kind of thing yeah that one again
79:44 

79:44 applying my own bias so somebody else
79:46 

79:46 can weigh in if they want to
79:50 

79:50 I was just going to say this kind of
79:51 

79:51 Link really one of the first questions
79:53 

79:53 that we answer in regards to never
79:55 

79:55 interpolating data and again this is
79:57 

79:57 going to be based on your use case if
79:59 

79:59 you're Theta set or kind of your use
80:01 

80:01 cases
80:03 

80:03 is not let's say London or being going
80:06 

80:06 to be affected by interpolating some of
80:07 

80:07 these data you could interpolate
80:09 

80:09 I'm using a couple like mean or even
80:11 

80:11 like million values Etc
80:13 

80:13 um but again this is going to bring
80:15 

80:15 noise here to your training data set so
80:18 

80:18 is it going to depend on how how much
80:20 

80:20 noise you want to bring into your data
80:21 

80:21 set and if your data set is really like
80:23 

80:23 extremely small that you might need to
80:25 

80:25 use this if your data set is big enough
80:28 

80:28 just just remove them and make your life
80:31 

80:31 easier
80:34 

80:34 foreign
80:36 

80:36 moving on to question 16.
80:40 

80:40 how do you decide on the values for the
80:42 

80:42 hyper parameters do you do hyper
80:45 

80:45 parameter optimizations
80:51 

80:51 we're going to discuss hyper parallel
80:53 

80:53 optimization on session three
80:55 

80:55 so just
80:57 

80:57 be around
81:01 

81:01 stay tuned for next week
81:04 

81:04 question 17 do we use a training data
81:08 

81:08 set to train the algorithm even though
81:10 

81:10 we have 80 percent of the data as test
81:13 

81:13 data why do we classify it to four
81:16 

81:16 training data sets and only one test
81:19 

81:19 data set
81:21 

81:21 yeah I think this was maybe in regard to
81:23 

81:23 maybe a little bit of confusion with the
81:25 

81:25 the k-fold uh method so we do use the
81:29 

81:29 full training data set
81:31 

81:31 um what we showed is with the k-fold is
81:33 

81:33 we we do random splits in the training
81:36 

81:36 data sets for like something like five
81:38 

81:38 times and we we get like a randomly
81:41 

81:41 split training data set and a validation
81:43 

81:43 data set and you run through this uh uh
81:47 

81:47 multiple times and that's just basically
81:49 

81:49 to get a better
81:51 

81:51 um idea of if the model is generalizing
81:53 

81:53 well
81:54 

81:54 um on data so it sees the entire
81:56 

81:56 training data set without having to
81:57 

81:57 fully take out 20 you know for test data
82:00 

82:00 we did actually both we took out 20 and
82:03 

82:03 then used the eighty percent for the
82:05 

82:05 k-fold
82:06 

82:06 um and that's perfectly valid as well it
82:09 

82:09 all um it all kind of depends on on what
82:12 

82:12 route you want to go down so you I'm not
82:15 

82:15 sure if that fully answers the question
82:16 

82:17 but yeah we did train the data set on a
82:19 

82:19 train the algorithm on a full data set
82:27 

82:27 thanks Caleb
82:29 

82:29 question 18 how do we train the model
82:32 

82:32 without the masking data as in
82:35 

82:35 unsupervised clustering first then using
82:37 

82:37 them for masking based on those
82:39 

82:39 clusterings
82:43 

82:43 sure I'll take this Mark I'll take that
82:46 

82:46 one
82:46 

82:46 um
82:47 

82:47 I mean if I understand the question
82:49 

82:49 correctly I mean you know the model is
82:52 

82:52 trained to understand the spectral
82:54 

82:54 values regardless of their location
82:56 

82:56 that's why we extract to a tabular form
82:59 

82:59 so that we can just train the model
83:01 

83:01 without respect to the location where
83:03 

83:03 that pixel where that value came from
83:07 

83:07 um
83:07 

83:08 so
83:09 

83:09 you know when we do that then you know
83:11 

83:11 you can apply this back to the you know
83:13 

83:13 once the model is trained you can apply
83:15 

83:15 it back to imagery data because from a
83:17 

83:17 coding perspective an image is just it's
83:19 

83:19 just an array of numbers uh so it
83:22 

83:22 doesn't care whether that's a table form
83:24 

83:24 or in a geotiff the code is going to
83:27 

83:27 treat it as an array either way
83:36 

83:36 okay
83:38 

83:38 question 19.
83:40 

83:40 after getting a set of results how can
83:43 

83:43 we determine whether we need to adjust
83:45 

83:45 our hyper parameters versus selecting a
83:48 

83:48 different machine learning model
83:51 

83:51 I I answered that one here so I mean
83:54 

83:54 this what I would do is is perform you
83:56 

83:56 know validation on the output map which
83:58 

83:58 obviously is the the prediction the
84:01 

84:01 model prediction to determine the actual
84:03 

84:03 quality of of the map itself uh if the
84:06 

84:06 map validates to a level that's
84:08 

84:08 acceptable to to you the operator or the
84:11 

84:11 the principal investigator of the
84:12 

84:12 project
84:13 

84:13 then then you're all set
84:15 

84:15 um but if it doesn't then you need to
84:17 

84:17 either tweak the training and and tweak
84:19 

84:19 the model or you know if it's horrible
84:22 

84:22 then you might consider looking at a
84:24 

84:24 different method
84:26 

84:26 so again it's a bit subjective it deter
84:28 

84:29 you know the acceptable is determined by
84:31 

84:31 the the Project Lead
84:39 

84:39 question 20 my collab session is
84:42 

84:42 crashing every time I try to do the
84:44 

84:44 collab assignments even though I've
84:46 

84:46 selected GPU for my runtime what should
84:50 

84:50 I do
84:53 

84:53 I provide some insights there
84:55 

84:55 um ideally just try to fully restart it
84:57 

84:57 on time and just kill your session and
84:59 

84:59 just try again try again
85:01 

85:01 a another piece of information is that
85:04 

85:04 we have some prompts on the notebook
85:06 

85:06 where you need to can restart this
85:08 

85:08 session so you can load the GPU um
85:11 

85:11 Library so try to follow those
85:14 

85:14 um
85:16 

85:16 in order to get your GPS drivers in
85:18 

85:18 session properly configured
85:25 

85:25 thanks Jordan
85:27 

85:27 question 21 could you talk more about
85:31 

85:31 why 50 is used as the prediction
85:34 

85:34 accuracy threshold
85:36 

85:36 I can I started answering that one what
85:39 

85:39 I can answer it and before talking so
85:41 

85:41 the closer they probably these are to
85:43 

85:44 that 50 the threshold means that the
85:46 

85:46 model is least certain based on class A
85:49 

85:49 or Class B and this one not without
85:51 

85:51 we're talking about the specific water
85:53 

85:53 versus no water example
85:56 

85:56 if the probability is closer to let's
85:59 

85:59 say a 1 or 100 it means that the model
86:03 

86:03 is turning that that particular pixel is
86:05 

86:05 going to be water
86:06 

86:06 you probably
86:07 

86:07 is closer than to zero it means that
86:09 

86:09 that the model is more certain that the
86:12 

86:12 actual pixel is land so know that that
86:16 

86:16 far left and Far Right
86:19 

86:19 deviation means that you're actually
86:21 

86:21 taking the priority of a or b
86:26 

86:26 um so if the priorities on the middle or
86:28 

86:28 kind of in that middle range it means
86:30 

86:30 that the model is kind of
86:32 

86:32 deviating to one cluster or the other
86:34 

86:34 but it's not extremely on it's not
86:37 

86:37 certain that it's Class A or Class B
86:49 

86:49 please
86:51 

86:51 question 22 are all types of indices
86:54 

86:54 data sets available on the cloud and
86:57 

86:57 I think there's already an answer in
86:59 

86:59 here that there are many different types
87:01 

87:01 of data available in the cloud NASA is
87:03 

87:03 in the process of moving all of its data
87:05 

87:05 on the cloud which will take a couple of
87:06 

87:06 years you would simply have to search to
87:09 

87:09 determine if your specific data that you
87:11 

87:11 are interested in is available there
87:16 

87:16 question 23 what options do you have
87:19 

87:19 when the training data set is giving you
87:21 

87:21 results probably prediction you do not
87:23 

87:23 expect
87:24 

87:24 especially when testing it
87:31 

87:31 I can take that one so I guess the first
87:33 

87:33 order of business is just
87:35 

87:35 evaluate what the model is taking as
87:37 

87:37 input like how is your training data
87:39 

87:39 looking like and if you have any um
87:41 

87:41 wrong
87:43 

87:43 yeah training samples that might be
87:44 

87:44 deviating the results from the model
87:47 

87:47 um then just try to look at how the
87:50 

87:50 model is performing in like doing some
87:52 

87:52 explanation exponential AI
87:56 

87:56 analysis that we're going to discuss in
87:58 

87:58 session three if that is not giving you
87:60 

87:60 then something proper next piece of
88:02 

88:02 advice is just to maybe like try a
88:04 

88:04 different model and see how definitely
88:06 

88:06 the performance is if the performance is
88:08 

88:08 bad as well on let's say second model it
88:10 

88:10 means that there's something wrong with
88:11 

88:11 your training data or the way you're
88:13 

88:13 pre-processing your data
88:22 

88:22 question 24 what techniques can be
88:24 

88:24 adopted to improve machine learning
88:27 

88:27 computation time especially on large
88:30 

88:30 high resolution data sets
88:33 

88:33 all right Miss Mark I answered that one
88:37 

88:37 I mean the easiest thing is to add more
88:38 

88:38 compute and run multiple scenes
88:40 

88:40 simultaneously on different systems you
88:43 

88:43 know that's the the horsepower insert uh
88:45 

88:45 the other possibilities are breaking the
88:47 

88:47 breaking an image up into smaller pieces
88:49 

88:49 and and then sending those those smaller
88:52 

88:52 pieces to locable
88:53 

88:53 the CPUs so that your paralyzed
88:56 

88:56 parallelizing in that way
88:58 

88:58 so that that's my best answer is going
89:01 

89:01 to be parallelization that's two
89:03 

89:03 different ways you can do it
89:09 

89:09 okay we'll take one more question and
89:12 

89:12 that will be it for today
89:15 

89:15 um question 25 if we have a lot of
89:17 

89:17 features 100 for example is there any
89:20 

89:20 technique to select the most important
89:22 

89:22 ones in Python for random Forest
89:31 

89:31 Jules answered that one I think
89:33 

89:33 yes I just I just put there some kind of
89:36 

89:36 general statement when you train a model
89:38 

89:38 and you do some prediction you you are
89:41 

89:41 also able to come to determine the
89:44 

89:44 future importance it's just some kind of
89:46 

89:46 calculation I don't remember the
89:47 

89:47 function that will tell you exactly what
89:51 

89:51 are the main features that contribute to
89:53 

89:53 the most to your model and based on that
89:56 

89:56 feature importance you can even simplify
89:58 

89:58 a little bit the model because you are
89:60 

89:60 going to you are going to to have some
90:02 

90:02 kind of ideas what are the variables or
90:05 

90:05 the features that can be useful for the
90:07 

90:07 model and the other one you are going to
90:09 

90:09 say that they are they don't even
90:10 

90:10 contribute they don't even affect the
90:13 

90:13 prediction so you can remove them and
90:16 

90:16 something also that uh Caleb mentioned
90:18 

90:18 today is about this uh exploratory data
90:22 

90:22 analysis when normally you do that also
90:25 

90:25 you can have some kind of basic idea
90:27 

90:27 which features can be really critical in
90:30 

90:30 the prediction and you also and you can
90:32 

90:32 remove the one that are critical because
90:35 

90:35 in terms of when you have some kind of
90:37 

90:37 heat map you can just say look have some
90:40 

90:40 kind of basic idea so
90:42 

90:42 the the the importance and features can
90:45 

90:45 be look at in the explorator data
90:47 

90:47 analysis also after you train the model
90:50 

90:50 you can determine the future importance
90:52 

90:52 and have some kind of basic information
90:54 

90:54 what are the ones that contribute the
90:56 

90:56 most to your model to predict to have a
90:59 

90:59 better prediction
91:04 

91:04 foreign
91:07 

91:07 well thank you so much to all of our
91:10 

91:10 instructors today and our rset team
91:13 

91:13 behind the scenes that will be it for
91:16 

91:16 part two of fundamentals of machine
91:18 

91:18 learning for earth science please join
91:20 

91:20 us one week from today
91:23 

91:23 um for part three that is on May 4th
91:27 

91:27 as a reminder the recording of this
91:30 

91:30 session will be up within about 48 hours
91:32 

91:32 and we will be posting this q a
91:37 

91:37 um once it's final on the website as
91:38 

91:38 well you can find access to the r said
91:41 

91:41 GitHub also on that training page you
91:44 

91:44 can find a link in the chat and as a
91:47 

91:47 reminder we will open the homework even
91:50 

91:50 though homework is referenced throughout
91:52 

91:52 each of the assignments we will open
91:53 

91:53 that homework at the end of part three
91:55 

91:55 at which point you will be able to fill
91:56 

91:56 in your answers and
91:58 

91:58 submit your homework
92:01 

92:01 thank you to everybody for joining us
92:03 

92:03 today and hopefully we will see you in a
92:06 

92:06 week have a great day everyone

## Part 3

00:02 Welcome back to Fundamentals of Machine
00:04 

00:04 Learning for Earth Science. This is part
00:07 

00:07 three
00:08 

00:08 where we will be discussing model
00:10 

00:10 tuning,
00:11 

00:11 parameter optimization, and additional
00:13 

00:13 machine learning algorithms.
00:17 

00:17 Once again, my name is Brock Blevins,
00:19 

00:19 training coordinator for the NASA
00:22 

00:22 Applied Remote Sensing Training Program,
00:25 

00:25 or ARSET, and I'll be your host for this
00:27 

00:27 training.
00:29 

00:29 We are at the final part of the training
00:32 

00:32 and
00:34 

00:34 just to review
00:36 

00:36 the objectives of this training was to
00:38 

00:38 recognize the most common machine
00:39 

00:39 learning methods used for processing
00:42 

00:42 Earth science data,
00:44 

00:44 describe the benefits and limitations,
00:48 

00:48 explain how to apply basic machine
00:50 

00:50 learning algorithms and techniques to
00:52 

00:52 remote sensing data,
00:55 

00:55 use an analysis appropriate training
00:56 

00:56 data set to evaluate conditions and
00:58 

00:58 solutions for given case studies, and to
01:01 

01:01 complete basic procedures to interpret,
01:03 

01:03 refine, and evaluate the accuracy
01:06 

01:06 of the results of machine learning
01:07 

01:07 analysis.
01:10 

01:10 Just as a reminder, this is an
01:12 

01:12 introductory webinar series.
01:14 

01:14 Uh there aren't a lot of prerequisites
01:16 

01:16 necessarily coming into today, but if
01:18 

01:18 you uh aren't very familiar with the
01:20 

01:20 fundamentals and the concepts and
01:22 

01:22 terminology of remote sensing, uh we
01:24 

01:24 suggest you check out our resource
01:26 

01:26 session one of our on-demand
01:28 

01:28 Fundamentals of Remote Sensing training.
01:32 

01:32 Attendees will also need to access
01:34 

01:34 Google Drive and Google Colab to work
01:37 

01:37 with the code today.
01:39 

01:39 To access these resources, users must
01:41 

01:41 have uh an email ending in gmail.com.
01:45 

01:45 We'll have the recording of this
01:46 

01:46 training available within 48 hours, and
01:49 

01:49 so you can go through at your own pace.
01:52 

01:52 So, here was our journey over the last
01:54 

01:54 three weeks.
01:56 

01:56 We are in part three.
01:58 

01:58 And the homework is now available. This
02:01 

02:01 will be due May 19th.
02:04 

02:04 And you can find that under part three
02:07 

02:07 on the training web page. It is a Google
02:09 

02:09 form.
02:10 

02:10 And that'll be due May 19th.
02:13 

02:13 Throughout this presentation, please
02:14 

02:14 feel free to type your questions to the
02:16 

02:16 trainers in the question section.
02:19 

02:19 All the questions will being asked will
02:20 

02:20 be moved to a question answer document
02:22 

02:22 and we'll go through those at the end of
02:25 

02:25 the training.
02:28 

02:28 So now I'll pass this off to our
02:29 

02:29 trainer,
02:30 

02:30 Jordan Caraballo Vega.
02:33 

02:33 Thank you, Jordan.
02:36 

02:36 Okay. So, hello everyone. Thank you very
02:39 

02:39 much for being back.
02:41 

02:41 Today we're discussing part three. In
02:43 

02:43 this session, we're going to concentrate
02:45 

02:45 on model tuning, parameter optimization,
02:48 

02:48 and then we're going to introduce
02:49 

02:49 additional machine learning algorithms
02:51 

02:51 through the
02:52 

02:52 session.
02:57 

02:57 The outline of this session, first we're
02:59 

02:59 going to do a an overview of model
02:60 

02:60 tuning and parameter optimization. We're
03:03 

03:03 going to do an ex- ercise to optimize
03:06 

03:06 our XG model that we trained on session
03:07 

03:07 two.
03:09 

03:09 We're going to provide an overview of
03:11 

03:11 model explainability and
03:12 

03:12 interpretability.
03:14 

03:14 And then we're going to provide an
03:15 

03:15 overview of additional machine learning
03:17 

03:17 algorithms that you can use for your own
03:19 

03:19 science use cases.
03:21 

03:21 At the end, we're going to have a
03:22 

03:22 hands-on
03:24 

03:24 Google Colab
03:26 

03:26 exercise to improve some of the water
03:28 

03:28 classification models we were developing
03:30 

03:30 on the previous sessions.
03:31 

03:31 And then we're going to have a post
03:33 

03:33 assignment and the Q&A.
03:35 

03:35 And just as a reminder, as our previous
03:37 

03:37 sessions, all of the materials are
03:39 

03:39 available on the GitHub repository. So,
03:41 

03:41 feel free to
03:42 

03:42 jump on to it and follow the session
03:44 

03:44 well
03:45 

03:45 with this class. So, the trainer
03:47 

03:47 objectives of session three, we're going
03:50 

03:50 to recognize the most common
03:52 

03:52 optimization methods for machine
03:54 

03:54 learning algorithms used on for
03:56 

03:56 processing earth science data.
03:58 

03:58 We're going to describe the benefits and
04:00 

04:00 limitations of some of these machine
04:02 

04:02 learning algorithms optimizations for
04:05 

04:05 earth science analysis.
04:06 

04:06 And then we're going to explain how to
04:08 

04:08 apply basic explainable artificial
04:10 

04:10 intelligence techniques for machine
04:13 

04:13 learning algorithms in a meaningful
04:14 

04:14 manner to remote sensing data.
04:17 

04:17 Okay, so let's start with a overview of
04:19 

04:19 model tuning optimization.
04:21 

04:21 From a summary from session two, we
04:24 

04:24 trained a random forest model that would
04:27 

04:27 perform binary classification of water
04:30 

04:30 and no water pixels using some of the
04:33 

04:33 modest surface reflectance data.
04:35 

04:35 And we provide kind of this basic data
04:37 

04:37 set that we would download and train on
04:40 

04:40 and then perform predictions out of it.
04:43 

04:43 We also evaluated our model using our
04:44 

04:44 test data set and we perform inference
04:47 

04:47 both using a tabular data set, so we
04:49 

04:49 already had our feature set up,
04:52 

04:52 but then also using raster tiles. So,
04:54 

04:54 GeoTIFF files that we would pre-process
04:57 

04:57 and put into tabular format to feed into
04:59 

04:59 our random forest model.
05:01 

05:01 In general, our model was able to one,
05:05 

05:05 successfully identify water pixels, but
05:07 

05:07 we were also able to identify locations
05:09 

05:09 where the model needs improvement.
05:12 

05:12 And these are some of the input bands
05:14 

05:14 and some of the
05:15 

05:15 in feature importance that we were
05:17 

05:17 looking at where our surface reflectance
05:19 

05:19 band two was actually one of the most
05:21 

05:21 important features at the time of
05:23 

05:23 improving our model.
05:25 

05:25 Now, the
05:27 

05:27 training method that we used on our
05:29 

05:29 previous exercise
05:31 

05:31 was basically doing a cross-validation
05:34 

05:34 K-fold optimization.
05:36 

05:36 And just to reiterate on the concept is
05:39 

05:39 that we take our training data and we
05:41 

05:41 split it into K folds. In our case, we
05:44 

05:44 were doing five because of time
05:46 

05:46 constraint, but then you have several
05:48 

05:48 iterations of the same model where you
05:50 

05:50 can extract then the best model out of
05:53 

05:53 all of the iterations. And one of the
05:55 

05:55 things that this buys us is to have a
05:58 

05:58 model that can be strong enough or that
06:01 

06:01 can be general enough to perform good
06:05 

06:05 across
06:07 

06:07 all of the training data set that we
06:08 

06:08 have and also the test data set. It also
06:11 

06:11 helps on the generalization side of
06:12 

06:12 things. Now, your first model will not
06:15 

06:15 always be the best. If your first model
06:17 

06:17 will not always be the most accurate,
06:19 

06:19 you might have false positives and false
06:22 

06:22 negatives on your first model, and that
06:23 

06:23 is okay.
06:25 

06:25 The libraries that we have been
06:26 

06:26 discussing through this training, they
06:28 

06:28 mostly focus on using some of the
06:31 

06:31 default parameters from these models.
06:34 

06:34 So, we need to perform additional steps
06:36 

06:36 to find which of these parameters are
06:39 

06:39 actually the most useful based on our
06:41 

06:41 use case.
06:43 

06:43 And most of the machine learning
06:45 

06:45 applications, they just provide that.
06:47 

06:47 They provide some of these basic default
06:49 

06:49 parameters that are useful for many of
06:52 

06:52 the applications that they have been
06:54 

06:54 testing on. Now, some of our Earth
06:56 

06:56 science data sets, they're just unique.
06:59 

06:59 They are different. They have different
07:01 

07:01 spectral responses. We may have a lot of
07:03 

07:03 noise. We may have locations where we
07:04 

07:04 might have haze from clouds.
07:07 

07:07 There just so many nuances and variances
07:10 

07:10 on our Earth science data sets that we
07:12 

07:12 just need to optimize to find the best
07:14 

07:14 hyper parameters to work from.
07:16 

07:16 And these hyper parameters, they are
07:19 

07:19 just set before the learning process
07:21 

07:21 begins and they would actually influence
07:23 

07:23 the model convergence. If you have a bad
07:26 

07:26 number or an incorrect number of hyper
07:29 

07:29 parameters set for a particular
07:31 

07:31 iteration of training, you might never
07:33 

07:33 reach convergence or your model might
07:35 

07:35 never learn the features that you bring
07:37 

07:37 into it. And just to add the random
07:39 

07:39 forest as an example, if our number of
07:42 

07:42 trees is too low, we might simply
07:45 

07:45 overfit because our model hasn't reached
07:47 

07:47 a way of generalizing across unseen
07:50 

07:50 samples or samples that are not
07:52 

07:52 representative from what you have been
07:54 

07:54 splitting your random forest on.
07:56 

07:56 Another option, and
07:58 

07:58 this is what we're going to be
07:59 

07:59 discussing, is how can we improve these
08:02 

08:02 hyperparameters without having to
08:03 

08:03 manually go through all of these steps?
08:06 

08:06 How can we improve this step as it's
08:09 

08:09 part of our development workflow without
08:11 

08:11 having to have any external knowledge
08:14 

08:14 beside at least knowing the basics?
08:16 

08:16 On the right-hand side, we have some of
08:18 

08:18 the actual hyperparameters from the
08:19 

08:19 random forest. This is just an example
08:22 

08:22 of how hyperparameters would look like
08:24 

08:24 in regards to a specific algorithm. In
08:26 

08:26 this case, it is an XGBoost algorithm
08:29 

08:29 where we have learning rate,
08:31 

08:31 max depth, the max number of leaf nodes,
08:35 

08:35 and then L2 regularization that we use
08:37 

08:37 to avoid overfitting.
08:39 

08:39 In the case of our random forest model,
08:41 

08:41 instead of having a learning rate and an
08:43 

08:43 L2 regularization, our hyperparameters
08:46 

08:46 might only be like the max depth, the
08:48 

08:48 max number of nodes, and then the max
08:51 

08:51 number of leaf nodes.
08:55 

08:55 Let's continue then with the model
08:56 

08:56 tuning. Most of the time, we're not
08:59 

08:59 optimizing our models just for those
09:01 

09:01 common features.
09:02 

09:02 We're actually trying to optimize our
09:04 

09:04 model to improve so if we can generalize
09:07 

09:07 across uncommon features.
09:09 

09:09 Most of the times on your
09:11 

09:11 training iteration, you're going to get
09:12 

09:12 most of the easy tasks or most of the
09:15 

09:15 similar tasks to be predicted properly.
09:18 

09:18 Now, those outliers or those regions
09:20 

09:20 that are not completely similar to your
09:23 

09:23 representative training data set, they
09:25 

09:25 might need additional help. And this is
09:26 

09:26 where model tuning and parameterization
09:29 

09:29 comes into play.
09:30 

09:30 So, by fine-tuning our model, we can
09:33 

09:33 then maximize our performance to get the
09:36 

09:36 highest rate of
09:38 

09:38 performance possible. And here we define
09:41 

09:41 per sport performance as kind of the
09:43 

09:43 highest rate possible, but there are
09:45 

09:45 many ways of measuring performance. We
09:47 

09:47 can see performance as let's say the
09:49 

09:49 most accurate model, but we can also try
09:52 

09:52 to see performance as let's say the
09:54 

09:54 model with less true false
09:57 

09:57 the model with less false positives or
09:58 

09:58 the model with less false negatives. We
10:02 

10:02 can define that
10:04 

10:04 optimization rule
10:06 

10:06 on our end based on our application.
10:08 

10:08 Sometimes we just want the model to be
10:10 

10:10 generalized enough to have a good
10:11 

10:11 accuracy. But sometimes we want our
10:14 

10:14 models to concentrate more on those hard
10:16 

10:16 sample or on those small features that
10:19 

10:19 might not be represented on the training
10:21 

10:21 data.
10:22 

10:22 By finally from the model tuning, this
10:25 

10:25 is just an experimental process.
10:27 

10:27 And the idea is to find those optimal
10:30 

10:30 values for those hyper-parameters to
10:32 

10:32 then maximize our performance. We are
10:35 

10:35 not going to get there on the first try
10:37 

10:37 cuz there are many ways of tuning these
10:39 

10:39 models.
10:40 

10:40 And on the right hand side, we just kind
10:42 

10:42 of showing how the workflow looks like.
10:44 

10:44 We have several testing or several
10:45 

10:45 experiments where we change some of the
10:48 

10:48 values from our hyper-parameters. And in
10:50 

10:50 this case, we're actually changing the
10:51 

10:51 number of layers for our neural network
10:54 

10:54 and then the number of neurons for that
10:56 

10:56 particular neural network including the
10:58 

10:58 the learning rate.
10:59 

10:59 By having multiple experiments of this,
11:01 

11:01 we can actually monitor how the
11:02 

11:02 performance of our neural network is
11:05 

11:05 going through and how that is affecting
11:07 

11:07 the actual performance of the model.
11:09 

11:09 Note that at by the end of these three
11:11 

11:11 iterations, the model with the highest
11:13 

11:13 accuracy was the one with five layers
11:16 

11:16 and 256 neurons. Not necessarily the one
11:19 

11:19 with the most or highest number of
11:21 

11:21 neurons, but the one with the highest
11:23 

11:23 number of layers.
11:27 

11:27 So, some of the techniques for modeling
11:30 

11:30 are first of all, having a drill boost
11:33 

11:33 evaluation criterion that we need to
11:35 

11:35 identify before starting to model or to
11:38 

11:38 tune our algorithm. And the idea behind
11:42 

11:42 this is that we need to make sure that
11:43 

11:43 we know
11:44 

11:44 how we want to approach our
11:46 

11:46 optimization. We want to know what we
11:48 

11:48 want to improve from our model
11:50 

11:50 performance
11:52 

11:52 related to our training data set and in
11:54 

11:54 this case our test data set.
11:57 

11:57 We have two methods. We have the manual
11:58 

11:58 model tuning and the idea of manual
12:00 

12:00 model tuning is that we're going to
12:02 

12:02 basically use our intuition. We're going
12:04 

12:04 to use our knowledge on the algorithm
12:07 

12:07 to improve it, to build upon it. And
12:10 

12:10 sometimes, once you kind of familiarize
12:12 

12:12 yourself with some of these algorithms,
12:14 

12:14 you know where things are wrong. You
12:15 

12:15 know that your model might be over
12:16 

12:16 fitting because you just have a small
12:18 

12:18 number of trees. And manual model tuning
12:21 

12:21 only comes by experience and by knowing
12:24 

12:24 the mechanics and the rules behind each
12:27 

12:27 one of the models.
12:29 

12:29 Now, if we do not have some of the back
12:31 

12:31 background knowledge, sometimes we can
12:34 

12:34 then proceed to use automated model
12:36 

12:36 tuning. And this model tuning, or is
12:39 

12:39 automated, you still need to have at
12:40 

12:40 least some background knowledge to know
12:42 

12:42 which parameters should you use or which
12:45 

12:45 experiments you should design, but you
12:47 

12:47 don't need to actually go and manually
12:49 

12:49 change some of these parameters by
12:51 

12:51 default. Another
12:53 

12:53 positive thing about automated model
12:56 

12:56 tuning is that instead of having to
12:58 

12:58 guess, you can just create a n number of
13:01 

13:01 tests that would just iterate above all
13:03 

13:03 of the experiments that you set, which
13:05 

13:05 in this case would allow you to do
13:08 

13:08 faster optimization of the model without
13:10 

13:10 having to spend n number of times in the
13:13 

13:13 iterations and just thinking about what
13:15 

13:15 would work.
13:16 

13:16 On the right hand side, we have a
13:18 

13:18 diagram of some of the parameter tuning
13:22 

13:22 methods or steps. First of all, we kind
13:24 

13:24 of start our hyperparameter tuning step
13:27 

13:27 and then we apply a search method, which
13:29 

13:29 in this case we have three. We have a
13:31 

13:31 grid method, we have a random method,
13:33 

13:33 and we have a Bayesian method
13:35 

13:35 for one of the hyperparameter sets.
13:38 

13:38 The idea is that we're going to iterate
13:40 

13:40 over each one of these methods by doing
13:42 

13:42 cross-validation, splitting the data
13:44 

13:44 into K folds like we did on our previous
13:46 

13:46 experiment, and then for each one of
13:48 

13:48 those K folds, we're going to then
13:50 

13:50 calculate the score of accuracy that we
13:52 

13:52 want, any average accuracy from all of
13:54 

13:54 the models, and then assign that value
13:58 

13:58 to the iteration that we just
13:60 

13:60 experimented with.
14:01 

14:01 Assuming we do all of the grid
14:03 

14:03 experiments or even the random search,
14:06 

14:06 we end up having
14:08 

14:08 the number of models with the best
14:10 

14:10 performance that we can then select from
14:12 

14:12 for further testing.
14:18 

14:18 Okay. So, a bit of more details just to
14:21 

14:21 kind of make sure that we explain this
14:23 

14:23 properly. So, on the grid search method,
14:26 

14:26 the user is the one that decide defines
14:29 

14:29 a set of values for each hyperparameter
14:31 

14:31 to form a grid. So, the user has some
14:33 

14:33 knowledge on what hyperparameters to
14:35 

14:35 choose from to then perform the
14:38 

14:38 experiments. And this can be different
14:40 

14:40 combinations of parameters. We can try
14:42 

14:42 different values. We can try different
14:45 

14:45 values based on literature or even on
14:47 

14:47 the actual knowledge that you might have
14:49 

14:49 or background about the algorithm. We
14:52 

14:52 also have the random search, and in the
14:54 

14:54 random search, with the algorithm would
14:56 

14:56 try random combinations of these
14:58 

14:58 hyperparameters to try every single
15:00 

15:00 possible combination. And note that this
15:03 

15:03 can be computing intensive because of
15:06 

15:06 the end number of experiments that we
15:08 

15:08 have, but you can limit the number of
15:10 

15:10 experiments or the range of these
15:12 

15:12 hyperparameters to avoid some of the
15:14 

15:14 additional computational burden.
15:17 

15:17 The last step that we're going to
15:18 

15:18 discuss here is the Bayesian search,
15:20 

15:20 which in this case keeps track of the
15:22 

15:22 past evolution of the soul results to
15:25 

15:25 inform the new experiments that you're
15:28 

15:28 going to be selecting or that you're
15:29 

15:29 going to be
15:30 

15:30 creating. So in this case we're kind of
15:32 

15:32 using past information from let's say
15:34 

15:34 previous experiment to then improve upon
15:38 

15:38 the actual score of the next experiment
15:40 

15:40 that we have. And this one as well is
15:42 

15:42 kind of computer intensive because
15:44 

15:44 you're kind of saving like saving the
15:45 

15:45 data from both previous and past
15:48 

15:48 experiment but then you're finding the
15:50 

15:50 surrogate of the hyper parameters that
15:53 

15:53 are going to give you the best
15:54 

15:54 performance in an automated way where
15:56 

15:56 you don't need to think about some of
15:58 

15:58 the parameters that might be running
15:60 

15:60 through
16:01 

16:01 the optimization. And by the end what
16:04 

16:04 you have is a combination of hyper
16:06 

16:06 parameters that would just yield the
16:08 

16:08 best result based on whatever criteria
16:10 

16:10 you chose.
16:13 

16:13 Okay, so now let's go to our first
16:15 

16:15 exercise of session three. We're going
16:17 

16:17 to tune and optimize our random forest
16:19 

16:19 model.
16:24 

16:24 Okay, so similar to our previous
16:26 

16:26 sessions, we're going to go to our
16:27 

16:27 GitHub repository where we have all of
16:29 

16:29 the material
16:31 

16:31 for this training and we're going to
16:33 

16:33 look for materials for training in
16:34 

16:34 session number three which in this case
16:37 

16:37 is model tuning.
16:38 

16:38 And I click on the collab logo and then
16:42 

16:42 we can start rolling.
16:45 

16:45 In this notebook we're going to first
16:47 

16:47 familiarize ourselves with optimization
16:49 

16:49 techniques for machine learning. We're
16:51 

16:51 going to introduce some of the basics
16:53 

16:53 for this random forest model but this
16:55 

16:55 are applicable across the board.
16:57 

16:57 In this work we're going to keep using
16:60 

16:60 the same MNIST data set that we have
17:01 

17:01 been using across the training and then
17:03 

17:03 we're going to apply the workflow to
17:05 

17:05 kind of improve our model or at least
17:08 

17:08 prove the concept of model tuning across
17:10 

17:10 the board.
17:12 

17:12 First we import some of our libraries.
17:14 

17:14 We need to download some of our source
17:16 

17:16 code and install some of the
17:17 

17:17 dependencies that we might not have. And
17:20 

17:20 just to reiterate on this, you can use
17:22 

17:22 Google Colab for free, but some packages
17:25 

17:25 might be missing. So, you can just go
17:27 

17:27 ahead and install them on your session
17:30 

17:30 by having the exclamation point in
17:32 

17:32 front.
17:34 

17:34 Once we have that, we can just go ahead
17:36 

17:36 and import some of the libraries that
17:38 

17:38 we're going to be working with. Note
17:40 

17:40 that in this particular notebook, we're
17:43 

17:43 going to be using Optuna to do some of
17:45 

17:45 the parameter optimization
17:47 

17:47 techniques.
17:50 

17:50 So, once we have that, we can define our
17:52 

17:52 general variables.
17:54 

17:54 Note that we still are using the same
17:56 

17:56 feature importance
17:58 

17:58 um
17:60 

17:60 bands that we
18:02 

18:02 got from the exploratory data analysis
18:04 

18:04 exercise.
18:06 

18:06 And then, we're then using some of these
18:09 

18:09 to then download our data. So, in this
18:12 

18:12 step, we just download some of the
18:14 

18:14 training data we have. And then, we
18:16 

18:16 split it into our train data set and
18:17 

18:17 then our test data set.
18:19 

18:19 We then
18:21 

18:21 perform the split between our
18:25 

18:25 X features, so our column features, and
18:27 

18:27 then our target or label, which in this
18:31 

18:31 case are water and not water pixels.
18:35 

18:35 This is just to make sure that we are
18:36 

18:36 having and
18:38 

18:38 uh the features that we want, that we
18:40 

18:40 don't have any extra features that we
18:42 

18:42 might be having. This is always a good
18:43 

18:43 practice to make sure that you monitor
18:46 

18:46 whatever is going into your model.
18:49 

18:49 And then, just again, just doing some
18:51 

18:51 additional exploratory data analysis to
18:53 

18:53 make sure that none of our
18:56 

18:56 uh values are uh
18:58 

18:58 out of order, that we don't find any
19:00 

19:00 metrics that we we're not looking for.
19:03 

19:03 And this really important because you
19:05 

19:05 need to know at least your data. You
19:07 

19:07 need to know the physical parameters of
19:08 

19:08 your data to then understand how your
19:10 

19:10 model is going to perform and how you
19:12 

19:12 might be able to optimize the model. Cuz
19:15 

19:15 in this exercise, we're actually tuning
19:17 

19:17 the model, but in general, once you
19:19 

19:19 reach a plateau of how much you can turn
19:22 

19:22 your model, you might need to then look
19:24 

19:24 at how your data set is built, and what
19:26 

19:26 features you might need to improve the
19:29 

19:29 performance of your model.
19:31 

19:31 In here, we're just looking at some of
19:32 

19:32 the actual metrics or outliers from our
19:35 

19:35 data set. We're looking at none of them
19:38 

19:38 are higher than 10,000, but if we
19:40 

19:40 actually go a bit lower, we can see any
19:43 

19:43 other outliers that might be coming
19:45 

19:45 through.
19:47 

19:47 Here, we're going to define
19:50 

19:50 how we're going to search for the
19:53 

19:53 optimization hyper parameters.
19:56 

19:56 The first step is to set trees only
19:59 

19:59 because we only want to tune, let's say,
20:02 

20:02 the number of estimators, the max depth,
20:04 

20:04 the max sample split, and the minimums
20:06 

20:06 of samples per leaf. And all of these
20:09 

20:09 parameters are really important on the
20:11 

20:11 performance of the random forest because
20:14 

20:14 they control the structure of the
20:16 

20:16 resulting trees from training.
20:18 

20:18 And if we wanted to train on every
20:21 

20:21 single or optimize on every single
20:23 

20:23 parameter from the random forest, we
20:25 

20:25 would need to then just include all of
20:27 

20:27 them, and computationally, it would be
20:30 

20:30 expensive.
20:31 

20:31 So, give it a try. If you select that
20:34 

20:34 you want to optimize on every single
20:36 

20:36 one, you can just set the parameter to
20:38 

20:38 false,
20:39 

20:39 and then you can just go from there.
20:42 

20:42 Once we understand which parameters we
20:44 

20:44 want to test, we can then proceed to
20:46 

20:46 define which objective function we want
20:49 

20:49 to iterate over to then see and monitor
20:51 

20:51 the performance of our models.
20:54 

20:54 We can do this manually, as well as
20:56 

20:56 using expert knowledge about the
20:57 

20:57 algorithm. So, for example, increasing
20:60 

21:00 the number of estimators, um if the
21:02 

21:02 model's over fitting, would probably
21:04 

21:04 improve the performance of our random
21:06 

21:06 forest. Now, some other algorithms like
21:08 

21:08 neural networks or even XGBoost
21:10 

21:10 algorithms, they might not be as
21:12 

21:12 sensitive as a random forest to some of
21:15 

21:15 these parameters. They might be more
21:17 

21:17 resilient in regards to being able to
21:20 

21:20 overcome some of these hyperparameter
21:22 

21:22 uh
21:23 

21:23 optimization
21:25 

21:25 exercises.
21:27 

21:27 So, in the next cell here, we kind of
21:29 

21:29 define several number of trees, depths
21:32 

21:32 to to test. And then other parameters
21:34 

21:34 that we want to test from the
21:35 

21:35 architecture of the random forest.
21:37 

21:37 And note that we also define some of our
21:39 

21:39 metrics, which in this case are going to
21:41 

21:41 be precision,
21:42 

21:42 the F1 score, which again is the
21:44 

21:44 harmonic mean between the precision and
21:46 

21:46 the recall, and then the rate of the
21:48 

21:48 false positives.
21:49 

21:49 Note that we are setting up some of the
21:53 

21:53 actual hyperparameters in this section
21:55 

21:55 by making some that are going to be
21:57 

21:57 static, but then making some that are
21:60 

21:60 going to be just trial and error. For
22:01 

22:01 example, the number of estimators or the
22:04 

22:04 number of trees in this case.
22:06 

22:06 If we wanted to test all of the
22:07 

22:07 parameters all together, we would then
22:09 

22:09 provide a trial for all of the
22:11 

22:11 parameters or all of the options
22:14 

22:14 of the random forest model. And again,
22:17 

22:17 we're doing this basically for the
22:19 

22:19 random forest, but you can always choose
22:23 

22:23 some of these parameters
22:25 

22:25 from whatever architecture you're using
22:27 

22:27 to then perform the experiments and
22:29 

22:29 iterations on them.
22:32 

22:32 Once we have the parameter set that we
22:34 

22:34 want to test on, we can define our model
22:38 

22:38 and then fit over our training data and
22:41 

22:41 then perform some predictions out of it.
22:45 

22:45 So, let's just then start our
22:47 

22:47 hyperparameter tuning trials.
22:49 

22:49 We first use Optuna login just to make
22:52 

22:52 sure that we're going to log every
22:53 

22:53 single one of the experiments.
22:55 

22:55 And then we're going to create a study
22:57 

22:57 based on what are the parameters that we
23:00 

23:00 want to test on.
23:02 

23:02 And what we're going to do is that we're
23:03 

23:03 going to have 25 trials, and then we're
23:07 

23:07 going to have our objective function,
23:09 

23:09 which in this case
23:11 

23:11 we defined as
23:16 

23:16 the list of trees, max depth,
23:18 

23:18 min samples, and then the actual min min
23:20 

23:20 samples split split.
23:24 

23:24 Once that is done, we can proceed to run
23:27 

23:27 our optimization. And know how we go
23:29 

23:29 from trial 0 to trial 24, accounting for
23:32 

23:32 all of our experiments. Know how the
23:35 

23:35 performance can be on on the end of like
23:38 

23:38 0.97 accuracy through 0.98 and so forth.
23:44 

23:44 Know how the number of estimators then
23:46 

23:46 continues to change on a graded fashion
23:49 

23:49 just to test a couple of those
23:51 

23:51 parameters across the board.
23:53 

23:53 Now, once we have
23:55 

23:55 done our experiments, we need to
23:57 

23:57 visualize the experiments. We need to
23:58 

23:58 understand how the model performed, and
24:01 

24:01 what are the benefits that we got from
24:02 

24:02 it.
24:03 

24:03 So, the metrics to use in this case is
24:05 

24:05 the F1 score.
24:07 

24:07 And what we're going to do is that we're
24:09 

24:09 going to run some of the trial scores to
24:11 

24:11 get some of the values or some of the
24:14 

24:14 estimates based on the number of
24:16 

24:16 estimators. So, the number of estimator
24:18 

24:18 being setting five because of the best
24:21 

24:21 performance that we got was a 0.99
24:24 

24:24 of accuracy across the board.
24:28 

24:28 In addition to that, we can actually
24:29 

24:29 visualize some of the
24:32 

24:32 optimization history in regards to the
24:34 

24:34 objective value or the actual
24:36 

24:36 experiments that we were running. Know
24:37 

24:37 that we have a range between what it
24:39 

24:39 would be about 99.5
24:44 

24:44 for the like highest
24:46 

24:46 results between like 0.99 for some of
24:49 

24:49 the others. And this kind of taking some
24:51 

24:51 of those most
24:54 

24:54 performing results out of the actual
24:56 

24:56 bucket of them.
24:58 

24:58 We can also look at the hyperparameter
24:60 

24:60 importances. In this case, we only have
25:03 

25:03 a single parameter since we were doing
25:05 

25:05 the end number of estimators and only
25:08 

25:08 testing on the number of trees.
25:11 

25:11 In the assignment for session number
25:12 

25:12 three, you're going to be able to then
25:14 

25:14 test on additional hyper parameters to
25:17 

25:17 then check on which ones provide the
25:19 

25:19 most importance when doing this
25:22 

25:22 hyperparameter tuning exercise.
25:25 

25:25 At the end of the day, we kind of
25:27 

25:27 visualize the loss functions that we
25:29 

25:29 were estimating on an optimization, and
25:32 

25:32 we can look at what were the estimators
25:35 

25:35 across all of the the
25:37 

25:37 experiments that we run and the number
25:40 

25:40 of experiments that we actually run per
25:41 

25:41 objective function.
25:45 

25:45 Again, the same thing.
25:47 

25:47 When training with with the trees only,
25:49 

25:49 we can actually see what the precision
25:51 

25:51 is based on the number of estimate
25:53 

25:53 estimators. Know that the prediction
25:57 

25:57 reaches kind of a plateau when you are
25:58 

25:58 in the 400 number of estimators. So, by
26:01 

26:01 only having a total of 100 or even less
26:04 

26:04 than 100, you're doing and reaching high
26:07 

26:07 performance. Now, in some data sets,
26:10 

26:10 this can actually mean that you're
26:12 

26:12 overfilling your model, that your model
26:14 

26:14 is not performing
26:16 

26:16 at the rate good enough that it's going
26:18 

26:18 to be able to generalize across unseen
26:21 

26:21 samples. So, you need to make sure that
26:23 

26:23 you kind of understand your data and you
26:25 

26:25 test your map visually to understand how
26:28 

26:28 the values that you're getting from the
26:30 

26:30 scores match the output that you're
26:32 

26:32 you're getting on your map.
26:36 

26:36 Okay. So, once we know what our hyper
26:39 

26:39 parameters are going to look like, we
26:41 

26:41 then go ahead and use this
26:43 

26:43 hyperparameter trainer model, which in
26:45 

26:45 total would be using the number of
26:47 

26:47 estimators as 75.
26:50 

26:50 Using the K-fold strategy, we then go
26:53 

26:53 ahead and do the same K-fold training by
26:56 

26:56 iterating over a K of five and having
27:00 

27:00 multiple scores, so we can test the the
27:03 

27:03 generalization of our training data
27:05 

27:05 across all of the testing samples and
27:08 

27:08 the training samples.
27:10 

27:10 Once we have trained, we can see that we
27:12 

27:12 have a couple of iterations. We can see
27:15 

27:15 the accuracy per iteration.
27:18 

27:18 And then at the end of the day, we can
27:20 

27:20 then look at some of the average scores
27:22 

27:22 and so forth.
27:25 

27:25 Once we have trained and tested our
27:28 

27:28 model, we can then get some of the
27:29 

27:29 metrics that we're looking for.
27:31 

27:31 So, overall, we're getting an accuracy
27:33 

27:33 of 0.98.
27:35 

27:35 And then we can just proceed to
27:37 

27:37 calculate some of the previous metrics
27:39 

27:39 that we did before. For example, just
27:42 

27:42 testing the recall, testing some of the
27:43 

27:43 values that we have on the test data
27:46 

27:46 set.
27:48 

27:48 Note that once we continue to look at
27:50 

27:50 the feature importance after tuning and
27:53 

27:53 different from the first experiment, our
27:55 

27:55 surface reflectance band two continues
27:57 

27:57 to be of high importance, but NDVI
28:00 

28:00 actually increasingly its importance as
28:03 

28:03 well.
28:04 

28:04 So, this means that by tuning our our
28:07 

28:07 model, we actually provided the
28:09 

28:09 parameters enough to have two of these
28:12 

28:12 most important features to be kind of
28:15 

28:15 to change based on the number of trees
28:17 

28:17 we were optimizing.
28:20 

28:20 Okay. So, we have optimized our model.
28:24 

28:24 We have looked at some of the test
28:27 

28:27 scores. We can then go ahead and
28:30 

28:30 see our maps or visualize our map. So,
28:33 

28:33 for this, we're going to load the model
28:36 

28:36 that we just saved. And then we're going
28:37 

28:37 to load a raster data set that we can
28:40 

28:40 look at through the experiment. And for
28:43 

28:43 exercise of session number three, you're
28:46 

28:46 going to have additional rasters that
28:47 

28:47 you will need to look at and then see if
28:50 

28:50 the tuning of your model actually
28:53 

28:53 improve the performance across all of
28:54 

28:54 these rasters that you're going to have
28:56 

28:56 the exercise for.
28:58 

28:58 So, in this case, we read a raster, we
29:01 

29:01 again do additional feature engineering
29:03 

29:03 to calculate some of the indices that we
29:05 

29:05 need to complement a raster,
29:08 

29:08 and then we go from the array data set
29:11 

29:11 to a tabular format.
29:14 

29:14 Once we have the data set in tabular
29:15 

29:15 format, we can feed that directly into a
29:18 

29:18 random forest model, and then calculate
29:20 

29:20 both the classification output and then
29:23 

29:23 the probability output.
29:25 

29:25 So, at the end of the day, what we end
29:28 

29:28 up with is a single band raster that
29:31 

29:31 then has the output of our model once it
29:35 

29:35 has been optimized through the iteration
29:38 

29:38 set.
29:39 

29:39 And all of these cells are basically
29:40 

29:40 what we discussed in session two, but
29:43 

29:43 are the main way of getting some of
29:45 

29:45 those post-processing and QA pixels to
29:48 

29:48 be removed out of our final product, and
29:50 

29:50 to make sure that we clean our final
29:52 

29:52 output for better visualization and for
29:55 

29:55 better science.
29:58 

29:58 Finally, we can go and then visualize
30:01 

30:01 through an interactive map using volume
30:04 

30:04 the performance of our model.
30:07 

30:07 And we can see how we're actually in
30:11 

30:11 very well predicting some of the
30:14 

30:14 characteristics of like power in here
30:17 

30:17 and some of the other water bodies that
30:19 

30:19 we have around the area.
30:22 

30:22 Same with some of the water bodies that
30:23 

30:23 we can find in some of these other
30:25 

30:25 locations if we turn on and off some of
30:28 

30:28 these features.
30:30 

30:30 We do still have some of these false
30:31 

30:31 positives
30:34 

30:34 that can appear in the map, and this
30:36 

30:36 could be due to the small data set that
30:39 

30:39 we have been using to test across board.
30:43 

30:43 So,
30:45 

30:45 as closing thoughts, we have again
30:48 

30:48 downloaded MODIS data.
30:51 

30:51 We have performed a grid automatic
30:53 

30:53 parameter optimization
30:55 

30:55 using techniques for model tuning. These
30:58 

30:58 techniques can be used across the board
31:00 

31:00 in all the parameters, so they provide
31:02 

31:02 kind of the fundamentals to
31:05 

31:05 tune and automatically improve some of
31:07 

31:07 all the models.
31:09 

31:09 We have trained and performed inference
31:11 

31:11 using the hyper parameters that we found
31:13 

31:13 to be the most
31:14 

31:14 accurate for this particular model and
31:16 

31:16 data set, and then we have created
31:18 

31:18 additional interactive visualization to
31:20 

31:20 look at our maps.
31:22 

31:22 Finally, we looked at some of the model
31:24 

31:24 explainability aspects, and we found out
31:27 

31:27 some of the characteristics that change
31:29 

31:29 when we finally optimize our model with
31:31 

31:31 the automatic generation of
31:33 

31:33 hyperparameter tuning.
31:37 

31:37 Next, we're going to have Caleb
31:39 

31:39 explaining some of the model
31:40 

31:40 explainability and interpretability
31:42 

31:42 techniques we can use across
31:45 

31:45 the board on some of these models.
31:49 

31:49 Now that Jordan has um
31:52 

31:52 showed us how to tune a model and get a
31:54 

31:54 good model going, let's look at how we
31:57 

31:57 can explain some of the results and how
31:58 

31:58 we can make an interpretable model.
32:02 

32:02 So, model explainability and
32:05 

32:05 interpretability all a part of of being
32:08 

32:08 under the umbrella of XAI, which is
32:10 

32:10 explainable artificial intelligence. Um
32:14 

32:14 that's kind of kind of the idea of
32:15 

32:15 making models that are able to explain
32:18 

32:18 the predictions that they made.
32:20 

32:20 As we come to rely on these inferences
32:22 

32:22 given by machine learning models in
32:25 

32:25 different sectors,
32:26 

32:26 um it is important that these models be
32:28 

32:28 accurate and interpretable.
32:30 

32:30 These models need to be able to explain
32:33 

32:33 why they made the decision decisions
32:35 

32:35 that they did, and they also need to be
32:37 

32:37 accurate.
32:38 

32:38 Now, looking up to the right, we can
32:39 

32:39 kind of see a graph that shows model
32:42 

32:42 accuracy versus model interpretability.
32:44 

32:44 It's pretty difficult to get into that
32:46 

32:46 sweet spot of having a very accurate
32:49 

32:49 model and it being very interpretable.
32:52 

32:52 Decision trees and linear logistic
32:54 

32:54 uh regressions are are two examples of
32:57 

32:57 models that are very interpretable. We
33:00 

33:00 can look at their decision-making
33:02 

33:02 process and be able to understand the
33:03 

33:03 reasoning. Um but they're not as
33:06 

33:06 accurate as something that's a more
33:08 

33:08 black-box model such as uh deep
33:11 

33:11 learning, a neural network, or ensembles
33:14 

33:14 um to give a few examples. What I mean
33:17 

33:17 by black box is that we can't really
33:20 

33:20 tell what is going on when we give the
33:22 

33:22 model a prediction, and uh it can't
33:25 

33:25 explain the predictions that it made or
33:27 

33:27 the reason in reasoning that it used to
33:30 

33:30 make those predictions.
33:35 

33:35 So, accuracy may may not be enough. We
33:37 

33:37 want to have a machine learning model
33:39 

33:39 that is reliable. An unreliable
33:42 

33:42 black-box model, they're prone to making
33:44 

33:44 inconsistent and unpredictable
33:46 

33:46 decisions,
33:48 

33:48 and they're unable to provide any
33:49 

33:49 insight or explanations for these
33:51 

33:51 decisions.
33:53 

33:53 Model accuracy and model
33:55 

33:55 interpretability can sometimes be in
33:57 

33:57 conflict with one another. Um
33:60 

33:60 interpretability is where we can explain
34:02 

34:02 why a certain outcome was predicted. Um
34:05 

34:05 And in general, more accurate models
34:07 

34:07 tend to be less interpretable. This
34:09 

34:09 trade-off between accuracy and
34:11 

34:11 robustness arises because the most
34:13 

34:13 accurate models are often the most
34:15 

34:15 complex,
34:16 

34:16 the black-box models, and therefore the
34:18 

34:18 most difficult to explain.
34:21 

34:21 Um we also want to have a robust model
34:24 

34:24 where inputs can be noisy. You know, we
34:26 

34:26 have a model that is trained off of uh
34:29 

34:29 surface reflectance data.
34:31 

34:31 Uh that can sometimes be noisy. There
34:33 

34:33 can be variance in that data and we
34:34 

34:34 still want the model to return accurate
34:37 

34:37 results.
34:41 

34:41 One
34:42 

34:42 kind of big area of explainable AI is
34:44 

34:44 the post hoc explainability approach. Um
34:47 

34:47 post hoc is done after the model is
34:50 

34:50 trained. Um these approaches are methods
34:53 

34:53 that's that are used to explain the
34:55 

34:55 predictions made by a machine learning
34:56 

34:56 model after it has been trained.
34:59 

34:59 These approaches provide insights into
35:01 

35:01 how the model arrived at its predictions
35:04 

35:04 and can help improve the transparency
35:06 

35:06 and interpretability of the model.
35:08 

35:08 Uh
35:10 

35:10 we'll kind of discuss some post hoc
35:13 

35:13 uh explainability approaches that can be
35:15 

35:15 used to explain the predictions made by
35:16 

35:16 a machine learning model.
35:18 

35:18 Um off to the right we see a
35:20 

35:20 a list of some approaches.
35:22 

35:22 Um some are feature relevance where
35:26 

35:26 um
35:27 

35:27 that involves identifying the most
35:29 

35:29 important features that contribute to
35:31 

35:31 the output of a machine learning model
35:33 

35:33 after it has been trained.
35:34 

35:34 Uh that approach can provide insights
35:36 

35:36 into how the model arrived at its
35:37 

35:37 predictions and help improve the
35:39 

35:39 interpretability and transparency of the
35:41 

35:41 model.
35:42 

35:42 We can also do other methods such as um
35:45 

35:45 local explanations. If we were to if we
35:48 

35:48 were to change some of the inputs, how
35:51 

35:51 would that affect the outputs and we can
35:53 

35:53 kind of learn and get some explanations
35:56 

35:56 of the model's decision-making process
35:59 

35:59 based off of those tests.
36:02 

36:02 Other methods are
36:04 

36:04 um
36:04 

36:04 some like test explanations where we can
36:07 

36:07 kind of determine the model makes a
36:09 

36:09 prediction why only if some part of the
36:13 

36:13 input is above or below a certain
36:15 

36:15 threshold.
36:16 

36:16 Um and we can also look at other methods
36:19 

36:19 such as model simplification where we
36:21 

36:21 can take a very complex model and reduce
36:23 

36:23 those kind of decisions down to a little
36:25 

36:25 more simple model that's more easily
36:27 

36:27 interpretable.
36:32 

36:32 One commonly used tool is uh SHAP. It's
36:35 

36:35 a Python package and it uses the the um
36:39 

36:39 idea of Shapley additive explanations.
36:42 

36:42 Um basically, it's a game theory
36:44 

36:44 algorithm that's used to determine which
36:47 

36:47 features have the most impact on a
36:49 

36:49 prediction.
36:50 

36:50 Um it's a model agnostic approach, which
36:52 

36:52 means that it doesn't matter what model
36:55 

36:55 you're using. It just kind of looks at
36:57 

36:57 the input and the output. So, it could
36:59 

36:59 be a very black box model like a
37:01 

37:01 uh neural network and it can still work
37:03 

37:03 for it.
37:05 

37:05 And this SHAP tool can calculate an
37:08 

37:08 additive feature importance score for
37:09 

37:09 each prediction. And like I said before,
37:12 

37:12 that kind of means it can calculate um
37:14 

37:14 which features contributed the most to
37:17 

37:17 raising or lowering maybe like uh
37:19 

37:19 predicted class probability, say for
37:22 

37:22 water.
37:23 

37:23 Um
37:24 

37:24 and that's a part of the local
37:26 

37:26 explanation sector of of post hoc
37:28 

37:28 explainability.
37:30 

37:30 Um they're really good for explaining
37:32 

37:32 single decisions from these black box
37:33 

37:33 models.
37:35 

37:35 Down in the bottom right, we see an
37:37 

37:37 uh an example of a row from our MODIS
37:40 

37:40 training data set. And below that, given
37:43 

37:43 our classifier, we can get the SHAP um
37:48 

37:48 explainability plot and that tells us
37:51 

37:51 which features kind of prompted the
37:53 

37:53 class probably probability output to be
37:56 

37:56 higher or lower.
37:57 

37:57 We can see that band six and band two
38:00 

38:00 made the prediction go much higher
38:02 

38:02 towards a water value.
38:05 

38:05 Um and then NDVI and surface reflectance
38:07 

38:07 band four tried to push it down towards
38:10 

38:10 the land value, but it ended up being
38:12 

38:12 58% uh probability of water. So, we'll
38:15 

38:15 call that water.
38:17 

38:17 Another example of model explainability
38:20 

38:20 with a machine learning algorithm is um,
38:23 

38:23 attention maps with visual transformers.
38:26 

38:26 Uh,
38:26 

38:26 transformers are a type of
38:29 

38:29 use of neural networks um, where they
38:32 

38:32 use a mechanisms called an attention
38:35 

38:35 mechanism, um, which basically allows
38:37 

38:37 the model to focus on certain areas and
38:39 

38:39 certain features in the input and make
38:43 

38:43 predictions from that. One really useful
38:45 

38:45 thing that comes out of that are these
38:46 

38:46 attention maps. Basically, the maps um,
38:50 

38:50 from the inputs that show where the
38:52 

38:52 model is paying attention and that can
38:54 

38:54 kind of tell us where the model is
38:56 

38:56 paying attention to and what features
38:58 

38:58 are kind of more important in leading to
39:00 

39:00 the prediction that it made. Um, it
39:03 

39:03 highlights the important regions for the
39:05 

39:05 image for that target class.
39:08 

39:08 Uh, these can lead to a better
39:09 

39:09 understanding of how the model is
39:10 

39:10 processing the input and which features
39:12 

39:12 are most important to the prediction.
39:17 

39:17 Uh, and next we will take a look at some
39:20 

39:20 of these concepts in practice and a
39:23 

39:23 notebook on Google Collaboratory.
39:30 

39:30 All right, now we will look at the
39:32 

39:32 uh,
39:32 

39:32 notebook. It is located here, the link
39:35 

39:35 for it is located here in the uh, NASA
39:38 

39:38 ARSET ARSET machine learning
39:40 

39:40 fundamentals repository.
39:42 

39:42 You can go down to this link right here
39:44 

39:44 and open it in Google Collaboratory.
39:49 

39:49 We're first going to
39:52 

39:52 get rid of all of the outputs that we've
39:54 

39:54 already seen and start from scratch.
39:57 

39:57 Um, so
39:60 

39:60 we've briefly mentioned some topics in
40:02 

40:02 machine
40:03 

40:03 in machine learning explainability.
40:05 

40:05 Um, this is kind of an introductory
40:07 

40:07 notebook to familiarize yourself with
40:10 

40:10 explainability techniques for machine
40:12 

40:12 learning.
40:13 

40:13 Uh, for this we'll use data from the
40:15 

40:15 MODIS instrument to test uh several
40:18 

40:18 techniques and machine learning
40:19 

40:19 algorithms and we're going to look at
40:21 

40:21 different
40:22 

40:22 um methods of explainable AI. Um
40:26 

40:26 the intent is to introduce this topic of
40:28 

40:28 explainability and describe some of the
40:30 

40:30 methods.
40:31 

40:31 Um this entire work is done using Python
40:34 

40:34 and it's based on the data set that
40:36 

40:36 we've seen before that we've uh
40:39 

40:39 that is the Modis toy data set.
40:44 

40:44 This is I completely normal. This
40:47 

40:47 uh
40:48 

40:48 we've written this so it's okay to run
40:50 

40:50 anyway.
40:52 

40:52 Here we're just going to install some
40:54 

40:54 explainability libraries called shap and
40:57 

40:57 lime. We'll get into that a little bit
40:59 

40:59 later. We've already kind of explained
41:01 

41:01 some of shap.
41:04 

41:04 So, we can see that it's installed some
41:05 

41:05 of these packages that are necessary
41:07 

41:07 that don't come stock with the
41:10 

41:10 Google Colab runtime.
41:15 

41:15 And now we've also downloaded a um
41:19 

41:19 pre-trained uh random forest model.
41:21 

41:21 We've pre-trained a model before in uh
41:24 

41:24 the previous notebooks and here's one
41:27 

41:27 that we have located in the uh
41:28 

41:28 repository that we can download anyway
41:30 

41:30 so we can save time on not having to
41:32 

41:32 train again.
41:34 

41:34 We're going to import the rest of the
41:36 

41:36 notebooks that we need.
41:41 

41:41 And we're going to init the JavaScript.
41:43 

41:43 This is just so we can see some really
41:44 

41:44 pretty uh
41:46 

41:46 um outputs from the shap
41:49 

41:49 uh library.
41:53 

41:53 We have some variables that we're going
41:54 

41:54 to need and right here we're going to
41:56 

41:56 actually load this Python path. Uh this
41:58 

41:58 is the
42:00 

42:00 model that we've downloaded and we're
42:02 

42:02 just going to load it up with joblib and
42:04 

42:04 it is now uh our random forest model.
42:09 

42:09 We're going to download some of the tips
42:10 

42:10 that we're going to use to predict on uh
42:13 

42:13 this with this random forest model.
42:16 

42:16 Um
42:18 

42:18 This is a
42:20 

42:20 function that just reads in those tips
42:22 

42:22 and then converts them to a NumPy array
42:26 

42:26 that we then convert into a data frame
42:28 

42:28 that's a tabular data frame that we're
42:30 

42:30 familiar with now.
42:33 

42:33 And it looks like this.
42:35 

42:35 So we see here
42:37 

42:37 uh we have a lot of points. We have all
42:38 

42:38 of the bands that we need surface
42:40 

42:40 reflectance bands 1 through 7, the
42:42 

42:42 normalized differentiate differentiable
42:44 

42:44 vegetation index, and NDWI
42:47 

42:47 1 and 2.
42:50 

42:50 Um here we're going to define a function
42:52 

42:52 that takes that data frame and applies
42:55 

42:55 the uh random forest model to it.
43:01 

43:01 So this might take a little bit of time
43:04 

43:04 to predict just because it's a lot of
43:05 

43:05 data points.
43:08 

43:08 So now the random forest has predicted
43:10 

43:10 that data frame. Um what we're actually
43:12 

43:12 going to do is we're going to
43:15 

43:15 uh we have the predictions from that and
43:17 

43:17 that's water not water and we're going
43:19 

43:19 to assign that to the data frame that we
43:21 

43:21 see
43:22 

43:22 um here that is our predictive data
43:25 

43:25 frame.
43:26 

43:26 Um we can see that in practice here
43:29 

43:29 where just this last column is that
43:32 

43:32 predicted value. Um
43:35 

43:35 So before we get to the model
43:36 

43:36 explanation part, let's find some data
43:38 

43:38 that is interesting that we can use for
43:40 

43:40 some individual prediction explanations.
43:43 

43:43 Um this is the data that is that might
43:45 

43:45 be outlier outlier data or some other
43:48 

43:48 interesting data that you might want to
43:50 

43:50 take a closer look at.
43:52 

43:52 Here we have some pixels where the model
43:55 

43:55 labeled it water, but the uh NDVI was
43:58 

43:58 very high. So that could be interesting
44:00 

44:00 to us.
44:02 

44:02 We do this function that kind of sets a
44:03 

44:03 threshold
44:05 

44:05 um and we here we set the threshold for
44:07 

44:07 10,000. And here we see
44:10 

44:10 a sample of the data frame that shows
44:15 

44:15 rows where the NDVI is above 10,000 and
44:19 

44:19 the random forest model labeled it
44:21 

44:21 water.
44:25 

44:25 Um the same thing again, we it's just
44:28 

44:28 making sure that we have the water ones.
44:33 

44:33 So we briefly talked about Shapley
44:37 

44:37 values and Shap and this is kind of a
44:41 

44:41 in practice sort of explanation.
44:44 

44:44 Um
44:45 

44:45 So the library is in Python. It's a
44:47 

44:47 popular and widely used tool that
44:49 

44:49 provides solution to the explainable AI
44:53 

44:53 problem.
44:54 

44:54 It offers a pretty intuitive way to
44:56 

44:56 explain the output of machine learning
44:57 

44:57 models by assigning the values to each
45:00 

45:00 feature and indicating its contribution
45:03 

45:03 to the prediction for a specific
45:05 

45:05 instance. Um so like I said, the Shap
45:08 

45:08 library implements that sort of theory
45:11 

45:11 from the Shapley values.
45:13 

45:13 And here we're going to use what's
45:15 

45:15 called the tree explainer which works
45:17 

45:17 really well with tree-based methods such
45:19 

45:19 as random forest, XGBoost, LightGBM or
45:22 

45:22 histogram gradient boosted machines. Um
45:25 

45:25 there is an explainer that works for any
45:28 

45:28 machine learning algorithm and that's
45:30 

45:30 called the kernel explainer.
45:32 

45:32 Here we have some additional resources
45:33 

45:33 you can take a look at that kind of go
45:35 

45:35 more in-depth into the theory of Shapley
45:37 

45:37 values and more in practice along with
45:40 

45:40 some tutorials.
45:44 

45:44 So here we have the tree explainer. We
45:46 

45:46 give it the classifier which is a random
45:48 

45:48 forest and we also give it the
45:51 

45:51 raster data frame which is the pandas
45:54 

45:54 data frame made from the rasters we
45:56 

45:56 brought in.
45:57 

45:57 Um we're going to drop the values of
45:59 

45:59 water, the predicted values
46:01 

46:01 from that predicted high and NDVI
46:05 

46:05 sample that we took.
46:07 

46:07 And here we're just going to get the
46:08 

46:08 SHAP values from that. All we need to do
46:11 

46:11 is give it that the the data frame or
46:14 

46:14 the values that we want it to predict
46:16 

46:16 on.
46:19 

46:19 So, one method of explainability is the
46:21 

46:21 variable importance plot.
46:23 

46:23 Um
46:24 

46:24 and this is all according to the mean
46:26 

46:26 SHAP values for each features. And a
46:28 

46:28 variable importance plot is important um
46:30 

46:30 when looking at a
46:32 

46:32 looking at the explanations a little
46:33 

46:33 more globally.
46:35 

46:35 Um we want to see which features are
46:38 

46:38 more important according to the SHAP
46:40 

46:40 values and have a a bigger impact on the
46:43 

46:43 model's decision-making process.
46:46 

46:46 Here we see surface reflection band two
46:49 

46:49 um and surface reflectance band five
46:53 

46:53 being pretty important. Um although band
46:56 

46:56 two really stands out against the
46:58 

46:58 others.
46:59 

46:59 We do this with SHAP. Um that just gives
47:02 

47:02 us the summary plot.
47:05 

47:05 So, here we're going to look at some
47:07 

47:07 local interpretation. Um one really
47:09 

47:09 useful aspect of SHAP is the benefit of
47:11 

47:11 local interpretability,
47:13 

47:13 uh meaning that it explains the
47:15 

47:15 predictions of machine learning models
47:17 

47:17 at the individual observation level.
47:19 

47:19 This is in contrast to traditional
47:21 

47:21 variable importance methods that only
47:23 

47:23 provide results for the overall
47:25 

47:25 population. With SHAP, we can understand
47:27 

47:27 why a particular prediction was made for
47:29 

47:29 a specific case and how each predictor
47:32 

47:32 contributed to that prediction.
47:34 

47:34 Uh this level of transparency allows us
47:37 

47:37 to pinpoint and contrast the like the
47:39 

47:39 impacts of different factors on each
47:41 

47:41 individual case, and it provides
47:43 

47:43 valuable insights into the model's
47:45 

47:45 decision-making process.
47:47 

47:47 With all that being said,
47:49 

47:49 um we've defined a function up here that
47:52 

47:52 kind of wraps the SHAP force plot, and
47:55 

47:55 that's the function that gives us this
47:57 

47:57 nice little um
47:59 

47:59 visual right here.
48:01 

48:01 So, what we do is we want to look at the
48:03 

48:03 first row in our high NDVI setting.
48:06 

48:06 Um and what it gives us is this sort of
48:10 

48:10 visual. That's a what's called a forest
48:12 

48:12 plot.
48:13 

48:13 And what it gives us is the model
48:15 

48:15 probability that it is water. And here
48:17 

48:17 we see it's 0.77, so pretty confident
48:19 

48:19 that it's water.
48:21 

48:21 And we see which features are pushing
48:23 

48:23 that prediction towards water and which
48:26 

48:26 which features are pushing it down
48:28 

48:28 towards uh not water.
48:30 

48:30 So, we see all of um
48:34 

48:34 the surface reflectance bands and the
48:36 

48:36 calculated indi-
48:38 

48:38 indices NDWI 1 and 2 are pushing this up
48:41 

48:41 towards our prediction of water. The
48:43 

48:43 only thing that's pushing it down just
48:45 

48:45 by a little bit is that really high NDVI
48:48 

48:48 uh
48:49 

48:49 um value. So, we don't According to
48:51 

48:51 this, maybe don't have to worry that
48:53 

48:53 much about NDVI being really high
48:56 

48:56 because all of the other features might
48:57 

48:57 make up for it. Um so, let's
48:59 

48:59 double-check that with a few more
49:00 

49:00 examples.
49:04 

49:04 This is another example. We see it's
49:06 

49:06 just another row in our sample data
49:08 

49:08 frame. We see it's again pretty
49:10 

49:10 confident uh
49:11 

49:11 0.68 is our predicted probability. And
49:14 

49:14 like we saw before,
49:16 

49:16 um we see that the
49:18 

49:18 rest of the surface reflectance bands
49:21 

49:21 and calculated indices besides NDVI
49:25 

49:25 push up uh the probability towards water
49:29 

49:29 rather than not water. And NDVI is the
49:31 

49:31 only thing pushing it down, but it's not
49:33 

49:33 enough to push it towards anything less
49:35 

49:35 than 0.5, where it might be the model
49:38 

49:38 might be unsure and push towards not
49:41 

49:41 water.
49:43 

49:43 Just to triple-check, let's look at one
49:45 

49:45 more uh example.
49:47 

49:47 We can kind of just see again it's the
49:50 

49:50 same deal
49:51 

49:51 um with that we saw before. So, that's
49:53 

49:53 good. We can see look at this and we can
49:55 

49:55 say, "Okay, there are instances where
49:58 

49:58 NDVI might be high, um but
50:02 

50:02 the rest of the indicators um
50:05 

50:05 show that the model is um
50:07 

50:07 pretty confident in its prediction of
50:09 

50:09 water.
50:12 

50:12 So, that's SHAP. Another um
50:14 

50:14 explainability tool is called LIME.
50:17 

50:17 Um so, that's the local interpretable
50:19 

50:19 model agnostic explanations package.
50:23 

50:23 Um and what LIME does is
50:26 

50:26 LIME creates a very simple and
50:28 

50:28 interpretable model interpretable model
50:31 

50:31 from a given model, our random forest,
50:33 

50:33 for example. And it only does this for a
50:35 

50:35 local area around a given point. It
50:37 

50:37 doesn't really give us a global
50:39 

50:39 explanation um like parts of SHAP can
50:42 

50:42 do.
50:43 

50:43 What it does is it uh creates a simple
50:45 

50:45 model for only uh areas in our feature
50:48 

50:48 space
50:49 

50:49 um where we want to take a closer look.
50:52 

50:52 So, it's a linear approximation of the
50:54 

50:54 model's behavior.
50:56 

50:56 Um while this model, this random forest,
50:59 

50:59 might be very complex globally, and that
51:01 

51:01 means by globally I mean in the entire
51:03 

51:03 valid feature space,
51:05 

51:05 it's easier for LIME to approximate the
51:07 

51:07 model around a point of interest.
51:10 

51:10 This graph is a really good example.
51:12 

51:12 Um
51:13 

51:13 the soft blue and red back here
51:15 

51:15 represent the global decision
51:16 

51:16 boundaries.
51:17 

51:17 Uh however, in the local space, we see
51:19 

51:19 here this red cross, um this is an area
51:22 

51:22 we kind of want to take a look at. And
51:24 

51:24 what LIME does is it approximates the
51:26 

51:26 decision space, you know, between red
51:29 

51:29 and blue here with that simple linear
51:31 

51:31 boundary.
51:32 

51:32 Um this works to explain only the area
51:35 

51:35 around this point of interest. These
51:37 

51:37 other red crosses and blue crosses
51:40 

51:40 um
51:41 

51:41 and this really approximates the model
51:43 

51:43 well in this local area, but it doesn't
51:45 

51:45 represent the global decision function
51:47 

51:47 as we see. If we were to take this and
51:49 

51:49 apply it to everything else, we'd see
51:50 

51:50 that it would not fit with what the
51:52 

51:52 model's actually doing in other areas of
51:55 

51:55 the future space.
51:59 

51:59 These are some additional resources that
52:00 

52:00 you can take a look at that probably
52:02 

52:02 better explains it than I can. Um and it
52:04 

52:04 also gives us some examples and
52:06 

52:06 tutorials to take a further look at
52:08 

52:08 this.
52:10 

52:10 So, in practice, um we can import the
52:14 

52:14 lime library and what we take is the
52:16 

52:16 lime tabular that works for tabular
52:18 

52:18 data.
52:19 

52:19 Um
52:20 

52:20 and we create a lime tabular explainer.
52:23 

52:23 Uh we give it the data frame to predict,
52:26 

52:26 which is our raster data frame. We tell
52:29 

52:29 it this is a classification problem.
52:31 

52:31 Um we give it some feature names and we
52:34 

52:34 give it the class names, not water and
52:36 

52:36 water.
52:37 

52:37 This gives us an object called a lime
52:39 

52:39 explainer.
52:41 

52:41 And what we can do is use that further
52:43 

52:43 down here. One thing we do need to
52:45 

52:45 define before that is um a lambda
52:48 

52:48 function
52:49 

52:49 uh
52:50 

52:50 that's uh basically given an input, it
52:53 

52:53 returns the model probability of the
52:55 

52:55 input being water.
52:57 

52:57 And we want to return that probability.
52:58 

52:58 Want to make sure that that's a float,
53:00 

53:00 meaning that it'll give us decimals.
53:03 

53:03 Um
53:04 

53:04 so, there's a lot going on here
53:06 

53:06 in this part. What we have here is we
53:09 

53:09 have the lime explainer and we call
53:11 

53:11 explain instance and we just give it the
53:14 

53:14 first row values
53:16 

53:16 um and we tell it we have 10 features.
53:20 

53:20 So, first we see that the row we are
53:23 

53:23 explaining is on the right side. These
53:25 

53:25 are the actual um
53:27 

53:27 values in this column. So, we see we
53:30 

53:30 have a um
53:32 

53:32 we have all of our surface reflectance
53:33 

53:33 bands and the calculated indices. This
53:35 

53:35 is what's going into the model.
53:38 

53:38 Um on the left, we see the class
53:39 

53:39 probabilities. We see uh high
53:41 

53:41 probability of water and uh less high
53:44 

53:44 probability of land .77 to .22.
53:50 

53:50 And in the middle is what is really
53:52 

53:52 interesting. So this is the feature
53:54 

53:54 contributions to what pushed this model
53:57 

53:57 towards predicting it water.
53:59 

53:59 And this is our kind of linear
54:02 

54:02 approximation. We see that surface
54:05 

54:05 reflectance five being in between 94 and
54:08 

54:08 less than 297 pushes that towards water
54:12 

54:12 as well as NDWI.
54:15 

54:15 Other aspects push it towards not water
54:17 

54:17 but not as much as our
54:20 

54:20 feature contributions of surface
54:22 

54:22 reflectance five, NDWI and some other
54:26 

54:26 ones.
54:28 

54:28 So this is interesting. Let's take
54:29 

54:29 another look at another example.
54:32 

54:32 It's the same deal. We have the columns
54:34 

54:34 off to the left that are our actual
54:36 

54:36 values that are we that is going in.
54:39 

54:39 These are our high NDVI samples.
54:42 

54:42 We see model probabilities and in the
54:44 

54:44 center we see the explanation of why
54:47 

54:47 this model is predicting water.
54:51 

54:51 We can take a closer look at that where
54:53 

54:53 it actually gives us the decision
54:55 

54:55 boundaries and the
54:58 

54:58 model and the impact that those um
55:02 

55:02 boundaries have on the model prediction.
55:04 

55:04 So this is really nice to look at
55:05 

55:05 because we can see that if the surface
55:07 

55:07 reflectance
55:09 

55:09 is greater than 297 and less than 1711
55:14 

55:14 or equal to
55:15 

55:15 um
55:16 

55:16 that that pushes the model maybe a
55:18 

55:18 little bit towards
55:20 

55:20 not water.
55:23 

55:23 So we have another example here and I'm
55:26 

55:26 not going to go into too much more
55:27 

55:27 detail just because it's what we've been
55:29 

55:29 seeing before. It's just an example of
55:33 

55:33 of the high NDVI and the model labeling
55:38 

55:38 it water.
55:41 

55:41 So some closing thoughts. What have we
55:43 

55:43 done in this notebook? Well, we've
55:45 

55:45 loaded a saved random forest model from
55:47 

55:47 disk
55:48 

55:48 and we're able to load a raster in for
55:50 

55:50 the model to predict on.
55:52 

55:52 And we also used shap to visualize
55:55 

55:55 feature importances as well as local
55:57 

55:57 explanations. And of course, we've also
55:60 

55:60 used lime to calculate and visualize
56:02 

56:02 local interpretations of model outputs.
56:06 

56:06 So yeah, thank you.
56:09 

56:09 Okay, thank you very much Caleb. Now
56:11 

56:11 we're going to go into our last exercise
56:13 

56:13 of session three where we're going to
56:14 

56:14 introduce the concept of auto machine
56:16 

56:16 learning and then we're going to discuss
56:18 

56:18 some of the closing remarks.
56:23 

56:23 For this exercise, we're going to head
56:24 

56:24 out to our GitHub page and now we're
56:26 

56:26 going to click on the Modis auto ML
56:29 

56:29 notebook.
56:31 

56:31 Once you click on it, you're going to
56:32 

56:32 receive this prompt.
56:35 

56:35 And the main idea of this notebook is
56:37 

56:37 that we're going to introduce some of
56:38 

56:38 the auto ML or auto machine learning
56:40 

56:40 features
56:42 

56:42 within our data set.
56:43 

56:43 We're going to introduce some of the
56:44 

56:44 benefits of using it and then
56:46 

56:46 some of the actual future concepts that
56:48 

56:48 you might be able to to investigate on
56:50 

56:50 your own once we finish this tutorial.
56:54 

56:54 As we have done before, we're going to
56:55 

56:55 install some of our dependencies. Note
56:56 

56:56 that in this case, we're going to
56:58 

56:58 install the auto scikit-learn package
57:00 

57:00 from Python
57:02 

57:02 which is going to provide some of those
57:04 

57:04 auto machine learning features that
57:05 

57:05 we're going to need to discuss in this
57:06 

57:06 project.
57:09 

57:09 Once we have installed the package, we
57:12 

57:12 can proceed to import the library and in
57:15 

57:15 our case, we're doing a classification
57:17 

57:17 problem.
57:18 

57:18 But if you had a regression problem,
57:19 

57:19 then you would include the auto
57:21 

57:21 scikit-learn plus the regression
57:24 

57:24 portion of the library.
57:27 

57:27 We go ahead and define some of the
57:29 

57:29 default variables that we have been
57:30 

57:30 doing so far.
57:32 

57:32 Create some of the output directories to
57:34 

57:34 save some of our images,
57:37 

57:37 and then load our training and test data
57:40 

57:40 set so we can look at some of the auto
57:42 

57:42 machine learning features.
57:44 

57:44 Know that one of the important things
57:46 

57:46 that we have done through all of our
57:47 

57:47 sessions is to
57:49 

57:49 create our X and Y variables for
57:52 

57:52 training and testing, which we're going
57:54 

57:54 to use then for further development on
57:56 

57:56 our exercise.
57:59 

57:59 The first portion of the exercise is
58:01 

58:01 just going to kind of replicate the
58:03 

58:03 training mechanism that we used on our
58:05 

58:05 session two training loop. And in here,
58:08 

58:08 what we do is that we defined a K-fold
58:11 

58:11 object where we're going to do K
58:13 

58:13 iterations over our data set to decrease
58:16 

58:16 the variance between the models that
58:18 

58:18 we're going to train with our random
58:19 

58:19 forest.
58:21 

58:21 And just to kind of do a brief overview
58:23 

58:23 of what we did on session two is that by
58:26 

58:26 using K-fold mechanisms, we reduce the
58:29 

58:29 variance of our models, but we also
58:30 

58:30 increase the probabilities of
58:32 

58:32 generalization because our model is
58:34 

58:34 seeing several views of our training
58:36 

58:36 data set.
58:38 

58:38 Once we define our K-fold approach, we
58:41 

58:41 can then define some of the hyper
58:43 

58:43 parameters that we need. And we also did
58:46 

58:46 some testing on this on session two and
58:49 

58:49 part of session three where we could
58:51 

58:51 actually optimize and fine-tune some of
58:54 

58:54 these parameters on the fly using
58:56 

58:56 auto-automation
58:57 

58:57 of the optimizer hyper parameters. Now,
59:01 

59:01 this is going to be helpful, let's say,
59:03 

59:03 in some exercises where you don't want
59:04 

59:04 to optimize your model by your by your
59:07 

59:07 own, but you can also use some of these
59:09 

59:09 techniques once you have the let's say
59:13 

59:13 proper domain knowledge to then optimize
59:15 

59:15 the more the model on your own based on
59:17 

59:17 the actual expertise that you have been
59:19 

59:19 gaining from these sessions and then
59:21 

59:21 further reading that you might do along
59:23 

59:23 the line
59:24 

59:24 of other projects that you might have.
59:26 

59:26 So, once we define model and our
59:29 

59:29 classifier, we can proceed to train
59:32 

59:32 and do K iterations based on the number
59:34 

59:34 of
59:35 

59:35 views of our data set that we're going
59:36 

59:36 to have. So, from these, we're going to
59:39 

59:39 probably just average some of these
59:41 

59:41 scores that we have from the models that
59:43 

59:43 we trained,
59:45 

59:45 generate some of the metrics for each
59:47 

59:47 one of those models,
59:49 

59:49 but then we can actually select both the
59:51 

59:51 best accuracy model, but also the
59:53 

59:53 average all the models that we trained.
59:57 

59:57 Now, know that we had to go through all
59:59 

59:59 of these iteration process just to train
60:01 

60:01 several of these models.
60:03 

60:03 Now, when we introduce the concept of
60:06 

60:06 automatic learning, what these libraries
60:08 

60:08 does is that they try to automate every
60:10 

60:10 single point of the optimization of your
60:12 

60:12 model and model selection pieces.
60:15 

60:15 So, this particular library, which is
60:18 

60:18 called auto-sklearn, allows you to one,
60:21 

60:21 test several models that are available
60:23 

60:23 through the library,
60:25 

60:25 two, to actually do the
60:27 

60:27 hyperparameter optimization on the fly,
60:30 

60:30 and then three, to create ensembles of
60:32 

60:32 these models. So, now we're not training
60:34 

60:34 a single random forest model, which is a
60:37 

60:37 three decision tree ensemble by itself,
60:40 

60:40 we're having ensembles of different
60:42 

60:42 models that can include random forests,
60:44 

60:44 other decision trees, and so forth that
60:47 

60:47 are going to allow us for better
60:48 

60:48 generalization across the board.
60:51 

60:51 So, to define
60:53 

60:53 our auto machine learning pipeline, what
60:55 

60:55 we do is that we
60:56 

60:56 define this auto-sklearn classifier
60:59 

60:59 pipeline.
60:60 

60:60 And know how we're not defining any of
61:02 

61:02 the hyper-parameters of our models. The
61:04 

61:04 only things that we're defining is how
61:06 

61:06 much time to spend per task, and then
61:10 

61:10 how long to run the entire process.
61:13 

61:13 And these two steps are important
61:15 

61:15 because based on whatever computational
61:16 

61:16 resources you have available, you can
61:19 

61:19 run this for a shorter time shorter
61:21 

61:21 amount of time, which would allow you to
61:23 

61:23 have just a couple of iterations of
61:25 

61:25 models, or for a longer amount of time,
61:28 

61:28 where you can test more models, more
61:30 

61:30 ensembles, and then further optimize the
61:33 

61:33 hyper parameters of each one of your
61:34 

61:34 models.
61:36 

61:36 Once we define our auto machine learning
61:38 

61:38 object, we can proceed then to fit our
61:41 

61:41 model.
61:43 

61:43 And know that we're using the same fit
61:45 

61:45 same fit function that we're using on
61:48 

61:48 our default K4 iteration from
61:50 

61:50 scikit-learn, but now we can then
61:54 

61:54 proceed to do some of the predictions.
61:56 

61:56 Know the that we're getting a over
61:58 

61:58 accuracy of 0.99.
61:60 

61:60 Now, we do not know what this auto
62:02 

62:02 machine learning algorithm did, and part
62:05 

62:05 of the explainability needs that we have
62:07 

62:07 for many of these projects is to know
62:09 

62:09 what the machine learning is doing,
62:12 

62:12 and what the model is actually providing
62:14 

62:14 based on the input that we give it. So,
62:17 

62:17 we can investigate some of these auto
62:19 

62:19 machine learning features by just
62:20 

62:20 looking at some of the objects
62:22 

62:22 within it. So, the first one is we're
62:24 

62:24 going to investigate the performance
62:26 

62:26 over time.
62:27 

62:27 So, we can see how the performance over
62:30 

62:30 time increased
62:31 

62:31 while the model was training and doing
62:33 

62:33 the optimization of several hyper
62:35 

62:35 parameters.
62:36 

62:36 Okay, so here we can investigate the
62:38 

62:38 models that our auto machine learning
62:39 

62:39 features were investigating, and know
62:42 

62:42 how we have several models, for example,
62:45 

62:45 a multi-layer perceptron classifier,
62:47 

62:47 which is basically a neural network, a
62:49 

62:49 very simple one,
62:50 

62:50 a a histogram gradient boosting
62:53 

62:53 classifier,
62:54 

62:54 a passive-aggressive classifier, and so
62:56 

62:56 forth. So, we have several models that
62:59 

62:59 auto our auto machine learning
63:02 

63:02 pipeline was trying, and was actually
63:04 

63:04 creating ensembles of them to improve
63:07 

63:07 our classification performance.
63:10 

63:10 Know how we have the ensemble weight,
63:13 

63:13 which is going to mean how much weight
63:15 

63:15 each one of those models end up being on
63:17 

63:17 our final uh
63:19 

63:19 model stack or on our on our final
63:22 

63:22 ensemble.
63:23 

63:23 The higher these weights are is the
63:25 

63:25 higher that model is going to provide
63:27 

63:27 input into the final prediction.
63:31 

63:31 So, we can continue looking at some of
63:33 

63:33 the metrics from some of these models.
63:35 

63:35 We can actually see some of the cost of
63:37 

63:37 these models like how much did it cost
63:39 

63:39 computationally to
63:41 

63:41 train these models but also to perform
63:43 

63:43 some of the predictions and testing.
63:47 

63:47 So, one more thing that we can look at
63:49 

63:49 is the leaderboard. So, what were the
63:51 

63:51 models with the best performance across
63:53 

63:53 the board within this ensemble?
63:55 

63:55 And we can we can look at some of the
63:57 

63:57 highest performing ones were the random
63:59 

63:59 forest, additional decision trees
64:01 

64:01 elements, but also we had some gradient
64:04 

64:04 boosting algorithms that would provide
64:06 

64:06 some input on the final ensemble.
64:10 

64:10 The final ensemble weight, we can see
64:12 

64:12 that the model with the highest
64:14 

64:14 weight is the SGD, which is the highest
64:16 

64:16 performing model within our data. Now,
64:19 

64:19 it's actually one of the
64:22 

64:22 least computationally expensive one that
64:24 

64:24 you can just compare with others like
64:27 

64:27 the multi-layer perceptron and so forth.
64:29 

64:29 So, this is just kind of a way of
64:31 

64:31 understanding what this auto machine
64:34 

64:34 learning features are doing and how the
64:36 

64:36 models are being assembled.
64:40 

64:40 In order to compare the performance of
64:42 

64:42 our K-fold iterations and our auto
64:44 

64:44 machine learning one, we can select the
64:46 

64:46 best model from the from the K-folding
64:49 

64:49 iterations, but we can then select the
64:52 

64:52 auto machine learning ensemble that we
64:54 

64:54 just trained on.
64:55 

64:55 Uh to do some of the qualitative
64:57 

64:57 observations, we can just load some of
64:59 

64:59 the rasters that we're looking at
65:02 

65:02 and then create the rasters data set
65:04 

65:04 into tabular format, so we can predict
65:07 

65:07 using these models now.
65:10 

65:10 Now that we're following the same
65:11 

65:11 process that we did in previous
65:12 

65:12 notebooks where we create our tabular
65:15 

65:15 data set and then we have our function
65:17 

65:17 then to do the prediction. Now, note
65:19 

65:19 that how I changed this function now to
65:21 

65:21 include the model the one to do so we
65:23 

65:23 can
65:25 

65:25 do predictions with different models.
65:27 

65:27 One of the downsides of this is that
65:31 

65:31 the initial raster prediction using a
65:33 

65:33 single random forest would probably take
65:36 

65:36 about a minute or two to finish.
65:38 

65:38 Now, right now we're using an ensemble
65:40 

65:40 of many of these models. So, the final
65:43 

65:43 prediction takes about 27 minutes to
65:45 

65:45 finish for a single observation.
65:48 

65:48 So, this actually a downside of using an
65:51 

65:51 auto machine learning method that has an
65:52 

65:52 ensemble of large amounts of model
65:55 

65:55 because now your performance is limited.
65:57 

65:57 And you might be able to increase the
65:59 

65:59 accuracy of your predictions. But then
66:02 

66:02 if performance was a need for your
66:04 

66:04 particular project, then you need to
66:06 

66:06 kind of consider how this would affect
66:08 

66:08 your pipeline.
66:10 

66:10 Once we have
66:12 

66:12 created our data sets in tabular format,
66:14 

66:14 we can just reshape them after
66:16 

66:16 prediction.
66:17 

66:17 And then we can start doing some
66:19 

66:19 post-processing to visualize some of
66:21 

66:21 this.
66:23 

66:23 Once we plot our QA mask and we know
66:25 

66:25 that we have been filtering some of
66:27 

66:27 those bad quality observations, we can
66:31 

66:31 then proceed to save our raster
66:33 

66:33 and then visualize it interactively just
66:35 

66:35 to kind of have an idea of how these
66:37 

66:37 models are performing.
66:40 

66:40 In here we have that our
66:43 

66:43 green mask is going to be our auto
66:45 

66:45 machine learning output and then our red
66:46 

66:46 mask is going to be our
66:48 

66:48 single random forest K4 iteration
66:51 

66:51 output.
66:52 

66:52 Note that if we do a close close-up to
66:54 

66:54 the actual lake power observations
66:58 

66:58 we can then compare how visually some of
67:01 

67:01 these models are performing. And note
67:03 

67:03 that in some cases
67:05 

67:05 the actual random forest that was that
67:07 

67:07 was trained using the K fold is actually
67:10 

67:10 better in some locations at predicting
67:12 

67:12 some of those boundaries of the Lake
67:14 

67:14 Powell observations.
67:16 

67:16 We could find other locations where the
67:19 

67:19 actual
67:20 

67:20 ensemble of models from the auto machine
67:22 

67:22 learning process are better
67:24 

67:24 than the K fold iteration
67:26 

67:26 but we can just kind of keep comparing
67:29 

67:29 the output between them. In regards to
67:32 

67:32 the the actual numerical and
67:34 

67:34 quantitative performance, we saw that
67:36 

67:36 both models has a 99% of accuracy. Which
67:40 

67:40 leads us to we probably want to increase
67:42 

67:42 the number of tiles that we're going to
67:44 

67:44 be looking at just to know how
67:46 

67:46 generalized both models are across a
67:48 

67:48 larger data set.
67:50 

67:50 And for that we do have an assignment
67:52 

67:52 where we are looking at instead of only
67:54 

67:54 Lake Powell looking at other locations
67:57 

67:57 where we compare the performance of our
67:59 

67:59 auto machine learning method compared to
68:01 

68:01 the K fold iterations of our single
68:03 

68:03 random forest.
68:06 

68:06 So, just as some closing remarks from
68:08 

68:08 this exercise
68:10 

68:10 we trained a model using K fold
68:11 

68:11 iterations
68:13 

68:13 for cross validation but also the auto
68:16 

68:16 machine learning
68:17 

68:17 auto machine learning features from the
68:18 

68:18 auto scikit-learn library.
68:21 

68:21 We have seen that both are very similar
68:23 

68:23 qualitatively and
68:25 

68:25 quantitatively but we should then do
68:27 

68:27 additional comparisons across a wider
68:31 

68:31 study area and using let's say more
68:33 

68:33 observations just to see how how much
68:35 

68:35 those models generalize across the
68:37 

68:37 board.
68:39 

68:39 Uh last but not least is really
68:41 

68:41 important to mention that well, auto
68:43 

68:43 machine learning is a really nice step
68:45 

68:45 towards automating some of these steps,
68:48 

68:48 having the domain knowledge to
68:49 

68:49 understand what is happening on the
68:51 

68:51 background is a great way of
68:53 

68:53 understanding some of the behaviors from
68:56 

68:56 the data set that we have in hand.
68:58 

68:58 The auto machine learning provides let's
68:60 

68:60 say an
69:01 

69:01 ensemble of many of these models that
69:02 

69:02 been trained and optimized on the fly.
69:05 

69:05 But, this doesn't necessarily say that
69:07 

69:07 the ultimate machine learning model is
69:08 

69:08 going to be better than let's say the
69:10 

69:10 model that was trained based on domain
69:11 

69:11 knowledge like we have done so far with
69:14 

69:14 the random forest.
69:18 

69:18 Okay, so we just finished our last
69:20 

69:20 exercise. We do have an assignment with
69:23 

69:23 a let's say a broader application
69:25 

69:25 at the end of session three that you can
69:27 

69:27 take a look at that you can uh
69:29 

69:29 play with and then you can just modify
69:32 

69:32 for your own use case.
69:34 

69:34 Now, to kind of provide an overview of
69:36 

69:36 what we have been discussing across all
69:38 

69:38 of the three sessions.
69:40 

69:40 We first started by defining what
69:42 

69:42 machine learning is and how machine
69:45 

69:45 learning can benefit Earth science.
69:47 

69:47 We also provided examples of how machine
69:49 

69:49 learning has been used in Earth science
69:51 

69:51 and has successfully
69:54 

69:54 replaced some of the workflows that we
69:56 

69:56 just didn't have in hand
69:58 

69:58 with traditional algorithms. Some of
70:00 

70:00 these could be land cover. Some of these
70:03 

70:03 have been just either like creating
70:05 

70:05 products for production
70:07 

70:07 uh outputs that we are using
70:09 

70:09 to better understand Earth. So, machine
70:12 

70:12 learning has proven to be capable of
70:14 

70:14 improving some of our workflows,
70:16 

70:16 improving some of our
70:18 

70:18 let's say existing methodologies. And
70:21 

70:21 the future of machine learning in Earth
70:22 

70:22 science is is just brilliant and we have
70:25 

70:25 many things to go for uh in the next
70:27 

70:27 couple of years. Now,
70:30 

70:30 another thing that we discuss is how the
70:32 

70:32 fundamentals of machine learning are
70:34 

70:34 basically similar across the board, but
70:37 

70:37 most of the time we only change a couple
70:39 

70:39 of variables or a couple of algorithms
70:41 

70:41 to get some of these jobs done.
70:44 

70:44 So, by following all of the fundamentals
70:46 

70:46 of machine learning that we introduced
70:47 

70:47 during the three sessions, you will be
70:50 

70:50 able to at least understand some of the
70:52 

70:52 literature that is online, some of the
70:55 

70:55 code that is actually available on
70:57 

70:57 GitHub across many of the papers that um
70:59 

70:59 you're looking at many of the workflows
71:01 

71:01 that are being held into production
71:03 

71:03 right now.
71:04 

71:04 But that way you can kind of start
71:06 

71:06 thinking about your problem in a machine
71:08 

71:08 learning way.
71:10 

71:10 How can machine learning benefit your
71:11 

71:11 project? How can machine learning
71:13 

71:13 benefit your science question? And we
71:16 

71:16 also discuss how we need to have several
71:18 

71:18 questions in hand in order to kind of
71:21 

71:21 decide what ideas from machine learning
71:24 

71:24 to pursue.
71:25 

71:25 How to select the best model is going to
71:27 

71:27 depend on that science question that you
71:29 

71:29 that you have, but also the data that
71:31 

71:31 you have, the needs from your production
71:33 

71:33 pipelines in regards to how fast do you
71:36 

71:36 need your product, how accurate your
71:38 

71:38 model needs to be.
71:40 

71:40 How reliable or how resilient your model
71:42 

71:42 needs to be in regards to the decision
71:44 

71:44 that you're going to make.
71:45 

71:45 You're never going to take decisions the
71:47 

71:47 same when thinking about disaster
71:49 

71:49 response problem than to whatever a map
71:52 

71:52 you're going to be creating for your
71:53 

71:53 specific application.
71:55 

71:55 So all of those things
71:58 

71:58 you need to keep them in mind in order
71:59 

71:59 to make some of these decisions and to
72:02 

72:02 select some of the proper techniques
72:04 

72:04 that you're going to need for your
72:05 

72:05 specific use case.
72:07 

72:07 We also introduce some of the
72:09 

72:09 concepts of training data generation,
72:11 

72:11 how you can think about your training
72:13 

72:13 data generation, how you can use
72:15 

72:15 unsupervised learning in many cases to
72:17 

72:17 create your training data, to save some
72:19 

72:19 time at the time of creating that data
72:22 

72:22 and using algorithms that can provide at
72:24 

72:24 least a base where you can use your
72:26 

72:26 domain knowledge then to improve your
72:28 

72:28 training data set.
72:29 

72:29 We also provide a details on in regards
72:32 

72:32 to explainable AI and how some of the
72:34 

72:34 time we are able to identify how our
72:37 

72:37 machine learning algorithm is thinking,
72:39 

72:39 how it's learning from the data we have
72:41 

72:41 in hand. Many times we can correlate
72:44 

72:44 that with domain knowledge based on our
72:46 

72:46 expertise in the science question. And
72:49 

72:49 that way we can actually provide input
72:52 

72:52 to the actual let's say literature that
72:53 

72:53 we're writing in regards to how these
72:55 

72:55 models are taking decisions, that we
72:57 

72:57 know how these black boxes
72:60 

72:60 can take decisions upon the problems
73:02 

73:02 that we face.
73:03 

73:03 This also allow us to understand if we
73:06 

73:06 need to add more training data to our
73:07 

73:07 model. If we have observations that our
73:10 

73:10 model is just not representative enough,
73:12 

73:12 that we need to gather data from then to
73:15 

73:15 make our model more generalizable across
73:17 

73:17 other applications.
73:19 

73:19 Other details that we touched base on
73:21 

73:21 was in optimizing our models. The first
73:23 

73:23 model that you train is not always going
73:26 

73:26 to be the best one that you have so
73:28 

73:28 across the board. So, it's nice to then
73:31 

73:31 have this starting point where you just
73:33 

73:33 test an initial model, but then you can
73:35 

73:35 use automatic fine-tuning and
73:37 

73:37 optimization to then have the best model
73:40 

73:40 available in hand from whatever
73:42 

73:42 hyper-parameters you need to optimize.
73:45 

73:45 Some of the last closing thoughts is
73:47 

73:47 then the use of auto machine learning.
73:49 

73:49 You can use some of these software
73:50 

73:50 applications then to optimize some of
73:53 

73:53 your workflows and to automate some of
73:55 

73:55 the decisions that you make during your
73:57 

73:57 um
73:58 

73:58 development process. Now, it's always
74:00 

74:00 nice to have in hand that domain
74:02 

74:02 knowledge is always going to be
74:04 

74:04 important to understand what these
74:06 

74:06 machine learning algorithms are doing,
74:08 

74:08 even more into auto machine learning
74:10 

74:10 features where you do not see from the
74:13 

74:13 beginning what the model is thinking or
74:15 

74:15 the decisions that the model is
74:16 

74:16 pursuing.
74:18 

74:18 Some closing thoughts in regards to the
74:20 

74:20 actual, let's say, philosophical way of
74:22 

74:22 machine learning and science.
74:25 

74:25 The realm of machine learning is just
74:26 

74:26 increasing and is just
74:30 

74:30 exponentially increasing in in the sense
74:32 

74:32 of algorithms that are being released,
74:35 

74:35 data sets that are being out there,
74:37 

74:37 applications of machine learning that
74:39 

74:39 sometimes are not even well documented,
74:41 

74:41 but the public is just using
74:45 

74:45 uh
74:45 

74:45 without without even understanding some
74:47 

74:47 of the backgrounds of it. So, we need to
74:49 

74:49 make sure that we do machine learning
74:51 

74:51 responsible in the sense of
74:53 

74:53 understanding and having that domain
74:54 

74:54 knowledge to improve science, not to use
74:57 

74:57 machine learning as simply a tool for
74:60 

74:60 science, but to understand how machine
75:02 

75:02 learning is is pursuing earth science
75:04 

75:04 and how is actually accelerating many of
75:05 

75:05 these workflows.
75:07 

75:07 Finally, these sessions were kind of a
75:11 

75:11 summary of many of these fundamentals
75:13 

75:13 for machine learning. We didn't cover
75:14 

75:14 everything, but we provided the tools
75:17 

75:17 for you to understand many of the
75:19 

75:19 references that are out there that you
75:21 

75:21 can then kind of use the basics and the
75:23 

75:23 fundamentals from this um training to
75:26 

75:26 then go on and do additional more
75:28 

75:28 complex workflows like convolutional
75:30 

75:30 networks, like transformers, like many
75:33 

75:33 of the foundational machine learning
75:35 

75:35 concepts are out there that are
75:37 

75:37 improving some of the workflows that we
75:39 

75:39 have. We need to start from a base. We
75:42 

75:42 need to start from an informed base. So,
75:45 

75:45 it's always good to then those basic and
75:47 

75:47 fundamentals in place to then improve
75:50 

75:50 the way we do machine learning in earth
75:52 

75:52 science.
75:57 

75:57 Just to reiterate, we have kind of a
75:59 

75:59 homework assignment and different from
76:01 

76:01 set from the previous sessions. In this
76:03 

76:03 one you're going to have a Google Form
76:05 

76:05 exam that you're going to need to fill
76:07 

76:07 out in order to get the completion
76:08 

76:08 certificate from attending this um this
76:12 

76:12 training session.
76:13 

76:13 And it has been a pleasure for us to be
76:16 

76:16 part of these training sessions. So, we
76:17 

76:17 appreciate your time.
76:19 

76:19 We hope that all of these um sessions
76:21 

76:21 were of use and are going to be of let's
76:23 

76:23 say great impact to your future machine
76:26 

76:26 learning and would allow you to
76:29 

76:29 at least start not from scratch, but
76:30 

76:30 from an informed base to leverage
76:33 

76:33 machine learning into your projects and
76:35 

76:35 your science questions. So, thank you
76:36 

76:36 very much for that.
76:40 

76:40 Thank you very much, Jordan.
76:43 

76:43 Thank you for taking the time to give us
76:46 

76:46 your closing remarks and and to
76:48 

76:48 summarize the series like that. That was
76:51 

76:51 very useful.
76:53 

76:53 Here are our contacts. If you have any
76:55 

76:55 further questions, you can contact
76:56 

76:56 myself or the trainers that you saw in
76:59 

76:59 this series over the last 3 weeks.
77:02 

77:02 Here is the training webpage where you
77:04 

77:04 can find all the materials, PowerPoint
77:06 

77:06 presentations, the videos, and the
77:07 

77:07 homework.
77:09 

77:09 And I've also included our primary ARSET
77:11 

77:11 website where you can check out other
77:13 

77:13 great trainings as well as follow us on
77:16 

77:16 Twitter to find out about more
77:18 

77:18 announcements from NASA ARSET Sciences.
77:22 

77:22 So, now we can begin addressing your
77:23 

77:23 questions. Please continue to type your
77:25 

77:25 questions into the questions box and we
77:27 

77:27 will address them in the order in which
77:29 

77:29 they were received.
77:32 

77:32 Thank you.
77:41 

77:41 Okay, welcome to the question and answer
77:43 

77:43 session.
77:45 

77:45 We've been receiving many great
77:47 

77:47 questions throughout this presentation
77:49 

77:49 here today.
77:50 

77:50 And we will do our best to make our way
77:54 

77:54 through these
77:55 

77:55 with the time remaining. Um
77:58 

77:58 and we will post this to the training
78:00 

78:00 webpage as soon as we've cleaned it up
78:03 

78:03 and
78:04 

78:04 for accuracy.
78:06 

78:06 Just one clarification, the homework is
78:10 

78:10 a Google Form found under part three
78:15 

78:15 on the training webpage.
78:18 

78:18 And
78:20 

78:20 you just need to turn that in, submit it
78:23 

78:23 by the 25th. So, there may have been
78:27 

78:27 a slide saying that it was
78:29 

78:29 due on the 19th, but we extended that
78:31 

78:31 for an extra week to the 25th.
78:34 

78:34 And these questions refer to
78:37 

78:37 the questions at the end of each one of
78:39 

78:39 the
78:40 

78:40 the notebooks in the end
78:42 

78:42 in the homework sessions. So,
78:44 

78:44 um
78:45 

78:45 let's get started.
78:47 

78:47 Question one.
78:48 

78:48 We've generated a feature importance
78:50 

78:50 chart using MDI and
78:53 

78:53 scikit-learn.
78:54 

78:54 On the Y axis it shows mean decrease in
78:57 

78:57 impurity running from 0 to 2.06. I'm not
78:59 

78:59 sure what these numbers exactly mean.
79:02 

79:02 How do I interpret this range?
79:08 

79:08 Yeah, I can
79:09 

79:09 take that.
79:10 

79:10 Thank you, Caleb.
79:11 

79:11 Uh yeah, so
79:13 

79:13 generating that mean decrease in
79:15 

79:15 impurity, um
79:17 

79:17 these importances are
79:20 

79:20 measured by uh seeing like
79:22 

79:22 how the overall impurity of uh the model
79:26 

79:26 decreases when a feature is used to make
79:28 

79:28 a split in um a node in a tree. This is
79:31 

79:31 really getting into the how a random
79:33 

79:33 forest works. So, um you can you can
79:36 

79:36 dive deeper into the into the links that
79:38 

79:38 we've provided, but basically what the
79:42 

79:42 those numbers mean is it it's pretty
79:44 

79:44 straightforward. A higher value for the
79:47 

79:47 uh mean decrease in impurity for a
79:48 

79:48 specific uh feature
79:51 

79:51 uh that means it's more important to the
79:52 

79:52 model or it means the model relied on it
79:55 

79:55 more heavily on that uh
79:57 

79:57 when it
79:58 

79:58 uh was used to make predictions.
80:02 

80:02 Great, thank you. And I placed the links
80:05 

80:05 that you see on your screen into the
80:07 

80:07 chat, so you can
80:09 

80:09 uh access them now.
80:13 

80:13 Question two. Can you kindly comment on
80:15 

80:15 how to tackle biases and discrimination
80:18 

80:18 and selection of training of labeled
80:20 

80:20 data?
80:22 

80:22 Yeah, this is Mark. I'll take care I'll
80:24 

80:24 take that one. Um
80:25 

80:25 so, I mean basically there's some bias
80:27 

80:27 in all data.
80:29 

80:29 Uh and there's not a whole lot we can we
80:31 

80:31 change it all.
80:33 

80:33 Uh so
80:35 

80:35 the key thing is to recognize that that
80:38 

80:38 the biases are there
80:40 

80:40 and there is some impact and then you
80:42 

80:42 just try to explain it in your outputs
80:44 

80:44 as best you can.
80:46 

80:46 Um
80:47 

80:47 so yeah, it's just
80:49 

80:49 the
80:50 

80:50 the biases are there, we just have to we
80:52 

80:52 just have to acknowledge that they're
80:53 

80:53 there
80:54 

80:54 and then work with them as best we can.
80:58 

80:58 That's a good caveat. Thank you very
80:59 

80:59 much, Mark.
81:01 

81:01 Question three. Do you know about using
81:03 

81:03 genetic algorithm for model tuning and
81:05 

81:05 optimization? Is it sort of a random
81:07 

81:07 search? I wasn't familiar with the
81:09 

81:09 genetic algorithm, maybe you are.
81:13 

81:13 Hey, so the techniques we mentioned in
81:16 

81:16 this training
81:17 

81:17 are both manual and automated
81:19 

81:19 techniques. So on the manual techniques
81:21 

81:21 kind of use your own domain knowledge of
81:23 

81:23 the algorithm and you change those
81:25 

81:25 hyper-parameters manually.
81:28 

81:28 On the automated side of things, we
81:29 

81:29 discuss three kind of methods. One is
81:31 

81:31 the random one where you allow the
81:33 

81:33 optimization algorithm to just select
81:36 

81:36 randomly hyper-parameters. The second
81:38 

81:38 one was a grid-based one which requires
81:40 

81:40 you to have some domain knowledge
81:42 

81:42 and then provide a list of those
81:43 

81:43 hyper-parameters to to use. And then the
81:46 

81:46 other one is a Bayesian algorithm which
81:49 

81:49 would allow them to use
81:51 

81:51 prior knowledge from the optimization
81:53 

81:53 and then improve upon that.
81:56 

81:56 Thank you.
81:58 

81:58 Question four. Are the precision,
82:00 

82:00 recall, and F score interchangeably used
82:03 

82:03 as accuracy assessment reports like
82:05 

82:05 kappa or producer accuracy?
82:08 

82:08 Can you provide any articles related to
82:10 

82:10 the parameters used as model evaluators
82:12 

82:12 in science of total environment?
82:16 

82:16 Okay, so this is Jordan again. So each
82:18 

82:18 one of these metrics actually look for
82:20 

82:20 different characteristics from your
82:22 

82:22 output.
82:23 

82:23 And the idea is that you're going to use
82:25 

82:25 each one of those metrics to target
82:27 

82:27 specific behaviors from your model.
82:29 

82:29 So, precision will give you the accuracy
82:31 

82:31 of those positive predictions, but then
82:33 

82:33 recall will give you the completeness of
82:35 

82:35 those positive predictions.
82:38 

82:38 Um F1 score is basically kind of a in
82:40 

82:40 between those two just to balance them.
82:43 

82:43 And then the over accuracy is just kind
82:45 

82:45 of the overall performance of the model.
82:46 

82:46 We're caring about the classes that are
82:48 

82:48 involved or anything else. I also added
82:51 

82:51 some references to producer and user
82:52 

82:52 accuracy that you can kind of reference.
82:55 

82:55 But basically we're just looking at
82:56 

82:56 omission and commission error. And those
82:58 

82:58 are not given by like the overall kappa
82:60 

82:60 or even like over accuracy scores.
83:02 

83:02 They're just kind of different ways of
83:03 

83:03 looking at the interpretability of your
83:05 

83:05 model.
83:08 

83:08 Thank you. And once again, I did place
83:09 

83:09 those links into the chat. So, please
83:11 

83:11 navigate there if you want to access
83:13 

83:13 those. Um question five, this is great.
83:16 

83:16 We have a high school student learning
83:18 

83:18 machine learning and data analytics. So,
83:20 

83:20 that's wonderful.
83:22 

83:22 I'm so glad that you found our course.
83:24 

83:24 Um
83:25 

83:25 could you provide some free and maybe
83:28 

83:28 not free resources to understand machine
83:30 

83:30 learning programming better? And it
83:32 

83:32 looks like
83:33 

83:33 there are a couple resources here
83:35 

83:35 and I will place these
83:38 

83:38 into the chat once again.
83:41 

83:41 Um so, please
83:45 

83:45 check these out. Thank you for supplying
83:48 

83:48 those guys.
83:49 

83:49 Question six, this seems
83:52 

83:52 pretty uh
83:54 

83:54 in the weeds here and definitely getting
83:56 

83:56 into the code. Um I'm trying to find a
83:59 

83:59 but okay, I can just answer that one
83:60 

84:00 real quick.
84:01 

84:01 Yeah, maybe you can address it better
84:02 

84:02 than I.
84:03 

84:03 Yeah, so there is a reference to a
84:05 

84:05 volume helper module missing. There's a
84:08 

84:08 cell on the notebooks where we download
84:11 

84:11 that module. So, just make sure to
84:14 

84:14 press on that cell before proceeding to
84:15 

84:15 run all of the other cells from your
84:17 

84:17 from your notebook.
84:20 

84:20 All right, thank you very much for that
84:22 

84:22 clarification. Hopefully that helps
84:24 

84:24 this person out and any others that ran
84:26 

84:26 into the same problem.
84:28 

84:28 Question six or seven.
84:31 

84:31 The model should not detect river water
84:32 

84:32 lines as outputs as well. Those should
84:35 

84:35 be considered as water pixels. Is that
84:37 

84:37 correct?
84:40 

84:40 So that's mine. This is Mark. So the
84:42 

84:42 model's designed to detect water. It
84:44 

84:44 doesn't care whether it's ocean, lake or
84:48 

84:48 or a river. If it can detect it as
84:51 

84:51 water, it's going to label it as water.
84:53 

84:53 So if you really wanted to separate
84:55 

84:55 those into into different classes, you
84:58 

84:58 would either need you would probably
85:01 

85:01 need to do it as a two-step process
85:04 

85:04 or certainly you would want a different
85:05 

85:05 method than random forest
85:08 

85:08 to get there.
85:10 

85:10 So so yeah.
85:13 

85:13 Thank you very much, Mark.
85:16 

85:16 Question eight. How do we determine
85:18 

85:18 whether the image produced has a false
85:20 

85:20 positive or not?
85:24 

85:24 That's me again.
85:26 

85:26 So once you produce the output map,
85:28 

85:28 you know, so you you apply your model to
85:31 

85:31 the data to get your prediction.
85:33 

85:33 You need to validate the map. And the
85:35 

85:35 false positives, false negatives will be
85:37 

85:37 identified in in that process.
85:40 

85:40 You can do that either with a validation
85:43 

85:43 data set if you happen to have one or
85:46 

85:46 you can do it through, you know,
85:48 

85:48 manually through visual interpretation.
85:51 

85:51 And and obviously that'll that'll get
85:54 

85:54 you the answer to whether you have false
85:56 

85:56 positives or negatives.
85:59 

85:59 Yeah, thank you. That's a pretty common
86:00 

86:00 theme when it comes to earth
86:02 

86:02 observations, especially if you're going
86:04 

86:04 to use them in a in a real world
86:06 

86:06 application, verification and validation
86:11 

86:11 will be necessary.
86:14 

86:14 Question nine.
86:14 

86:14 Exactly. That's
86:16 

86:16 you know, the the the result that you
86:19 

86:19 get from the model is really just an
86:20 

86:20 inference.
86:21 

86:21 And then, you know, we still have to
86:23 

86:23 interpret that to make sure that it's a
86:25 

86:25 valid map
86:26 

86:26 as an output.
86:28 

86:28 So, the validation process lets us go
86:30 

86:30 from inference to, you know, an an
86:32 

86:32 actual valid map on the other side.
86:38 

86:38 Thank you.
86:40 

86:40 Question nine.
86:41 

86:41 In a robustness robustness model, what
86:44 

86:44 do you mean by input can be noisy?
86:49 

86:49 Yeah, that was me. I was referring to
86:51 

86:51 how um
86:54 

86:54 real-world data can be noisy. And by
86:56 

86:56 noisy, I mean there can be errors, in
86:59 

86:59 inconsistencies, or other things like
87:01 

87:01 outliers due to
87:02 

87:02 some unnatural factors such as, you
87:05 

87:05 know, instrument malfunctions, data
87:07 

87:07 acquisition errors, processing problems,
87:08 

87:08 something like that. Um we refer to this
87:10 

87:10 as noisy because the data has kind of
87:12 

87:12 been corrupted or contaminated in some
87:14 

87:14 way. Um and that can definitely make it
87:16 

87:16 difficult for the model to make accurate
87:19 

87:19 predictions.
87:20 

87:20 Um and we basically want a model to be
87:23 

87:23 robust.
87:25 

87:25 And by that, we mean it we want it to be
87:27 

87:27 able to still draw, you know, meaningful
87:29 

87:29 and accurate uh predictions
87:32 

87:32 despite maybe this data being noisy.
87:36 

87:36 Thank you, Caleb.
87:39 

87:39 Question 10, do you know if random
87:40 

87:40 forest can also generate maps of
87:43 

87:43 probability that a cover is found in a
87:44 

87:44 specific location
87:46 

87:46 instead of regression or classification?
87:49 

87:49 Uh and to get a map that goes from zero
87:50 

87:50 to one, where one is a high probability.
87:56 

87:56 Yeah, so the random forest from the
87:58 

87:58 scikit-learn uh module provides the
88:00 

88:00 predict proba option, which is going to
88:03 

88:03 output the probabilities for that
88:04 

88:04 specific feature or pixel that you're
88:06 

88:06 going to be classifying on. And it's
88:07 

88:07 going to be from zero to one.
88:09 

88:09 So, if you use that one
88:10 

88:10 to um know which probabilities you're
88:13 

88:13 going to have for each one of pixels.
88:14 

88:14 And to of the geographical area is just
88:16 

88:16 going to depend on the resolution of
88:17 

88:17 your data.
88:18 

88:18 And the features um, that you're using
88:20 

88:20 for for training and doing the
88:21 

88:21 inference.
88:24 

88:24 Great.
88:26 

88:26 Thank you. Question 11.
88:28 

88:28 On the assignment um, when running
88:31 

88:31 or assignment one in Google Colab, uh,
88:33 

88:33 when running the third cell, getting an
88:36 

88:36 error session crash for unknown reason.
88:38 

88:38 Um, I'm still trying to identify what
88:40 

88:40 caused the crash. Uh, is there a good
88:42 

88:42 place to look to help with this?
88:45 

88:45 Hey, so the first one is to kind of
88:48 

88:48 follow the instructions that are above
88:49 

88:49 each one of these cells.
88:51 

88:51 Um, cuz some of these cells are going to
88:52 

88:52 restart the kernel just to install some
88:55 

88:55 of those GPU drivers.
88:56 

88:56 So, you would probably need to just run
88:58 

88:58 these cells one by one, allow the kernel
88:60 

89:00 to restart, and then the drivers and
89:03 

89:03 dependencies are going to be installed
89:04 

89:04 for the um,
89:05 

89:05 GPU job.
89:07 

89:07 The other option is you can just
89:08 

89:08 download the the notebook if you have
89:09 

89:09 like a local um, system that you want
89:11 

89:11 um, to run with GPUs, and just run it
89:14 

89:14 locally.
89:18 

89:18 Great.
89:22 

89:22 Question 12. Can this technique help to
89:23 

89:23 predict areas that will have floods and
89:26 

89:26 those that are likely to experience
89:27 

89:27 drought conditions now and in the
89:28 

89:28 future? Is this capable of such things?
89:32 

89:32 Yeah, that's that's me again. Um, hold
89:35 

89:35 on, I'm scrolling back up to my answer.
89:39 

89:39 Uh,
89:40 

89:40 so yeah, what you could do is use this
89:42 

89:42 technique to generate a time series of
89:44 

89:44 maps uh, that could be analyzed to
89:46 

89:46 determine whether the the current
89:48 

89:48 conditions are a departure from the
89:49 

89:49 normal, you know, whatever normal is for
89:52 

89:52 that particular area.
89:53 

89:53 And that'll give you some clues as to
89:55 

89:55 the onset of drought or flood. Uh, but
89:58 

89:58 to be sure, you would really want um,
90:01 

90:01 you would really want to combine this
90:03 

90:03 uh, your output maps with other
90:05 

90:05 information
90:06 

90:06 from the area like precipitation,
90:09 

90:09 you know, possibly soil moisture
90:12 

90:12 moisture and other things too, if you
90:14 

90:14 really wanted to get into the idea of,
90:17 

90:17 you know, susceptibility for drought or
90:19 

90:19 or flood.
90:21 

90:21 Um
90:22 

90:22 and that would help you build confidence
90:24 

90:24 with your with your uh total prediction.
90:27 

90:27 Great, and I can see this being
90:29 

90:29 very useful for things like that and why
90:32 

90:32 uh predicting areas that might flood
90:35 

90:35 would be very important uh for a number
90:37 

90:37 of reasons and uh it's nice to know that
90:40 

90:40 uh maybe this technique can can help
90:41 

90:41 with that. I think maybe uh
90:43 

90:43 digital elevation model data sets could
90:45 

90:45 also be used to be combined with things
90:47 

90:47 like that with precipitation.
90:50 

90:50 Yep, exactly.
90:53 

90:53 Question three, I may have missed it,
90:54 

90:54 but is it possible to use the Optuna
90:56 

90:56 library for XGBoost tuning? Is there an
90:59 

90:59 example of XGBoost for regression-based
91:01 

91:01 model construction and tuning available?
91:05 

91:05 Yeah, uh it's a great question. There uh
91:08 

91:08 it's certainly possible to use Optuna
91:10 

91:10 with XGBoost and XGBoost is actually a
91:13 

91:13 model that can be uh
91:16 

91:16 uh hyperparameter tuning can greatly
91:18 

91:18 affect model performance for XGBoost, so
91:21 

91:21 it's it's really important to do it.
91:23 

91:23 I've put some examples uh of from other
91:27 

91:27 sources. We don't have uh example with
91:29 

91:29 regression and and XGBoost
91:30 

91:30 hyperparameter tuning, but those should
91:32 

91:32 give you a good idea of how to do it.
91:35 

91:35 Thank you. I placed those into the chat.
91:38 

91:38 14, is it possible to employ SHAP to
91:41 

91:41 eliminate some features that impact
91:43 

91:43 predictions negatively?
91:46 

91:46 That's me again. Um it's certainly
91:49 

91:49 possible,
91:50 

91:50 but it's not necessarily recommended.
91:53 

91:53 There's a couple of reasons. One is that
91:56 

91:56 looking at those individual explanations
91:59 

91:59 doesn't give us an accurate
92:00 

92:00 representation of how uh important a
92:03 

92:03 feature is to the overall model
92:05 

92:05 performance,
92:06 

92:06 while, you know, you're looking at a few
92:08 

92:08 local explainable predictions, and it
92:10 

92:10 shows that, you know, maybe NDVI is
92:13 

92:13 having a negative effect on the
92:15 

92:15 prediction. That's only the case for
92:16 

92:16 those. It may not be the case for the
92:18 

92:18 entire uh prediction space.
92:21 

92:21 Um
92:23 

92:23 Another reason is that you can have
92:24 

92:24 correlated features, of course. Um SHAP
92:27 

92:27 considers each feature in isolation,
92:29 

92:29 um without taking into account the
92:31 

92:31 correlations between those features. And
92:33 

92:33 it's it's certainly possible that a
92:35 

92:35 feature might have a low SHAP value and
92:37 

92:37 be unimportant or um
92:40 

92:40 negatively affect the the
92:43 

92:43 the predictions according to the local
92:45 

92:45 explanations, but it
92:47 

92:47 um you know, it could be correlated with
92:49 

92:49 other features.
92:52 

92:52 Great. Thank you for that guidance.
92:55 

92:55 Question 15.
92:57 

92:57 For the explainability part, those SHAP
92:59 

92:59 results may be used to eliminate many
93:00 

93:00 NDVI
93:02 

93:02 uh can the SHAP results be used to
93:04 

93:04 eliminate NDVI as a feature for the
93:05 

93:05 model?
93:07 

93:07 Oh, kind of a
93:08 

93:08 follow-on.
93:09 

93:09 So, yeah, kind of a follow-on for the
93:11 

93:11 above one. It's it's generally not
93:13 

93:13 recommended. Um I just like to say,
93:15 

93:15 remember in this case, for the specific
93:17 

93:17 example we were looking at, we're
93:18 

93:18 looking at uh
93:20 

93:20 examples where the NDVI is anomalous in
93:22 

93:22 a sense. Um
93:23 

93:23 And it it may show that the NDVI has a
93:26 

93:26 negative impact due to us looking at
93:28 

93:28 these weird sort of cases, but it's not
93:31 

93:31 necessarily indicative of of overall
93:33 

93:33 impact.
93:37 

93:37 Thank you.
93:40 

93:40 Question 16. With SHAP local
93:42 

93:42 explainability, where
93:44 

93:44 it was showing the influence of all the
93:45 

93:45 variables, was it looking at individual
93:47 

93:47 pixels?
93:49 

93:49 Yep, it was. Uh for those local
93:51 

93:51 explanations, it was looking at just
93:53 

93:53 single uh single pixels, a single row of
93:55 

93:55 data.
93:57 

93:57 Great. Thank you very much.
93:59 

93:59 Hopefully that clears it up.
94:03 

94:03 Okay, question 17.
94:05 

94:05 NDVI
94:07 

94:07 values greater than 1,000
94:09 

94:09 due to atmospheric correction. Is it
94:12 

94:12 possible that the high NDVI values
94:13 

94:13 represent some vegetation within the
94:15 

94:15 areas classified as water?
94:19 

94:19 Right, that one that one's mine. So, so
94:21 

94:21 NDVI greater than 1 can happen if both
94:24 

94:24 the red and the NIR values are very,
94:26 

94:26 very low.
94:28 

94:28 Um
94:29 

94:29 So, imagine a red value that's say three
94:32 

94:32 and an NIR value that's like eight.
94:35 

94:35 That's going to result in a very high
94:36 

94:36 NDVI value just because of the math.
94:39 

94:39 So,
94:40 

94:40 you know, this can result in anomalous
94:43 

94:43 calculations of of NDVI.
94:45 

94:45 Um and this can happen whether you're
94:47 

94:47 using a top of atmosphere data set or a
94:49 

94:49 surface reflectance.
94:51 

94:51 Um
94:52 

94:52 and you know, the values don't happen
94:54 

94:54 all that frequently.
94:55 

94:55 Uh but they do need to be captured in
94:57 

94:57 your algorithm to avoid you know,
94:59 

94:59 unusual results
95:01 

95:01 in your output maps.
95:05 

95:05 Thank you, Mark.
95:07 

95:07 And I know that we're running over, so
95:08 

95:08 we're just going to address this last
95:10 

95:10 question 18 here.
95:12 

95:12 Um and we'll do our best to get to the
95:15 

95:15 rest and get this posted. But in the
95:17 

95:17 meantime, question 18.
95:19 

95:19 In the example of model tuning, the
95:21 

95:21 range or
95:22 

95:22 precisions generated by different hyper
95:24 

95:24 parameterizations was very small. It
95:26 

95:26 didn't seem to be making a very big
95:27 

95:27 difference to the precision.
95:29 

95:29 In your experience,
95:31 

95:31 maybe with more complex classifications,
95:32 

95:32 how much difference in model performance
95:34 

95:34 can we expect by tuning parameters?
95:39 

95:39 Yeah. Um
95:40 

95:40 so, influence of hyper parameters can
95:43 

95:43 kind of be attributed to both kind of
95:45 

95:45 the data set that you're working with
95:46 

95:46 and the models that you're using. In the
95:48 

95:48 case that we're showing, we have we have
95:50 

95:50 small amounts of data and the and the
95:52 

95:52 the classification task is is relatively
95:55 

95:55 simple according to the models. It's
95:56 

95:56 it's able to pick up on a relatively
95:58 

95:58 accurate decision boundary for this
96:00 

96:00 water not water problem. So, changing up
96:03 

96:03 the hyper parameters a lot doesn't
96:04 

96:04 really seem to affect the performance.
96:07 

96:07 It can It can of course improve it
96:09 

96:09 marginally.
96:10 

96:10 Um but for more complicated problems, uh
96:14 

96:14 hyper parameters can definitely have a
96:15 

96:15 greater impact on the model and opening
96:17 

96:17 that range of hyper parameters that
96:19 

96:19 you're working with um they can control
96:21 

96:21 like stuff like model complexity and the
96:23 

96:23 regularization of those models and that
96:25 

96:25 all helps you kind of adapt uh the model
96:28 

96:28 to the uh complexity of your problem.
96:31 

96:31 Stuff like um models like random forests
96:33 

96:33 actually don't usually need a lot of
96:36 

96:36 tuning since they work pretty well out
96:37 

96:37 of the box and they have a small amount
96:39 

96:39 of hyper parameters that that don't
96:42 

96:42 necessarily change the performance that
96:44 

96:44 much. Of course, some do. I'll put that
96:46 

96:46 caveat in there. Um other models such as
96:48 

96:48 XGBoost are are greatly affected by
96:51 

96:51 hyper parameters. Um that you can really
96:54 

96:54 mess with it and that that's a case
96:56 

96:56 where you can really tune up your hyper
96:59 

96:59 parameters and get much different
97:00 

97:00 results.
97:02 

97:02 Good or bad.
97:05 

97:05 Thank you.
97:07 

97:07 So, that brings us to the end here today
97:10 

97:10 of the series and I know Jordan, you had
97:12 

97:12 a great summary
97:14 

97:14 great concluding remarks.
97:16 

97:16 Uh but I just want to give the others
97:19 

97:19 trainers an opportunity to say a little
97:21 

97:21 something to the audience here
97:23 

97:23 if you choose.
97:36 

97:36 And if not, that's okay. We thank
97:38 

97:38 everybody for attending these these last
97:41 

97:41 3 weeks. All the recordings are
97:43 

97:43 available on the training web page uh
97:45 

97:45 for you to review and go through at your
97:46 

97:46 own pace.
97:47 

97:47 Um
97:49 

97:49 Remember again, the homework is due on
97:50 

97:50 the 25th, and if you attended all the
97:51 

97:51 trainings and submit the homework, you
97:53 

97:53 can receive a certificate of completion
97:55 

97:55 uh within about 3 months. Uh we had a
97:58 

97:58 lot of This was a very popular topic,
98:00 

98:00 and given the popularity of this topic
98:03 

98:03 and the
98:04 

98:04 the participation that we saw, um I
98:06 

98:06 don't know if you all know, but you're
98:08 

98:08 one of over 3,000
98:11 

98:11 individuals that took this training over
98:13 

98:13 the last
98:14 

98:14 3 weeks from around the globe. So, um I
98:18 

98:18 do believe that we're going to have more
98:19 

98:19 machine learning incorporated into
98:21 

98:21 different Earth app
98:23 

98:23 Earth observation application trainings
98:25 

98:25 that ARSET puts out in the future. So, I
98:28 

98:28 hope you enjoyed this,
98:29 

98:29 and please reach out to myself
98:32 

98:32 uh if you have any questions, and thank
98:35 

98:35 you very much, and I hope you have a
98:36 

98:36 great rest of your week.