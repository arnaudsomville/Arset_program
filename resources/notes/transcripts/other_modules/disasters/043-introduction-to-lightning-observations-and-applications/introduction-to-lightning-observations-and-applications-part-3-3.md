# Introduction to Lightning Observations and Applications, Part 3/3

`https://www.youtube.com/watch?v=nm3EGcR-dC0` · id 42 · 1:24:31 · module 59 — Introduction to Lightning Observations and Applications

[00:00] hello hello everyone welcome back to this final session of introduction to lightning observations and applications this is part three and
[00:10] today we will talk about Q stationary lightning mapper or glm observations lightning data access and applications our guest speaker today is
[00:20] Dr Scott rosi from NOA nesce star we started last week with background and history of lightning measurements and
[00:29] then last session was about current lightning data products from remote sensing and also from subit backgrounds today we'll focus on glm observations
[00:39] and and applications today being the last session we have posted the homework on a training website so please access that
[00:49] as in the last two sessions please put your questions in the questions box or chat box and we will address them at the
[00:56] end of the webinar and feel free to enter your questions as we go um if we cannot cover all the questions uh we
[01:04] will take care of them later and post the question and answer document on the training web page that brings us to today's session
[01:14] and we want to introduce our guest speaker uh also again I want to um acknowledge Dr Christopher schules from
[01:22] NASA Marsh who we introduced uh in first session he has been um great contributor and coordinator for this
[01:31] training and now Dr Scott rosi he is a NOA nesce physical scientist who splits time between offices at the University of Maryland
[01:43] and Kent State University Dr rosi graduated from Ohio State University in 2004 and Florida State University in 2007 and
[01:56] 2011 as the science lead for both the gos R and goxo lightning mappers his work helps ensure the availability
[02:06] understanding and application of lightning data from both ground and space-based observing networks is NOA position has provided the privilege of
[02:16] mentoring dozens of Scholars at various stages of their high school undergraduate graduate and uh postgraduate studies so next uh we
[02:26] invite Dr rasi all right well thank you for the introduction and as was mentioned before I'll be describing geostationary
[02:40] lightning mapper observations and applications so the GE stationary lightning mapper is a first ofit kind instrument we continue to discover new
[02:50] things daily two glms now provide continuous real time lightning monitoring throughout most of the Western Hemisphere all the way from New
[03:00] Zealand in the southwest to just off the coast of Africa uh the glm capabilities and products and the applications
[03:08] continue to evolve so here's two videos which clearly show that the glm is a lightning imager rather than a detector with very
[03:18] fine temporal resolution so here's two views one from goes east and one from go west of the same lightning Flash and you
[03:25] can see the glm is able to string together these piece together these flashes as they occur uh and give you
[03:33] quite a bit of detail uh in in terms of where the lightning traversed we've still only scratched the
[03:39] surface in terms of the instruments capabilities and the operational applications so despite a relatively coar resolution of roughly 10 x 10
[03:53] kilm per pixel uh the glm does provide quite a bit of detail as you can see in
[03:58] the zoomed in view in the background there we have a combined goes east and goes west flash
[04:04] density and the the pop out box Zooms in to South America to show just how fine scale the detail is to show um the
[04:12] effects of the topography on the lightning distributions the glm patterns uh it it resolves seasonal shifts that match our
[04:24] expectations from other lightning observation data sets the glm data has uh improved quite substantially since the instrument first launched and so
[04:34] what you see the these left panels uh are for the Goes West glm and the right panels are for the goes east glm and
[04:42] these These are showing three months December January February of 2018 and 2019 all the way through March April May
[04:49] of 2020 and what you see in these top panels here is is quite a bit of noise
[04:53] and and unnatural artifacts that we were able to uh develop filters and tune other filters to help improve the
[05:02] observation so that when you get down to these bottom panels you can see much more natural looking lightning
[05:08] distributions and so a couple of the really important filters were blooming and second level threshold filters they
[05:15] help to deal with uh issues with uh straight light and Reflections or glint off the surface here's a depiction of a world
[05:28] record lightning flash what you in the background in the Gray Shades is that 3D volume of the cloud and what you're
[05:34] seeing in the white the white lines that's the glm observations strung together uh to show this incredible
[05:41] flash as it evolves and so this flash occurred in the southeast United States just off the coast of Texas and I'll let
[05:50] it Circle through again here so you can see just here's from the end you can see just how intricate the detail is Michael
[05:57] Peterson put together this this animation and he's actually estimated whether the light source was coming from low in the cloud middle of the cloud or
[06:05] the top of the cloud and so there's some 3D Volume that he's able to put in uh
[06:10] with the 2D glm observations and so if if you'd like to see more detail about that specific
[06:18] flash we have this arcgis story map which goes into quite a bit of detail on how it evolved the meteorology behind it
[06:25] and and what's significant about it but this world record flash covered a hor Al distance of nearly 500 Miles uh there
[06:32] was another world record flash for duration that occurred in South America that was documented at the same time
[06:39] this animation here shows what this might look like from beneath the vertical lines that you're seeing are
[06:45] connecting from the glm to known strike points that are reported by a groundbased network and so I'll play
[06:53] this through here you can see the the lightning flashes evolve overhead and just how many times this lightning came to ground
[07:01] during its during its Evolution hundreds of times this lightning this one lightning flash stuck struck ground as
[07:09] it traversed this nearly 500 mile distance and so this is is pretty cool to look at with a VR headset as well if
[07:17] you're able to return there's a link to it in the story map there so the geostationary light mapper
[07:29] is used quite a bit by National Weather Service forecasters and what I've shown here this is an animation of the flashx
[07:36] dent density it's the frequency of lightning that's what's shaded and then the yellow and red polygons are severe
[07:44] thunderstorm and tornado warnings as issued as drawn by National Weather Service forecasters and so as that Loops
[07:50] back through what I'll draw your attention to is the warmer colors indicate more frequent uh more frequent
[07:57] lightning flashes and those just want to note how often those are collocated with the severe thunderstorm and tornado
[08:05] warnings and so with the glm observations they're fundamentally different from the groundbased networks that for forecasters were traditionally
[08:13] used used to using and so we developed a new suite of gritted products that are tailored for the weather service
[08:20] operations this helps us to disseminate the spatial footprint of the lightning and it also greatly reduces the file
[08:27] size and so what you're seeing here are the glm grided products and they're produced on a 2x2 km fixed
[08:37] grid as I showed on the previous Slide the the most commonly used product is what's called The Flash extent density
[08:44] and that reports the number of flashes coin coincident with each grid cell during a specified time period the
[08:51] updraft cores are often indicated by greater flash extent density values or warmer colors the this is important
[08:58] because the most frequent lightning is often collocated with the severe weather um and one thing to note also is that
[09:05] the rapid updates can be too rapid what I'm showing here is what we call the five minute window product and this
[09:11] accumulates five minutes of glm observations but it updates every minute and if I click ahead here you'll see
[09:19] this is the one minute depiction and you can see that that could be really noisy uh it can be distracting it can also be
[09:25] useful at times too and so forecasters go be go back and forth between the two but most commonly it's
[09:32] the window products that the forecasters are using the second most commonly used product is What's called the minimum
[09:40] flash area and as the name suggests it just reports the size of the small The Flash that's coincident with each pixel
[09:49] during the specified time period and the small flashes are most common in the new and intense convection along the leading
[09:55] line you can see in this case the yellows and greens are along the leading line whereas the larger flashes are in
[10:01] the stratfor and Anvil regions so you can see the purple in the trailing stratfor region of this
[10:09] animation and the third product that the Weather Service uses is What's called the total Optical energy and all that is
[10:15] an accumulation of all Optical energy that's observed within each grid cell during the specified time period and
[10:22] within the toe the bright regions indicate the most energetic convective cores and also in the strator region
[10:29] where the lightning is closer to the cloud top you can also get a a visual depiction of where the lightning
[10:35] channels are traversing the imagery that I've shown here this is from weather nerds I'll provide a little bit more details on
[10:42] this later but I provided a link here and what you see is that the total Optical energy overlaid on some IR
[10:48] imagery during a tropical Cyclone hurricane uh back in 2020 zooming in on the weather nerds website one thing I wanted to note is
[10:56] that in addition to the gritted product you can also overlay the glm level two products and those are the the base
[11:03] Products that come out of the go ground system so the next thing I wanted to talk about was an end of National
[11:15] Weather Service application and what they've used the glm a lot for is detecting long flashes and so I won't go
[11:21] into a lot of detail on this conceptual model but this is showing a cross-section of a a thunderstorm moving
[11:27] to its right along here you have the leading line the leading updrafts and you have the trailing stratfor region
[11:33] back here and we're talking about lightning that's occurring back in this location I click forward I can show this
[11:39] animation where you have a lightning Flash start in the main convective line and then propagate backwards into this
[11:45] trailing stratfor region and became quite elaborate very extensive flash likely came to ground dozens of times if
[11:54] not more than a 100 over a nearly 8C duration 7.86 6 seconds that this flash lasted so really extensive flashes
[12:03] occurring in this trailing strator region again you can see it stretched all the way from the Gulf Coast uh
[12:11] completely across the state of Louisiana and so applying this application to the conceptual model our forecaster might use this in operations
[12:23] this base product that is displayed here is what's called a sandwich product it combines the red and visible channels to
[12:32] provide a really nice depiction of thunderstorms as they evolve overlay radar which forecasters use for just about everything when it comes to
[12:40] convective convective warnings and then you can overlay the glm and so you can see this is where in
[12:45] the southern part of the storm is where the most obvious threat is but there's quite a bit of lightning occurring up
[12:51] here to the North in this uh less obvious convective region what I've shown here now is the
[12:57] pluses and minuses these are from a ground Network showing that the lightning was estimated to have come to
[13:02] ground in all of these different places during this I think 5 minute period of time and the squares are Cloud flashes
[13:09] as reported from the ground groundbased Network so you can see with the groundbased network you could tell that
[13:14] there's some lightning at a distance but you might not know that it's connected all the way back to this initial or main
[13:22] convection and so then putting that into motion you can see that this isn't just a one-off occurrence as this very
[13:29] intense convective line moves to the southeast here you get repeated flashes back up in the strator region and you
[13:36] can actually see that both the cell to the North and the line to the South are producing flashes that are propagating
[13:43] back into that region they're really an impressive setup which occurs quite often uh during the convective season in
[13:50] the the lower 48 and then think if you imagine if you're a forecaster uh advising either a
[14:01] large venue or in this case the two yellow circles here depict airports um or if you're airport operator trying to
[14:09] determine whether you should cancel operations or bring people off um off of the tarmac this is a really useful way
[14:18] to to depict the lightning um when it might not be as obvious and so in this case there's a a long line of storms
[14:26] I'll play this through again there's a long line of storms down uh Northern Alabama and Northern Georgia
[14:33] and as it's progressing slowly to the north Northeast it's producing giant flashes that are stretching all the way
[14:40] up to Nashville and producing quite frequent flashes that pose an obvious threat now to the operations of those
[14:50] airports so now I'd like to move into more of a summary of the geostationary lightning mapper applications and what
[14:59] we did a few years back was we produced a value assessment to advise future satellite architecture decisions and so
[15:06] this study evaluated the glm value by documenting benefits to the public via decisions made by end users and so we
[15:14] use operational use cases to help illustrate the glm value being realized through operational Decisions by a wide
[15:22] variety of decision makers both within the weather service and outside the weather service and so here's another
[15:27] animation a depiction I'll show you where where to get and download imagery just like this later showing another
[15:33] tropical system impacting the southeastern United States so the link here will take you to this value assessment and it identified
[15:44] wide ranging economic and societal benefits especially when the data are combined with other data set which is
[15:50] nearly always the case here are the glm application areas that we detailed within the study and I'll go over most
[15:57] of them today very briefly the first one we talk about is improving lightning safety so the glm improves lightning
[16:05] safety across broad segments of society related to a number of different applications uh it's a new freely
[16:11] available data set and so folks that didn't traditionally access to it now have access to lightning data in this
[16:18] case what I'm showing on the left here this is a lightning flash that occurred during a fireworks dis display posing an
[16:25] obvious threat or risk and so you see this Flash actually came to ground two different places more than 10 miles
[16:32] apart and so as this video plays back through you'll see the flash comes overhead of the the camera and comes to
[16:38] ground in the foreground here's the first first one and then after that first Cloud to ground flash it continues to propagate
[16:47] along Cloud base and comes to ground a second time closer to the fireworks display in the middle here this is what
[16:54] you would see if you were just using the groundbased networks it's hard to tell um which of these storms are producing
[17:00] the lightning and with the glm what you can see is this entire area is producing lightning and very likely these two
[17:07] storms are producing lightning that are talking to each other for lack of a better word uh the the charging and one
[17:14] is influencing the lightning and the other and vice versa and so the forecaster now is able to kind of
[17:19] connect see the full picture of the lightning threat in this case the application that we were most
[17:27] excited about when the glm first launched was severe weather warnings and thund sever thunderstorm and tornadoes and so we found that integrating the glm
[17:37] into the severe weather warning process promotes earlier and easier warning decisions a better assessment of the aerial coverage of the hazards fewer
[17:46] false alarms especially during radar outages and in regions with poor radar coverage on the bottom those four panels
[17:53] are are showing what the animation I already depicted that I already showed you the close collocation between The
[17:59] Flash extent density and the severe weather and then on the right here this is from a survey of forecasters at the
[18:05] Huntsville forecast office and this is uh in what ways do you use the glm during convective events so you like see
[18:12] some words here that are awareness confidence warnings so good to see that it's being used uh and being applied to
[18:20] this particular application another application that's very important is improving the safety and effectiveness of wildfire response so the glm is able to benefit the
[18:32] firefighting community Through the unique identification of continuing current flashes uh and those flashes are most likely to ignite fires it also
[18:41] helps to better characterize Hy hyro cumula nimbus clouds and it helps with track thunderstorm tracking in areas
[18:49] that lack robust radar coverage what I've shown in the bottom here this is a pyrro nimbus it's a a fire generated
[18:55] thunderstorm and so you can see the smoke in the infrared and then you see the heat in the infrared the cloud
[19:02] developing and then you see the liting occurring the lightning data assimilation is still relatively new especially the glm lightning data
[19:14] assimilation but the early results indicate many benefits especially for short range forecasts of radar reflectivity accumulated precipitation
[19:23] and lightning threat in the convection allowing models and so there's been a number of studies published reference to
[19:32] here the glm helps to improve precipitation estimation uh especially in areas without adequate radar coverage so Western us Hawaii the US terrial
[19:43] Territorial islands is where it provides the most benefit but it helps to augment the satellite only prip estimates by um
[19:50] better conveying where the convection is and where the stratfor regions are and I have a link there to some
[19:57] Comet training on flood forecasting another one we're excited about is improving climate applications and so the glm data are able to provide
[20:09] unique insights for monitoring climate scale variability and response in a changing climate there's a very close link between lightning and convective
[20:18] Cloud property and this makes it an essential indicator of both inner annual and decal change uh and also a key
[20:25] variable for validating climate models and I've shown a couple of images that you've seen before here uh to to
[20:32] illustrate that we have now this continuous coverage over a very broad area and I've had so for over five years
[20:40] now and so the the climatology is building and we're we're able to start making some some more clear insights
[20:46] into how the climate is evolving through these observations the glm and and other satellite data sets help to fill data
[20:58] gaps in and in this case we're talking about radar coverage gaps there's very very good radar coverage over the
[21:03] continental United States but even with that there's a lot of regions where that the coverage isn't perfect and um needs
[21:11] to be augmented by other data sets and so the the broad spatial bro and Rapid temporal temporal updates complement the radar data um
[21:22] both when The Radars are working and when they're not and so I've shown some images on the bottom here of Radars that
[21:27] have been damaged by severe weather and obviously when this is the case other data sets are needed to help fill that
[21:33] radar coverage Gap until they can be brought online another one we we characterize the value of mitigating Aviation hazards
[21:45] and what I've shown here here's a animation of a day in the life of flights over the conus and you can see
[21:53] in a lot of cases the aircraft avoid this is The glm Flash extent density with the tornado and severe thunderstorm
[22:00] warnings drawn on here um but the forecasters used the radar data and the lightning data to help guide these
[22:06] planes and the pilots themselves use these data to help make better decisions on rooting when thunderstorms are
[22:13] threatening and so when we talk about the aviation hazards it's important to note two different applications there's
[22:21] both the airport operations and then the flights when they're in route and so in terms of airport operations it gives
[22:29] the the decision makers more confidence when they're suspending or continuing ramp operations so that helps to enhance
[22:35] safety and improve efficiency and provides cost savings um and then as I was showing here when the flights are in
[22:42] route there's a number of decision makers that are using this information to help keep those planes safe another one I like to note is uh
[22:52] improving tropical Cyclone diagnosis and warning so the glm is able to clearly convey convector patterns below Cloud
[23:00] top in tropical Cyclones so this helps the forecasters to better diagnose TC structure and how it's evolving and this
[23:07] really does help aid forecasts of tropical Cyclone intensity including Rapid intensification so the first animation I'll show here this is
[23:16] Hurricane Ian near its Inception and you can see the lightning over top of the visible imagery and what forecasters are
[23:23] looking for here is they're really trying to identify as as accurately as possible Where is the Center of
[23:28] circulation because the better they get that diagnosed the better the models are going to be at forecasting this
[23:36] hurricane or the eventual hurricane and so this is the glm and other data sets combined to help the forecasters
[23:43] pinpoint that Center Center of circulation and then later on here's a depiction of depiction of hurricane Ian
[23:52] less than a week later as it's making landf as a devastating hurricane in Southwest Florida and what you can can
[23:58] see is a you know tremendous eye here with lightning nearly encircling the entire eye indicating a very intense
[24:05] storm making landfall and so that that both the intensity and the spatial scale of the storm is really remarkable and
[24:12] the lightning helps to to round out the picture and put everything in perspective so to summarize that glm
[24:21] value assessment um only four years since becoming reality the glm is shown to be establishing a leg Legacy of
[24:29] applications likely to become ubiquitous acoss across a wide range of meteorological domains it's important that the glm now provides a national and
[24:38] international Baseline of freely available lightning data and it establishes a baseline for widespread government and Industry implementation the glm also moves things
[24:50] forward as I mentioned earlier from the traditional Point sources of lightning information to more of a rapidly
[24:55] updating 2D map that portrays the full spatial extent of the lightning activity as as I showed in the previous
[25:03] few slides many operational users have eagerly embraced this new source of lightning information and have already incorporated into their workflow we
[25:11] expect the value to quickly multiply as these realized benefits spread to other decision makers um and despite this
[25:18] widespread use of lightning data The glm Still Remains in its infancy and much of its value has yet to be fully realized
[25:24] lots of work continues to be done done a couple of applications I didn't mention in the value assessment that I
[25:33] wanted to note here uh the glm is has found very eager users in scientists that detect and characterize bides uh or
[25:43] bright meteors that are burnning up in the the atmosphere it the glm not only detects these bides but it provides light curves
[25:51] and by that I mean it provides a Time intensity recording of the bide impact in disintegration so in the bottom right
[25:58] here I'm showing the intensity of this meteor as it burn up and in this case it was in the center us so it's one of
[26:07] these yellow ones here and in that case they can use both the goes east and goes west glm and get a very detailed
[26:14] trajectory of how this entered the atmosphere uh and how it burned up in the atmosphere and the scien is like
[26:21] that because they can they can backtrack and and do a back trajectory and determine where The Rock came from and
[26:30] it helps them to validate their models in terms of is that did that rock from this part of space burn up the way we
[26:36] thought it would and they can scale that up to uh to better prepare for for potential impacts from much
[26:43] larger meteors and so another application that's kind of closer U more public facing more obvious is for the
[26:54] National Weather Service we've seen at least a dozen or more cases of meteors creating very loud noises that startle
[27:02] the public and the weather service is one of the first F first places that folks call to try to get answers and so
[27:08] here's a couple of posts uh here's one post from Pittsburgh there's been several others like I mentioned uh but
[27:14] what they said is they able to go look at the glm and confirm that yes that loud noise you heard was from a meteor
[27:21] and on this day it was near Christmas or no it was New Year's Day and it was
[27:27] happened to be cloudy and so nobody saw it they just heard the loud noise and so in this case it was very useful to help
[27:31] calm the Public's nerves another one is monitoring for volcanic eruptions this um is is one of the most impactful volcanic eruptions um
[27:44] definitely during our light lifetime but what you see here I'll let it Circle back through but towards the end you can
[27:50] see more lightning but just as the volcano erupts you see a bunch of glm lightning and then none except for where
[27:55] the shock wave interacts with these clouds and and helps to enhance their their up updrafts and perhaps creates
[28:04] thunderstorms where they wouldn't have occurred otherwise and this actually happened across the world and and so again lightning right at the beginning
[28:13] and then as the ashcloud moves away more lightning and and what I want to note is that there was lightning occurring that
[28:19] whole time and so what I've shown here this is from the the Woolen Network which does see the radio waves not the
[28:26] optical light and so so it's not as affected by the ash cloud and it confirmed that there was continuous
[28:32] lightning occurring and actually some very fascinating types of lightning concentric rings as it as it propagated out it's been a few studies published
[28:41] since to show just how remarkable the lightning was with this otherwise remarkable event on its own so now I just wanted to spend few
[28:52] minutes here uh describing how to access some glm imagery and so what you see here is a a visual depiction of going to
[29:00] the Go's image viewer so you see the link up there to the top left in this case I picked the southeast us I go to
[29:07] the second panel over for glm Flash extent density they have static images and also this animation Loop so you can
[29:14] see you could zoom into the region you selected and see just how the lightning is occurring you can change the loop
[29:21] duration and the size and then you can build an animation and download it and include it in your presentations so this
[29:28] is one of the the very first places I I recommend folks check when they want to to access some glm imagery for use in
[29:36] NE a project or presentation another one that I referenced earlier is the weather nerds website and this one provides it's it's
[29:48] tropical themed but it works in the mid latitudes as well it provides the the total Optical energy The Flash extent
[29:54] density and as I mentioned earlier it provides in addition to the grided products it also provides the flash
[30:01] points from the glm and in this case you can see that display might be preferable because the grided product kind of
[30:08] covers up the very important details within this hurricane eyewall and the lightning points are are much clearer it provides a lot of other um
[30:19] overlays too that may not be available on other data set or websites another one that's really helpful think a lot of a lot of folks
[30:29] already use this in the US for their weather information so it was nice that they were able to add the glm to that
[30:36] the college D page meteorology web page um for those not familiar for those that are there's a lot of options over here
[30:43] the number of frames which bands do you want to put on the background which sector do you want to view um but to get
[30:49] the glm it's not in this main selection here you go to product overlays and you select goes derived
[30:58] from the bottom here and then they have the glm flash extent density and the glm Flash points that you could select and
[31:05] then it'll overlay it with your whatever other background imagery you'd like for instance the the sandwich products
[31:12] available here and all the different individual channels this archive uh it it might not be completely up to date but it goes
[31:22] back a while and what it provides if you go to the Dropbox flash skeletons there's a daily most interesting
[31:30] lightning flash that Michael Peterson documented and he provides in this case this is a 9sec flash that he shows the
[31:37] evolution of it so there's one a day going back several years so lots of different cases that you could
[31:44] go just to get a better feel for how these lightning flashes evolve and then there's some composite imagery too like
[31:50] I've shown here if you want to look at um like a whole month at a time or a
[31:54] whole year at a time for different periods of time or different regions so then we have a a website at
[32:05] the University of Maryland isn't as up toate as it probably should be but it does provide a lot of the links I showed
[32:11] here today and in addition to some some additional commentary describing what data can be found where and so there's
[32:18] these four different tabs or five different tabs that you can select to get access to realtime data forecasters
[32:25] tab has a lot of information on training uh Enthusiast that's just more of the um the imagery examples um Dropbox stuff
[32:33] that I showed on the previous slide so again here's a summary of the links that I provided and uh that I
[32:43] described the the czm glm globe that may that then may not still be active and so if it doesn't work that's because it's
[32:51] not be happy to answer any questions that you may have submitted during the talk thank you very much Dr rosi for such an
[33:01] informative presentation on glm so just to summarize we had an overview of glm and Dr rosi also showed
[33:13] uh information about lightning data from Star go viewer how to access the data view the images and also there was
[33:21] several other websites which can point to this information so this brings us to conclusion of this training on
[33:31] introduction to lightning observations and and applications and just a brief summary uh we started with what lightning is and
[33:40] how it forms um now lightning is high current electrical discharge between positively and negatively charged regions of a
[33:48] thunderstorm we reviewed that as ice particles grow within developing clouds or storm they Collide and they break
[33:58] apart in in a variety of sizes and these particles acquire positive and negative charges and form charged layers under
[34:07] the influence of gravity and updraft within the clouds when these Char charged layers are are formed they they
[34:16] they build electrical potential and they result in electrical discharge that's how that's what we call lightning then
[34:24] in session one uh Dr Goodman provided uh bed background and history of lightning uh detection from 1960s to present uh he
[34:33] mentioned that uh space Bor lightning measurements Focus lightning measurements actually started uh since 1980s from space shuttle era and then uh
[34:44] in session two uh Dr Lang uh described other missions such as micrb 1 or bu one um for lightning measurements using
[34:53] optical transient detector then came trim and ISS with lightning Imaging sensor uh to to measure lightning and uh
[35:04] today droski talked about geostationary lightning mapper from go we also talked about um FY satellite gamar burst
[35:14] monitor that can detect short-term lightning from space then we also heard from Dr Goodman about future lightning measurements from
[35:24] space through Geo XO lightning mapper talking about suborbital lightning measurements uh be it fixed or Deployable networks or airbone lightning
[35:36] measurements uh Dr Lang talked about these uh sensors a lightning mapping array or LMA that uses very high
[35:44] frequency antenna to detect lightning um then uh there were there was an overview of various Regional LMA networks um also
[35:54] lightning instrument package uh they measure electrical field change and there were several Airborne lightning data sets of course um short-term
[36:04] flights were arranged uh which included lightning instrument package or lip uh flies ey glm simulator F and electrical
[36:15] field change uh meter efcm um then uh we also saw Global hydrological Research Center or ghrc um
[36:27] site how all the lightning data can be accessed there are tools to visualize um there's a visualization dashboard of for
[36:35] lightning in ghrc also and today uh we saw how glm data can be viewed and accessed there are several uh benefits
[36:52] of lightning measurements as we saw throughout this training can be used for raising lightning safety awareness as an
[37:00] indicator of wildfire ignition potential for risk assessment for power outages and indicator of storm intensity and essential climate variable with other
[37:11] variables uh for Aviation and Marines weather safety and for monitoring volcanic volcanic reductions as you can see in this figure
[37:21] from ISS list uh trim and ISS provided long-term Global picture of uh lightning flash rates and it showed us how the
[37:31] special pattern and in global tropical land marks there so many High um intensity of Flesh rates than over
[37:39] oceans or other regions just a reminder about homework uh it's posted today on training web page and answers must be submitted via
[37:49] Google forms by 17th of April um people who attended all three live webinars and complete the homework assignments by the
[37:59] deadline will receive a certificate via email approximately 2 months after completion of the course we want to acknowledge all our
[38:10] speakers and thank them very much for their excellent presentations and information uh Dr Steven Goodman Dr Timothy Lang and Dr Scott rosi were our
[38:20] guest speakers we also had great help from Dr Christopher shes as coordinator for this training training here's contact information for Dr rosi
[38:31] if you have question about glm or any related topic uh you can contact us with any additional information uh here is
[38:40] the rset website link where you will find all the training material and recordings available the homework is
[38:46] also posted on the training uh web page that you can access from here uh here is our uh social media link and develop and
[38:55] serere are our capacity building sister programs that you can visit to learn more more about so we want to thank you all for
[39:04] attending this training um and we will now go to question and answer session thank you um thanks for
[39:20] attending this session and this um training and also thank our speaker today Dr rosi and we'll move on to
[39:29] question and answer sessions now uh we already have a few questions um and Dr rosi has answered them so what I'm going
[39:39] to do is read the questions and then uh Dr Roski can unmute and perhaps uh explain these answers so question one is
[39:48] at night for a single lightning event for a fraction of a second the entire area lights up is the amount of light
[39:57] proportional to the energy released thank you for uh attending today and thanks for these questions uh mentioned here there there's a lot of
[40:11] other factors that contribute to how bright the lightning appears from where you're standing or where the Observer is
[40:17] um but in general the stronger the lightning uh the brighter it is and so um you have very strong Cloud to ground
[40:23] flashes uh for instance produce more energy and and they're a lot brighter uh as opposed to cloud in Cloud flashes
[40:31] tend to not carry as much current and in turn tend to not be quite as bright thank you and moving on to second
[40:40] question in the use case of inflight storm um avoidance are all the pilots making their own decisions in real time
[40:49] or are they following centralized predictions of where the storm is moving I I speak to this kind of just
[40:57] from secondhand knowledge you know not not being in this this business but being a a pilot myself or a forecaster
[41:05] that deals with Aviation forecasting uh but from what I understand that the decision always lies with the pilots and
[41:11] they do what they need to do to to stay safe um but they do fly these predefined
[41:16] routes that will consider the weather impact so um there's the National Weather Service each of the forecast
[41:23] offices in the Aviation Weather Center they provide a lot of products that are consumed um by the Airlines and and
[41:29] those that are planning what's going to happen and so they base a lot of their um their roots on forecast and then in
[41:36] real time when the thunderstorms are occurring oftentimes they'll delay a flight's departure to avoid thunderstorms that they would encounter
[41:44] in route or at the destination and so those decisions are again made by folks that are coordinating on the ground um
[41:51] but on the once the pilots in the air Jets of a certain size have a a front a
[41:56] radar on the front of it and so they can use that to help avoid thunderstorms that does unfortunately have a a fairly
[42:03] short range at the speeds that these pilots fly and so that's where these other data sets come come in handy
[42:10] allows the the pilots to see further ahead and to to divert the flight you know earlier when it's more convenient
[42:17] than waiting waiting to get closer to the threat and and then urgently needing to rroo great uh question three is you
[42:28] stated that the glm is an imager not a detector what work has been done on writing detectors that work on
[42:37] sequencies of glm images yeah I wasn't sure on the specifics here so I mentioned that there is quite a bit of work being done on two
[42:47] different fronts so the glm data that comes out of the ground system is what we call the level two glm data and that
[42:54] consists of events groups and flag es the events are the most raw observation that's a a single Pixel being
[43:02] illuminated for a 2 millisecond period of time the groups are then um collections of events so during the same
[43:10] two millisecond that are coincident to one another uh and so then the then time and space are brought into flashes and
[43:17] there's time and space criteria that combine the the groups into flashes and so when you talk about sequencing that's
[43:25] one of the ways they they look at this Point level data how are the events being merged into groups being merged
[43:32] into into flashes and I I think there's a lot of a lot of room for more work on that too
[43:38] especially for for researchers that focus on grouping algorithms and um how how do you group these rapid sequences
[43:46] of event I mean n lightning is a natural example and it occurs all the time and so we've dabbled in that a little bit
[43:52] but there's probably some some really um like with DB scan and those types of clustering um applications there could
[43:59] be some really cool stuff that could be done um and then the other one is the optical imagery itself and that's the
[44:05] grided products or um kind of accumulating the optical brightness on a um you know a pixel by pixel basis but
[44:13] over the whole scene as opposed to the flash by flash level so I wasn't sure which this was asking but I figured I'd
[44:18] describe both of those yes thank you uh question four I have a 400 kilm square study area that
[44:29] has been running for the last four years how do I best find all glm data with high flesh density over the area I'm
[44:38] trying to find the dates on which there are lightning over the study area yes that's another great question
[44:47] and um the the level two data that I mentioned it it's what's most easily well it's what's formally archived on
[44:55] what's called Noah class uh but it it's it's in 22 files and it's kind of hard to work with um the file formatting and
[45:02] so part of the idea with these grided products is that it would make it easier for users to to manipulate and and look
[45:09] through large quantities of the data the the level two files are also much larger than these gritted products and so I put
[45:15] a link here this we're still filling back filling this Archive of the grided products but it's available um through
[45:23] the if you follow this link at the GFC or Gard space flight center has a a Dack
[45:29] or a Data Center and so these data are available through the cloud and that's what I'd suggest is that you access
[45:35] those data um and you query them for your location and then just do look at the you know various stats what was the
[45:42] greatest flash density during that day and what hours during the day was there lightning whatever you might be
[45:47] interested interested in great thank you uh the last question is there any prone connection between lightning and specific rocks like
[46:00] Granite I don't know of any formal studies on it I think folks have looked at it but I don't know um recently if
[46:09] they have uh but there's when I tell folks that I study lightning uh I'll often hear stories uh
[46:16] folks just confused to why Lightning's hitting a certain spot more than it should and so there's anecdotal evidence
[46:22] lots of folks have said you know I think you know maybe because my yard has this soil or Rock composition that um it's
[46:29] attracting lightning but I don't know of any any formal studies that have have documented that a lot of the times like
[46:35] for instance if if if the assumption is I'm not saying that this is the case but the assumption that it's attracted to
[46:43] Granite um is that because the granite spires are what's tallest and lightning is just hitting the tallest thing around
[46:49] um you know those are the types of things that you have to consider but um I've definitely heard anecdotal evidence
[46:54] of folks and sometimes pretty compelling um and you know not having seen the scene myself was of interest to me as a
[47:02] scientist that's interesting uh question six is how real time are these systems for Aviation and other applications how
[47:11] long does it take to process from detection to forecast so it's it depends yeah that that's a a broad range but from
[47:21] detection it's nearly instantaneous so the glm from geostationary orbit um it observes the light from the cloud top
[47:29] processes it into these events groups and flashes sends that data to the ground and distribut it distributes it
[47:35] to users all within 20 seconds and so when a 20 second file every 20 second a file completes before the next file
[47:44] completes that previous file will already be with users and so it's it's incredibly quick and same with the
[47:50] groundbase networks they they can instantaneously report this um and so that's that's one of the main advantages
[47:57] of lightning data is that it's it's collected and distributed almost instantaneously now when you try to combine it with other data sets and
[48:05] build products that's when you add latency um but for a forecaster sitting at a forecast desk trying to make an
[48:12] operational decision uh lightning is one of the the most rapidly updating and readly accessible data sets that they
[48:18] have um and so when I mentioned filling radar gaps there's you know radar coverage in the lower 4 is great there
[48:27] are some gaps where they just can't see the storms as well as they'd like to um but even where the radar coverage is
[48:33] good often times they need to wait for the the radar to scan the entire volume and so that can take two three four five
[48:41] six minutes um and in that mean in the meantime they're looking for other data sets to help them make their decision
[48:49] and so if a forecaster is looking at a storm and they're thinking about issuing a warning and the radar Trends look
[48:55] right but sometimes they'll say oh let's wait for one more bit at radar information but at the same time the
[49:00] lightning is saying well no this storm is really getting strong sometimes they'll issue that warning before that
[49:05] next radar scan comes in so it increases their confidence when they're they're putting out those warnings and so in
[49:12] that process we're talking again not instantaneous but minutes you know the the single to you know less than five
[49:18] minutes that forecasters this data being observed to a forecaster actively making a decision based off of it
[49:28] it great uh question seven is the thunderstorm intensity occurring more frequently in the tropical region or in
[49:35] the PO region I think I know what the the I think I know what there's probably a
[49:42] little more context needed with the the question here but um the answer is probably both but it depends on what
[49:49] time scale you're looking at and so there have been a lot of researchers that have noted uh lightning is in in
[49:57] the polar regions where they haven't necessarily seen it before part of that is because we now have networks that can
[50:02] detect it in those regions um but part of it is because lightning maybe is occurring uh further north and further
[50:09] south than it used to and in the tropical regions that's uh it's it varies so substantially that I can't
[50:17] really say whether lightning is occurring more or less frequently in the tropical region it depends on so many
[50:23] factors uh that that it would be hard for me to um to generalize in this case so question eight is what type of
[50:35] crown Network do you have in the US to compare with glm data products uh do you have a network of observers at synoptic
[50:45] stations reporting the occurrence of storms yeah so in a lot of cases that's automated now but they still do have um
[50:54] at airports they have weather Observers and every hour they report whether they heard thunder during that hour um and
[51:01] that the Asos or automated surface observing system also reports whether there was lightning or whether Thunder was recorded but um at at airports the
[51:11] the weather Observer does note that still to this day uh the ground networks that we have in the US are plentiful it
[51:19] really helped us not only in getting ready for the glm and showing forecasters examples of what it might
[51:25] look like um but also to complement the glm observations so we always stress that to forecasters is that these data
[51:31] sets the groundbased ones and the satellite based ones are always best used in conjunction it really helps to
[51:38] complete the picture um but in the US we have the the oldest one is What's called the national lightning detection Network
[51:45] that's been around in various forms since the 80s and that's a very uh very robust and reliable data set um that
[51:54] that like I said been used for decades uh there's a newer one now the Earth networks has a a lightning Network total
[52:02] lightning Network that has a pretty extensive presence in the US but also globally um and and so in the US the
[52:11] Earth networks is able to see a little bit more of the intracloud lightning than the N nldn is and so again those
[52:17] two are used by Weather Service forecasters alongside the glm um and then the other interesting ones we have
[52:24] lightning mapping arrays which provide very detailed 3D observations but over a fairly small area um and then more
[52:31] recently folks have deployed kind of oneoff um interferometer networks I have a colleague that's building Raspberry Pi cameras that are
[52:41] um taking somewhat high-speed imagery to help validate the various networks and so um we have pretty robust observations
[52:49] in the US to help provide some ground truth to the glm but in the end there's nothing that's the same they're all
[52:56] seeing the lightning differently and and so you have to make some general generalizations when you're comparing the groundbased and the satellite
[53:04] based based data great uh question nine is what visualization tool do you use on pages 12 and 13 generally uh could you
[53:16] recommend software to process and analyze flesh data yeah it depends I don't remember let me look to see what slide that was
[53:27] um I don't recall offhand but I use a number of different a number of different python is my main coding
[53:35] language I moved on from Fortran a long long time ago so python I do almost everything in there even even the stuff
[53:42] I used to do in argis is now done in Python um so the the visualizations that I make are almost always use use Python
[53:50] um but some of my colleagues use a lot more elaborate things and so yeah the one you're referencing is from Michael
[53:56] Peters Peters um the world record lightning Flash and um Michael Peterson if you haven't Googled him do that the Google Scholar
[54:04] he's got dozens of papers that are very interesting and he's done some just tremendous visualizations kind of like a
[54:12] savant when it comes to visualizing data and so what I think he did in this case is he hacked the software called blender
[54:19] and kind of made it do things that it wasn't necessarily designed to do and so folks that are familiar with it that
[54:25] have seen it were just kind of flabbergasted by what he had done and so I think both of those are from the
[54:31] blender software package and I don't know much about that at all but Michael Peterson would be somebody to reach out
[54:37] to if you're interested in how he's made use of that tool it's fantastic uh question 10 is
[54:46] how do you deal with the uh sparing of the data from glm Electric drift mov how does the uh polygon mixing help improve
[54:56] the model and they don't seem to be the same resolution is it uh Vector based temporally uh reconstruction technique
[55:06] from multiple sources but how sparing is delt again I don't know how to answer that question so hopefully I'm hopefully I'm
[55:18] not completely off base with my response but I think this is referencing how the glm grid is non-uniform
[55:27] and um so for instance at the at nater directly under the the satellite our pixel resolution is roughly 8 by8
[55:37] kilometers uh but once you get out to the edges of the field of view it's closer to 13 or 14 kilometers on a side
[55:43] each of the pixels and in between it varies and it's it's almost hard to predict how it varies unless you know
[55:52] because the we're we built into the G M what's called a variable pitch array and so that the variable pitch array was
[56:03] designed to help um diminish the increase in size they wanted to keep the smaller pixels as long as they could um before you get
[56:12] to the larger pixels and so if you look at the actual glm pixel map it it's it
[56:19] does have some really funny shapes and at in the grided products if you look at the grided products especially at higher
[56:25] latit udes uh they'll look funny the same flash will look different shape from the Goes West versus the goes east
[56:32] because the pixels are are larger there and they're they're oddly shaped at times you know like a trapezoid don't
[56:41] you know not like a a diamond or a circle or anything but it's just not a square or a
[56:48] rectangle thank you uh the next question is how often is the software running on the glm satellite update did with um new
[57:00] algorithms so early on it was updated quite frequently when when we first turned it on uh again it was the first
[57:07] of its kind sensor there was a lot of stuff that we couldn't predict while it was on the ground and so in the in the
[57:14] early years say the first two to three years it was updated the software was updated every six or so months um to to
[57:21] update various filters and to to change some settings uh but now they've settled into more of a Cadence of maybe once a
[57:28] year that kind of there's big updates there's little like lookup tables that are uploaded more frequently um but
[57:35] nothing substantial um and you also have to think there's updates to the actual software on the satellite and
[57:44] there's updates to the the ground system that's producing the products and so those those two things both occur but
[57:51] much less frequently now than earlier on in the satellites lifetime great thank you so uh if you still have questions we
[58:08] have some time so please go ahead and post them on in the chat box those are good questions helps to
[58:26] round it out I'm glad to see the interest yes so while uh you're posting your questions um I just have um something to
[58:49] remind you that there will be um end of training survey that will be uh sent to you by email um we always have uh survey
[58:58] at the end of the training to get your feedback so we request you to take a few
[59:03] moments to finish the survey uh because that that helps us in in improving our future trainings also we want to know
[59:12] what other topics you're interested in so please have a look at the survey and please take a few moments to complete
[59:18] the surveys uh to to get so we get a good feedback on on the training training there one more question is a a long
[59:30] strike the same as long uh continuing current strike sorry I had trouble finding my mute button even though it's right there
[59:42] um the a long strike so when I was showing earlier I was showing the the flashes that cover long distances um
[59:51] those are different from flashes that have long continuing current and and um but those flashes are more likely to
[59:59] produce ground strikes that do have continuing current so they're somewhat related U but also uh kind of discussing
[1:00:07] two different things so you can have for instance you can have a flash that lasts um half a second and have no continuing
[1:00:17] current in it and it can Traverse quite a great distance in half a second um as opposed to that you could have a smaller
[1:00:23] flash that doesn't Traverse as long of a distance in the cloud um but lasts a half second and has several continuing
[1:00:30] currents during it question 13 is there any way to estimate predict the intensity of cloud to ground given an observed Cloud to
[1:00:47] Cloud Behavior currently being observed from the ground yeah that's a great point so that's um that's one of the
[1:00:56] the advantages to having intracloud observations is that the first few flashes in a storm are almost always
[1:01:04] intercloud and so if you're only observing the cloud to ground flash U that storm could already be producing
[1:01:10] lightning and you didn't know about it and so having access to data that observes the intercloud portion will often time give you several
[1:01:21] minutes lead time you know up to 30 minutes sometimes these storms will produce just small infre frequent Cloud
[1:01:26] flashes um for some period of time before they produce a cloud ground flash so yeah it's really important um if a
[1:01:33] forecaster sees an increase in intercloud lightning um that they anticipate that it's likely going to begin producing Cloud to ground
[1:01:40] lightning as well so uh in continuation U reference to question 11 how often is software running on glm here question 14 says can
[1:01:55] you treat glm data series as a homogeneous or proper for climate studies how do you prepare data for
[1:02:03] these these purposes another great question um as it stands um you can't go back to the beginning of the glm record and assume
[1:02:12] that it'll be homogeneous uh we don't we haven't gone back and reprocessed it so when these new filters were were put in
[1:02:20] place and they fixed some of these artifacts uh we didn't go back and retrospectively retrospectively fix the old data and so what I genuinely
[1:02:30] generally recommend is the data beginning in about 2019 is is when you can really count on it being of of
[1:02:37] better quality um and by 2020 the the data between 2020 and now is is fairly homogeneous in terms of instrument and
[1:02:48] settings so it's just really 2017 and 2018 that you need to exercise some caution caution with that's great so it's about five
[1:02:57] years of data yeah um and we are we are working on a project to um reprocess the old data
[1:03:06] with the current settings and so that should be available sometime in the next year or so great uh question 15 is there a way
[1:03:16] to identify long uh continuing current strikes I am interested in the in this regarding Wildfire ignitions ignitions me too that's what I I spend a ton of
[1:03:29] time looking at and it's a fascinating question with the groundbased networks you really can't see it so the the the
[1:03:36] groundbased networks like the nldn and the entn unless you look very closely at the waveforms you can't necessarily say
[1:03:43] it on a flash by flash basis uh but the glm the optical sensor does allow you to
[1:03:49] get a much better estimate of long continuing current and so what we look for is um with in a Flash uh is there is
[1:03:57] there a pixel or a group or an event that's recurring for some period of time and so what I'll do is is I'll look at
[1:04:07] the the number of consecutive groups So within a flash there's allowed to be some period of time where there's no
[1:04:14] light within the footprint there's there's a 330 millisecond time window um but if you look within that flash say it
[1:04:22] lasted half a second you can look at two millisecond intervals at each individual pixel or group of pixels and so if you
[1:04:30] sequence those and and I'll allow for one one um one frame with no light and I'll still call it a consecutive frame
[1:04:39] you can get a an estimate within each of the flashes what was the number of consecutive frames and that'll give you
[1:04:46] a pretty good proxy for continuing current question 16 how can the electric field be captured with such resolution
[1:04:58] is there exposure problems occurring with varying angles yeah so the to to be precise with my language the it doesn't it doesn't
[1:05:10] measure the electric field per se you know it's looking at the optical distribution of lightning and and it
[1:05:16] sees what it can see and and so there are problems when you look at the varying angles um I mentioned already
[1:05:23] how the pixel sizes are different and so if you have a an optical source that makes the same amount of Light Within a
[1:05:31] smaller pixel it's going to be more likely to be seen than if it makes that same amount of light in a larger pixel
[1:05:38] um it's it's you need brighter a little bit more light in those smaller pix or in those bigger pixels for it to be
[1:05:44] detected um and then also at that at those steeper viewing angles you're sometimes looking at the sides of clouds
[1:05:52] um sometimes storms in the foreground are obscuring storms in the background um behind kind of you can't see through
[1:06:00] it so you see the the lightning from the first storm but not the second and so yes there are there are issues in um
[1:06:08] there's yes some small settings that are made to help um account for this but it's it's kind of
[1:06:15] unavoidable and it needs to be taken into account um for applications that rely on that kind of
[1:06:24] uniformity uniformity question 17 are there false alarms detected by the glm yep yeah there's there's more false
[1:06:34] alarms than we necessarily would like um but there's there's good false alarms and there's bad false alarms and so I I
[1:06:41] mentioned earlier the the bide application so you know we're not designed to see these meteors exploding in the atmosphere but the fact that we
[1:06:51] do is actually very advantageous for those researchers they're able to um they're able to use those to validate
[1:06:57] their models so they can do very detailed trajectories especially where both glm see it and then they can do
[1:07:03] back trajectories and see where that space Rock came from um and then they model how that rock breaks up and then
[1:07:09] now they have a really good depiction of how it did break up how bright it was at
[1:07:14] various stages and so um you know that's an example of a false alarm um being helpful and yes we do see rocket
[1:07:21] launches at times there was a space SpaceX rocket that exploded a couple years back off the coast of Texas and we
[1:07:29] saw a number of signals from from that rocket explosion um rocket launches by themselves not quite as likely to see um
[1:07:37] but that SpaceX one made such a bright and it doesn't just have to be bright it has to be bright and rapidly changing
[1:07:46] and so usually you need more than just a rocket launch to to trigger um a false alarm but other sources of false alarm
[1:07:53] are sunglint and we have filters that help to deal with sunglint off of either a calm body of water or even solar
[1:08:01] arrays those cause those cause issues um and then there's just there's artifacts with the instrument we have pixels that
[1:08:08] can become hot pixels and um become overly sensitive we only have a couple of those between the two instruments but
[1:08:15] yeah there's lots of different sources of false alarms and we do our best to um to filter them
[1:08:22] out the real trade-off is we want to detect as much as we can with this few false alarms and so that's that's the
[1:08:28] real trade-off that we'll always have to pick one or the other read yes thank you we'll give give a few more minutes
[1:08:44] uh so if you have questions you think of something please do enter in the chat box there was one question about homework
[1:09:06] points um so for now each question or each Google form answer that you provide it's one point so homework should be posted
[1:09:26] um and uh you will also be looking at glm images for one of the homework um questions um and um it's due on 17th of
[1:09:53] April okay we want two thank Dr rosi for his time and his the information that he provided today um I also want to thank
[1:10:02] the aret team uh for for coordinating and helping and setting up this uh webinar series um Selvin Hudson ooi
[1:10:11] Natasha Johnson Griffin Jonathan O'Brien Sarah Kell um Brock Levin and Sean mcartney all of them have helped with
[1:10:21] this webinar Series in addition to all our guest speakers and uh Dr Chris schz who helped in
[1:10:29] coordinating uh all these webinars so thank you all oh there's one more question uh do the lenses have uh obturation control or uh
[1:11:15] occurring lightning or is it treated in software uh both okay great I'm not sure if I'm saying it
[1:11:32] for if utrition control is is the filtering but there is filtering on the lens itself and then there's also in the
[1:11:39] software they deal with artifacts as well so we'll give it a couple of more minutes if you have any more
[1:12:51] questions and once again thank you all for attending this web inner series there's one more question what sort of
[1:13:44] artifact are you encountering because of the exposure in the uh data unfilter lots of different artifacts probably too
[1:13:59] too many to to to um summarize here um in the unfiltered data yeah I mean there's there's lots of filtering uh because of
[1:14:10] it I'm not sure how to answer that one directly yeah so I mean later on if if
[1:14:17] there's any document or any reference we can refer to we'll provide that or you can share with us uh so that people can
[1:14:25] read it if they want to what kind of artif artifacts there can be uh next question is how how to
[1:14:33] Aviation specific weather app assistant assist pilots and Aviation Professionals in navigating thunderstorm hazards avoiding uh turbulence and making
[1:14:45] informed decision about flight routes and schedules yeah my impression is that the aviation specific weather apps are are
[1:14:56] super helpful to pilots in the cockpit um and they provide a a great way to directly now that they all most of these
[1:15:04] big planes have Wi-Fi um it's a way to directly provide real-time updates um on weather conditions to the pilots and so
[1:15:13] I think when developers are are working to incorporate new observations into Aviation applications uh they're work with these weather apps because that's
[1:15:27] you know they want to meet the pilots where they are and so I think that's a very
[1:15:33] important very important Avenue um for collaboration and product development between you know researchers and pilots and and the the
[1:15:48] forecasters the next question is can the glm image electric structures above the cloud s like Sprites and
[1:15:58] elves typically Sprites and elves are too dim um in the the wavelength that we're at uh but we can
[1:16:05] see the characteristic flashes that we know to make these upper air lightning phenomena and so we can for instance we
[1:16:14] can look at a Flash and say if it's of a certain intensity then it's more or less
[1:16:20] likely to have produced a Sprite or an elv or a gigantic G J you know the other
[1:16:26] various Halos question 22 in a lightning prone area does installing lightning uh arresters uh planting tall trees reduce
[1:16:39] the risk of human exposure yeah I think the key here is is the human element um in places where
[1:16:49] lightning safe structures do exist um the the most effective means of keeping people people safe is making them aware
[1:16:57] of the threat both before it's presenting itself and especially during the the threat um time period uh but in
[1:17:06] places where there aren't lightning safe structures it's very important to install um lightning arresters U Dr marann Cooper is doing tremendous work
[1:17:16] with the ACL ACL ACL net in Africa where they're installing lightning protection on schools um because these schools
[1:17:26] aren't aren't safe and so when when there's thunderstorms in the area often times parents would keep their parents
[1:17:34] home or keep their kids home with them rather than sending them to a school that might be um at risk from lightning
[1:17:42] and so in those places where they've installed even just one building the the local school where they've installed
[1:17:49] lightning protection it's been tremendously popular and so if you're interested in that and the lightning safety safety I I definitely recommend you look into
[1:17:57] aclet and maryan Cooper and the work they're doing can be replicated in other places for sure great uh question 23 what
[1:18:09] accessibility features to WEA apps offer to ensure that individuals with visual or hearing impairments can um timely
[1:18:21] receive timely information and alerts about thunder storms I'm not sure about the specifics of the weather apps what I can speak to is our
[1:18:31] lightning safety campaigns um they've taken they've taken um they've taken an action to make the the lightning safety message more
[1:18:42] accessible and so I I don't know of specific examples but I know that they've they've released things that
[1:18:47] were specifically target targeted at individuals with visual or hearing impairments um to help inform them the lightning threat and the tools and
[1:18:57] information that's available to them ahead of the time um I can't speak as well to in real time but I imagine the
[1:19:04] weather service has enabled um this type of messaging they they do their best to not leave anybody out so I I would think
[1:19:12] that's a safe assumption that they've at least the Weather Service messaging includes includes some some increased accessibility and I
[1:19:21] don't know about the weather apps themselves but I imagine you know good business they would be doing
[1:19:42] that think these are some of the great questions and thank you so much for answering them Dr
[1:19:48] vlosi um we will be posting this question and answer document on our website as well on the training
[1:20:06] page one more question is has anyone tried sonification of lightning data um I'm not sure I'm not sure what
[1:20:22] that that means maybe if they're talking about um dealing with the audio rather than the the radio metric or
[1:20:34] the or could be sound they're talking about yeah I I have seen some recent studies that have looked at how the
[1:20:42] sound from lightning propagates and how that differs um in urban and rural settings and I think there is that's an
[1:20:48] area that may be ripe for research could be that there's already existing networks of microphones that have been
[1:20:54] picking it up that would be very ripe data sets to to study for a specific purpose I'm not sure what that purpose
[1:21:01] is right now but I'm sure there's a number of them so we are getting close to the end time
[1:21:37] for this webinar series um we just have couple of more minutes if you have any questions otherwise we thank you for
[1:21:46] attending uh this webinar cies and we look forward to your survey response e so if if we still have a couple of more
[1:22:41] minutes left if there are any uh questions you can put them in the chat box so if there no more questions thanks
[1:22:55] again for attending this webinar and we hope to see you in our next arset training we have one more question what
[1:23:08] is the wavelength used with glm is it reacting with oxygen in the atmosphere the glm's at 77 7.4
[1:23:23] nanometers thank you everyone so we'll be closing uh this webinar and uh please visit the training web page for the
[1:23:53] homework yeah so how frequently we can have glm images for a particular area I think it's been
[1:24:12] mentioned continuous continuously observing within its field of view so um the data comes down every 20 seconds the
[1:24:19] grided products are produced every minute
