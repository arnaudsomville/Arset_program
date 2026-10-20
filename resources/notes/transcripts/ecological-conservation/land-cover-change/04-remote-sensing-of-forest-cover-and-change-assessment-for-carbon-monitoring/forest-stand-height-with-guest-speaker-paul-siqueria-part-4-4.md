# Forest Stand Height (with Guest Speaker Paul Siqueria), Part 4/4

`https://www.youtube.com/watch?v=RROJ_4Ud78g` · id 219 · 2:15:30 · module 88 — Remote Sensing of Forest Cover and Change Assessment for Carbon Monitoring

[00:01] hello everyone this is erica potus and welcome back to the fourth and final part of our forest mapping and
[00:11] monitoring with sara data webinar series today our training will be focused on forest height estimation and we have a special
[00:25] guest lecturer professor paul cicada from the department of electrical and computer engineering at university of massachusetts amherst
[00:37] professor cicada used to be at jpl before moving to academia and we've known each other for a long time and
[00:45] it's really a a great pleasure to have him as a guest lecturer today professor cicada also is an active
[00:53] member of the nysar science team team and he represents the ecosystems group so he will be talking to you about
[01:03] the focus of nysar on ecosystems and how the nysar data is going to be used for different insar
[01:12] applications such as forest and height estimation estimation so so we are in the last part of our
[01:21] series and i think you've gotten a great overview on on looking at a time series analysis of
[01:30] forest change doing land cover classification using radar and optical data data mangrove mapping and now this is a new
[01:38] perspective here on the use of insar for for stand height estimation remember the homework will be announced at the end of
[01:47] the session as long as well as the due date that you complete the homework and have attended all the live sessions in
[01:56] order to get that certificate of completion at the end so i will pass it on to professor cicada
[02:05] welcome and you can take it from here okay and thank you so much erica and welcome everybody uh to this uh
[02:15] fourth part of the series that's being presented here here so i just want to give a little
[02:21] something about background uh so we're talking about forest stand height here and so you guys have already gone
[02:27] through three parts of this uh series and those have had sort of varying levels of complexity so you've done time
[02:35] series analysis of basic change you've done land cover classification with radar and optical data and you've worked
[02:41] some with the mangrove mapping using the double bound signature so these algorithms have varying degrees of complexity some are very simple
[02:49] classifications classifications others are time series and involve different degrees of machine learning things like the random forest or
[02:56] decision trees some use polarimetry others use things like multi-frequency and concepts of data fusion so uh by comparison
[03:06] this four stand height or we abbreviate with fsh is sort of a never another level of complexity and so it requires a
[03:13] fair amount of background knowledge uh and and uh to sort of successfully make use of this this approach
[03:21] and some of those aspects are related to sar processing interferometrics are and also being good at uh making data
[03:30] inquiries at the nasa deck deck and so today is meant to be an introduction to that overall process
[03:37] and although the material might be challenging for those of you who are looking for ways forward and you know new uh techno
[03:46] technology fields to delve into um you probably have heard of interferometry at the very least and so
[03:51] this might be a good foot in the door um um despite the complexities of bringing yourself up to speed in this domain
[04:00] so i just a little bit something about myself so um i yes erica is correct i i worked at the
[04:06] nasa's jet propulsion laboratory uh until 2005 and since then i've been at the remote microwave remote sensing
[04:13] laboratory laboratory at the department of electrical and computer engineering at the university of massachusetts and amherst and we have
[04:19] a 40-year history of working on microwave sensor development we work with with different organizations like nasa mp
[04:27] noaa darpa jaxa isro etc and there on the right you see some of the different types of things that we do i mean we're
[04:36] in engineering departments we build circuits we use them we deploy them and we interpret the data that these uh instruments collect and
[04:46] then there's some pictures down below the professors that are in the department department so um you know where is amherst uh i
[04:52] just like to throw this up here and i guess there's a little picture of a famous uh former resident of amherst i'm
[04:59] not sure if anybody recognizes who that might be that turns out to be emily dickinson a famous american poetist who's known for
[05:07] secluding herself in the upper floors of her parents house when she was young and so uh this is where amherst is it's
[05:15] in western massachusetts uh not far it's about two hour drive from boston uh there's a little close-up map that
[05:22] you see we're not far from the harvard forest it's actually harvard forest is owned and operated by harvard university
[05:28] which is in boston which is on actually the right side of the map that grayish area area is where boston is and uh that what you
[05:36] see between amherst and the harvard forest is what's known as the quabbin reservoir it's actually an artificial
[05:42] uh water reservoir that gives eastern massachusetts massachusetts uh most of its drinking water throughout the year and so as you can see there
[05:51] amherst is not that far from this well-known research forest and indeed i've spent time there myself and it's a
[05:57] it gives you some appreciation for the kind of resources that are not far from the place that i work and live
[06:05] so um looks like i mentioned earlier you know and at umass the micro remote sensing laboratory we
[06:11] design build and use microwave systems we're studying the environment uh we work everywhere from very low frequency all the way up to hundreds of
[06:20] gigahertz gigahertz most of our systems are between 100 megahertz 100 gigahertz and we do things like study severe weather you can see a
[06:27] tornado and a hurricane in that picture we've looked at snow we also have access to a small cessna that flies out of an
[06:35] airport just five miles from campus and so we can actually create our own synthetic aperture radar images and some
[06:42] of those you see on the right hand side of this view graph and so what we in essence are doing is
[06:49] working on basic concepts and working our way up to creating remote sensing instruments that might ultimately uh end up in space on a
[06:58] satellite platform so uh in today's interaction um uh this is this is sort of a brief outline so i want to talk a little
[07:07] something about insar versus synthetic aperture radar uh then we'll talk about the use of synthetic obturator or insar i should
[07:15] say there for 4 stand height mapping and then i'm going to go through a let's call it a conceptual exercise and
[07:22] estimating 4 stand height and the reason i'm saying this is because i know a number of you have done
[07:28] the um the uh using google earth engine on implementing things from sentinel one and uh in part because of the complexity
[07:36] associated with the interferometrics are and working with forest and height uh this is not so easily implemented on
[07:44] sort of a a platform as google earth engine and so it requires a fair amount of your own
[07:50] computational resources uh which could happen on indeed on a desktop or a linux computer computer or of something
[07:57] of similar power and uh skill to um to be able to implement and use these algorithms and then we'll have some time
[08:05] for question and answers which i think will be ultimately uh given through the chat window in the go to meeting webinar
[08:14] that you are participating right now and indeed as we go through this i'll be trying to pay attention to that
[08:20] during the actual seminar and answer questions if there are some short questions that i might be able to
[08:25] address as you're listening to this uh lecture lecture so a lot of the motivation behind what we're doing here has to do with
[08:36] nysar you've heard a fair amount about nysar that's the nasa isro synthetic aperture radar this is a
[08:42] picture of what it looks like you see there the large 12 meter reflector on the top separated by a boom
[08:48] and then this is what they call the spacecraft bus and so what happens is signals are generated on the bus they reflect off of
[08:55] the boom and they hit the surface of the earth and they bounce back and get recorded and so um
[09:03] i'm part of the nysar science team nysar is going to be making global uh observations observations of most of the earth's land surfaces two
[09:13] times every 12 days and little color codes that you see here have to do with the different observing
[09:18] modes one of the dominant observing modes is the background land mode which means it's going to be dual polarized
[09:25] and that'll be collected uh uh on ascending and descending passes and so a nicer has a repeat orbit of 12 days
[09:33] and so that's two times every 12 days observing basically everything that you see in green here using that dual polarized observing mode
[09:41] which is of course very useful as you've learned by now for vegetation mapping so um right a synthetic aperture radar and
[09:51] microwaves are different than optical data this is actually a fairly old image but i like to show this
[09:56] um because so first of all this is an old image this is from jrs1 from the 1990s
[10:01] 1990s and it shows a global mosaic at l band and you can see there the different streaks each of those streaks which have
[10:08] slight radiometric errors either due to freeze thaw effects of the ground or soil moisture variations but that shows you sort of the the size
[10:18] of the orbit and the in the swath in this case that was a 70 kilometer swath uh by contrast
[10:25] nisar will have a 240 kilometer swath so it's roughly on the order of four of those 70 kilometer ones stacked right
[10:32] next to each other but the point is is that you can theoretically theoretically get an image like this now with nysar
[10:39] two times every 12 days so prior jr1 had a repeat orbit of 44 days it had some data
[10:46] downlink limitations so it couldn't uh generate that much data and that short of a time period and so it had its fundamental
[10:54] limitations but you can see the sort of large volume of data that was able to collect irrespective of things like
[11:01] cloud cover and you're going to be seeing something similar on a much more repeatable basis and continuous basis that's going to be
[11:08] delivered by nicer so this is a little bit of the fundamentals of nysar and actually i often talk only about the l-band part of
[11:19] nysar that's because the l-band is going to be the one that has uh the full global coverage two times
[11:25] every 12 days there's also an s-band wavelength which is a higher frequency shorter wavelength that'll be collected
[11:34] as well but not globally mostly over india but there'll be some places outside of india so there will be an
[11:40] opportunity for doing two frequency observations as well so this is uh i'm on the nysar science team and this is the nasa part of the
[11:50] nysar science team so i'm the lead of the ecosystems part of the science team uh part of the ecosystem science team
[11:58] also includes uh sasan sachi joseph kellndorfer bruce chapman ralph dubaya he's also the ralph is the pi of of jedi
[12:07] for those of you who know what that is there's kyle mcdonald and nathan torbick so the the sort of four or five
[12:13] fundamental fundamental science drivers for nicer ecosystems have to do with biomass estimation disturbance monitoring inundation extent agricultural area mapping and monitoring
[12:24] of coastal wetlands and what you see here on the middle graphic is sort of like a standard growing season
[12:31] in this case for agriculture and so if you're observing and that's what these little blue tick marks are is
[12:38] to show that nicer will be passing over targets like this on a regular basis and you can in
[12:44] essence watch a field grow as a function of time because of the dense time series that nysar will be affording
[12:51] through its observing strategy and so that can be very useful for all the the topics that you see there on the left
[12:58] certainly for agriculture which is in the middle and what you see there on the right is a flood pulse going through the
[13:04] amazon river and this is a data actually collected by jrs1 jrs1 back in the 1990s and you can see the
[13:11] strong double bound signature that appears there as well so all these sort of time dependent signatures will be a unique contribution for nysar
[13:20] and a very interesting aspect that heretofore has been unavailable and um and in fact i would say one of the first
[13:29] areas of availability of this kind of systematic data collections has been through the sentinel one data that's available
[13:39] nowadays especially through google earth engine engine sentinel one works at a c band weight length so that's about five centimeters
[13:46] maybe about the width of your palm and so that's going to resonate most strongly with physical objects that are
[13:53] on that physical on that same dimensional scale whereas at l-band the wavelength is 24 centimeters so about the length of your forearm and so
[14:04] you can imagine the longer wavelength will be much more useful for studying the effects of various vegetation components
[14:12] whether they have to are associated with agriculture agriculture flooding flooding and and the presence of forest and forest
[14:20] biomass or forest structure so uh you know that's that was the u.s side of nicer actually nicer is much
[14:29] larger than that just the ecosystems aspect alone we have the the nasa component which you see there at the top and we have our
[14:37] indian colleagues and there's probably a few there that i haven't even included and those indian colleagues are parts of
[14:43] the indian space research organization or israel and down below john armstrong and erica podesta are also members
[14:52] i would say co-investigators that are associated with the mysore science team as well so a lot of you might be joining this
[15:02] webinar because you're interested in global biomass you might be connected to government organizations that need to show making
[15:14] making progress on the development of forest resources of sequestering carbon in your local resources and so i am well
[15:22] aware that this is an important aspect of of of of nysar and why many of you might be
[15:28] paying attention and wanting to use synthetic aperture radar for monitoring forest resources so one of the very
[15:34] appealing things about synthetic after radar of course is this is dependable data collection strategy the fact that
[15:41] you can be flying over an area two times every 12 days and with a very high likelihood get a
[15:49] unobstructed image of that area whether it's day or night and independent of whatever season it is so that way
[15:56] we can do things like observe and monitor things like disturbance or or you know agricultural regions for crop security
[16:07] or food security and those different types of applications so but biomass certainly is a big one uh
[16:14] in part because there are global treaties uh that are are signed related to this topic and so
[16:21] there are internal needs in every country for being able to monitor uh internal resources and to uh
[16:29] see how that is developing over time and so nysar does have a biomass requirement the the natural relationship
[16:36] that people use for biomass and radar is to associate the um the radar cross section or the radar
[16:45] brightness with the presence of vegetation so a darker region will have less vegetation and a brighter region is
[16:53] assumed to have more vegetation and that's after you sort of account for things like open water bodies and things
[17:00] like cities um uh but in essence uh that's the sort of standard and most reliable way of
[17:08] estimating biomass using backscatter and biomass to relate to one another is is known to have a limitation that's known
[17:18] as the saturation effect and that is at some point after you as you add more biomass the radar cross section doesn't
[17:25] change and therefore you are no longer sensitive to the presence of biomass and so a well-known metric of that is or or
[17:33] a threshold for when that saturation occurs is on the order of 100 megagrams per hectare and this is what the the
[17:40] requirement requirement is for nysar in terms of monitoring biomass up to 100 tons per hectare as you see here
[17:48] but as you saw in the previous view graph everything that's green in this view graph shows those regions
[17:54] worldwide that are estimated to have biomass less than 100 tons per hectare so even though it doesn't cover all the
[18:00] world's biomass it covers uh the vast majority of it and so even though there is this fundamental limitation uh it's
[18:07] still a useful aspect of using synthetic adapter radar for monitoring in-country biomass so another kind of oh and this is that
[18:18] again again one other thing i might want to say is is many people who work with forests are
[18:24] also also [Music] [Music] have explored the use of of um using things like the the diameter of
[18:35] trees to estimate the biomass and if you have access to lidar you can also create empirical equations that relate
[18:42] the height of force to the amount of biomass in a forest after you control for environmental factors and those
[18:48] sorts of things so so sometimes you don't always have to just look at things like the radar brightness
[18:53] which is a form of summing up scatterers within a forest canopy if you can measure things like the height remotely
[19:01] then you have an alternative means for estimating force biomass and indeed this has a lot to do with the with the
[19:08] motivation behind the four stand height algorithm that we'll be going through today so a little bit more about nice r and
[19:16] i've got about another 10 more 15 view graphs just related to some of the background materials uh so nicer is
[19:22] going to be collecting things in a track frame frame coordinate system where things will be consistent as a function of time that is
[19:30] once it launches uh things that you see like in red and green there will be you'll be able to refer to those as
[19:36] specific tracks and frames and you could collect time series and use them use those time series in a
[19:42] trivial manner manner just by stacking the different images on top of each other and looking at pixels as a
[19:49] function of time would give you those sort of time series so it turns out that there's 173 unique
[19:55] tracks that completely span the equator and that sort of dictates the number of tracks that nysar will be creating and this is an image of
[20:04] southern california showing the sort of uh orientation of the ascending and descending tracks uh that'll be created
[20:11] for nicer and if i haven't mentioned it yet uh the or you haven't heard that before the the
[20:18] fundamental resolution for an isar is on the order of 8 meters by 12 meter pixels that's the single look complex
[20:29] resolution the highest resolution that isar can provide and as you might have learned in previous versions of this uh
[20:36] seminar series is uh you can reduce speckle by uh averaging that and reducing the resolution a little bit and
[20:43] um uh improving the signal noise ratio of your imagery and so typically what most data that you might use from
[20:52] nicer might be on the order of 25 meter pixels or multi look even higher to 100 meter pixels or so and those 100 meter
[20:59] pixels are the resolution that the nysar requirements are meant to deliver deliver uh final products like biomass or crop
[21:09] area area although the inherent resolution of the sensor and the resolution that you'll have access to as a user will be much
[21:15] higher than that so just in terms of displaying data and you guys have might have done things
[21:22] like this you can look at different polarizations in this case a lot of the nicer background land
[21:29] observations are going to be dual polarized that means a co-polarized horizontal let me do transmit horizontal receive horizontal
[21:37] and also the cross polarized signature so you're still using the same transmitted signal the horizontally polarized signal and then you receive it
[21:46] in vertical polarization so that gives you two channels to observe and you can you know add color to
[21:54] those channels which is just a grayscale image and create pictures like this and in this case things that are blue are typically
[22:01] associated with open water bodies or sometimes even roads just the way that the color scheme works out
[22:07] and then green is normally associated with force using this color scheme as you would expect and then uh doing that for just one
[22:17] image and then you can because the the synthetic after radar lends itself well to creating time series you can look at
[22:24] time series of data just as you see here and what you see on those numbers at the
[22:30] top have to do with the year and month and the date and you can see that you
[22:33] can create a time series of these kind of images for observing how things are changing as a function of time
[22:42] and this is just some little example of some time series analysis you might do in this case it's using halos ii
[22:47] observations there's a calendar at the top and the different dots have to do with different polarization combinations
[22:55] for parts on the ground and so you can look at different land cover classes and look at how they
[23:00] change as a function of time and use those time series patterns to better understand what the seasonality
[23:08] and what the land cover type might be in those different areas and that the first one was for copol and
[23:16] this one is for cross pole so i'm going to start delving into some of the concepts that are associated with
[23:24] forced and height and um and one of these is going to be interferometry before going that i want to talk about
[23:29] an inherent ambiguity that's associated with synthetic aperture radar and so imagine that that thing that you see there on
[23:37] the left that's labeled e1 think of that as the as the satellite or an aircraft that's transmitting a signal
[23:44] that signal is represented by that sinusoidal wave it hits the target it bounces back and that basically is what
[23:51] is used to create the synthetic aperture radar image and uh when you observe targets on the ground in that way
[23:59] right you have this sort of the small ambiguity you don't quite know exactly where the energy came from
[24:05] you can point the antenna in a certain direction but it's not like a laser beam and the way synthetic after radar works
[24:11] it spreads out energy and what we call the elevation direction and so as we're basically measuring time
[24:19] and using that time is how you get the resolution in the cross-track direction and then you can project that onto the
[24:26] surface of the earth but what you're still missing is the sort of fine scale looking ambiguity in terms of knowing exactly where the
[24:34] response from the target was coming from and just a little bit more in terms of background in terms of uh theory uh
[24:43] everybody might have heard about the you know doppler processing with sar and heard a little bit about what doppler is
[24:50] and so you know if something is moving towards you it has a we might call a blue shifted doppler signature and if
[24:57] it's moving away from you you'd say it was redshifted or going towards a lower frequency frequency and so synthetic after radar
[25:04] makes use of this doppler shift for creating this unprecedented resolution which again is something on the order of
[25:10] 8 to 12 meters 8 meters in one dimension 12 meters and the other dimension uh and and that
[25:17] resolution irrespective of distance from the target is ultimately due to this doppler sharpening that happens through this uh
[25:25] interpretation of the of the imagery as being doppler shifted and so this is just a little illustration of how that
[25:31] happens so you can imagine you've got a platform that's moving in the direction of travel that you see in this diagram
[25:37] it's looking off to the side if it's looking exactly off to the side then targets are neither approaching or
[25:42] leaving it at that very instant and so you call that the zero doppler or the broadside direction
[25:48] and then if something is forward in the direction travel then of course that would have a positive
[25:54] doppler blue shifted doppler as opposed to negative if it was behind you and that would be a
[26:00] negative doppler so each of those as a target is as as a as a platform is passing by at a
[26:08] target target it that target starts off with a blue shift it goes to zero and then it gets
[26:12] red shifted right basically high frequency frequency uh zero frequency down to red to low frequency and so that's what they
[26:20] call the doppler history and each target has a sort of unique doppler history has a unique range
[26:27] profile and so based on those two independent measures of how a target behaves is what you can do to create a
[26:34] high resolution sar image and this is just sort of an illustration i'm going to put here that shows uh
[26:41] you know how uh as as the platform is moving along this is the the aperture of the the real aperture
[26:48] moving along and it illuminates the ground and things that are illuminated by multiple locations locations as the radar is moving by
[26:57] you can get this sort of high resolution in the along track direction and that's what gives us
[27:03] synthetic aperture radar so now i want to talk a little bit about processing flow for synthetic aperture radar
[27:12] so many of you have heard about sar processing you might be familiar with some packages that people either
[27:19] commercially sell or give away for free for working on sar processing and so this gives some structure to that and also
[27:28] relates to some of the language that's used to refer to that structure so we'll just go through this slowly and
[27:34] sort of uh see how we go but um so you know this is trying to the basic
[27:39] process of taking radar data was collected on a platform whether it's a satellite or an aircraft and then converting it into the
[27:47] imagery that you're familiar with and you've already seen as part of this uh this this seminar series
[27:54] so uh what happens is you you downlink the raw data from the satellite that data is formatted into standardized
[28:03] files that contain information about like the time of day that the data was collected where the satellite
[28:10] was was what the name of the satellite was and some information about all the data that was collected like the sampling
[28:17] rate of the analog digital converters and those sorts of things and so when you look at raw data that
[28:23] comes comes from the satellite that's packaged into these these raw data formats by the space agencies that's what's called raw data we call
[28:30] that level one data and if you want to convert that data into imagery you need some some somewhat sophisticated processing
[28:40] algorithms and so some commercial makers of those processing algorithms are like gamma remote sensing based in switzerland makes a sar processor
[28:50] sarscape also based in switzerland offers an idl version of that there are some freely available versions an older
[28:59] one of those uh free versions is called roy pack although i think that's a harder to obtain these days because it's
[29:06] been superseded by uh this isce or what people call the ice processor and unfortunately i don't remember what ice stands for at the
[29:15] moment but anyways it's listed there you can google it and figure those things out out so if you want to uh convert raw data
[29:22] which is just simple voltages that are collected by the satellite as it's passing by uh targets on the ground into what you
[29:30] might call us what they do call slant range data or level 1.1 data it's basically in the same coordinates as the
[29:37] radar radar uh then that's what you use those processors for and then if you want to put those
[29:45] radar radar coordinate data into a domain that we experience which you which i call you know the ground range right that's what we
[29:55] call uh you know map level data uh that's what we call level 1.5 data right so when you project things that are in
[30:02] the satellite coordinate system into a ground range that goes from level 1.1 to level 1.5 and so there are some tools for doing
[30:10] that there's a well-known one that used to be available at the alaska satellite facility called map ready there's a
[30:18] pulsar pro is another one and uh and actually the snap toolbox which is not listed here also allows for
[30:25] doing that and then once you have things in ground range then you can do all kinds of image
[30:30] processing classification um actually these are this is a little dated slide so things like envy could be
[30:37] used arcgis qgis of course uh and um and the google earth engine could all be used for
[30:45] further interpreting the data and turning them into what you call level two or you know corrected ground range
[30:51] data and map coordinates and interpreted using um classifiers and those sorts of things okay and this is just sort of give you
[31:01] an idea what sar data looks like you know when it's raw so everything you see here on the right are you know oh by the
[31:06] way so as you go vertically on this uh diagram that's what they call uh slow time as the satellites passing by it's
[31:13] sending out pulses of of radar pulses and those travel at the speed of light and those are recorded
[31:21] using the onboard electronics and so every time you transmit a pulse you observe it as a function of time
[31:27] and that function of time that you're recording that pulse is what happens on the horizontal axis of this image
[31:33] and so this looks like noise right and indeed that's what raw sar data looks like and it requires some
[31:40] knowledge to convert it into normal imagery and this is what level 1.0 data looks like so the first thing that you might do is
[31:50] range compression right so you want to uh create images that are make sense in the range direction and so this is what
[31:58] it looks like when you do range compression compression and in the process of doing that actually you are measuring
[32:03] the power that comes back to the radar right the the total how much what the reflectivity is and you're also
[32:10] measuring the amount of time it takes for the to leave the radar and hit the target and come back and you can
[32:16] actually measure that amount of time to sub wavelength scale so it's a very small amount of time and that gets
[32:21] converted into a phase and that's what is a second piece of information that you see there on the
[32:28] right so this still looks not very useful the next thing that you want to do is a doppler processing or what they
[32:34] call azimuth compression and so this is the result of that for this particular scene so on the left you
[32:40] see the the magnitude on the right is the phase and so this is what you might call the slant range or the level 1.1
[32:47] data coming out of the synthetic actuator actuator and what you can see there is still a phase looks fairly noisy basically
[32:53] because targets are you know all kinds of uh uh small portions of a wavelength away from the from the satellite
[33:02] and so that looks like noise in terms of the phase but we see there on the left you
[33:06] can start seeing actual targets there uh for those of you who are used to looking at this kind of data you might
[33:12] see some straight lines here that are associated with things like farmers fields you might see a curving a
[33:17] meandering line that's probably a river in this image among other things but the next step then is to take this radar coordinate
[33:26] data and then project it onto the ground range range and so when you do that based on just
[33:32] pure geometry and knowing where the satellite is what direction it was pointing pointing and you know where was on the planet uh
[33:39] then you can take those power power measurements on a per pixel basis project them onto the surface of the
[33:45] earth and lo and behold you get this image which looks a lot more like an optical image and puts things into a
[33:53] much uh into a domain that we're much more used to right the the the ground projected domain the map domain this is of course
[34:02] the world that we live in and so here you can clearly see where there might be roads there might be forests farmers
[34:07] fields fields and all those kind of things in this image and so this becomes quite useful at this level
[34:15] so all that discussion had everything to do with what you coming up with what you see on the left hand side of this view
[34:22] graph right here that's the radar cross section and this is of a volcano in hawaii hawaii um but you probably have heard about
[34:30] using sar for mapping topography right the space the space shuttle radar topography mission srtm flown in year 2001
[34:42] uh collected a topographic phase on board the space shuttle in 11 day period and created much of the world's
[34:50] topography made a map and and and created maps just like the one you see here on the on in the middle
[34:56] under topographic phase so uh by making and well that's one of the output products that you can actually use
[35:04] um um by and we'll be talking about that in just a moment so that that's a that's a
[35:09] useful output from uh synthetic capture radar radar uh secondly you can also measure what they call correlation magnitude so when
[35:18] you take two radar images and you multiply them by each other and you take the an average and then take the
[35:23] magnitude of that it creates this thing called the correlation magnitude and you can see there's information there that's
[35:29] different from the radar cross section it's different from a topographic phase and so that's sort of an interesting
[35:36] layer of information of it in of its own right so those are three fundamental data types and then there's the fourth
[35:42] one one which we're not really going to be talking about today but it's just sort of interesting and this is what would
[35:48] happen if you had an idea of what the topographic phase should be you had an idea what the
[35:52] topography should be for an area and then you go and measure it with an interferometer and then you take the
[35:58] difference of those two topographies and that's what you see on the right that's called the differential interferogram
[36:03] and that can be useful if for instance the the height or the size of your volcano might
[36:10] be changing by a small amount you can actually see this using repeat observations of the same target
[36:18] using using interferometric star and looking at a time series of these interferograms and looking at how actually the topography
[36:26] is changing and most people would think well the topography is not changing very much at all which is true typically
[36:32] but even if it's changing a small amount it can show up as you see on the right
[36:36] hand side and the strong signature called the differential interferogram so i want to talk a little bit now more
[36:45] about forest and height and where we're coming from so this is where we sort of first started talking about this topic
[36:51] there's if you have a single antenna flying through space uh and so that's what that think of this
[36:57] is your platform which is coming into and out of the page there and it's looking off to the right so that's if
[37:02] you have one observation you have this fundamental look angle ambiguity and so this would not be very good at
[37:08] determining topographic height if you add a second antenna and so this was our old one this e1 and now you've
[37:16] got e2 and now you're you can hit the target with a signal using e1 and then you do the exact same thing
[37:25] using a second antenna e2 think of that as another another satellite another airplane or another antenna on the same platform
[37:33] and so you transmit to the ground it hits the same target on the ground and comes back so
[37:38] in essence this e1 and e2 you're very far away from the target so those the the the look angle difference
[37:45] between between uh uh e1 and the target and e2 and the target is very small in essence those lines are
[37:52] running in parallel and so e1 and e2 are going to observe in essence the exact same signal as one another with one
[38:00] exception and that is you're going to be measuring what they call this differential phase and this differential phase you can
[38:06] determine determine by comparing the signal e1 and e2 with each other in the complex domain and then based on that you can solve for
[38:15] what this look angle is to a much higher degree of accuracy than you had before if you know that looking all very
[38:23] accurately you know this difference but the distance between the two antennas very accurately you know the height of
[38:29] the platform very accurately then you can just use some simple trigonometry which we're not going to talk about at
[38:34] all all and just using simple trigonometry you can actually solve for what that look angle is from the platform to the target
[38:42] and so that is ultimately how people use interferometry for estimating or measuring topography another way to illustrate that very
[38:52] clearly is right here so again you've got two antennas there's slightly different ranges to the target those
[38:58] intersect at different places and so you can use that in triangulation to figure out what the height of the train is
[39:05] based on those observations and that's all that we're really doing with interferometry interferometry so so that might be one take home message
[39:12] right here is i'm showing you terrain and you've got two antennas you're bouncing signals off the surface
[39:18] of the earth and you're using that to estimate to topography okay that makes sense but what do we actually mean by topography
[39:26] is a question you might ask yourself so topography we normally associate that as the bare ground surface right
[39:34] but let's say now you have a forest now is the is the topography the surface underneath the forest is at
[39:42] the top of the forest and in which situations might you want one versus the other and and could you use that bit of
[39:50] information to give you something that you might want to know about the forest okay and so that's
[39:56] exactly the concept that we're talking about here with forest and height so again uh there you see on the left is
[40:02] a diagram very similar to the ones that i showed you before you've got two platforms two antennas maybe
[40:08] on the same platform and you're just measuring a path length difference to measure the train height but what does that
[40:14] difference what does that terrain height mean when you're looking at a forest which actually has things that are
[40:21] have many heights and so and what kind of signature does that give an interferometer interferometer when you're observing uh a target that
[40:29] has has interactions not just at the top of the tree at the bottom of the tree but
[40:33] throughout the volume of the forest and so that is what ultimately gives rise to this forest stand height
[40:40] signature uh that we'd like to use using sar interferometry so let's have a look at what you know
[40:51] how do you makes our interferograms and so what you see there on the left this is a place actually in colombia
[40:58] and um and so what we're doing is we're taking two radar scenes to create one image consisting of complex numbers this
[41:05] magnitude and phase that i talked about so on the left here you might see scene one that might be collected on one day
[41:12] and these are scenes actually were collected by elos 1 back in 2010 and these data were collected about one
[41:21] and a half months apart so on the left you see uh one of those scenes you see
[41:25] the other one uh called scene two uh collected a month and a half later and those scenes look nearly identical
[41:33] and so you could compare those with one another both in terms of the magnitude and phase and then you can create that
[41:41] that topographic phase signature that i showed you a few view graphs back and that's what you see there on the far
[41:47] right it's called the correlation phase and you can associate that with topography in this case this area
[41:54] is is on a on a slope right the this part of columbia is on a slope and actually what
[41:59] you might also be noticing here is there might be some slight what you might call a phase trend in the
[42:06] data which can ultimately be removed by the processing software something else you might notice is in the in
[42:15] in the backscatter data are these bright grayish areas those are associated with forests the the darker regions are
[42:23] non-forest non-forest areas and then the very dark of course uh water bodies or in this case it's a
[42:29] river going through that area so um so that's so that's the the backscatter power you see in scene one and two the correlation
[42:38] phase that you see on the far right and then this middle one that i'm calling the correlation magnitude or
[42:44] what people also call the interferometric coherence is the consistency of the data from one observation to the next so these two
[42:54] data were collected a month and a half apart apart and what you see there is these very bright regions those seem to
[43:01] be associated with these bare surfaces right here okay that's interesting so those bare surfaces show show a lot of consistency from one period to
[43:10] the next in other words that bare surface hasn't changed during that month and a half period between those
[43:16] observations and that makes sense right people aren't out there disturbing those surfaces and so those have a high
[43:22] coherence or a high correlation magnitude magnitude notice this water body that you see here in the um in the middle of those bare
[43:30] surfaces and it shows up as a dark area in that correlation magnitude image and so that's showing you that there isn't much
[43:38] consistency in that water body and then that's true because the surface of the water is continually changing so
[43:44] it appears darker compared to the bare surfaces that are surrounding it and you could say something similar
[43:50] about the river right that also you can barely see in the correlation magnitude but it appears dark because that surface
[43:56] is continually changing now what's particularly interesting about this particular image is notice where that there are forests
[44:05] right everywhere that's in essence gray here is associated with a forest and those appear dark and so what's happening then is between
[44:14] these two observations even though the brightness of the forest is not changing from between scene 1 and scene 2 those
[44:21] trees are moving right either there's some weather that's blown through and that's caused the force to to blow around a little bit right
[44:29] imagine it's like taking a photograph of somebody and they keep moving when you're taking the photograph and the
[44:34] image looks a little bit blurry right you can still see that the person's there but the the output result is that
[44:40] they're blurred a little bit so these darker areas are in essence an indication that something there is
[44:46] moving on the ground and therefore the correlation is going down well that's interesting right so many of you want to
[44:52] use use synthetic after radar for forced mapping and so one thing you could do indeed is just do a simple threshold
[44:59] classification based on those two scenes that you see there on the left or you could do uh create an interferogram create that
[45:08] correlation magnitude that you see there uh uh in that on the right and use that as an
[45:14] indicator of where there are forests and and one thing i might want to add here briefly is not just doing a threshold
[45:25] classification classification you might expect and it turns out that this is true that that if you have some short vegetation and
[45:33] it's moving it's going to be more consistent between that month and a half period than something that was taller or a very tall
[45:41] tree right so something that's taller is going to move more than something that's shorter and so you can use that
[45:47] relationship of height to to motion to this darker color and the correlation magnitude to make a linkage between this
[45:58] interferometric correlation magnitude and the forest height and in essence that's exactly what the four stand height algorithm is doing is explo
[46:06] exploiting that relationship between the physical motion of objects on the ground and associating that with forest height
[46:16] so now i want to talk a little bit about interferometric processing and how you go about doing that
[46:23] so so anytime you're doing an interferogram requires two images like you see there on the left and then you can create
[46:30] these two images on the right through interferometric processing okay this is what the interferometric processing chain looks like
[46:37] so first of all you get the satellite data you get the satellite orbit data and then you designate one to be the
[46:43] master which basically means that it's unchanged you assume that it's correctly projected onto the ground etc and the
[46:50] other one's called the slate and so you want to co-register those two images as closely together as possible to make
[46:57] the interferogram and this just shows the process of doing that okay i'm not going to go into this particular detail
[47:03] but you can see there's a number of steps here that include focusing of the data data refining the positioning of the data
[47:11] before you ultimately make what they call a multi-looked image which is what this rmli is down there below
[47:20] and so based on all this there's really quite a host of interesting information that you can pull out of synthetic
[47:26] aperture radar data so on the left is just as one area it's an optical image actually i believe this is in western
[47:32] massachusetts on the right shows you the variety of different data sets you can get out of synthetic after radar
[47:38] different polarizations if you have things like a digital elevation model right you know what the topography is maybe independently
[47:46] measured not using synthetic capture radar radar you can use that to make an interferogram you can simulate
[47:54] an interferogram you can co-register those to each other and then you can look you can create things like these differential
[48:02] interferograms that you see on the far right there you can also look at um i guess there's just other things here
[48:11] just showing different possible output products that you can create using uh synthetic after radar data for your
[48:18] region okay so now what i want to do is talk about the thing that we're really here
[48:26] for today which is how do you calculate 4 stand height from synthetic aperture radar radar so the focus is on using l l-band
[48:34] as opposed to c-band which is shorter wavelength so l-band is 24 centimeters remember it's about the length of your
[48:40] forearm forearm and we use that because it's a relatively low frequency and it's sensitive to the more permanent woody
[48:46] structures of the forest so things that are going to move a little bit but not too much to basically cause
[48:52] a full loss of information so that works better at l-band as opposed to c-band and so what we'd like to do is we're interested
[49:00] in things like biomass right or where there's forest and so there's things that we can do to measure
[49:06] vertical structure right we can think of vertical structure as a signature of the presence of vegetation and forests
[49:13] and so we'd like to actually use this for the nysar mission or looking backwards at old aylos missions and we'd
[49:21] like to use this for investigating force so one way we can do that is is through backscatter right we can look at
[49:30] the power and relate that to biomass and people have done that and still do that and it's a very useful measure all by
[49:36] itself itself or if we could measure height like i just talked about like lidar then that's a possibility too
[49:43] right and one way to measure height is to fly two satellites in formation right let's just say we didn't look at
[49:49] the motion of trees at all we're just measuring height straight up and so you can do that and um
[49:56] but that typically requires two satellites and satellites are very expensive right the nice hour alone costs costs actually uh almost a billion dollars and
[50:05] so i always think of this as a 500 million dollar question so do you want to fly two satellites at the same time
[50:12] or you want to fly one satellite and then use this temporal decoration signature to estimate the height of the
[50:18] forest and so this is an attempt to address the second version of that which is use this
[50:24] motion of the forest to estimate the height height so uh we've actually done this and we've i'm going to show you some results of
[50:33] this uh this development and things that you can actually download and do for yourself today so one of the places we first developed
[50:40] this algorithm was not far from where i am this is in the u.s state of maine there's another research forest up there
[50:47] called the holland forest and what you see there and the bright red is the physical size of an halos 1
[50:54] image it's about 70 kilometers wide and 100 kilometers in length and and the pin that you see there is
[51:02] the location of holland forest and in that vertical strip that bluish strip that goes through there that's
[51:08] actually lidar data so so there's a instrument called elvis that collected lidar lidar forest heights for that same region and
[51:18] that is overlaying on that particular halos image so of course lidar is typically thought of as the the gold
[51:25] standard for measuring forest height so if we have lidar data then we have basically measured the forest height for when that data was
[51:33] collected collected the difficulty of course with lidar data is it's expensive to collect uh it's really a point measurement it's not a
[51:40] mapping instrument like a synthetic after radar and so it's one of the reasons that we're using synthetic
[51:45] aperture radar to create maps of forest height rather than doing these point samples so we're going to explore that
[51:51] right here and so actually this is a little bit more complicated than i'm going to explain right now but this is showing
[51:58] you the overall process of how forest and height is estimated there are some algorithms that are posted online that you can download that
[52:06] in essence execute this flow diagram that you see right here and and one way to think of it is this flow
[52:13] diagram is meant here for your future reference so should you start doing this on your own and have some questions
[52:21] about how this is implemented you could remember this little discussion that we're having and look at this flow
[52:27] diagram and get some general idea of what's going on in essence what happens is you you start with two
[52:34] synthetic after radar images there on the left you form an interferogram you do some processing you combine it with
[52:40] some some ground validation forest height either measured by hand or measured with airborne or terrestrial lidar you
[52:49] combine that with the interferometric sar data and from that you can estimate the forest height there that you see at the bottom
[53:00] and i i mentioned this to you before what we're really doing is just measuring the motion of the trees and
[53:05] this has been to depict what that looks like um um let me see if this is something that's
[53:14] worth getting into uh one thing that i might want to say is that correlation magnitude image that i
[53:23] showed earlier right that had to do with the fact that the trees were moving and you can
[53:28] imagine in some parts of the world trees might be moving more at certain times of year than others might think of
[53:35] the monsoon season or think about the difference between winter and summer and how much the trees are changing that
[53:41] amount of time so more change means that the scenes are going to look less like each other between those time
[53:48] periods and so there's going to be a variable in there that is going to be time dependent
[53:54] and it's going to have to do with the kind of weather or climate where that data was collected
[54:00] so so that makes this a little bit challenging because you need to somehow take that into account right what kind of
[54:08] phenomenology is your force going through when you're trying to do this estimate of force and height so an easy way to do that of course is
[54:17] to just use those images that i showed before you use some sort of ground validation and you create
[54:25] coefficients in your model that are adjustable and so if you can adjust those coefficients to match the
[54:32] places where you do know the forest height to the to the um to the radar imagery then you can extend those
[54:40] coefficients to the larger scene because that was collected all at the same time period and thereby extend the geographic
[54:48] extent of your forest height estimates so with that said what this plot is showing you is different pairs of
[54:56] interferograms that's what these dates are right here this is july this is 2007 july and august 2007
[55:04] the vertical is the average correlation magnitude for an image so low correlation at magnitude means not so much information
[55:13] less useful higher correlation magnitudes means that there is more information in the scene and it'll be more useful for this
[55:20] four stand height estimation so for each interferogram you can calculate what is the mean correlation magnitude for that scene
[55:29] and if it didn't matter what time of year you're collecting data all these correlation magnitudes would be the same
[55:36] but as you can see that they vary they vary by different seasons different dates dates and so you basically want to create a
[55:43] variety of interferograms and based on that calculate what the average correlation magnitude is and choose the one with the highest
[55:50] correlation magnitude basically the scenes that have remained most consistent between those observing periods in this case the scenes that
[55:57] were most consistent was in 2007 between july 10th and august 25th 25th and another one which wasn't too bad was
[56:05] um um july 10th and october 10th and another one was this 2010 april 17th and october 18th
[56:14] so you can use that to indicate which ones you want to use for your force and height estimation based on those
[56:19] interferometric pairs so let me show you some actual results of this process so what you see there on the left is
[56:27] that how enforced region it's just a close-up close-up and and what you see there on the second from the left elvis right
[56:36] that's the lidar data for this same region region and it's showing you the bright areas the the yellow is on the order of uh 30
[56:44] meter tall trees if something was red it's 45 meters you don't see red here because there are no 45 meter tall trees
[56:51] in this area so this is sort of a simple way to and for the showing you what the heights
[56:58] of the trees are in this particular region region okay so then you can take that and leave
[57:02] that aside for right now and then you can compute the interference sar correlation magnitude like i had shown
[57:09] you in a previous u-graph and plot that at the same time and so the first thing you might notice when comparing the
[57:16] elvis image with the inside correlation magnitude is actually they look pretty similar similar the one thing that makes it different is
[57:23] in these yellowish regions right along the river right and that is places where the river is changing a lot or you might say
[57:30] moving a lot and the fact that the river is moving a lot might without better knowledge might actually
[57:35] make it look like a tall tree right because the trees are moving and we're associating the movement of trees with
[57:41] with height and so if the water is moving you might mistakenly say that that is the height of a tree as well
[57:48] but there are other ways to know where there's water and where there isn't and so you can mask that out and that's
[57:55] what's done here on the right hand side so we've just created a water mask we've combined it
[58:00] with the radar data and now you can compare the far right image with the elvis data and
[58:07] you can see a very good correlation between those two independently collected data sets one from a lidar and
[58:14] the other one from repeat pass interferometric sar so there's obviously a signature here and we'd like to make best use of that
[58:22] to not just look at one area where we already know the tree heights right can we extend this over the larger area in
[58:28] this particular region and estimate tree heights in that larger area and um i think i'm not going to talk
[58:37] about this right now well actually so yeah on the left again is that same elvis image and i was mistaken that the dark red is
[58:43] actually 35 meters you can compare something like that with the radar cross section which is this grayscale image there's not much of a
[58:50] relationship between tree height and radar cross section there another one is to look at the interferometric phase
[58:57] or the topographic height and again you don't see much of a relationship between the elvis data and
[59:03] the interferometric topographic height so that doesn't seem so useful and then this last one is the one i just showed you on the previous
[59:10] view graph indeed there seems to be a visual relationship between those two and so that's the one we'd like to
[59:16] explore and if you actually make a measure of these different mechanisms for estimating height and look at what is the root mean squared
[59:26] error between the gold standard which we'll call the elvis height and the estimated height using these different
[59:32] methods you come up with a plot like this this and um and so the one that has the least
[59:37] errors for the tallest trees is the solid line indeed that's the inside correlation magnitude height okay and so these other ones have more
[59:45] errors actually one notable exception is notice that the sour back scattering intensity the radar cross section actually does a pretty good job of
[59:52] estimating height for very low height trees and so actually that's something something that we're exploring now in terms of
[59:59] using augmenting this uh instar correlation magnitude for estimating forced height but the take-home message with this really is to notice that on the on the
[1:00:08] horizontal axis that's the we call the ground validation from elvis at the lidar height the vertical axis is the
[1:00:15] error and so minimizing your error is what's desired and you can see the one with the minimum error in this group
[1:00:21] here is from the inside correlation magnitude the one that we're talking about today and so uh you know you can do this for
[1:00:32] halos one uh images you can do this for making a mosaic of images it turns out that the the
[1:00:40] accuracy improves as you increase the number of scenes that are added to the data and uh we all know that um uh halos one
[1:00:49] that flew back in the in the 2000s more recently ailos 2 has been flying and halos 4 will be up and coming halos
[1:00:58] 2 was it advantageous compared to a loss 1 because instead of having a 46 day repeat period halos 2 had a 14 day
[1:01:05] repeat period and you can see across all these images you get a consistent behavior in terms of using this insider
[1:01:13] correlation magnitude for estimating forest height okay so let's just look at some of these results and actually this is um
[1:01:27] showing you what the advantages of mosaicing the images and so what you see there on the left is if you just take
[1:01:34] the correlation magnitude you create a mosaic of it and you make a very simple relationship between the
[1:01:40] correlation magnitude and height and you get that sort of noisy signal there on the left now if you force the overlap regions to
[1:01:48] be consistent with one another then you get a much more consistent looking map you can correct for the
[1:01:54] seasonal and the daily effects of weather and the climate and so you get a much more consistent map of this forest
[1:02:01] height and that's what you see there on the right and this is just showing you that if you
[1:02:07] want a map like an entire state right you're not just dealing with one set of scenes you need a bunch of scenes
[1:02:14] from the synthetic aperture radar and uh and so this is showing you the different orbits and frames that were
[1:02:20] used used to create the main mosaic that i showed you in the previous view graph and this is a description of a paper
[1:02:30] which i won't get into but just showing you how not just making a height estimate for one scene which is
[1:02:36] this what you see in red right here on the right hand side is now that if you only have lidar data
[1:02:43] for one area or you can propagate knowledge gained from that single lidar observation to other scenes where you don't have lidar
[1:02:52] data by using these overlap regions and propagating the information from that place where you do have the information
[1:03:00] to places where you don't and thereby improving the overall estimate of force and height for the larger region
[1:03:08] and so this shows you the results of something like that when you take two scenes right so this is that same
[1:03:14] area here in central maine you might recognize that little lake there on the on the left hand side
[1:03:20] here is our halo scene where we've actually measured the four stand height using the lidar data there it is again
[1:03:26] in this figure c and then you can overlap it with another seam looking at the correlation and you
[1:03:33] can see that they're quite different estimates from one another but now using this overlap region to enforce
[1:03:39] consistency between the two images you can create this mosaic which is much more self-consistent and a way of propagating this
[1:03:46] information to the larger area and so you can do this across the whole state of maine and that's what you see
[1:03:52] right there and i showed in a previous view graph and just showing different methods of dealing with that and i won't get into
[1:03:59] that right now and you'll excuse me i'm going to zip through some of these slides here because i think they're not
[1:04:05] important but this is a an example of what the state domain looks like now fully calibrated and estimating the
[1:04:12] force stand height one thing that you might notice in this particular image though is notice here in the upper right hand corner of our
[1:04:18] mosaic mosaic that we have unusually large trees on the order of 40 meters or more and actually for this particular part of the
[1:04:26] world those are not realistic right so those are what you might call an error in the algorithm and that's due to the
[1:04:33] fact that actually there's a agricultural production area or region in this mosaic and that's a near the
[1:04:43] canadian province of new brunswick and it's causing a lot of decoration in the image that amount of decoration is
[1:04:50] getting interpreted as tall trees unrealistically tall trees and so that creates this sort of high estimate estimate so one thing you could do to correct for
[1:05:00] that is to include a mask in your data analysis for removing areas that are known agricultural regions so you don't make
[1:05:10] these unusually high estimates another approach would also be to leave those numbers in and then when you
[1:05:18] find find forest heights that are unusually high let's say 40 meters and above then you can mask those out
[1:05:25] post processing right basically say anything that had a tree height that was above some certain number that was
[1:05:31] realistic for your region just call those non forced and then eliminate them from your larger estimate and we can compare this to other sort of
[1:05:42] statewide estimates of forest height one of them is a well-known measure that was uh created by joseph kallendorfer from woods hole
[1:05:53] and this is uh called the nbcd data set i don't remember what that acronym stands for but it used srtm
[1:06:00] differential heights for estimating forest type and so there on the left you see the one from halos and the one on
[1:06:06] the right is from nbcd and you can see a fairly good correlation the one thing you might say
[1:06:12] is the nbcd seems to saturate about a certain height and in fact that's a known problem with the nbcd data set and
[1:06:19] the other thing you might notice is this area that i showed you the agricultural region for nbcd shows that it's low correctly
[1:06:26] low and it's high for the halos and that has to do with this agricultural development which could be masked out in
[1:06:31] a number of ways and then this just shows the comparison between those different data sets and i'm going to skip through these this
[1:06:41] is just showing you the sort of fundamental relationship showing you i mean not any measure is perfect but
[1:06:47] there is a direct linear relationship between between this instar inverted height and what you might call the gold standard which is
[1:06:54] the lidar rh 100 heights and also i mentioned this you know you can you can take these data and propagate them outside of
[1:07:06] places where you have lidar data and we've actually already done that for the state of maine and we've even gone to
[1:07:10] other states and propagated it there and were able to compare those heights that were derived using that data that was collect that elvis
[1:07:19] data was collected in maine and compare it with lidar data that was collected in the state of vermont
[1:07:25] and see how well we did and this is just showing you there on the left actually this is a new
[1:07:32] hampshire non-vermont these are just images this is the lidar rh100 and if you compare that to the
[1:07:39] halos data when we mosaiced it right this is what you see there on the third one and again it looks quite similar to
[1:07:45] where we have the lidar data which is very encouraging right what that's basically showing you is that this alos1
[1:07:52] data even without collecting any lidar data there at all looks a lot like where we we that same area where we did collect the
[1:07:59] light our data and so we seem to be reliably collecting or making estimates of this for a stand height using this
[1:08:05] method so you can do that on an image basis like you see right here you could do it
[1:08:12] at a county level many uh times from a forest resources point of view you need to make county
[1:08:19] level assessments on how the forest is changing changing and you can compare this against like the u.s forest service estimates the fia
[1:08:26] of what this average forest height is and that's what you see there on the left left compare that with the halos one mosaic
[1:08:32] that was derived here and you can see very good agreement between those two different data sets okay so now i want to talk a little bit
[1:08:43] more about how you could do this yourself and what are the resources that are available for you to do this for
[1:08:49] yourself yourself and i know that when i'm talking here it's important to take a break at some point you know
[1:08:56] think a little bit about where you're going and what we've talked about so far and so we can use this as a moment just
[1:09:02] to do that so think about how we started this discussion we talked about you know the four stand height
[1:09:09] estimation estimation method and how it fits in with everything that you've learned so far and so this requires some knowledge and
[1:09:17] ability to work with interferometrics are and so we spent some time doing that and and and we talked about how interferometrics
[1:09:25] are can create imagery that would be useful for you and that would be proportional to characteristics of the force that you
[1:09:33] might be interested in so here we are now at the point where maybe you're interested in what we're
[1:09:38] doing and want to see how you could implement this for yourself and then this is a an approach to
[1:09:44] addressing that topic and so the algorithm uh that we've talked about has already has been published you can
[1:09:53] see the references there on the bottom these have these data are also um available on github and it has its
[1:10:00] own little wiki that you can access and so there's the address for the github access for the forest san height
[1:10:09] algorithm it's written in python and you can there are instructions there on how to run it and it basically is
[1:10:16] following this little flow diagram that you see there on the right and what you might recognize there in the
[1:10:22] picture indeed is that three scene mosaic mosaic that i just showed you and indeed there is an example as part
[1:10:29] of this wiki and github account that you can run through to create that very same set of mosaic images of forest and
[1:10:39] height height yourself yourself to try out this algorithm and and something else i might want to say
[1:10:47] though is of course not everybody's interested just in these three scenes in um um central maine right and i and i was you
[1:10:55] know something else that you should also be able to do and you know when it comes time for you to
[1:11:00] explore on your own is learn how to get data and so um knowing how to find data in this case
[1:11:05] we're using the asf vertex website doing a you know the search portal there's the address there on the
[1:11:11] right right how to get there you know if you look at all possible in this case these are elos one scenes
[1:11:17] these are freely available you can download these today this is you know methods of identifying those scenes
[1:11:25] the best ones that work for this algorithm are what they call fine beam dual pole and so
[1:11:31] these elos one data which are freely available were there from 2006 through 2011 2011 and that's a good proxy for working with
[1:11:38] if you want have access to halos 2 data which is harder to get and then the upcoming nicer data nicer will be
[1:11:46] planned for launch in 2022. so this is a good data set for practicing these algorithms even though you're back
[1:11:52] casting by a decade or more at this point point it's a good way to practice this so that
[1:11:59] way when up to date information becomes available uh that you'll be able to make use of it in the future
[1:12:05] or also of course forests aren't changing that quickly everywhere and so you can also look at use it to estimate uh what the forests
[1:12:14] were like when these data were collected and so this is just sort of subsetting that data looking at one particular
[1:12:21] scene that i'm going to show here in just a second here again you can create interferograms you can
[1:12:26] estimate the the average correlation magnitude of that interferogram this is for this area in columbia and you can compare that to
[1:12:35] the correlation with icesat right that's a lidar that flew at the time that this data was collected and again you can see
[1:12:42] for regions where even this algorithm wasn't developed you get a pretty good agreement between forest height and this correlation
[1:12:49] magnitude that's available through the method that we're talking about here and just to show a close-up of that interferogram that you see there
[1:12:58] on the left there's that close-up in this colorful diagram on the bottom and up you know visually you can compare
[1:13:05] it to the optical image indeed you can see dark green regions and light green regions and basically that's an
[1:13:10] indicator where there's forest and non-forest and those correlate with each other other very well in this particular image
[1:13:19] oh and then just briefly i'm going to talk more about uh actually implementing these things in just a second but i you
[1:13:25] know uh so nicer is coming up and then uh uh jedi is actually already flying on a
[1:13:30] space station so there is lidar data that you can use for training the uh the uh radar data
[1:13:38] either looking backwards using elos 1 or aylos 2 and then looking forward using nysar so there's a
[1:13:45] lot of potential here for for doing four stand height estimates on a global basis using these kind of
[1:13:51] instruments instruments and the idea here is that you'd have these sort of sampling instruments of lidar that's what these yellow lines are
[1:13:59] meant to show kind of like these chicken scratches across the surface of the earth and then you have
[1:14:04] the mapped images from synthetic aperture radar and you could use the lidar to inform the radar to fill in the
[1:14:11] areas between the lidar tracks and that's what this image is showing okay okay you can see i'm running a little short
[1:14:20] on time but i'll try to keep this going so you can find data this is some view
[1:14:25] graphs that just show how to go about finding data and identifying it this now is going back to the main
[1:14:31] what kind of data that you want you want level 1.0 that's the raw unprocessed data data because you're going to be using
[1:14:37] something like ice for processing it you can identify uh region and main uh get all the images there
[1:14:48] in case we found uh i think it's 10 images there they are and so then those can be
[1:14:53] cross-correlated with one another to create these interferograms that you can use for forest and height estimation so
[1:15:01] so in order to create those interferograms you need to use this ice software or roypack we recommend using
[1:15:09] ice and one of the outputs of that if you learn how to use ice is called this topophase dot core geo so topo
[1:15:17] phase just means it's interferometric it's an interferogram dot core that's the correlation magnitude and geo means that it's projected onto
[1:15:25] the ground or in geographic coordinates so the first thing that you would need to do if you want to follow this route
[1:15:31] on on processing your own data your own synthetic after radar data and interferograms is to get a hold of this free copy of the ice
[1:15:40] software it has its own github site you can see the link there and the view graph graph and there's additional materials on ice
[1:15:47] that can be found below and this is not meant to be a tutorial on using insar and ice but those materials
[1:15:53] are also available to you so um one thing that you do need to know though when you're working with ice is
[1:16:01] how to tell it to process your specific data and there's instructions there for doing that i've included this also on
[1:16:07] this view graph so that way you could see what i did it just basically means editing a very simple text file my edits
[1:16:15] there are shown in blue and then once you have edited that text file you just type in the simple command
[1:16:20] there at the bottom in python scriptmap app.py that's the command command stripmap app.xml that's the text file
[1:16:30] and you type that in and you wait about an hour and it'll create that inner program for
[1:16:35] you that you can play with and look at and so this creates a number of different images that you can
[1:16:41] you know inspect you know there on the left is an image of the radar cross section the one in the middle is the
[1:16:50] correlation magnitude and again you can see things with low correlation magnitude magnitude are are along the riverbed or where there is
[1:16:59] forest and place with high correlation magnitude are these greenish areas and so that's going to be very useful for estimating
[1:17:06] force and height for this region and on the right we're not particularly interested in for this application is
[1:17:11] the topographic phase but that's also an output of this process and one thing i wanted to mention here is this there's
[1:17:18] this viewing tool that you can use that comes with ice if you download it to your own
[1:17:23] computer it's called mdx and so this is the command you can use for looking at that data
[1:17:30] so now to actually you know downloading and using uh just trying out the four stand height for this area in maine
[1:17:37] so you can just follow that github site you can clone or download the entire site onto your home computer
[1:17:43] it's not that much data not that much information and so it gives you some scripts some of them are in python 2
[1:17:51] or if you prefer python 3 it gives you those in a separate directory so those are basically the same scripts just
[1:17:56] updated to work with what version of python that you have and then the one that's gonna be most
[1:18:01] useful for you is this test example for the strip map app and um that provides the process data and then
[1:18:09] all you really have to do is just execute the four stand height algorithm and you can create your own estimates of
[1:18:15] forced animate just as you see there on the left hand side image so uh just to show you how to actually
[1:18:23] do that this is just the command and so um and this command is given both in this view graph and also on the
[1:18:30] github site it's just highlighted in blue there so you can sort of see it's a lengthy command but it's easy enough to
[1:18:38] cut and paste and then or you can put this into a file like a shell file and execute it that
[1:18:43] way way and so there are some inputs here this is describing what those inputs are and i won't go through that here you can
[1:18:49] read through that on your own this shows you these are just basically simple text files that you see there
[1:18:56] the name of the text file is in blue and what the contents are that's in black and then what you see here in the square
[1:19:02] box is me executing that test script and then the algorithm is running through and creating some intermediate outputs
[1:19:10] that you can watch go by as it's doing the processing and then it outputs data you can output
[1:19:18] data in one or all of these i typically just have produce output data in all of them
[1:19:23] so you can have it produce a kml a geotiff json matlab or a gif file and so those get put into all the little
[1:19:31] sub directories with the correct extensions anything with a tiff on it is basically a geotiff you can look at the size of the images
[1:19:38] that it produces right these are 4000 pixel images and then you can display those those images in qgis
[1:19:49] so let's have a quick look at what that is i've actually believe it or not just a few more view graphs to go here to
[1:19:53] show you guys but so um on the left is a qgis image so the the inset there is the elvis data so green
[1:20:02] is associated with heights so darker green is the taller trees white is basically no trees and blue is
[1:20:10] water okay or or roads and so that's the input data we combine that with a land use map in
[1:20:17] this case was derived from the national land cover data set that's what you see in black and white on the right
[1:20:23] for that same qgis image that i just overlaid right there and then we can take the four stand
[1:20:29] height image that was derived from those previous set of commands and include that and that's what this is and actually
[1:20:37] this is a combination of both the elvis data data and the four stand height estimates derived in this process
[1:20:45] and you can barely see it but anywhere there's blue that's basically the lidar data data where that sits and then everywhere else
[1:20:52] is the same scale for stand height estimates from the imsar correlation magnitude and so the fact that you can't see a nice dividing
[1:21:02] line between the elvis data and the four stand height is an indicator that this is you know making a good estimate for
[1:21:09] the region and um and so that this is something that you you've basically extended uh this lidar data to a 70 kilometer by
[1:21:18] 100 kilometer region which is quite useful useful and one thing i didn't really mention about the lidar data for that elvis for
[1:21:25] that and that previous videograph right this this elvis data that's shown here that took about eight hours on a small platform
[1:21:36] airplane to collect that amount of data and it takes a lot takes quite a bit longer to even process that data and
[1:21:42] actual heights and so it's a fairly expensive small scale process to do something like that whereas the this
[1:21:49] scene from elos this is collected in about about 15 seconds of satellite time so there's quite a large
[1:21:57] um um right what do you call it a benefit to using the um the satellite because of its ability to collect data
[1:22:06] over very large areas very quickly and the consistency of star data lends itself well to this kind of process
[1:22:14] so you can read more about this through these papers that are listed here i've there's i can try to make these
[1:22:23] available on a google drive should anybody have trouble accessing these particular papers but these are ways you could read about it
[1:22:31] and learn more about some of the background of what i talked about in addition to that um this
[1:22:39] process is discussed as part of the sar handbook that was put together by the um marshall space flight center in
[1:22:48] huntsville alabama and this is available online online there's the the link for doing that and so uh accessing this handbook is
[1:22:57] free and it's been downloaded quite a number of times uh globally and you are welcome to do so
[1:23:03] if you haven't done so already and it has more than just the forest and height algorithm discussed in it it talks about
[1:23:10] mangrove mapping biomass mapping and and other things and disturbance mapping and and just a little side note uh
[1:23:22] people like visual ways of learning and so actually marshall has also made some nice videos about how synthetic aperture
[1:23:30] radar works should you be interested you can google those and download them as well well oh and then one other thing which is
[1:23:37] just a little funny aside just a few months ago when it was still possible and was still common to fly in
[1:23:44] airplanes i was flying to the tokyo tokyo for a meeting as part of the japanese aerospace exploration agency
[1:23:54] elos elos meeting that they have on a yearly basis and sitting as part of the online entertainment they
[1:24:01] actually had uh something about elos the instrument itself and this is something you could watch while you were on on the airplane
[1:24:09] and i just thought well you've really made it when you found yourself as part of the online entertainment on an
[1:24:15] airplane so the fact that people are talking about tsar now and being able to watch this kind of
[1:24:21] thing on an airplane on an intercontinental flight is really says something about the maturity of the technology so in summary we've talked
[1:24:31] about different levels of sar data usage we've talked about for stand height how it requires interferometrics are which can be
[1:24:38] challenging it might be a way forward if you are interested in developing your skills in this area in the future
[1:24:44] that works best with l-band cross-pull data data with small spatial baselines the part i'd emphasize here though is
[1:24:51] the l-band and the cross-pole especially the l-band it works best with longer wavelengths as opposed to shorter
[1:24:57] wavelengths that you associate with sentinel one and the data can be found at nasa's alaska satellite facilities dac you can
[1:25:04] download that data and process it yourself yourself i showed results for the umass for the us state of maine
[1:25:11] and then we have height estimation errors rmse less than four meters over resolutions on the order of 250
[1:25:17] meters meters we can create very large scale mosaics using this using just a small bit of lidar training data
[1:25:25] so so we can improve these things and the tools are part of the github for doing mosaicing for making
[1:25:34] use of small repeat cycles and using large amounts of lidar samples to help inform the algorithm for
[1:25:43] doing the mapping of forest and height so when you're working with this it's important though to be aware of the
[1:25:48] weather effects and climate effects on the nerfometric decoration signature so when you create an interferogram you should use a critical eye to look at it
[1:25:58] to see if there's even information there that looks like you might be able to make use of it for estimating force and
[1:26:04] height and once you assess that then you apply the four stand height algorithm to make those estimates as i've shown
[1:26:11] you here so the ice 2 and fsh software along with the fsh demo data can be downloaded from
[1:26:18] github today and you've seen the locations for doing that and we also went through a demo for how to process
[1:26:24] data into estimates of forest and height so so as i've mentioned before please enter any questions you have in the chat box
[1:26:32] we'll try to answer those as best as we can and uh and in summary i'd like to
[1:26:38] say say obrigado a felicidades of oseis and until we meet again i want to thank you for paying attention
[1:26:49] best wishes hi everyone thanks again for joining us for our series we are now moving over to the question
[1:27:02] and answer session and i will allow our guest speaker paul cicada to answer some of these before we get into the question and
[1:27:13] answer session a few items to note we do have a homework that is now available on the
[1:27:22] course website and you can click on that link and complete the homework via google forms in order to receive a certificate of
[1:27:31] completion completion you need to complete the homework by in two weeks by june 4th and have have
[1:27:42] attended all of our four webinar series and again i just want to thank you all for being here we will get through
[1:27:51] as many questions as we can until the end of the session if you do not get your question answered you can also
[1:28:01] email myself amber mccollum or my colleagues erica podest and juan torres perez at our email addresses listed on
[1:28:10] the presentation again you can also acquire all of the presentation materials and watch past recordings via the course website
[1:28:20] so now i will hand it over to our guest speaker speaker to go through some of these questions
[1:28:28] so paul if you could just read the question and then read your answer that would be great
[1:28:37] oh hello everybody uh thank you and um hope everybody enjoyed that last uh that talk um so yeah just to go over the
[1:28:47] um the questions and answers that were asked and i guess i'll just sort of verbally go through these and i'll uh
[1:28:53] read them off so um and if i'm not sure if somebody wants to add feedback to my answers or not and
[1:29:00] how that would work but for now we'll just do it this way but so that you know given so the first
[1:29:05] question is given that the ground surface is continually changing in hilly or mountainous regions will extracting the tree height in those regions give
[1:29:12] any kind of an error and so the answer is well we haven't really done a full analysis on mountainous terrain yet
[1:29:19] however the algorithm doesn't really depend on terrain or topography for estimating the forest height is actually using the
[1:29:26] motion of the trees for estimating the forest height and so so much as that's not changing that is the topography from
[1:29:33] uh data collection to data collection um it should be more robust to those kind of uh uh uh
[1:29:41] uh that kind of an error that we associate with things like glide our collections uh uh for estimating forest height
[1:29:49] so that's question number one and i'll move on to question number two so um cancer imagery be used to monitor those
[1:30:00] forest areas which are damaged by insects insects um so people do use sour imagery uh and insar for looking at forest damaged
[1:30:09] by insects um so those applications are still experimental you can look those up they're sort of research oriented uh
[1:30:16] that really wasn't the topic of today's uh discussion right we're talking about estimating for a stand height not really
[1:30:23] looking at uh insect disturbance so then question three uh when is nicer going to be launched when will the data will the data be
[1:30:33] freely available so nysar will be launched in mid-delayed 2022. one of the uncertainty is what that date
[1:30:38] has to do with the effects of co of the cobit 19 shutdown which is still ongoing so i believe it or not this has actually
[1:30:45] disturbed the sort of delivery of physical hardware which is happening right now the s-band data the s-band radar system
[1:30:52] is supposed to be delivered to jpl back in april mid-april and i don't think that that's happened yet because
[1:30:59] of the shutdown so there are some uncertainties now on the launch date but um should everything have gone as
[1:31:06] planned it would have been mid to late 2022 and i would say still likely before the end of 2022 when it will launch and
[1:31:13] yes the data will be freely available and so now is a good time to actually learn how to use freely available data
[1:31:21] and one way to do that is by exploring the asf vertex dac dac d-a-a-c okay the fourth question
[1:31:34] how is uh c-band uh for crop monitoring especially for how accurate is c-band for crop monitoring for especially for indian sub content so
[1:31:45] really that depends on what you mean by crop monitoring you know people want to do yield estimation
[1:31:50] um uh is the crop active or not uh crop classification so sentinel one c-band data can be downloaded now
[1:31:59] from the east from esa and also from the alaska satellite facility uh you can get some images today for the
[1:32:06] area that you are interested in uh that's that's so um but that's really not the topic of
[1:32:11] today's talk but those possibilities are there and people certainly look at exactly that using c-band data so question five
[1:32:22] what does modes of acquisition mean for instance when you say cinahl has four modes of acquisition what does that mean
[1:32:29] does it mean the platform has four types of sensors or is it something else and um this is i'm sort of wrote responses
[1:32:36] to these questions in real time so i don't recall saying anything about four modes of acquisition maybe i misspoke um
[1:32:43] or didn't hear correctly either way um nystar has two basically independent synthetic after radars on board one is
[1:32:51] at l band one is at s-band s-band is not collected globally i tend to spend more time talking about l-band for that
[1:32:59] region reason all the nasa requirements are based on the l-band data that has to do with the way that nasa
[1:33:05] operates for requirements checking so anyways the the background land data at l band will be mostly dual
[1:33:12] polarized hh and hv and so those observing modes could be used for doing algorithm development development question number six
[1:33:24] is it possible to distinguish between deciduous and coniferous force on radar images and i'd say not really i mean
[1:33:31] actually actually if if you look at the data closely it does turn out that the radar cross-section differs by about a db or
[1:33:38] maybe half a db between those two types of force and so um but there are many other things that vary at larger scales
[1:33:46] than that and so um it's hard to make an algorithm to sort of definitively tell the difference
[1:33:51] between those two different forest types and another way to think of it of course is that right radar is sensitive to
[1:33:58] mostly structure and and so much as uh structure is different between deciduous and coniferous forests you might expect us there will be some
[1:34:06] detectability there but you know that kind of detection really requires multiple modes of observation maybe a combination of
[1:34:14] optical and radar data seven seven please clarify did you say this technology could determine stem volume or stem area index or does it require
[1:34:25] independent data say from lidar to model and calibrate the data so hopefully this was answered in the
[1:34:31] later parts of the the talk um but first of all it doesn't actually determine stem volume uh directly it's
[1:34:37] really just estimating a form of forced height height but you can imagine if you're looking at an index of some sort like stem area
[1:34:45] index index that would be related somehow to height or the maturity of a forest you could create a relationship like an empirical
[1:34:53] relationship that would relate the two regarding independent data yes the fsh does require some independent height data from
[1:35:03] somewhere just as you saw in the example it doesn't have to be ubiquitous it could be in one area and you can
[1:35:08] propagate the results outward from that one area where you had that data availability and these days because of
[1:35:15] things like jedi and ice at one and two and airborne lidar there's actually quite a number of
[1:35:22] resources for getting ancillary lidar data that could help inform the fsh algorithm that you heard about today
[1:35:31] okay question number eight i think what is the smallest area of forest disturbance that could be obtained from current sar data and the
[1:35:42] future future nicer nicer also the single look complex that means the highest resolution available from nysar nysar is going to be mostly 8 meters by 12
[1:35:52] meters this can depend on whether you're working in radar coordinates or geographic geographic coordinates um and if it's geographic
[1:35:59] coordinates you're actually projecting that sort of more uniform sample spacing onto the ground and so it depends on
[1:36:05] what the incidence angle is so it can vary across the swath too so normally when working in geographic coordinates
[1:36:12] the the the nicer mission will actually be delivering delivering uh 20 meter pixels for 20 megahertz uh
[1:36:20] sampling mode of nicer which is the standard standard for most of the background land except for the continental united states and
[1:36:26] some other places at that resolution though there are about three independent looks per resolution element and so speckle
[1:36:32] depending on your algorithm speckle could be an issue but given that um you will be able to
[1:36:38] see disturbance even at that scale for the mission requirements which is sort of what nasa's promising to deliver
[1:36:44] and right now it's only they're delivering an algorithm not sort of global maps but that's being developed
[1:36:49] and tested at 100 meter resolutions so there's multiple elements that go into that right so all those higher
[1:36:56] resolution resolution observations from nicer are informing that 100 meter disturbance metric and you also might want to think what is meant by
[1:37:04] disturbance so in this case for a nice our disturbance is defined as a 50 change in the vegetation canopy
[1:37:12] fraction or vcf and the 50 changes in 50 of its current value it's 50 of 100 so if it's 90 vcf today and it's
[1:37:23] 40 vcf tomorrow then that is what nysar would be able is signing up to be able to detect
[1:37:31] if it's um but that doesn't mean if it's forty percent today and twenty percent tomorrow then nicer is not saying that
[1:37:37] they can reliably determine that number uh given that that doesn't mean that you couldn't it's just that those
[1:37:45] are the requirements for a nice are to be successful there's many algorithms out there that people have
[1:37:53] either already developed or have yet to develop and i'm sure there will be useful useful uh ways of
[1:38:00] of combining data or using nysar data for achieving some of these more higher demands on on the observations
[1:38:11] so that sorry for that being a little bit on the wordy side but that's sort of my take on the issue
[1:38:17] okay um so that's question eight so we're going on to question nine so is it not currently feasible to
[1:38:24] calculate canopy height with sentinel one c bandsaw do we need to wait for l band so this is a very good question so
[1:38:30] c bansar has too much temporal decoration it has to do with small motions of leaves would cause large changes in the
[1:38:39] interferometric phase and cause lots of temporal decoration and temporal decoration is how the fsh algorithm works works so you can do standard interferometry
[1:38:48] with c band um but because the temporal decoration over force is higher to estimate the topographic height over force usually
[1:38:57] doesn't work very well and so uh one way you can get around that is to use a tandem set of
[1:39:02] satellites so tandem x which is an x-band x-band a pair of satellites formed by the german space agency or the dlr
[1:39:10] you can't get good interferograms over forested uh regions um uh given that uh uh so so higher frequencies and doing
[1:39:20] temporal correlation doesn't really work well over forest they tend to create too much decoration and decoration ultimately is a measure of loss of
[1:39:28] information so that's sort of not as useful at those higher frequencies or shorter wavelengths at l band though there is data available
[1:39:37] from halos one you can get that today just like shown in the demonstration some people have access to halos too so
[1:39:43] you can get that data as well and so there's been instructions in the discussion on how to get that so yes
[1:39:50] it's historical data but now is a good time if you're interested in these algorithms to play with them develop your own and
[1:39:57] develop your own workflow and then when nicer launches you'll be able to make use of that instrument uh
[1:40:03] when that data becomes available and of course there are there are uses of of back casting right i mean just because
[1:40:11] it doesn't not everything has to be current okay so let's go on to the next one um
[1:40:20] um oh and by the way not everything has to be current for force right because the force are mostly stable globally right i
[1:40:26] mean there are certain places where that's changing a lot but uh uh usually we know where those locations
[1:40:32] are and just knowing what those changes are could be a useful knowledge all by itself itself so back casting can be quite useful
[1:40:40] question 10 is the coherence just the magnitude magnitude just the amplitude of one slc multiplied with the amplitude of another slc so
[1:40:49] that's that's a good question that's close to a a correct question in terms of the supposition by the person asking the
[1:40:56] question question um uh what i'd have to say though is actually the formula for that can be readily
[1:41:03] looked up online by the way and there's journal papers including some by myself that show what that is but basically you
[1:41:08] have to divide by the geometric average of the powers of the two scenes of the pixel by pixels or the two scenes
[1:41:15] also if you do a coherence estimate of a single look image it turns out that that that average even
[1:41:21] when you're dividing by the power is equal to a value of one always it's identically equal to one and you could
[1:41:27] do a little bit of math to prove that to yourself the only way to really get a
[1:41:31] coherence or correlation magnitude that is useful for this application and other applications like it you have to do a
[1:41:38] multi-look averaging usually you do four to 25 slc pixels and that gives you a more useful measure
[1:41:44] of coherence and that coherence is really measuring the consistency uh between those uh different uh pixels in this case you'd be measuring
[1:41:53] the consistency of those pixels as a function of time and so that's the temporality correlation measure that you'd be
[1:42:00] getting okay so question 11 can you please clarify what is meant by force moving is that tree growth or
[1:42:10] something else so another very good question no it is not meant to be the growing of the
[1:42:14] forest uh that happens over much longer time scales we're not talking about centimeter kind of changes in the
[1:42:21] the forest height uh as is being the driver for this algorithm what is meant is by moving things like even gentle
[1:42:29] breezes winds changes in the tree water content you know whether that happens between between and also things like weather
[1:42:37] w-e-a-t-h-e-r that happens between the observations observations so that is you know you can go out go for a walk in the forest today and go
[1:42:44] out tomorrow it might look like the same forest of course there's subtle changes that happen right the the leaves have
[1:42:49] moved a tiny bit it's enough to cause the interferometric observations to decorate by a small amount that's the temporal decoration
[1:42:58] that this algorithm is sensitive to and so um i guess that's that's basically my answer to this question
[1:43:08] so uh question 12 what is the basic difference between lidar data and sar data are these oh i must have missed
[1:43:14] this one when i was going through these are these nicer data available for urban areas where there are some wetland and
[1:43:19] vegetation what is the regulation on these images well of course the regulation on those images varies by who
[1:43:25] collected it if it's nasa data and i think esa data those datas are freely available available lidar data
[1:43:33] depending on who collected it if it was on an airborne instrument or paid for the airborne instrument would be um
[1:43:40] uh uh the one would dictate how it gets used uh these days you know there's certainly is icesat-2 that is flying now there's
[1:43:48] ice at one and there's jedi gedi which is on the uh this the international space space what is that thing called international
[1:43:58] space station iss so um those data are all freely available and so those are obvious resources to use and if you have special
[1:44:08] access to other lidar resources those are certainly an option okay okay so moving right along uh question 13
[1:44:22] and by the way um yeah i can go on as long as it takes to finish these
[1:44:26] questions and also just i'm just reading the chat window here from the organizers and if i'm talking too quickly or too
[1:44:32] long then please just write something there and i'll pay attention okay so um question 13. uh where trees are are tall
[1:44:42] with canopy interferometry takes into account multiple heights which i believe might not oops i'm sorry i misread that
[1:44:48] oh yeah that's the question uh which i believe might not be available through optical sensors therefore how reliable is the dm which
[1:44:55] is now readily available derived from optical sensors or narrow range so dms can have uh uh variable qualities and also what is
[1:45:05] meant by dm can vary of um uh uh uh depending on well not i think there's formal definitions for that right
[1:45:12] there's things like digital train model there's digital elevation model to be honest i get confused which one means
[1:45:18] what you know there's the bald earth uh topography and then there's the tree canopy the the the topography that takes
[1:45:25] into account tree canopies and what the difference of those two of course being the the forest height which is what
[1:45:31] we're interested in so some care has to be taken as to what the source the data is and what was the
[1:45:36] definition of those things and um but so the the sort of gold standard though for dems i would say is
[1:45:43] is nader looking lidars where when you can detect the ground and so um that and of course uh doing
[1:45:50] ground surveys which can be extremely expensive and uh and maybe unreliable depending on the age of the the collection and the
[1:45:57] techniques used okay we'll go on to question 14. okay so we're going to go on for another
[1:46:07] 20 minutes or so and then we'll we'll see how we do here let's see question 14. if the time frame is short enough can
[1:46:15] you mix l-band and c-band and x-band since c-band could provide top of canopy angled pen and l-band for the elevation
[1:46:24] of the ground i mean yes you can certainly my answer is you can certainly can combine those um
[1:46:30] not through this algorithm so much right this algorithm is using tree motion to and then a an empirical relationship to
[1:46:38] estimate the force and height so what's really being referred to here is like using interferometric sar and using the
[1:46:45] different topographies measured at different frequencies for measuring different heights of the forest and you could do that
[1:46:52] um and yeah and and so you know what the penetration depth is for those um single pass in sar
[1:46:59] observations or topographic measures um um could be would be useful um the one thing that i would like to
[1:47:07] emphasize here is though you cannot form an interferogram between an l-band observation observation and a c-band observation for instance
[1:47:14] you you can't cross over frequencies and it's because of the nature of how phase is defined and how you're doing
[1:47:21] uh interferometry okay question 15. do you have an opinion on pam tropical forest type product the accuracy utility produced by woods
[1:47:33] hole for 2007 and are you aware of any similar products or recent updates so i'm not sure if this is the one that
[1:47:39] the the questioner is referring to by walker at l if so yeah i think it's reasonable enough if i remember correctly it
[1:47:46] depends on icesat data um uh you know you do have some of these problems with icesat that it had a 70
[1:47:52] meter spot size so if there's topography within that 70 meters that would be artificially interpreted as a
[1:47:59] forest height unless you had a way to correct for that so um jedi though is a 25 meter spot size i think and so um
[1:48:08] probably much more useful instrument for that application especially because jedi is indeed flying mostly over the the
[1:48:15] tropical belt because of the orbit of the international space station how sensitive are nice are or insert estimates of forced height to
[1:48:26] substantial changes in dielectric properties between time one and two so substantial is a key word here you know
[1:48:33] i mean if the uh if it's substantial enough to cause a lot of decoration then yeah i guess i
[1:48:37] would you call that substantial you know and one way to think of that is if it's changes in soil moisture for bare
[1:48:43] surfaces then that would that would cause a decoration between the observations and so yes that could confuse this algorithm
[1:48:52] but if it's soil moisture beneath the forest floor right the majority of the radar cross section is coming from
[1:48:58] the canopy itself the upper parts of the canopy not so much from the forest floor so those kind of changes in the
[1:49:04] dielectric of the soil moisture this would be less sensitive to and would be able to withstand some
[1:49:10] amount of change of soil moisture beneath the forest canopy in that situation okay uh question number 17 could you
[1:49:20] please explain why are the two scenes called master and slave so the master scene is what's assumed
[1:49:26] geometrically correct the slave image so anytime you have uh different synthetic after radar observations and even on sometimes the same platform
[1:49:37] there's a step of the interferogram processing that is required to co-register the two images to a sub-pixel
[1:49:46] sub-pixel resolution resolution and there's ways you can do that through a cross-correlation measure measure and doing adjustments using a polynomial
[1:49:54] and that's actually what's regularly done in interferometric processing so the master slave is what is assumed to be geometrically perfect
[1:50:03] right so the one that doesn't have to change and the slave image is warped by even sometimes very small amounts to be
[1:50:10] as co-registered as best as possible to the master image okay we'll go to question 18. did you use the elvis l2 elevation of
[1:50:23] high products to calculate the correlation magnitude or did extra processing from l1b data so i think what
[1:50:29] this is referring to are the different output product uh processing levels for elvis but i think i'm not quite sure because
[1:50:37] it's been a while since actually i made those that that example that you saw earlier um but i'm assuming that that's
[1:50:43] what that means and so actually i don't really remember but anything that sort of measures forest height that you have some
[1:50:48] confidence in uh that can that's that's what can be used and um and so again i don't quite remember where that data how
[1:50:56] i did that i used i basically use matlab to process the all this data to come up
[1:51:00] with forest height uh but anyways um one thing you might notice is that sometimes the higher levels of processing mean that more
[1:51:08] errors have been taken out and uh but one thing to note is that this is a right where we're finding a
[1:51:13] best fit between the temporal decoration and the tree height measured by elvis so even if there are errors
[1:51:22] in the all this data processing on a pixel by pixel basis so long as they're random errors
[1:51:27] it shouldn't affect the results of the fsh algorithm as long as you're getting a fundamental relationship between
[1:51:35] the lighter observations and the actual forest height and then therefore you can create similar relationship between the
[1:51:40] temporal decoration that's used by fsh and the lidar data okay okay let's go on to um uh question 19. so the question is about
[1:51:55] nbcd um and the difference between alice and nbcd yeah the and so somebody noticed that there's some stripes in the halos
[1:52:04] process data and those stripes have to do with discontinuities between the observations the different time periods that were collected and yet those are
[1:52:14] if usually if they're rectangular in nature right they're associated with the um um the scene geometry not what's actually
[1:52:20] going on on the ground and so that has to do with with the with slight weather variations that
[1:52:27] happen between the different interferograms that you're trying to mosaic together and so there will always be some degree of imperfection
[1:52:34] and your eye is actually much much better at picking up imperfections on any computer artificial artificial intelligence algorithm could replicate
[1:52:45] or correct for and so those tend to be fairly small in magnitude but they do exist and for that reason you
[1:52:53] may want to look critically at the inputs that you're using for the fsh algorithm so in other words if you have
[1:53:00] let's say five synthetic after radar observations observations from halos you can create interferograms between between any pair of those that from those five
[1:53:10] and so you'll have a whole host of interferograms to choose from and so you're going to want to choose
[1:53:14] the inner programs that first of all have the highest coherence because that'll give you the most information
[1:53:19] for estimating fsh and that's what some of those scatter diagrams that i showed as part of the talk showed and also
[1:53:27] you'll want to choose the interferograms that have the sort of least spatial variation variation of uh in the coherence that might be due
[1:53:35] to weather and so sometimes i've noticed when creating interferograms you'll get these bands of decoration that are obviously not due to
[1:53:44] something that's happening on the ground but probably due to some weather event that might have been actively occurring
[1:53:48] when one of the data sets from the tsar were collected and so even though that might have a good co
[1:53:54] correlation magnitude across the image you wouldn't use that because it has that odd weather feature uh appearing in
[1:54:01] the data so you would just choose one of the other pairs uh of of images for including in your fsh
[1:54:09] estimate okay question 20. if i want to obtain shrubland is it possible to obtain it using this method and eliminate forest
[1:54:18] land using a height threshold so you could try that but some care should be taken selecting the data the reason
[1:54:24] being that soils of shrub lands are exposed and so variations in the soil moisture could create temporal
[1:54:30] decoration and that could appear as variations in the forest height so what should be done in those cases
[1:54:35] that you should select scenes that are collected uh preferably during the dry season season and although i don't have good ground
[1:54:42] validation for the region that was shown there for columbia you can see there if you compare the
[1:54:46] optical image with the fsh estimate that was made for that region there's a pretty good relationship uh
[1:54:54] between where you can see clearly or there's force and where there's shrub lands lands uh both optically and within the
[1:55:00] correlation magnitude so i'd say yes i i it hasn't been properly tested to answer the the to give a real clear answer to this
[1:55:09] question however and that could be an area of continued research research question 21 uh trees do not have indeterminate
[1:55:20] growth so they do not grow on size forever um uh so of course and uh however a forced
[1:55:26] campaign will increase in elevation every year until sometime when the scenes scenes when the data slows and stops it so has anyone looked
[1:55:36] at the animal change in canopy elevation's way to calibrate the age of the stand so actually i think that people
[1:55:42] certainly do do that and that has a lot to do with land use history and and um
[1:55:48] and that's actually a very good way to understand things like biodiversity and what a forest has gone through in its
[1:55:54] life lifetime especially if you look at the geospatial so some areas of forest might have undergone different histories right next to other
[1:56:05] areas of forest that have gone through a not quite the same history so that that can be a very
[1:56:11] interesting interesting thing to look at um from an ecological point of view so um let me see if i want to see
[1:56:19] anything else here um um yeah i guess that's all i want to say right now but that that's still a very useful
[1:56:28] thing to look into okay question 22 a strong defoliation event between two dates from nsar can be
[1:56:36] a problem when estimating three heights um well actually maybe not and i've this is comes from you know i if if somebody had asked me
[1:56:46] before i had created these algorithms and done some of my analyses i would have said sure losing all the leaves in
[1:56:51] the forest you would expect it to change the radar the interferometric the correlation quite a bit although some of
[1:56:58] what but one reason i'm hesitating here and agreeing with the questioner is because some of our best interferograms
[1:57:05] for estimating fsh were collected one was one of the scenes was collected in july and the other one in october and so
[1:57:11] october in this in this part of the country where maine is is when all the leaves are falling off
[1:57:16] the tree and at the very least they're changing color so they're clearly going through some strong uh variation in
[1:57:23] their uh physical properties yeah that's what gave us some of the best estimates of four stand height
[1:57:30] so i think the reason so i i've let the data dictate to me what makes sense and
[1:57:35] what doesn't in other words how well the fsh algorithm works and how well the the results are consistent with what we know
[1:57:41] is happening on the ground and so um at any rate uh i would guess then based on my
[1:57:49] experience with this algorithm my experience with interferometry over forest is that losing all the leaves on the tree actually has less of an effect
[1:57:57] than you might imagine and if if that's true and i think it's true uh the reason could be that
[1:58:03] we're more sensitive to the woody structures the permanent woody structures than than the tenuous leaves that grow and
[1:58:11] change okay question 23 our current publicly available radar image is good enough to monitor vegetation interfering with high tension
[1:58:23] electric transmission lines i so i know that this is sort of a strong need on a global basis i think that's
[1:58:28] unlikely this is probably not the best method for doing that this is a good way to estimate you know how tall uh
[1:58:35] force are on sort of a hectare or a multi-hectare you know it's four to six hectare level basis
[1:58:41] so if you want to see places where you might want to more closely investigate power lines sure you could use this
[1:58:45] method for doing that these days things like drones i think are sort of much more viable technology
[1:58:51] for addressing that problem okay question 24 how do these sorts of height estimations work in a very
[1:59:01] pronounced relief regions so i think i answered that back in question number one i'll just leave that alone
[1:59:07] and we'll try to be a little quicker so we can keep the time reasonable reasonable so so for areas that um
[1:59:17] for errors that have no lidar data how can estimate error be reduced oh yes so um well so uh the question is so places you
[1:59:27] don't have lidar data you might be referring to places like where you don't have airborne lidar data
[1:59:32] so if you're in the i don't remember the full extent of jedi data collections but these days
[1:59:39] because of jedi that's gedi lidar data is available somewhere basically globally everywhere so um at least within some sort of latitudinal
[1:59:49] band limit uh so the higher latitudes because of the orbit of this international space station that's not true but the lower
[1:59:56] latitudes certainly so that's number one number two if you really are missing lidar data another option is to
[2:00:06] go out there and by hand measure uh forest height so you know many places the national forest service or like the
[2:00:13] forest survey of india regularly collects collects uh forest height over regions distributed nationally and so that data
[2:00:20] could be used for informing the algorithm so you only need a few points and they don't have to
[2:00:25] be continuous like the lidar scene that i showed there you just need something that sort of is as
[2:00:32] overlaps with the um with the availability of radar data and um let me see if i want to say
[2:00:40] something else there there was something else i was trying to think of uh but okay now i can't remember right at
[2:00:50] the moment but there are lots of inputs oh yeah there is there is one other method which i've played with at times
[2:00:55] and i'll mention this here because another way to think of it too though is um you can use actually an
[2:01:00] optical image and so if you really are missing lidar data and i i do like using lidar data i think it's critical tool on
[2:01:08] this but let's just say you really want to try this out and you absolutely can't get any lidar data
[2:01:12] given the other methods i just mentioned or you don't have access to the forest survey first force service surveys
[2:01:19] within your country so one other thing you could do is take an optical image and try to figure out where there's
[2:01:25] forest where there's not forests and and i mean consistent forests and so you can actually create your own
[2:01:33] sort of back of the envelope height map of your local region just by doing a by hand classification and wherever you see
[2:01:40] forests usually what happens is uh forests tend to mature and and they have all the same height so
[2:01:47] you could sort of estimate it that way and create basically a fake for stand height map to use
[2:01:54] alongside with the radar data collections for your immediate area and then use that as input data for expanding
[2:02:03] your simple hand drawn algorithm to the large area using the um the the the interferograms and basically what it's saying is that
[2:02:12] you know like i know around where i live if there's a forest i can tell you without even leaving my room how tall
[2:02:17] the trees are they'll say that they're 20 meters or maybe i'll say they're 25 meters and i'll be accurate to within
[2:02:23] you know four or five meters without ever leaving my house and so um you could sort of do the same thing and yes
[2:02:29] it's not sound accurate but it's you know given no other information it might be accurate enough for your application
[2:02:40] okay that was a little bit longer of an answer than i was intending 26 uh is there a rule of thumb for how
[2:02:47] incoherent an interferogame can be before it is not useful for an fsh algorithm this is a great question so uh
[2:02:54] i'll give you my quick rule of thumb i would say things with correlations below 0.4 are not very useful that doesn't
[2:03:00] mean that they're entirely unuseful but that's sort of when you're hitting the lower edge if you're getting correlation magnitudes
[2:03:08] of 0.2 and 0.3 i would say that's pretty close to being useless useless given that i'll give you a counter
[2:03:15] argument which is something you can always do is you can give up resolution for improving uh uh the the correlation magnitude or the
[2:03:27] accuracy so um so if if if you know um the the i say i'm not sure how to explain that
[2:03:35] further than that except that that so if you really are stuck with low correlation another option is to reduce the resolution i
[2:03:43] think your correlation magnitude average would grow go up in that situation and so you could still do
[2:03:49] something but at a lower resolution than was presented today but the take-home message might be 0.2.3 is useless 0.4 is not desired 0.5 and
[2:04:00] higher is is better okay okay can this technique be used on agriculture shorter planting areas would seaban be better for use during this
[2:04:13] application application so conceptually yes the answer it would be except that for agricultural regions those are actively managed lands right so the nice
[2:04:23] thing about forests is that they're mostly stable i can go visit one today and go out there next week and maybe a
[2:04:29] month from now it's basically the same forest at all times so that certainly isn't true for agricultural regions and so for that
[2:04:37] reason reason using temporal decoration as an indicator of height um would not work well and the height accuracy of what uh was
[2:04:47] shown for the forestand height is already on the order of 3 to four meters for what was shown it was shown in one
[2:04:54] of those plots where i showed the rmse so three or four meters that's enormous from an agricultural point of view so um
[2:05:02] and even interferometrically for measuring interferometric uh topography single pass instruments uh you might be have difficulty measuring uh heights
[2:05:13] accurately to better than a meter which is would be important for agricultural regions unless you're doing airborne so that
[2:05:21] things change when you're airborne because you have more fast temporal revisits okay i'm going to go a little bit
[2:05:32] further so question 28 is it possible to use rss approaches to estimate four stand height for linear plantings that
[2:05:39] have a width of 15 to 25 meters for example shelter belts uh for estimating ground field i don't
[2:05:46] know what rss stands for with some squares i really don't is that like a mean is that just curve fitting
[2:05:52] um i think so and viewing geometry is a bit of a headache for satellites are right because you're you're always looking in
[2:06:01] the slant range and so it's not really vertical height it's it's this it's an arc that intersects the forest
[2:06:09] so i'm not sure that what was intended by this question this would be a good application for what you've witnessed
[2:06:15] today question 29 it seems that most analyses use image pairs is there a reason not to use multiple
[2:06:24] image groups many images and look at variants throughout time now you could certainly do that and people do do that um for the very
[2:06:32] simplistic algorithm here you're just trying to estimate one number which is four stand height you could imagine
[2:06:38] but even that's an error right that's not a perfect measure it's it's a rough relationship between the observed temporal decoration and the
[2:06:47] lidar measured height and even the lidar measured height is not a perfect measure of tree height right is it the very last
[2:06:54] leaf on a tree is it somewhere in the first meter at the top of the tree you know you can come up with questions
[2:06:59] like that and um and so even this is a loose relationship all by itself so if you had multiple observations that
[2:07:08] you trusted for forest and height rather than looking at how that number changed as a function of time you might consider
[2:07:15] averaging those numbers together to improve your accuracy that would be one option option another option would be is even though
[2:07:23] the accuracy of four stand height between um is on the order of three to four meters at least that was presented
[2:07:29] today today if you did want to look at time series you might notice that in some places
[2:07:35] there are very large changes in the forest stand height so if somebody's been clear-cutting trees and that would show up well using
[2:07:42] this fsh algorithm okay we'll go do five more minutes of questions here let's see i'll just do
[2:07:54] question number 30. our current publicly available radar images good enough to monitor vegetation interfering with high tension transmission lines so
[2:08:03] let's just say no is it possible to use similar algorithm to measure building height uh not this
[2:08:09] algorithm because i for for the life of me i i i i hope to lord above that buildings
[2:08:15] don't get up and walk around and so um so and this is measuring a temporal decoration so uh so not this algorithm
[2:08:23] per se but people use interferometry for measuring heights of things all the time and so since buildings don't move you
[2:08:29] can use topographic interferometry so still repeat pass interferometry but rather than relying on the magnitude you would use the phase of the signal signal
[2:08:39] and measure the topography directly and in fact most applications of interferometry are used exactly for that question 32
[2:08:53] could you explain the concept of moving forward since relationship to estimating force and height i think i've already
[2:08:58] done that basically it's motion small motion of things right and that's causing some form of decoration decoration uh and i guess it's an open question to
[2:09:09] what is that actual motion is but the the fundamental concept that fsh is using here is that
[2:09:16] the taller the tree is the more motion that you will see and this is exploiting that and by the way one of those papers that
[2:09:24] is um cited in the discussion goes into the theoretical uh uh uh addresses the the theoretical aspects
[2:09:34] of the question being asked here and you could look that up could you please explain why mosaic
[2:09:40] increase the accuracy of forest height estimation whether the mosaic is made with images taken at different times
[2:09:46] this is a great question so it does and also does that influence the interferogram so yes it definitely
[2:09:51] influences the interferogram and so each one of the images of force fan height or let's call it the
[2:09:56] correlation magnitude is dependent on the temporal decoration and you can imagine from year to year even if it's the same season
[2:10:05] right the temporal decoration collected between between passes of the satellite would be different between those so the relationship between the
[2:10:14] correlation magnitude and the four stand height will be different because the measures of correlation all by themselves are different because the
[2:10:21] temporal decoration is different so that that's potentially a problem however by mosaic images and if you if you have one image where
[2:10:31] you knew what the height was like from a lidar lidar then you could correct for that empirical connection between the
[2:10:39] temporal decoration and the observed height height using that sort of known lidar heights right that should make
[2:10:47] sense based on what you've heard today so now you have an interferometric pair where you don't have lidar heights
[2:10:52] available but it's adjacent to one scene where you did or maybe multiple scenes away away right so what you can do is you can use
[2:11:00] the intervening scenes between where you had the lidar height and where you don't you can use those overlap regions
[2:11:07] as let's call it like a form of lidar data right as if you had as if that data
[2:11:14] from the the scene that had lidar was perfectly true everywhere then and then you could use those overlap regions to
[2:11:20] inform inform the scene where you didn't have lidar data as if you had lidar data for that
[2:11:25] overlap region and thereby propagate those co those those results that you got from the scene where you did have lidar data to
[2:11:33] the outer regions and so one way to do that is you could literally just propagate it do you know
[2:11:39] just basically do a sequence of corrections as you get closer and closer to the area that you're interested in
[2:11:45] and you can do that and that's what was referred to as the wallpapering problem in one of the view graphs and i really
[2:11:51] didn't go into that in detail a better solution would be to make a universal solution so that all scenes
[2:11:58] agree with each other as best as possible in all the overlap region and that's what mosaic is about and one of
[2:12:04] the algorithms that's posted on the github website will do that mosaic and automated estimation for those overlap regions for you
[2:12:17] okay i'll just read the last question i don't know if i'll have time to answer it when you say emotional trees do you
[2:12:22] mean apparent parallax due to different imaging positions the short answer is no small motion so i'm going to take a break here and we
[2:12:33] could probably answer these questions offline later um unless the moderators wanted to say something right well great
[2:12:40] thank you very much professor cicada for all your answers addressing all these questions questions we are 15 minutes past the hour so what
[2:12:50] we will do is we will post this document online with all of the questions answered even the ones we
[2:12:57] weren't able to get to today okay so this uh concludes then this webinar series and before we close i'd like to thank a
[2:13:08] couple of people starting with our guest speaker professor paul cicada for the excellent presentation today and as well
[2:13:17] as the rset team there's a a very large arset team that supports the production of these series
[2:13:24] uh starting with jonathan o'brien selwyn hudson-adoy barack blevins who's done the heavy lifting here sean mccartney anna prado our program
[2:13:37] manager david barbato he's he's done all of the translations i'd like to send a special thanks to
[2:13:47] zachary bankston gina kovan especially to john delgar for their support with the google earth engine coding and i'd like to
[2:13:58] also thank the co-leads here amber mccollum and juan luis torres perez and of course to all of you for
[2:14:07] your interest in tsar and hopefully this will lead you to use more sar data and prepare you for upcoming sar
[2:14:16] missions missions um um to you amber or juan for any closing comments great thank you erica and again just to
[2:14:27] reiterate reiterate my thanks to everyone involved in this training um i also want to mention that we will have a
[2:14:35] survey that we will send out to you all and we really appreciate your responses to those surveys they help us
[2:14:44] see how well this training went but also provide suggestions and guidance for us as we develop future trainings
[2:14:52] and they they give us a lot of ideas and really allow us to connect with you all
[2:14:57] the user community to see what you want uh for future trainings so i just wanted to mention that and and thank everyone
[2:15:06] for being with us with this series okay thank you very much bye great thank you very much everyone wishing you a
[2:15:19] a great day and a great time exploring tsar
