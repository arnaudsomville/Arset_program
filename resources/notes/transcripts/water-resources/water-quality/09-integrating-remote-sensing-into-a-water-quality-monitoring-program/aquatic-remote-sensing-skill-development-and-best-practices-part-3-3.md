# Aquatic Remote Sensing Skill Development and Best Practices, Part 3/3

`https://www.youtube.com/watch?v=0XvWJZdgxYs` · id 222 · 2:47:36 · module 9 — Integrating Remote Sensing into a Water Quality Monitoring Program

[00:05] hello and welcome back to the advanced webinar integrating remote sensing into a water quality monitoring program we are in part three of the
[00:13] webinar series with the theme aquatic remote sensing skill development and best practices my name is sherry palacios and my
[00:20] co-instructor is amit mehta today's session will be four hours long some of it's structured and some unstructured we are covering a lot of
[00:30] material today including lecture demo exercises and some quiet laboratory work time at the end it is not required that
[00:37] you remain for this quiet laboratory time but you are welcome to use it to work on your exercises with the
[00:42] opportunity to ask amita and me questions questions we understand that we have a diverse audience of participants we hope that
[00:50] each of you will come away from this series of some new knowledge and skill related to the remote sensing of aquatic
[00:55] systems and how it can complement a larger water monitoring program let's get started the objectives of this training are to
[01:05] learn to understand which data products are used for water quality monitoring follow rigorous practices for obtaining and processing aquatic remote sensing
[01:14] data data and to build skills in image processing for water quality monitoring for coastal and inland water bodies using nasa's
[01:21] cdas image processing software in part one we focused on coastal systems and during part two we focused
[01:30] on remote sensing of inland waters this week we focus on building aquatic remote sensing skills and on best
[01:36] practices of incorporating remote sensing into a water quality monitoring program as i mentioned at the beginning we are
[01:45] going to cover a lot of information today today first a review of parts one and two then
[01:50] i'll give a short lecture on a water quality monitoring program workflow and best practices and designing an
[01:57] effective water quality monitoring program using remote sensing amita will give a demo on using remote sensing in a water quality monitoring
[02:04] program program then you will have an exercise on using remote sensing in a water quality monitoring program
[02:11] i will then walk through the exercise on learning advanced skills with cdas and then with the time remaining it will
[02:17] be a laboratory work time to finish the exercises and ask questions in an unstructured format first some highlights from parts one and
[02:26] two in the first part we reviewed some current satellite missions that are used for water quality monitoring
[02:34] space agencies and researchers have invested a great deal of effort to build this growing time series of earth
[02:39] observations observations this is a rich data set to mine to understand current water quality questions questions and to begin to understand how aquatic
[02:47] systems have changed since the beginning of the time series dr daniella girlin our guest speaker from part two gave a comprehensive
[02:58] overview of the water quality monitoring program she is a part of with the wisconsin department of natural
[03:04] resources resources she talked about the algorithm development she did to assess water clarity in wisconsin lakes and shared
[03:12] links to the data visualization tools they make available to the public if you have not already had a chance to
[03:18] browse those links i encourage you to look at the pdfs of her presentation or to watch the recorded video to find the
[03:25] links links we very much appreciate her volunteering her time and expertise to help make this webinar series what it is
[03:34] we touched on the advantages and disadvantages of using remote sensing for freshwater systems some advantages include a long and
[03:42] growing record of imagery for use in time series analysis ongoing commitment from space agencies to continue data collection
[03:52] reliable data for operational warning and forecasting systems and spatial resolution appropriate for lakes lakes and freely available data
[04:01] very high quality some disadvantages include issues with shallow water so interference from the bottom water bodies too small for the
[04:12] spatial resolution of sensors limited number of standard algorithms for these optically complex waters so a need to invest in algorithm development
[04:21] for a particular region issues with atmospheric correction and the choice of aerosol model to use over particular land regions
[04:31] fresh water systems are dynamic and the temporal scale of change may be too fast for the revisit rate of sensors
[04:38] and finally ground truthing is costly we would like to remind you that if you would like to receive a certificate of
[04:48] completion you have homework due on friday june 21st something we thought we grew out of but you have homework there
[04:55] are three homework assignments two of which must be submitted through google forms forms there's no form to complete for the part
[05:02] two homework you will need to complete the exercises in order to answer the homework questions in the forms
[05:09] if you attend all live webinars and complete the homework assignments by this friday june 21st you will receive a
[05:16] certificate approximately two months after the completion of the course so let's get into the details of the
[05:24] water quality monitoring workflow and best practices a few times during this webinar series we have presented this general workflow
[05:34] that you see here for a water quality monitoring program that uses remote sensing sensing this workflow includes identifying your
[05:42] problem problem evaluating if remote sensing can complement your in-situ sampling effort taking the time to choose sensors and
[05:50] appropriate data products for your problem and in some cases making the decision to develop your own data
[05:56] products for your region of interest building a strategy for coincident in-situ and remote sensing observations using a parallel effort of in-situ
[06:06] sample collection coincident with overflight of the imager processing of in-situ and imagery samples and comparison of in-situ
[06:15] observations with the estimates of corresponding data products using statistical methods followed by the communication of results to the stakeholder
[06:25] the ease of imagery access and processing can delay the amount of work that is needed for incorporating remote
[06:31] sensing into a water quality monitoring program program it is wise to carefully evaluate what the needs of a program are
[06:39] and if there are compatible remote sensing resources to augment the program in the next few slides i will review
[06:46] some of the considerations needed when designing an effective water quality monitoring program during part one we heard from you our
[06:58] participants of the wide range of experience levels and project ideas you have or are working on it's really exciting for us to hear
[07:06] about the good work you are doing to monitor for water quality to better understand ecosystems and to protect
[07:12] human health from monitoring small waterways in the forests of the state of michigan to discriminating between algae and
[07:21] mineral mineral flocculants in the salton sea of california to inland water fisheries data management in indonesia to monitoring pollution at sea
[07:31] near spain to wetland monitoring in brazil to shallow inland water bodies in south africa africa we have quite the diverse group of
[07:40] participants in this webinar series while there is no one-size-fits-all approach to integrating remote sensing into a water
[07:49] quality monitoring program we offer more details to the workflow including logistics incorporating citizen science quality control interpreting results
[08:02] data management and communicating to stakeholders stakeholders some of you are just starting out in your journey of using remote sensing
[08:11] and some of you have advanced programs an effective water quality monitoring program requires a great deal of
[08:18] planning and a willingness to learn from your failures to build and improve your program program we hope
[08:25] that reviewing these considerations here will help you build an effective program while avoiding some of the pitfalls
[08:35] if you are already a part of a water quality monitoring program then you are most likely familiar with the in-situ
[08:41] logistics logistics your problem will drive which observations to make such as chlorophyll concentration turbidity c-dom or nutrients
[08:50] nutrients you need to build a rigorous sampling design that takes into consideration the water depth proximity to the shoreline being more
[08:57] than one pixels distance away and a stratified random sampling design so that observations within the water body are independent
[09:06] if you're going to use data from a sensor that has a consistent tile with consistent pixel ground locations like
[09:12] landsat 8 oli then you can plan for sampling with those locations in mind depending on how dynamic water movement
[09:20] is or if you have vertically migrating organisms in the water it is important to collect in-situ observations within a
[09:27] narrow window of time on either side of the airplane or satellite overpass if you're a part of an airborne campaign
[09:35] this includes communicating with the pilots or if they have an aircraft tracking tool like nasa does for some of
[09:41] its airborne platforms then monitoring the plane's location using that tool if you're syncing up with satellite overpass there are online tools that
[09:51] provide the overpass predictions nasa has one of these tools for commonly used aquatic satellite sensors in either
[09:58] airborne or satellite collections and you are collecting measurements using a spectroradiometer spectroradiometer be sure to sample while the sun angle is
[10:08] 30 to 50 degrees from zenith not all satellites collect at this optimal angle for aquatic remote sensing
[10:15] and this will be covered in the next couple of slides with satellite overpass predictions predictions if your aquatic system is affected by
[10:22] tides or water release decisions be sure to obtain the times to plan with them in mind schedule for boats and people in these
[10:32] images that you see here on the right you see pinto lake california it's a small lake near where i live in the
[10:38] monterey bay region of california in the u.s u.s the lake is known for toxic microcystis blooms there's an ongoing sampling and
[10:47] remediation effort taking place in this lake to understand why the blooms are so persistent and so toxic
[10:54] and even though it is unsafe to eat fish caught from this lake people still fish here here my former advisor and i have worked to
[11:00] develop bio-optical algorithms to observe and predict microcystis in this lake lake one day we had an overflight schedule to
[11:08] collect imagery this is where i'm talking about contingencies i was standing on the dock of the lake
[11:14] waiting to collect surf water surface reflectance measurements with my spectro radiometer i'd set up all my equipment
[11:20] and i was ready for the plane to fly over in about five minutes and i was tracking it with the tracker tool
[11:26] when this kid started casting his fishing rod at me and getting very close with the hook i asked him to wait about 10 minutes
[11:33] until the plane was done but he insisted on doing it thankfully thankfully i had planned ahead and i knew that
[11:40] there was a parallel dock nearby and i was able to move before the overflight so i had a contingency plan and i was
[11:46] still able to collect samples i don't think this young man was particularly happy about me talking to
[11:51] his parents after i finished sampling a number of times participants have asked how small of a body of water can
[12:01] they sample using remote sensing observations observations please take a moment and look at the image on the left
[12:08] it is a schematic illustration of pixels land pixels in gray water pixels in blue and mixed pixels in
[12:16] some combination of blue and gray look closely here water bodies with at least three pixels in all directions are candidates for
[12:26] sampling sampling what we call the three pixel rule watch out though because the mixed pixels limit our
[12:33] ability to monitor small water bodies in fact if you went by the three pixel rule for this schematic drawing that you
[12:41] see here then the hypothetical body of water here would not be large enough to sample because it does not have three
[12:48] completely water pixels across in any one direction look at the image in the lower left the false color of how it's displayed
[12:59] here provides a distinction between the land and water in this image the reddish pixels include land using the three pixel rule which bodies
[13:10] are candidates these bigger ones are pretty good candidates they are greater than three pixels across these smaller bodies of water are too
[13:22] small for the pixel size to get an adequate adequate set of data so i've talked about it a couple of
[13:30] times but where do you go to get those satellite overpass times so that you can schedule your in-situ effort
[13:38] nasa's ocean biology processing group has overpass predictor times for satellite sensors commonly used for aquatic remote sensing
[13:48] in early june i had a field sampling day to observe biofilms growing on the mud flats of san francisco bay
[13:54] my colleagues and i wanted to know which day would be best to go sample and we're interested in the modis
[14:01] oli and ulti sensors if you look here at the image on the left you can see that i've clicked those
[14:07] sensors here the date range is the one that i had here of the june 1st through june 6th
[14:16] the location was an approximate location of where we were going to be sampling and i wanted it in a table format
[14:28] i submitted my request and it provided the image that you see on the right and it's a bit cropped at the bottom
[14:34] you can see at the top modus aqua midway down the image oli and below that olci from sentinel 3a
[14:44] look at the columns of the table it gives the date of the overpass time and utc latitude and longitude
[14:51] satellite azimuth and elevation range sun azimuth and angle pointing direction of imager and flags note the flags and below the table the
[15:03] meaning of those flags for example modis imagery to be collected on the 5th of june has a flag of 3
[15:11] meaning a satellite viewing angle that exceeds 45 degrees from zenith and this oblique angle could result in distorted
[15:18] images images modis imagery to be collected on the 6th has a sun glint warning in both of these cases this means that
[15:27] the data collected on those days will probably not be of the best quality for aquatic remote sensing
[15:32] so maybe it'd be wise to choose a different day for sampling these predictions are just that predictions of when the satellite will
[15:41] be overhead of the location that you select select the predictions improve as you get closer to the date of interest
[15:49] so it is a good idea to check it once to get the day and then start working on your logistics
[15:55] and then check the prediction a few times more closer to the date that you're going to sample to be sure to
[16:01] narrow down the time range of when the actual overpass will occur it has become increasingly common to
[16:12] incorporate citizen science into research and monitoring programs what kinds of activities are non-scientists actively engaged in for
[16:20] new discovery some activities include collecting measurements of water quality parameters either directly via water sampling or indirectly using mobile apps like hydro
[16:32] color which gives you an idea of the color of the water and also a predicted spectral signature of the water
[16:40] mapping waterways or measuring flow in cases where regulatory agencies may limit data collection to trained scientists scientists some agencies in the u.s have used
[16:50] citizen science to develop remote sensing algorithms and a hackathon type of competition and finally education and outreach is a
[16:59] type of activity for stu citizen science if you'd like to learn more about citizen science programs related to
[17:06] water quality we encourage you to check out some of these examples listed on the right if you download the slides from today
[17:13] you will be able to use the active links in the pdf to connect to the different websites associated with these programs
[17:23] the scientific enterprise is built on the foundation of trust and it is in the quality control of data
[17:31] and our honesty and interpreting the data that we must instill in the community community so that we can provide accurate
[17:38] information and trust the valid validity of the results there are scientific considerations and regulatory considerations when we talk
[17:47] about quality control for scientific considerations this means using statistical approach approaches appropriate to the study problem this can be related to experimental
[17:59] design the sample size the range of values observed the correct handling and processing of samples samples the rigorous use of statistics to
[18:11] establish thresholds for significance during the experimental design phase prior to collecting the samples to establish the meaning of outliers in
[18:21] advance so the data analyst can objectively remove these observations without bias so no cherry picking of the
[18:29] data to obtain a particular result there are regulatory considerations as well well many regulatory agencies like the u.s
[18:38] environmental protection agency publish standards for water quality parameters and the protocols used to measure them use protocols published by your
[18:48] regulatory agency to guide your decisions for sample collection quality control of data data processing data management and
[18:58] communication communication if your region does not have these many regulatory agencies around the world openly publish these protocols and
[19:07] standards that you may use as a guide regulatory agencies set standards for water quality parameters at the federal
[19:18] state or provincial or local level these standards serve as benchmarks and statistically evaluating the observed water quality parameters
[19:28] sometimes an index or score like you see on the bottom right of this image here is derived from water quality parameters
[19:36] to quickly communicate the state of the water body in this case it's very clearly defined red yellow and
[19:45] green where green is good to excellent marginal to fair for yellow and red is poor poor information for remote sensing imagery
[19:55] can be aggregated into scoring systems such as these to provide information to stakeholders about a water body quickly without the
[20:03] need to train stakeholders on how to interpret the imagery an important albeit less glamorous part of any water quality monitoring program
[20:16] and especially one that uses the terabytes or more of data often needed for remote sensing imagery imagery is a well-defined data management plan
[20:26] much of the guidance you see on this slide may seem pretty obvious to many people but it is worth mentioning
[20:33] data management includes building a plan for how you will manage and disseminate your program's data store data products locally and off-site
[20:41] like in the cloud follow guidance for how to store metadata this may be domain specific or prescribed by law by your regulatory
[20:50] agency agency no data management plan is effective if people don't know about it or how it works
[20:58] works be sure to write up the data management plan and share it with your organization keep it updated as organizational
[21:05] processes or technology change and have a plan for how you may share your program's data with external
[21:11] community data servers a few years ago i took a red eye to washington dc for a workshop and the
[21:20] first day was an all-day meeting on how to comply with nasa's guidance for building a data management plan
[21:26] my colleagues and i were groggy and you might think the subject matter would not help but boy was i wrong
[21:31] the oak ridge national laboratory distributed active archive center gave the presentation on how to build an effective data management plan
[21:39] and provided best practices for preparing data sets and sharing externally and archiving it was a lively and fun presentation and my colleagues
[21:48] and i got a lot out of it these presenters were passionate about preserving data integrity and why not
[21:55] much of the data is related to the earth's science and preserving its integrity and archiving it is essential for
[22:01] understanding the earth and how it is changing due to climate change i encourage you again to download the
[22:08] pdf of these slides so you can follow the active link at the top of this slide the website covers so much more than
[22:14] just the best practices listed here and is really informative for any project that generates data their get
[22:22] guide guidance for best practices include include using stable file formats defining the contents of the data files
[22:30] using descriptive file names using consistent data organization preserving information with version control control documenting your data performing basic
[22:41] quality assurance protecting your data and publishing your data data i encourage you to check out their website if you're ever planning to
[22:48] submit a proposal for nasa funding you will be required to have a well-defined data management plan and this website
[22:54] addresses the topics that you'll need to cover so in this section of the lecture on designing an effective water quality
[23:02] monitoring program using remote sensing we've reviewed logistics related to both in-situ and remote sensing observations incorporating citizen science
[23:13] scientific and regulatory considerations for the quality control of the data interpreting results both in terms of responding to regulatory benchmarks and
[23:22] the visualization of data and the best practices of data management and dissemination the next few slides are about
[23:31] communicating results to stakeholders the ideas presented here are not just specific to remote sensing but capture communication guidelines for any water
[23:41] quality monitoring program there will be a lot of information in the next eight slides but at a high
[23:47] level the ideas for communicating to stakeholders are captured here know your audience use clean and concise language
[23:56] appropriate for your audience's reading level level limit the number of main points in your message use figures or graphics that
[24:06] deliver the message on their own if numbers are used explain what they mean mean if risk is communicated as a probability
[24:16] explain the meaning of that probability and cite your sources so if you're involved in a water quality
[24:24] monitoring program we'd like to hear a little bit from you and have you share with the other participants as well
[24:30] well we're interested in finding out is who are your stakeholders and how do you communicate to them and
[24:38] also what are some tips that you would provide to others who may be in your position maybe people who are just
[24:44] starting out on how to communicate to stakeholders we'd like to hear from you so if you could please take just a
[24:51] moment and look at that questions section of the webinar software and type in your answers there we'd really
[24:57] appreciate it we really want to hear from you the next several slides provide guidance for water quality monitoring
[25:07] communication communication i found this guidance through the source you see listed at the bottom of the slide that link and i encourage you to
[25:14] take a look at the paper this paper reviewed the communication efforts of water quality monitoring programs in the us
[25:22] that had agreed to adopt the communication guidelines of the center centers for disease control and prevention and you see the link for that
[25:30] listed to the right of that these guidelines are listed here on the left left some of the programs cited in this
[25:39] article at the bottom had complied others only partly and some not at all these guidelines suggest that
[25:48] communication coming from a water quality monitoring program include each of the following a main message or call to action for the
[25:56] water quality problem language that can be understood by the audience audience information is presented clearly the science used is justified and well
[26:08] well sourced it gives behavioral recommendations if numbers are presented they're explained explained if risk is communicated it's explained and we'll walk through
[26:22] each one of these in more detail so first the main message or call to action action does the material contain one message
[26:33] is the main message at the top beginning or front of the material is the main message emphasized with
[26:40] visual cues does the material contain at least one visual that conveys or supports the main message message does the material include one or more
[26:50] call to action for the primary audience language language do both the main message and the call to
[26:58] action use the active voice does the material always use language the primary audience would use for example if your audience reads at a
[27:07] high school level be sure to write the message at the same reading level as your audience does your message contain uncommon terms
[27:15] or scientific terms be sure to define them them and always try to avoid jargon as much as possible
[27:24] information design is the most important information the primary audience needs summarized in the first paragraph or section
[27:33] in communications and journalism this idea is called the inverted pyramid style style you present the lead the most important
[27:40] information usually who what when where why how at the very beginning then the text contains additional facts
[27:48] or details in order of importance arguments background evidence and the end is information that is nice but not necessary
[27:58] this is a great way of writing articles or blog posts but also reports people are busy or have short attention spans and often
[28:07] scan text rather than sitting down and reading it i know i'm guilty of this too a lot of people are maybe not you
[28:14] this inverted pyramid approach structures the writing so that people can get the most information out of something with the least amount of
[28:21] effort effort also is the material organized in chunks with headings does the material use bulleted or numbered lists
[28:32] state of the science does the material explain what authoritative sources such as subject matter experts and agency spokespersons
[28:42] know and don't know about this topic so let's say your bulletin provides some information information is there a person that the audience
[28:49] member can contact or an agency contact that they can meet with to understand it better behavioral recommendations
[29:00] does the material include one or more behavioral recommendations for the primary audience don't fish does the material explain why the
[29:09] behavioral recommendations are important do the behavioral recommendations include specific directions about how to perform the behavior numbers
[29:22] numbers does the material always present numbers the primary audience uses will your audience understand what those numbers mean
[29:30] and do you include units with the numbers numbers does the material always explain what the numbers mean
[29:38] do you have some sort of key that helps the audience understand the meaning of those numbers and does the audience have to conduct
[29:46] math or calculations to understand the point that you're trying to make because you know if they're in a hurry this will
[29:53] probably not happen is your number data presented as maps of remote sensing imagery these are numbers just presented with a
[30:02] color scheme and a color bar to aid in interpretation interpretation do you provide resources so that your
[30:08] audience can interpret the meaning of the maps you're presenting do you provide uncertainty estimates or ranges associated with your remote
[30:16] sensing estimates does your audience understand how to interpret those uncertainty estimates with remote sensing imagery it's really
[30:27] easy to fall into the trap of thinking that the results are self-evident to the viewer viewer remember that your audience may not have
[30:34] the same experience reading maps as you do do they may be unfamiliar with landmarks that are familiar to you
[30:39] be sure when presenting maps of information they are well labeled the data products being used are described
[30:46] and the estimated values for those products are clearly identified and when possible their uncertainty estimates are included
[30:56] risk risk does the material explain the nature of the risk does the material address both the risks
[31:04] and benefits of the recommended behaviors behaviors if the material uses numeric probability to describe risk is the probability also explained with
[31:14] words or a visual humans struggle with understanding risk help them in your communications by being straightforward about which risks
[31:24] are being reported and what that means in concrete terms that your audience will understand we understand that these past few slides
[31:32] have covered a lot of material related to the communication of water quality monitoring efforts we encourage you to download the pdf of
[31:40] this presentation i encourage anyone who is working on a water quality monitoring program to read the paper that is cited at the bottom of
[31:46] the slide i learned a lot from it so we'd like to take a moment to review some of the main teachings of this
[31:55] webinar series the training objectives were to understand which data products are used for water quality monitoring to talk
[32:03] about rigorous practices for obtaining and processing aquatic remote sensing data data and to build skills and image processing
[32:10] for water quality monitoring for coastal and and inland water bodies using nasa's cdas image processing software we presented a general workflow that can
[32:21] be used to incorporate remote sensing into a water quality monitoring program with the flexibility to customize or
[32:27] create new algorithms for a particular region of interest we talked about the importance of using remote sensing data to augment an
[32:35] in-situ monitoring program and the need for rigorous practices to ground truth data throughout the monitoring program so the observations made through remote
[32:44] sensing imagery are quantitatively valid we cited several case studies of water quality monitoring programs that incorporate remote sensing observations
[32:56] one of these case studies was presented by our guest speaker dr daniella girlin of the wisconsin department of natural
[33:02] resources resources she talked about their satellite water clarity monitoring program in lakes of wisconsin wisconsin she and her department also generously
[33:10] provided data for us to use in our demonstration and exercises using sea bass to validate satellite data products
[33:17] in using in-situ water measurements through the course of this webinar including skills we have covered today we have provided information to you on
[33:29] data access and download using nasa's ocean color web level one and two browser the sea bass data access portal
[33:36] the ocean biology processing group's overpass predictor and the usgs earth explorer we have covered many skills in seatas in
[33:46] this course or we're about to cover them in part one you learned the basic skills from cdas
[33:53] like defining land masks identifying flags creating color bars exporting an image reprojecting and cropping cropping today you will learn more about
[34:04] co-locating bands band math building a mask statistics filtering filtering extracting mosaic images linking in-situ data from a c-bass
[34:16] format to imagery and processing between levels to derive data products and perform atmospheric correction using the oc ssw processors
[34:27] we'd like to remind you to complete all of the exercises from part one and three in order to know the answers on the
[34:33] google form homework those homeworks for parts one and three are due this friday june 21st if you wish to earn a certificate of
[34:42] completion looking ahead today amito will give a demonstration using remote sensing in a water quality monitoring program
[34:53] then following from the demo amita will be walking through the exercise using data and methods from the wisconsin
[34:58] department of natural resources after that i will return for more skill building using cdas with time remaining we will have an open
[35:08] laboratory work time for you to complete the exercises and ask questions much of this time will be quiet and
[35:15] periodically we will turn on the audio to answer questions that have come in through the chat feature on the webinar
[35:20] software software like we warned you today is full so let's get started in this next section amita will be
[35:31] presenting a demonstration using remote sensing in a water quality monitoring program this is a brief demonstration and it's more or less a continuation of
[35:49] what we did last week if you recall we downloaded a lancet only level one image for 23rd of
[35:58] september 2014 using usgs earth explorer then we converted this level 1 data to level 2 by using ocssw in cdas
[36:11] so today what we are going to do is compare chlorophyll a concentration from transect level 2 image that we generated
[36:19] last week and compare them with measurements instead of measurements from rockleigh and geneva lake both of these are in wisconsin
[36:30] these institute data were provided to us by dr daniella girling was our guest speaker last week and thank you daniela
[36:38] for providing this in c2 measurements so we can compare remote sensing based chlorophyll with nc2 chlorophyll data
[36:47] and to do so we are going to first start with in situ data file that we received from
[36:53] wisconsin dnr we are going to rewrite this file as a text file in a format that is
[37:00] readable by c dash and that is in c base format so we will briefly talk about that
[37:07] that then once we rewrite this file we can import that in situ data file and landsat level 2 image both in series and
[37:15] compare power field values from both these sources for these two layers also also you will be conducting a very similar
[37:24] exercise at the end of the presentation during the lab time only thing is that you will be using
[37:31] landsat image for first september 2015 and in c2 data which were coincident with overpass of this image landsat
[37:41] on that day are lake mendota and lake wow basa these two are from wisconsin as well and uh daniel applied it in c2 data
[37:51] again for these uh two cases also now now uh your homework for last week was to download this image
[38:01] level one image and then convert it to level two by using ocssw we have heard from a few participants
[38:10] that there were some difficulties sometimes in either installation or execution of ocssw so what we have done is we have uh
[38:19] provided this image in on our website so landsat level two two uh data are already converted and
[38:27] they're available on our website so that you can download and continue working with this exercise during the lab time
[38:36] so what we are going to do now is start with sebas sebas format information seabass is cbev's
[38:47] bio-optical archive and storage system seaweed was one of the earlier nasa ocean color missions and sea bass was said to have in-situ
[38:58] data for this mission a number of cruises were there and institute data were taken so this portal was set up so that
[39:06] nc2 data can be placed here for everybody to use and you can browse through all the links
[39:15] here to learn more about it what we are going to do is we are going to use the
[39:20] same format that c bus uses we are going to look we are going to start with in c2 link data and convert them into
[39:29] the same format so that c dash can be defined defined so here in contribute data submitting overview has
[39:38] information about data format that is required by c c does to read the file institute data file
[39:46] so a few important points here first first the file has to be a text file you can
[39:53] use text editor on your computer to create this file uh data themselves are actually columns they are deleted by spaces tabs or
[40:03] commas commas any one file can use just one of these delimiter delimiter and and um one of the important things to note
[40:11] here is that there is a header part to this file metadata are given in this header and
[40:17] we'll see an example for that also also here there is a link to field names and units this is very important
[40:26] here on in this side in this column all the nc2 data that can be measured whatever measure
[40:34] measure earlier they are described here and corresponding field name that has to be specified in c bus file
[40:43] they they these names are given here and and units for each of the variables are also given here so
[40:52] for us we're going to focus on chlorophyll concentration and chl is the field name for chlorophyll so we are going to use that but if you
[41:01] have some other observed in c2 parameters then you can look at the field name and specify that
[41:10] field names and units are not case sensitive but important thing to note here the end is that the header should not include
[41:20] any white space we will go through some of these options when we look at the file but main thing
[41:26] to keep in mind is that there has to be a header file has to be in text format
[41:33] no white spaces and one of these delimiter has to be used so if you go back to
[41:44] metadata header link link here is an example at the end of a header header it starts with this slash begin
[41:57] underscore header and it ends with slash and underscore header again there are no blank spaces here here all the fields they don't have to
[42:09] be in any particular order and these they're all not mandatory mandatory fields either you can specify investigators affiliation contact etc
[42:22] which cruise or what kind of institute data is there a station id all these meta metadata can be covered
[42:30] here here you can provide start date and end date here start time and end time for the ec2
[42:38] measurements measurements these four parameters so north and south latitudes and east and west longitudes all in degrees
[42:47] they are the uh maximum or extreme north and south and eastern west points so if you have
[42:53] multiple in situ measurements they fall within this polygon so these are the corner points east west uh south and
[43:02] north so they have to be specified these data so water depth in meter if some field is not applicable you can say any
[43:15] these data are not mandatory again but if you have them you can put them here in header for your measurement so so
[43:22] this is sake depth cloud percent wind speed wave height if you have in-situ measurements for these parameters you
[43:30] can specify them here for analysis another important thing is that you have to specify which delimiter you are going
[43:39] to use in this case tab is used next you specify data fields that are included in data file so here their time
[43:50] depth depth chlorophyll concentration this is a type of pigmentation and this is total pigmentation concentration and units
[44:00] have to be specified for each of these so time is in hour minute second that season meter
[44:08] chlorophyll concentration in milligrams per meter cube and pigmentation they are in milligram per liter cube as well and
[44:16] then then data data have to be placed here in columns with delimiters so this is a typical c bus
[44:26] file format and data have to be written like this to be able to read in cdf so next we are going to do the same we
[44:36] are going to start with in c2 data and put them in this format so this is the file that was provided by wisconsin
[44:49] dnr and [Music] [Music] you can see that it's an excel file with field id station id session name so
[44:59] these are the links here the station type official water body name so you can see that this is a big file
[45:09] with several in-situ measurements not only that here you have let's do longitude longitude date and time persons
[45:22] persons who collected the data there is information about cloud cover wind speed in direction air temperature barometric pressure
[45:36] all these data are available and and now you can see that water temperature dissolved oxygen conductivity conductivity specific conductivity
[45:51] safety death watercolor watercolor turbidity it's all organic carbon these are all available in situ measurements and there
[46:04] is chlorophyll concentration here in microgram per liter as we saw earlier we require seedas requires that chlorophyll concentration be in
[46:18] milligrams per meter cube in this case microgram per liter actually is equivalent to milligram per meter cube so we can use these numbers
[46:29] as they are but if not then you have to make sure that everything is in proper unit as we saw in this seabass formation
[46:38] there are other like sediments are there a multiple in c to data we are going to work with chlorophyll concentration
[46:47] today and you can explore this data further if you like what i have done is that i have just isolated
[46:59] or substitute data in this file there are overlapping observations in situ observations overlapping with landsat overpass there are six points in two lakes so
[47:18] three in each and they are given here and and everything else is here there is uh concentration
[47:26] concentration values here um um you can also see that there is i know that there is that
[47:36] that information information how deep the lake is at the place of observation that is available in in this
[47:50] so stationed that in in meter so this is how deep the lake is so so what what we have to do is write this data into c
[48:01] bus format and i have already done so so i'm just going to show this sample to you
[48:15] this is the header information these are the extreme north south east-west longitudes and all we have i have used the limiter
[48:28] comma here and fields are station id let's do longitude time depth depth and chlorophyll concentration and these
[48:39] are the units if there are no units you can say none so it is station there's no unit
[48:45] let's do long student degrees time in hour minute and second depth in meter and this has been me i've
[48:52] kept milligram per meter cube which is equivalent to microgram per liter and these are the numbers with comma
[49:00] separating each column so this is it's fairly simple and right now we just have six points if you have more points
[49:08] you will be adding more points in here as well if you have other fields you can add
[49:15] other fields here units here and then add add those numbers here in these rows so this is how you will be
[49:25] creating easy to data next we are going to get this file into see that along with our lenses
[49:33] image so let me close some of these and start with so i have opened see that already and
[49:47] this is the image for 23rd september 2014 that we converted to level 2 last week and if you remember we used this
[49:57] mask manager to turn this cloud ice mask on so that only the water bodies show up in here that's the threshold
[50:06] that is set up in cedars so that it works that way and now what we can do is
[50:13] get the institute data in here if you go to on top and look at this icon it is import field
[50:23] measurements measurements can click on here and you can go to the seabus format text file that you created
[50:34] just saw that you open that and it puts all the measurements where they have taken easy measurements you can
[50:43] zoom in so this is broccoli and a few minutes to move this image so so now what we want to do is compare
[51:36] these data you already have chlorophyll concentration in the lake from landsat and you have three points here you want
[51:45] to see how remote sensing based profile it compares with these ec2 data at these points so what we're going to do is go
[51:55] here here you however it says display correlative plot for a selected band once you click on it it asks you for
[52:05] some information here box size is it tells you how many pixels to consider whether it is in situ data so here we
[52:15] have just just take one pixel from landsat image where there is institute data data point data source is the file that you
[52:23] created created and this is chl this is the set data and it comes up with this plot
[52:31] we just have three observations in each layer which coincide with this over pass and so that's all we have for now
[52:41] we can say show regression line this line actually is is fitted to the data that you see here
[52:50] here is the lancet part of chlorophyll and this is institute institute as you can see there is reasonable
[53:02] comparison here you can what you can do is change the box size that you consider here you can look at
[53:13] three three so when you change one here this is the correlation coefficient and these are the coefficients for this line
[53:22] so so what you can do is change this say three by three pixels and then correlation coefficient
[53:31] improves it is point eight five or point eight six if you go to five it even improves the
[53:39] correlation gets better it's 0.87 here and as you can see the then the line these measurements uh length of
[53:48] base and in c2 they do fall along this line except for this point and if you go back and check
[53:55] this point here is where you will see that the length depth was less than all these other points so perhaps there is some
[54:04] bottom effect that is seen in landsat and that's why there is less agreement between the two measurements here
[54:14] but this is basically how you can compare compare landsat and chlorophyll data you can see that there are biases
[54:23] here high the values are up to six here eight eight point five in length so uh since
[54:31] the chlorophyll concentration is a little larger as seen by landsat compared to ec2 data and this is not
[54:38] completely surprising and we can discuss this you can also think about it by you would not be surprised to see the
[54:47] differences we'll discuss this later when you go through the exercise for another image that we are going to see
[54:55] now now so so so um one thing to note here is that we just have six points overlapping with
[55:04] satellite data and statistically this line fitting will not be significant last week uh daniela girling showed us
[55:14] that they used a couple of thousands of observations to develop their algorithms for their legs so you actually need a
[55:22] lot more data so a lot more in c2 data coincident with satellite overpass only then you would be able to develop a
[55:31] statistically significant algorithm here this was shown mostly to as an example that how you can do that but
[55:40] ideally you would have enough observations so that you can have robust coefficients or correlation between satellite data and in situ data
[55:51] so now next you have have during the lab time you will be following these steps with 2015 september image and you can
[56:01] download level two image from our website you already have excel file for 2015 you will be making that
[56:09] in cds format and then you will be comparing in cdas just as we did here so i'm going to
[56:18] end this demo now here and hand this back to sherry and then during the lab time then you can come back and do the
[56:25] similar exercise so thank you and sherry back to you in this section i will be presenting the
[56:36] exercise advanced skills with cdas if you look at your webinar software you'll see that there are handouts and
[56:44] the pdf for this exercise should be located there and it will also be located on the course website
[56:52] so when i refer to page numbers as i go through this exercise what i'm referring to are the page numbers that are in this
[56:58] document this is the first page that you see here of the document so advanced skills with cds
[57:11] the objectives for this exercise is are to learn how to co-locate bands to do band math to understand how to use the statistics
[57:21] tool tool to filter a band and just understand what that might look like and why you might use it
[57:27] to do pixel extraction and to combine or mosaic two images i'm going to be navigating out of this
[57:39] document now um so if you've already printed it up and you're following along that's great if not you may want to pop it up and
[57:47] down down in your computer screen so you can follow along as i go through this so i'm going to go ahead and open cdas
[57:54] and and then do some file management so i'm going to exit out of there you can see here
[58:06] i've done some of the file management i have my rset training folder and uh cds advanced skills i've created
[58:16] a a folder named that if you recall from part one we did swanee river we used these files
[58:27] to to go through the skills that we learned there there including reprojecting and then cropping or building a subset
[58:37] i've already actually done this step where i've moved the files over to cdas advanced skills to use for this part three exercise
[58:46] so what i recommend that you do is number three on page three for beginning steps steps is to go ahead and copy the files over
[58:56] from part one to part three and these are the reprojected subset files so if i go to swanee river here
[59:04] you can see that i have these subset files located here here ignore these here that just say
[59:12] reprojected the ones that we're going to be using for this part 3 exercise are going to be
[59:19] the iop reprojected subset data.data.dim files the oc reprojected subset.data.dim files and the sst reprojected subset.data.dim go ahead and launch cds if you haven't
[59:38] already done so on page 4 i gave you an important note that these reprojected files needed to
[59:47] all be cropped with the same geographic coordinates coordinates if you have not already done this exercise the part one exercise and
[59:56] cropped to the same dimensions then i recommend that you pause and go back and do that now so that you'll have
[1:00:03] the right data for this exercise okay so i've launched cdas i don't want to check on a new version i'm just going
[1:00:14] to leave that alone and i'm going to look at the data management here just to confirm i have
[1:00:22] my rset training folder cdas advanced skills suwanee river and then i have i added this extra folder of swanny
[1:00:31] river but in the image here on page five you see that i just skip right over to
[1:00:35] the subsets so the six subset files that you see in the image on page five match these
[1:00:42] subset files that i just listed for you just a moment ago alright so we're going to go ahead and
[1:00:52] start with co-locate bands i'm now on page six i'm going to go here to back to my cdos
[1:00:59] window window and from the um cds advanced folder i'm going to open these subset.dim files for each of the
[1:01:10] types of data that i want the oc sst and iop okay and you can see that those
[1:01:34] files are opening then on the left-hand file manager pane here in the cdas window open that up a little
[1:01:41] bit so we can see it a little bit better so in the cdas at the menu bar i'm going
[1:01:46] to click on raster co-locate so raster drop down menu co-locate this is going to open the create
[1:01:54] co-located file i'm going to select oc file as the reference file so i can just use this since these are
[1:02:04] already opened in the file manager i can just do this drop this drop down menu so i'm going to choose oc as the reference
[1:02:10] file file and see surface temperature sst as the dependent file so looking here it should match this upper part should
[1:02:20] match the image that you see on the right on page 7. and then you want to look at your output
[1:02:27] name name we want to give it a meaningful name and what we're going to give it is what
[1:02:34] you see here listed in the image um and we're going to cheat a little bit we're going to use oops
[1:02:40] we're going to go ahead and type it out so a 2005 and and let's see oc underscored sst
[1:03:00] reprojected we're going to save it as a beam uh map which is the default and we're going to verify that it's
[1:03:12] going into the correct folder and the folder that i have listed here just has that additional folder the swanny river
[1:03:18] folder in there just because i wanted to keep it a little bit more um localized i'm going to leave the rest of these
[1:03:24] that's the default and and because we've already reprojected these using bilinear i'm going to leave the nearest neighbor resampling so i'm going
[1:03:32] to go ahead and click run and wait for a moment okay it gives me a notice saying that
[1:03:39] i've run it correctly i'm now looking at page 8. we're going to repeat this collocate step using the newly co-located file as
[1:03:48] the reference file and the iop file as independent independent so using this drop-down we're going to use that
[1:03:55] the newly you can see oc sst and then the iop as the dependent we want to give it a new name under
[1:04:04] output you don't want to overwrite the original one they're the the one that we just created so we want to add
[1:04:09] iop to the name here so you can see it written out in the output and just verify that we're putting in
[1:04:16] the same location that we want to put it into which is in the swanny river one we're leaving it as nearest neighbor
[1:04:22] when you're ready and you feel satisfied that you have matching information here go ahead and click run and wait
[1:04:33] okay so when processing is done go ahead and click ok we're going to close all the files
[1:04:39] except for this newly co-located file so we're going to go ahead and close the cola tape file window
[1:04:47] and then i'm going to scooch this out a little so you can see the whole file name
[1:04:51] name we're going to go ahead and close everything except for this last one that you see here at least that's the order
[1:04:56] it's it's formatted for me in my file manager so right click close and then clicking on the rasters folder
[1:05:13] in the file manager you notice that there are a lot of bands now and they have appended on them these r's and d's
[1:05:18] and that gives you a record of which one was being used as a reference and which one was being used as a dependent so it
[1:05:24] makes sense that the iop file that you were working with remember it has the back scattering the bb the
[1:05:32] absorption absorption by detritus and gel stuff at 443 um that that was the last one that you did and
[1:05:38] you chose it to be the dependent and that's why it has the d appended on the end
[1:05:44] end okay so what we'd like for you to do next is to look at this chlorophyll a
[1:05:48] one we're just just for now just ignore these appended um letters here if you're going to be using this method for your
[1:05:54] own work it might make sense to change the naming on these but for just the default we just wanted to just leave
[1:05:59] that alone and just ignore those for now so we're going to double click on chlorophyll display okay this should look familiar
[1:06:08] to you from part one we can also look at some of the other bands in this region so you may want to
[1:06:17] just take a second we're still on page 9 number 12 and just open a couple of the
[1:06:21] other bands so let's see kd 490 whoa whoa that's just in black and white i'm just going to skip ahead
[1:06:32] normalize for larson's line height that's artifacts of those lines in there it's pretty common sea surface temperature
[1:06:41] pretty familiar with this one because we were looking at that quite a bit and then i'm going to also open up the
[1:06:46] adg adg 443 443 one one you see there i'm going to close nflh and kd490 for for now go back to chlorophyll just for
[1:07:01] viewing so if you prefer to reduce the number of bands in your file so you're not looking
[1:07:12] at this humongous number of bands over here that you're probably not even going to use you can repeat using the crop tool and
[1:07:19] instead of doing a spatial cropping like you did in the previous part you can do a band subset um and so we're going to
[1:07:26] do that now so instead of spatial subset we're going to do a band subset make sure that the full scene is visible
[1:07:41] and what we're going to do is looking at the the image that you see here we're going to
[1:07:46] deselect some of these so i'm going to go ahead and deselect aot and the angstrom i'm going to leave all the rrs
[1:07:53] remote sensing reflectances in place i'm going to keep chlor a you can see this there's a table right
[1:08:01] next to the image on page 10 where i tell you which ones to keep so without reading off every single one of them
[1:08:08] right now i'm just going to verify that i'm actually keeping the ones that i say that i want to keep
[1:08:34] removing a lot of the iop ones and what this does the benefit of the band subset as you can probably already
[1:08:45] guess is that by removing these layers in the data file we are making the file in a manageable size so we don't choke
[1:08:52] our system trying to do processing on it because if we're really not interested in some of these data layers that are in
[1:08:58] here there's really no use having them take up space and the reason why i didn't do this step
[1:09:03] earlier is i just wanted to get through the spatial subset and have you guys understand that concept
[1:09:08] before jumping along to this one but i could have done both of these steps when we cropped in part one um as one step
[1:09:15] one unified step so what i'll do is i'll just verify that i have the ones that i
[1:09:20] want whoops i accidentally took off that one and should have kept it and and i'm pretty satisfied that i am keeping
[1:09:29] the ones that i want and dropping the ones that i don't okay i am satisfied with this
[1:09:40] okay going back to the spatial subset just verify metadata subset okay i'm going to click ok this will create a new file that will be
[1:09:50] visible in your pan the file manager here you'll notice that it popped up down at the bottom
[1:09:59] be sure to right click on this file to save it so save as yes we really want to save it and yeah
[1:10:05] it's going to have this kind of ugly name name [Music] [Music] it's giving us a default name let's see
[1:10:11] if it'll provide the opportunity yes it will to change it so what we want to call it
[1:10:20] is we want to call it what you see here on page 10 a201505118400.l2 underscore lac underscore combined
[1:10:38] dot dim okay okay and that should save it let's just verify yep it's there and what we want to do is we'll close
[1:10:48] these layers and we're going to close the other file that we used okay so when you click on rasters now
[1:10:58] you can see a much more manageable list here in the file manager pane now let's open chlorophyll sea surface
[1:11:06] temperature and the adg443 giop data layers and from now forward i'm just going to refer to the adg file as just
[1:11:13] adg adg like i did in part one so there's the chlorophyll chlorophyll there's sea surface temperature and the
[1:11:19] adg adg so this is great we've got all these nice files that we're viewing in the image viewer
[1:11:35] okay so after you've had a chance to view these we're just going to go ahead and close these layers across the way
[1:11:40] here okay so we're now on page 11 and we're looking at band math or math bands depending on how
[1:11:49] you want to think of it sometimes it's gainful it's helpful to gain insight from imagery by performing
[1:11:55] math on the bands just gives you an idea of what the wonder what the ratio of this color is to that color um if you're
[1:12:02] familiar with using ndvi uh that's one pretty simple way to think about band math is with the ndvi the ratio of some
[1:12:11] of the bands nasa uses a number of chlorophyll algorithms algorithms because the conditions can vary from one
[1:12:18] part of the world to the next and what's interesting about chlorophyll algorithms that we don't really talk about in this
[1:12:23] webinar series but we covered in the fundamentals is that fundamentally the chlorophyll algorithm comes down to a
[1:12:29] polynomial equation that's been fit and it uses the ratio of one ratio one color band to another color
[1:12:38] band and as one of the coefficients in the in the this equation and so band math is a really effective way you could
[1:12:45] actually write out the chlorophyll algorithm here if you wanted to band math is one way to observe the data and
[1:12:51] even to compute data products so if you ever get to the point where you're doing algorithm development using the simple
[1:12:57] band math tool is one approach that you could take to quickly seeing oh am i estimating chlorophyll using my new
[1:13:02] algorithm and you can use this band math tool it's pretty cool that you can get so far with image processing and using
[1:13:09] some of these simple tools if you want to know more about the chlorophyll-a algorithms that nasa uses
[1:13:16] on page 11 is a link to the ocean color website and it talks about the chlorophyll a
[1:13:22] algorithms that are used for the different sensors and also under which conditions it's most likely to be used
[1:13:29] so for this band math section instead of focusing on chlorophyll we're going to work on something called the ci or the
[1:13:36] color index which can be used as an intermediate step to compute chlorophyll this ci is different than the
[1:13:43] cyanobacterial index that we covered in the part 2 lecture this is the color index index and if you did look at the link that was
[1:13:51] located on page 11 it goes into a little bit more detail on what the ci is but in the middle of page 12 you see the
[1:13:58] equation for ci and basically what it's doing is it's taking the remote sensing reflectance at three for three different bands at the
[1:14:07] wavelengths of 443 555 and 667 nanometers it's using those that information from those bands and also what the wavelengths are and it's
[1:14:18] computing this number the ci so we're going to go ahead and give a try at calculating this ci they then for
[1:14:27] the algorithm take ci and do more with it but ci is this intermediary step and it's pretty straightforward how to calculate
[1:14:33] it using band math so your cdos window should be open and you should still have this file open
[1:14:39] that we combined in the earlier section and what we're going to do is we're going to open up the remote sensing
[1:14:44] reflectance data layers or image layers corresponding to the colors that are listed in the table on the bottom of
[1:14:51] page 12. so at man at wavelength 443 555 and 667. i'm going to go ahead and apply the
[1:15:07] land masks to each of these and and i like my landmass to be black but you can choose whatever color you want
[1:15:18] and then the next thing that i'd like for you to do is to tile the images horizontally so at the menu bar across
[1:15:24] the top is to tile horizontally synchronize them and zoom all as you see me doing down here in the navigation controls
[1:15:39] i might see if i can no no so my image here looks a little bit different than what you're seeing on on
[1:15:47] page 13 but you get the idea of what we're aiming for so now i'm at the top of page 14 number
[1:15:58] four and we're going to start working with this uh the math band tool so what i'm going to go ahead and do is
[1:16:05] i'm going to go across the top in my menu bar where it says raster click on it and the drop down menu gives
[1:16:10] me math band dot dot dot the ellipses so i'm going to go ahead and select that and it's what it's going to do is it's
[1:16:20] going to open a window called create logical expression math band and if you look at the image on page 14
[1:16:27] you can see what i have here it gives the target file so it's listed the correct file it's the only one
[1:16:34] that's open in my pane and i'm going to change the name so it's going to default to some name i'm going to choose a name
[1:16:39] for it i'm going to call it ci spectra wavelength i'm just going to leave it as it is
[1:16:45] for now i'm just going to save it have it be a virtual save and replace nan i'm just going to leave
[1:16:50] that as the default the next thing that i want to do is i want to click on this button here that
[1:16:55] says edit expression and that's going to open up the expression editor i'm now on page 15. so what we're going to do now is we're
[1:17:06] going to enter the equation for the ci and you can see it listed here in the expression
[1:17:13] part of the expression editor you could also use the equation that we provided for you on the middle of page
[1:17:19] 12 of this laboratory or this exercise okay so we recommend using the functions as much as possible
[1:17:27] when you are typing in your expression it is possible to type it on the keyboard but we recommend using the
[1:17:32] functions and by that i mean these tools down the middle and also instead of typing in the band name using this ban
[1:17:39] choice under the data sources so i'm going to give this a go let's see so okay okay so
[1:19:25] so it's always a good idea to hold your the printout here to see if it actually matches what i'm aiming for and i have
[1:19:33] all of the parentheses in the correct location and i've identified the bands and the wavelengths that i'm using in
[1:19:39] the expression editor so i'm just taking a moment and i'm reviewing that if you're brave i encourage you to go
[1:19:49] ahead and just try to type these in and see if you how your results turn out i've learned from experience that
[1:19:54] sometimes it's best to just use the tools tools that they provide okay okay so i am satisfied that what i have typed
[1:20:03] in here with the expression editor is what i actually want the ci calculation to be so i'm going to go ahead and click
[1:20:09] ok and then i'm going to click ok again you can see that it filled this band math
[1:20:19] mathman expression i highly recommend if you're ever going to type in an equation you use the expression editor so i'm
[1:20:26] going to go ahead and click ok and it's going to work on it and it's now created
[1:20:30] this new data layer that you see located in the list of rasters it's a virtual band and that's why it
[1:20:39] has a v here on the icon i'm going to go ahead and right click and i'm going to turn it into a real
[1:20:46] band band okay it should have also popped up in the viewer as you see mine has done here
[1:20:55] and um it should uh i'm going to go ahead and give it a light mask okay okay [Music]
[1:21:07] i want to zoom all for it going back to the file manager i am going to uh
[1:21:19] notice it's the stack of pancakes with the red sauce that means that we want to go ahead and save it so i'm going to
[1:21:24] right click on the file name and save as and i'm just going to overwrite it for what it was
[1:21:31] yes i want to overwrite it okay so across the top here i'm going to go ahead and close these image layers
[1:21:43] and just to do one last view i'm going to go ahead and look at the ci because i
[1:21:47] just like for you to look at some of the patterns that you might be observing in it and this is not actually listed in
[1:21:52] the laboratory exercise but i just want to show it to you here i'm going to use this chlorophyll unibr palette even
[1:21:58] though it isn't actually chlorophyll i just want to to view it in that way so i've just adjusted on the sliders to
[1:22:11] look at 95 of the data just to stretch it out a little bit and play around with the log feature
[1:22:17] here i turned off log okay so this is a little bit more meaningful to me look at
[1:22:21] 100 of the data so it gives you an idea of some of the patterns that you might see using the ci
[1:22:26] remember this is not the final chlorophyll concentration but it gives you an idea of yeah you can see some of
[1:22:31] the patterns in the data from the ci it will be a building block that's used for the chlorophyll tool
[1:22:38] if i were to look at the chlorophyll tool or data layer excuse me i would then be able to compare it and
[1:22:46] just visually let's take a look at it tile horizontally view the range you can see it's in some
[1:22:54] ways it's an inverse of the pattern of what you would expect to see with the chlorophyll um and that's normal it's
[1:22:59] just a one of the parameters that's used in the chlorophyll algorithm okay so let's go ahead now and close
[1:23:07] these data layers go back to file manager and i'm turning the page now so that we are on page 17 and we're going to start
[1:23:16] in with the statistics tool open the sea surface temperature layer and if yours applies the landmass great
[1:23:28] if it doesn't automatically apply it please do so now just so it's easier to see the terrain here and the features
[1:23:35] we're going to be looking a little bit over here at this geolocation information and we're also going to be
[1:23:39] using the pin manager tool so slightly different way than what you learned how to use it in part one
[1:23:46] so you've opened sea surface temperature i'd like for you to click on the pin tool tool resize the window if you need to
[1:23:55] and before we do anything there i just want you to drag your cursor cursor over this region here just to get an
[1:24:03] idea of what the latitude and longitude is that you're looking at this is the region of the mouth of the
[1:24:10] swanny river now i could ask you to just drop your pin here but what i'd actually like for
[1:24:15] you to do is i'd like for you to use this pin tool to actually drop it in the
[1:24:20] exact location that i'm asking you where i'm asking you to drop it so please go back down to this pin
[1:24:25] manager window that you have open and what you want to do is you want to click on create a new pin
[1:24:32] and this opens this window called new pin and you want to label your new pin swanny r underscore mouth
[1:24:52] i'm going to leave description alone and then i'm going to give it my location location this is a really great way to be able to
[1:25:00] like make sure that when you have say a mooring or a ship location you can identify exactly where that is in the
[1:25:07] image now you're not going to probably do a one pixel comparison to that particular ship location or mooring
[1:25:13] location because typically we get a box of pixels around that location but at least you know okay as a starting point
[1:25:20] this is where the mooring was located okay okay let's move on to the longitude eight three point
[1:25:33] okay okay and i'll just leave all the rest of it as it is and then i'm going to go ahead and click
[1:25:42] ok so i'm going to navigate to the mask manager you can see here the image um shows you the swanny swanny river mouth
[1:26:00] the pin has been dropped right there um what i'm going to be doing is i'm going to be creating a mask between
[1:26:05] particular temperature range in a particular temperature range and then we're going to run the statistics on the
[1:26:12] only the data that fall within that temperature range so first i need to create a mask that masks for that
[1:26:18] temperature range and the way that i'm going to do that is i'm going to go to the mask manager
[1:26:27] and move the pin manager out of the way in the mask manager you'll notice this expression editor icon it's very similar
[1:26:36] and we don't want you to be confused we are looking at the mask manager expression editor do not confuse this
[1:26:42] particular icon with the expression editor for band math that one is located up here on the toolbar we want this one
[1:26:51] that is on the mask manager so we're going to go ahead and click on it and it's going to create a logical
[1:26:57] expression math it's very similar user interface but we want to make sure that you're using the one in the mask manager
[1:27:03] we're going to create a mask that includes sea surface temperatures in the range of 9 to 13 degrees celsius
[1:27:14] on page 19 you see this window open and we're just going to use similar to the effort that we just did with the
[1:27:21] math the band math we're going to do the same kinds of tasks with the expression editor the tools are a little bit different
[1:27:29] down the middle but you still get the same idea of the data sources so we want to do is we want to show
[1:27:34] bands bands but we don't want to see show single flags see that as our data sources and what we want to do is we're going to
[1:27:48] set up these logical expressions so we'll choose go ahead and choose the sea surface temperature band that we're
[1:28:00] excusing data layer that we're working with with so we want sea surface temperature less than or equal to 13 so less than or
[1:28:17] equal to 13. and sea surface temperature greater than or equal to nine okay and just like we did before just
[1:28:47] verify with your eye just compare to be sure that you're typing it in just as you see it in this window and
[1:28:53] i'm satisfied with what i see here so i'm going to go ahead and click ok and you'll see down at the bottom of my
[1:29:01] mask manager now that it has provided a new mask for me and it's called new mask 89
[1:29:07] 89 and what we'd like to do is we'd like to rename this region of interest mask as
[1:29:11] roi and in the text here that i doesn't have the tops in the bottom the hat and the feet so it's roi underscore
[1:29:20] the number one so in mine i think i can just double click this yeah and rename it
[1:29:29] i'm working with a mac so um i have slightly different functions than if you're working with on
[1:29:35] a pc so i go ahead and name that and i've got roi underscore one and so what we want to do is if you'll
[1:29:43] notice if you look at the sea surface temperature layer now you can see this region region this region of interest roi
[1:29:50] located here and this includes temperatures that are between 9 and 13 degrees celsius so it's pretty cool
[1:29:56] water near shore which i'm not surprised because of the runoff that you see and also also cooling effects over shallow waters but
[1:30:04] the gulf of mexico is very warm and so that's why the waters are warmer offshore offshore so this blue to me has a okay contrast
[1:30:13] you can choose whatever color contrast you'd like on my example on page 20 i use this bright magenta so let's just go
[1:30:20] ahead and try that so let's practice changing the color we're going to go with magenta here and
[1:30:26] the contrast is not so great you'll notice that on page 20 the way that the sea surface temperature has
[1:30:34] the color bar has been scaled there's a lot more contrast from offshore dark red and black almost to near shore and that
[1:30:42] that can vary from persons whoever however you set up your color bars so i haven't actually changed it
[1:30:49] here since i loaded this data layer but if i wanted to make more of a contrast across the color range i could and it
[1:30:55] would just be a matter of adjusting the the color here except from band data for example is how i did it
[1:31:02] and so we covered that set from band data tool um in part one and that's all i did just now is to set the band data
[1:31:10] okay so i'm going to go back to this mask manager okay so we're now on page 21. we're
[1:31:18] still on the statistics topic uh we're just setting up where our mask is the region of interest of where we want to
[1:31:24] look at the math or the statistics that we're going to do on the data and compare that to the full scene and
[1:31:30] so what you want to do next is at the top of your window for cdas um you're
[1:31:35] going to see the sigma icon and that is the icon for the statistics tool and as i hover over it my tooltip will actually
[1:31:42] tell me display statistics for selected bands so i'm going to go ahead and do is i'm going to just click on the tool
[1:31:51] and it's going to pop up this window that you see here and nothing's been computed yet because
[1:31:56] i haven't actually chosen any bands so if you see nothing no statistics that's totally normal i would expect to see
[1:32:02] that you can see this image right here on page 21. so on page 22 you're going to be making
[1:32:09] some choices of what you'd like to include in the statistics run in this example we're going to choose chlor a
[1:32:16] sea surface temperature adg 443 giop and kd 490. i note that when i mention these i'm leaving i'm not neglecting to include
[1:32:25] the reference and dependent naming on those files so what i'll do is i'll go ahead and scroll through here
[1:32:33] i have to tell you a warning using the statistics tool you can get completely lost lost playing around with the statistics as i
[1:32:40] did when i was putting together this presentation so c surface temperature is already included there and let's see okay we've got chord and
[1:32:48] then we want adg443 okay let's verify one two three four we've got four okay okay moving along to page 23
[1:32:59] we're going to click this button here that says regional again this may be a windows pc thing
[1:33:05] this tab may look a little bit different for you and we're going to leave the defaults as
[1:33:12] they are you're going to click click on quality and you want to select this region of interest 1 mask you just created so
[1:33:22] you're gonna you can either type it into search i'm just pretty sure it's down at the bottom
[1:33:31] page 24 you're going to leave everything else the same here you're going to click on criteria and then click on fields
[1:33:42] and you want to make sure to include the min max and i'm pretty sure that is not
[1:33:46] the default because that's not showing up as a default for me but everything else just leave it as it
[1:33:50] is is okay so if you want you can kind of review some of these other tabs in this area i'm going to leave
[1:33:59] everything else as default and look at quality again region i'm leaving alone and bands when you're satisfied with
[1:34:09] what you have here go ahead and click run i'm moving on to page 25 of the document
[1:34:22] and i'm going to resize this statistics window okay move it around a little notice i'm collapsing this so i don't
[1:34:47] have to look at that so i can maximize my view area and what i'd like for you to do and i'm
[1:34:53] going to do it a little bit quietly here is i just want you to use the scroll
[1:34:56] bars and to explore some of the data that have just come up so use this scroll bar that's here along the right
[1:35:03] and in the bottom the statistics spreadsheet area that you see it's a table at the bottom to go ahead and scroll across in that
[1:35:11] region region something i'd like for you to note is that you for example for chlorophyll you have chlorophyll and then you have
[1:35:19] chlorophyll roi within the quality mask chlorophyll roi is just the chlorophyll information that's contained within that region of interest that you just created
[1:35:30] so the chlorophyll concentrations for those waters that are between 9 and 13 degrees celsius so i'm going to take a moment and just
[1:35:38] explore sometimes so if you look down here in the statistics spreadsheet table near the bottom bottom you see
[1:36:30] the bands first the full scene and then the band that's just the roi when you look at valid pixels here you
[1:36:39] can see the full scene is 84 731 but the roi region is just represents 49 89 pixels and that makes sense that roi
[1:36:49] is smaller area it's actually quite small compared to the total scene even with this smaller area the roi
[1:36:57] still actually represents a lot of information so when you look at let's see say the adg443 adg443 we're going to look at it for resize try
[1:37:09] to get a little bit more space here and you look at it for the full scene and look at the x-axis and the y-axis
[1:37:17] range range the x-axis goes from 0.02 to 0.25 and the y-axis frequency distribution you expected to be high because we're
[1:37:26] looking at 8 over 84 000 pixels you see it extends pretty high up here and then when you look at just the
[1:37:33] region of interest this is the water that's near shore most likely low salinity water that's influenced by the swanee river
[1:37:42] your frequency distribution your frequency is going to be a lot less because we're dealing with fewer pixels
[1:37:46] and now what i'd like for you to do is to focus your eye on the x-axis the
[1:37:50] range of values that you see here what do you see it's quite a bit different than the full
[1:37:56] scene in fact it's really high and it's 0.2 here to 1.5 in this range that you see here
[1:38:04] so we're talking about the data that are like in this part of the full scene blown up so that you can see it in this
[1:38:11] region and that makes a lot of sense because this is cool water coming from shore if you remember from the image that landsat
[1:38:22] image that was stretched admittedly but you can see it's like this black water and this indicates to us that it's very
[1:38:29] high in sedom or um colored dissolved organic matter or chromophoric dissolved organic matter depending on what part of
[1:38:36] the visible range you're looking at and so you can see that these cool waters are high in sedom and so this is
[1:38:43] the type of frequency distribution that you might get of the water that's near or shore it's high in sedon
[1:38:49] but when you're looking at the full scene then you start to see these offshore waters that are much lower in
[1:38:54] sedom and so that's why you have these pixels out here in the in the much lower absorption by cedom because these are
[1:39:00] offshore waters that are not influenced by the swani river and so you have much higher frequency distribution of these
[1:39:06] warmer waters out in the gulf where either that sedum has decomposed or broken down been mineral bio-mineralized by
[1:39:15] cyan or by bacteria or it just never got there from the river and so that's why you see this difference in these
[1:39:21] histograms and so i encourage you to go through and you look at it and perhaps not for the sea surface temperature but
[1:39:27] to look at the kd 490 which is an estimate of particles and also the chlorophyll concentration and look at the different ranges of
[1:39:35] values that you might see there and think about valid pixels and why you may get these different types of figures
[1:39:47] for now we're going to ignore this percent threshold what i'd like for you to do is to take
[1:39:51] some time and just understand the readings that you see here that some of them are repeated down below but the
[1:39:57] number of pixels in the scene minimum maximum maximum and and mean mean and and in our choices for the statistics we
[1:40:05] could have included median i just chose not to but you can modify which data result data come out for here and what
[1:40:11] results are presented to you okay so we're going to move along and um i've asked you a few questions
[1:40:23] and i've made a few notes on pages 27 and 28 about seed on those may come in
[1:40:28] handy or you might see those sorts of questions again later um what i'd like for you to do is if
[1:40:33] you've had a moment to look at the statistics statistics tool is to go ahead and close the
[1:40:38] statistics tool and i just have to warn you it's really easy to get lost in the statistics tool
[1:40:44] now we're going to use a different tool that's available and this is the scatter plot tool and it's near statistics tool
[1:40:50] at the top of the bar for cds and it's the tool that i'm hovering over here again remember you can hover over these
[1:40:59] tools and it will provide a tooltip display scatter plot for two selected bands so let's go ahead and click on
[1:41:04] that and resize the window that comes up again because you haven't selected anything it's going to appear uh
[1:41:14] it's there's going to be nothing in the scene scene what we're going to do is we're going to
[1:41:18] choose choose some of the settings that i've applied here on page 29 is where i am so you're going to use the roi mask
[1:41:27] you want to make sure that you're going to use water d at the bottom um and then what i'm going to do is um
[1:41:40] i'm going to set c surface temperature for the x axis and adg for the y axis and it appears that sea surface
[1:41:46] temperature has already been set for us for the x-axis and for the y-axis i'll go ahead and choose adg
[1:41:52] 443 443 okay okay and then instead of hitting run or okay what it actually has you do is it has
[1:42:00] you click on this icon that's two little arrows arrows one point tail pointing to the head at the top and that's the refresh
[1:42:08] view view what this does is it provides for you a view of the scatter plot of what the
[1:42:14] data would look like one band or one data layer compared against the other now on the x-axis you can see sea surface
[1:42:21] temperature and on the y-axis you see adg adg and this is just for all of the water
[1:42:27] area not the roi area so as temperature increases the 80 gp the 80g also increases sorry as temperature decreases the adg
[1:42:42] increases and this makes sense because as we are looking at the cool river water coming in we have higher seed on
[1:42:48] concentrations in the cool water versus in the warmer waters that are the offshore waters and this plot shows the relationship of
[1:42:56] temperature to light absorption by cedom and that relationship is because of this incoming river water this is not just a
[1:43:02] standard relationship that you if you had to exceed them offshore for some reason that's unrelated to a river input
[1:43:09] there's no like inherent reason why cedom would have or low temperature water would have high seed on if it's in an offshore water we just
[1:43:18] know that this is a river system and that water has low temperature you can play around with this a little
[1:43:23] bit more say you want to change the roi mask to that roi1 um but we're not going
[1:43:28] to do that now but i recommend giving playing around with this scatter plot tool just to become familiar with it
[1:43:33] so on page 30 number 22 we're going to close the scatter plot window and we are moving along to page 31.
[1:43:42] all right so i'm going to just clean up my space here before i move off of statistics and onto filter band i'm
[1:43:48] going to go ahead and remove this pin which we put in there so i'll go ahead and highlight that and throw it in the
[1:43:54] trash trash yes yes close that i'm going to close this data layer the sea surface temperature data
[1:44:02] layer layer i hope you guys have a chance to explore that statistics tool a little bit more
[1:44:06] and these different features up here along the menu bar like i said it can be a bit of a time
[1:44:11] sync but it really can help you see some of the trends and patterns in your data okay so we're going to move on to filter
[1:44:18] band for filter band we're really just going to talk about it a little bit and i'll show you how to use the tool but
[1:44:23] we're not going to spend a great deal of time exploring all of the different features of it so
[1:44:28] it is one way to help define some of the features that you might see or patterns that you might see doesn't
[1:44:35] change the underlining data that you're originally using however it does give you an idea of some of the patterns that you see
[1:44:44] this tool can be used to enhance features in an image and cds has a number of filter options
[1:44:50] and also you can provide your own options user supplied some of the options include filters to smooth and blur the image adjust for
[1:44:59] stray light detect lines and gradients sharpen enhance discontinuities or apply a number of non-linear and morphological filters
[1:45:12] so we're now on page 32 of the exercise exercise what i'd like for you to do is i'd like
[1:45:18] for you to click on the tool raster filtered band to open the create filtered band window so this drop down menu here you see
[1:45:28] filtered band that's the one we're going to use that opens create filtered band okay okay let's see and i'm going to actually
[1:45:44] cancel out of that one and first select the kd 490 and go back filtered band okay okay that's what i want to see
[1:45:54] we're going to be working on the kd for 90 band for this extra this part of the
[1:45:57] exercise exercise and we're going to try a few different band filter methods to get an understanding of what how the these
[1:46:05] sorts of filters modify the data so in the example here in the image i have highlighted arithmetic mean three by
[1:46:12] three three arithmetic mean right there and i'm gonna just leave the information here the same i have band name
[1:46:23] and i'm gonna just leave it at one iteration i'm going to click ok and what that does is it's going to open
[1:46:31] this new data layer that you see here it has the kd 490 but it's appended some notation on it am3
[1:46:40] i'm going to give it a mask and i'm also [Music] going to change the color of our color
[1:46:49] scheme a little bit default what do i want i want kd okay so let's go ahead and go back and open
[1:47:01] the original kd i'm going to reorder this just a bit i can oh i guess not and i'm going to click here's the
[1:47:25] original kd and here's the one with the arithmetic mean a 3x3 3x3 pixel think of it that
[1:47:32] way way and you can see from the original data i'm focusing my eye out here where you
[1:47:37] see some eddies and some filaments and here's a filament here here and some patterns in the water
[1:47:46] and if you keep your eye focused on that area you can see how it's blurred and that is the effect of the filter
[1:47:55] i encourage you to give it a try with some of these other filters if you're curious hey which one do i want to use
[1:48:01] if you look at the image at the bottom of page 32 and we when we i created this
[1:48:05] image i gave you the name of what filter i was using so you can see the arithmetic main three by three
[1:48:12] another one that i'm going to give a try to is the high pass three by three so
[1:48:16] let's give that one a go so raster filtered okay okay and and i'm going to do the
[1:48:26] high pass 3x3 so let's i passed three by three uh i guess i'm going to do number one
[1:48:35] here and you can see when i highlight the name it actually shows you what the appended name is going to be down here
[1:48:41] for the band name and i'm going to go ahead and click ok looking at the file manager you can see
[1:48:47] these new data layers are being added down here if i want to save those with my file
[1:48:52] remember i'm going to have to save the file file and go ahead and apply a lan mask
[1:48:58] and my color bar i'm going to give it kd again again so it matches the others and if you just click through here's the
[1:49:06] original original here's the one we just did this high pass filter and now you can see it
[1:49:11] sharpens some of those features so just for completion i'm going to do this last one that i include
[1:49:17] on the images here and it's the 2.5 pixel radius filter see see i already pass it ah here it is
[1:49:33] and it's the mean so mean 2.5 pixel radius and i'll go ahead and click ok and again it's going to create this new
[1:49:41] one and we're going to go ahead and give it the color same color scheme and apply the mask
[1:49:49] and wow is that blurry or what so now you've got your high pass filter here the original there and then this
[1:49:56] arithmetic mean these aren't too far off from each other but it gives you an idea of being able
[1:50:02] to to heighten or dampen the effects of some of the patterns that you see in the data
[1:50:08] again your original kd490 data do not change but these new data layers that have been created have been changed so
[1:50:16] just be aware of that when you're working with your data okay so we're going to move along to
[1:50:22] page 33. what i'd like for you to do now is to declutter the space a little bit
[1:50:27] i'm going to close these data layers that we've just been looking at from the filter and we're now starting page 33 at pixel
[1:50:39] extraction so everything else is closed okay it's pretty cleaned up i'm going to go ahead and double click
[1:50:44] on the chlorophyll a data layer there you see it there and this time we're going to use the pin
[1:50:50] tool we're just going to drop it into the scene i'm not going to be particularly particularly careful about where i put it like i did
[1:50:56] the last time so i'm just going to choose this pin tool i'm going to just drop it in the scene and it looks like
[1:51:02] here i've tried to drop it a little bit closer notice my color range across the range here is not as you see in the
[1:51:08] image image and that's partly because i just haven't done anything to the color band so i'm going to put the the pin there
[1:51:15] i'm going to go ahead and go back over to the color manager i'm going to set band data set from band data and it
[1:51:20] should at least a little bit more closely resemble the image that you see there okay so i've dropped my pin
[1:51:28] my scene at the bottom of page 33 looks about like what i'm showing you guys here and now what i'd like to do is i'd
[1:51:34] like to launch the pixel extraction tool and what i'm going to do is i'm going to go across the top of cdas to tools at
[1:51:40] the top i'm going to click on it and i'm going to choose pixel extraction this opens this new window that you see
[1:51:50] here it's the pixel extraction window and on the input output tab i'm going to update the entries for the output
[1:51:56] directory so i have here's my source and for my output directory i want to make sure i'm putting in the correct
[1:52:03] location location and and i think i'm going to actually um click on that because i want to put it a
[1:52:08] little bit deeper um in the file that you guys here have here it just says cds advanced skills i've made
[1:52:15] a choice to add this additional folder layer okay i'm going on to page 35 the parameters tab within this pixel
[1:52:28] extraction window i'm going to go ahead and click on that and i'm going to change the window size
[1:52:38] to a 3x3 box so see here where it says window size right now it says one by one i'm gonna
[1:52:49] click that to be three and so that's gonna be a three by three box and then i'm going to choose the pixel
[1:53:00] value aggregation method and in this case i'm going to choose mean i'm going to deselect tie point grids
[1:53:13] and i'm going to deselect masks so what i'm going to do is yeah your your pin location isn't going to exactly
[1:53:21] match within the image here but i just want to verify that my image matches what i have on my screen here so
[1:53:28] move that out of the way and and i'm satisfied and i'll go ahead and also check export
[1:53:38] output coordinates to google earth kmz okay when i'm satisfied with what i have here i'm going to go ahead and click
[1:53:45] extract and this gives me a notice pixel extraction tool has run successfully and written the result to my folder and if i wanted to look at
[1:53:55] where that is i can see that yes in fact i have these new files pix x which is what the file naming was on
[1:54:04] that input output for ease of use you may want to actually give it a file prefix that's meaningful
[1:54:11] i was just using the default in that case so i'm now on page 36. i'm going to go ahead and close this
[1:54:26] the the extraction effort that you just went through produced an output text file which you may want to open using some
[1:54:32] spreadsheet software and the example only shows pixel extraction using the pin i'm not using other methods for this so um what i'm
[1:54:41] going to do is you see here that i have this text file so what i'd like to do is i'd like to
[1:54:48] open up the um the the pixel information that i just captured with pixel extraction using my spreadsheet software so the file that
[1:54:58] i'm interested in looking at is this pix x co-located measurements and i'm going to just go ahead and right click and
[1:55:04] open with my spreadsheet software and you can see here it's a little bit messy because of the way that it
[1:55:10] displays the data so i'm not going to belabor it here but what i'd like to point out is you may
[1:55:17] want to rearrange some of the data a little bit so that you can display it in a way that's a little bit
[1:55:21] more meaningful and you can see that on page 36 on the right-hand side image i show where i've just reoriented i've
[1:55:28] transposed the data copied and pasted it to give you the information of product id and the coordinates
[1:55:36] where the pin was located what the latitude longitude were and then it gives you information for what the values were at that pixel and
[1:55:46] so here it provides information about all of the data so all of the data layers that were included in this file i
[1:55:51] see the mean the sigma the number of pixels that were used to calculate it and nine makes sense because i was
[1:55:58] looking at a three by three box so three times three gives me a box of nine pixels
[1:56:02] pixels and so i can see these mean values for these different data layers in the file and while i'm not going to transpose the
[1:56:08] data here you can see that this information is repeated here that i'm just looking at the same information the remote sensing
[1:56:15] reflectance and then it's going to continue on and it's going to go through different data layers that are present in this file
[1:56:22] including the chlorophyll okay so i recommend going through and doing the transpose on this spreadsheet file because you might be interested in
[1:56:33] looking at that data later and then just close the file save it and close it when you're done
[1:56:39] so that's how you do a pixel extraction it's pretty straightforward it's a very useful tool to have
[1:56:47] oftentimes the analysis that i do for pixel extraction i do outside of cdas cdas but as you've learned it's possible to
[1:56:55] use the information that you can grab from pixels and compare it within cdas so but most of the work i do with
[1:57:02] the pixel information i extract and use it in a spreadsheet okay okay so i'm going to go back to cds
[1:57:14] and i'm going to close this data layer here here and i've made some changes to this file
[1:57:19] because i did that filtering and i'm going to go ahead and just save it and just overwrite the the file name
[1:57:26] save that okay yes i know it already exists and i'm planning to overwrite it great and now that i'm done with this
[1:57:32] file i'm going to go ahead and close it so the data that we're going to use to
[1:57:38] show the example of combining or mosaicing two images comes from a different part of the world and it comes
[1:57:45] from the salish sea region which is in northwest washington state and south um west british columbia canada and it's a
[1:57:54] region that's very important in terms of salmon fisheries there are many tribal organizations that live there and the
[1:58:01] salish people are very proud um people of their environment because it's well monitored it's well taken care of and it
[1:58:08] serves the people and they serve the land and the sea and so the two images that we're going
[1:58:14] to be working on together to combine horizontally or geometrically we're going to combine them are from this region of the world
[1:58:22] and so we've provided data for you on our website and it's in my folder here i've called it salish
[1:58:28] c c and you should have two files um two images composed four files you have one image of
[1:58:38] dim and uh dot data for a particular time stamp um on uh in 2018 and then you
[1:58:47] have another image of the same day but a slightly different time stamp because it was the image that
[1:58:52] was collected um just uh before this first image so we have the image 1300 was collected just before thirteen
[1:59:02] five zero zero and so what we want to do is we want to take these two images and
[1:59:07] combine them or mosaic them so what you need to do is you won't need to go ahead
[1:59:11] and and go to your folder that contains the salish c data and open the dot dim files
[1:59:17] so we're going to go back to cdas and we're going to open these files so we're going to navigate to a new location
[1:59:24] salish c as i already pointed out and these files are sea surface temperature that we're going to be
[1:59:29] combining but you could do this with the other data of course so we've collected these and if you
[1:59:35] click on rasters oh we do actually these are combined um what we want to do is we
[1:59:39] want to open the sea surface temperature data data for the um for one of the files and then
[1:59:46] click on rasters and open the sea surface temperature data for the other file file i'm going to go ahead and i'm going to
[1:59:51] apply land masks to these just so that you can really get a feel for the data i'm going to change my
[1:59:59] color of my land mask to black and remember these are different files so we're going to apply the land mask to
[2:00:11] this one as well and if you toggle between these two data layers that you have listed here are open here
[2:00:24] now we have sea surface temperature for the more northern region where you see canada and parts of alaska these are
[2:00:31] reprojected files and then you see sea surface temperature for the southern part of the region which you see most of
[2:00:36] the west coast of the united states some of canada and some of mexico and so what we want to do is we want to
[2:00:42] combine these along that northern edge of this image that you see displayed here here or the southern edge of this image in a
[2:00:49] meaningful way and respecting the what may need to be done mathematically to the pixels to combine the two of them
[2:00:56] okay so you've got these two files open you see in this image on page 37 the i've changed the band the color of the
[2:01:03] land mask but you see both of these open and i've tiled them horizontally or excuse me vertically
[2:01:13] let's un-synchronize them in this case okay so you can see them both here there are reprojected co-located files
[2:01:26] of the region that includes ocean color and sea surface temperatures so as you saw when i first opened these rasters
[2:01:32] it's more than just sea surface temperature but we're just going to be working on the sea surface temperature
[2:01:36] data or at least we're only going to be viewing the sea surface temperature data in this example
[2:01:48] so looking at page 38 what we want to do is we want to find the mosaic tool and i
[2:01:52] love how intuitive this icon is for this tool it just looks like a bunch of images or pieces of paper
[2:02:00] overlying each other and that's exactly the effort that you're going to be doing you're going to be lining them up on the
[2:02:04] margins where they overlap and mathematically they're going to be combined in a way that's meaningful and still retains the data so we're going to
[2:02:10] go ahead and collect click on mosaic and it's going to create open up a create mosaic file and you see
[2:02:17] the image of this file located on the right of page 38 and what we want to do is we want to
[2:02:22] click on this plus sign that we see here under source files to add the source files which are these two files that are
[2:02:29] open here so go ahead and click on that one one and we want to make sure that we are in
[2:02:34] the correct location so we're in the advanced cdas advanced salish c folder and i'm going to choose these dim files of what
[2:02:44] we want to collect okay okay and you see them added here and the path that you see in the image on page 38
[2:02:52] will be slightly different because remember i changed some of the naming convention on this for the the folders
[2:03:02] so for the output file we want to give it something a little bit more meaningful than just mosaic
[2:03:07] what i'm going to do is i'm just going to give it a meaningful name that we can find later so i'm going
[2:03:14] to give it this new output name and i'll give it something so that we know what we're looking at
[2:03:23] 360. okay and we want to put it in the correct output directory don't be fooled put it in the correct
[2:03:42] place place we're going to have it open and see to us when we're done so moving on to page 39
[2:03:51] we're going to click on the map projections definition and and what we want to do is see where it says
[2:04:01] mosaic bounds we want to edit the mosaic bounds to subset the mosaic image to the region of interest so we're going to
[2:04:08] actually move it over here to where this image actually is located and and um i'm going to use the image that's on
[2:04:16] the far right of page 39 to actually type in um to more clearly what the bounds are so you can see here as i
[2:04:25] follow as i do it just go ahead and follow along with me i'm going to do negative 127
[2:04:32] and negative 120. 52 and 47. and you can see as i'm making these edits this little red box in the map is
[2:04:50] getting smaller and focusing in on that region so as you see i have manually changed the the dimensions here the boundaries the west
[2:05:02] um east north and south and a key point that i just want to point out here is
[2:05:06] you um also need to change the pixel size and so we're working with modis data in this example and so just as your
[2:05:13] image on page 39 on the far right shows we're going to change this to .02 so your mat projection definitions are
[2:05:27] done we're going to move on to variables and conditions if you go to variables and hover your
[2:05:32] tool tip here will say choose the bands to process we want to go ahead and click on that
[2:05:38] and this will open the band chooser window window here we want to select bands of interest and if we wanted to we could just select
[2:05:46] all but what i'm going to do is i'm going to select a subset of the data i'm
[2:05:50] going to select all of the rrs's chlorophyll a sea surface temperature kd 490 490 i'm also going to choose the latitude
[2:05:58] longitudes and the l2 flags so i'll go ahead and do that now and i'll scroll back up and i'll just
[2:06:26] verify that i've got everything that i wanted to select both latitude and longitude d and r l2
[2:06:33] flags and then these data products i'll go ahead and click ok so i'll go back and look at this
[2:06:41] variables and conditions window i'm still on i'm now on page 40. i'm still looking at the variables and
[2:06:50] conditions and now what i'd like to do is i'd like to click on the plus sign in variables and conditions it added
[2:06:57] this new variable here it's just called variable 19. i want to rename this and i'm going to
[2:07:02] rename it land and if i click here so that's on our name under expression you'll see to the
[2:07:09] far right these ellipses i'm going to go ahead and click on that and i want to define what land is going
[2:07:16] to be which band and so i'm going to go ahead and it's not actually going to be one of the
[2:07:21] bands in the list here under rasters it's going to be one of the flags so i'll click on show single flags and i'll
[2:07:27] unclick under masks and bands and the flag that this is is going to be l2 flags are land
[2:07:35] you can see it here in the expression editor editor so i'm going to go ahead and do is i'm
[2:07:40] satisfied with that i'm going to click ok ok i'm satisfied with this listing here i'm not going to change anything more
[2:07:48] i'm happy with my map projection it's in the location and the pixel size i want and it's the output name and also
[2:07:55] location of interest and then i'm going to click run once it has finished running you're going to go ahead and
[2:08:08] confirm that it has run and close this create mosaic file and you'll notice over here in the file manager that it
[2:08:15] has dropped a new file there and it has this appended name mosaic on it we're going to click on this raster's
[2:08:22] carrot here or the little triangle and open up the chlorophyll layer layer you can see here that they're the
[2:08:31] chlorophyll layers there but it may be kind of hard to identify exactly where we're talking about so we need to add a
[2:08:36] land mask but in this case we actually need to create the land mask click on the mask manager and you'll notice here
[2:08:42] that it's empty the expression editor for the mask manager it's important the mask manager editor what we're going to do is we're going to
[2:08:50] manually add back in this mask remember in the last steps you actually created a variable called land
[2:08:57] and so if we click on show bands we'll see land here click on it and it's added
[2:09:03] to the expression editor go ahead and click ok and you can see that it is added the um
[2:09:12] the mask is added here and you can see that this is the northwest part of washington state
[2:09:17] and the southwest part of british columbia and this is the salish sea region region and so if we were to zoom in into this
[2:09:25] region region if you're familiar with seattle the seattle area is down in this region here the pixel size is pretty coarse but it's
[2:09:34] modis so that's expected but now we have this land mask that's been added back into it so we're going to go to layer manager
[2:09:50] and we can see again click it on and click it off this new mask the mask manager ah we need to remember
[2:10:01] to rename it so we'll rename it land so it's meaningful to us and over in the layer manager it should
[2:10:09] be listed here as land so we're going to go back to the file manager manager and notice it's our stack of pancakes
[2:10:18] with the red sauce so that means it needs to be saved what we want to do is
[2:10:21] we want to right click on this new mosaic and click save as and we're just going to save it as the same name and
[2:10:27] overwrite it yes we want to overwrite it we want to preserve that landmass that we just added
[2:10:39] all right so we're going to close the files that we were working with before yes we're going to go ahead and close it
[2:10:49] without those changes those are the two that we worked with the original two yes and then we have this new um file that
[2:10:57] we just created so now you know how to create a mosaic so congratulations this marks the end of exercise three
[2:11:04] advanced skills in cdas and thank you again for sticking with us and it's been great thank you
[2:11:19] now we will be going quiet for a while so that you may work on your exercises please type in your questions in the
[2:11:26] webinar software periodically we will unmute our audio and answer the questions that are coming in all right so as i said just a moment ago
[2:11:37] we're going to have this quiet laboratory time i just want to remind you welcome and thank you uh for being a part of this
[2:11:45] webinar series we're really excited to have you we're going to have a period of time going forward where we're going to be
[2:11:52] very quiet we'll be taking your questions please keep submitting your questions through the webinar software we are getting those and we're
[2:11:59] aggregating them into a document and we'll from time to time come on and we'll answer them and if
[2:12:05] needed we'll get on and we'll show you those questions and answers or also just demonstrate some of the
[2:12:10] material material a number of people have asked us if we can change the due date on the homeworks
[2:12:17] and we enthusiastically have said yes thank you brock for updating the webinar webinar website the course website the new due
[2:12:26] date is going to be july 5th so we know a number of you were concerned about that and we've heard you
[2:12:32] so we've changed the due date to july 5th 5th so so before we before i move on again i just
[2:12:39] want to say thank you very much for participating in this thank you again to dr daniela girlin who participated with
[2:12:46] us in part two and has been listening in today from the department of natural resources in wisconsin
[2:12:54] so let's start with question one this is for the in situ data that you put in c bus format the original file
[2:13:05] was in excel format and this question that came up write down the units of chlorophyll a this was for nc2 data and we already
[2:13:14] talked during the demo that c does expect expect concentration units to be in milligrams per meter cube
[2:13:23] whereas in situ data we have are in micrograms per liter and so this is just to point your
[2:13:28] attention or draw your attention to the fact that they they're dif they are the same units when you convert
[2:13:35] microgram per liter they they are equivalent to milligram per meter cube and this is just for you to note that actually there
[2:13:44] they are same units but expressed differently and so that's why this question was there that is for
[2:13:52] question one question two came up when we fit the line to the data between remote sensing and in situ data the the
[2:14:02] line fit has correlation coefficient with it and we changed the box size and saw how correlation coefficient changed
[2:14:09] so what is uh acceptable value and that's a good question and that actually depends on the size of your sample not
[2:14:17] only size of the samples but how independent they are how auto correlated they are so based on that
[2:14:24] if you have enough number of points then you can perform standard statistical significance test such as t test for correlation coefficients and
[2:14:34] then you can say that this this number is significant by 95 percent or 98 you can choose the confidence and then
[2:14:43] that would be your test that whatever number you give it's significant at this level level but we have no way of doing it because
[2:14:53] all we had was six points this was more for demonstration how you can do it so if you have more points you can
[2:15:04] do the significance test on your correlation coefficient so is there a guideline for collecting in-situ data for calibration and
[2:15:14] verification of algorithm how would one collect samples that somehow compares to image pixel resolution so um um here there is
[2:15:26] um sherry i think you have provided the answer here and if you want to address that question
[2:15:32] okay um so there's a large body of work on collecting in-situ data for calibration and validation in the ocean
[2:15:39] optics community and the ocean color web website that we pointed you to and i think it's in the list of resources that
[2:15:45] brock put together we talked about this it's also the same one where that overpass predictor was was it has a documentations page if you just
[2:15:54] go to the main webpage then go to docs technical documents and in that technical documents provides a lot of information on how nasa this is
[2:16:02] from the nasa perspective how it goes about collecting information and developing algorithms and doing cowbell and so it's a lot of information
[2:16:11] i know it's kind of like throwing a great deal of information at you but i think that to fully address it it would
[2:16:16] be wise to look at some of those technical documents so that addresses the question about a cow val
[2:16:23] the second question on how would one collect samples that somehow compare to image pixel resolutions i may need to draw on daniella and with
[2:16:32] anita on this a little bit more um the in the community what we normally do in practice is uh we collect imagery we
[2:16:41] collect ground truth data and then we average a certain number of pixels around where that ground truth was
[2:16:47] located and so typically in my part of the aquatic remote sensing world it's a three by three pixel around that point
[2:16:56] as part of the exercise that you're working on we actually have you think about that and look at that and how that
[2:17:02] box size what box size you're going to choose around that pixel and so some of these questions get at some more
[2:17:08] fundamental questions related to remote sensing and scaling and statistically evaluating what is the best box or number of pixels around a ground
[2:17:18] truth to use what's the the best decision that you can make and i'm curious of amita and danielle
[2:17:24] and i'm not sure if you are able to do audio enable if either of you would like
[2:17:28] to add a little bit more information about um about the comparing the pixel to the ground truth
[2:17:36] all right okay and this danila i also use the three times three pixel window for the lancer data so we're looking at 90 times
[2:17:46] 90 meters there and we normally write down a set of coordinates where we plan to collect data where our station
[2:17:53] is and then we additionally track of the actual coordinates in the field and our gps is typically occurred within about
[2:18:02] five meters and while we collect data we actually drift a little so we are pretty much in the center of this area but we
[2:18:10] might might drift a little all over the place so nine three times three pixels will give us a signal that is about comparable to
[2:18:17] our field measurements and additionally i think dr wesley moses i think he works with the level research lab he has done a lot of
[2:18:28] research with in terms of in pixel spatial variability so this might be an issue if you look at
[2:18:36] larger pixel sizes like 300 times 300 meters or 1000 times 1000 meters so you will have to find the strategy to
[2:18:44] actually actually match your field measurements across the pixel so for cento 2 and landsat it's quite easy
[2:18:52] do you happen to know when he published that paper because i'll try to find the link and put it into the um i can't
[2:18:58] remember he presented something at the last ocean sciences meeting in oregon and portland the last time okay
[2:19:06] okay i'll do a search for it and see if i can add the citation to this thank you okay i think
[2:19:11] that would be really useful also daniella you mentioned that you can combine images and field data for
[2:19:17] different dates to increase the number of points for correlation can you explain that a little bit so if you
[2:19:23] atmospherically correct your images then then um they should be all comparable to each other so you could have images from
[2:19:32] maybe five to six days together with field data collected on the same five and six days which it was
[2:19:40] collected closely to the image acquisition time and then you could combine all these data sets and develop a single regression to develop
[2:19:49] your model yes so across time across different types one and that's if the atmospheric correction works yes then amita do you want to save some
[2:20:03] of these questions for later or do you want to continue on for one or two more um let's see
[2:20:10] i i just wanted to go to the last it's not a question but i saw this in one of
[2:20:15] the attendees comments that ocssw when they tried to load this mtl.txt file file got this warning that file is not valid
[2:20:27] input mission and mission is now this this if you check the form um this has come up again and again
[2:20:37] and then one thing that we found was that either you have to reinstall your ocssw for that particular sensor that you are
[2:20:46] trying to um use the ocssw or sometimes you may just have to reinstall cdas that was suggested and
[2:20:56] that worked for me this happened for me too and i had to re-install cdas and then everything started working again so
[2:21:03] something gets overwritten or some java issue comes up and this happens so this not sure what the reason is but if you reinstall
[2:21:14] c dash and it doesn't take long then you will get rid of this warning and you'll be able to process
[2:21:22] the data okay it could be a version issue as daniela says okay okay yes i would want to this kneeler i would
[2:21:35] want to add just to make sure to install the latest version of cds and the previous versions can't read in
[2:21:44] the landsat 8 collection one data okay i'm trying to capture this this will put it okay great and then um
[2:21:54] how do you guys feel about going into the quiet laboratory time now and um having our participants work on that and
[2:22:02] in a few minutes maybe 10 minutes or so we'll get back online and just check in with folks how does that sound
[2:22:10] so if you're if you have any questions you can type in the chat box we are here
[2:22:14] we are monitoring and we will be able to help with if you're working with the exercises and if
[2:22:20] you need any help or if you have any questions questions just just type them in the chat box and we'll
[2:22:26] address them but next half or so you can just work on the exercises and get experience and if you have any
[2:22:36] difficulties we can help during that time all right thank you i'm gonna go ahead and go into mute and we look forward to
[2:22:45] seeing your questions come in and again thank you dr girlin for getting on and helping us hello again this is sheri just getting
[2:22:56] on i just want to address some of the questions that have come on also just want to remind you guys that
[2:23:02] we are in our laboratory um quiet laboratory time i know i'm not being quiet at the moment but we're in
[2:23:09] our quiet laboratory time for you to work on your exercises and submit questions to us and we'll do our best to answer the
[2:23:16] questions questions we are furiously answering them ourselves and researching the answers so we'll get to them when we
[2:23:23] can we may not get them to them exactly in the right order and just as a reminder
[2:23:28] brock and the team put together these question answer sessions and put them up online online and they're available to you after the
[2:23:36] summer after the webinar series so for example like in question three um i have my assignment is to look for this paper
[2:23:43] and we'll put the citation in there when i can find it if it's available so i'm going to go ahead and
[2:23:49] walk through a couple of the answers here here and and to some of the questions that we've got
[2:23:54] i'm not going to do all of them in exactly the same order but i'll go ahead and address i'm going to hit number four
[2:24:01] first is how do you make the in-situ text file that anita walked you through with the wisconsin data we had you make it
[2:24:10] manually yes you can do it that way also if you want to automate your process um you can start to create these
[2:24:16] files and um in programs like matlab or in scripting languages um and you can like use python or r
[2:24:26] whatever you're most comfortable with um to build these text files and to output them and so it's a nice automated way to
[2:24:32] work with the data um i know that daniella has talked a number of times of using cdas for some things pulling the
[2:24:38] data out and then running other processes in um by writing up the code herself outside of cdas this is really
[2:24:45] common in the aquatic remote sensing community so yes manually but you can also build methods to create these
[2:24:51] scripts automatically or to create these um text files you need to test you know good software practices so make sure to build unit
[2:24:59] tests and to test your data to see if you're getting the output you'd anticipate anticipate number six here
[2:25:06] why might the crop command be grayed out and this actually was an example of one of our participants and debugged it
[2:25:11] himself and gave me back the answer and that is he when he was using it the crop
[2:25:15] tool was not working and it was because he didn't have the raster loaded into the viewer so if that happened to you um
[2:25:20] that's the solution that we had there um number seven uh-huh anita if i can just add something to answer
[2:25:29] six uh this is true for loading in situ data as well when you if you want to have in c2 file from like
[2:25:37] c bus format in you have to have your image raster loaded first only then it would put the institute data
[2:25:44] on top of the image oh okay okay you see the in-situ data okay thank you um um one of our participants asked why we
[2:25:55] might want to use this beam and map format instead of tiff or an img we were doing this format for the purposes of
[2:26:02] this webinar series because we knew we were going to be working with everything in cdas but if you wanted to make your image
[2:26:08] more portable you might want to consider outputting it to something like tiff so you could use it in qgis or arcgis
[2:26:16] okay so i'm going to move on to question eight eight are there any other open source software
[2:26:23] packages available that are similar to cdas and the the one that comes to mind um for me and although i have it
[2:26:29] installed installed i don't actually use it myself and that's snap and i've provided the website here when you are able to access
[2:26:37] the um question and answer page you'll be able to use this link from there but if you just did a search on
[2:26:44] esa for european space agency snap this will be your top link and it's used for the sentinel series of sensors it's
[2:26:52] built by the same consulting firm that did the most recent update of cdas in about 2013 or so and so its user
[2:27:00] interface is very similar dr girlin has used it and she provided some helpful input here and what it is
[2:27:08] is that there are some video tutorials for the installation of esa snap and while those tutorials may be a little
[2:27:14] bit outdated they're still quite useful so if you're interested in working especially if you're interested in working with the sentinel data
[2:27:20] and now that you're familiar with how cdas looks and feels it's going to be a very similar type of environment with
[2:27:26] snap snap there are other uh open source software packages that are out there in fact our set has done some training on using qgis
[2:27:35] qgis qgis and i've provided the link there as well this one's great because it has all of
[2:27:41] that functionality that you've come to learn to appreciate with uh not for proprietary software like arcgis but
[2:27:49] it's in an open source format of qgis qgis doesn't have nearly the um um the amount of uh
[2:27:58] functionality that you might have for cds for remote sensing especially aquatic remote sensing but it still can handle images and can get
[2:28:04] still get pretty far and it's open source i've used it a little bit but i'm not an expert at it
[2:28:10] i don't have the list of our set trainings here that have used qgis maybe that would be a
[2:28:16] sherry task is to find some links of our set trainings for qgis you mean specifically for watch
[2:28:25] quality or no just generally for so that people could get used to using it go back and
[2:28:30] check um i can let me find the link and i'll post somewhere we did qgis that would be great and i'll i'll assign
[2:28:41] that to both of us how's that sound i can't spell today or type um okay so what was the other question i
[2:28:53] was going to address 10. i'm going to slide down we're still working on question 9. we really appreciate the
[2:28:59] question that came in about multiple days but we're still working on the answer to that one for you
[2:29:03] some people have had some problems with cdas issues and working and processing landsat data amita i'm going to go
[2:29:10] through the answers that i put here but you're the one who's really been working a lot with landsat data so please add
[2:29:14] value to whatever it is that i have listed here um um some input that we got from daniella was
[2:29:20] to make sure that you're always using the most up-to-date version of seat ass the functionality of landsat is a
[2:29:26] relatively new feature in the last couple of years and they're constantly improving and it's really come a long
[2:29:30] way and it's exciting what they've done with it so make sure that you're using the most recent version of cdas
[2:29:37] if the problem that you're having is just a problem with oc ssw processors but you know that you're on linux or a
[2:29:43] mac or unix and it that it should work sometimes reinstalling the ocssw processor from the menu bar and just
[2:29:51] using loi and doing the clean install can help i ran into that problem let me to mention earlier today that if
[2:29:58] that doesn't work sometimes uninstalling and reinstalling cdas can help and then for this problem that we're working on just make sure that you're
[2:30:06] using the correct data for that which was the landsat 8 oli tirs c2 or excuse me c1 collection 1
[2:30:15] level 1 data downloaded from the earth explorer website website and i'll stop talking amita if you want
[2:30:20] to add anything to that so uh in in cdas uh event the installation and i'm trying to find the link where you go to
[2:30:32] there's a information about requirement for installation so i think the like or the supporting software's just java
[2:30:42] and python and you know they have to be um in certain certain locations certain version i think so
[2:30:50] a number of things can go wrong and then see that won't work so that's why sida's form although it is
[2:30:58] sometimes slow it usually works they do come back with answers so you have to register i think
[2:31:06] and log in to post questions in the forum but we highly recommend that you do that and
[2:31:11] i'm going to post the link awesome thank you so this is just installation tutorial and you probably already have seen it
[2:31:21] but if you go to the site it also has a requirement and our introductory webinar or last year what the water quality
[2:31:29] webinar we did had a list of things that you should be checking um for installing zita so that
[2:31:36] um um you can see different for different uh systems it it talks about how to download and install
[2:31:42] okay what the requirements are okay great so this is what you're describing here what's listed in the view amita
[2:31:53] of creating the cdas environment yeah yeah okay yeah okay so that should be what you guys are looking for when you're
[2:32:02] examining this so if you already have cds install you're probably familiar with this but we advise you to go back and review that
[2:32:12] okay okay if if you're ready i'm gonna go ahead and move on to number 11. is that okay i'm going to post a link
[2:32:21] for the qgis analysis okay oh great yeah that website the ocean color web website has so much information
[2:32:30] um um it's really useful in terms of the documentation and the access to the data so here is the
[2:32:48] here is one webinar where there was detailed qgis analysis and also has a link on how to install
[2:32:55] qgis if you don't have it and some of the features that you can use so i'm just posting this link um in
[2:33:01] question 8. okay okay great so about question nine although we are checking it says how zetas handles n a n
[2:33:15] or not number data um when you are averaging i believe that it should ignore an end but i
[2:33:23] want to make sure and obviously you said that it doesn't change the result or doesn't show right results so we will be
[2:33:30] checking that and we'll let you know we'll post it online so that you can you can have the correct answer for that
[2:33:38] right right great great um on question 11 a question came in about the in the view on the page 37 of
[2:33:48] the document that we had why the lower image looks so skewed these are both projected using the same
[2:33:54] map projection and just a note this the lower image here on page 37 is a very high latitude and so to our eye it
[2:34:02] might look skewed partly because of the relation to the not projection that you're seeing so so the answer there is that may be why it's
[2:34:11] appearing skewed the question came in number 13 here do we have to send you the data that we
[2:34:17] process during the course in order to get the certificate or just complete the homework 1 and 3 provided in google
[2:34:23] forms you do not need to send the data please don't send this to the data you'll notice that at the top of the
[2:34:29] question and answer you have the email addresses for amita and me feel free to ask us questions we will try to answer
[2:34:36] them in a timely way um but please don't send us the data there we just need you
[2:34:40] to fill out the answers to part one and three three google forms and just as a reminder
[2:34:45] those are due the new due date is july 5th also in answer to question 10 i just added a
[2:34:57] link to the forum that you can log in and post your questions in there okay so mita unless you want to address some of
[2:35:11] these questions that we're still answering now or if you want to hold i'm going to go ahead and ask people to
[2:35:18] just continue sending us questions through the question and we're getting them we're hearing them we're just being quiet yes so i think
[2:35:27] yeah when we can come back and talk about rest of the questions so they have some chance to work on exercises
[2:35:34] okay great so it's about seven minutes after the hour now um what do you say immediate about 20 25 minutes get back
[2:35:40] on on that sounds good yes okay great so you'll hear from us again and uh enjoy working on the exercises
[2:35:53] okay so we're back and um this is going to be the last time that we're going to get on the audio and
[2:35:59] go through some of the questions that have come in my co-instructor amita is standing by we're going to address
[2:36:08] questions questions 14 through 19 19 in the document and just as a reminder this document will be available online
[2:36:18] and we will be continuing to add some depth to the answers so um this document may change a little bit before what you
[2:36:26] see here in this recording and also what you see and what ends up online so a question came in about the
[2:36:34] character number limit on the length of the name of the file so the path of the whole directory
[2:36:39] structure in the file name in cdas also our space characters allowed underscore or dash accepted and the answer to that is that spaces
[2:36:50] are generally not a good idea we don't recommend having spaces in your file names names especially using unix or linux systems
[2:36:57] it tends to choke on that and we've all made this mistake i've made it many times before
[2:37:02] try to avoid having spaces um don't have them them we recommend instead like an underscore dashes are also okay
[2:37:10] um in previous versions of cdas there was a major update in right around the 2013 time frame in the
[2:37:18] in cdas in terms of its structure and also the user interface and before that the path length and file um the
[2:37:25] character lim there was a character limit and so in earlier instructions i gave you guys i suggested that you keep
[2:37:31] the files not too deep and it partly is because of the legacy of my use with cdas
[2:37:37] cdas is that it did matter then since that changeover in 2013 or so i have not had problems
[2:37:45] with path length with this um i haven't encountered them it doesn't mean that they won't happen it's just that i have
[2:37:50] not encountered them like they were in the past so um we haven't encountered them um but definitely don't have the
[2:37:57] spaces in there a questioner asked this is number 15. they were on page 7 of the advanced
[2:38:03] skills of cdas document and if you are able to flip to it here here the person was asking
[2:38:14] that if they could use a different file for their reference file and the image you see here on the right gives you the
[2:38:20] window for the create co-located file yes you can use a different file in this example we just happened to
[2:38:27] use this one and we also kept a lot of the defaults in place you can use a different reference file
[2:38:32] you can change the output file named instead of being what it is here you can also change the naming of the
[2:38:39] target file bands it can get really confusing and like the example we did where we have multiple
[2:38:44] version rounds of doing this co-location where you have r dash underscore r underscore d you can make changes to
[2:38:51] that so it's more meaningful to you i recommend it being as meaningful as possible question 16 came in and the question was
[2:39:01] would in situ validation of index values and this is the color index or the cyanobacterial index be validated in the
[2:39:08] same way so in this correlation and regression approach as in the demonstrations demonstrations and what we'd like to comment on is
[2:39:16] in terms of like what's the conceptual approach to doing this validation of like an x versus y axis that's how yeah
[2:39:23] that's how you would do it is you would compare these results either t-test or regression correlation the problem with this though is if
[2:39:30] you're trying to do the cyanobacteria index on landsat data for example it may not have the spectral resolution
[2:39:37] that you need to actually make that computation so you might be able to capture that information using a modis
[2:39:43] sensor for example but it you won't be able to calculate it using some of the other sensors that don't have a spectral
[2:39:48] resolution to capture that daniella helped us with the answer to this question so i want to thank her for
[2:39:54] stepping in to give us a little help on that that um um let's see so another way that you can do
[2:40:01] validation is when you do atmospherically corrected data is um to look at c dash and to look
[2:40:08] at the actual reflectance values so instead of coming to product like a cyanobacteria index to instead look at
[2:40:14] what's the reflectance value at that particular wavelength again this has some considerations because you're dealing with um if you have a sensor
[2:40:22] where you're measuring reflectance from the surface you need to downscale it so it's got the same full
[2:40:27] width half max as the bands that you'd be using for like a landsat sensor so your apples to apples comparison but it
[2:40:34] is possible to do that comparison so long as you're using an atmospherically corrected data product um so moving along to question 17.
[2:40:47] is there any way to make a year's average of modus sea surface temperature contour graph and seedas from separate
[2:40:53] dot nc files or should the person make a new nc file with the average value in the cells of
[2:40:59] interest and then plot the contour graph we had a couple of answers on this one and i think what the real answer is to
[2:41:07] this questioner is that we're going to provide some examples of ideas that we have for things that you could pursue
[2:41:13] we may not have the final answer for this one it can be done in qgis add rasters from different nc files and
[2:41:21] do the raster calculation to average them thank you amita for providing that answer answer the average data can be added as a
[2:41:27] raster and draw display contours or color filled map if what you're trying to do is to perform a time series analysis in cdas
[2:41:36] we recommend that the questioner review the cdas help section on time series analysis just like you had the
[2:41:42] statistics tools across the top of the cdas page there are time series analysis tools as well i'm not sure if this gets
[2:41:49] at the answer that the questioner is seeking but we wanted to point out that there are these time series tools that
[2:41:55] we did not review in on any of the exercises that we talked about today a lot of the exercises that we've worked
[2:42:03] on as part of this webinar series were informed by some of the examples that were provided by the cdas team we
[2:42:09] repackaged them and changed them around a little bit they had a series of video tutorials that came out and i think it
[2:42:14] was about 2015 and in the question answer we provide the link to those video tutorials and one of those had a case study it was
[2:42:22] kind of long and what's nice on the website they break it down by time stamp so you can see what skill they're
[2:42:26] addressing at particular time stamps um but what they did is they did a sea surface temperature anomaly calculation
[2:42:33] using data that they just grabbed from the level three browser off of the ocean color web website but it gives you an idea how to
[2:42:41] do some of this math so if the questioner is asking how do i get at some of these skills this
[2:42:47] video tutorial may address it if the questioner is getting it specifically how do i deal with certain file types
[2:42:52] this may not address that i mean i'm going to just ask a real quick question here if you wanted to
[2:42:58] interrupt me and put any comments in and the things that i've talked about so far well i think your answer right one point
[2:43:05] so i don't have anything to add at this point okay great and danielle i just got your
[2:43:11] point on question 19 so thank you feel free to add that to the document if you'd like
[2:43:16] um um i mean i'm going to ask you to do 18 because i think you're the one who
[2:43:21] answered that and you're more familiar with it oh yeah so 18 is can you check the signals against some
[2:43:29] sort of spill on land and it's in terms of spill of highly saline water on land so
[2:43:37] so optical data have been used if it's not cloudy cloudy uh you can [Music] [Music] detect if previously dry land when it
[2:43:46] has water on it reflectance changes and if you can detect that then you can see the water on dry land
[2:43:53] and so this has been routinely done by using modis data there's a link provided here it talks about it shows
[2:44:01] i think band 2 and 7 are used for short to to detect flooding over triland so you can try
[2:44:09] using motif modis reflectance data and see see if you can detect saline water on land okay so
[2:44:20] um um it's crucial that whatever spill you see on land changes reflectance of that surface and then you can detect it
[2:44:31] all right um so then we're now down to our last question which is question 19. thank you
[2:44:37] daniela so much for helping us out here um there was a comment that came in this is related to a previous comment
[2:44:45] about spaces so um the questioner asks asked that they were receiving this particular file warning the mission equals null
[2:44:54] not a valid input mission mission equals null and this might be related to the issue with the space and the in the path
[2:45:00] or file name so check the file name in the path um if that does not work you may want to reinstall ocssw
[2:45:09] and then restart cdas and then if that does not work you may want to consider reinstalling cdas and just make sure you
[2:45:15] have the most recent version of cdas so i think that this addresses all of the questions that we're going to be
[2:45:21] able to answer in this series in this session session we have received many comments from participants loud and clear and we are
[2:45:29] going to be providing some input to the cdas team about the functionality of their their their client
[2:45:35] configuration so we will pass along those comments to them and we thank you for your feedback we also thank you for
[2:45:43] your participation in this webinar series please make sure to fill out that survey because it informs us of what our
[2:45:50] participants want to learn so that we can design appropriate webinar series in the future that meet the needs of the community
[2:45:58] amina would you like to add anything no i think this is fine so we will be reviewing some of the questions again
[2:46:05] and if we can provide any additional information especially question nine here where uh adding rasters with nines how
[2:46:14] is that dealt with in cedar is something that will check uh uh also about uh signal to noise i think
[2:46:21] that's what the question is about uh that we will have to check so the questions that we have not answered here
[2:46:30] we will check with sita's team and make sure that they are answered here um also um sherry and i we both really
[2:46:39] want to thank daniela guerlin she has been a great help in every way for this webinar webinar so
[2:46:45] so thank you daniela great great and amita i just want to thank you for again being such a great webinar partner
[2:46:54] co-instructor in this i will miss working with you but it has been a wonderful time building this webinar
[2:47:00] series together i really appreciate it and of course our work would not be possible with all behind seeing behind
[2:47:06] the scenes efforts of brock elizabeth and selwyn and many others who make our materials go from what we think
[2:47:14] is presentable to something that is the beautiful branded effort of the arsenal webinar series program so with that i'd like to thank everyone
[2:47:23] and we look forward to seeing you again on another webinar series thank you everyone you
