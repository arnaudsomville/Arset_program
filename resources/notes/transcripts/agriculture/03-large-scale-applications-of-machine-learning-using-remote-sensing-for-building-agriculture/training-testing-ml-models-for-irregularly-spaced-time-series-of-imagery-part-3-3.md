# Training & Testing ML Models for Irregularly-Spaced Time Series of Imagery, Part 3/3

`https://www.youtube.com/watch?v=vpHREZBTuF8` · id 147 · 1:29:25 · module 19 — Large Scale Applications of Machine Learning using Remote Sensing for Building Agriculture Solutions

[00:01] welcome back to the rset training large scale applications of machine learning using remote sensing for building agriculture Solutions my name is sea
[00:09] McCartney and I'm an rset trainer at NASA's Goddard space flight center I want to welcome you all to the third and
[00:14] final part of this webinar series The Following slides provide an overview of the three-part webinar series The motivations for hosting this
[00:24] training are that timely and accurate inseason crop maps at local to Regional scales is crucial for agricultural
[00:30] decision-making and management irregularly spaced time series are common with Optical satellite images training robust models on remote sensing
[00:38] data often requires very large data but processing and training is complex the cropland data layer provided by the
[00:45] United States Department of agriculture's National agricultural statistics service only gives estimates of the types of crops released to the
[00:52] public a few months after the end of the growing season and not their sequence or timing by the end of this training
[01:00] series participants will be able to use recommended techniques to download and process remote sensing data from Sentinel 2 and the cropin data layer at
[01:08] large scale with Cloud tools produce interactive plots of maps tables time series for investigation and verification of data and models filter
[01:18] data from both the measured and Target domains to serve modeling objectives based on quality factors land classification area of Interest overlap
[01:27] and geographical location build training pipelines in tensorflow to train machine learning algorithms on large scale remote sensing geospatial data sets for
[01:36] agricultural monitoring and utilize random sampling techniques to build robustness into a predictive algorithm while avoiding information leakage
[01:44] across training validation and testing splits the prerequisites for the three-part training are a general understanding of Python Programming and
[01:52] data bricks from Parts one and two access to the associated data from Parts one and two and to sign up for an access
[01:59] data bricks Community Edition this slide shows the training outline for each part of the webinar series all materials code and recordings
[02:09] from each session can be accessed from the training web page homework opens today March 19th and will be due on
[02:15] April 1 you can access the homework from the training page a c certificate of completion will be awarded to those who
[02:22] attend all live sessions and complete the homework assignment before the given due due date please put your questions in the
[02:29] question box and we will answer them at the end of the webinar feel free to enter your questions as we go we will
[02:35] try to get to all the questions during the question and answer session after the presentations and demonstrations
[02:40] have concluded the remainder of the questions will be answered in the Q&A document which will be posted to the
[02:46] training website by the end of next week it is now my pleasure to reintroduce Our Guest instructors for
[02:53] today's webinar Dr John just and Eric senson Dr just is a principal data scientist at John Deere and an affiliate
[03:00] assistant professor at Iowa State University in the Agricultural and biosystems engineering department Mr Sorenson is a senior data scientist at
[03:08] John Deere where he utilizes large-scale remote sensing data and machine learning to unlock insights and efficiencies for
[03:14] agricultural producers John and Eric over to you all right thanks John I'm John I'm one of your trainers
[03:26] here uh I'm a principal data scientist at John Deere I'm also an faculty at Iowa State University and with me is
[03:34] Eric Eric can you introduce yourself hi all um I'll be going over the uh code part of this session today my name is
[03:41] Eric soron I'm a senior data scientist at at John Deere and Welcome to our uh third part
[03:50] in this training series we're going over in this one uh the training and testing of machine learning models for the
[03:57] irregularly spaced time series of imagery um again this is the third part of our series on large scale
[04:04] applications of machine learning using remote remote sensing our objectives in this part is that at the end or by the end
[04:12] participants will be able to use Python and data Rich Community or uh really any other python environment to set up and
[04:18] train a 1D convolutional neural network and that model is intended to learn to detect crop type from a Time series of
[04:26] imagery uh that imagery is this is all built on on the previous sessions the previous two parts where we learned how
[04:34] to process and and really get that data and then uh develop a data loader that will feed the model training process um
[04:42] we're also going to learn how to monitor monitor the model training process uh and this is important for diagnosis uh
[04:50] also for model selection hyperparameter adjustments and then finally we're going to visualize the model output in various
[04:55] ways that allow us to really validate the performance of the model so we have uh just a few slides here um
[05:05] pretty sparse but we're going to focus in on a couple of the tensorflow modules that are helpful here one of them is
[05:10] Caris the other one's uh tensor board so uh Caris is what helps us really build the model and and train it um it does
[05:19] the heavy lifting for us so uh just a reminder in the process so part one we built the data set as mentioned um part
[05:29] two we built the data loader uh that's going to feed the model training and then this part we're focused on trading
[05:35] the model and then uh testing it with inference so Caris has a lot of modules in it it's it's um it's kind of a
[05:44] highlevel uh interface to tensor flow and within that um it's it's got while it's a highle interface it also has some
[05:54] flexibility to Define custom layers and loss functions and uh other metrics and callbacks so uh here in this slide we
[06:03] have a lot of links to some relevant uh subm modules within Caris but uh there's actually more than what's shown here
[06:10] we'll cover a couple of these we use um we use all these in some sense in this
[06:16] particular uh demo that we we uh produce here um some of the some of the most important ones are the layers where we
[06:26] actually build a model so this is an example of a very small um convolutional 1D convolutional neural network um it's
[06:35] not far off from what Eric will show in the demo but it's just a it's just a
[06:40] simple example of how you can very quickly with a few lines of code uh pretty much put together a a 1D
[06:48] convolutional Network model and um once you put that together you can you can actually uh use um just with do notation
[06:56] again you know model. summary and uh that will output um essentially the architecture of your model and you can
[07:04] see how many parameters you're going to need to train with that model and um kind of make sure that it's it's it's
[07:09] coming together with the right sizes that you expect um this this helps you also uh kind of limit um in case you you
[07:19] didn't expect there to be an enormous number of parameters for one particular layer or part of your model you can kind
[07:26] of identify you know if there's any any issues with your model so and then also you can see if if somehow the the shape
[07:33] of Any Given layer doesn't match what you would expect I mean Caris will made some assumptions for you so you you kind
[07:39] of usually want to check this just to be sure uh everything works out the way you expect from input to
[07:50] Output so uh another big part of the Caris module and really the model training process is losses and
[07:56] optimizers um in mathematical terms the loss function the model and the data determine the the structure of your
[08:02] optimization manifold so in the in the example to the right here we have a little GIF where we're kind of showing
[08:08] the optimization process over a surface um in this case the global minimum the one you'd want to obtain is this deeper
[08:16] hole right here and uh you know when you start the optimization process you're somewhere outside of that and you're
[08:21] trying to reach that location and so uh this in this particular example the marbles represent different Optimizer
[08:28] options and kind of how fast they might converge and where they might converge to you you would want to avoid a what's
[08:35] called a local uh optimization point and and try to achieve the the more Global optimization point in in practice this
[08:43] is far more complicated for most uh models and data and loss functions but uh this does serve as a as a great
[08:51] visual of how the process works and so um for this demo the loss function we use is a probabilistic multiclass
[08:58] classification loss that's because we have uh like six as we as we shared in the the last training session we have
[09:05] six different categories that we're trying to predict um so that that in in this case we use what's called
[09:13] categorical cross entropy loss and then our Optimizer we use as atom it's it's a very common uh optimization uh routine
[09:22] so um these are all pretty standard and they work really well in teras um so the training process is
[09:30] actually quite easy uh in Caris once you have your model defined and um you know you know what loss function you're going
[09:36] to use uh what Optimizer you're going to use and then you kind of know what metrics you want to monitor you can just
[09:42] uh really slap it all together uh with a few different uh calls so here we've got again some examples of that so assuming
[09:50] we defined our model um we then Define a few callbacks so those callbacks are things like early stopping and uh in
[09:59] this case also tensor board where we what we use to monitor the the training process early stopping is a way to
[10:05] prevent overfitting and we talked a little bit about that in part two what that looks like so we we use our
[10:10] validation data set to do that um we also compile the model that's where we specify the the loss the optimizer and
[10:18] the metrics so we kind of put it all together and then we just run the training Loop by by calling model.fit
[10:24] and then we specify the data set and a few other parameters here um you know that includes our our call box and
[10:32] validation data set and then ultimately you know you can choose if you want to if you want to see a lot of output from
[10:38] that process in the terminal or not um you know our primary way of monitoring this will be though the the tensor board
[10:44] uh visuals so uh tensor board is also something we want to cover real quickly it's it's a
[10:51] really powerful tool um it's it's part of tensor flow and it's used primarily for uh providing the the measurements
[11:00] and visualizations that we want to uh monitor during the the the machine learning workflow or training process uh
[11:08] it's it's actually quite a unique Library you know there's competing uh ml tools like pytorch um which you know can
[11:15] be substituted for tensor flow but uh tensor board itself is is unique enough that pytorch still uses tensor board too
[11:23] for monitoring uh so this is a this is a very useful module to know um regardless of what you like to use for your uh
[11:30] model training framework um some features I I I kind of listed here you can track and view metrics such as loss
[11:37] and accuracy um you can view the model graph if that's something you want to see uh you can look at histograms of
[11:44] weights and biases and other things as they change over time so you get these time series plots of histograms which
[11:50] are which can be useful or interesting uh to detect some some issues or unexpected occurrences um you can do
[11:58] very fancy things like like projecting embeddings to lower dimensional spaces we're not going to cover that here but
[12:03] uh just note that you know these are keywords you could Google and find some examples of it's quite interesting
[12:09] useful for advanced modeling um and then we can uh one one really useful thing is you can have some very custom plots that
[12:17] you make in the background perhaps with M matap plot lib and you can view those uh during the training process as they
[12:23] change um and then another really useful feature we don't use here but I suggest for people that are new to this that
[12:30] want to try it out um uh the tensorflow profiling uh tool is quite useful for learning how where bottlenecks exist in
[12:39] the the model loading and training uh process so it doesn't work very well in data Bridge Community but it's something
[12:46] that if you were to set up on your computer and play around with like a a local laptop or something um it it's a
[12:53] very useful tool for learning um so these are some examples of what what some of the views in tensor
[13:01] board could look like um the the left here is the most standard types of views where we're viewing the metrics so we've
[13:07] got things like accuracy we've got the um we can monitor the loss function over time and uh this is this is your primary
[13:15] Diagnostics tool in fact once you've trained lots of models and you understand how the the the the curves
[13:21] look and should look um this is a this is a very rapid way to diagnose if something's not uh training properly or
[13:29] you should you should be changing something um this is also a quick way to compare models because it will actually
[13:35] um over time if you train more and more models that those will those will all show up here and you'll see the
[13:40] difference between the models so it's again it's a very quick way to see if what you're doing is headed in the right
[13:45] direction um another thing that we can uh observe I mentioned you can do some very Custom Image plots um in this case
[13:54] uh we have a confusion Matrix that's being viewed and and so this is generated externally and then you can
[13:59] kind of bring it into tensor board and view these uh these custom plots and they can again be very useful for things
[14:05] that are um maybe a little bit more custom I mentioned the the tensor board profiler and I I kind of note it here
[14:14] again so you can kind of see what it looks like but it gives you once you run
[14:18] it it gives you recommendations on where your bottlenecks are in the process so for instance if you have a a long uh
[14:25] wait time for data to actually arrive so that your your your data loader can work with it so there's like a a network um
[14:33] delay of some kind you can identify that here or if your so so if your network limited or your compute limited or your
[14:40] memory Limited in some way um you can identify those types of bottlenecks or problems here with the profiler and you
[14:48] kind of learn over time um you get an intuition for uh how to optimize a a training process you know end to end so
[14:57] again this can this can be really useful especially when you're starting out and trying to learn uh about how to optimize
[15:03] a training process once you have a good feel for this um you know what to look for in the future too so you can
[15:09] optimize your process all right so on to the demo um just a few notes before we jump into the
[15:17] demo uh again data Brit this is just an overview of data brid Community if you need to sign up um there's a link here
[15:26] uh few notes about it we've talked about this in part one I believe but it's Jupiter notebook sty coding uh the nice
[15:33] part about data BR Community is they allow up to 10 gigabytes persistent storage so you know once the instance
[15:38] shuts down you still can keep your storage uh intact and so when you can start up a new instance later come back
[15:46] and work with the same data so that's that's a very nice feature about data R Community um and it really allows you to
[15:53] store a lot of different types of files uh and and we we talked more about that in the work space uh about the workspace
[16:00] in the part one and um you'll see it in some of the demos as well as we're we're
[16:05] working with the data um the instance types have two you don't get to change any of this but they have two CPUs 15
[16:11] gbes RAM and 130 gabes local storage um and then you can work with py spark right out of the box uh if anything that
[16:19] you store in the local instance so on in in the 130 gigabytes of local storage on the cluster that's lost when it's shut
[16:25] down and uh generally speaking The Notebook will shut down down uh after about 60 Minutes of nonuse so as long as
[16:33] you're interacting with a notebook you shouldn't have any problems though um for this particular demo a few notes uh
[16:39] that we'll have the available scripts or we'll have the scripts and and um and the data available in the in the
[16:47] training uh folder and on the website um so you know all the training data all the scripts you'll need are are out
[16:54] there on the website um the uh we do want to make a note that the and Eric
[17:00] we'll talk more about this but the the model and the training process they we've not exhaustively tuned these uh
[17:06] with Hyper parameter searches so that's something for uh the participants to be able to play around with um trying some
[17:13] different models trying some different learning rates on the optimizer um different perhaps different splits on the data whatever whatever uh you'd like
[17:20] to try out and uh see if you can get better better scores on the model um so
[17:26] that's that's kind of a fun thing you can you can do it's pretty easy to do with Caris uh and then some notes on if
[17:32] you need to download things it's a it it can be a little bit um tricky you just
[17:36] need to go to a specific uh path in the web browser to download then so again that's just here for reference
[17:45] so all right and with that we'll head on to the demo with Eric thanks all right thanks John um I'll be
[17:55] covering the demo portion of part three um within data Community Edition um so again some some friendly reminders here
[18:05] um so this is a the part three notebook that once you create an account with datab bricks Community Edition following
[18:11] the instructions on the training website um this python file will be made available to you um you can upload it by
[18:18] going to your workspace in datab bricks and then uploading uh using the import if you go into your files import and
[18:24] then you can upload that python file um as a notebook here and then you go into it and run the code run the code along
[18:31] uh with me here um also this is an extension of kind of part two we'll use a lot of the
[18:39] same code um to load in the data from part two um and again similarly to part two we ran this with the datab bricks
[18:48] runtime 13.3 LTS version which you can specify when you go to create your cluster if you create a new resource uh
[18:57] you can specify that run time here uh using the 13.3 LTS when you create your cluster I mentioned before this is just
[19:08] an extension of part two um and so actually the first few commands that will run in this notebook are the same
[19:14] um as part two where we're just loading in the data including the training data um installing our necessary packages um
[19:20] but we do add a few packages uh to part three um including the the contextually geopandas and image I
[19:30] packages um we install them with Pip in the First Command and then load them in here here um the contextually and geopandas
[19:40] packages we'll just use for uh for plotting our model results um geospatially we're also going to create
[19:46] some time series gifts of the results using image IO and then SK learns already actually installed um on the
[19:52] cluster uh and dbr 13.3 LTS and so we'll just import this as well sklearn will use it for quickly generating some model
[19:59] metrics like accuracy we'll also validate we're still using the same penslow version 2.15 along with tensorflow IO
[20:12] 0.36 um and again this is the same code that we modified in in part two um again
[20:17] we're going to be loading in our data files which are um zip files um here which are also available um in the
[20:24] training documentation uh that you can download for yourselves to upload uh again a reminder to upload these these
[20:30] data files you can go into your data catalog here um go into the dbfs datab bricks file store um I saved the data
[20:40] into this tables folder and you can go and select the uh upload button and then you can drag and drop the zip files up
[20:48] here to upload them into the datab bricks file store once they're uploaded into datab bricks file store you can do a uh you
[20:56] can do this command the fs um and to list all the data in the file store uh under the tables format to
[21:04] confirm that your uh ZIP file the data that files were um properly loaded into the databooks file
[21:11] store similarly to part two we're going to copy the data from the file Store to our local disk or the local driver node
[21:18] that is currently running this notebook and then unzip the contents to um get to our base parket files for part three
[21:27] we're primarily concerned about just the uh test data set we're not going to be dealing with any of the the train uh or
[21:33] Val um once we validate our model but when we train the model in this part will'll be using the train Val uh data
[21:40] set uh that's unzipped here um again we can validate um that the data was loaded in properly using
[21:48] some some visualizations um and then validate that we have actual data files that we'll be loading in for our train and validation
[21:56] data loaders that we defined in part two uh the same project variables are defined with 120 days in series again we
[22:04] covered this in more detail in part two and we're just rerunning this code because this is necessary uh when
[22:10] training the model in this part again load all the the the data files into a tensorflow data set and
[22:17] then Define our custom labeling function our bucketing function and our parsing function uh in our filtering functions
[22:24] that we'll use to create our training and validation data sets so once this is all ran um then we can
[22:33] kind of skip I'll skip over the kind of U performance metrics that we did in part two we we went over more detail in
[22:39] part two and then we'll skip to kind of the new stuff the part three model training so once we have all of our
[22:45] validation and training data sets defined all the data is loaded in we can now go into training our model our 1D uh
[22:53] convolutional neural network model so the first thing that we'll do here is to find some of our constants um
[23:00] including the number of features that we're using which is our 12 bands of Sentinel 2 uh data the max EPO are going to run our
[23:09] model uh which is 40 in this case um this is a this was tested uh to fit
[23:16] within kind of that 60 Minute uh time frame where data br will cut you off so you should be able to run this within
[23:23] datab bricks Community Edition to create a fully trained model uh using 40 Epoch ideally if you had a more compute and
[23:30] data bricks uh kind of didn't cut you off with that 60 Minutes you could run uh train the model for a longer period
[23:35] of time which might improve its performance performance um and there's also you can kind of reset the timer if you wanted to uh by
[23:44] kind of going into a different notebook and just running any commands using the same cluster and that'll kind of reset
[23:48] that clock so you can uh within datab Community Edition train your model for for more Epoch for longer than an
[23:55] hour we're also going to Define this uh uh es patience parameter which will Define how our early stopping patients
[24:04] uh will work here we just set it to Max EPO so we're not actually going to kind
[24:08] of reset uh or stop the model early uh because 40 epox is is kind of a low
[24:14] number um and so for this kind of demo to fit within that time period uh we don't actually uh do any early stopping
[24:20] here um but this will still save the best model that was trained um during the training iterations
[24:29] then lastly we're going to Define uh the model save name here we're just going to name it model underscore and then that
[24:35] that training days in series window which is currently set to 120 days and we'll save that as a Caris
[24:44] file lastly uh or not lastly uh in continuation uh tensor board can be loaded in data bricks uh they they
[24:54] provide a built-in kind of module uh to load in tensor board and to to to activate tensor board interactivity um
[25:03] within data bricks and so to do that you have to load kind of this extension using this command to load a tensor
[25:09] board um and then you can run things you can run tensor board commands with the uh Magic parentheses parameter um to
[25:17] kind of initialize the tensor board um environment within the driver node cluster and the only thing you need to
[25:24] set is kind of where you want to store the tensor board logs and we we store them here in the uh local driver nodes
[25:33] uh temporary file system so once we do that and you will see here that'll kind of say some things
[25:42] um and then you can actually open in a new tab and we'll get into that to see
[25:46] the tensor board visualization as your models training so once that's set up then we're ready to go to actually start
[25:53] our model training um and Define how our model looks like um so first kind of need to Define our input shape uh which
[26:00] should be the batch size that we defined earlier the max images per series which is um I think 25 based which is based on
[26:08] our 120 days bucketed every 5 days um and then our number of features which is 12 um with that um we specify a model
[26:18] with very similar architecture that's just a little bit bigger um than the one shown in the slides uh with we have uh
[26:25] two backto back uh convol 1D layers that has padding uh as default set to keep it to the same size with filters set to 64
[26:37] on both and a kernel size of five with the activation of reu um the input shape is important to Define here for what the
[26:44] first uh convolutional 1D is this defi that sets the kind of shape and of expectation of what the input shape and
[26:51] the data shape looks like for the model we also what's different I think in this one is we add Dr Dropout uh this
[26:59] was not included in the slides Dropout is just a method to improve model generalization and is one of the hyper
[27:05] parameters that you can tune as by setting how much Dropout you would like to add here um here we just set it to to
[27:12] 0.5 which means it'll drop out 50% of the weights or set them to zero U before it gets s into the next
[27:20] step U then we apply Max pooling a flatten step and then two dense layers one with 50 hidden units um and then the
[27:28] last dense layer must have a size that is our number of labels uh so here we actually have seven
[27:35] labels um which are defined above and then we'll apply softmax which is uh necessary because we'll be using the
[27:43] categorical cross entropy loss function um which we Define in the next steps so that's our model architecture
[27:52] um we can actually Define kind of a view the model architecture by using the model. summary uh call uh that we showed in the summary
[28:01] which will get a useful overview of the number of parameters along with the different shapes uh at each layer in the
[28:07] model um so we can kind of take a view of this and this looks um about right we
[28:11] can also get get a useful kind of model size uh if we save this to disk if you
[28:16] know we're training large models this might be a concern but in this case uh you know 197 kilobytes will easily fit
[28:23] within our um memory uh for the data BRS runtime our data bricks Community addition next we'll need to Define some
[28:34] callbacks and the two callbacks that we use um in this training is the early stopping callback which will monitor the
[28:41] validation loss and save the model or end the model training if the validation loss does not improve for a number of
[28:49] steps defined by the es patients and then we'll Define the t board call back uh which is necessary so
[28:58] that Caris will save tensor board logs into the defined directory which needs to be the same as um this directory
[29:07] here so that we can visualize the model performance as it's training and then lastly we do a compile
[29:16] step uh which defines your loss function the optimizer that you want to use and any metrics that you want to track the
[29:22] nice thing about Caris is that you can actually they they provide some pre-built metrics uh such as categorical
[29:28] accuracy but you can add in any additional custom metrics if you would like so for example if you wanted to say
[29:35] track the models performance on one specific label its accuracy um you could do so so for example if we wanted to
[29:41] define a custom uh accuracy for just soybeans uh we could Define that here using a custom loss function and then
[29:48] add that into our metrics that we want to to track so that's one of the nice things
[29:52] about Caris is it provides um some easy uh pre-built metric that are popular just to get you going but it also allows
[30:00] you the capability of creating some custom things if you wanted to take a deeper deeper look so now that we have all the things
[30:09] defined for the model we can simply call the model.fit function to start model training using our training data set
[30:15] that we defined in part two and our validation data set um we can specify for how long we want it to train and
[30:21] then pass in the callbacks um that we want uh to give it including early stopping the callbacks that we called
[30:29] before so I've already trained uh pre kind of ran this this this code uh before uh this uh training just so we
[30:40] don't have to wait you know 50 minutes um um but this actually has finished and concluded um its training step and it's
[30:48] reached a categorical accuracy of 85% on the training set um and a got categorical accuracy of 82% on the validation set which are
[30:58] pretty solid performance um for just kind of a base model and we can actually go into tensor board by clicking that uh
[31:07] open a new tab button in data bricks which will open up kind of a console so we can view our tensor board performance
[31:13] of model training um live as the model is actually training and so we can see here um there's some some batch accuracy
[31:23] uh that we can monitor uh the batch loss the loss is as per batch as the models
[31:28] training and then we can also see um after each Epoch the results of both the train and the validation set um and and
[31:37] the the loss curves uh the the accuracy curves and as well as the loss curves um at first look this curve looks pretty
[31:45] healthy it doesn't seem to be um overfitting uh might you know if if it was training for a little bit longer uh
[31:53] it might be starting to overfit um but right now just at first glance this looks like a pretty healthy training
[32:00] curve um there are some other useful tools um within tensor boore that I'll I'll briefly share um
[32:07] including uh you can kind of see the the graph of the model if you really wanted to debug and if you're doing some custom
[32:13] things this is somewhat useful to see how Caris is actually defining your your model um but one thing that we did
[32:19] mention in the slides is that there's kind of this profile or tool um we did not uh do this within the data Community
[32:28] Edition but if you go here um they do give you some instructions on how you can set up the profile plugin um and you
[32:35] can install it using this in your own system to get it working so that tensor board will kind of enable this uh as a
[32:41] new um tab up here so you can monitor your uh training performance within tensor board and as you can see with
[32:50] this drop down there's a lot of other things as well uh other modules that tensor board um allows you to to track
[32:56] your model performance over time including kind of viewing your histograms or images if you're working with image data or audio data Text data
[33:04] and there's a lot of different modules here that tensor boort has pre-built in uh that are useful for debugging your
[33:09] model while it's training so I mentioned we already kind of pre-trained a model here um oh one
[33:21] last thing before I go there um so just to mention we kind of briefly mentioned hyper parameter tuning um in the slides
[33:28] um no hyper parameter doing was was done on this model uh that we defined here um we just kind of took some some default
[33:37] uh 1D CNN models from the Caris documentation and threw it in um into this pipeline using our data um and
[33:45] that's it so we still got pretty solid performance um but there's definitely some room for improvement here by doing
[33:53] some hyperparameter tuning by tuning the model parameters and the model architecture to maximize performance on on this training
[34:00] problem so some things that you can tune um as part of next steps uh for improving the model would be you know
[34:08] test different model sizes or architectures you number of filters or number of hidden units making the model
[34:12] bigger or smaller you could test different activation functions maybe instead of reu you could try something like uh
[34:19] tan uh or sigmoid uh optimiz optimizers and learning rates um you could play around with different um learning rates
[34:27] rates um we just went with the default atom uh default learning rate that atom Optimizer and Caris uses you could also
[34:34] try other things like um changing the Dropout or removing Dropout entirely or try other regularizers uh if the model
[34:41] looks to be overfitting things like L1 and L2 regularization can be added as part of the model training process and
[34:48] then you can also um test with different early stopping patients parameters so these are just a few of the things uh
[34:54] that would be good next steps to do if you wanted to really Max the performance of this model um and we'll leave that um
[35:01] for you to to play around with after uh you kind of set up in your own environments so again a reminder uh any
[35:11] model saved here uh if you save it on the driver node will be deleted and so you want to make sure that the model
[35:18] that you spent uh a lot of time training and in hyperparameter tuning uh lot a lot of work uh to to train it you want
[35:26] to save it so you can you can use it later and you can do that in datab
[35:29] Bricks by persisting it to the datab bricks file store um you can first save it to your local machine and then you
[35:35] can copy that file um to the datab file store and then once you do that you can
[35:41] also if you wanted to download it to your local uh you can navigate to this file uh to actually download that Caris
[35:48] file to your local system okay so now that we have a trained model we can move on to testing
[35:55] its performance and visualizing it and um seeing how it how it performed throughout the year uh so again the kind of interesting
[36:06] aspects of training a a model uh that training a model on time series of satellite imagery is that
[36:14] you have both the geospatial and time aspects uh to test your model on uh the time aspect is kind
[36:21] of the the interesting part that we're kind of focusing on this on on here because the model can perform quite
[36:28] dramatically different depending on the time of year uh that the crops are growing in um we'll get into that in a
[36:34] little bit but we want to test our model and see how it performs throughout the whole year at different parts of the
[36:40] growing season and so here we're defining um kind of some date ranges that we wanted to get Model results
[36:47] for um including kind of the beginning of the year up to 200 plus 120 days which is our our time for the bucket
[36:55] which results into um pretty close to the end of the year I think in November John mentioned in the slides
[37:04] that you know as we're we're testing this uh we want to Define another test uh data set or a test function test
[37:13] parsing function that removes Randomness um because we don't want any Randomness when we're actually you know doing inference in the real world uh we
[37:23] for example we don't want to randomly sample imagery we want to use all of the imagery that's available to us uh in our
[37:29] pipeline or time series and as we're testing we want to be able to define the time range and the
[37:36] window that we're pulling imagery for um and so those are the the biggest change here is that we are adding um
[37:44] this is the same train data set uh the parser function that we use in the training data set as before with just some minor
[37:52] adjustments so the first thing is we are setting uh so you can specify the date range that we want to look at by setting
[38:00] the start day of the time series um that is used here to grab the uh that time range instead of randomly
[38:09] sampling the time range we'll now just select the time range specified and then we're also commenting out the part of
[38:16] the code where we randomly sampled images uh because we want to use all of the imagery available that we have the
[38:23] rest of this code is the same um in until we get down to the bottom where we actually will return
[38:32] some additional parameters that'll be useful for plotting our results so like before we still have you know our X and
[38:39] Y that's normalized in the same way that it was in our training data set um but we'll also pass the
[38:46] coordinates of the time series the longitude and latitude as well as the raw cropland data layer label so that
[38:53] would just be useful for debugging and visualization visualization next we did save that that trained model uh in the datab brick file store so
[39:03] we're just going to load that in here um using the TF Caris models. load model function we're going to create that um
[39:15] test tensorflow data set like we did before and then this block of code looks a little scary a
[39:24] little complex but all this is really doing is what we want to do is get a bunch of results from our
[39:30] trained model throughout different points of the year um so things we're going to be storing as our predicted
[39:36] value the the True Value uh the longitude and latitude location of where that prediction is made or that time series is made as well
[39:44] as The Rock cropland data lay labels um and then we're going to iterate through kind of that date range that we
[39:50] specified before which has just a bunch of different start dates throughout the year load that into to our custom test
[39:59] data lower data loader that we defined before um by pass and passing in the start day as the additional
[40:07] parameter and then looping through making the predictions uh using our model to predict on the data um getting
[40:16] the arcmax we actually get the label instead of one hot encoded values uh getting the True Value and then
[40:23] appending and saving that into lists and caching the longitude latitudes and corrup this raw CDL values as
[40:30] well um so that's already run for us um the last thing we do once we have all
[40:36] those data in lists is we'll just concatenate that into a easy to work with Panda's data frame um and then once
[40:42] we have that data frame that results data frame we can compute things like the accuracy over the whole year on the
[40:48] test data set and we get a total accuracy of about 75% which is lower than our validation accuracy uh which
[40:56] got up to about 3% uh which is a little bit uh you know different not maybe something that we
[41:04] would expect so we're going to dive into the details here and and see you know why the test set accuracy is a little
[41:09] bit lower um just for this specific example um and lastly again uh another reminder to always save any of this uh
[41:18] data that you want to to use in future sessions save that to the data bricks file store so it's persisted and not
[41:24] lost once your driver node uh shuts down okay now that we have that results data frame we can go and and do some
[41:33] visualizations and dig uh really deep into how our model performed at different points of the year so first
[41:39] we're going to um read in that results table that we saved to the datab bricks file file store and then these three lines all
[41:46] they're doing is kind of creating a more human readable uh date uh for a prediction results um which just uses
[41:53] kind of that start date that we specified um adds that 120 day buck window um the test predictions were from
[42:00] the year and then from that we can create an actual uh time stamp uh when the results uh when the predictions were
[42:06] made and so this is kind of the result of that final uh results table and we got the latitude and longitude for where
[42:14] the prediction was made we get the raw crop land data layer label uh as well as the start day that the the predictions
[42:20] were made with the true label from our custom labeler and then the prediction the predicted value for uh what our
[42:28] model predicted as well as that prediction date that we just made so with that the first thing that
[42:35] we're going to show is a confusion Matrix which displays the accuracy uh of our uh algorithm across the entire year
[42:44] uh or throughout the entire year and comparing performance across different our different labels um and so this looks pretty solid
[42:54] there's some things that that jump out but how we read this is if we look at kind of how our model predicted on
[42:59] uncultivated label um we can see it predicted with 90% accuracy the uncultivated label um which is which is
[43:07] quite good but if we move on to the cultivated label uh we can see uh it predicted correctly the cultivated label
[43:14] about 12% of the time most of the time misclassifying cultivated areas as corn um so that's um something that was kind
[43:22] of expected uh we discussed this in part two that our data label representation cultivated was by far the lowest
[43:30] represented in our data set and so is kind of expected that our model would perform the worse uh on the cultivated
[43:37] label just because it doesn't have that much data u in its training pipeline uh to use to to learn what the cultivated
[43:44] pixels look like uh it's good at predicting the no crops growing with about 80% accuracy um but also it's highest misclassification
[43:55] rate is uncultivated which for our purposes it's not too bad um as uncultivated and no crops growing
[44:02] probably look pretty similar um so that's pretty good although the one biggest outlier that we see here is its uh performance
[44:11] on soybeans seems at first glance looks to be pretty bad which is uh not expected as soybeans was our as one of
[44:19] our largest represented labels in our data set um and so that's definitely suspect and we're going to want to dig
[44:26] deeper into you know is that truly only predicting soybeans 25% of the time accurately um you know what's going on
[44:33] here but we can see that most of the time for soybeans it's misclassifying it as either cotton or
[44:42] uncultivated um but then for rice corn and cotton the performance looks uh pretty steady pretty pretty solid um so
[44:48] it's able to predict rice corn and cotton throughout the growing season uh with pretty high accuracy which is the
[44:54] default 1 dcnn model that we defined before all right so the other thing that we want to would be useful to see is the
[45:02] models prediction accuracy throughout the year um what we would kind of expect is maybe at the you know be before or
[45:12] the early growing season uh the model accuracy is is not as good as maybe there's not as much data to identify the
[45:18] crops um and we can kind of see that as the model accuracy is going down as we
[45:23] kind of get into the early growth stage maybe of the crops going into to um June mid June the the model accuracy is
[45:30] actually the worst um but then as the crops mature um later in the growth stage as we get more
[45:37] images and data available to monitor the crops and make a prediction on um the model accuracy uh bumps up back to
[45:44] around uh 70 76% um and then interestingly you know very late in the season uh you know
[45:51] October uh September time range the model accuracy is actually the best which also makes sense um given that the
[45:59] model's quite good at predicting uncultivated and no crops growing and at the end of the season when the crops are
[46:04] all harvested that's going to be the most common label and so it's performances uh makes sense that the
[46:09] performance would jump in late of the season but we definitely want to kind of take a deeper dive into why the model is
[46:19] may be performing the worst at this time stamp and so we can plot this geospatially to see
[46:26] you know what's really going going on in the model's predictions um so first we're going to just take a look at the predictions on
[46:33] the worst performing date by filtering our results table um to 45 which is when the uh predictions were the
[46:40] worst we're going to convert that data frame into a Geo pandas data frame which just offers some additional
[46:46] functionality um by including the logitude and latitude as a geometry kind of metadata as part of this data frame
[46:54] which allows for easier plotting of geospatial geospatial data we're also going to Define uh the cropland data layer color scheme so that
[47:03] these colors match the same colors that you would see in the CDL uh website and these colors were extracted they
[47:12] actually provide the color values um in this Excel file and so these color values were set to match those um from
[47:18] this file and then what we're going to show here is we're actually going to create uh two plots one that plots the the true
[47:28] label from our custom labeler and one that plots our predicted values um over time and over space given the latitude
[47:36] and longitude coordinates so this is what the resulting plot looks like um for the worst performing date in our
[47:43] time series which is early in in early June or mid June we can see that as expected the
[47:50] model actually performs quite well um the predicted model the predicted uh the predictions of the model are shown on
[47:57] the right and the True Values of the labeler is shown on the left um we can see that it performs quite well on on
[48:04] corn and rice uh early on in the season uh with some misclassifications uh maybe on Rice uh
[48:12] for corn but we definitely see that it's there's a big misclassification of soybeans uh it's actually in actuality
[48:21] these red fields are cotton fields uh and it's misclassified ing these Cotton Fields as soybeans and so that could be due to
[48:31] multiple different reasons maybe the uh grow structure early on uh in the season for you know when the when the plants
[48:39] not mature and very young they might look very similar between cotton and soybeans from satellite imagery it could
[48:46] be also that just model just needs to train a little bit longer to make this distinction um better um and you know
[48:52] perhaps with better hyper parameter tuning the model would be able to perform better uh earlier on in the for
[48:57] sway sway beans it's also worth noting that um the black pixels to know kind of where there's no crops are growing um as our
[49:07] that's kind of our special label uh that we defined if there was you know crops if the crop land data layer label says
[49:14] that there's crops growing but there's no recent vegetation will label that as that there's no crops currently growing
[49:20] um in that and so there is you know a decent amount of black labeling here um which makes sense due to it being very
[49:28] early in the growing season uh so likely there's not much vegetation that exists and so that's also to be expected
[49:35] here okay so this is again the worst performing prediction date um which is somewhat to be as expected as this is
[49:41] you know predicting on young crops um but does show why our model was predicting had low prediction
[49:49] performance on soybeans as it was misclassifying as cotton very early on in the season so now let's take a look to do
[49:57] the same exact plot but we'll do the the same plot on the best performing date in the time
[50:05] series um and this is in um Mid August when the crops are are very mature uh there's a lot more data to work with so
[50:16] it's it makes sense that the model performs better on this date and we can see um it has flipped
[50:23] its predictions uh it misclassified the cotton as soybeans and is now correctly identifying most of these fields uh the
[50:31] Cotton Fields as correctly cotton um rice is still rice and corn prediction is still quite well but we can see you
[50:38] know maybe this is the end of the cor corn season and these corn fields may have been harvested um it's correctly
[50:43] identifying that you know there no crops growing um which is to be as expected but two things definitely stand out from
[50:50] the best performing plot here um there's one um there are two kind of smaller plots of lands that are labeled as
[50:57] cultivated that the model identifies as cotton um again looking at that confusion Matrix this is expected as the
[51:04] model is not very good at predicting uh cultivated areas just likely due to the low sample size it has in the training
[51:11] data set so one next step could be to add and find more data of the cultivated data in its training set so that can
[51:20] better classify these areas as cultivated um the other big thing that stands out here is that it's predicting
[51:29] soybeans up in this top right where the True Value label is predicting or is says it's uncultivated um and it looks like this
[51:37] model is pretty confident or at least this whole field is looks to be soybeans and so this is definitely an outlier um
[51:44] that we'll want to investigate we can do that that by I I did that by plotting the raw uh
[51:52] crop land data layer uh values that's not manipulated from our custom labeling function just to see what what the
[51:59] original value of that was um and this is very similar code as what was done before um but just also defining custom
[52:06] uh crop land data layer uh color scheme that matches their color scheme on their web tool uh that were pulled from that
[52:13] same Excel file and so when looking at this you know kind of upper right hand corner Farm plot um we can see that this is
[52:24] actually a double cropping of winter wheat and soy be beans and so the really neat thing is that our model is actually
[52:31] probably predicting the correct crop here um even though our labeler says it's uncultivated um it's actually likely um actually soybeans are growing
[52:41] here so one of the cool things that we can do uh with this model uh since it
[52:45] can make predictions in real time is actually delineate um between which crops are growing for the double crops
[52:52] uh double cropped label uh areas of the crop and data layer as the crop land data layer
[52:57] doesn't tell you you know when the double croppings occurred you know which one went first or which ones were
[53:04] planted at what times um our model can actually make this delineation um by correctly classifying that there's soy
[53:12] beans growing in you know late August um so it's something that that uh is unlocked by kind of this this process
[53:19] which is pretty exciting so lastly um it would be really good to get kind of a whole holistic
[53:31] view of a Time series of of our models performance over the whole growing season um and the easiest way to do that
[53:38] there's multiple ways you can do that um with different plotting functions the easiest way I found to do that is by
[53:44] creating a gif that is kind of just a slideshow of uh multiple matplot lib uh saved pgs across the growing season and
[53:54] so that's what we're doing here here this is the same plotting code as before it's just looping through and creating
[54:00] multiples based on the different um views that we've created across uh the year in time and so the only important
[54:12] difference here is that we're actually saving these figures as PNG files that we'll later in the next step compile
[54:19] into one GI but datab bricks also does display all of these figures across time um down here below of note um as we kind
[54:33] of expected you know early on in the growing season uh this is uh late April uh we'll see that there's you know
[54:40] a lot of labels that are no crops growing um which makes sense as they're um you know these these fields are very
[54:46] young and there's probably no emergence um and so it's able to predict most of these as no crops growing um and why
[54:53] it's prediction performance is actually quite well because all these labels are are pretty uniform uh but then we can see as the
[54:59] crops start to grow you know in miday uh corn and uh rice are starting to emerge and then soybeans uh this is a
[55:11] worst performing date it's starting to turn into corn correctly as as the the crops mature which is good to
[55:19] see um and then the crops are starting to be harvested or dry out showing no vegetation and it goes back into mostly
[55:28] um uh black when when all of the the the crops are either harvested or or not showing any more
[55:37] vegetation um so we can turn all those uh plots that we just created into a gif uh using that imageio Library MIM saave
[55:46] we'll pass in we'll read in all of the image pgs that we just created into a list and then write that list of images
[55:55] out into to a gif file format um using this this function we can persist that gif to the
[56:04] datab bricks file store by copying it and then you can either navigate to that file in the dbfs to download it to your
[56:13] local system or you can display that file uh directly in uh data breaks using the uh markdown um and actually I'll
[56:22] I'll reload this so that the the GIF will regenerate oh live demos reload data bricks all right so now we can actually
[56:37] see the that gif going in time uh showing our models performance throughout the growing season uh for
[56:42] different dates uh along with the raw crop land data layer label um on the left so now we can get a holistic view
[56:51] of what's going on throughout the growing season and how our model is making predictions um at in real time
[56:57] throughout throughout the year so that's it for for my demo portion again uh some some good next
[57:06] steps um for kind of iterating and improving on the model um would be to first kind of look at the hyperparameter
[57:13] tuning um and and optimize the hyper parameters to maximize model performance um on this data set um other things that
[57:19] we could go back and and change or um if we wanted to you know if our goal was to
[57:25] get really good at predicting cultivated labels we could do so by adding in more of those samples in our data set and at
[57:32] train time um and that should help improve the model's performance and predicting uh that cultivated label um
[57:39] but overall you know in summary uh we we're getting really solid results um for at least predicting corn rice uh
[57:46] soybeans and cotton throughout the growing season in real time using Sentinel 2 imagery um in a simple 1D CNN
[57:54] architecture so yep that is it for the demo um yep uh thanks for for tuning in to to the training series and I'll hand
[58:03] it back to John for the uh summary all right thank you Eric let's summarize what we've learned
[58:14] over this series in Parts one and two to recap we learned how to get the data build the data set that we used for
[58:26] all subsequent work and uh that in this case was using the cropland data layer and uh Gathering Sentinel 2 Data
[58:33] associated with that um over the year and so we ended up with uh data in the form of a Time series of imagery with
[58:42] Associated scene information dates um we learned how to put that into a binary storage format in parquet tables um and
[58:50] then we we subsequently uh built a data loader that could read in in part two those spark
[58:58] tables or those those paret tables um and then we'd manipulate that through various various Transformations um such as map Shuffle
[59:07] batch prefetch all these things to optimize the performance uh of essentially what was a a very optimized
[59:14] efficient queue using the tensorflow data data sets finally with that in part three we built a model and so the culation of all
[59:27] that work uh we tested the model we saw that it performed quite well even though it wasn't optimized at predicting
[59:36] various crop types in a specific test area over time we saw that we can actually predict crop type in real time
[59:43] um and we we also see how the the variations occur over time and space from uh different um uh maybe uh growth
[59:55] uh rates of the crop um we saw how essentially by injecting Randomness into the training process um we could create
[1:00:04] a robust model um but then we also remove that uh Randomness when we were when we were
[1:00:10] testing the data data um we also uh really ultimately um we we saw that label definition has a large
[1:00:20] large impact on Multi on Model results um in this case we we didn't have necessarily a ton of data for the
[1:00:30] cultivated prop type um and so you know when you actually design your model and and you you you train it on you know
[1:00:39] with your goals you're going to want to consider how uh the distribution of of your data is so that you know and how
[1:00:47] that will impact the the final performance of it um you know in this case uh yeah again cultiv like
[1:00:53] cultivated was the one that clearly we had a uh a poor performance in um and that was
[1:00:59] primarily due to the lack of data for that particular class um but yeah so that in the end we
[1:01:07] were able to train uh finally train a model successfully to predict crop type in real time and uh so that that uh you
[1:01:16] know that was made possible with um the various tools and methods we we showed in this training series uh thank you for
[1:01:22] joining us we hope you learned a lot and uh you know reach out if you have any
[1:01:27] questions but uh that concludes this training series uh we'll go to Sean thanks thank you John before we
[1:01:38] transition to the question and answer session I want to remind everyone there is one homework assignment accessible
[1:01:43] from the training web page answers must be submitted by Google form with a due date of April 1st to receive a
[1:01:50] certificate of completion you must attend all three live webinars and complete the homework assignment by the deadline you will receive a certificate
[1:01:57] via email approximately 2 months after the completion of the course below is the contact information for Dr John just and Eric senson along
[1:02:07] with links to the rset website and social media we hope you'll sign up on the rset list serve to receive
[1:02:12] notifications of future trainings and follow us on social media for announcements pertaining to NASA's Earth Sciences we will now transition to the
[1:02:20] question and answer portion of today's training please answer your questions in the question and answer box and we will
[1:02:26] get to them in the order they were received we will post the question and answer document to the training web page
[1:02:31] by next week hey can you hear me yeah John we can hear you loud and clear and yeah and
[1:02:43] want to thank everybody that's been submitting their questions we got some really good ones uh we still have plenty
[1:02:47] of time so if you have a a question you've been itching to ask our our our experts uh John and and uh and Eric
[1:02:54] please do submit your question uh but jumping right into it uh question number one what should we do when our Target
[1:03:01] for training and testing does not exist is there an algorithm that can do the task also if we have a series of data
[1:03:08] for a latitude longitude how can we use it as a Target data knowing that the inputs inputs data are geotiff
[1:03:15] data yeah thanks for this question um and I we did we went back and forth got a little bit of clarification on this I
[1:03:22] think uh it's a similar question that we've been asked um in other sessions as well and really this is I think this was
[1:03:28] intending to ask the question okay if we don't have if we're looking at predicting crop type in an area where
[1:03:34] you know the CDL doesn't exist which is most of the world obviously not the US um what do you do well what we've been
[1:03:40] suggesting all on here is to try and like if you got some idea of what type of crops grow in your you know in the
[1:03:46] area you're interested in you can still uh just sample the CDL for those types of crops um and you know get a wide
[1:03:54] range of areas across the us if you can uh you know from a wide range of years
[1:04:00] and um train your model just like we do here and then and then you can go and
[1:04:05] acquire data with uh you know the same type of script scripts we have you just won't have ground truth labels um but at
[1:04:14] that point you don't need them you just need to kind of go all right here's here's the area I want to predict on
[1:04:19] Acquire The Sentinel 2 Data with our with our same scripts and then run inference like Eric did here in uh part
[1:04:26] three so that's how we suggest doing it if you can if um gosh if you're if you're looking at crops that don't exist
[1:04:33] in the US it you know then it gets a little bit tricky um you know and and I
[1:04:38] guess if we were to talk about what to do there we would probably say uh you know still pre-train your model on a
[1:04:44] variety of us data and years on the CDL and then you know you you'll need some type of labels for the specific crop
[1:04:52] type in your country that you're uh or area that you're looking to predict on on and so you know you but I think
[1:04:58] you'll need a lot less labels because you've pre-trained your model and you just need to fine-tune it so uh you know
[1:05:03] hopefully that answers the the question great uh great thank you John question two how do you create the file
[1:05:12] store directory in data bricks yep so this is something that we've seen um few people have issues
[1:05:19] with um sometimes when you create a datab bricks Community account the file store isn't natively active um so we
[1:05:26] left the link here and the documentation uh where you can follow these instructions to to enable it at the
[1:05:32] datab brakes file store for your data bricks Community account okay great uh thank you Eric question three can you please provide
[1:05:43] more information about the cropland data layer yeah uh and we we actually if you want more information on the CDL in the
[1:05:52] first part of this um trading series the first uh uh training session um we had a lot more information about the CDL there
[1:06:00] in the slide deck and so you know I'd suggest go there um you know I also put
[1:06:04] a link here to the facts the FAQs which are fantastic for the Cal you know lots of information you can dive into there
[1:06:12] um and uh they they're really comprehensive it's a really a great source great thanks John question four
[1:06:20] building such a model requires remote sensing context Agronomy uh DL Theory tensor flow usage and mlops most of the
[1:06:29] time thematic scientists are needed to give hardware and software specifications to devops and ml mlops to initiate model building some pointers on
[1:06:39] how to give the spec would be appreciated I like this question I think it's uh you know it's an interesting
[1:06:46] question in terms of implementation um I think it's a it's getting outside of the science and into you know when you're
[1:06:53] dealing with like at'll you know in a little bit larger group or organization and trying to deploy models um you know
[1:07:01] how how you work within that that context uh we hesit mean I'm going to hesitate to give any advice here because
[1:07:07] it really depends on the infrastructure you're using um you know there's a lot of ways to do this uh here's my my
[1:07:16] suggestion or the way I'm going to answer this at least is that if you do Parts one and part two of this training
[1:07:25] series right um you know you've got the data you've got the data loader set up uh you you're it's really quite
[1:07:33] forgiving in terms of the type of model you use uh you know the CDL uses a um
[1:07:39] random Forest um you know we use a just a 1D small 1D convolution Network so you could kind of work with your um devops
[1:07:49] ml Ops people to find out what what they know how to do what they're comfortable with and maybe uh ready to implement and
[1:07:56] then work with them to to use that type of uh model or system to to uh you know
[1:08:02] to to deploy your your uh ultimately your end product so um I don't know that's my suggestion I guess hopefully
[1:08:09] that answers the question thanks John question five could you comment on how a trained model May perform when there is varying presence
[1:08:20] of clouds in images that are used for prediction how best should we handle the presence of clouds in
[1:08:27] es Yeah in our example here we're ignoring the heavy cloud cover or images that contain heavy cloud cover um by
[1:08:34] utilizing kind of this the scene classification layer uh to filter those out um and yeah based on our results the
[1:08:42] we believe the model can do a pretty good job of interpolating between missing data as that'll provide you know
[1:08:46] the cloud covers that are filtered out will provide gaps in the bucketed time series um so model can do a good job of
[1:08:52] interpolating the data we found um and interpolate where where we have light serious clouds that kind of uh provides
[1:08:59] some augmentation uh to the to the Earth surface all right thanks Eric question six is the training stratified so that
[1:09:09] it is equally exposed to all types and yeah I can answer this one as well um so we didn't do stratified
[1:09:17] splits um we we kind of went over our approach in part two of how we uh split
[1:09:22] the data into the train validation and test splits um we did a by by years to avoid any possibilities of of data
[1:09:28] leakages so um the train set included 20 21 in 2020 I believe um the validation 2019 and the test 2018 or I think I
[1:09:40] might have been off by one um but you get the idea um that was just to avoid
[1:09:44] any day leakage and we found when we plotted the labels across the different splits uh that the distribution of our
[1:09:51] labels was similar uh per per the years years thanks Eric uh question seven how can they monitor crops temporarily do you
[1:10:03] train models with spectral signatures yeah let me see here um okay so uh I don't know if this was answering
[1:10:16] the question um but we don't use you know we don't use any type of forar transforms or or anything to deal with
[1:10:23] um I'm not sure if that's what you're getting at at uh to deal with the time series of data what we do is you know
[1:10:29] we're essentially binning the the data into 5day increments and then uh from from there uh you know we're we're
[1:10:38] essentially using the time we're trying to you know essentially use the time series of imagery where the latest image
[1:10:45] is the date that we're predicting so you know if we have like um you know I don't
[1:10:50] know let's say we have uh 60 days worth of data as an example um you know the
[1:10:56] the the whatever the latest image is is the date we're predicting on so the most recent image and then everything else is
[1:11:02] kind of considered context similar to what you know you would you would see on like llms and stuff like that or any
[1:11:09] other time series data uh so you know that's how we're able to kind of predict the models uh in a temporal sense you
[1:11:16] know in it's it's kind of like a moving window every time you get a new image you kind of move that window forward and
[1:11:23] predict predict again uh great question eight can I use this machine learning module for agricultural drop monitoring and risk analysis of an
[1:11:38] area yeah I I think uh we've got similar questions in the past and that's we believe you can just by uh changing your
[1:11:46] target data and then following the same process so all you need to really change there is your labels I
[1:11:52] think great question nine how does the model know it is accurately predicting no crop growing is that included in the
[1:12:00] CDL training data I thought there was only one label associated with the CDL data yeah this is a good question um so
[1:12:09] you're correct that the no crop growing label is not contained in the CDL this is actually a custom label that we
[1:12:14] defined in part two that combines both uh the cropland data layer labels um and specifies that there's no
[1:12:22] crop growing if the time series of imagery uh that we get the last two images that we collect in that time
[1:12:30] series don't have any vegetation as detected from the scene classification layer then we'll label it as no crops
[1:12:36] are growing because there's no recent vegetation in the image so the way that we measure the accuracy at test time is by using our
[1:12:44] custom labeler uh to compare the model's accuracy at predicting the this no crop growing growing label great thanks Eric question 10 if
[1:12:55] we have labels in vector format uh a shape file can we customize the code and if so
[1:13:04] how uh yeah so my uh my thought on this is just um whatever your custom format is for uh your labels try to just look
[1:13:14] at the very first script in the first um demo that we had and format your data similarly to the output of our you know
[1:13:21] our CDL acquisition code um and that's in a like like a paret table and if you format that your data like that which if
[1:13:29] you got like kind of a vector format already shouldn't be too hard to manipulated into that format then you
[1:13:35] can kind of run all the rest of the scripts um without modification lightly awesome question 11 do you
[1:13:46] consider that the choice of an Optimizer different from atoms can modify the prediction results of the case
[1:13:53] case study um yep yeah absolutely any different optimizers can can affect the performance of of the ultimately trained
[1:14:01] model um so the choice of Optimizer is definitely something that you can play around with and tune as part of the
[1:14:07] hyper parameter tuning um but we chose adom because it's it's definitely a popular popular Optimizer great and question 12 kind of
[1:14:15] follows up on fine tuning uh so to fine tune a model is there a rule of thumb on
[1:14:19] how much label data is needed against the model used yeah this is a it's a great follow question um there's not
[1:14:26] really uh any I mean it's really really dependent on a lot of factors it depends on the data you trained on the model
[1:14:33] you're using um the type of thing you're trying to predict so there's really not a rule of thumb you have to gather a
[1:14:39] little data try it out see how it does so what my suggestion is here is um oftentimes when people will fine-tune
[1:14:47] they'll just you know what you're trying to do is not overfit to your fine tuning data because you usually have a very
[1:14:52] little bit of it so you might you might have a you know a validation or a test
[1:14:56] set that you're reserving while you're fine-tuning on you know part of it as well yeah you just want to make sure not
[1:15:01] to train for too many epics because you're going to overfit on your your uh fine-tuning data set so um you know
[1:15:08] that's all that's all I would say but you're going to have to test it out and kind it just play around with it and see
[1:15:12] what you get and and adjust accordingly great thank you John question 13 what extra inputs could we
[1:15:21] use to make our crop classification more accurate also so what other Advanced machine learning models could we try to
[1:15:28] get better results yeah so this is um a similar question we've got previously and uh again a really good question um I we've
[1:15:42] always said you know the easiest Next Step would be like lanat because um there's a harmonized sentinel lat data
[1:15:50] set and so uh that's the one I would go to First um you could go to things like Sentinel
[1:15:57] one it gets you know gets more and more complicated because you got you got a different a much different data source
[1:16:02] there that you got to deal with so um you know but but you could go to that as
[1:16:07] a next next step and it it would still at least be something that you know could could be formatted in a similar
[1:16:13] manner with a with you know sufficient massaging of the data so um those those would be the first things to go to if
[1:16:20] you had other information which is usually hard to get like grow stage um I'm sure it would help but yeah we just
[1:16:28] kind of assume you know that that type of information is really hard to get so we we assume it's not really a uh yeah I
[1:16:36] mean we we assume that you're generally looking for remote sensing based sources so I would start with the other
[1:16:42] satellite satellite sources thank you John question 14 on some plots you showed the loss function had a narrow minimum is it possible to
[1:16:53] go back to the specific spefic set of model parameters which achieved this minimum and maybe assess whether this
[1:16:59] was an actual narrow minimum versus some kind of computation uncertainty yeah this is a good question as well um so the way that we have the
[1:17:09] code set up this will actually save the best model uh in a local minimum or a narrow minimum in the loss function
[1:17:18] based on the the best validation loss function and this is easy to do in tensor flow us using the early stopping
[1:17:24] call back um so you just specify the early stopping call back and which which metric to track and then it will track
[1:17:32] that that metric and if it doesn't improve over you know x amount of epoch then it will save uh the best performing
[1:17:42] model based on that that metric that you're tracking so yes this is this is pretty easy to do in tensorflow and and
[1:17:48] we have this capability set up in our pipeline thank you Eric question 15 since 12 Sentinel two bands are used in
[1:17:57] the model I'm wondering if it is possible to analyze which bands are not significant for the prediction yeah I can take this one too
[1:18:09] um so what's what's popular approach for for doing this with the neural networks is you can do like a leave one out
[1:18:14] validation analysis by training multiple models each with differing combinations of band inputs um and this should reveal
[1:18:24] if if some uh bands are are not as impactful on the model then those ones will um
[1:18:30] perform better when they're left out of the model um and if they're if the bands are more useful for uh the model
[1:18:37] training purposes then those models that leave them out will perform worse in in reference to its peers so yeah the leave
[1:18:44] one out validation strategy is is useful for this right thanks Eric question 16 how accurate will our prediction be
[1:18:54] for a country like Ethiopia where one Farmland has mixed crops is there a different method we could
[1:19:03] could use so if your Farmland has mxed crops um you know I still I don't think that's
[1:19:08] a problem because we're we're predicting on a on a pixel level so you know your your limitation is really the resolution
[1:19:15] of the satellite Source you're working with um you know with that being 10 m uh uh well it it's for senal s
[1:19:25] two here we're sampling into 10 m s to make our predictions um you know if you want to uh I think uh our source here
[1:19:34] was CDL data so um let me let me kind of clarify this our source data from the
[1:19:41] CDL is 30 m squar and so like in this particular tutorial what you're seeing is 30 m squ resolution but you could get
[1:19:49] down to like once you train your model your model could be predicting at a 10 m Square resolution um there's no reason
[1:19:56] why you can't predict at a higher resolution um but it's going to be up to 10 m because that's the that's the
[1:20:02] actual you know um highest resolution of bands available from Sentinel 2 so uh you know there's no problem with Mitch
[1:20:10] crops in that sense as long as whatever you train the the the model on from the CDL kind of matches the the crop types
[1:20:18] you have in Ethiopia in the area you're looking at so I think that's that's really what it's the your limitations
[1:20:24] are so make sure you train on the right crop types and make sure that whatever you know whatever this mixed Farmland is
[1:20:30] you know whatever resolution you need is is possible with Sentinel 2 if it's not possible Sentinel 2 you'll need to find
[1:20:36] a higher resolution Source thank you John question 17 can machine learning algorithms be trained directly on satellite imagery
[1:20:47] data to generate maps without relying on a geographic information system I would say that the answer to this
[1:20:58] question is yes and this training is a prime example of that since we are not using a a system of information
[1:21:07] information geography or GIS yeah I wasn't sure if they were also referring to let's see you know use use of in this case
[1:21:21] like different format of data um roster data uh we can I mean Eric converts the data into a kind of a roster format to
[1:21:32] you know or we do at various stages to actually visualize the output um but we do just to clarify we do work with the
[1:21:41] data in tables in in tabular format because it scales a lot nicer um so you can kind of convert to uh you know more
[1:21:51] spatial format if if you if you need to at any point with the with the way we
[1:21:54] structured this data yeah great yeah it's a okay great and question 18 what does the zip data
[1:22:05] that we imported into the data bricks database refer to they are not directly created in the code in case we want to
[1:22:11] adjust the code with our labels yeah so the zip files were just uh they they are I mean the
[1:22:20] uh I think we had some probably blocked out uh cell where we did use um certain functions to create the zip files but
[1:22:29] yeah you we actually it's the same data that would be created from the scripts um some of it uh especially in the first
[1:22:36] part when we were acquiring Sentinel 2 Data it would take too long to run in data brck Community um data Bri
[1:22:43] Community would keep timing out so you have to run it many times to get all the training data so we just we just ran it
[1:22:48] the same scripts but in in a in a commercial version of data bricks where it wouldn't time out and got all the
[1:22:55] data and then zipped it up so it is all the same data um and you know Eric does
[1:23:00] have scripts to unzip it and I believe there might be a cell where it's commented out that you could zip it but
[1:23:07] um it just to clarify it is the same data that you would get from those scripts great thanks John question
[1:23:15] 19 could you share your thoughts on using a hyperspectral sensor for this analysis I understand that the current
[1:23:21] status is less frequent so even building the time series data would be challenging challenging though um depends on the source of your
[1:23:30] your data I mean if you think of hyperspectral is just being more bands than than multispectral um you know I I'm it
[1:23:40] depends on where your source is though uh when I think of hyperspectral I think of like spectrometers and a Time series
[1:23:46] of spectrometry uh data you know you have you have way more bands like um so you could still apply these same methods
[1:23:57] in some sense but now your your data source is completely different right so you're not dealing with sat you're
[1:24:03] you're not dealing with um you know satellite data you're dealing with uh more of a you know whatever whatever
[1:24:10] source of of data you're getting from like a when I think of a hyperspectral sensor uh I think of a spectrometer
[1:24:15] that's used to measure grain and you're sampling at one Herz or something like that so then you have a consistent time
[1:24:20] series and um you know that that in my opinion yeah all this applies it's actually a little bit I think it's an
[1:24:28] easier problem depending on if you have the the ground truth or not for it though so um it's getting a little bit I
[1:24:36] think it the way I understand this is getting a little bit outside of maybe what we were targeting for the training
[1:24:42] but um you know similar methods would apply uh and if you're if you're if you have a consistent sampling frequency you
[1:24:50] don't have to worry about things like cloud cover and stuff like that so um but yeah I I can't say that I'm 100%
[1:24:57] sure I'm answering this question right at least for the intention great yeah really really great question so thank you to to everybody
[1:25:12] that's been submitting uh we do have five minutes uh if there's any last lingering question out there if
[1:25:17] anybody's been itching to ask and for some reason they didn't uh please do so because your your time is quickly uh
[1:25:23] winding down I I did want to remind everybody that there will be a survey sent out to all of you within probably
[1:25:30] by the end of this week and we do encourage and we hope that you'll take the 5 to 10 minutes that it will take to
[1:25:38] to uh complete that survey we greatly value the feedback that all of you give to us after each of these tradings we go
[1:25:44] through all of the uh data points that you sent to us we try to iterate make these trainings better of higher value
[1:25:50] to each of you so uh please to the community that is interested in training such these uh please do take the time uh
[1:25:56] that it will take to to complete the survey and again uh we we greatly value that we we look forward to going through
[1:26:02] the feedback that you're going to give from this training so uh I guess John and Eric you know thank you it looks
[1:26:08] like we got through all the questions unless there's any lingering ones that do come through uh as we wrap up this
[1:26:13] incredible webinar series and thank you guys both so much for making this so impactful to all the participants uh
[1:26:19] just interacting with them I can I can say it's been incredibly positive so far uh I just wondering if you have any
[1:26:24] uh maybe concluding or or or closing comments to any of the participants yeah um so uh I was just
[1:26:33] answering one last question here in the chat but um you know we really enjoyed putting this together it was a lot of
[1:26:39] work to kind of put together the data acquisition scripts and test out models and kind of getting all working but um
[1:26:45] you know we learned this uh this how to do this at scale over several years and deal with some of these um non ideals
[1:26:53] and so we hope that you guys can kind of uh have your learning and your starting point kind of accelerated by uh taking
[1:27:00] taking this and applying it to whatever research you're doing uh reach out and let us know um if you got any cool
[1:27:06] applications um you know we always love to hear what people are doing and uh just know that you know uh as long as
[1:27:13] you I think one one thing I'll say is as long as you get part one and part two
[1:27:16] right so if you get your data and you format it correctly and you get your data loader working right um you know
[1:27:21] the model is quite forgiving and so uh you know people tend to focus on the modeling a lot but uh if you get your
[1:27:28] data right formatted right you can do it's quite forgiving so but uh yeah thanks thanks everyone for tuning in and
[1:27:35] we we appreciate the opportunity to work with the rset team yeah and I'll just uh echo echo
[1:27:41] what John said we're very excited to to see what people you know do with this uh data Pipeline and modeling process um so
[1:27:49] yeah definitely reach out if you you know have any further questions or uh if you have some really neat results um
[1:27:55] utilizing this process for your uh your own domains um and then yeah definitely thanks for every everybody's
[1:28:02] participation in the chat um this very engaging chat and uh thanks for the rset team for making this process for
[1:28:09] creating this this series so so uh streamlined and easy to do so um yeah appreciate it and thanks
[1:28:17] all well John and Eric I think the the the the big thanks definitely go to you too uh thank you guys both so much for
[1:28:23] contributing this has been been such an awesome webinar series we've thoroughly enjoyed working with you and and I
[1:28:29] really hope and just judging from the feedback that we've gotten just uh you know uh preliminarily uh it's been of
[1:28:35] high value to the community so hopefully the materials we live on on the training page uh that'll be able to be on YouTube
[1:28:41] so people will be able to access in perpetuity and so we really hope that you know this is has a big impact in the
[1:28:46] community so uh thank you both so much I I want to acknowledge the rset team uh you might not have heard their voices uh
[1:28:52] but they've been working tirelessly in the background that's Natasha Johnson Griffin Brock Levens San Hudson ooy Jonathan O'Brien and Sarah kuta so
[1:29:00] thanks to rset team for for helping to put this webinar series together and lastly we want to thank all of you that
[1:29:05] joined over these three weeks uh we know that you know you probably all have very busy schedules so thank you all for
[1:29:10] joining wherever you're joining from and we do hope to see you again at a future rset training so be well take care and
[1:29:16] we hope to see you again soon
