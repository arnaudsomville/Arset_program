# Model Tuning, Parameter Optimization, & Additional Machine Learning Algorithms, Part 3/3

`https://www.youtube.com/watch?v=M369bW8FJpQ` · id 211 · 1:38:47 · module 2 — Fundamentals of Machine Learning for Earth Science

[00:01] Welcome back to Fundamentals of Machine Learning for Earth Science. This is part three three where we will be discussing model
[00:10] tuning, tuning, parameter optimization, and additional machine learning algorithms. Once again, my name is Brock Blevins, training coordinator for the NASA
[00:21] Applied Remote Sensing Training Program, or ARSET, and I'll be your host for this training. We are at the final part of the training
[00:32] and and just to review the objectives of this training was to recognize the most common machine learning methods used for processing
[00:42] Earth science data, describe the benefits and limitations, explain how to apply basic machine learning algorithms and techniques to
[00:52] remote sensing data, use an analysis appropriate training data set to evaluate conditions and solutions for given case studies, and to
[01:00] complete basic procedures to interpret, refine, and evaluate the accuracy of the results of machine learning analysis. Just as a reminder, this is an
[01:11] introductory webinar series. Uh there aren't a lot of prerequisites necessarily coming into today, but if you uh aren't very familiar with the
[01:20] fundamentals and the concepts and terminology of remote sensing, uh we suggest you check out our resource session one of our on-demand
[01:28] Fundamentals of Remote Sensing training. Attendees will also need to access Google Drive and Google Colab to work
[01:36] with the code today. To access these resources, users must have uh an email ending in gmail.com. We'll have the recording of this
[01:46] training available within 48 hours, and so you can go through at your own pace. So, here was our journey over the last
[01:54] three weeks. We are in part three. And the homework is now available. This will be due May 19th.
[02:03] And you can find that under part three on the training web page. It is a Google form.
[02:10] form. And that'll be due May 19th. Throughout this presentation, please feel free to type your questions to the
[02:16] trainers in the question section. All the questions will being asked will be moved to a question answer document
[02:22] and we'll go through those at the end of the training. So now I'll pass this off to our
[02:29] trainer, trainer, Jordan Caraballo Vega. Thank you, Jordan. Okay. So, hello everyone. Thank you very much for being back.
[02:40] Today we're discussing part three. In this session, we're going to concentrate on model tuning, parameter optimization, and then we're going to introduce
[02:48] additional machine learning algorithms through the session. The outline of this session, first we're going to do a an overview of model
[02:59] tuning and parameter optimization. We're going to do an ex- ercise to optimize our XG model that we trained on session
[03:07] two. two. We're going to provide an overview of model explainability and interpretability. interpretability. And then we're going to provide an
[03:14] overview of additional machine learning algorithms that you can use for your own science use cases. At the end, we're going to have a
[03:22] hands-on hands-on Google Colab exercise to improve some of the water classification models we were developing on the previous sessions.
[03:31] And then we're going to have a post assignment and the Q&A. And just as a reminder, as our previous
[03:36] sessions, all of the materials are available on the GitHub repository. So, feel free to jump on to it and follow the session
[03:44] well well with this class. So, the trainer objectives of session three, we're going to recognize the most common
[03:51] optimization methods for machine learning algorithms used on for processing earth science data. We're going to describe the benefits and
[04:00] limitations of some of these machine learning algorithms optimizations for earth science analysis. And then we're going to explain how to
[04:07] apply basic explainable artificial intelligence techniques for machine learning algorithms in a meaningful manner to remote sensing data.
[04:17] Okay, so let's start with a overview of model tuning optimization. From a summary from session two, we
[04:23] trained a random forest model that would perform binary classification of water and no water pixels using some of the
[04:33] modest surface reflectance data. And we provide kind of this basic data set that we would download and train on
[04:40] and then perform predictions out of it. We also evaluated our model using our test data set and we perform inference
[04:47] both using a tabular data set, so we already had our feature set up, but then also using raster tiles. So,
[04:54] GeoTIFF files that we would pre-process and put into tabular format to feed into our random forest model.
[05:01] In general, our model was able to one, successfully identify water pixels, but we were also able to identify locations
[05:09] where the model needs improvement. And these are some of the input bands and some of the in feature importance that we were
[05:17] looking at where our surface reflectance band two was actually one of the most important features at the time of
[05:22] improving our model. Now, the training method that we used on our previous exercise was basically doing a cross-validation
[05:33] K-fold optimization. And just to reiterate on the concept is that we take our training data and we
[05:41] split it into K folds. In our case, we were doing five because of time constraint, but then you have several
[05:48] iterations of the same model where you can extract then the best model out of all of the iterations. And one of the
[05:55] things that this buys us is to have a model that can be strong enough or that can be general enough to perform good
[06:04] across across all of the training data set that we have and also the test data set. It also
[06:10] helps on the generalization side of things. Now, your first model will not always be the best. If your first model
[06:17] will not always be the most accurate, you might have false positives and false negatives on your first model, and that
[06:23] is okay. The libraries that we have been discussing through this training, they mostly focus on using some of the
[06:30] default parameters from these models. So, we need to perform additional steps to find which of these parameters are
[06:39] actually the most useful based on our use case. And most of the machine learning applications, they just provide that.
[06:46] They provide some of these basic default parameters that are useful for many of the applications that they have been
[06:53] testing on. Now, some of our Earth science data sets, they're just unique. They are different. They have different
[07:00] spectral responses. We may have a lot of noise. We may have locations where we might have haze from clouds.
[07:06] There just so many nuances and variances on our Earth science data sets that we just need to optimize to find the best
[07:14] hyper parameters to work from. And these hyper parameters, they are just set before the learning process begins and they would actually influence
[07:23] the model convergence. If you have a bad number or an incorrect number of hyper parameters set for a particular
[07:30] iteration of training, you might never reach convergence or your model might never learn the features that you bring
[07:36] into it. And just to add the random forest as an example, if our number of trees is too low, we might simply
[07:44] overfit because our model hasn't reached a way of generalizing across unseen samples or samples that are not
[07:52] representative from what you have been splitting your random forest on. Another option, and this is what we're going to be
[07:58] discussing, is how can we improve these hyperparameters without having to manually go through all of these steps?
[08:06] How can we improve this step as it's part of our development workflow without having to have any external knowledge
[08:13] beside at least knowing the basics? On the right-hand side, we have some of the actual hyperparameters from the
[08:19] random forest. This is just an example of how hyperparameters would look like in regards to a specific algorithm. In
[08:26] this case, it is an XGBoost algorithm where we have learning rate, max depth, the max number of leaf nodes,
[08:34] and then L2 regularization that we use to avoid overfitting. In the case of our random forest model,
[08:41] instead of having a learning rate and an L2 regularization, our hyperparameters might only be like the max depth, the
[08:48] max number of nodes, and then the max number of leaf nodes. Let's continue then with the model
[08:55] tuning. Most of the time, we're not optimizing our models just for those common features. We're actually trying to optimize our
[09:04] model to improve so if we can generalize across uncommon features. Most of the times on your training iteration, you're going to get
[09:12] most of the easy tasks or most of the similar tasks to be predicted properly. Now, those outliers or those regions
[09:20] that are not completely similar to your representative training data set, they might need additional help. And this is
[09:26] where model tuning and parameterization comes into play. So, by fine-tuning our model, we can then maximize our performance to get the
[09:36] highest rate of performance possible. And here we define per sport performance as kind of the highest rate possible, but there are
[09:45] many ways of measuring performance. We can see performance as let's say the most accurate model, but we can also try
[09:51] to see performance as let's say the model with less true false the model with less false positives or
[09:58] the model with less false negatives. We can define that optimization rule on our end based on our application.
[10:07] Sometimes we just want the model to be generalized enough to have a good accuracy. But sometimes we want our
[10:13] models to concentrate more on those hard sample or on those small features that might not be represented on the training
[10:20] data. data. By finally from the model tuning, this is just an experimental process. And the idea is to find those optimal
[10:30] values for those hyper-parameters to then maximize our performance. We are not going to get there on the first try
[10:36] cuz there are many ways of tuning these models. models. And on the right hand side, we just kind
[10:41] of showing how the workflow looks like. We have several testing or several experiments where we change some of the
[10:47] values from our hyper-parameters. And in this case, we're actually changing the number of layers for our neural network
[10:53] and then the number of neurons for that particular neural network including the the learning rate. By having multiple experiments of this,
[11:00] we can actually monitor how the performance of our neural network is going through and how that is affecting
[11:07] the actual performance of the model. Note that at by the end of these three iterations, the model with the highest
[11:12] accuracy was the one with five layers and 256 neurons. Not necessarily the one with the most or highest number of
[11:21] neurons, but the one with the highest number of layers. So, some of the techniques for modeling are first of all, having a drill boost
[11:32] evaluation criterion that we need to identify before starting to model or to tune our algorithm. And the idea behind
[11:41] this is that we need to make sure that we know how we want to approach our optimization. We want to know what we
[11:47] want to improve from our model performance performance related to our training data set and in this case our test data set.
[11:56] We have two methods. We have the manual model tuning and the idea of manual model tuning is that we're going to
[12:01] basically use our intuition. We're going to use our knowledge on the algorithm to improve it, to build upon it. And
[12:09] sometimes, once you kind of familiarize yourself with some of these algorithms, you know where things are wrong. You
[12:15] know that your model might be over fitting because you just have a small number of trees. And manual model tuning
[12:21] only comes by experience and by knowing the mechanics and the rules behind each one of the models.
[12:28] Now, if we do not have some of the back background knowledge, sometimes we can then proceed to use automated model
[12:35] tuning. And this model tuning, or is automated, you still need to have at least some background knowledge to know
[12:42] which parameters should you use or which experiments you should design, but you don't need to actually go and manually
[12:49] change some of these parameters by default. Another positive thing about automated model tuning is that instead of having to
[12:57] guess, you can just create a n number of tests that would just iterate above all of the experiments that you set, which
[13:05] in this case would allow you to do faster optimization of the model without having to spend n number of times in the
[13:12] iterations and just thinking about what would work. On the right hand side, we have a diagram of some of the parameter tuning
[13:21] methods or steps. First of all, we kind of start our hyperparameter tuning step and then we apply a search method, which
[13:29] in this case we have three. We have a grid method, we have a random method, and we have a Bayesian method
[13:35] for one of the hyperparameter sets. The idea is that we're going to iterate over each one of these methods by doing
[13:41] cross-validation, splitting the data into K folds like we did on our previous experiment, and then for each one of
[13:48] those K folds, we're going to then calculate the score of accuracy that we want, any average accuracy from all of
[13:54] the models, and then assign that value to the iteration that we just experimented with. Assuming we do all of the grid
[14:03] experiments or even the random search, we end up having the number of models with the best performance that we can then select from
[14:12] for further testing. Okay. So, a bit of more details just to kind of make sure that we explain this
[14:22] properly. So, on the grid search method, the user is the one that decide defines a set of values for each hyperparameter
[14:30] to form a grid. So, the user has some knowledge on what hyperparameters to choose from to then perform the
[14:37] experiments. And this can be different combinations of parameters. We can try different values. We can try different
[14:45] values based on literature or even on the actual knowledge that you might have or background about the algorithm. We
[14:51] also have the random search, and in the random search, with the algorithm would try random combinations of these
[14:57] hyperparameters to try every single possible combination. And note that this can be computing intensive because of the end number of experiments that we
[15:07] have, but you can limit the number of experiments or the range of these hyperparameters to avoid some of the
[15:14] additional computational burden. The last step that we're going to discuss here is the Bayesian search, which in this case keeps track of the
[15:22] past evolution of the soul results to inform the new experiments that you're going to be selecting or that you're
[15:28] going to be creating. So in this case we're kind of using past information from let's say previous experiment to then improve upon
[15:37] the actual score of the next experiment that we have. And this one as well is kind of computer intensive because
[15:43] you're kind of saving like saving the data from both previous and past experiment but then you're finding the
[15:50] surrogate of the hyper parameters that are going to give you the best performance in an automated way where
[15:56] you don't need to think about some of the parameters that might be running through through the optimization. And by the end what
[16:04] you have is a combination of hyper parameters that would just yield the best result based on whatever criteria
[16:09] you chose. Okay, so now let's go to our first exercise of session three. We're going to tune and optimize our random forest
[16:19] model. Okay, so similar to our previous sessions, we're going to go to our GitHub repository where we have all of
[16:29] the material for this training and we're going to look for materials for training in session number three which in this case
[16:36] is model tuning. And I click on the collab logo and then we can start rolling. In this notebook we're going to first
[16:47] familiarize ourselves with optimization techniques for machine learning. We're going to introduce some of the basics for this random forest model but this
[16:55] are applicable across the board. In this work we're going to keep using the same MNIST data set that we have
[17:01] been using across the training and then we're going to apply the workflow to kind of improve our model or at least
[17:07] prove the concept of model tuning across the board. First we import some of our libraries. We need to download some of our source
[17:15] code and install some of the dependencies that we might not have. And just to reiterate on this, you can use
[17:22] Google Colab for free, but some packages might be missing. So, you can just go ahead and install them on your session
[17:29] by having the exclamation point in front. front. Once we have that, we can just go ahead and import some of the libraries that
[17:37] we're going to be working with. Note that in this particular notebook, we're going to be using Optuna to do some of
[17:45] the parameter optimization techniques. So, once we have that, we can define our general variables. Note that we still are using the same
[17:56] feature importance um um bands that we got from the exploratory data analysis exercise. exercise. And then, we're then using some of these
[18:09] to then download our data. So, in this step, we just download some of the training data we have. And then, we
[18:15] split it into our train data set and then our test data set. We then perform the split between our
[18:25] X features, so our column features, and then our target or label, which in this case are water and not water pixels.
[18:35] This is just to make sure that we are having and uh the features that we want, that we
[18:39] don't have any extra features that we might be having. This is always a good practice to make sure that you monitor
[18:45] whatever is going into your model. And then, just again, just doing some additional exploratory data analysis to
[18:53] make sure that none of our uh values are uh out of order, that we don't find any
[19:00] metrics that we we're not looking for. And this really important because you need to know at least your data. You
[19:06] need to know the physical parameters of your data to then understand how your model is going to perform and how you
[19:12] might be able to optimize the model. Cuz in this exercise, we're actually tuning the model, but in general, once you
[19:19] reach a plateau of how much you can turn your model, you might need to then look at how your data set is built, and what
[19:26] features you might need to improve the performance of your model. In here, we're just looking at some of
[19:32] the actual metrics or outliers from our data set. We're looking at none of them are higher than 10,000, but if we
[19:40] actually go a bit lower, we can see any other outliers that might be coming through. through. Here, we're going to define
[19:50] how we're going to search for the optimization hyper parameters. The first step is to set trees only
[19:59] because we only want to tune, let's say, the number of estimators, the max depth, the max sample split, and the minimums
[20:06] of samples per leaf. And all of these parameters are really important on the performance of the random forest because
[20:13] they control the structure of the resulting trees from training. And if we wanted to train on every
[20:20] single or optimize on every single parameter from the random forest, we would need to then just include all of
[20:27] them, and computationally, it would be expensive. expensive. So, give it a try. If you select that you want to optimize on every single
[20:36] one, you can just set the parameter to false, false, and then you can just go from there.
[20:41] Once we understand which parameters we want to test, we can then proceed to define which objective function we want
[20:48] to iterate over to then see and monitor the performance of our models. We can do this manually, as well as
[20:56] using expert knowledge about the algorithm. So, for example, increasing the number of estimators, um if the model's over fitting, would probably
[21:03] improve the performance of our random forest. Now, some other algorithms like neural networks or even XGBoost algorithms, they might not be as
[21:12] sensitive as a random forest to some of these parameters. They might be more resilient in regards to being able to
[21:19] overcome some of these hyperparameter uh uh optimization optimization exercises. exercises. So, in the next cell here, we kind of
[21:28] define several number of trees, depths to to test. And then other parameters that we want to test from the
[21:35] architecture of the random forest. And note that we also define some of our metrics, which in this case are going to
[21:40] be precision, the F1 score, which again is the harmonic mean between the precision and the recall, and then the rate of the
[21:47] false positives. Note that we are setting up some of the actual hyperparameters in this section by making some that are going to be
[21:57] static, but then making some that are going to be just trial and error. For example, the number of estimators or the
[22:03] number of trees in this case. If we wanted to test all of the parameters all together, we would then
[22:09] provide a trial for all of the parameters or all of the options of the random forest model. And again,
[22:17] we're doing this basically for the random forest, but you can always choose some of these parameters from whatever architecture you're using
[22:27] to then perform the experiments and iterations on them. Once we have the parameter set that we want to test on, we can define our model
[22:37] and then fit over our training data and then perform some predictions out of it. So, let's just then start our
[22:46] hyperparameter tuning trials. We first use Optuna login just to make sure that we're going to log every
[22:52] single one of the experiments. And then we're going to create a study based on what are the parameters that we
[23:00] want to test on. And what we're going to do is that we're going to have 25 trials, and then we're
[23:06] going to have our objective function, which in this case we defined as the list of trees, max depth,
[23:18] min samples, and then the actual min min samples split split. Once that is done, we can proceed to run
[23:26] our optimization. And know how we go from trial 0 to trial 24, accounting for all of our experiments. Know how the
[23:35] performance can be on on the end of like 0.97 accuracy through 0.98 and so forth. Know how the number of estimators then
[23:45] continues to change on a graded fashion just to test a couple of those parameters across the board.
[23:53] Now, once we have done our experiments, we need to visualize the experiments. We need to understand how the model performed, and
[24:01] what are the benefits that we got from it. it. So, the metrics to use in this case is
[24:05] the F1 score. And what we're going to do is that we're going to run some of the trial scores to
[24:11] get some of the values or some of the estimates based on the number of estimators. So, the number of estimator
[24:18] being setting five because of the best performance that we got was a 0.99 of accuracy across the board.
[24:27] In addition to that, we can actually visualize some of the optimization history in regards to the objective value or the actual
[24:35] experiments that we were running. Know that we have a range between what it would be about 99.5
[24:43] for the like highest results between like 0.99 for some of the others. And this kind of taking some
[24:51] of those most performing results out of the actual bucket of them. We can also look at the hyperparameter
[24:59] importances. In this case, we only have a single parameter since we were doing the end number of estimators and only
[25:08] testing on the number of trees. In the assignment for session number three, you're going to be able to then
[25:14] test on additional hyper parameters to then check on which ones provide the most importance when doing this
[25:21] hyperparameter tuning exercise. At the end of the day, we kind of visualize the loss functions that we
[25:28] were estimating on an optimization, and we can look at what were the estimators across all of the the
[25:37] experiments that we run and the number of experiments that we actually run per objective function. Again, the same thing.
[25:47] When training with with the trees only, we can actually see what the precision is based on the number of estimate
[25:53] estimators. Know that the prediction reaches kind of a plateau when you are in the 400 number of estimators. So, by
[26:01] only having a total of 100 or even less than 100, you're doing and reaching high performance. Now, in some data sets,
[26:09] this can actually mean that you're overfilling your model, that your model is not performing at the rate good enough that it's going
[26:18] to be able to generalize across unseen samples. So, you need to make sure that you kind of understand your data and you
[26:25] test your map visually to understand how the values that you're getting from the scores match the output that you're
[26:32] you're getting on your map. Okay. So, once we know what our hyper parameters are going to look like, we
[26:40] then go ahead and use this hyperparameter trainer model, which in total would be using the number of
[26:47] estimators as 75. Using the K-fold strategy, we then go ahead and do the same K-fold training by
[26:56] iterating over a K of five and having multiple scores, so we can test the the generalization of our training data
[27:04] across all of the testing samples and the training samples. Once we have trained, we can see that we
[27:12] have a couple of iterations. We can see the accuracy per iteration. And then at the end of the day, we can
[27:20] then look at some of the average scores and so forth. Once we have trained and tested our
[27:27] model, we can then get some of the metrics that we're looking for. So, overall, we're getting an accuracy
[27:32] of 0.98. And then we can just proceed to calculate some of the previous metrics that we did before. For example, just
[27:41] testing the recall, testing some of the values that we have on the test data set. Note that once we continue to look at
[27:50] the feature importance after tuning and different from the first experiment, our surface reflectance band two continues to be of high importance, but NDVI
[28:00] actually increasingly its importance as well. well. So, this means that by tuning our our model, we actually provided the
[28:09] parameters enough to have two of these most important features to be kind of to change based on the number of trees
[28:16] we were optimizing. Okay. So, we have optimized our model. We have looked at some of the test
[28:27] scores. We can then go ahead and see our maps or visualize our map. So, for this, we're going to load the model
[28:35] that we just saved. And then we're going to load a raster data set that we can look at through the experiment. And for
[28:43] exercise of session number three, you're going to have additional rasters that you will need to look at and then see if
[28:50] the tuning of your model actually improve the performance across all of these rasters that you're going to have
[28:56] the exercise for. So, in this case, we read a raster, we again do additional feature engineering to calculate some of the indices that we
[29:04] need to complement a raster, and then we go from the array data set to a tabular format.
[29:13] Once we have the data set in tabular format, we can feed that directly into a random forest model, and then calculate
[29:20] both the classification output and then the probability output. So, at the end of the day, what we end
[29:28] up with is a single band raster that then has the output of our model once it has been optimized through the iteration
[29:37] set. set. And all of these cells are basically what we discussed in session two, but are the main way of getting some of
[29:44] those post-processing and QA pixels to be removed out of our final product, and to make sure that we clean our final
[29:52] output for better visualization and for better science. Finally, we can go and then visualize through an interactive map using volume
[30:03] the performance of our model. And we can see how we're actually in very well predicting some of the
[30:14] characteristics of like power in here and some of the other water bodies that we have around the area.
[30:21] Same with some of the water bodies that we can find in some of these other locations if we turn on and off some of
[30:28] these features. We do still have some of these false positives positives that can appear in the map, and this
[30:36] could be due to the small data set that we have been using to test across board. So,
[30:44] So, as closing thoughts, we have again downloaded MODIS data. We have performed a grid automatic parameter optimization
[30:54] using techniques for model tuning. These techniques can be used across the board in all the parameters, so they provide
[31:02] kind of the fundamentals to tune and automatically improve some of all the models. We have trained and performed inference
[31:11] using the hyper parameters that we found to be the most accurate for this particular model and data set, and then we have created
[31:18] additional interactive visualization to look at our maps. Finally, we looked at some of the model explainability aspects, and we found out
[31:27] some of the characteristics that change when we finally optimize our model with the automatic generation of hyperparameter tuning.
[31:37] Next, we're going to have Caleb explaining some of the model explainability and interpretability techniques we can use across
[31:44] the board on some of these models. Now that Jordan has um showed us how to tune a model and get a
[31:53] good model going, let's look at how we can explain some of the results and how we can make an interpretable model.
[32:02] So, model explainability and interpretability all a part of of being under the umbrella of XAI, which is
[32:10] explainable artificial intelligence. Um that's kind of kind of the idea of making models that are able to explain
[32:17] the predictions that they made. As we come to rely on these inferences given by machine learning models in
[32:24] different sectors, um it is important that these models be accurate and interpretable. These models need to be able to explain
[32:32] why they made the decision decisions that they did, and they also need to be accurate. accurate. Now, looking up to the right, we can
[32:39] kind of see a graph that shows model accuracy versus model interpretability. It's pretty difficult to get into that
[32:46] sweet spot of having a very accurate model and it being very interpretable. Decision trees and linear logistic
[32:54] uh regressions are are two examples of models that are very interpretable. We can look at their decision-making
[33:01] process and be able to understand the reasoning. Um but they're not as accurate as something that's a more
[33:07] black-box model such as uh deep learning, a neural network, or ensembles um to give a few examples. What I mean
[33:16] by black box is that we can't really tell what is going on when we give the model a prediction, and uh it can't
[33:25] explain the predictions that it made or the reason in reasoning that it used to make those predictions.
[33:34] So, accuracy may may not be enough. We want to have a machine learning model that is reliable. An unreliable
[33:41] black-box model, they're prone to making inconsistent and unpredictable decisions, decisions, and they're unable to provide any insight or explanations for these
[33:51] decisions. decisions. Model accuracy and model interpretability can sometimes be in conflict with one another. Um interpretability is where we can explain
[34:01] why a certain outcome was predicted. Um And in general, more accurate models tend to be less interpretable. This
[34:09] trade-off between accuracy and robustness arises because the most accurate models are often the most complex, complex, the black-box models, and therefore the
[34:18] most difficult to explain. Um we also want to have a robust model where inputs can be noisy. You know, we
[34:26] have a model that is trained off of uh surface reflectance data. Uh that can sometimes be noisy. There
[34:32] can be variance in that data and we still want the model to return accurate results. One One kind of big area of explainable AI is
[34:44] the post hoc explainability approach. Um post hoc is done after the model is trained. Um these approaches are methods
[34:52] that's that are used to explain the predictions made by a machine learning model after it has been trained.
[34:59] These approaches provide insights into how the model arrived at its predictions and can help improve the transparency
[35:05] and interpretability of the model. Uh Uh we'll kind of discuss some post hoc uh explainability approaches that can be
[35:14] used to explain the predictions made by a machine learning model. Um off to the right we see a
[35:19] a list of some approaches. Um some are feature relevance where um um that involves identifying the most
[35:28] important features that contribute to the output of a machine learning model after it has been trained. Uh that approach can provide insights
[35:36] into how the model arrived at its predictions and help improve the interpretability and transparency of the model.
[35:41] model. We can also do other methods such as um local explanations. If we were to if we
[35:48] were to change some of the inputs, how would that affect the outputs and we can kind of learn and get some explanations
[35:56] of the model's decision-making process based off of those tests. Other methods are um um some like test explanations where we can
[36:07] kind of determine the model makes a prediction why only if some part of the input is above or below a certain
[36:14] threshold. threshold. Um and we can also look at other methods such as model simplification where we can take a very complex model and reduce
[36:23] those kind of decisions down to a little more simple model that's more easily interpretable. One commonly used tool is uh SHAP. It's
[36:34] a Python package and it uses the the um idea of Shapley additive explanations. Um basically, it's a game theory
[36:44] algorithm that's used to determine which features have the most impact on a prediction. prediction. Um it's a model agnostic approach, which
[36:52] means that it doesn't matter what model you're using. It just kind of looks at the input and the output. So, it could
[36:58] be a very black box model like a uh neural network and it can still work for it.
[37:04] And this SHAP tool can calculate an additive feature importance score for each prediction. And like I said before,
[37:11] that kind of means it can calculate um which features contributed the most to raising or lowering maybe like uh
[37:19] predicted class probability, say for water. water. Um Um and that's a part of the local explanation sector of of post hoc
[37:28] explainability. explainability. Um they're really good for explaining single decisions from these black box models. models. Down in the bottom right, we see an
[37:36] uh an example of a row from our MODIS training data set. And below that, given our classifier, we can get the SHAP um
[37:47] explainability plot and that tells us which features kind of prompted the class probably probability output to be
[37:55] higher or lower. We can see that band six and band two made the prediction go much higher
[38:02] towards a water value. Um and then NDVI and surface reflectance band four tried to push it down towards
[38:09] the land value, but it ended up being 58% uh probability of water. So, we'll call that water.
[38:17] Another example of model explainability with a machine learning algorithm is um, attention maps with visual transformers. Uh,
[38:26] Uh, transformers are a type of use of neural networks um, where they use a mechanisms called an attention
[38:34] mechanism, um, which basically allows the model to focus on certain areas and certain features in the input and make
[38:42] predictions from that. One really useful thing that comes out of that are these attention maps. Basically, the maps um,
[38:49] from the inputs that show where the model is paying attention and that can kind of tell us where the model is
[38:56] paying attention to and what features are kind of more important in leading to the prediction that it made. Um, it
[39:03] highlights the important regions for the image for that target class. Uh, these can lead to a better
[39:08] understanding of how the model is processing the input and which features are most important to the prediction.
[39:16] Uh, and next we will take a look at some of these concepts in practice and a notebook on Google Collaboratory.
[39:29] All right, now we will look at the uh, uh, notebook. It is located here, the link for it is located here in the uh, NASA
[39:37] ARSET ARSET machine learning fundamentals repository. You can go down to this link right here and open it in Google Collaboratory.
[39:49] We're first going to get rid of all of the outputs that we've already seen and start from scratch.
[39:57] Um, so we've briefly mentioned some topics in machine machine in machine learning explainability. Um, this is kind of an introductory
[40:06] notebook to familiarize yourself with explainability techniques for machine learning. learning. Uh, for this we'll use data from the
[40:15] MODIS instrument to test uh several techniques and machine learning algorithms and we're going to look at different
[40:21] different um methods of explainable AI. Um the intent is to introduce this topic of explainability and describe some of the
[40:29] methods. methods. Um this entire work is done using Python and it's based on the data set that
[40:35] we've seen before that we've uh that is the Modis toy data set. This is I completely normal. This
[40:46] uh uh we've written this so it's okay to run anyway. anyway. Here we're just going to install some
[40:53] explainability libraries called shap and lime. We'll get into that a little bit later. We've already kind of explained
[41:00] some of shap. So, we can see that it's installed some of these packages that are necessary that don't come stock with the
[41:10] Google Colab runtime. And now we've also downloaded a um pre-trained uh random forest model. We've pre-trained a model before in uh
[41:24] the previous notebooks and here's one that we have located in the uh repository that we can download anyway
[41:30] so we can save time on not having to train again. We're going to import the rest of the
[41:35] notebooks that we need. And we're going to init the JavaScript. This is just so we can see some really
[41:44] pretty uh um outputs from the shap uh library. We have some variables that we're going to need and right here we're going to
[41:55] actually load this Python path. Uh this is the model that we've downloaded and we're just going to load it up with joblib and
[42:03] it is now uh our random forest model. We're going to download some of the tips that we're going to use to predict on uh
[42:13] this with this random forest model. Um Um This is a function that just reads in those tips
[42:22] and then converts them to a NumPy array that we then convert into a data frame that's a tabular data frame that we're
[42:30] familiar with now. And it looks like this. So we see here uh we have a lot of points. We have all
[42:38] of the bands that we need surface reflectance bands 1 through 7, the normalized differentiate differentiable vegetation index, and NDWI
[42:47] 1 and 2. Um here we're going to define a function that takes that data frame and applies
[42:54] the uh random forest model to it. So this might take a little bit of time to predict just because it's a lot of
[43:05] data points. So now the random forest has predicted that data frame. Um what we're actually going to do is we're going to
[43:15] uh we have the predictions from that and that's water not water and we're going to assign that to the data frame that we
[43:21] see see um here that is our predictive data frame. frame. Um we can see that in practice here
[43:28] where just this last column is that predicted value. Um So before we get to the model explanation part, let's find some data
[43:37] that is interesting that we can use for some individual prediction explanations. Um this is the data that is that might
[43:45] be outlier outlier data or some other interesting data that you might want to take a closer look at.
[43:52] Here we have some pixels where the model labeled it water, but the uh NDVI was very high. So that could be interesting
[44:00] to us. We do this function that kind of sets a threshold threshold um and we here we set the threshold for
[44:07] 10,000. And here we see a sample of the data frame that shows rows where the NDVI is above 10,000 and
[44:18] the random forest model labeled it water. Um the same thing again, we it's just making sure that we have the water ones.
[44:33] So we briefly talked about Shapley values and Shap and this is kind of a in practice sort of explanation.
[44:43] Um Um So the library is in Python. It's a popular and widely used tool that provides solution to the explainable AI
[44:52] problem. problem. It offers a pretty intuitive way to explain the output of machine learning models by assigning the values to each
[45:00] feature and indicating its contribution to the prediction for a specific instance. Um so like I said, the Shap
[45:08] library implements that sort of theory from the Shapley values. And here we're going to use what's called the tree explainer which works
[45:17] really well with tree-based methods such as random forest, XGBoost, LightGBM or histogram gradient boosted machines. Um there is an explainer that works for any
[45:27] machine learning algorithm and that's called the kernel explainer. Here we have some additional resources you can take a look at that kind of go
[45:34] more in-depth into the theory of Shapley values and more in practice along with some tutorials. So here we have the tree explainer. We
[45:45] give it the classifier which is a random forest and we also give it the raster data frame which is the pandas
[45:54] data frame made from the rasters we brought in. Um we're going to drop the values of water, the predicted values
[46:01] from that predicted high and NDVI sample that we took. And here we're just going to get the
[46:08] SHAP values from that. All we need to do is give it that the the data frame or
[46:13] the values that we want it to predict on. So, one method of explainability is the variable importance plot.
[46:22] Um Um and this is all according to the mean SHAP values for each features. And a variable importance plot is important um
[46:30] when looking at a looking at the explanations a little more globally. Um we want to see which features are
[46:37] more important according to the SHAP values and have a a bigger impact on the model's decision-making process.
[46:45] Here we see surface reflection band two um and surface reflectance band five being pretty important. Um although band
[46:56] two really stands out against the others. others. We do this with SHAP. Um that just gives us the summary plot.
[47:04] So, here we're going to look at some local interpretation. Um one really useful aspect of SHAP is the benefit of
[47:11] local interpretability, uh meaning that it explains the predictions of machine learning models at the individual observation level.
[47:19] This is in contrast to traditional variable importance methods that only provide results for the overall population. With SHAP, we can understand
[47:27] why a particular prediction was made for a specific case and how each predictor contributed to that prediction.
[47:33] Uh this level of transparency allows us to pinpoint and contrast the like the impacts of different factors on each
[47:40] individual case, and it provides valuable insights into the model's decision-making process. With all that being said, um we've defined a function up here that
[47:51] kind of wraps the SHAP force plot, and that's the function that gives us this nice little um
[47:58] visual right here. So, what we do is we want to look at the first row in our high NDVI setting.
[48:06] Um and what it gives us is this sort of visual. That's a what's called a forest plot.
[48:12] plot. And what it gives us is the model probability that it is water. And here we see it's 0.77, so pretty confident
[48:19] that it's water. And we see which features are pushing that prediction towards water and which which features are pushing it down
[48:28] towards uh not water. So, we see all of um the surface reflectance bands and the calculated indi-
[48:37] indices NDWI 1 and 2 are pushing this up towards our prediction of water. The only thing that's pushing it down just
[48:45] by a little bit is that really high NDVI uh uh um value. So, we don't According to
[48:51] this, maybe don't have to worry that much about NDVI being really high because all of the other features might
[48:57] make up for it. Um so, let's double-check that with a few more examples. This is another example. We see it's
[49:05] just another row in our sample data frame. We see it's again pretty confident uh 0.68 is our predicted probability. And
[49:13] like we saw before, um we see that the rest of the surface reflectance bands and calculated indices besides NDVI
[49:24] push up uh the probability towards water rather than not water. And NDVI is the only thing pushing it down, but it's not
[49:33] enough to push it towards anything less than 0.5, where it might be the model might be unsure and push towards not
[49:40] water. water. Just to triple-check, let's look at one more uh example. We can kind of just see again it's the
[49:49] same deal um with that we saw before. So, that's good. We can see look at this and we can
[49:55] say, "Okay, there are instances where NDVI might be high, um but the rest of the indicators um
[50:04] show that the model is um pretty confident in its prediction of water. So, that's SHAP. Another um
[50:14] explainability tool is called LIME. Um so, that's the local interpretable model agnostic explanations package. Um and what LIME does is
[50:26] LIME creates a very simple and interpretable model interpretable model from a given model, our random forest, for example. And it only does this for a
[50:34] local area around a given point. It doesn't really give us a global explanation um like parts of SHAP can
[50:41] do. do. What it does is it uh creates a simple model for only uh areas in our feature
[50:48] space space um where we want to take a closer look. So, it's a linear approximation of the
[50:53] model's behavior. Um while this model, this random forest, might be very complex globally, and that means by globally I mean in the entire
[51:03] valid feature space, it's easier for LIME to approximate the model around a point of interest. This graph is a really good example.
[51:12] Um Um the soft blue and red back here represent the global decision boundaries. boundaries. Uh however, in the local space, we see
[51:19] here this red cross, um this is an area we kind of want to take a look at. And
[51:24] what LIME does is it approximates the decision space, you know, between red and blue here with that simple linear
[51:31] boundary. boundary. Um this works to explain only the area around this point of interest. These other red crosses and blue crosses
[51:40] um um and this really approximates the model well in this local area, but it doesn't represent the global decision function
[51:46] as we see. If we were to take this and apply it to everything else, we'd see that it would not fit with what the
[51:52] model's actually doing in other areas of the future space. These are some additional resources that you can take a look at that probably
[52:01] better explains it than I can. Um and it also gives us some examples and tutorials to take a further look at
[52:07] this. So, in practice, um we can import the lime library and what we take is the lime tabular that works for tabular
[52:17] data. data. Um Um and we create a lime tabular explainer. Uh we give it the data frame to predict,
[52:26] which is our raster data frame. We tell it this is a classification problem. Um we give it some feature names and we
[52:33] give it the class names, not water and water. water. This gives us an object called a lime
[52:39] explainer. explainer. And what we can do is use that further down here. One thing we do need to
[52:44] define before that is um a lambda function function uh uh that's uh basically given an input, it
[52:52] returns the model probability of the input being water. And we want to return that probability. Want to make sure that that's a float,
[53:00] meaning that it'll give us decimals. Um Um so, there's a lot going on here in this part. What we have here is we
[53:09] have the lime explainer and we call explain instance and we just give it the first row values
[53:16] um and we tell it we have 10 features. So, first we see that the row we are
[53:23] explaining is on the right side. These are the actual um values in this column. So, we see we
[53:29] have a um we have all of our surface reflectance bands and the calculated indices. This is what's going into the model.
[53:37] Um on the left, we see the class probabilities. We see uh high probability of water and uh less high
[53:44] probability of land .77 to .22. And in the middle is what is really interesting. So this is the feature
[53:54] contributions to what pushed this model towards predicting it water. And this is our kind of linear approximation. We see that surface
[54:04] reflectance five being in between 94 and less than 297 pushes that towards water as well as NDWI.
[54:14] Other aspects push it towards not water but not as much as our feature contributions of surface reflectance five, NDWI and some other
[54:25] ones. ones. So this is interesting. Let's take another look at another example. It's the same deal. We have the columns
[54:34] off to the left that are our actual values that are we that is going in. These are our high NDVI samples.
[54:41] We see model probabilities and in the center we see the explanation of why this model is predicting water.
[54:51] We can take a closer look at that where it actually gives us the decision boundaries and the
[54:57] model and the impact that those um boundaries have on the model prediction. So this is really nice to look at
[55:05] because we can see that if the surface reflectance reflectance is greater than 297 and less than 1711
[55:13] or equal to um um that that pushes the model maybe a little bit towards not water. So we have another example here and I'm
[55:25] not going to go into too much more detail just because it's what we've been seeing before. It's just an example of
[55:32] of the high NDVI and the model labeling it water. So some closing thoughts. What have we done in this notebook? Well, we've
[55:44] loaded a saved random forest model from disk disk and we're able to load a raster in for
[55:50] the model to predict on. And we also used shap to visualize feature importances as well as local
[55:57] explanations. And of course, we've also used lime to calculate and visualize local interpretations of model outputs. So yeah, thank you.
[56:08] Okay, thank you very much Caleb. Now we're going to go into our last exercise of session three where we're going to
[56:14] introduce the concept of auto machine learning and then we're going to discuss some of the closing remarks.
[56:22] For this exercise, we're going to head out to our GitHub page and now we're going to click on the Modis auto ML
[56:29] notebook. notebook. Once you click on it, you're going to receive this prompt. And the main idea of this notebook is
[56:36] that we're going to introduce some of the auto ML or auto machine learning features features within our data set.
[56:43] We're going to introduce some of the benefits of using it and then some of the actual future concepts that
[56:48] you might be able to to investigate on your own once we finish this tutorial. As we have done before, we're going to
[56:54] install some of our dependencies. Note that in this case, we're going to install the auto scikit-learn package
[57:00] from Python which is going to provide some of those auto machine learning features that we're going to need to discuss in this
[57:06] project. project. Once we have installed the package, we can proceed to import the library and in our case, we're doing a classification
[57:16] problem. problem. But if you had a regression problem, then you would include the auto scikit-learn plus the regression
[57:23] portion of the library. We go ahead and define some of the default variables that we have been
[57:30] doing so far. Create some of the output directories to save some of our images, and then load our training and test data
[57:39] set so we can look at some of the auto machine learning features. Know that one of the important things
[57:45] that we have done through all of our sessions is to create our X and Y variables for
[57:52] training and testing, which we're going to use then for further development on our exercise. The first portion of the exercise is
[58:01] just going to kind of replicate the training mechanism that we used on our session two training loop. And in here,
[58:08] what we do is that we defined a K-fold object where we're going to do K iterations over our data set to decrease
[58:16] the variance between the models that we're going to train with our random forest. forest. And just to kind of do a brief overview
[58:23] of what we did on session two is that by using K-fold mechanisms, we reduce the variance of our models, but we also
[58:30] increase the probabilities of generalization because our model is seeing several views of our training data set. Once we define our K-fold approach, we
[58:41] can then define some of the hyper parameters that we need. And we also did some testing on this on session two and
[58:48] part of session three where we could actually optimize and fine-tune some of these parameters on the fly using
[58:55] auto-automation auto-automation of the optimizer hyper parameters. Now, this is going to be helpful, let's say, in some exercises where you don't want
[59:04] to optimize your model by your by your own, but you can also use some of these techniques once you have the let's say
[59:12] proper domain knowledge to then optimize the more the model on your own based on the actual expertise that you have been
[59:18] gaining from these sessions and then further reading that you might do along the line of other projects that you might have.
[59:26] So, once we define model and our classifier, we can proceed to train and do K iterations based on the number
[59:33] of of views of our data set that we're going to have. So, from these, we're going to
[59:39] probably just average some of these scores that we have from the models that we trained, generate some of the metrics for each
[59:46] one of those models, but then we can actually select both the best accuracy model, but also the
[59:53] average all the models that we trained. Now, know that we had to go through all of these iteration process just to train
[1:00:01] several of these models. Now, when we introduce the concept of automatic learning, what these libraries does is that they try to automate every
[1:00:10] single point of the optimization of your model and model selection pieces. So, this particular library, which is
[1:00:17] called auto-sklearn, allows you to one, test several models that are available through the library, two, to actually do the
[1:00:27] hyperparameter optimization on the fly, and then three, to create ensembles of these models. So, now we're not training
[1:00:34] a single random forest model, which is a three decision tree ensemble by itself, we're having ensembles of different
[1:00:41] models that can include random forests, other decision trees, and so forth that are going to allow us for better
[1:00:48] generalization across the board. So, to define our auto machine learning pipeline, what we do is that we
[1:00:56] define this auto-sklearn classifier pipeline. pipeline. And know how we're not defining any of the hyper-parameters of our models. The
[1:01:04] only things that we're defining is how much time to spend per task, and then how long to run the entire process.
[1:01:13] And these two steps are important because based on whatever computational resources you have available, you can run this for a shorter time shorter
[1:01:20] amount of time, which would allow you to have just a couple of iterations of models, or for a longer amount of time,
[1:01:27] where you can test more models, more ensembles, and then further optimize the hyper parameters of each one of your
[1:01:34] models. models. Once we define our auto machine learning object, we can proceed then to fit our model.
[1:01:42] model. And know that we're using the same fit same fit function that we're using on our default K4 iteration from
[1:01:50] scikit-learn, but now we can then proceed to do some of the predictions. Know the that we're getting a over
[1:01:57] accuracy of 0.99. Now, we do not know what this auto machine learning algorithm did, and part of the explainability needs that we have
[1:02:07] for many of these projects is to know what the machine learning is doing, and what the model is actually providing
[1:02:14] based on the input that we give it. So, we can investigate some of these auto machine learning features by just
[1:02:20] looking at some of the objects within it. So, the first one is we're going to investigate the performance
[1:02:25] over time. So, we can see how the performance over time increased while the model was training and doing
[1:02:32] the optimization of several hyper parameters. parameters. Okay, so here we can investigate the models that our auto machine learning
[1:02:39] features were investigating, and know how we have several models, for example, a multi-layer perceptron classifier, which is basically a neural network, a
[1:02:48] very simple one, a a histogram gradient boosting classifier, classifier, a passive-aggressive classifier, and so forth. So, we have several models that
[1:02:58] auto our auto machine learning pipeline was trying, and was actually creating ensembles of them to improve our classification performance.
[1:03:09] Know how we have the ensemble weight, which is going to mean how much weight each one of those models end up being on
[1:03:17] our final uh model stack or on our on our final ensemble. ensemble. The higher these weights are is the
[1:03:24] higher that model is going to provide input into the final prediction. So, we can continue looking at some of
[1:03:33] the metrics from some of these models. We can actually see some of the cost of these models like how much did it cost
[1:03:39] computationally to train these models but also to perform some of the predictions and testing. So, one more thing that we can look at
[1:03:48] is the leaderboard. So, what were the models with the best performance across the board within this ensemble?
[1:03:54] And we can we can look at some of the highest performing ones were the random forest, additional decision trees
[1:04:01] elements, but also we had some gradient boosting algorithms that would provide some input on the final ensemble.
[1:04:09] The final ensemble weight, we can see that the model with the highest weight is the SGD, which is the highest
[1:04:16] performing model within our data. Now, it's actually one of the least computationally expensive one that you can just compare with others like
[1:04:26] the multi-layer perceptron and so forth. So, this is just kind of a way of understanding what this auto machine
[1:04:34] learning features are doing and how the models are being assembled. In order to compare the performance of
[1:04:41] our K-fold iterations and our auto machine learning one, we can select the best model from the from the K-folding
[1:04:49] iterations, but we can then select the auto machine learning ensemble that we just trained on. Uh to do some of the qualitative
[1:04:57] observations, we can just load some of the rasters that we're looking at and then create the rasters data set
[1:05:03] into tabular format, so we can predict using these models now. Now that we're following the same process that we did in previous
[1:05:12] notebooks where we create our tabular data set and then we have our function then to do the prediction. Now, note
[1:05:18] that how I changed this function now to include the model the one to do so we can
[1:05:24] can do predictions with different models. One of the downsides of this is that the initial raster prediction using a
[1:05:33] single random forest would probably take about a minute or two to finish. Now, right now we're using an ensemble
[1:05:40] of many of these models. So, the final prediction takes about 27 minutes to finish for a single observation.
[1:05:48] So, this actually a downside of using an auto machine learning method that has an ensemble of large amounts of model
[1:05:54] because now your performance is limited. And you might be able to increase the accuracy of your predictions. But then
[1:06:01] if performance was a need for your particular project, then you need to kind of consider how this would affect
[1:06:07] your pipeline. Once we have created our data sets in tabular format, we can just reshape them after
[1:06:15] prediction. prediction. And then we can start doing some post-processing to visualize some of this. this. Once we plot our QA mask and we know
[1:06:25] that we have been filtering some of those bad quality observations, we can then proceed to save our raster
[1:06:33] and then visualize it interactively just to kind of have an idea of how these models are performing.
[1:06:40] In here we have that our green mask is going to be our auto machine learning output and then our red
[1:06:46] mask is going to be our single random forest K4 iteration output. output. Note that if we do a close close-up to
[1:06:54] the actual lake power observations we can then compare how visually some of these models are performing. And note
[1:07:02] that in some cases the actual random forest that was that was trained using the K fold is actually
[1:07:10] better in some locations at predicting some of those boundaries of the Lake Powell observations. We could find other locations where the
[1:07:18] actual actual ensemble of models from the auto machine learning process are better than the K fold iteration
[1:07:26] but we can just kind of keep comparing the output between them. In regards to the the actual numerical and
[1:07:33] quantitative performance, we saw that both models has a 99% of accuracy. Which leads us to we probably want to increase
[1:07:42] the number of tiles that we're going to be looking at just to know how generalized both models are across a
[1:07:48] larger data set. And for that we do have an assignment where we are looking at instead of only
[1:07:54] Lake Powell looking at other locations where we compare the performance of our auto machine learning method compared to
[1:08:01] the K fold iterations of our single random forest. So, just as some closing remarks from this exercise
[1:08:09] we trained a model using K fold iterations iterations for cross validation but also the auto machine learning
[1:08:16] auto machine learning features from the auto scikit-learn library. We have seen that both are very similar qualitatively and
[1:08:25] quantitatively but we should then do additional comparisons across a wider study area and using let's say more
[1:08:32] observations just to see how how much those models generalize across the board. board. Uh last but not least is really
[1:08:40] important to mention that well, auto machine learning is a really nice step towards automating some of these steps,
[1:08:47] having the domain knowledge to understand what is happening on the background is a great way of understanding some of the behaviors from
[1:08:55] the data set that we have in hand. The auto machine learning provides let's say an ensemble of many of these models that
[1:09:02] been trained and optimized on the fly. But, this doesn't necessarily say that the ultimate machine learning model is
[1:09:07] going to be better than let's say the model that was trained based on domain knowledge like we have done so far with
[1:09:13] the random forest. Okay, so we just finished our last exercise. We do have an assignment with a let's say a broader application
[1:09:25] at the end of session three that you can take a look at that you can uh play with and then you can just modify
[1:09:31] for your own use case. Now, to kind of provide an overview of what we have been discussing across all
[1:09:38] of the three sessions. We first started by defining what machine learning is and how machine learning can benefit Earth science.
[1:09:46] We also provided examples of how machine learning has been used in Earth science and has successfully replaced some of the workflows that we
[1:09:56] just didn't have in hand with traditional algorithms. Some of these could be land cover. Some of these
[1:10:02] have been just either like creating products for production uh outputs that we are using to better understand Earth. So, machine
[1:10:11] learning has proven to be capable of improving some of our workflows, improving some of our let's say existing methodologies. And
[1:10:20] the future of machine learning in Earth science is is just brilliant and we have many things to go for uh in the next
[1:10:27] couple of years. Now, another thing that we discuss is how the fundamentals of machine learning are basically similar across the board, but
[1:10:36] most of the time we only change a couple of variables or a couple of algorithms to get some of these jobs done.
[1:10:43] So, by following all of the fundamentals of machine learning that we introduced during the three sessions, you will be
[1:10:49] able to at least understand some of the literature that is online, some of the code that is actually available on
[1:10:56] GitHub across many of the papers that um you're looking at many of the workflows that are being held into production
[1:11:03] right now. But that way you can kind of start thinking about your problem in a machine learning way.
[1:11:09] How can machine learning benefit your project? How can machine learning benefit your science question? And we also discuss how we need to have several
[1:11:18] questions in hand in order to kind of decide what ideas from machine learning to pursue. How to select the best model is going to
[1:11:26] depend on that science question that you that you have, but also the data that you have, the needs from your production
[1:11:33] pipelines in regards to how fast do you need your product, how accurate your model needs to be.
[1:11:39] How reliable or how resilient your model needs to be in regards to the decision that you're going to make.
[1:11:45] You're never going to take decisions the same when thinking about disaster response problem than to whatever a map
[1:11:51] you're going to be creating for your specific application. So all of those things you need to keep them in mind in order
[1:11:59] to make some of these decisions and to select some of the proper techniques that you're going to need for your
[1:12:04] specific use case. We also introduce some of the concepts of training data generation, how you can think about your training
[1:12:13] data generation, how you can use unsupervised learning in many cases to create your training data, to save some
[1:12:19] time at the time of creating that data and using algorithms that can provide at least a base where you can use your
[1:12:25] domain knowledge then to improve your training data set. We also provide a details on in regards to explainable AI and how some of the
[1:12:34] time we are able to identify how our machine learning algorithm is thinking, how it's learning from the data we have
[1:12:41] in hand. Many times we can correlate that with domain knowledge based on our expertise in the science question. And
[1:12:48] that way we can actually provide input to the actual let's say literature that we're writing in regards to how these
[1:12:55] models are taking decisions, that we know how these black boxes can take decisions upon the problems that we face.
[1:13:03] This also allow us to understand if we need to add more training data to our model. If we have observations that our
[1:13:09] model is just not representative enough, that we need to gather data from then to make our model more generalizable across
[1:13:17] other applications. Other details that we touched base on was in optimizing our models. The first model that you train is not always going
[1:13:25] to be the best one that you have so across the board. So, it's nice to then have this starting point where you just
[1:13:32] test an initial model, but then you can use automatic fine-tuning and optimization to then have the best model
[1:13:39] available in hand from whatever hyper-parameters you need to optimize. Some of the last closing thoughts is then the use of auto machine learning.
[1:13:49] You can use some of these software applications then to optimize some of your workflows and to automate some of
[1:13:54] the decisions that you make during your um um development process. Now, it's always nice to have in hand that domain
[1:14:02] knowledge is always going to be important to understand what these machine learning algorithms are doing, even more into auto machine learning
[1:14:09] features where you do not see from the beginning what the model is thinking or the decisions that the model is
[1:14:16] pursuing. pursuing. Some closing thoughts in regards to the actual, let's say, philosophical way of machine learning and science.
[1:14:24] The realm of machine learning is just increasing and is just exponentially increasing in in the sense of algorithms that are being released,
[1:14:34] data sets that are being out there, applications of machine learning that sometimes are not even well documented,
[1:14:41] but the public is just using uh uh without without even understanding some of the backgrounds of it. So, we need to
[1:14:49] make sure that we do machine learning responsible in the sense of understanding and having that domain knowledge to improve science, not to use
[1:14:56] machine learning as simply a tool for science, but to understand how machine learning is is pursuing earth science
[1:15:03] and how is actually accelerating many of these workflows. Finally, these sessions were kind of a summary of many of these fundamentals
[1:15:12] for machine learning. We didn't cover everything, but we provided the tools for you to understand many of the
[1:15:18] references that are out there that you can then kind of use the basics and the fundamentals from this um training to
[1:15:26] then go on and do additional more complex workflows like convolutional networks, like transformers, like many of the foundational machine learning
[1:15:35] concepts are out there that are improving some of the workflows that we have. We need to start from a base. We
[1:15:41] need to start from an informed base. So, it's always good to then those basic and fundamentals in place to then improve
[1:15:49] the way we do machine learning in earth science. Just to reiterate, we have kind of a homework assignment and different from
[1:16:01] set from the previous sessions. In this one you're going to have a Google Form exam that you're going to need to fill
[1:16:06] out in order to get the completion certificate from attending this um this training session. And it has been a pleasure for us to be
[1:16:15] part of these training sessions. So, we appreciate your time. We hope that all of these um sessions
[1:16:21] were of use and are going to be of let's say great impact to your future machine learning and would allow you to
[1:16:28] at least start not from scratch, but from an informed base to leverage machine learning into your projects and
[1:16:34] your science questions. So, thank you very much for that. Thank you very much, Jordan. Thank you for taking the time to give us
[1:16:45] your closing remarks and and to summarize the series like that. That was very useful. Here are our contacts. If you have any
[1:16:54] further questions, you can contact myself or the trainers that you saw in this series over the last 3 weeks.
[1:17:02] Here is the training webpage where you can find all the materials, PowerPoint presentations, the videos, and the
[1:17:07] homework. homework. And I've also included our primary ARSET website where you can check out other great trainings as well as follow us on
[1:17:16] Twitter to find out about more announcements from NASA ARSET Sciences. So, now we can begin addressing your
[1:17:22] questions. Please continue to type your questions into the questions box and we will address them in the order in which
[1:17:28] they were received. Thank you. Okay, welcome to the question and answer session. session. We've been receiving many great
[1:17:47] questions throughout this presentation here today. And we will do our best to make our way through these
[1:17:54] with the time remaining. Um and we will post this to the training webpage as soon as we've cleaned it up
[1:18:03] and and for accuracy. Just one clarification, the homework is a Google Form found under part three on the training webpage.
[1:18:18] And And you just need to turn that in, submit it by the 25th. So, there may have been
[1:18:27] a slide saying that it was due on the 19th, but we extended that for an extra week to the 25th.
[1:18:33] And these questions refer to the questions at the end of each one of the the the notebooks in the end
[1:18:41] in the homework sessions. So, um um let's get started. Question one. We've generated a feature importance chart using MDI and
[1:18:52] scikit-learn. scikit-learn. On the Y axis it shows mean decrease in impurity running from 0 to 2.06. I'm not
[1:18:59] sure what these numbers exactly mean. How do I interpret this range? Yeah, I can take that. Thank you, Caleb.
[1:19:11] Uh yeah, so generating that mean decrease in impurity, um these importances are measured by uh seeing like
[1:19:22] how the overall impurity of uh the model decreases when a feature is used to make a split in um a node in a tree. This is
[1:19:31] really getting into the how a random forest works. So, um you can you can dive deeper into the into the links that
[1:19:38] we've provided, but basically what the those numbers mean is it it's pretty straightforward. A higher value for the
[1:19:46] uh mean decrease in impurity for a specific uh feature uh that means it's more important to the
[1:19:52] model or it means the model relied on it more heavily on that uh when it uh was used to make predictions.
[1:20:01] Great, thank you. And I placed the links that you see on your screen into the chat, so you can
[1:20:08] uh access them now. Question two. Can you kindly comment on how to tackle biases and discrimination and selection of training of labeled
[1:20:19] data? data? Yeah, this is Mark. I'll take care I'll take that one. Um so, I mean basically there's some bias
[1:20:27] in all data. Uh and there's not a whole lot we can we change it all. Uh so
[1:20:34] the key thing is to recognize that that the biases are there and there is some impact and then you
[1:20:41] just try to explain it in your outputs as best you can. Um Um so yeah, it's just
[1:20:48] the the the biases are there, we just have to we just have to acknowledge that they're there
[1:20:54] there and then work with them as best we can. That's a good caveat. Thank you very much, Mark.
[1:21:00] Question three. Do you know about using genetic algorithm for model tuning and optimization? Is it sort of a random
[1:21:07] search? I wasn't familiar with the genetic algorithm, maybe you are. Hey, so the techniques we mentioned in
[1:21:16] this training are both manual and automated techniques. So on the manual techniques kind of use your own domain knowledge of
[1:21:23] the algorithm and you change those hyper-parameters manually. On the automated side of things, we discuss three kind of methods. One is
[1:21:31] the random one where you allow the optimization algorithm to just select randomly hyper-parameters. The second one was a grid-based one which requires
[1:21:39] you to have some domain knowledge and then provide a list of those hyper-parameters to to use. And then the
[1:21:46] other one is a Bayesian algorithm which would allow them to use prior knowledge from the optimization and then improve upon that.
[1:21:56] Thank you. Question four. Are the precision, recall, and F score interchangeably used as accuracy assessment reports like
[1:22:05] kappa or producer accuracy? Can you provide any articles related to the parameters used as model evaluators in science of total environment?
[1:22:16] Okay, so this is Jordan again. So each one of these metrics actually look for different characteristics from your
[1:22:22] output. output. And the idea is that you're going to use each one of those metrics to target
[1:22:26] specific behaviors from your model. So, precision will give you the accuracy of those positive predictions, but then
[1:22:33] recall will give you the completeness of those positive predictions. Um F1 score is basically kind of a in
[1:22:40] between those two just to balance them. And then the over accuracy is just kind of the overall performance of the model.
[1:22:46] We're caring about the classes that are involved or anything else. I also added some references to producer and user
[1:22:52] accuracy that you can kind of reference. But basically we're just looking at omission and commission error. And those
[1:22:57] are not given by like the overall kappa or even like over accuracy scores. They're just kind of different ways of
[1:23:03] looking at the interpretability of your model. model. Thank you. And once again, I did place those links into the chat. So, please
[1:23:11] navigate there if you want to access those. Um question five, this is great. We have a high school student learning
[1:23:17] machine learning and data analytics. So, that's wonderful. I'm so glad that you found our course. Um Um could you provide some free and maybe
[1:23:27] not free resources to understand machine learning programming better? And it looks like there are a couple resources here
[1:23:34] and I will place these into the chat once again. Um so, please check these out. Thank you for supplying
[1:23:47] those guys. Question six, this seems pretty uh in the weeds here and definitely getting into the code. Um I'm trying to find a
[1:23:58] but okay, I can just answer that one real quick. Yeah, maybe you can address it better than I.
[1:24:03] Yeah, so there is a reference to a volume helper module missing. There's a cell on the notebooks where we download
[1:24:11] that module. So, just make sure to press on that cell before proceeding to run all of the other cells from your
[1:24:17] from your notebook. All right, thank you very much for that clarification. Hopefully that helps this person out and any others that ran
[1:24:25] into the same problem. Question six or seven. The model should not detect river water lines as outputs as well. Those should
[1:24:35] be considered as water pixels. Is that correct? So that's mine. This is Mark. So the model's designed to detect water. It
[1:24:44] doesn't care whether it's ocean, lake or or a river. If it can detect it as water, it's going to label it as water.
[1:24:52] So if you really wanted to separate those into into different classes, you would either need you would probably
[1:25:00] need to do it as a two-step process or certainly you would want a different method than random forest
[1:25:08] to get there. So so yeah. Thank you very much, Mark. Question eight. How do we determine whether the image produced has a false
[1:25:20] positive or not? That's me again. So once you produce the output map, you know, so you you apply your model to
[1:25:30] the data to get your prediction. You need to validate the map. And the false positives, false negatives will be
[1:25:36] identified in in that process. You can do that either with a validation data set if you happen to have one or
[1:25:45] you can do it through, you know, manually through visual interpretation. And and obviously that'll that'll get you the answer to whether you have false
[1:25:55] positives or negatives. Yeah, thank you. That's a pretty common theme when it comes to earth observations, especially if you're going
[1:26:03] to use them in a in a real world application, verification and validation will be necessary. Question nine.
[1:26:14] Exactly. That's you know, the the the result that you get from the model is really just an
[1:26:20] inference. inference. And then, you know, we still have to interpret that to make sure that it's a
[1:26:24] valid map as an output. So, the validation process lets us go from inference to, you know, an an
[1:26:32] actual valid map on the other side. Thank you. Question nine. In a robustness robustness model, what do you mean by input can be noisy?
[1:26:49] Yeah, that was me. I was referring to how um real-world data can be noisy. And by noisy, I mean there can be errors, in
[1:26:58] inconsistencies, or other things like outliers due to some unnatural factors such as, you know, instrument malfunctions, data
[1:27:06] acquisition errors, processing problems, something like that. Um we refer to this as noisy because the data has kind of
[1:27:12] been corrupted or contaminated in some way. Um and that can definitely make it difficult for the model to make accurate
[1:27:18] predictions. predictions. Um and we basically want a model to be robust. robust. And by that, we mean it we want it to be
[1:27:26] able to still draw, you know, meaningful and accurate uh predictions despite maybe this data being noisy. Thank you, Caleb.
[1:27:39] Question 10, do you know if random forest can also generate maps of probability that a cover is found in a
[1:27:44] specific location instead of regression or classification? Uh and to get a map that goes from zero to one, where one is a high probability.
[1:27:56] Yeah, so the random forest from the scikit-learn uh module provides the predict proba option, which is going to
[1:28:02] output the probabilities for that specific feature or pixel that you're going to be classifying on. And it's
[1:28:07] going to be from zero to one. So, if you use that one to um know which probabilities you're
[1:28:12] going to have for each one of pixels. And to of the geographical area is just going to depend on the resolution of
[1:28:17] your data. And the features um, that you're using for for training and doing the inference. Great. Great. Thank you. Question 11.
[1:28:28] On the assignment um, when running or assignment one in Google Colab, uh, when running the third cell, getting an
[1:28:35] error session crash for unknown reason. Um, I'm still trying to identify what caused the crash. Uh, is there a good
[1:28:42] place to look to help with this? Hey, so the first one is to kind of follow the instructions that are above
[1:28:49] each one of these cells. Um, cuz some of these cells are going to restart the kernel just to install some
[1:28:54] of those GPU drivers. So, you would probably need to just run these cells one by one, allow the kernel
[1:29:00] to restart, and then the drivers and dependencies are going to be installed for the um, GPU job.
[1:29:06] The other option is you can just download the the notebook if you have like a local um, system that you want
[1:29:11] um, to run with GPUs, and just run it locally. Great. Question 12. Can this technique help to
[1:29:23] predict areas that will have floods and those that are likely to experience drought conditions now and in the
[1:29:28] future? Is this capable of such things? Yeah, that's that's me again. Um, hold on, I'm scrolling back up to my answer.
[1:29:38] Uh, Uh, so yeah, what you could do is use this technique to generate a time series of
[1:29:43] maps uh, that could be analyzed to determine whether the the current conditions are a departure from the
[1:29:49] normal, you know, whatever normal is for that particular area. And that'll give you some clues as to
[1:29:55] the onset of drought or flood. Uh, but to be sure, you would really want um, you would really want to combine this
[1:30:02] uh, your output maps with other information information from the area like precipitation, you know, possibly soil moisture
[1:30:11] moisture and other things too, if you really wanted to get into the idea of, you know, susceptibility for drought or
[1:30:19] or flood. Um Um and that would help you build confidence with your with your uh total prediction.
[1:30:27] Great, and I can see this being very useful for things like that and why uh predicting areas that might flood
[1:30:34] would be very important uh for a number of reasons and uh it's nice to know that uh maybe this technique can can help
[1:30:41] with that. I think maybe uh digital elevation model data sets could also be used to be combined with things
[1:30:47] like that with precipitation. Yep, exactly. Question three, I may have missed it, but is it possible to use the Optuna
[1:30:55] library for XGBoost tuning? Is there an example of XGBoost for regression-based model construction and tuning available? Yeah, uh it's a great question. There uh
[1:31:08] it's certainly possible to use Optuna with XGBoost and XGBoost is actually a model that can be uh
[1:31:16] uh hyperparameter tuning can greatly affect model performance for XGBoost, so it's it's really important to do it.
[1:31:22] I've put some examples uh of from other sources. We don't have uh example with regression and and XGBoost
[1:31:30] hyperparameter tuning, but those should give you a good idea of how to do it. Thank you. I placed those into the chat.
[1:31:38] 14, is it possible to employ SHAP to eliminate some features that impact predictions negatively? That's me again. Um it's certainly
[1:31:48] possible, possible, but it's not necessarily recommended. There's a couple of reasons. One is that looking at those individual explanations
[1:31:58] doesn't give us an accurate representation of how uh important a feature is to the overall model performance,
[1:32:06] performance, while, you know, you're looking at a few local explainable predictions, and it shows that, you know, maybe NDVI is
[1:32:13] having a negative effect on the prediction. That's only the case for those. It may not be the case for the
[1:32:18] entire uh prediction space. Um Um Another reason is that you can have correlated features, of course. Um SHAP
[1:32:26] considers each feature in isolation, um without taking into account the correlations between those features. And it's it's certainly possible that a
[1:32:34] feature might have a low SHAP value and be unimportant or um negatively affect the the the predictions according to the local
[1:32:44] explanations, but it um you know, it could be correlated with other features. Great. Thank you for that guidance.
[1:32:55] Question 15. For the explainability part, those SHAP results may be used to eliminate many NDVI NDVI uh can the SHAP results be used to
[1:33:03] eliminate NDVI as a feature for the model? model? Oh, kind of a follow-on. follow-on. So, yeah, kind of a follow-on for the
[1:33:10] above one. It's it's generally not recommended. Um I just like to say, remember in this case, for the specific
[1:33:16] example we were looking at, we're looking at uh examples where the NDVI is anomalous in a sense. Um
[1:33:23] And it it may show that the NDVI has a negative impact due to us looking at these weird sort of cases, but it's not
[1:33:31] necessarily indicative of of overall impact. Thank you. Question 16. With SHAP local explainability, where it was showing the influence of all the
[1:33:45] variables, was it looking at individual pixels? pixels? Yep, it was. Uh for those local explanations, it was looking at just
[1:33:52] single uh single pixels, a single row of data. data. Great. Thank you very much. Hopefully that clears it up.
[1:34:02] Okay, question 17. NDVI NDVI values greater than 1,000 due to atmospheric correction. Is it possible that the high NDVI values
[1:34:13] represent some vegetation within the areas classified as water? Right, that one that one's mine. So, so NDVI greater than 1 can happen if both
[1:34:24] the red and the NIR values are very, very low. Um Um So, imagine a red value that's say three
[1:34:31] and an NIR value that's like eight. That's going to result in a very high NDVI value just because of the math.
[1:34:39] So, So, you know, this can result in anomalous calculations of of NDVI. Um and this can happen whether you're
[1:34:47] using a top of atmosphere data set or a surface reflectance. Um Um and you know, the values don't happen
[1:34:53] all that frequently. Uh but they do need to be captured in your algorithm to avoid you know,
[1:34:59] unusual results in your output maps. Thank you, Mark. And I know that we're running over, so we're just going to address this last
[1:35:09] question 18 here. Um and we'll do our best to get to the rest and get this posted. But in the
[1:35:17] meantime, question 18. In the example of model tuning, the range or precisions generated by different hyper parameterizations was very small. It
[1:35:25] didn't seem to be making a very big difference to the precision. In your experience, maybe with more complex classifications,
[1:35:32] how much difference in model performance can we expect by tuning parameters? Yeah. Um so, influence of hyper parameters can
[1:35:43] kind of be attributed to both kind of the data set that you're working with and the models that you're using. In the
[1:35:48] case that we're showing, we have we have small amounts of data and the and the the classification task is is relatively
[1:35:54] simple according to the models. It's it's able to pick up on a relatively accurate decision boundary for this
[1:36:00] water not water problem. So, changing up the hyper parameters a lot doesn't really seem to affect the performance.
[1:36:06] It can It can of course improve it marginally. marginally. Um but for more complicated problems, uh hyper parameters can definitely have a
[1:36:14] greater impact on the model and opening that range of hyper parameters that you're working with um they can control
[1:36:21] like stuff like model complexity and the regularization of those models and that all helps you kind of adapt uh the model
[1:36:27] to the uh complexity of your problem. Stuff like um models like random forests actually don't usually need a lot of
[1:36:35] tuning since they work pretty well out of the box and they have a small amount of hyper parameters that that don't
[1:36:41] necessarily change the performance that much. Of course, some do. I'll put that caveat in there. Um other models such as
[1:36:48] XGBoost are are greatly affected by hyper parameters. Um that you can really mess with it and that that's a case
[1:36:56] where you can really tune up your hyper parameters and get much different results. results. Good or bad.
[1:37:05] Thank you. So, that brings us to the end here today of the series and I know Jordan, you had
[1:37:11] a great summary great concluding remarks. Uh but I just want to give the others trainers an opportunity to say a little
[1:37:21] something to the audience here if you choose. And if not, that's okay. We thank everybody for attending these these last
[1:37:40] 3 weeks. All the recordings are available on the training web page uh for you to review and go through at your
[1:37:45] own pace. Um Um Remember again, the homework is due on the 25th, and if you attended all the
[1:37:51] trainings and submit the homework, you can receive a certificate of completion uh within about 3 months. Uh we had a
[1:37:57] lot of This was a very popular topic, and given the popularity of this topic and the the participation that we saw, um I
[1:38:06] don't know if you all know, but you're one of over 3,000 individuals that took this training over
[1:38:12] the last 3 weeks from around the globe. So, um I do believe that we're going to have more
[1:38:19] machine learning incorporated into different Earth app Earth observation application trainings that ARSET puts out in the future. So, I
[1:38:27] hope you enjoyed this, and please reach out to myself uh if you have any questions, and thank
[1:38:34] you very much, and I hope you have a great rest of your week.
