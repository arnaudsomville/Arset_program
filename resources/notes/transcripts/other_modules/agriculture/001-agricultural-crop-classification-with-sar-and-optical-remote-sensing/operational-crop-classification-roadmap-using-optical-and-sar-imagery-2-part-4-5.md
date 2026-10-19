# Operational Crop Classification Roadmap using Optical and SAR Imagery 2, Part 4/5

`https://www.youtube.com/watch?v=_cZidf9taJ8` · id 248 · 2:31:04 · module 18 — Agricultural Crop Classification with SAR and Optical Remote Sensing

[00:01] welcome back to the rcit training agricultural crop classification with synthetic aperture radar and optical remote sensor my name is sean mccartney
[00:10] and i'm a scientific analyst at nasa's goddard space flight center and a trainer with the rset program
[00:17] we learned from dr laura dingle robertson on how agriculture and agri-food canada has implemented an earth observation based operational crop
[00:26] inventory at the national level using synthetic aperture radar optical data and open source software laura also walked us through sar imagery
[00:35] preprocessing using snap software in the fourth part of this webinar series we'll learn from teresa roth how
[00:43] one uses machine learning algorithms for crop classification teresa is a remote sensing specialist at circo and copernicus's research and user
[00:53] support support following the theoretical portion of her presentation teresa will demonstrate how to use python packages in jupiter lab to
[01:01] run supervised and unsupervised classification for crop classifications if participants wish to follow along with teresa's demonstration you will
[01:11] need anaconda and jupiter lab installed on your machine machine additionally you will need to have access to the pre-processed data created
[01:19] in part 3 of the training following teresa's demonstration we'll hear again from dr laura dinkle robertson a physical scientist at
[01:29] agriculture in agri-food canada on how canada performs post-processing steps on classified images and publishes uh them in their annual crop inventory on open
[01:39] canada as a reminder there will be one homework assignment posted to the training page on the last week of the webinar series
[01:50] answers must be submitted by google form by the due date of november 2nd a certificate of completion will be
[01:56] awarded to those who attend all live webinars and complete the homework assignment by the deadline of november
[02:03] 2nd 2nd you will receive a certificate approximately two months after the completion of the course for marina
[02:09] spartin spartin i will now pass it over to teresa roth from copernicus's research and user support to discuss more on machine
[02:17] learning for crop classification teresa over to you thank you very much for the introduction and welcome to all the participants also
[02:31] from my site let's start with a quick overview of today's session we will first review some theory basics
[02:39] on supervised and unsupervised machine learning algorithms and their use in crop classification then we will look at some of the
[02:48] algorithms in more detail and this will be the random forest the support vector machine and the k-means
[02:56] then we will move to the demonstration part of this session where i will first introduce some selected machine learning
[03:02] libraries and then i will tell you about the satellite and training and validation data we will use today
[03:10] finally we will move on to the practical demonstration of crop classification using radar and optical data in python
[03:17] and jupiter notebook after the demo we will have a question and answer session where i will try to
[03:24] answer any questions that you may have about the topics discussed so let's start first let me briefly recap what is
[03:33] machine learning machine learning is a branch of artificial intelligence or ai and computer science which focuses on the
[03:42] use of data and algorithms to imitate the way that humans learn there are two basic approaches supervised learning and unsupervised
[03:52] learning learning the main difference between them is that one uses labeled or training data to help predict the outcomes
[04:01] while the other does not supervised learning can be separated into two types of problems classification and regression
[04:11] classification problems use an algorithm to accurately assign test data into specific categories for example separating apples and
[04:21] oranges oranges or as we will see today differentiating between crops in satellite imagery the most common types of classification
[04:32] algorithms are for example linear classifiers classifiers decision trees random forest or support vector machines we will talk about the last two more in
[04:43] detail and we will also use them in our demonstration another type of supervised learning problem is regression that uses
[04:53] algorithm to understand the relationship between dependent and independent variables variables some popular regression algorithms are linear regression logistic regression
[05:06] and polynomial regression but also the algorithms already mentioned for classification can be used for regression we will however not discuss regression
[05:16] further today compared to supervised algorithms the unsupervised learning uses machine learning algorithms to analyze and cluster unlabeled data sets because we
[05:28] don't have any training data these algorithms discover hidden patterns in the data without the need for human intervention
[05:39] unsupervised learning models are used for three main tasks entities are clustering clustering association and dimensionality reduction i will only mention the first one which
[05:51] is clustering and specifically i will mention one of the algorithms most commonly used for clustering which is
[05:59] called k-means so now let's talk about the use of machine learning for crop classification in more detail
[06:08] machine learning is widely used for crop classification with very good results two of the most popular algorithms are
[06:17] random forest and svm due to their simple implementation and robust performance performance as mentioned before these are both in
[06:26] the category of supervised classification algorithms this means that they use training data to learn the relationships in our data
[06:35] sets and correctly classify the pixels into crop classes a rigorous quality control of this reference data set is very important for
[06:45] the accuracy of the model we create because any errors in the reference data sets will decrease the accuracy of our
[06:52] model model while the machine learning algorithms perform very well the transferability of the model is very limited between study
[07:02] sites or for example even growth periods there is a significant research effort going into developing a model or a
[07:10] training phase which would allow the model to be trained in one location or a country and then used to classify a
[07:17] different study area but at the moment retraining is generally always necessary for different study sites or different growth periods
[07:26] or years at the end of the day the random forest usually performs best but the svm can
[07:33] also give very good results for data sets with small number of classes and well-balanced share of samples between
[07:40] classes classes when we look at the validation and accuracy assessment of our results it is very important to follow strict rules
[07:48] and best practices at the bottom of the slide you can find references to some papers that provide a
[07:55] good overview don't worry if the text is too small now you will be able to download the
[08:01] presentation and access all the links later later i will not go into depth on this topic as it would be for another very long
[08:09] presentation presentation however some points to keep in mind are that accuracy assessment should always be statistically rigorous transparent
[08:18] reproducible and provide similar results if repeated on the same data set the validation data set we use should
[08:27] always be independent from the training data set and rigorously quality controlled as any errors and biases in the validation data
[08:36] set will lead to degradation and inaccuracies in our accuracy assessment one thing to keep in mind is that the
[08:45] overall accuracy value can often be misleading misleading since one class can have high accuracy and many validation samples
[08:55] therefore skewing the overall accuracy value even if accuracy of other classes is very low we should use metrics like f score which
[09:05] can give us better overview of accuracy of each class so let's now talk about the algorithms specifically
[09:15] specifically we will start with the random forest random forest is one of the most well-known and used supervised machine
[09:25] learning algorithms like its name implies random forest consists of a large number of individual decision trees that operate as an ensemble therefore we
[09:37] call it an ensemble classifier each individual tree in the random forest forest spits out a class prediction and the
[09:47] class with the most votes becomes our model's prediction decision trees are very sensitive to the data they are trained on
[09:56] this means that even small changes to the training data set can result in significantly different tree structures
[10:05] random forest takes advantage of this by allowing each individual tree to randomly sample from the input data set
[10:13] with replacement resulting in different trees working with slightly different inputs this process is known as backing and makes the model more robust by
[10:25] creating less correlated trees which protect each other from individual errors errors another advantage of begging is the
[10:35] possibility to calculate the out of bag score which can be used to get an idea about the performance of the model
[10:43] already during the training phase so what do we mean when we say out of back back during the begging some of the training
[10:52] data rows are always left out of the sample given to a particular tree the performance of a given tree can be
[11:01] then checked by feeding it these rows that were not included in its original training sample this is done for all the trees and then
[11:11] the out-of-bag or oob score is computed as the number of correctly predicted rows from the out of that sample
[11:20] the opb however does not replace the need for validation with independent data set as the obb is calculated only
[11:28] using predictions by a subset of trees and not the entire model model now let's have a look at some parameters
[11:37] that we can use to influence our random forest model since as i have mentioned the random forest algorithm is an ensemble modeling
[11:49] technique it increases the generalization by creating a number of different kinds of trees with different depths and sizes
[11:59] the n estimators is the number of trees you want the algorithm to create generally larger number of trees will
[12:08] result in higher accuracy but it will also increase the computational cost in the image you can see that the
[12:16] increase in accuracy is not linear and at some point the improvement in accuracy will become negligible the optimal number of trees will then
[12:27] depend on the other parameters but also on the size of the training data set and the number of features
[12:36] for earth observation data classification purposes the number of 500 trees is often quoted in literature although studies exist that use also
[12:47] seventy hundred thousand or five thousand trees in python the optimal number of trees can be tested by using the out-of-back
[12:56] error estimate or oob when the random forests are trained on the same data set with increasing number
[13:03] of estimators and the oob for each model is plotted the disadvantage of this is that for large training data sets this can be
[13:12] very time demanding and computationally heavy the next parameter is the criterion or in another words the measure used to determine where or on
[13:22] what feature the tree has to be split at a tree node there are two main methods for this and
[13:30] these are the calculation of the gini impurity index or the entropy for example suppose that we are looking at classifying fruits and
[13:40] there are two parameters shape and color based on which the splitting of the tree has to be done
[13:47] the algorithm does the split using both features and then chooses the one which results in lower entropy or a lower genie
[13:56] impurity after the split the gini index has values inside the interval of 0 to 0.5 whereas the interval for the entropy is
[14:07] 0 to 1. while they are calculated differently there is very little factual difference or very little impact on the results of
[14:16] the random forest generally the gini index is used as a default setting since the entropy is more computationally complex and results
[14:27] in longer computation times usually again to decrease the computational cost not all features are tested at each node
[14:36] instead at every split the algorithm chooses some features randomly and the max features parameter determines how many features need to be
[14:45] selected selected for determining the split the default in scikit-learn library is value auto which sets the max features
[14:55] to the square root of the total number of available features another parameter is the maximum tree depth which is the measure of how much
[15:05] further the tree has to be expanded down to each node until we get to the leaf node or the
[15:11] final node generally in a tree-based algorithm the deeper the tree the more the chance that it overfits the data
[15:21] since random forests and samples several different trees together it is generally accepted to have drip trees as
[15:28] overfitting is unlikely apart from the maximum tree depth another way to control the depth of a tree is to specify the minimum number of
[15:38] elements or records that has to be present at each node to determine if the algorithm can stop splitting further
[15:48] for example if we set the min sample split to be 3 after the first split of the tree in the
[15:55] image there is only three records on the left node and even though the node is not pure it will not be split any
[16:02] further the final two parameters that i will discuss discuss are the bootstrap and the sample size i have already mentioned the bagging or
[16:16] bootstrapping which is a synonym and its advantages it is also possible to run the random forest without debugging or
[16:26] bootstrapping bootstrapping but if we do we will lose the main advantage of random forest and possibly create a model that is not robust
[16:36] when we are talking about begging it seems that we are selecting a subset of the training data however this is not
[16:43] necessarily always true we can choose a sample size of n which can be equal or smaller or even
[16:51] larger than the training data set size and then we randomly select this number of samples or any number of samples
[17:01] from our training data set however every time we sample a value we return or we can say keep it
[17:10] in the training data as well this means that some values can be selected multiple times not only in the samples for different
[17:20] trees trees but also in the same sample generally using the same sample size as the training data set size have been
[17:30] shown to improve accuracy however for very large data sets it is also more computationally demanding depending on the implementation or
[17:41] package that you are using there may be more parameters that you can optimize or not all the parameters named here may
[17:49] be available now we discussed what random forest is and how it works and what are the parameters we can optimize
[18:02] let's then run through a quick non-technical example in which we want to teach the algorithm to recognize two
[18:08] types of fruits bananas and oranges in real life this would of course be very easy and could be done with a
[18:16] single attribute or feature for example color or shape let's imagine though that there are oranges that can be yellow and bananas
[18:26] that can be round and thus creating a bit more confusion between the classes at the top of the slide are some
[18:35] parameters that we have set in our model we start with the first tree and randomly sample our training data set
[18:44] with replacement since since the bootstrap parameter is enabled and we will select the same number of samples as in our original data
[18:55] because the max samples is set to none which means that the same size as the original training data set
[19:02] should be selected then we randomly select three out of our four features since the max feature parameter is set
[19:11] to 3 and this can be for example color taste and size then we test all three of the features
[19:21] and select the one giving us the best separation separation meaning lowest gini index or entropy in this case
[19:30] it is the taste and we split the sample based on whether they are sweet or sour now on one side is already a clean split
[19:40] that contains only sour oranges however on the other side we still have a mixed sample we repeat the process on the mixed
[19:50] sample sample and this time the best separator is selected as shape and we have now reached a pure
[19:59] separation in all of our leaf or final nodes nodes because our model contains five trees we repeat the process from the random
[20:10] sample selection again for each of the remaining trees until our model is trained we can now estimate the out-of-back
[20:20] score score to see how our model performed during the training and finally we can also feed it
[20:28] a new observation for which we need to know the class or we can test it with an independent
[20:36] validation data set next we will talk about the support vector machine algorithm a support vector machine or svm is a
[20:48] discriminative classifier used for classification regression and detection of outliers its objective is to find a hyperplane in
[21:00] an n-dimensional space where n represents the number of features in our training data set we want to find a hyperplane
[21:10] such that it distinctly divides our data set points based on their class in two-dimensional space this hyperplane
[21:21] is a line so 2d line dividing a plane in two parts where each class lays on either side in three-dimensional space
[21:31] it is a plane however in reality data sets will usually have many more features than three and while we cannot draw such a plane it
[21:42] can be solved mathematically okay so far so good but how do we choose this hyperplane now you can see that to separate two classes
[21:53] of data points there are many possible hyperplanes hyperplanes that could be chosen our objective is to find a plane
[22:02] that has the maximum margin ie the maximum distance between data points of both classes maximizing the margin distance provides
[22:13] some reinforcement so that future data points can be classified with more confidence to maximize the margin distance
[22:23] we use the points close to the hyperplane hyperplane and we call them the support vectors thus the support vector machine
[22:32] now consider what if we had data as shown here in the image clearly there is no straight line that
[22:40] we can draw to separate the two classes so what can we do we can select point z
[22:47] apply a transformation and add one more dimension we can call z axis next we can plot the points along the z-axis based on
[23:00] their distance from point set or that origin origin now we can draw a line that clearly separates the data
[23:09] when we transform this line back to the original plane it maps to circular boundary these transformations are called kernels
[23:20] or kernel functions most svm implementations provide them already in build and their function is to take the input data and transform it
[23:32] into the required form so a hyperplane separating the classes can be fitted different svm algorithms use different
[23:41] types of kernel functions and between the functions usually available for kernel parameter are linear nonlinear polynomial radial basis function and sigmoid
[23:55] usually the rbf or radial basis function is set as default if the kernel is set to polynomial
[24:04] radial basis function or sigmoid we can further control the influence of each point on the position of the
[24:11] hyperplane by tuning parameter called gamma gamma the gamma parameter defines how far the influence of a single
[24:21] training example reaches with low values meaning far and high values meaning close in another words with low gamma points
[24:32] far away from the plausible separation line line are considered in the calculation for the separation line whereas high gamma means only the points
[24:43] close to the plausible line are considered in the calculation as mentioned in the beginning the algorithm is always trying to achieve
[24:53] the largest margin possible as this creates more robust separation between the classes however however if it is not regulated it can come at a
[25:04] great computational cost and result in overfitted algorithm which will perform perfectly on the training data set but not on other data sets such
[25:15] as the validation data set to control this we have available the regularization parameter given as c and the python's secret learn library
[25:26] the regularization value tells the svm optimization optimization how much we want to avoid misclassifying each training example
[25:36] it functions as a penalty for each misclassified point weight by the distance to the hyperplane if the penalty is large meaning high
[25:47] values of c the optimization will choose a smaller margin hyperplane if that hyperplane does a better job of getting all the
[25:56] training points classified correctly conversely a very small penalty will cause the optimizer to look for larger margin separating hyperplane
[26:08] even if that hyperplane misclassifies some points the final algorithm we will look at today is unsupervised clustering
[26:18] algorithm called k-means k-means is an iterative unsupervised algorithm that tries to partition the data set into k predefined distinct
[26:31] non-overlapping clusters where each data point belongs only to one group or cluster it tries to make the intra-cluster data
[26:41] points as similar as possible while also keeping the clusters as different or as far from one another as possible
[26:51] it assigns data points to a cluster by trying to minimize the sum of the squared distance between the data
[27:00] points and the centroid of that cluster the less variation we have within clusters the more homogeneous or similar
[27:09] the data points within the cluster are in the animation we can see the iterations of the algorithm
[27:17] trying to assign points to three classes first the centroids are selected randomly randomly and you can see the centroid of each
[27:26] cluster in the animation although unfortunately it has the same color as the points so it is not very well
[27:33] visible visible you can see that at every iteration the boundaries are redrawn and the centroid is moved
[27:42] as the iteration number increases the moves are smaller and smaller until there is no change in the position of
[27:49] the centroid and the assignment of the points to the cluster is no longer changing since clustering algorithms including
[27:59] k-means use distance based methods to determine the similarity between data points it is recommended to standardize the data to have
[28:08] a mean of 0 and standard deviation of 1 since almost always the features in any data set would have different units of
[28:17] measurement measurement such as for example age versus income now let's look at the parameters of the k-means algorithm
[28:27] firstly we need to provide the algorithm with the number of clusters that we expect in our data set
[28:34] standard literature suggests we use the l bone method to determine how many clusters we need however there are more than 30 indices
[28:43] and methods for identifying the optimal number of clusters and in reality this is only an additional guess
[28:52] now k-means is notoriously dependent on the centroid initialization due to the fact that it randomly assigns initial cluster centroids and then tries
[29:04] to group as many points as possible based on the points distance to the centroid it can get stuck in a local
[29:12] minimum minimum this in turn means we will not get the best result we can mitigate this if we know the
[29:20] approximate position of the centroids we can set them using the init parameter and improve the starting point
[29:30] if we don't provide the initial centroids or we don't know them we can use the next parameter which is
[29:36] number of initial centroid selections if set to 10 for example the algorithm will initialize the centroids 10 times
[29:46] and will pick the most converging value as the best fit for the starting iteration iteration the last parameter that i will mention
[29:56] is the random state this is setting the random seed and it is useful if we want to reproduce the
[30:04] exact same clusters over and over again we can set it to any number we want and just remember it when we want to
[30:13] reproduce the run okay okay so that was a lot of theoretical information information but i hope that now you have a good
[30:22] overview of how each of these algorithms work work let's then finally move to the demonstration part before we move to the jupiter notebook i
[30:33] will say a few words about the tools and satellite and training data that we will use use here you can see listed
[30:42] selected libraries used for machine learning in python the best well-known and also widely used is probably psychic learn which we will
[30:52] also use today it includes an easy integration with different machine learning programming libraries such as numpy or pandas
[31:02] and comes with the support of various algorithms such as classification regression clustering dimensionality reduction model selection and data
[31:12] preprocessing preprocessing then we have the tensorflow which is also a very popular library offered by google google with advanced functionality such as deep
[31:22] learning and neural networks finally i named the keras library which builds on top of tensorflow and extends it with additional features for
[31:32] machine learning and deep learning programming programming now this list is by no means exhaustive and you can find many more libraries
[31:41] used in python for machine learning now let's say a few words about our starting point for the demonstration
[31:50] i will start with already pre-processed sentinel 1 images as you have covered the pre-processing in the previous
[31:56] session session for sentinel 2 i will show you the pre-processing in snap before starting the jupiter notebook demo
[32:04] all the images have been acquired during the growing season between 1st of september 2018 and 1st of june 2019
[32:13] over our study area in central argentina in total our input stack contains 22 sentinel 1 images and 10 sentinel 2 images
[32:27] we have selected only cloud 3 sentinel 2 level 1 top of atmosphere reflectance images images as for our study period the level 2
[32:36] atmospherically corrected images were not yet available on operational basis to further limit the size of the final
[32:44] data set i have included only visible bands meaning bend 2 3 and 4 the near infrared band 8 and the 2 short
[32:53] wave infrared bands 11 and 12. the final stack contains 104 registered bands bands 60 for the sentinel 2
[33:05] and 44 for sentinel 1. below you can see the timeline of our images with sentinel 1 in red and
[33:14] sentinel 2 in green now the training and validation data that we will use for the demonstration are derived from the high resolution
[33:25] cropland and crop type map of argentina this map was produced by using random forest classification combining several seasonal indices
[33:37] from the whole year the summer and the winter with indices that describe temporal dynamics of the vegetation
[33:45] the country was divided into 14 agricultural zones and the classification of each zone was performed separately you can find more information about this
[33:56] data set in the paper reference at the bottom of the slide our study area lies in zone 10 which
[34:03] contains seven crop classes and a mast class which combines water bodies wetlands and urban areas this study area
[34:12] or agricultural area showed overall accuracy of 90 the original raster data of the crop map were kindly vectorized and prepared by
[34:23] laura dingle robertson from the agriculture and agri-food canada the preparation steps consisted of vectorization removal of very small
[34:34] polygons smaller than 5 hectares and removal of very large polygons then the overall number of polygons for
[34:43] the major classes was further reduced and finally the data set was split 70 30 to training and validation data
[34:53] usually these polygons would be used for the training of the classifiers classifiers unfortunately the number of pixels in
[35:01] these polygons was still too large for the purpose of this demonstration and would require too long training and
[35:09] training data extraction in such cases we have two available options either we can further reduce the number of polygons
[35:19] or we can randomly select specific number of points per class within our polygons polygons i have chosen the letter approach and
[35:29] extracted 1000 random points per class in our training data set and 200 points per class for the validation data set
[35:38] with the minimum distance of 10 meters between the points all the preparation was done using ugis i will not show the preparation of this
[35:49] data set today but i will provide you with a file detailing each step so let's now finally move to the jupiter
[35:58] lab for the processing and here we go i will be using a machine which is linux based
[36:11] based however any steps that i will show you today can be easily transferred to windows or mac
[36:17] the only difference will be in the paths used for the preparation or creation of the anaconda environment in which we
[36:26] will run our jupiter notebook first let me show you the input datasets i have the folder already opened here
[36:35] and my input data have already been downloaded from the copernicus open access app i have placed them into two folders i
[36:43] have the sentinel one input data which contains 22 sentinel 1 images and i have the sentinel 2 input data
[36:51] this folder contains 10 sentinel 2 level 1c images now i will not go into the preprocessing and corregistration of the sentinel 1
[37:03] images as you have covered this in part 3 of this webinar series but i will show you how to pre-process the sentinel 2
[37:10] images and how to co-register or collocate the sentinel 1 and sentinel 2 data sets to create the combined input
[37:18] data set that we will use today in our python notebook to do this we will use snap
[37:25] snap so let me just open it and let's first open one of our sentinel 2 images in snap we can easily see the structure
[37:41] of our product and we can also see all the available bands and we can for example create an rgb
[37:48] composite composite here i will create a simply a natural color rgb composite using bands 4 3 and
[37:55] 2. 2. and here we go sentinel 2 tiles are always of the size of 100 by 100 kilometers
[38:03] and the data are already resampled to a common grid so for any time series that you create
[38:09] from sentinel 2 data you can be sure that the pixels will be corresponding to each other now
[38:17] now this whole tile would be way too large for us to process in python especially because we are using very very large
[38:24] stack of sentinel 1 and sentence 2 data so of course we want to reduce the size both the number of bands and also in
[38:32] spatial extent we can of course run all the operators one by one in the graphic window or we can use the functionality of snap
[38:42] which is called graph builder create a graph and then apply it in batch processing to all our 10 images
[38:49] so let me create the graph that we will use for preprocessing our sentinel to images images let's go to tools and graph builder
[38:58] and here you can see that we only have two operators now to add an operator you can simply right
[39:04] click and then search for the operator that you wish the two operators that we will add will
[39:11] be resample and subset now we need to resample our data for the simpler reason that not all the bands in sentinel 2 are
[39:20] of the same pixel size we have the 10 meter bands which are the visible bands and the near infrared band
[39:28] 8 8 then we have the 20 meter bands which are the red edge bands and the short
[39:34] wave infrared bands and then we have the 60 meter bands which we call atmospheric bands which are for example band 1 and 9 and then
[39:42] 10. 10. in our further processing we will want to use the visible bands meaning the bands 2 3 and 4
[39:51] the wide near infrared band which is called band 8 and the shortwave infrared bands 11 and 12.
[40:00] 12. you can see that these bands of course have different pixel resolution we have 10 and 20 meters in our subset
[40:07] data set later so we need to resample them first so let's go to add and raster and geometric
[40:17] and resemble and we can simply connect it to the read operator by dragging the arrow from the
[40:23] read operator to resample now we also want to subset our data as i've mentioned already and we can again
[40:30] add it by going to raster geometric and subset subset and again connect them together at this point we can either set our
[40:41] parameters here in the tabs below and and simply run the graph for this one product that we have entered or that we
[40:49] have loaded into snap or we can save this graph and use it in the batch processing and then we can
[40:56] also edit the parameters later in the batch processing so so let me save it simply calling it
[41:09] s2 processing and now i will just close the graph and i will go back to tools and open the
[41:17] batch processing menu here we can load all the products that we wish to process so let me load them first by going to
[41:27] add add and then navigating to the sentinel 2 folder where i have the zipped sentinel 2 files i select all of them and click
[41:36] ok ok they will be loaded here into the menu and we also have some attributes for each of them for example the date of
[41:43] acquisition acquisition then i can load a graph that i have just created so s2 processing and you can now see that there is
[41:54] additional tabs appearing here next to the input output parameters tab these correspond to the operators that we have included in our graph
[42:05] one more thing that i will change here in the input output parameters tab is to deselect the keep source product name
[42:13] now the keep source product name will cause that our output will have the same name as the input
[42:20] this can be okay however in some cases it can cause confusion and therefore i will just deselect it which will cause the
[42:28] operator to simply add a suffix or a prefix for every operator which we have applied to the name of our input data
[42:37] then we will go one by one between the tabs and set our parameters so the first tab is the resample tab
[42:45] now here we have three options we can resample our data by a reference band from the source product
[42:52] or by target width and height in pixels or by pixel resolution so for example if our desired pixel
[43:00] resolution is 100 meters we don't have to calculate how many pixels in width and height this would be
[43:06] but we can simply set it here on the other hand if we want the same resolution as another band that is
[43:14] already present in our product we can simply use the option one which we will use here and select the specific band we want to
[43:22] use use in this case i will use one of the visible bands which for example can be
[43:27] the band 2 or the blue band which have 10 meter resolution the next step is the subset
[43:36] in subset we have again two options we can subset our product based on the bands that it will include and we can
[43:43] also subset it spatially for the spatial subset we have an option to use the pixel coordinates or
[43:51] geographic coordinates pixel coordinates may appear simpler but if you're using time series or doing any kind of batch processing i would
[44:01] always recommend geographic coordinates as the pixel coordinates between different images can be slightly different different and it will then cause shifts in your
[44:11] data data first though let's select the bands that we wish to use so i've already mentioned that we will be using the visible bands
[44:19] so 2 3 and 4 the wide near infrared band band 8 and the shortwave infrared bands 11 and 12.
[44:30] we will also use the geographic coordinates coordinates so of course especially if you are using the data in further processing you may
[44:38] want to have specific study area that you're looking at and that can be easily entered here below
[44:46] below in a well-known text format in a vgs lat long projection if you do not have such a polygon you can also
[44:54] select the area manually simply by zooming in and we can see this is the outline of our footprint of our input product and i
[45:04] can simply draw a polygon over my perceived study area if i now change between tabs you will see that all of the sudden this
[45:17] field here is populated and it is populated with the polygon corresponding to this little polygon here then i can finally go to the right tab
[45:28] and here i can set the directory into which i want to save our data and i can also set the format now you
[45:37] can choose from many different formats but i would always suggest working with the beam dim format which is the default
[45:44] snap format as long as you plan to stay in snap and only convert for example to geotiff once you're planning to go out
[45:53] of snap into a different software or for example to python there is also the option to change the
[46:01] name however i do not recommend it as this name here corresponds only to the first data set in our input output
[46:09] parameters parameters so the name that you change here will only be applied to the first data set
[46:15] and all the others will default back to the same format as shown here so now if i wanted to process all our 10
[46:23] products i can simply click run and wait for the processing to complete this does not take very long because we are using
[46:30] very few operators and they are very simple simple however i will not run the processing now since i already have the data
[46:37] processed processed so let me now close the window and open one of the processed images the bmd map format always consists of
[46:56] two different files one is a folder and then we have the header file which is called dot dim
[47:03] and this is the one that we always want to load into snap and here we go we can have a look at the structure and
[47:12] if we go to bands you can see that now we have only six bands present here and
[47:16] these are the bands that we wish to use in our further processing we can also create an rgb composite
[47:27] and here we can see our spatial subset finally before we move on to python we want to also collocate all our processed
[47:35] sentinel 2 images and all our pre-processed sentinel one images in this case we already have the sentinel one co-registered stack
[47:44] prepared prepared and and if you have followed the part three of this series you remember that we have there used the registration
[47:54] tool tool now the core registration tool unfortunately does not work well with sentinel 2 products and therefore we
[48:01] have to use a different tool this tool is called collocation and it's less accurate however if our sentinel 1
[48:10] products have been terrain corrected and projected into a map projection it should still give us high enough
[48:17] accuracy in the collocation to do this we will simply go to raster raster geometric operations and collocation
[48:26] here we will choose the master and the slave products so the master here will be the first pre-processed sentinel 2
[48:34] product we have loaded it already into snap snap and the slaves will be other sentinel 2 pre-processed products and this sentinel
[48:43] one stack to load them we simply go to plus and then add product files and then i go to sentinel to processing
[48:52] where i have saved my pre-processed sentiment to data and i select all except for the first one
[48:59] again i'm selecting the dim files and click select products then i will add the sentinel one stack
[49:08] again by add product files and i have saved the sentinel ones tag here in the processing folder and it's
[49:16] in tiff format not in beam the map however this is not important we can stack different formats together that's
[49:23] not an issue so let's select it and now you can see that all the products products are loaded
[49:34] and we can choose a name for our stack which will be s1 s2 stack and we want to save it as a geotiff so
[49:46] this will be the input to our processing in python beam the map as i said is very
[49:51] good while you are still in snap but there is very few softwares or languages or packages for
[49:58] python for example which can read it efficiently efficiently for this reason we will change it to geotiff
[50:07] and we will leave the home directory as the processing directory and the final option that we can choose
[50:13] is to rename the master and slave components components now the name of the band will always be
[50:19] the same as the original plus a specific suffix and for the master this is just letter m and for the slave this is the
[50:27] letter s plus the number of the slave i will leave them as they are by default i
[50:33] will not run this step now because again it's a relatively large data set that we are preparing remember it's 104 bands
[50:40] and it would take relatively long time to write i have already prepared it up front so we can directly start with the
[50:47] processing in python so let me now close and let me just quickly show you the stack and here we go
[50:58] and we can see that it has all our desired bands so six bands for each of the sentinel two products and two bands
[51:05] for each of the sentinel 1 products and now let's move on to the jupiter notebook notebook first i will close snap
[51:13] and this is because the processing that we will be doing in python is very computationally demanding you can see
[51:19] that our data set is huge and snap also uses quite a lot of memory to run and it
[51:24] may cause our kernel to crash later so let me just close snap and let's now go to the aux data folder
[51:32] here here where i have saved the notebook as well as the instructions on how to install the conda environment that we will be
[51:40] using today now i will not go into the installation here but you can find all the information in this install
[51:47] instructions file that will be provided to you after the webinar once you create the environment you can
[51:54] directly run the jupiter lab or if in between creating the environment and running the notebook you have closed the
[52:02] command line you can simply reopen it in the folder where your jupyter notebook is saved or navigate in the command line to that
[52:12] folder folder and then we have to activate the environment environment do this we simply type conda activate
[52:21] and and underscore py2 this is the name of the environment environment and it is given in the environment file
[52:31] that we have here then we can click enter and you can now see that from base my environment changed into
[52:38] npy2 npy2 to open jupiter lab which is installed in my environment i can simply type [Music] [Music] jupiter lab
[52:49] and press enter the jupiter lab will open in a browser and it will directly open in the folder
[52:59] where i have run it from we can simply just double click on the jupiter notebook that we wish to open and here we go
[53:13] in the beginning of the notebook i have included some information such as for example the tutorial for python the
[53:20] tutorial for jupiter notebook and the jupiter notebook documentation i will not go through these here now or
[53:28] through the text you can read it later and and now let's move on to the exercise so the exercise today is divided to
[53:37] following sections we will first load the python packages then we will set the different user input data
[53:45] we will load and visualize our input data data then we will create the training and validation data sets
[53:53] then we will run the supervised classification with random forest supervised classification with svm and unsupervised clustering with k-means
[54:04] so let's start to run a cell you simply select it and then press ctrl and enter now some steps that i will show you here
[54:13] in this notebook take quite a long time to process so do not panic when you're repeating this exercise some code cells depending
[54:21] on the machine that you're running them on may take up to hour or two hours to run you can limit this by using a
[54:29] stronger machine or for example by limiting the number of images that we include in our original stack
[54:38] stack so let's start and let's run our first code cell where we will import our python packages i have mentioned some of
[54:46] the machine learning packages in the presentation however here of course we are using many more more we are using the scientific computing
[54:55] package or numpy we are using the matplotlib which serves for visualization of graphs and images we are also using the pandas which
[55:06] serves for data analysis and manipulation manipulation the geopandas which extends the data types used by pandas to allow spatial
[55:15] operations on geometric types then we will also use the snappy which is a python interface for snap
[55:22] then we will use the earth pi which we use to plot and work with spatial raster and vector data using
[55:29] open source tools and finally we will also use the ra stereo which reads and writes raster formats
[55:37] and provides python appy based on numpy and dimensional arrays and geoisome so let me run the code cell
[55:44] and load all our packages next we will move on to the user input data data so here we want to specify
[55:53] the input data so the stack that we have just created as well as the training and validation
[55:59] points and we will provide these as paths to the data so our training and validation points are shape files or s
[56:07] reshape files and as i've mentioned in the presentation the training points consist of 1000 points per class
[56:14] randomly sampled in the training polygons polygons and the validation points consist again of a point data file
[56:21] consisting of 200 points per class again randomly sampled in our validation data polygons finally i also include a list with the
[56:32] class names of the classes that are present in our study area and in our training and validation data since in the training
[56:40] and validation data they are represented only as number and they do not have specific labels okay so let's run this cell again with
[56:49] ctrl enter and let's move on to creating a custom color map for each of our classes classes now this is not strictly necessary you
[56:58] can choose one of the color maps that are available in math bullet lip but i chose here to have a color map
[57:05] which is very similar to the color map used in the original high resolution crop type map that we have used as our
[57:11] training data set here simply we create first a dictionary with specific colors assigned to specific crop type so we have eight
[57:22] classes in our data set and for each class i assign a color that consists of rgb values
[57:29] the last value is transparency so we don't need to use it we just simply use 255. 255. here in comments you can see which color
[57:38] corresponds to which class in the next step we convert our eight bit values into a float in the range of
[57:46] zero to one so simply we just divide each of these values by two hundred and fifty-five this is simply necessary for matplotlib
[57:55] to understand the values and in the next step we simply create a matplotlib color map from the list of
[58:01] colors and call it classification so let's now run this cell ctrl enter and there we go every time you run a cell you will see
[58:11] that here in the brackets a number will appear which is the number of order that you have run the cells in so for example
[58:18] the cell will be 4 this will be 5 and once we run the next one it will be 6.
[58:24] now we will move to the next chapter which is to load and visualize the input data data we will load the input data into a raw
[58:32] stereo data set and this is the first cell here so we have the variable that contains the path
[58:39] to our geotiff stack and we will simply call rest area open to load it into memory the next step
[58:47] creates a list of band names and it is the only step in our notebook that uses the snappy package and we can again
[58:55] click click ctrl enter and the next step finally is the visualization visualization so let me click into the cell to
[59:04] highlight it and here we will read all bands of the data set into three-dimensional array stack by using
[59:11] the source which is the name of the loaded rasterial product and then read and we will assign it to
[59:19] variable stack here you will see the stack shape which will be the number of bands and then the row and
[59:27] height of each of them and then we will use the earth pi package to visualize the rgb composite
[59:33] of our first sentinel 2 image and also the rgb composite of our first sentinel 1 image for sentinel 1 this is
[59:41] going to be the combination of polarization vv vh and the ratio between vb and vh now here we simply create a figure which
[59:51] will have two super plots and in the first subplot we call the earth pi plot rgb we assign to the array
[1:00:01] stack the variable stack where we have loaded our data set and then we will call the bands 2 1 and
[1:00:08] 0. 0. so this corresponds to the first product and to the first three band bands of this product
[1:00:16] it is a little bit more complicated for sentinel one since we need to first calculate the ratio of two bands
[1:00:23] now you can also here see that i'm calling ben's 60 and 61 here in the stack stack and this is because this is the position
[1:00:33] at which our sentinel 1 images start so remember we have 60 bands bands of sentinel 2 in our stack and then 44
[1:00:43] bands of our sentinel one so 60 is the bh band of the first century one product 61 is the vv band of
[1:00:52] the first product and then i want to calculate the ratio unfortunately we cannot feed these just simply one by one to the earth pie plot
[1:01:02] we have to stack them again into an array stack so that is what i'm creating here this is array stack
[1:01:08] and then i can call the stack stack s1 and i call it here in the rgb plot and
[1:01:14] again assign the bands to the rgb here so let's again run and here we go and here at the top you can see the
[1:01:26] shape of the stack that we have now loaded it has 104 bands and each band has has the width of 2001
[1:01:35] values and the height of 2066 values and if we scroll down we can now see an rgb composite of our first sentinel 2
[1:01:45] image and rgb composite of our first sentinel 1 image in the next section we will create our
[1:01:58] training and validation data sets the first part here is is what i like to call a magic code and
[1:02:07] it's a piece of code that simply creates and copy of our input raster data set and saves it in a memory file
[1:02:14] there should be no reason to run this piece of code in this step since the same can be achieved or we
[1:02:21] have done already by the opening of the source image in ra stereo however however for some reason this step decreases the
[1:02:31] time of the run for the next steps of extracting training and validation data sets from approximately 2 hours without
[1:02:39] running it to approximately 10 seconds with creating the in-memory copy i cannot explain this but perhaps some
[1:02:48] of you know the reason for this however i include this piece of code here as it significantly speeds up our
[1:02:56] processing let me then run this piece and click enter and basically what this does as i've already mentioned is reads the
[1:03:07] bands of the original raster file which we have opened in the stereo then it copies also the profile meaning
[1:03:15] the properties and drivers related to this file and then it creates a file in memory with the same profile
[1:03:24] and writes each of the bands of the original file into this new file and then keeps the file open
[1:03:33] so let's now move on to the next step which is the extraction of the training data set using this file or memory file
[1:03:41] that we have just now created what do we do here we first load our training points so the
[1:03:49] shape file containing the training points that we have generated this file contains three attributes in the attribute table if you open it for
[1:03:58] example in qgis and those are grid code which is the class number then utme and utmn these are the coordinates
[1:04:07] in the vgs 84 utm zone 20 south projection projection which is the same exact projection as our
[1:04:17] our input data set i have not mentioned this before but it is vitally important for all our data
[1:04:25] sets the stack data set as well as the training and validation point data sets to be in the same geometry
[1:04:33] there is ways how you can fix the geometry or fix the projection in python but i am not addressing them here so if
[1:04:40] you run this code all your of your input data have to be in the same projection finally the last column is geometry
[1:04:49] which contains again the geometry of the point point in the next step we simply index the points that we have loaded and then we
[1:04:58] use these columns the utm e and udmn to create a coordinate list which basically has the form of list with x and y
[1:05:07] coordinates for each of the points then we will add a new column into our data frame which we have created here
[1:05:15] in geopandas and this column will be called raster value value now for each of the coordinate pairs
[1:05:23] that we have saved in the chords list we will go into our data set that we have created right here
[1:05:31] into our memory data set and we will sample each band at these specific coordinates in this way we
[1:05:38] extract the values of all of the bands for all of the training points this means that for each point in our
[1:05:47] data set we will have 104 band values however here we extracted all of them into a single column in our data frame
[1:05:57] in the next step we unpack this single column that for each point contains a list of these values
[1:06:04] so that the values are now in a separate columns columns we will use for this the band names
[1:06:13] now we will create a column for each of these bands use this name of the band as a name of the
[1:06:20] column and unwrap the list of our values so that for each column we have one value corresponding to that specific
[1:06:28] band band finally we can now remove the raster value column because we no longer need it it in the next part
[1:06:36] we also choose to resample or replace some values in our grid code which remember is the class number
[1:06:44] now the classes that we have in our training data have numbers 0 1 2 3 4 and
[1:06:50] then 7 8 and 15. for ease of visualization later we will simply reclassify the last three values
[1:07:00] so 7 8 and 15 to 5 6 and 7 so the values are basically consecutive you can see it
[1:07:09] right here so this is our original class numbers and this will be our new class numbers and then finally we will save our
[1:07:18] training point data set or training data set into a csv just in case we need to reuse it later and we don't want to
[1:07:25] extract it again it will simply be saved into the same folder as the jupyter notebook and then we visualize the first five
[1:07:35] lines of the data frame so let's now run again ctrl enter and here we go and you can now see that we have a new
[1:07:45] file created here and we also have the first five rows visualized the full data set however is 108 columns
[1:07:53] so of course it's the 104 bands plus the four columns that we already had in our data set
[1:07:59] and here we have five rows but in reality it contains eight thousand rows thousand points for every class and
[1:08:08] eight classes and you can also see some of the values for the bands so for the sentinel 2 data the values
[1:08:16] are usually integers around 1000 to 2000 and then we have also the values for the sigma in the sentinel 1 data which on
[1:08:25] other hand are very low values this difference in the values is not really important for example for random forest
[1:08:32] or svm but it is important for the clustering algorithm and we will in the future need to normalize the data but i
[1:08:39] will talk about that later now we can check whether the resampling or reclassification of our values run
[1:08:48] correctly correctly and we will simply just look at the unique values that are now present in our class
[1:08:54] numbers next next i thought it would be interesting to plot the class profiles over our data set
[1:09:06] set from september 2018 to june 2019 we can calculate a mean value for each of the classes in each band
[1:09:17] by running this simple group by and then grid code so group by class and then calculating mean
[1:09:25] then we create a figure and we also do not plot each of the incidences of each band separately but we will just group
[1:09:34] them by the band number or by the polarization instead each of the incidences of for example band two will be one point on
[1:09:45] the x axis meaning that basically it creates a timeline for us okay so we loop over the band names here
[1:09:57] and for each we create a figure and for each figure we extract the band values that correspond to for example
[1:10:05] band two so remember we have ten times sentient two so ten times band two and then we plot
[1:10:12] the mean values over the time series for each class okay so let's again run the code and here we go we have also added a
[1:10:24] legend with the same color map that we have defined above and we can now see that the mast
[1:10:31] class for example is black and for example the mace is blue here and so on and so on so you can
[1:10:39] investigate each of these graphs and we can also see that in each band we of course have a slightly different
[1:10:44] temporal profile now the profiles here are of course a little bit deformed since we are plotting them in equal intervals however
[1:10:54] as you remember from the presentation our data either sentinel 2 or sentinel 1 have not actually been acquired in equal
[1:11:02] intervals over our study period however at least the graphs give us an overview of the separability of the
[1:11:09] classes in each of the bands interestingly for example if we look at the bh and vb polarizations you can see
[1:11:19] that in sar many of the classes have quite similar profiles but for example the natural woody vegetation has values that are
[1:11:29] significantly higher than for all the other classes i will not go too much into detail here but you can certainly investigate this
[1:11:36] later and see how it ties to your data set finally we have the training data set now created and extracted
[1:11:49] however this is still not in the format that we can use later in the classification classification what we need to do now is split the data
[1:11:58] set into y and x values the y values of course are the class numbers numbers and the x values contain the features
[1:12:08] that we will feed into the random forest or svm for example so here in the first line we create a
[1:12:14] list of labels for our training points and below we create x data set containing the feature columns remember
[1:12:23] features correspond to bands so we have 104 bands but i thought also it might be interesting to see the difference
[1:12:31] between classifying only sentinel 1 data only sentinel 2 data and all sentinel 1 and sentinel 2 data we will basically
[1:12:39] use our list of bands to separate between which features belong to sentinel 1 which features belong to
[1:12:46] sentinel 2 and then use all of them for the final one i have not created three different
[1:12:54] variables instead i have created a list into which three different variables are saved saved so we have a list x and then to the list
[1:13:03] i append the data set which only contains the training columns with sentinel1 data then second in the list
[1:13:11] is the data set that contains only the sentinel 2 data and third is the complete set of features of all of our
[1:13:20] 104 bands for all of the thousand points then just to save some space or save some memory i delete the original train
[1:13:30] pts data set so the original training data set that we have used for example for visualization of these graphs
[1:13:37] and i also delete the coordinate data set since we will not need them anymore so let me run this code cell again here
[1:13:46] we go and finally here in the last part of the training data extraction we will just check the
[1:13:54] shapes of each of the parts in our x dataset list and here we go so the training data sizes are sentinel
[1:14:03] stack 8 000 rows and 44 columns or 44 features features sentinel 2 stack is 8 000 rows all of our training points
[1:14:13] and 60 bands or 60 features and then sentinel one and sent into 8000 rows and 104 features
[1:14:24] so our training data are ready now and we will extract our validation data set set i will not go again to the same detail
[1:14:32] since the process is exactly the same the only thing that is different is here that we are using the validation
[1:14:39] point so the 200 points per class instead of the training points otherwise the steps are identical to the
[1:14:46] extraction of the training data so let me just quickly run all of them here we go then we will split our data set again
[1:14:57] exactly the same we now have list which is called x valid and we append the three data sets for unlisted in one only
[1:15:05] sentinel two and both sent in one and sentinel two so so let's again run it and finally let's check the shapes
[1:15:16] here we go and now the sizes so i mentioned that we have 200 points per class but actually
[1:15:23] for some classes there was actually not enough polygons in the validation data we could sample and therefore for some classes we have
[1:15:31] slightly less points than for others and with this we are now to the part of the actual classification our training
[1:15:40] and validation data are prepared and we can move on to the random forest so here i again include some information
[1:15:47] about random forest it is more or less the same that i've already mentioned in the presentation but in case you are interested you can
[1:15:54] find it here as i've already mentioned we use the sickit learn library for our machine learning operations and machine learning
[1:16:04] algorithms algorithms and i always include also the default parameters and shape of the command so here you can find the list of all the
[1:16:15] default parameters some of them i have mentioned during the presentation but we will only use the number of estimators
[1:16:22] and the oob or out-of-back score so in the next cell we will train our classifier classifier first we have to import the classifier
[1:16:34] from sklearn or scikit-learn and symbol and the classifier of course is random forest classifier since we want to train the classifier on
[1:16:44] three different data sets remember only sentinel 1 sentinel 2 and the combined data set i create again a list into
[1:16:52] which the trained models will be saved then i loop over the three feature data sets that we have and fit each into a
[1:17:02] random forest model and then save this model into the list here i call the random forest instance
[1:17:11] and i ask it to create 300 trees and i also set the out-of-bag score calculation to true otherwise we will
[1:17:19] not get the out-of-back score after the training i also include here the parameter maximum features this is just because i
[1:17:28] was previously testing this parameter but you can see that it's actually set to the default value of auto here we
[1:17:36] have it here in the next step once we create the instance of the random forest here we
[1:17:43] will fit it to the values so we will feed it one of the input data sets depending on where the loop is and then
[1:17:52] we feed it the class labels so let's now run it and the output will be the trained models of course and
[1:17:58] printed out of back accuracy below the cell for each of the data sets and here we go and we can now see that
[1:18:11] the accuracy or out-of-back accuracy for our sentinel 1 stack during the training was 81 sorry 87.6 for the sentinel 2 stack it is higher it
[1:18:24] is is 90.5 percent approximately and its highest for the stack approximately 91.3 now this is the out-of-back accuracy but
[1:18:36] as i have mentioned during the presentation presentation the model always needs the independent validation because the predictions made
[1:18:43] for the out-of-back accuracy have not come from all the trees but rather only from a subset of the trees
[1:18:52] so that is our next step here where we will validate our model using an independent validation data set that
[1:18:59] we have again prepared above so so these validation points as i've mentioned before were extracted from a
[1:19:07] completely different polygons than our training data but the polygons were sampled in the same way randomly sampled to include
[1:19:16] maximum 200 points per class depending on the size of the polygons that we had here we can import the classification
[1:19:24] report which is a function of the sk-learn or scikit-learn metrics and we will use it to build our report
[1:19:33] so here we create again three labels for each of our stacks just to have clear distinction between the different
[1:19:41] classification reports and for all of our stacks we take our trained models and we use them to
[1:19:49] predict the classes for our validation feature set and then we simply print the label that we have here and the
[1:19:57] classification report for each of these in the classification report you need to supply the y valid which contains the
[1:20:07] actual classes taking from our validation points and then our predicted classes that our trained algorithms have provided here
[1:20:16] finally we can also provide the class names if we don't only want to use the numbers numbers so
[1:20:23] so let's run it and here we go it's a very short process and we can now see here for example for
[1:20:32] sentinel one this is the classification report for sentinel one and we have for each class the precision
[1:20:40] the recall and the f1 score for us the most important of course the is the f1 score or accuracy per class
[1:20:49] and also the overall accuracy as well as the number of points that we have for each class in our validation data set
[1:20:59] you can see that for example for winter crop maize we had very few points because we had very few polygons in our
[1:21:06] study area that actually had this crop we seem to have very high accuracy for the natural woody vegetation
[1:21:14] 94 94 and also for the mast class which consists of the water bodies wetlands and urban areas
[1:21:23] and also for example for the soybean crop for the other classes we have various levels of accuracy for some it
[1:21:31] is very bad for example for the maze but this can also be due to the fact that
[1:21:36] again we have very few original polygons and if this one polygon for example that we have in our validation data is
[1:21:44] misclassified misclassified then then of course we will have a low accuracy accuracy this is not an excuse we should always
[1:21:53] have our validation data as well as training data very highly quality controlled as i've mentioned but remember here also our training data
[1:22:02] set is not actual field data which would be the most reliable and most precise and most controllable but rather it is already
[1:22:12] processed and classified data also using random forest so any errors that were in the original classification will simply propagate
[1:22:21] into our classification now which can also be responsible for relatively low overall accuracy for sentinels to stack the accuracy is
[1:22:31] actually very similar slightly lower here but this can be due to the fact that we have fewer images
[1:22:37] and this images are not fitting well with the crucial times in the crop growth cycle which would then
[1:22:43] allow us to differentiate them for the stack we have the highest accuracy still quite low but we have the
[1:22:51] highest accuracy for the combined stack of sentinel 1 and sentinel 2. now to improve the accuracy we can try to
[1:22:59] change the number of trees for example increase the number of trees or change some other parameters but mostly i
[1:23:06] believe in this case it is caused by the training and validation data set that would have to be more quality controlled
[1:23:14] in order to give us better results now we have our trained model we know what the accuracy or overall accuracy of
[1:23:21] the model is and what the accuracy of the classes is and now we can use this model if we are
[1:23:27] happy with it to classify the rest of the image before we feed our image data set to the
[1:23:33] model model we need to take the full image and reshape it into 2d array in which each
[1:23:39] band will be basically a single line of numbers numbers this is necessary for the classification and we cannot avoid it you also may need
[1:23:48] to reduce the size of our study area at this step since this step takes a lot of
[1:23:54] memory memory and it takes quite a long time and you can at this point decrease the size of our data set by simply
[1:24:03] subsetting it to a specific smaller area here we will re-read our data set into a stack of numpy arrays again i have done
[1:24:13] this step before but just to remind you we read it into the same variable so it will not consume more memory
[1:24:20] and we print the shape so we see the shape of the original product then we use reshape as image function
[1:24:29] which will reshape the stack in a way that we first have have the number of rows then number of columns and then the
[1:24:35] number of bands finally we can use the first two so rows and columns to create a 2d array
[1:24:46] since we want to do exactly the same as we have done before so classify classify our our data using the different subsets so send
[1:24:56] in 1 sentinel 2 and all of the bands we have to select the specific subsets that we want to use for the
[1:25:04] classification classification so the first one is of course the stack of sentinel 1 bands here i again use the bands list to find
[1:25:15] the index number at which our sentinel 1 bands start now of course we now know that this is at 60.
[1:25:24] we have discussed this in the beginning when we were visualizing the data but for example if in snap you decrease the
[1:25:30] number of images that you stack in your stacked input data set this can change therefore this approach
[1:25:38] looking at the band name we can find the index where the band values start for this i use the sigma naught because this
[1:25:46] is is a pattern that is contained in the name of our bands and for the sentinel 2 i use the pattern
[1:25:54] b again we have b 2 b3 and so on for the name of the bands then i create three separate data sets
[1:26:04] which are the ones that are the input for the model and are reshaped into the 2-day array
[1:26:12] what happens now is that we can feed these input data sets into the classification classification first let me run this reshape part so
[1:26:23] reshaped cell and here we go now we can start with the image classification classification we have three now here the sentinel one
[1:26:36] classification centennial two classification and the combined stack classification classification and for each stack we load the model so
[1:26:45] the trained model corresponding to that one stack then we use this the model to predict the class input that we have created
[1:26:54] above above and finally we reshape it back into an image form now these three take very long time to
[1:27:02] run run so i have shortened it here but do not be alarmed when you're repeating this exercise if this can take approximately
[1:27:09] 30 minutes per cell so let me now run and i will run all of them them here we go
[1:27:17] and we now have to wait a little bit and here we go the classification of our images has completed now as i said i
[1:27:31] speed it up significantly so on a normal machine it can take somewhere between 20 to 30 minutes
[1:27:38] and we can now visualize our results and we start with creating a figure where we will have three super plots so
[1:27:46] for each data set we have one subplot then we set a title for each and finally here we also for each
[1:27:55] visualize the result of the classification classification and we assigned the color map that we have created in the
[1:28:03] beginning of this script then we also attach a legend and we can visualize our data so so ctrl enter
[1:28:13] and here we go we now have three classification images they actually look very similar the accuracies were also very similar so we
[1:28:22] expect the results to be more or less the same we of course have some differences in values for example between the sentinel
[1:28:32] 1 classification and the sentinel 2 classification classification for the simple reason that sentinel 1 has the underlying resolution of 20 by
[1:28:42] 22 meters even though it's provided with a pixel size of 10 meters the same as sentinel 2 data
[1:28:49] now consideration also has to be given to the inherent speckle which is present in all radar images and even though we
[1:28:56] have applied speckle filter there is going to be still some residual random pixels around that are then classified
[1:29:04] into the wrong classes for example you can see that compared to the sentinel 1 the sentinel 2 classification
[1:29:11] appears a little bit more cleaner the polygons are a little bit more uniform or homogeneous and for the combined
[1:29:18] classification this result actually appears to be the best and here we have the legend below now here the images are quite small and
[1:29:29] they are only visualizations we cannot do much with them so let's us now save these images into
[1:29:36] geotiff file and we do that again with rasterio and i will simply save each of the classifications as a band in a new image
[1:29:46] so the geotiff is going to have the same profile or properties as our original input image then the only thing that we
[1:29:54] change is the data type so we no longer need float data type we can simply use 8-bit unsigned integer
[1:30:01] we also don't have 104 bands anymore but we have three so for each classification one one and we then open this new data set
[1:30:12] techno stereo we save it as rfclassification.tiff rfclassification.tiff open it for writing and then we write each of the bands we have the band
[1:30:21] numbers here and we have the specific data that we want to write and we write it as a unsigned integer
[1:30:29] so let me run it and here we go and you see it's very quick and here we have our data set and
[1:30:36] now we are done with a random forest and we can move on to the support vector machine
[1:30:44] machine again i have few words here about the support vector machine as well as the function that we use again from the
[1:30:51] scikit-learn library and we have also here the default values in this case i will use all the default
[1:31:00] values only but of course when you are trying you can change the values for example for the regularization parameter
[1:31:08] c c to see how much it will change your classification classification first same as for the random forest we
[1:31:16] need to train our classifier again we will loop over our three input data sets sentinel 1 sentinel 2 and
[1:31:24] combine stack and we will train the svm model for each and append it to a list of models so
[1:31:34] let's do this okay our model is now trained you can see that here we do not have any option
[1:31:43] of out of back score unfortunately svm due to its concept already does not allow for this but we can run the model validation with
[1:31:53] our validation data same as we have done for the random forest i will not go through it again it's
[1:32:01] basically the same piece of code only now we are using the svm models trained in the previous cell
[1:32:08] so let's run it and here we go so we can see now that for sentinel one only
[1:32:18] only again we have very low accuracy for some classes and very high accuracy for some others others and the overall accuracy is about 60
[1:32:30] for sentinel 2 this is already significantly higher 70 and we also have higher accuracy in some of the classes that are giving us a real
[1:32:39] problem problem only with sentinel one this can be due to various factors i have already discussed them in the
[1:32:47] random forest but it seems that svm is doing better job in classifying our data our data set in this case
[1:32:55] now if we look at the accuracy of the combined stack we have overall value that is even
[1:33:00] slightly higher than just for sentinel 2. 2. although the actual class accuracies are somewhat little more erratic i would say
[1:33:10] because for example we have some classes with lower accuracy than for only sentinel 2 and some classes with slightly higher accuracy
[1:33:18] than only for sentinel 2. okay so if we are now happy with our model we can do the same as we have done
[1:33:25] for the random forest and that is to classify the rest of our image and again we are going to be using only the
[1:33:32] sentinel1 stack only the sentinel 2 stack and both combined again this step here takes a significant amount of time
[1:33:42] even longer than the classification in random forest it can take approximately an hour for each of these cells to run
[1:33:50] so do not be alarmed if that happens to you you just have to let it run i will run all the three cells they will
[1:33:57] run consecutively but at least i do not need to pay attention to it all the time and i can just wait for it to be
[1:34:03] processed processed as i said here of course for the purposes of this demonstration we speed it up significantly
[1:34:13] and here we go so the classification of our image for all the three subsets is finished and we
[1:34:21] can now visualize the results again the code is the same as for the random forest simply we create three
[1:34:28] subplots each for one of the classifications classifications so let me run this step as well and again we apply the same color map
[1:34:41] that we have created above and that we have used for the random forest results as well here we can see a little bit more the
[1:34:51] fragmentation due to the sar speckle for example we can see here here the values are much more fragmented than
[1:35:01] they are in the central 2 or in the combined combined classification classification so in the end the combined
[1:35:08] classification actually gives us the cleanest view on our image most of the fields are actually clean classified which in the
[1:35:16] end on crop classification of this scale is always important finally we will write again the output into a tiff file we can visualize then
[1:35:27] later in snap or qgis so let me run this part as well and we can see that now a new tiff file
[1:35:36] has been added here into my folder the final classification or in this case actually clustering is going to be run
[1:35:44] with the k-means unsupervised method before we can run the k-means clustering we should first normalize or rather
[1:35:53] standardize our data set now normalizing usually means scaling our data to bring the values into the range between 0 and 1 which is
[1:36:03] done by subtracting the minimum value from every value and then dividing the result by the maximum value minus the
[1:36:11] minimum value however in machine learning another method called standard score or standardization is usually used and here
[1:36:19] we first calculate the mean and the standard deviation of the data set and then subtract the mean from every value
[1:36:27] and divide the result by the standard deviation deviation we will perform this scaling in this step here and we will use a tool again
[1:36:37] from the scikit-learn library which is called standard scalar here we will read in again our data set
[1:36:46] and then for each of the features or bands in our data set we will fit the standard scalar when the scalar is
[1:36:55] fitted fitted the mean and standard deviation values are calculated and we can then use the transform function to apply this to the
[1:37:03] entire data set finally we append the normalized band into a list that we call normalized and in the end we convert this list of
[1:37:13] arrays into a numpy array stack we can then take this stack and reshape it the same way as we have done
[1:37:22] previously for the inputs for random forest and for svm finally we will simply print the output shape
[1:37:32] shape just to check that all our steps performed well so let me now run this piece of code
[1:37:40] okay so the shape of our output array looks fine and we can now feed it into the clustering algorithm
[1:37:47] again the clustering algorithm k means is implemented in scikit-learn library and we use the number of clusters as 10.
[1:37:58] this is simply given by the number of classes that we have plus three classes included in the mast
[1:38:04] class which were the wetlands the water bodies and the urban areas these will of course have quite
[1:38:12] different signatures in our data set and therefore it does not make sense to have them included in a sim cluster for the
[1:38:19] clustering clustering so this gives us in the end 10 clusters and we can now run the algorithm on our
[1:38:28] input created in the previous step okay and my clustering is done this step normally takes also approximately five to ten minutes
[1:38:43] now we have our clustering finished and let's now visualize our results here we simply create two subplots and
[1:38:51] in one we visualize sentinel 2 true color composite of the image and in the other the cluster map
[1:38:59] so let me simply run and here we go we can now see that we have very clear
[1:39:10] patterns in the fields and clearly we have several different types of crop or surface on those fields we
[1:39:19] also have clearly distinguished forest areas of woody natural woody vegetation in blue here and also water bodies in
[1:39:27] pink and then we have many other areas which would correspond to the wetlands and other classes in the masked class for example
[1:39:38] here we have our urban area which again we have approximately three different clusters present in this area
[1:39:48] i will not go more into how to link this result to actual classes but since we do
[1:39:53] have training data you can try to see which points correspond to which cluster here on the image and assign classes based on that
[1:40:03] finally we can export our results again into a tiff file same as we have done for the random
[1:40:11] forest and svm so let me run this final step and we now have the three different classification or clustering results
[1:40:21] here in our folder if you want to visualize them in snap i have also included here this
[1:40:27] classification cpd file which is basically the color map used for the classification for the visualization of the classifications in
[1:40:36] the code and this one this file can be used to pass the same color map into snap using the color manipulation tab
[1:40:57] finally we have classified the earth observation data using the field data and we are ready to create the final
[1:41:04] product this is as you can see here this is the final step in the overall crop inventory
[1:41:13] operational methodology once the classifications are completed aafc moves through a post-processing process to refine the thematic map
[1:41:33] products test the accuracy of the assessment and publish the map product the process is to one merge the
[1:41:41] agriculture and non-agriculture classes two filter the classified product three mosaic by province four four complete a visual assessment
[1:41:52] five burn your permanent classes into the product do six complete an accuracy assessment 7 write the metadata
[1:42:03] and 8 publish a map product the first step is to merge the classification with the land cover and
[1:42:12] classification with the various crop classes to form a final product that contains both the crop and the land
[1:42:19] cover classes together at afc we classify our land cover separately from our agricultural classes and at the end we must combine them
[1:42:28] you can see here the land cover generalized land cover is on the left there is a generalized agricultural
[1:42:36] class in that land cover which is then subsequently merged with the crop in the middle classifications to form the final
[1:42:45] classification as you can see on the right the second step is to filter the map product so asc uses a pixel based
[1:42:58] classification which can sometimes result in orphan pixels within a classified field a mode filter is applied to reassign
[1:43:06] those orphan pixels to a majority class so remember to consider your field sizes when you're selecting a kernel or window
[1:43:16] size for your mode filter and you should also think about instances where orphan pixels might make sense and should not be mode filtered
[1:43:27] so for example if you have intercropping if you have big trees in the middle of fields if you have water bodies within
[1:43:34] the middle of fields sometimes those pixels make sense here you can see on the left our raw
[1:43:41] classification classification prior to mode filtering and then on the right our final filtered classification it's much smoother in the fields and
[1:43:51] there are not a lot of missing missing in orphan pixels the third step is to mosaic all the
[1:44:00] regions within one province and then create a complete country ride product by mosaic all between all of the
[1:44:07] provinces provinces as we mentioned earlier we classify in regions to making to make processing efficient efficient where regions and provinces meet
[1:44:18] the scene should be checked to ensure that the class types are consistent across seams and that there are no
[1:44:25] errors errors so on the left here you can see what our individual stacks over of regions look
[1:44:32] like within the quebec mosaic process process and on the right you can see the final mosaic mosaic product
[1:44:47] a fourth step is to apply a visual assessment assessment aafc operations undertakes a manual visual inspection and revision but only
[1:44:56] for major errors given the operational nature of the aci it is important to balance map quality and resources or otherwise known as
[1:45:06] analyst time the area inside the red polygon underestimates the amount of agricultural fields compared to the previous year
[1:45:15] this error was detected by visual inspection and then was corrected by the analyst analyst because afc classifies in regions and
[1:45:24] those regions overlap we can actually take one of another region that the classifier produced in order to correct
[1:45:31] these overlap issues our fifth step is to burn our permanent classes classes so permanent classes can include things
[1:45:41] that do not change such as roads or greenhouses solar panel farms golf courses for example we have these areas classified as a
[1:45:51] general layer and then we can add them to the overall final classification product the sixth step is to use the validation
[1:46:02] data that we set aside the thirty percent and complete an accuracy assessment assessment the accuracy assessment is completed for
[1:46:10] the specific crop classes and contains measures of a confusion matrix user's accuracy accuracy producer's accuracy overall accuracy for the map product and
[1:46:21] a kappa coefficient a confusion matrix compares reference data with the classification data so validation data with the training data
[1:46:30] and contains rows and columns representing the number of classes this matrix provides information regarding the errors of emission so
[1:46:39] inclusion of pixels from a class or conversely known as the producer's accuracy accuracy and errors of commission
[1:46:47] erroneous erroneous inclusion of pixels into a class or conversely the user's accuracy which is a hundred percent less the percent
[1:46:56] errors of commission literature rema recommends that the target of 85 overall accuracy and at least a 70 percent users and producers
[1:47:06] accuracy for each class be achieved the aci as we said strives for an 85 percent over at overall accuracy
[1:47:16] in general our overall accuracies and our users and producers accuracies for crop types are much higher than these
[1:47:23] upwards of 90 percent and higher in most regions regions it also depends on the year and the
[1:47:30] availability of data and field data another measure of accuracy is a kappa coefficient which is an agreement
[1:47:40] which is which indicates the accuracy of the map beyond which would have been attained by a random assignment of
[1:47:47] pixels to a land cover class alike overall accuracy kappa incorporates the errors of commission and omission and
[1:47:55] can be used if you're comparing your error matrices or confusion matrices these results are all published along
[1:48:03] with thematic map for future users the seventh step is to write the metadata the metadata for the thematic
[1:48:12] crop inventory is published this includes an overview of the whole methodology methodology of to create the thematic map
[1:48:21] it gives the overall accuracies per province province and it gives the individual crop accuracies can be obtained upon request
[1:48:30] also as canada is a bilingual country translation is made for all the geospatial products that are produced
[1:48:37] the thematic maps and for the metadata so you can see here in the table that we have all the information in the abstract
[1:48:46] of how the data was produced and then all the supplemental information which gives you overall provincial accuracies for crop classes
[1:48:59] the finally the last step is the publication of the thematic map to opencanada.ca opencanada.ca this is a portal provided by the
[1:49:08] government of canada where all persons can go and obtain and download geospatial geospatial data of the annual crop inventory
[1:49:24] now i will show you a brief demonstration of opencanada.ca when you go to open.canada.ca you come to this main page and here
[1:49:35] under this box you can indicate what you're searching for in our scenario we would like to see
[1:49:41] annual crop inventory and all the records of the annual crop inventory are then displayed displayed the annual crop inventory on the
[1:49:59] opencanada.ca opencanada.ca comes up in two formats by individual year or underneath an entire general umbrella of annual crop
[1:50:08] inventory inventory we click on that option and then we're given the options for what are available so in this scenario we have pre-packaged
[1:50:20] geotiff files and we are able to click on that and click on the url and we're able to download
[1:50:30] any of the prepackaged geotiff files for any of the provinces for any of the years so for example
[1:50:38] this is the aci 2020 for alberta a b from from and it will give you the last data
[1:50:45] modification modification because we don't simply leave these as stagnant products we often go back and review and improve as we can
[1:50:56] with inclusive including new methods or including new filtering or including new training and validation data and updating and improving our maps as we go
[1:51:08] but these are now available from 2009 all the way to 2020 at this portal and remember we will have this training
[1:51:19] video on the web page within 24 hours so that you will be able to go through this at your own pace
[1:51:28] so i thank you very much for listening and learning about the annual crop inventory and listening to how to do
[1:51:36] a crop inventory and we will now send it back to our host thank you laura for a terrific overview
[1:51:50] on how agriculture and agri-food canada performs post-processing steps on classified images performs accuracy as assessment and publishes the results
[1:51:58] from canada's annual crop inventory to open canada it's great to see how canada is using radar and optical imagery operationally
[1:52:06] in conducting your of your annual crop inventories and making that data available to the general public i'd like
[1:52:12] to see more countries doing that we will not transition to the question and answer session of today's training
[1:52:18] please enter your questions in the question and answer box and we will get to them in the order that they were
[1:52:23] received received we will post the question and answer document to the training website following the conclusion of the webinar
[1:52:32] below is the contact infrared information from for teresa roth georgia caravadimu and dr laura dingle robertson along with links to the training webpage
[1:52:41] and the european space agency's eo for society website thank you okay wonderful thank you to everybody that's been submitting your questions
[1:52:55] we've got some really terrific ones coming in throughout today's webinar so jumping right into it question number one
[1:53:02] can you get training data from high resolution satellite data if yes how does a non-agricultural person who has
[1:53:10] not identified crops identify from imagery um so yes you can if you do not have in-situ training data the safest
[1:53:18] identification you can do is by simply viewing satellite imagery is to identify whether an area contains a crop or not
[1:53:26] but you cannot securely identify the type of the crop and question number two what is the difference between overall
[1:53:37] accuracy and the f score in accuracy assessment assessment and the answer is the f score is calculated per class and this means that
[1:53:47] we can see how well our algorithm performs for each class and not only overall overall the overall accuracy
[1:53:54] can be very misleading since some classes can have accuracy that is extremely low indicating potential issues in our training data or in their
[1:54:03] size size while other classes may have very high accuracy and question number three is there a relationship between the
[1:54:15] minimum number of samples and the number of trees in random forest classification training training and the answer number three is not
[1:54:24] necessarily there is a relationship between the number of features in your data set and the number of trees the
[1:54:31] more dimensions in your data set the more trees should be used if your trading data set is too small
[1:54:38] and this is meaning a number of samples it makes no sense to have a high number of trees because the samples will repeat
[1:54:45] in the random sampling all great questions thank you to everybody that's been submitting them please do keep submitting them and we
[1:54:52] will get to them in the coming 30 minutes so question number four i want to perform segmentation after
[1:55:01] object-based classification using ndvi temporal stack how can one perform this using sentinel 2 data and the answer to that is there are
[1:55:12] segment segmentation tools available within snap within the orfio toolbox plugin and so we recommend you test that
[1:55:20] on their own with the the orpheo toolbox plugin and question number five for those classification algorithms when
[1:55:31] we use for example entropy instead of genie genie which increases the computational time does it necessarily mean better results
[1:55:41] and answer to question number five is no based on the literature and testing the results tend to be very similar
[1:55:49] so question number six the alaska satellite facility offers vertex on-demand radiometric terrain corrected sentinel-1 data should we use alaska satellite facility
[1:56:00] vertex vertex radium radiometric terrain corrected processed data sets when selecting radar data for crop mapping especially crops
[1:56:09] on steep slopes so because the sars are side looking instruments these data are affected by topographic and radiometric distortions
[1:56:20] such as for example layover foreshortening or shadowing and in regions especially in regions with significant topography it is possible to apply a terrain
[1:56:30] correction during sar pre-processing you saw that in part three however it is convenient to access the sentinel data
[1:56:38] from from asf asf because it already has the uh the corrections applied keep in mind that the radiometric distortions in
[1:56:46] mountainous areas are very difficult to correct so you will never get a perfect result nevertheless um we would
[1:56:53] recommend that you evaluate the alaska satellite facility corrected products to determine determine um um if these products meet your needs
[1:57:06] wonderful teresa thanks so much question number seven can we measure the salinity of soil using biophysical variables for soil
[1:57:14] brightness if not which index may be the proper to use for soil salinity so the so the soil adjusted vegetation
[1:57:25] index has been used for in some research studies to estimate soil salinity uh you can find the
[1:57:31] literature literature or you can search for the literature for these studies um which have tested sabi for this purpose however personally i do
[1:57:40] not have any experience with it so i cannot cannot i cannot answer this question to you okay question number eight
[1:57:49] is it possible to know the final decision rule or rules of the trained random forest classifier so there's some functions in python that
[1:58:00] allow you the visualization of the entire tree and all the rules that have been used in each node
[1:58:05] i cannot recall now what they are called however however i would not recommend using those when classifying eo images as the trees will
[1:58:13] be extremely large and the values are let's say continuous so of course you will have uh you will have
[1:58:20] trees that are really large and um you can test these these tools for example the smaller data sets such as
[1:58:28] the dataset or not even a data set but the example that i showed you in the presentation which dealt with fruits
[1:58:35] there's also many more data sets that you can find online um that can allow you to to do this but i would not
[1:58:41] recommend trying this with the eu images especially not with data set that has as many features as we have or as many
[1:58:47] bands wonderful and question number nine are oob score and oob error different could you please provide a clarification
[1:59:00] right so ob score generally refers to the portion to the of the results that is correct while oob error um refers to
[1:59:08] the portion of the results um in the out of back calculation calculation which is incorrect so basically all the
[1:59:19] error is just uh when you subtract ob one from sorry ob score from one so so okay wonderful
[1:59:29] and question number 10 what if two features have the same distance from the z plane in the sport
[1:59:35] vector machine classification right so um i think that happens quite rarely depends on what data you are
[1:59:44] using but of course the svm considers multiple not just one i assume that here you mean by features
[1:59:51] you mean points or data points so of course the svm never considers uh just one um just one data point to place the to
[2:00:02] place the hyperplane so it always considers the all the support vectors um which are the closest points to the
[2:00:08] hyperplane or to the division line let's say so um then other points will take the role of
[2:00:15] maximizing or will be used to maximize the margin great and we start we have another question on svm so question number 11
[2:00:26] are both svm and k-means based on distance distance yes yes they are both based on distance however they use quite different
[2:00:35] approaches um for the classification or clustering in this case in the k-means case wonderful question number 12
[2:00:46] uh uh sentinel-2 short-wave infrared bands are they re-sampled to 10 meters or downscaled downscaled so they're simply resampled the data
[2:00:56] also the short wave infrared bands are 20 meter resolution so they can downscaling would not help us that that
[2:01:04] would be lowering the resolution further and we want to get them to 10 meters so they're simply resampled
[2:01:13] at least in the in the exercise wonderful and question number 13 if the training data is based on the classified
[2:01:21] image how will the machine learning capture the temporal change in crop class class right so i didn't quite understand the
[2:01:30] question here so of course the training data are based on classified image it would have been better if the data were
[2:01:36] based on on on on field survey however anyway even if you have field survey you will generally have only one
[2:01:45] in the season maximum two but generally just one and and that means that still your training data
[2:01:51] are are stationary in time however your data set includes multiple of course includes a time series over
[2:01:58] the span of your season and the training data that we create in the python i think this question was asked before we
[2:02:04] discussed this the training data that we create we also sample all our data set and basically for each training data
[2:02:13] point we also extract all the values from all the bands or features that we have in our input data set
[2:02:20] so so there then in these features you can of course over the time series see the time
[2:02:26] or the the temporal change in in the in the values question 14 how can we identify outliers in the
[2:02:38] k-mean approach okay so um when you're defined i mean when you use the k-means-based outlier detection technique the data are first partitioned
[2:02:50] into groups by assigning them to the closest cluster center and once they're assigned we then compute the distance or the
[2:02:58] dissimilarity between each object and its cluster center or each point and its cluster center and of course the
[2:03:05] outliers will be the one with the largest distant distances from the cluster centers okay question 15 how can i get
[2:03:15] training data from my country or locality yes so this can be difficult um you can generally contact your local
[2:03:26] authorities or institutes that may happen to have such data you can also find them publicly sometimes publicly available or
[2:03:33] they can make them publicly available but each region around the world or each country have their own rules
[2:03:41] and data by databases regarding the publication of this data great and also add to uh for question
[2:03:50] number 15 for the answer there's also a really good website called collect earth online that does have kind of like a
[2:03:56] crowdsourced um in-situ gathering database that you can use as a as one uh reference so we do
[2:04:03] recommend that for whoever asked that question question question 16 does snap fully support mac m1 chip so unfortunately i i don't know but you
[2:04:14] can refer to the snap step forum you can find the link in the chat and there you should be if you don't find
[2:04:22] answers specifically you should be definitely able to ask the question otherwise there is a mac version of of
[2:04:29] snap but i'm not familiar with mac per se so i don't know if that is exactly what you're
[2:04:36] asking okay question number 17 for regression random forest is it sufficient to perform tuning in n estimators
[2:04:47] estimators m try and extract important features using recursive feature elimination algorithm assuming that i split data to 80 for training and 20 for
[2:04:56] test validation is it enough to produce significant accuracy or or i have to optimize tree depth and
[2:05:04] include the bootstrap aggregation in any case so um that is difficult to say i have not tested this and i
[2:05:14] don't know from the top of my head if if this will i mean it's difficult to know
[2:05:19] if this would give you as good accuracy um um generally you will have to test unfortunately unfortunately um the bootstrapping is
[2:05:29] usually important in a random forest since it basically minimizes the chances of overfitting overfitting um and it
[2:05:38] moreover makes your classifier more robust so if you then apply your clarifier to not only your training data
[2:05:44] but your full image for example the bootstrapping really improves the accuracy in this case and lowers the chances of the overfitting to
[2:05:52] only the training data let's say question 18 can we subset by importing a shapefile or json file for a region of interest
[2:06:05] so in snap unfortunately no you can however use tools there's several online tools i believe one of
[2:06:13] them is called wikit and and or for example qgis to convert your json file or your shape file into
[2:06:22] well-known text format which can be used in snap but only in the graph interface so if you're using the um the just the
[2:06:31] general tool that you can find in the drop down menu in snap there unfortunately it's not possible
[2:06:36] you can only define the the corner coordinates of your of your polygon polygon now this is only for subsetting so it
[2:06:44] will always take a rectangle of your uh out of your data it will not clip them into your polygon by no means
[2:06:54] okay question number 19 looks like it appears to do with the processing time of your machine so batch processing
[2:07:00] seems to take a long time collectively per say for five sentinel two images i noticed the processing of one by one
[2:07:07] takes less time in total but of course there is less effort needed for batch processing snap tends to also lag a lot
[2:07:14] when handling large files as noticed from last week's practical week 2 data this snap requires a super high
[2:07:22] performance computer to run with ease no i don't think it does there are some issues indeed with snap so um
[2:07:33] the the using the batch processing at the gui of the snap is relatively slower than running it
[2:07:41] from the gpt which is the command line interface which we have not i'm not sure that it was shown in the in the previous
[2:07:48] sessions sessions um um because so therefore sometimes you may face slower performance batch processing processing than than processing them one by one and
[2:07:59] this is because snap does not release memory in the batch processing the snap graphical interface so the minimum
[2:08:05] required ram to use snap is generally eight to eight gigabytes 16 is providing very good performance but of course the
[2:08:14] more available uh memory you have the better or the faster processing you will you will you will get or the faster the
[2:08:22] processing will get however i would really recommend looking into the gpt um it's uh it's much faster and it
[2:08:30] basically basically so it does not have built-in batch processing processing but you can simply script it whether
[2:08:36] using python or using um um using a shell script for example and it uses the same graphs as the
[2:08:46] as the graphical interface again with few changes here again i don't know if it was addressed before but i can refer you to
[2:08:53] some some training some webinars or some materials that we have published on the ruse copernicus website and there you can find because we very
[2:09:05] frequently use this this method i i don't have now one in mind that i would tell you this one is the one that we
[2:09:10] used it but you if you check the pdfs that we publish you should definitely be able to find an example of the shell
[2:09:16] script for example and how to edit the graph graph file great question 20. i see that bruce
[2:09:25] copernicus has a lot of great training material but training sessions are only for europeans any chance to make the
[2:09:30] training information available globally right so the risk operations material so the pdf guide and the video and also the
[2:09:39] attendance to the webinars are available to everybody so those are not limited to europe at all unfortunately the virtual
[2:09:47] machine availability is limited to eu citizens that is based on the regulations of the project and unfortunately we cannot change it
[2:09:55] but as i said the webinars and all the materials coming from the webinars are publicly available wonderful and we do hope that uh all the
[2:10:05] participants uh check out the roost copernicus website and definitely uh you know explore all those uh wonderful
[2:10:11] trainings that they have uploaded on there so question 21 doesn't snap have its own machine learning classifier tool
[2:10:19] um yeah so um the svm and the random forest are available in snap and there might be also k-means i'm not right now
[2:10:26] sure sure but but generally i found them a little bit finicky to use there is less parameters
[2:10:32] that you can optimize and the output data set does not for example retain the same class numbers
[2:10:38] and you have to import your training data per class as a vectors divided per class and it only considers the name of the
[2:10:46] vector that you import not the actual values um or not the actual grid code or anything that you supply so
[2:10:54] it is a little bit tricky to use it might be simpler because it requires less parameters uh however i i generally prefer using
[2:11:03] python or different software than snap for this question 22 is it possible to perform a spectral separability analysis and snap
[2:11:14] using some distances like jeffries matusita um um again i would refer you to the snap forum i'm not
[2:11:26] familiar with with the spectral analysis tool in snap or whether there is one available so unfortunately sorry i cannot answer this
[2:11:34] question okay question 23. thank you so much for a wonderful presentation uh both uh laura and teresa is it possible to
[2:11:45] provide a yaml file as well yes so the yml file is available in the training kit so you can simply send an
[2:11:53] email to the eo training at serco.com and we will send you the training kit and i believe this question is repeated
[2:12:00] many times for different different parts of the training kit but definitely just forward us an email and
[2:12:07] we will send you um the training kit including this file okay and it looks like question 24 is
[2:12:13] very similar so how do you get the jupyter notebook and and again i will refer you to the email that theresa just
[2:12:18] referenced in the previous question so question 25 can the starting data files that the presenter is using be available
[2:12:24] to run and validate the python used if the combination fails then the python may not run the same
[2:12:32] um okay so i now when i read it i think i might have misunderstood the question originally when i was writing the answer
[2:12:40] so i'm i'm not sure what was meant by the starting data maybe you can specify it in
[2:12:45] again in a different question um also i don't understand what it means to what do you mean by validating the
[2:12:54] python used um um [Music] [Music] i'm sorry i don't know but you can i don't understand the question but you
[2:13:02] can definitely download the if you mean the the input data set um um that we used this is using the same
[2:13:10] method that you saw in part three and the data has been included on the event web page where you can download them
[2:13:16] this is only the um co-registered sentinel one and sentinel 2 data set that we used and then you have the training kit which
[2:13:24] contains the training data used and the jupiter notebook so so you should basically be able to repeat the exercise
[2:13:32] exactly and there should not be any problems if you if you manage to set up the environment correctly
[2:13:38] question 26 for people that are not familiar with coding is there an alternative to running the data
[2:13:43] processing in jupiter lab elsewhere for example snap right so as i've mentioned already there the algorithms or the random
[2:13:53] forest and the svm at least are available in snap as well i mentioned they have some limitations
[2:14:01] limitations uh for example to the parameters that can be set and also how to input the training data and so on
[2:14:07] um so yes you can you can use you can to to a large degree you can um repeat
[2:14:14] this entire process only in snap yes question 27 what attributes should we provide in the training data shapefile
[2:14:25] so in the training data shapefile um again you can find this in the training kit there is a point id
[2:14:31] this is not necessary to have but it comes with the shapefile then the grid code which is the identifier of the class so just a
[2:14:39] numerical value identifying the crop class and then there is um utm e and utm n which are the x and y
[2:14:48] coordinates coordinates in the utm zone zone i believe this was 20s based on vgs 84 coordinate system so this is specific
[2:14:59] for this exercise but it should be basically the same coordinate system as your input data set wonderful question number 28
[2:15:09] concerning the random selection of training and validation points how was it done as i believe you have not
[2:15:15] clicked thousands of times on a map no so i used um basically the data that i had from laura were um polygons um
[2:15:27] so the original data were were first vectorized by her and then some polygons were selected randomly but for me that was still too
[2:15:35] many uh points the the code would be way too slow so i decided to limit the number of points
[2:15:42] 4 000 per class and i did this by using the random points inside the polygons inside polygons which is a tool
[2:15:50] that you can find in qgis and it enables you to basically set the number of samples to be drawn now first
[2:15:58] what i did was uh dissolve all the features by all the polygons by class meaning that i always had one single
[2:16:06] multi-polygon per class this is important because otherwise each of the polygons original polygons would be used to draw a thousand points which is
[2:16:15] of course not possible so you have to create one multi-polygon per class by dissolving dissolving by class and then you can use this
[2:16:23] random sampling point in qgis all of this was done in qgis wonderful uh great question number 29 uh
[2:16:33] just wondering if you have developed a module for classes what is the basis for defining these classes in the notebook
[2:16:42] again i think i have mis read the question when i was writing the answer answer um so um
[2:16:50] no i did not develop a module uh for module for classes no okay question number 30 for the seams and overlaps when mosaic
[2:17:03] how does one check the quality besides visual assessment um um right so um basically visual assessment is your best
[2:17:15] tool i believe there is some advanced mosaicing methods um but again i'm unfortunately not not an expert on this
[2:17:23] um um but generally i mean visual assessment will be will be your one of the best checks you can do
[2:17:33] but the advanced sorry the advanced mosaicing tools can give you better results for sure because then they will try to
[2:17:40] equalize the change on the border or the basically the the distribution of the values in the mosaic images
[2:17:50] and question 31 is a repeat from earlier so i'll just run through it very quickly there's asking if the jupiter notebook
[2:17:55] from today will be made available and again uh to repeat the answer please send the email to the one provided at
[2:18:00] ceraco.com and then you will receive the training kit along with the jupyter notebook so please do follow up with the
[2:18:06] email provided so question 32 is image normalization important for random forest classification if yes is there a
[2:18:14] way to determine the impact of non-normalized data on random forest classification uh so no normalization is not necessary
[2:18:25] in random forest random forest is nice this way that it allows you to input data that are really on multiple
[2:18:31] different scales um so you can um you can just use no you don't need to normalize the data
[2:18:38] for random forest question 33 how are fields that are double or triple cropped dealt with in classification if
[2:18:49] fields are double cropped with different crops do you use data from both seasons when classifying one crop
[2:18:56] right so i think this question is repeated then later as well uh in a slightly different way um
[2:19:03] and i've overlooked this one but basically uh gender i i don't have experience with this so i don't know
[2:19:10] maybe there would be others that that have more experience for example um laura or heather that gave the part
[2:19:18] three presentation but i would say that this will create a lot of problems i mean you can create
[2:19:25] probably a multi-crop class um um but that will depend that will really require that all the training points
[2:19:34] that you have within that class or all the date all the changes in the crop crop within that season
[2:19:42] will occur around the same time and will have a very similar temporal temporal temporal response or temporal profile
[2:19:51] otherwise otherwise and then you would have to have this multi crop or double cropped areas in a specific different class you cannot
[2:20:00] for sure but it's not possible is to have um i mean if you have one training data set which you will have per
[2:20:07] classification you cannot have multiple classes for the same polygon it's not not not possible um in that way so um either you can have
[2:20:17] specific classes that are uh including these double crop or multiple cropped areas but then again the properties of
[2:20:26] these multiple crop areas within that class should be very similar so the algorithm can actually classify them
[2:20:36] great question 34. is there any tool for distinguishing between forest and croc um um so you can simply use classification
[2:20:45] again i mean if your training data only includes includes um forest areas and crop areas then um
[2:20:53] you will get two classes out of it which will be forest areas and crop areas so it really depends um i mean i think
[2:21:00] classification in this case is the best tool you can use um and even in our data there is
[2:21:07] actually a forest class or or permanent vegetation or permanent tree cover class so we in general also we were also
[2:21:16] classifying forest in this case apart from also the crop crop different crops wonderful question 35 does snap pi
[2:21:26] support python 3.4 or later versions i installed snap 8.0 with python 3.4 and i tried to install snap pi with python
[2:21:35] 3.7.6 and i couldn't install it um so i am i have never encountered this issue personally i am using snap 3.4 sorry um
[2:21:47] python 3.4 um i know actually it's a python 3.6 but i have used python 3.4 before before what you can try is to install snap 7
[2:21:58] um um which i think you can find in the archive on the on the snap web page
[2:22:03] um um might give you a different result but i wonder if the issue is rather not related to something else
[2:22:10] you can also consult the forum but personally i have not encountered any issue with i mean if the python is
[2:22:17] version 3 or higher then then it should not be an issue okay uh question 36 what do we do for
[2:22:28] croplands that have different crop types for different seasons when defining the training data um um right so
[2:22:40] i mean generally you will always need to re-run the training of the classifier for different seasons you will have to
[2:22:47] have different training data for different seasons that is just the way it unfortunately is um so when you need to when you define
[2:22:56] your the season that you want to classify classify you should have a single crop per field or as i was mentioning before you can
[2:23:04] have have specific multi-crop classes perhaps but then the the areas that include this multi-crop class have to be really similar um
[2:23:16] throughout your training data and also throughout your input data so for example if the change between crops
[2:23:21] occurs at exactly the same time um then you can create a class that specifically relates to this change between these two
[2:23:29] crops crops but otherwise uh unfortunately we are all always limited to to a single training data set and uh
[2:23:39] and a single uh single season wonderful question 37 how is the dimensionality reduction of data performed for supervised classification
[2:23:50] is feature engineering part of such analysis also is principal component analysis the preferred way uh right so um
[2:24:00] unfortunately i did not test this uh so i cannot really answer fully uh but in general in literature you will
[2:24:07] find that dimensionality reduction will have positive effect on classification even if just reducing the computational time time um
[2:24:17] um but but unfortunately i cannot cannot advise in this case question 38 what is grid code is it crop
[2:24:27] type code um yes so it's basically just a numerical value assigned to the crop type type and question 39 what kind of hyper
[2:24:37] parameter tuning is performed for the model to avoid over fitting slash underfitting underfitting right so uh for a random forest to avoid
[2:24:48] overfitting the main thing you need to do is to optimize the tuning parameter that governs the number of features that are randomly
[2:24:56] chosen to grow each trees from the bootstrap data typically you do this via a k-fold cross-validation cross-validation and
[2:25:05] and you choose the tuning parameter that minimizes the test sample prediction error okay question 40. is there a random
[2:25:16] forest routine implemented in snap yeah so i we have mentioned this already yes there is is but as i've mentioned it has number of
[2:25:27] limitations or at least from my point of view it has limitations but uh you can test it and perhaps it will fit your
[2:25:34] needs well um it has a little bit different needs for the input data or the training data as i've already
[2:25:41] mentioned and so on and question 41 what is your advice for crop classification pixel or object-based classification
[2:25:53] both have advantages i believe the object-based classification in some areas will give you a very nice clean results
[2:26:02] but it is more difficult to be implemented and there are study areas for it which it's just simply not
[2:26:08] suitable suitable um um so so and it will depend of course on how good your your segmentation is going to be and the
[2:26:15] segmentation can be really uh problematic so pixel classification is generally simple simpler let's say question 42 for splitting training and
[2:26:28] validation data should we choose different polyglot slash regions or is it okay to sample over the same polygons
[2:26:36] so i would recommend if possible to choose different polygons because this will really ensure that your training and
[2:26:43] validation data are independent if you use the same polygons it may be that for example um your uh your polygon is idle
[2:26:53] aerogeneously uh classified in your in your in your training data or in your original that you use um and if that's not that's
[2:27:03] not the case for example if you're using um field data then still i think it's better to have independent uh indepen
[2:27:10] completely independent samples wonderful question 43 what is the required machine configuration for running this code can it be done in
[2:27:20] google collab yes so i am not familiar with google collab collab um um generally if you have a possibility to
[2:27:29] install all the required packages um you should also have the possibility to instead install snap because we are
[2:27:36] using snappy but i in the code i'm explaining this it can be overcome so you can simply just extract the list of
[2:27:43] bands and that is basically the only thing that we use snappy for um um there should be no problem no reason why
[2:27:50] you shouldn't be able to run it in any environment you choose and question 44 why is it important to
[2:28:00] have the coordinates uh utm east and utm north in the attributes table um so this is just the way i built my my
[2:28:09] extraction of the training training data or or now let's not think about training data the shape files but the training data
[2:28:17] that we extracted in the code so when we are sampling when we are using the training data to extract also all the
[2:28:23] values of all the features or bands for these specific training and validation data points and the way i've
[2:28:30] implemented it is that it uses a list of coordinates coordinates so that's why i need to have the the
[2:28:36] coordinates coordinates there and question 45 can we stack images of several years and then run the classification if so what will the
[2:28:46] effect on accuracy be then well the question here is where is when is your training data from then
[2:28:54] because the crops will generally change between years so it actually may be so here i say that
[2:29:01] the accuracy might be very low because they will change between years um um but maybe it would not be low i never
[2:29:08] tested this maybe it would be high but it would really correspond only to that year from which you have your training
[2:29:14] data and i even think it would further degrade because in the future years not all the fields would change in the
[2:29:20] same way so in general you always always need to run a new classif new training of the
[2:29:28] classifier and new classification for the for the further for the next years and you need to have new training data
[2:29:36] that is unfortunately the way it is well theresa thank you so much for helping we are at the the the hour i
[2:29:45] guess that the half hour which is the end of this fourth part of this five part webinar series we want to thank
[2:29:50] everybody for for all the participants for joining today and for and for sticking us out to the end of the q a
[2:29:55] session uh there were a number of questions that we did not address uh but they will be uh we will follow up we'll
[2:30:01] get all of the answers on the stock and we'll post it on the rs our set website
[2:30:06] by next week hopefully by next tuesday which is when the uh the fifth and final part of this webinar series will be held
[2:30:13] so we do hope everybody will come back on tuesday for the conclusion of this wonderful webinar series
[2:30:20] i would like to acknowledge the wonderful guest presenters we've had today uh teresa teresa roth also a big
[2:30:26] thanks for for helping out with the q a doc a wonderful wonderful job also a very very big thanks to dr laura
[2:30:32] dingle robertson uh thank you so much for the wonderful presentation today uh and also to the entire team that behind
[2:30:39] the scenes that was helping out uh brock levins amita mekhta erica potus selen huntsman modoy jonathan o'brien uh and
[2:30:46] then all of our colleagues from from issa and and and aggregate niagara from canada uh thank you everybody for
[2:30:52] joining today and we hope to see you next tuesday for the conclusion of this webinar series so thank you and stay
[2:30:58] safe
