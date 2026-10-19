# Synthetic Aperture Radar (SAR) Refresher, Part 1/5

`https://www.youtube.com/watch?v=2SGP30TGHXM` · id 83 · 2:36:46 · module 20 — Crop Mapping using Synthetic Aperture Radar (SAR) and Optical Remote Sensing

[00:00] hello and welcome to this webinar series on agricultural crop classification with synthetic aperture radar and optical remote sensing
[00:09] i'm arset trainer erica podest i'm also a scientist at nasa's jet propulsion laboratory laboratory this webinar series has five sessions
[00:19] and we've had the participation of amazing guest lectures from agriculture and agri-food canada the european space agency and the research and user support
[00:30] from copernicus we've also had the support from our trainers sean mccartney and amita mehta to put this training together
[00:40] today's session is a refresher on synthetic aperture radar touching on specific aspects related to agriculture agriculture our guest speaker is dr heather mcnair
[00:52] from agriculture and agri-food canada before we start i want to give you a little bit of background about nasa's
[01:02] rsep program which is part of the applied sciences capacity building program program and the goal is to empower the global
[01:11] community through online and in-person remote sensing trainings right now they're just online because of the pandemic pandemic and we have four thematic areas water
[01:21] resources air quality disasters and land there is a new thematic area that is will be coming soon which is on climate
[01:29] and energy our set's goal is to increase the use of earth science remote sensing data as well as model data in decision making
[01:41] through trainings that are targeted to professionals in the public and private sector sector environmental managers policy makers but
[01:50] also for those in academia or anyone really interested in using remote sensing for their specific application all arsene materials are freely
[01:59] available to use and adapt for any sort of curriculum and if you do use our set methods and data
[02:08] presented in our trainings we ask that you acknowledge the nasa rsat program the training format there are five
[02:19] sessions and each one is two and a half hours long and that includes presentations and question and answer sessions
[02:27] the same content will be presented at two different times each day so session a will be presented in english and
[02:34] session b will be presented in spanish the training materials and the recordings will be available through the
[02:43] web page for this training the homework and certificate there will be one homework assignment associated with this training and all answers must
[02:55] be submitted via a google form the due date for the homework is november 2nd of this year
[03:04] and a certificate of completion will be awarded to those who attend all license sessions sessions and complete the homework assignment by
[03:13] the deadline expect to receive the certificate of completion around two months after the completion of the course and you'll be
[03:22] receiving the certificate from marines martens the prerequisites for this training are the fundamentals of remote sensing and
[03:33] introduction to synthetic aperture radar so you can find both links on this slide the training outline today we will
[03:44] provide a refresher on synthetic aperture radar on thursday october 7th we'll provide a refresher on optical remote sensing as
[03:52] well as an introduction to snap to the snap software on next tuesday on october 12th we'll we'll introduce a road map to operational crop
[04:05] classification using optical and sar imagery so that's going to be two parts first one is next tuesday and the second
[04:14] part of that road map will be presented next next on thursday october 14th and finally on october 19th the last
[04:23] session that's going to be focused on biophysical variable retrievals using optical imagery to support agricultural monitoring practices
[04:35] the training objectives of this training is to learn the physics behind sar image formation formation the interaction of the sars signal with
[04:43] the land surface the impact of soil and crop characteristics on the sar signal signal and the optimal sensor parameters for
[04:53] agricultural applications now i'll hand it over to dr heather mcnair as mentioned she's a scientist with agriculture and agri-food canada
[05:05] and she is an expert in the use of synthetic aperture radar for agriculture this is her third rsat training so we're
[05:15] extremely pleased that she is once again sharing her incredible knowledge and expertise with our set participants thank you very much dr mcnair and
[05:25] welcome thank you for that introduction and i just want to remind everyone that what i plan to do in this webinar is to
[05:41] give a refresher of some of the basics around radar and then we will discuss some of the
[05:46] applications of radar to agriculture and if you have any additional questions or or pieces of information that you're
[05:55] looking for i encourage you to go back and revisit some of the previous rsi training training so let's get started
[06:03] in reviewing some of the radar basics so i want to begin by reminding everyone about the differences between microwave
[06:12] remote sensing and remote sensing in other parts of the electromagnetic spectrum spectrum so recall that microwave remote sensing
[06:22] is dealing with wavelengths on the order of about one centimeter to one meter and we can refer to these microwave
[06:30] regions either by their wavelength or their frequency and frequency wavelengths are used pretty interchangeably interchangeably in the
[06:40] radar remote sensing literature and on the right hand side i have a table that illustrates the wavelength frequency
[06:51] of different regions of the microwave region region however i'd like to just provide a little bit more context
[06:59] about the scale of these microwave weights weights and to do that i just invite you to take
[07:05] a look at the diagram the picture that i have on this slide and i also invite you to extend your
[07:11] arms out just like i have in this illustration illustration and we're going to use the tips of our
[07:17] finger of our fingers as our starting reference point if i measure from the tips of my finger
[07:23] to about halfway up my finger about where your knuckle would be that is approximately the size of an
[07:29] x-band microwave if i move my my hand at the wrist from my fingertip to the wrist that's about the scale of a
[07:39] c-band c-band microwave microwave and bending at the elbow fingertip to elbow elbow is approximately the length of an l-band
[07:48] wave wave and if i shrug my opposite shoulder fingertip to opposite shoulder is about the upper limit of what a
[07:56] p-band wave wavelength is so you can see that the scales that we're dealing with in microwave remote
[08:04] sensing are much different than optical and even between x-band and p-band we have quite a range in terms of scales
[08:12] and that's going to become important when we talk about how microwaves interact with targets so just keep this diagram and this
[08:19] uh this difference in scale in mind so radars are active systems and that simply means that they generate their
[08:29] own source of energy and radar is an acronym and that acronym radio detection and ranging ranging tells us pretty much everything we need
[08:38] to know about a radar sensor so radars do two things the first thing that radars do is that they detect
[08:46] so a radar will send or propagate a microwave or radar radio signal with known properties we know a lot
[08:54] about the signal that a microwave antenna sends we know its polarization its frequency we know the angle that it's propagated
[09:04] at and we know how much intensity and phase is associated with that wave that's propagated um then the microwave signal interacts
[09:13] with the target on the earth and energy is scattered back and recorded by the sensor sensor and just keep in mind that it's not just
[09:21] the intensity of energy that is recorded by the radar antenna but it's also other characteristics about that scattered
[09:28] wave wave such as its phase for example but radars have another important role and these sensors also range the target
[09:39] what that means is that radars measure the time that it takes a microwave signal sent from its antenna
[09:45] to travel to the target to the earth and then return back to the antenna and this is really important information
[09:53] for radar systems because this information in terms of time allows the radar to to range and locate
[10:03] the target on the earth and that ranging is accomplished through this simple equation where the range or
[10:11] distance distance in meters or kilometers from the radar antenna to the target is a function of the speed of light and
[10:18] the time that it takes that signal to re to to go from the radar antenna to the earth's
[10:24] surface and back again so we divide by two because that's a two-way trip for that microwave we're going to review as well
[10:33] the properties of radar systems we'll start with frequency and wavelength but i'll also touch upon polarization and incidence
[10:43] angle but let's start with frequency and wavelength wavelength the wavelength of a microwave is the the length of one wave cycle and
[10:53] i have a simple diagram of a sine wave we have the resting position of that wave and this sine wave which is
[11:01] propagating through space and time and the wavelength is simply the distance from one point on uh the first wave to the
[11:11] subsequent equivalent point in that the next wave form so here we're measuring it from the peak of one wave to the peak of the
[11:20] subsequent wave but just a reminder that can be wavelength can be measured from any point on one wave to the subsequent
[11:28] point on the next wave um so frequency is another way that we characterize characterize microwaves so frequency is measured in
[11:38] hertz hertz and frequency represents the number of oscillations per unit time and and microwave and frequency are inversely
[11:48] inversely related and i've provided just a little schematic here to remind you of how to convert between wavelength and
[11:57] frequency through the speed of time and a reminder that frequency in hertz for example one hertz being one
[12:05] cycle per second so if we had three hertz that would be for example three cycles per second
[12:11] so as i was mentioning we refer to microwave waves either by frequency and wavelength and we can easily convert one
[12:19] to the other let's look a little bit more at the anatomy of a wave so i have a sine wave that is
[12:27] propagating gain over space and time and i draw your attention to this black horizontal line which i'm going to refer
[12:34] to as the resting position of that wave and i wanted to just review what amplitude and intensity
[12:41] means when we talk about microwaves amplitude is the maximum displacement from this resting position to the maximum position on this wave so
[12:53] this arrow represents the amplitude of this wave intensity is the average power transferred over one period of wave of
[13:02] the wave and intensity is simply the amplitude squared squared so i've come up with this little uh
[13:09] diagram to just just re-emphasize uh what we mean by amplitude and intensity so i have this quiet uh chirping bird um and and the
[13:23] waves generated by this quiet chirping bird are outlined uh in represented by this red wave and i have this loud mouth
[13:32] bird outlined in green and the wave generated by that loudmouth bird is represented in green and we're going to assume that these
[13:42] birds birds start to chirp at exactly the same time and they chirp at the same frequency so
[13:47] for example maybe they chirp once every 10 seconds and what we see is that the amplitude and the intensity of these waves are
[13:55] quite different and you can imagine that the intensity and energy used by this loudmouth bird to generate this red
[14:03] weight this uh green wave is is quite a bit bit greater than the intensity used to create
[14:10] create this the wave generated by this this quiet bird so just keep this diagram in mind as well when you're thinking about
[14:17] uh the difference between the intensity generated by different radar antennas so we've talked about the wavelength or frequency
[14:28] of a wave and the intensity and the amplitude another really important characteristic of waves um is represented by the the phase of the
[14:38] wave wave and phase is simply the position of a point in time on a waveform cycle and we
[14:45] can measure phase by either degrees or radians so it's the waves position in time or space space and on the
[14:54] right hand side of this graph graph i'm of this slide i'm showing a couple of waves that have been uh generated so
[15:03] let's just talk about this red wave for example so this red wave obviously has an amplitude or intensity but it also has a phase so
[15:11] i can pick any point along this red wave and describe the position of that wave in time or space by its phase
[15:22] uh we can also look at phase uh the phase of one wave relative to the base of another wave um
[15:29] so as i said we've generated this this red red waveform waveform and we've delayed uh in generating this
[15:37] blue waveform and if we just take a look at where where this red and blue wave form cross its resting position you can
[15:44] see that there is an offset in time or or in space in terms of when this red wave crosses
[15:51] its resting position and when the blue wave crosses the resting position and this difference in time or in in
[15:59] space is the phase difference between these two waves so we would consider waves to be in phase
[16:06] phase if their origins at phase 0 degree are perfectly aligned and we can see that that's not the case and unless there's a
[16:12] phase difference between these two but interestingly even though these waves have different phases they have equal amplitudes or equal
[16:22] intensities intensities uh contrary to our quiet bird and our loudmouth bird those two birds as we talked about have are generating
[16:31] different different waves of different intensities but you can see that both the green and the red wave cross at resting position
[16:40] at the same time so these two waveforms have different amplitudes but they have the same phase so why is space so important in radar
[16:49] there are many reasons why phase is important important phase is important for interferometric applications of radar and we need to
[16:57] know the phase if we want to generate parametric radar data sets as i mentioned at the beginning when we
[17:06] generate a phase we know when we generate a wave we know a lot about the wave we know the intensity the
[17:12] frequency of the wave the incidence angle the polarization and we know the phase of that wave that's being
[17:17] generated as well but when a wave interacts with the target lots of things happen and one of the things that happens
[17:26] when a wave interacts with a target is that the phase can change depending on the structure of the target so if we
[17:32] send it a wave of a known phase and that wave comes back with a phase that's altered
[17:38] altered that gives us clues about the target so we can exploit that in our data analysis analysis and as well when we're generating a
[17:47] phase using a radar antenna the offsets in phase can determine how a wave propagates so let's move on and talk about the
[17:59] polarization associated with radar microwaves microwaves um so a electromagnetic field is a synchronized oscillation of an electric
[18:10] and a magnetic field which propagates at the speed of light and so a electromagnetic wave propagates because
[18:19] the electric field recreates the magnetic field and the magnetic field recreates the electric field and so what that simply means is that we
[18:28] have both an unlike magnetic and electric field which are coupled together together um as this wave propagates at the speed
[18:36] of light in microwave remote sensing the reference that we use for polarization is the orientation of the electric field
[18:47] of that em wave so that's identified here here outlined in red so let's talk a little bit about how
[18:55] waves propagate and as you recall i mentioned that phases one of the reasons phase is important because
[19:01] differences in phase will change how a wave propagates and i'll remind everyone that most waves that we find in ambient in the
[19:13] environment for example sunlight most of those waves are elliptically polarized polarized and these waves are like are
[19:22] elliptically polarized because there is an offset between the vertical and the horizontal components of the em field
[19:31] field and that offset is something other than 90 degrees and when we have an offset between horizontal and vertical components um
[19:41] uh at a difference other than 90 degrees we have this elliptically propagating wave wave and that phase difference causes the
[19:51] way to to rotate as it propagates through space and if we trace the the tip of the
[19:58] electric electric field vector of this propagating wave that that wave will outline the shape of an ellipse so most waves ambient that we
[20:09] find in the environment are propagating with this type of polarization in radar remote sensing we are pretty
[20:16] accustomed to using linear polarizations and and traditionally sar sensors are propagating and receiving energy at a horizontal or
[20:26] vertical linear polarization and these waves are special cases um of uh of a waveform where the difference between the
[20:37] vertical and the horizontal component of vm field is zero so there's no phase offset and that wave
[20:44] propagates in a plane there are some new sensors uh satellite radar sensors which are propagating energy with using circular polarization
[20:55] so in some cases you can select a circular polarization as a polarization on these these new new radar systems
[21:05] and these circular polarizations are generated by a radar antenna when the vertical and horizontal components of the em field are have an
[21:15] equal amplitude but they are specifically 90 degrees out of phase and again because there's a difference in phase between the horizontal and
[21:23] vertical components that causes that propagating wave to rotate and this time when we trace the shape of that
[21:34] electric electric field vector as it's propagating through space and time that vector is tracing the outline of a
[21:41] circle okay so we've talked about how we can generate waves of different polarizations traditionally linear but um
[21:52] um in in newer systems we can also select circularly polarized waves but we're not just generating waves from
[22:00] a radar antenna we're also receiving waves that come back to us from the interaction with a target
[22:09] so as i said we send of a fixed polarization so we know what the polarization is and we're measuring
[22:16] both the intensity and the phase of the energy that's scattered back and i just want to remind you that
[22:23] even though we send microwaves out with a fixed polarization so let's say for a sake of argument we sign out a
[22:30] horizontally horizontally linearly polarized wave that wave will scatter in many different ways especially with distributed targets like vegetation
[22:41] and we will get many different changes in phase and and many different scattering components in in many different directions and so
[22:50] there's a lot of different scattering that occurs with these distributed targets targets what their radar antenna does then is it
[22:56] listens but it listens for something very specifically it's it's listening to find out and record how much energy that is scattered back
[23:06] to it in a very specific polarization so for example we can send out a horizontally polarized wave from the
[23:13] radar antenna and we listen and record for how much of that energy comes back in a horizontal
[23:20] orientation so as you know we have light polarizations hh and vv and cross polarizations uh where we send
[23:29] out for example horizontal wave and measure how much comes back vertically but bear in mind that there's a lot of
[23:36] scattering that will occur in many different directions so we've talked about the polarization as well as the
[23:44] frequency and the um the wavelength and the third way that we characterize radar wave propagation is the incidence angle
[23:55] so incidence angle is the angle between the radar beam and a perpendicular to the image surface and that's identified in this diagram so
[24:04] we have a radar beam and we have a a perpendicular and normal to the earth's surface and this
[24:11] represents the incidence angle and just like polarization and frequency incidence angle has some really important implications for
[24:21] radar remote sensing this angle determines a number of things it will determine the contribution of different target elements to backscatter
[24:31] angle also determines how rough a target appears to the radar so that smoother surfaces will appear smoother at larger
[24:39] angles angles an instance angle also determines how deep the microwave signal penetrates into the target and we will explore some
[24:47] of these in greater detail both in this this radar basics part but also when we talk about applications of
[24:54] radar to agriculture so let's delve a little bit more into incidence angle backscatter decreases within increasing incidence angle this is a fundamental
[25:06] concept concept a fundamental property of propagating energy energy so that's that's fundamental however the rate and the function of
[25:17] decrease decrease in backscatter with incidence angle is target specific and as a result when a radar is viewing
[25:26] the same target at different angles the back scatter will be different so let's explore that with this diagram
[25:32] and this this picture i have on the right right so when we look at this this graph we see that we have
[25:39] increasing incidence angle in degrees and we have increasing back scatter on the y-axis and just before we get into the details
[25:48] we see that regardless of the target that there is a fundamental decrease in backscatter as angle increases
[25:57] but i've i have three lines uh three functions and we can see that the rate of decreasing backscatter
[26:05] within increasing instance angle is not the same for all targets so there's a difference in the rate and the function
[26:12] of those that drop off and back scatter with angle angle and most satellite star systems are operating in
[26:21] about 20 degrees to about 50 degrees but you can see that even within that instance angle range there is a
[26:27] difference difference in in box scatter with angle so what that means is that regardless of the target
[26:34] or any changes in the target we will see this this changing in backscatter backscatter so for example for a smooth surface like
[26:43] the one i have um outlined here so this is a pretty smooth agricultural field um as incense angle decrease
[26:51] increases the back scatter from this target will um will decline simply as a function of this this fundamental
[26:59] relationship relationship um um if i have a surface that has more roughness to it such as this one on the
[27:07] left left that rate of decline is uh is not as significant significant so that means that these two targets
[27:14] will look different um fundamentally because of the changes in incidence angle and if i image either of these targets at different instance
[27:22] angles the back scatter will be different regardless of any changes in the target i want to talk as well about the local
[27:32] incidence angle and to remind you that the local instance angle is not the same as the incidence angle
[27:39] local incidence angle takes into account the local slope of the train such that slopes towards the radar the
[27:47] local instance angle is less than the normal incidence angle assuming a flat surface so that's a bit of a mouthful um
[27:55] so i'm going to take you to this diagram on the upper right so we have a radar antenna
[28:00] propagating a microwave towards uh towards the earth and let's just focus on an area in this target where the topography is pretty uh
[28:11] is pretty flat and again if we uh draw our normal to the earth's surface and measure the
[28:18] angle between the radar beam and that normal this is our incidence angle but you can see on the slopes facing
[28:25] towards the radar antenna if i again use draw normal to the earth's surface and look at the angle between the radar
[28:32] beam and that normal the incidence angle is smaller so recall the graph that i just showed you there's a fundamental
[28:41] decrease in scatter as incidence angle increases um so what does that mean it means that these forward facing slopes for example
[28:51] the incidence angle is is smaller and that means that there's a difference in the back scatter for those those forward um
[29:01] those forward slopes and this matters because if we look at this picture at the bottom we have an
[29:07] agricultural field so it looks like this is a field that has been harvested uh the field looks to my eye looks
[29:16] pretty much the same across that uh that field but we have some rolling topography topography and what this incidence angle effect
[29:24] means is that if i am imaging um slopes that are facing towards the radar antenna that the back scatter will be higher for
[29:32] these forward-facing slopes than for example example areas of this field that are flat to the radar so even though this field is
[29:43] the target itself is the same across the field we will have differences in backscatter due to changing incidence
[29:49] angle because of this this effect this fundamental effect okay we're going to move on now talk a
[29:57] little bit about radar geometry so recall that radars are side looking instruments this is an important characteristic of radar we need radars
[30:06] to be side looking so that we can locate and range the target we have two two directions
[30:15] directions in radar remote sensing we have the azimuth direction which is the direction parallel to the flight path if we're
[30:23] talking about an aircraft or parallel to the orbit of a satellite and then the direction which is perpendicular to this
[30:33] azimuth direction is the range direction so we have two directions azimuth and range but we also have two different
[30:40] um resolutions which we're going to talk about as well an azimuth resolution and a range range resolution
[30:49] so radars uh so this is a radar system propagating its microwave to the earth to the target um and and the slant range
[30:57] is the distance between that radar antenna and its target so we characterize characterize this as the slant range which is the
[31:06] natural viewing geometry of a radar system system if we um if we project that plant range onto the
[31:16] geoid of the earth this is now the range the ground range distance and direction and i raise this because when you are
[31:29] downloading or ordering radar data you can order data in in either slant range or ground range often
[31:36] but be aware it's important to know whether the applications that you plan to apply to the radar data will
[31:44] some of those will only be appropriate in in slant range now um let's talk a little bit more
[31:51] about the radar geometry so again i mentioned we have an azimuth direction which is the direction um
[31:58] parallel to the flight path of an aircraft or parallel to the satellite orbit orbit the radar antenna is propagating microwave energy
[32:10] perpendicular to that azimuth direction in the range direction slant range is the natural viewing geometry of the
[32:16] radar radar and and ground range is the slant range projected onto the earth geo8 we also have what we call a near range
[32:28] in a far range um and i wanted to uh talk a little bit about this because this also has an impact on incidence
[32:36] angle angle um so the the incidence angle changes from the near range to the far range as
[32:43] we move across that swath so recall incidence angle is the angle between the radar beam and a normal to
[32:49] the earth's surface but that incidence angle changes from the near range to the far range such that at uh
[32:58] in the near range we have a smaller or a steeper incidence angle and in the far range we have a shallower
[33:06] or a larger incidence angle so for example we may be moving from 20 degree incidence angle out to 50 degree
[33:13] incidence angle so that angle changes across the swath and that's important as i was just saying because
[33:23] that will that change in instance angle will fundamentally change the radar back scatter regardless of the condition of
[33:29] the target so it's important to keep in mind that there's a change in angle across the range
[33:37] uh something that you will note if you look at slant range data as well is that there is compression um in the targets
[33:46] displayed in slant range so remember slant range is the natural viewing geometry of the radar that's how the
[33:51] data is collected by these microwave systems systems but the distances are compressed relative to their true ground range
[34:00] distance distance the degree of compression is a function of the distance from the antenna to the uh to the target in slant range to
[34:10] illustrate that i i drew this diagram so we have two fields field a and field b so if we look at the ground range
[34:19] so the true geometry of these fields these fields are the same size on the earth's surface but if we project those up onto the
[34:29] slant range we can see that both fields field a and field b that the uh both the
[34:36] the size of those fields are compressed but the but field a is more compressed because it's closer to the radar antenna
[34:42] in slant range than field b so uh to illustrate that i'm just displaying here a slant range image
[34:51] so if you order a slant range image you will see this compression the degree of compression depends a lot
[34:57] on the size of the swath uh in in range direction so this is a radar set to image
[35:05] so the swath of this radar set to quad pole image is pretty small it's about 50 kilometers from this is the near range
[35:13] in this image to the far range so it's about 50 kilometers across range um but i will draw your attention to
[35:21] this field to this uh this river system so we have a a small river and then a couple of
[35:27] tributaries that uh that branch off from this main river so there's some compression happening especially in the
[35:37] near range due to this slant range view of the earth it's pretty easy to convert from slant
[35:45] range to ground range we can do that through resampling this requires knowledge of the imaging geometry the
[35:52] platform altitude the range delay and you need information on the terrain elevation as well for example a digital
[35:59] elevation model most commercial or open source software have have an algorithm or tool that will gather up all of this
[36:09] information from the metadata or the header information on the radar data and we'll apply this slant to ground
[36:16] range conversion for you and so now we can pick compare in the ground range we can look at this river
[36:22] system system so the main river and then a couple of tributaries and we can see that um
[36:28] the display and grounding range now reflects the true ground geometry of this river system uh so pretty easy conversion from slant
[36:38] range to ground range so let's go back and visit a little bit about incidence angle now that we've
[36:45] talked about uh near range and far range so remember i talked about the fact that the incidence angle changes from the
[36:54] near range to the far range and that change in incidence angle from near to far range depends on the
[37:00] um um depends on the uh the radar mode itself but also that range um the size of the
[37:09] range distance so for large uh swath modes and you can think of scancer as being an example of
[37:17] that that um these are very large swaths 300 500 kilometers in range direction there is a pretty significant change in incidence
[37:26] angle from the near range to the far range so in this example uh is showing for that for a wide swath
[37:34] radar mode we could have a near-range instance tank of 20 degrees in a far range instance angle of for example 45
[37:41] degrees degrees and thinking back to that graph that i showed earlier fundamentally the backscatter changes because because incidence angle changes
[37:51] so this is important if we have a target in the near range in the far range that
[37:55] are similar and i'll use a corn field as an example if we have a corn field which is in the same growth stage has
[38:04] the same amount of biomass it's the same height for example um if we have a field like that in the
[38:10] near range and we have a field like that in the far range those fields are exactly the same
[38:16] the back sky will not be the same for those two fields because of this change in backscatter due to incidence angle
[38:24] so we have to think a little bit about that when we're using white swath uh radar data
[38:29] uh for classification for example you can think about collecting training data in the near range and training data in
[38:34] the far range so that you adequately represent the back scatter for those corn fields or if you're doing modeling you have to
[38:43] make sure that you have some way to compensate or to model the the impact of incident saying go on radar back scatter
[38:51] another thing i wanted to talk about is this issue of satellite revisit versus satellite relook so revisit is when a satellite image is
[39:02] a point on the earth in the exact same geometry so we can think about as an example radar set 2
[39:10] has an exact revisit of 24 days so that means that every 24 days if we select the same radar mode
[39:17] that satellite will look at my target with the exact same geometry the exact same incidence angle but of course sometimes we don't want to
[39:25] wait for the revisit we want a more temporary rich data set and in that case we want to steer the
[39:33] radar radar antenna to look we look at our target more often than every 24 days for example
[39:41] example so yes we can electronically steer our radar beam to re-look at the target more frequently frequently but we have to keep in mind that these
[39:48] re-looks will likely have a different uh incidence angle so again that incidence angle is going to impact the radar back
[39:55] scatter scatter so we have to think a little bit about this especially when we're we're trying to do multi-temporal analysis or change
[40:02] detection we have to be careful about this incidence angle impact so if we're going to combine imagery if
[40:08] we combine imagery with the same incidence angle that will ensure that changes that we see in backscatter are
[40:14] are fundamentally related to changes in the target and are not being driven by this this um this fundamental characteristic of
[40:22] dropping drop in backscatter due to angle angle and if you are combining data with different incidence angles
[40:31] as i said you have to think about how are you going to model or compensate for that change
[40:38] let's move on and talk about uh the resolution of radar data and just recall that that the spatial
[40:46] resolution of radar data is not determined in the same way that that optical resolutions are and we have to get comfortable with the
[40:56] fact that the resolution of radar systems have nothing to do with how close or how far away the antenna is to
[41:04] our target so resolution in radar is determined in a in a much different way we're going to talk about range
[41:12] resolution and then we'll move on to the azimuth resolution so as a reminder range is that distance or direction perpendicular to
[41:23] the flight path or the orbit of the satellite satellite and remember we're talking about slight range because that's the natural viewing
[41:30] geometry of the radar system so how is slant range resolution determined that resolution in the range direction
[41:38] is related to the bandwidth measured in hertz so there's an inverse relationship between bandwidth and range resolution
[41:51] resolution so what is this bandwidth in hertz well bandwidth is inversely related to the pulse duration tau represented in this
[41:59] case case and the pulse duration simply is the time that the radar's transmitter is energized during each
[42:07] cycle cycle so there's this relationship if we have a large bandwidth we have a short pulse duration and a short pulse
[42:15] length and that provides a finer resolution so this diagram provides a convenient way to look at that
[42:23] with a wide bandwidth provides a short pulse duration and a finer finer radar resolution in the range direction
[42:34] uh so recall we were talking about how radars send out pulses of energy and they listen so i always think about it
[42:41] this way we sent out a short pulse of energy we wait and we listen for the echo that comes back from the target in
[42:48] between these transmitted pulses so it makes a lot of sense that for radar to be able to distinguish between
[42:55] two targets the echoes that come back from that those two targets have to come back at different times
[43:03] so if we look at the diagram on the right we have two buildings building a and we have building b
[43:11] so in this case um in order for the radar to be able to distinguish between um building a
[43:17] building b remember we want to range or locate them but we also want to know what the intensity
[43:23] um or or backscatter properties are of these two buildings if we send out a pulse um for the radar to hear the echoes from
[43:34] building a building b separately we don't want them merged together the distance between building a and building b
[43:42] in slant range must be larger than half the pulse length so the pulse length l divided by
[43:48] 2 because we're sending and then we are receiving receiving so the range resolution is equal to l
[43:53] over two half that pulse length we can increase the range resolution um by uh improving or increasing the
[44:03] bandwidth so we saw that earlier um and and just recall if we have a larger bandwidth uh we're reducing the
[44:11] length of the duration of the pulse of the radar shorter wavelengths will enable higher bandwidths so this is why on x-band
[44:19] radar versus l-band radar we have a difference in the resolution uh there there's another technique called pulse compression which is a
[44:29] signal processing technique that can be applied to improve upon sort of this fundamental relationship between the pulse length and the range
[44:38] resolution okay so uh let's talk about the other dimension which is the azimuth direction dimension so this is the resolution in
[44:49] the a long track um dimension the the uh dimension that is parallel to the flight direction or orbit
[44:57] and we're going to talk about a real aperture radar to begin to begin with to simplify simplify the description of the azimuth
[45:05] resolution and then i'm going to talk about the a synthetic aperture radar so the azimuth resolution depends on the beam width and the range
[45:16] so remember the range is the distance from the antenna and slant range to the target target and this beam width is related to the
[45:25] radar wavelength and d which is the physical length of the radar antenna so we're going to really focus on this
[45:32] physical length of the radar antenna and what this relationship tells us is that we can improve our azimuth resolution with a
[45:41] longer antenna however you can imagine that designing building building launching deploying operating a very large antenna in space can be uh
[45:53] engineering a challenge and can be quite prohibitive prohibitive so this d parameter this antenna length is really
[46:01] limiting limiting um how we can improve our azimuth resolution so if we're limited by the physical length of the antenna what can
[46:10] we do to improve the azimuth resolution so that's where the synthetic aspect of sar comes in so in the 1950s
[46:21] there was a realization that the doppler shift of the echo signal could be used to synthesize a much longer larger aperture
[46:31] to improve the resolution of a side looking radar so another multiple uh in in the radar basics so let's talk a little
[46:41] bit what this doppler shift is all about and to do that i have a very simple diagram on the right hand side of the
[46:48] slide slide so let's talk about the top diagram so i want you to imagine a bug and this bug is sitting on a pond of
[46:58] water water and this bug is in exactly in the center of this this pond of water and the
[47:05] distance from this bug to point a on one shoreline and the distance between this bug and point b on another shoreline this
[47:14] distance is exactly the same so the bug is exactly the same in in the center and the same distance from a and b
[47:23] now imagine that this bug starts to move its legs and at when it moves its legs it creates ripples or waves in this pond
[47:32] and we're going to imagine that this bug moves its legs at a set frequency so for example the
[47:38] bug moves its legs once every 10 seconds and it creates these uh these waves and because the bug is the same distance from point
[47:48] a and point b these waves one one wave every 10 seconds will hit point a and point b at exactly the same time
[47:58] okay so let's look at the bottom let's imagine that this bug decides that it's going to move and it will move towards a
[48:04] point b so the bug is still moving its legs at exactly the same frequency it's creating a ripple a wave in the pond
[48:14] once every 10 seconds so the frequency at which these waves are being created by the bug is the same
[48:20] but you can see that the bug is moving towards point b and this forward movement or this movement of this bug is
[48:27] changing the frequency of which these waves hit point b and you can see that the time between
[48:34] when each wave hits point b and the frequency at which these waves hit point b is increasing
[48:41] and this is quite simply an example of what we mean by the doppler shift and i have a little animation at the
[48:49] bottom here just to show this in sort of real time so we have a source of a wave think
[48:55] about a bug and you can see that as this source of the wave is moving um towards a forward observer
[49:03] that the frequency at which these waves are hitting that forward observer are increasing increasing and the frequency or the time between
[49:11] the waves hitting the back observer is is decreasing so this again is the doppler shift so now that we understand the doppler shift
[49:19] how is that used to improve the azimuth resolution resolution so of course we're not talking about bugs on the pawn we're talking about
[49:26] radars in in space but radars are also sending up constant pulses of energy so just like the bug moving once every 10
[49:35] seconds we have a radar sending out constant pulses out of some frequency and just like our bug on the pawn the
[49:43] radars are also moving they're orbiting the earth so what does that mean for targets on the earth so if we look at the diagram
[49:50] on the right hand side we see a red box so that's our target so as this radar is passing
[49:58] um is is moving over this target the first echoes of this uh radar um of this radar beam that is the first echoes of
[50:08] the uh radar that is set towards this target have a positive doppler shift so again think about our bug the fact that
[50:16] the pulses are increasing in frequency relative to the target target when the antenna is right over the
[50:24] target there is no doppler shift and then there's a negative doppler shift as the target exits the echo so
[50:30] think about the frequency at which the echoes echoes reach the target as um as a source of the energy is moving away
[50:39] that that frequency is decreasing okay so we understand the doppler shift we know that that can apply to orbiting
[50:49] satellites as well so how do we exploit that to create a improved azimuth resolution resolution uh so we're going to think about or
[50:57] we're going to look at this diagram at the bottom we have a ship we have a a
[51:02] aircraft with a radar on it setting up pulses of energy and we have these sub beams sub being a b c and d
[51:10] uh so sars uh record all of these doppler um shifts um as we are approaching upward shift in doppler zero
[51:20] doppler shift one right over the target and then a shift down in the doppler as we we as the
[51:26] target exits the final echoes of that radar system so the radar and the star processor record and exploit all of those signals
[51:36] and we record all of the signals for a set period of time from the time that the target first enters the very first
[51:42] echoes of the radar to when the target exits the final echoes of the target target of the um the microwave pulse
[51:51] so we record all of that for a period of time t from in this case points a to d
[51:57] and remember these all have these all these sub pulses all have different doppler ships these doppler ships are used to
[52:06] reconstruct a signal that would have been obtained if the antenna had a length equal to v which is
[52:12] the velocity of the radar antenna the aircraft or the the satellite and t which is the length of
[52:20] time time with for which those radar echoes are interacting with the target target making t large that time large so the
[52:29] time that the target is seen by the radar antenna makes the synthetic aperture radar quite large so now we're not talking about a
[52:39] real aperture radar a real physical radar we're talking about stitching together the knowledge of all of these
[52:45] doppler shifts to create a synthetic aperture aperture and now that we have this synthetic aperture which is quite large
[52:53] time which is equivalent to a long virtual antenna and a high azimuth resolution resolution so that the achievable and at the end of
[53:00] the day the achievable azimuth resolution is approximately equal to one-half the length of the real um the real antenna the real aperture
[53:15] so now let's talk a little bit about the radar reflectivity so as you recall i was talking about a radar system sending
[53:24] out one unit of energy that's a convenient way of thinking about the propagation of energy from a radar
[53:30] antenna antenna and recall we talked about the fact that if we send out one unit of energy and
[53:37] that microwave signal interacts with a distributed target especially vegetation vegetation we can have scattering in many different
[53:45] directions so even though we send out one unit of energy for most distributed targets we won't get one unit of energy back we'll get
[53:53] something less than one unit and we need a way to um to a metric to to measure this
[54:00] reflectivity and there are three uh ways to express reflectivity and we're we're going to go through those right now
[54:08] the first way is an expression uh called beta naught and beta naught is measuring the reflectivity per unit area
[54:18] so we can think about one meter by one meter for example but we're measuring that reflectivity that intensity per unit area in slant
[54:26] range and recall that slant range is the natural viewing geometry of the radar this diagram provides a
[54:35] great representation of these different reflectivities reflectivities and so beta knot is that reflectivity in slant range and it's represented by this
[54:45] this box outlined in black this is the default reflectivity of a radar because slant range is its natural
[54:53] viewing geometry and because we are working in slant range we do not require any knowledge of the local incidence
[54:59] angle angle however you will note in the radar literature that some scientists prefer to express reflectivity with
[55:09] the expression of gamma of gamma naught a gamma knot is again a normalized reflectivity per unit area again think
[55:17] about one meter by one meter but this time we are expressing that reflectivity in an orthogonal to the
[55:24] slant range so if we go back to our diagram this is uh the area outlined in red and
[55:32] colored in yellow so this is the gamma knot reflectivity per unit area expressed in a plane that
[55:40] is orthogonal to the slant range plots of gamma as a function of incidence angle tend to be more
[55:47] consistent than comparable plots using sigma naught and some researchers have found that gamma naught can reduce the incidence
[55:56] angle dependency of the radar back scatter scatter it's very easy to transform between these different reflectivities and i've
[56:05] provided those expressions on this slide the beta naught the natural viewing geometry and reflectivity of a radar
[56:14] radar we can transform beta naught into gamma naught using the tan of theta theta being the incidence angle of the uh the radar beam
[56:26] however most of the time in the literature we will see expressions of reflectivity using sigma naught so sigma naught again is a normalized
[56:37] reflectivity per unit area but this time we are expression expressing that reflectivity in an area that is
[56:46] illuminated horizontal uh in the ground range in the ground range uh direction direction and again if we go back to our diagram
[56:58] sigma knot is outlined in purple and shaded in gray so the reflectivity in the horizontal ground plane
[57:07] here we're assuming a flat surface so there's no topography incorporated in this expression and as i said it's a parameter that we
[57:17] it's a way of expressing back scatter or intensity that we most often see in the radar literature
[57:24] but we are impacted by local surface slopes because we are transforming this reflectivity from slant range to ground range
[57:33] and again we can convert between beta naught the natural viewing geometry and reflectivity of a radar into sigma naught through this
[57:42] simple expression the sine of theta which is the incidence angle of the radar i want to talk a little bit about this
[57:50] issue of decibels and y in radar we transfer transform our backscatter into decibels decibels and we do that because radars are able
[58:03] to measure the backscatter from targets that represent huge ranges dynamic ranges in backscatter and a convenient example of
[58:12] this is if we think about a water body and an urban area right on the coastline so the back scatter from our water body
[58:22] will likely be quite low so if i send out one unit of energy from my radar antenna very little of that energy will
[58:29] be scattered back if the water is is smooth and calm but in our urban area we'll have a lot
[58:35] of reflections a lot of double belt bounce scattering and we will have a great deal of that energy
[58:41] that we send out coming back to the radar so we have a huge range in intensities in backscatter
[58:48] in a single scene for example if we have a urban area next to a calm water body
[58:54] so we have these these great ranges in radar intensity so the radar measures that intensity as i said remember we're standing at one
[59:04] unit of energy usually for most distributed targets the amount of energy coming back is going to be a fraction of
[59:10] that between zero and one but to better represent the wide range in back scatters that we may get in
[59:18] our radar imagery we like to transform that back scatter measured by the radar-intended antenna in intensity units into a logarithmic
[59:29] scale scale expressed as decibels or db and it's quite easy to transform our intensity radar intensity data into
[59:40] the logarithmic scale to better represent these wide ranges in backscatter backscatter using the formulas that i've provided on
[59:47] this slide and i just draw your attention to uh there's a different formula if we're using amplitude or intensity so recall
[59:56] amplitude is the distance from the waves resting position to the maximum height of that wave and intensity is the the square of the
[1:00:07] amplitude so pay attention to how you transform your intensity to backscatter depending on whether your data is
[1:00:14] expressed in amplitude or in intensity i want to touch a little bit upon a speckle or noise in in radar data so
[1:00:24] this is very common the salt and pepper appearance of radar data so let's just talk a little bit about why we see
[1:00:31] speckle in in radar and i draw your attention to the diagram on the right hand side of this slide and
[1:00:37] we have two resolution cells or two pixels if you want to think of it that way so pixel 1 and pixel 2
[1:00:45] and we have some targets inside of each of these pixels and i'm just going to refer to these triangles as trees so
[1:00:52] let's assume in pixel 1 we have nine trees distributed in pixel one and we also have nine trees
[1:01:00] uh uh distributed in pixel two but you can see that they're not distributed in the same way
[1:01:06] way and recall that radars are coherent systems and what that means is that a radar does not only measure the amount
[1:01:15] of energy that's scattered but it also measures the phase of the reflected energy energy so the amount of energy that comes back
[1:01:24] from pixel one is a vector sum and it's a sum of both the intensity and the phase of each of these different
[1:01:30] scattering elements but the way that these scattering elements the intensity and phase adds up for from pixel 1 to pixel 2 is not
[1:01:39] always the same and you can see that the you can see the vector sum here so in
[1:01:43] pixel pixel one one just the way that these individual elements within the pixel line up we have a lower back scatter when we sum
[1:01:51] the intensity and the phase of these individual scattering elements and in pixel b the distribution is such
[1:01:57] that when we add the back the radar response in intensity and phase that we have a higher response so we can
[1:02:06] have have two resolution cells two pixels that have the same number of trees and we can have a different back scatter because of
[1:02:13] this this vector sum in intensity and phase so that creates this salt and pepper appearance in radar data
[1:02:23] as we know there are many different ways to deal with speckle and radar to help mitigate or reduce the effects
[1:02:30] of radar speckle we can multi-look the data so sometimes when you're ordering data you can make a selection between single
[1:02:39] look and multi-look data so that's one reason to select multi-look data is to reduce the speckle and we can also average either spatially
[1:02:49] or temporally keep in mind however if you multi-look or spatially average a radar image image yes you reduce the noise the speckle but
[1:03:01] that will be that will come at it at a cost and the cost is a reduction in the
[1:03:06] resolution resolution if we mult if we multi-temporal speckle average that's a different approach so in that case we are stacking
[1:03:16] um a temporal sequence of radar imagery on top of each other and we are averaging a pixel through time
[1:03:24] so that's a good way to reduce speckle without reducing the resolution but that it depends on the application
[1:03:33] and the purpose of the analysis being undertaken and whether temporal averaging over time makes sense for your
[1:03:39] application application so i think in some of the next the subsequent rset training you will learn a little bit more about spatial spectral
[1:03:50] spatial spectral um applications um so how to apply spatial filtering to reduce speckle speckle but i did want to touch upon multi
[1:03:59] looking because as i said when you acquire or order download satellite star imagery sometimes you have a choice between a multi-look and a
[1:04:10] single look image so what is this multi looking all about so let's start with talking about a
[1:04:15] single look image so with a single look image all of the signal that's returned from a target is used to create a single
[1:04:22] image image so the image has noise has speckle in it but it has the highest achievable resolution if we uh if we work with
[1:04:31] single look imagery however um we can also take independent images images i like to think about this as taking the
[1:04:40] the radar signal and slicing it up into different looks so we have different images of the same
[1:04:46] area um we can do that in in signal digital processing to create these subsets or these slices
[1:04:55] of the signal each of the subsets forms a separate image a separate look at the target but with a different
[1:05:04] looking at that target with a different angle so different slices but looking at the target with a different angle
[1:05:10] so what we're doing effectively is we're splitting that synthetic aperture d that we talked about when we talked about
[1:05:16] azimuth resolution and we're splitting it into l non-overlooking non-overlooking sections or slices but that means that each of those have an effective
[1:05:28] aperture length of d over l and the resolution is degraded by a factor of l so what that means in
[1:05:36] summary is that if we multi-look our image by five so we're slicing uh that single look image into
[1:05:44] different sub images if we multi-look by factor five we will reduce the resolution by a factor of
[1:05:51] five so this is the trade-off between noise reduction and resolution so multi-look imagery our independent images averages to create create it
[1:06:02] that are average to create a multi-look image so again they have um reduced speckle but at the expense of resolution
[1:06:09] so this is a trade-off when you're working with radar data that you will have to make and i just have a final slide on the
[1:06:17] basics part of this webinar to talk about radar geometric distortions and our sat previous training with our site
[1:06:23] covers this quite extensively so i just want to revisit it with one slide so we talked about radars or side
[1:06:30] looking instruments and because they're side looking instruments it can create some distortions in the radar response due to the the geometry of the earth
[1:06:41] in the extreme example for example depending on the angle of the the length the angle at which the radar
[1:06:50] is propagating its energy so it's its incidence angle um we can have if we have severe topography significant topography
[1:06:59] um it we can have a situation set up where the radar is not able to see um at
[1:07:04] the uh sort of the back side of the the topography so there's no signal that is returned from the the um
[1:07:13] uh the back end of this uh this topographic relief and that that forms a radar shadow um one strategy that you can try to
[1:07:22] overcome that uh that lack of information is to acquire data at a different um at a different orbit so you
[1:07:31] can look at ascending and descending and it may be that in one orbit you're able to see one side of the topography on and
[1:07:37] on another orbit you're able to see the other side so that's one strategy that could be could be exploited
[1:07:43] we have a couple of other distortions though though we have this distortion called foreshortening foreshortening and recall we talked about what radars
[1:07:51] do they range and they detect the location of their target by sending out a pulse of energy
[1:07:57] and measuring the time that it takes for that energy to come back and through the speed of light
[1:08:04] it can take that time and figure out exactly where its target is so imagine a case where
[1:08:12] we send out this pulsar radar and yes the radar hits the bottom of this this mountain area first and the
[1:08:20] top top second second but the time that it takes for that signal to hit the bottom and return and
[1:08:27] hit the top and the return is not reflective of the true geometry of the earth earth and what that happens what happens or
[1:08:34] how how that's manifested in the radar imagery is that this this forward slope is compressed so the geometry is not
[1:08:41] truly represented or the true geometry is not properly represented on the radar image image and of course the extreme example is
[1:08:49] layover and again remember the radar is detecting its target by the time it takes for the signal to propagate and
[1:08:56] come back again so in layover what happens is that um the radar beam beam hits the top of the topography before it
[1:09:05] hits the bottom of the topography and so the radar thinks because that signal comes back sooner that
[1:09:12] that this location on the earth is closer to it and that causes this layover effect so those are some
[1:09:19] things to think about uh in terms of geometric distortions and um and and radar imagery we're going to move now and talk about
[1:09:30] now we've kind of had a refresher of all of the basics about radar we talked about about wavelengths and frequency polarization
[1:09:37] incidence angle how resolution is the term azimuth and range let's talk a little bit about how radar
[1:09:46] responds to agricultural targets we're going to talk about soils and crops so let's start back at the beginning and talk about
[1:09:55] wavelengths and frequency so remember these are interrelated you can convert between wavelength and frequency using the the speed of light
[1:10:05] and i'm just reminding you of that conversion here with this diagram so i often get asked this question what
[1:10:11] is the best frequency if i want to map soils or crops and that is a difficult question to answer
[1:10:20] because it depends and remember we stretched out our arm at the very beginning of this webinar and we took a
[1:10:25] look at the scale between x c l and p band um and we have to think about
[1:10:32] about the wavelength of the propagating energy relative to the target so i like to say that everything in
[1:10:39] radar is relative so we have to consider the size of the target elements rate relative to the
[1:10:44] radar frequency so the target elements for example could be on vegetation it could be the size of
[1:10:51] its leaves the orientation of the leaves the size of the stalks these types of things so think about the size of these elements
[1:10:59] of the target and the scale of the frequency or wavelength wavelength to maximize scattering you know ideally we want to select
[1:11:08] wavelengths that are comparable in size or smaller than the elements so again it's a very relative relationship
[1:11:18] relationship we also have to ask ourselves the question is it important to penetrate into the target or is the goal to
[1:11:24] maximize scattering at the surface of that target so sometimes we think it's better to penetrate but that's not always
[1:11:33] beneficial beneficial and i'm going to talk about that in in just a second so the simple relationship is that lower
[1:11:41] frequencies or longer wavelengths will provide greater penetration so ask the question whether it's beneficial to have the energy coming from lower in the
[1:11:50] target or is it better to have that energy scattering from the top part of the target so and is the goal to maximize or
[1:11:59] minimize sensitivity to surface roughness roughness so low frequency wave will see a surface as smooth while a high frequency wave
[1:12:06] will see the same surface as rough and we're going to take a look at an example of that in just a second
[1:12:13] so what is the best frequency for agriculture as i said i get asked this a lot and it really depends um
[1:12:20] the one application that's a little bit clearer a little bit straight more straightforward is soil moisture and
[1:12:26] that's because generally we want greater penetration into the soil because we want to know the water in a bigger soil
[1:12:33] volume so longer wavelengths like l-band p-band that penetrate further into the soil are more beneficial and these longer
[1:12:43] wavelengths can also penetrate through a cropped canopy and get at the soil response response for other applications like crop
[1:12:51] classification and biophysical modeling so if we want to know something about biomass for example it really depends on
[1:12:59] the crop canopy so we have to think about where is it most beneficial for this scattering to
[1:13:04] come from is it the top part of the canopy is it the the central part of the
[1:13:08] canopy canopy and what is the size of that canopy so a corn canopy and a soybean canopy do not have the same
[1:13:18] biomass biomass and so if we use an l-band sensor to image a soybean versus a corn canopy you
[1:13:24] can think about the center of scattering will be different within those two canopies and we don't want
[1:13:33] so much penetration into the the vegetation canopy that we're getting contributions from the soil because that's just going
[1:13:40] to complicate any retrieval of the of the above ground canopy if we have this soil interference in the back scatter
[1:13:52] um so really in radar remote sense in in radar remote sensing applied to agriculture the integration of data from
[1:13:59] different frequencies is very very interesting and is probably the one radar parameter that will be the most
[1:14:08] beneficial to exploit and i'm just showing here a simple example of that so this is from a study
[1:14:15] site in in canada one of our major study sites in manitoba and and what we've done here is we have
[1:14:22] integrated integrated from from one date july 9th or july 10th and one polarization but with different frequencies so we have x-band from
[1:14:33] terrace rx c-band from radarsat-2 and l-band from alos so one polarization from each and all basically on within a day of each other
[1:14:46] and we can see that just with one you know one date of data we have significant differentiation between these different
[1:14:56] crop types and it's through this integration different frequencies that we are able to to separate one crop type from another
[1:15:06] and it's interesting because what you see uh if you just sort of stand back and look overall at this image we see
[1:15:12] that there's a lot of uh a strong response coming from from pterosaur x from the the x-band
[1:15:20] and because we're talking about x-band we have less penetration into the target and and that's interesting um you know i
[1:15:26] was looking at this corn field for example example uh where we have a pretty bright response from terrace rx for the corn
[1:15:34] and we see it this time of year the corn is during to tassel and so sometimes for
[1:15:39] example we want interaction at the top part of the canopy because that's where the fruit of the canopy is
[1:15:46] and sometimes that fruit development helps us distinguish one crop type from another another but we have other instances for example
[1:15:53] in canola where we have a lot of response from c-band radar sat and a bit of contribution from the l-band aloes as
[1:16:02] well well so it's really through how those different frequencies interact with the structure in these canopies that helps us to clearly identify one
[1:16:11] crop type from another so so you know multi-temporal data is the most important thing in in agricultural
[1:16:20] monitoring and then as i just demonstrated integrating data from multiple frequencies or wavelengths is a really good strategy for agricultural
[1:16:28] remote sensing using radar but let's talk about polarization because we also have an ability to select the polarization
[1:16:36] which we want to image these agriculture targets targets so we have to think again in a relative
[1:16:42] sense what is the polarization that the radar is propagating and what is the orientation of that transmitted microwave relative to the
[1:16:52] target component so again think about the leaves and the stocks of my target how are they oriented
[1:16:58] and you know in a general sense when we think about vegetation a lot of vegetation has a dominant vertical
[1:17:05] structure and that means that if we send out those linearly polarized waves at a v at a vertical polarization
[1:17:15] vertical orientation you can imagine that those vertically transmitted waves are going to align with these vertical structures and
[1:17:22] create more scattering if we send out a horizontally polarized wave less of that energy is going to interact with the vertical
[1:17:31] structure um and and we often see more contributions from the soil because there's less coupling of a horizontal
[1:17:40] wave with a vertical structure but what's most interesting in uh vegetation mapping is this cross polarization term
[1:17:50] so remember i said if i send out a horizontally transmitted wave and it interacts with vegetation i get
[1:17:56] scattering in many different directions and we can we can exploit that scattering in different directions using the cross pole
[1:18:05] so uh in that this case the radar sending out a horizontal polarization and it's listening how much of that
[1:18:11] energy is coming back vertically polarized and it turns out in vegetation a lot of it comes backward vertically
[1:18:18] polarized polarized and so vegetation sets up this really nice nice repolarization of energy from one polarization to another and that's what
[1:18:28] this cross pull term is uh is measuring um so in agricultural monitoring from our experience in some of our operations
[1:18:38] in canada and from what's published by others in the literature we know that this this repolarization of horizontal
[1:18:46] and vertical or vertical and horizontal the radar listens for those that cross polarization and that is the single best
[1:18:54] polarization for identifying crops or even to estimate biophysical properties of props like biomass biomass and this coupling of the vertically
[1:19:03] polarized wave with the vertical structure is the second best polarization so in canada for example we we we
[1:19:12] we primarily rely on dual pool vv vh data to do our our agricultural monitoring for canada because of this this
[1:19:22] dynamic that's set up with the transmit and receive polarization let's talk about the target and what drives the scattering so we touched upon
[1:19:32] the frequency and the polarization so that's the characteristics of the radar itself but let's talk about the target
[1:19:40] so what happens when a radar microwave interacts with with an agricultural target there are two fundamental characteristics of any target as well as
[1:19:49] agricultural targets that drive radar response response um and i put them in a specific order uh structure roughness and then water
[1:19:58] content in in terms of their sort of dynamic range we definitely have to have water in a
[1:20:04] target in order to create scattering um but it's really the structure or the roughness that determines the the
[1:20:12] scattering direction and how much energy comes back to the radar so let's take a look at why that is
[1:20:20] so in in radar remote sensing we characterize the roughness of the target by two statistical measures one is the root
[1:20:29] mean square variance and the other is the correlation length so i want to talk about rms first
[1:20:35] rms is the statistical variation of the random component of the surface height relative to a reference surface and rms
[1:20:43] will be expressed in millimeters or centimeters centimeters and so our reference surface for example you can see it here
[1:20:50] we have think about an agricultural field with some roughness on it this is our our reference surface and rms is
[1:20:56] just simply measuring the average variation variation about that reference surface so it's a characterized characterization of how
[1:21:04] rough rough a field is we can have periodic structures as well so sometimes certain tillage implements will create these these periodic
[1:21:14] structures structures or even planting rows can create periodic structures structures and in that case to calculate rms we uh
[1:21:24] you know we fit a polynomial through that periodic structuring and then calculate the random roughness so this
[1:21:31] is just a guy tilling his field and we can see that he is creating roughness and we can measure
[1:21:38] the the the rms roughness in millimeters or centimeters of that of that field uh the other important parameter to
[1:21:48] think about is the correlation length um so this is an autocorrelation function that measures the statistical independence of surface height at two
[1:21:56] points points separated by um by a distance so you can think about this as measuring the the the surface roughness um of a field
[1:22:07] and then sliding that measure of surface roughness incrementally along and then we are measuring between uh one and
[1:22:14] minus one um the spatial correlation of one point on that surface to um uh to the points
[1:22:22] um subsequent to that that measurement so that's what correlation length is is measuring measuring um so the length itself is equal to the
[1:22:30] displacement distance so at what distance distance does the correlation um fall to 1 over e so e is
[1:22:40] euler's number represented here so we're trying to figure out at what distance in space are two points in
[1:22:47] terms of the roughness no longer correlated correlated so if you can think about a perfectly smooth surface think about um
[1:22:55] an airport runway for example if we measure the roughness you know pretty much every point along that
[1:23:02] that that that airport runway the height is going to be correlated with the point previous to it and in that case on these
[1:23:10] very smooth surfaces the height of every point is correlated with every other point and that means that our correlation length is very
[1:23:18] large inversely if we have very rough surfaces you can imagine it doesn't take a very long distance it's a very short distance
[1:23:26] before before the roughness of those surfaces are no longer correlated correlated so in agriculture what does that mean so
[1:23:35] you can think about two scenarios here we have someone who has killed this agricultural field but we can see that the field
[1:23:43] is pretty smooth so the random roughness the rms values would be quite low here if we measure the statistical variation
[1:23:50] about a reference surface um and if we measured the roughness um at a point here and then we measured it
[1:23:57] at a point a little bit further away that the the roughness of these two points is pretty correlated and so we
[1:24:04] would have a very uh large or long correlation length i'm conversely if we start to till the
[1:24:11] field you can imagine measuring the random roughness about a reference surface here we would have a much greater variation so a
[1:24:18] higher rms value and if we measured the roughness in two points it wouldn't take a very long
[1:24:24] distance before the roughness is no longer correlated so that's how we measure roughness so let's uh talk a little bit about what
[1:24:33] this means as it relates to the incidence angle and the frequency of a radar so recall i always mentioned
[1:24:39] that that everything in radar is relative and so we have to think about roughness as a relative term as well and it's relative
[1:24:47] to both the angle and the radar frequency frequency and we can express this relatively relativity through the ray like
[1:24:55] roughness criterion that's expressed here so h is the the height i think about this is the height that the radar
[1:25:02] sees sees and we can see that that that relative roughness to the radar is directly related to its wavelength and
[1:25:10] theta is the incidence angle so to demonstrate that what i did is i used the rayleigh criterion and i
[1:25:18] did a bunch of calculations using teracer x so very short wavelengths wavelengths c band radar set 2 and l band pulsar at
[1:25:28] both a 30 degree and a 50 degree incidence angle and i calculated this this h statistic so again i think about this is
[1:25:37] how the radar sees the roughness of the surface and what this tells you is that these h values represent
[1:25:48] surfaces that the radar would see as smooth so if we look at terracer x for example any
[1:25:55] measured surface rms value that we measure on a an agricultural field any field that has an h
[1:26:03] roughness rms roughness less than 0.45 centimeters terracer x sees those surfaces as as being smooth and so what that tells us is that
[1:26:16] most agricultural fields terrace or x is going to see as rough and if we do the same measurement at
[1:26:21] l-band so remember our fingertip to our elbow elbow um so l-band radar much longer wavelength lower frequency
[1:26:31] um only surfaces that have a roughness less than 3.4 will be seen by pulsar as being smooth
[1:26:40] um um and incidence angle also has an impact but you can see it's really the frequency that has the or wavelength
[1:26:47] that has the biggest increase so what does this mean in terms of using radar to uh to map soils in agriculture
[1:26:55] so to illustrate that i have a chart on the right hand side this is from a paper
[1:27:01] some time ago where we pulled together rms measurements of different agricultural fields that have been killed in different ways so we have for
[1:27:10] example example mouldboard plows these are plows that invert the soil and create a lot of roughness roughness so very rough surfaces
[1:27:17] down to no-till fields that haven't been tilled and these are the um the rms roughnesses that have been measured for
[1:27:27] these fields in centimeters and then as a reference i've just um identifying this chart terrace or x
[1:27:34] radar set to impulse r and what using these statistics that i've calculated with h what this view
[1:27:42] graph is telling you that for tariffs rx if i use terracer x to map fields with all of these different
[1:27:50] roughnesses roughnesses that terracer x is going to view almost all of these fields as being rough it's
[1:27:56] going to see them all as a very rough target and only the very smoothest of fields will appear
[1:28:02] to be smooth to terrace rx and it reverses to at the reverse is through l-band so pulsar is going to see
[1:28:09] almost all of these fields as being smooth and it's only the very rough moldboard plow fields that pulsar would
[1:28:15] say oh this field is different this is a rough field um radar set two uh sort of in between
[1:28:22] it sees some fields of smooth and some fields is rough so what does this tell us it tells us
[1:28:27] that if we want to measure roughness maybe we want to look at something like greater set 2 because it can see a
[1:28:33] difference in roughness based on its its c band wavelength but if we want to mitigate the effects
[1:28:42] of roughness l-band might be a better choice and and i mentioned that earlier that we favor l-band for soil moisture
[1:28:51] because it mitigates the effect of roughness all these fields look smooth to pulsar regardless of how how they've been tilled
[1:28:59] and l-band also penetrates further into the soil and let's talk about the second important target parameter that is water
[1:29:07] so so we know that radar is very sensitive to water or moisture in the target and i
[1:29:13] just wanted to take a minute to explain why that is so water is a dipole molecule so it has an oxygen molecule
[1:29:23] which carries a negative charge and it has two hydrogen atoms which carry a net positive charge so it creates this
[1:29:30] dipole molecule and that's important to understand because when we apply an electric field such as microwave signal
[1:29:39] signal it it causes that dipole molecule that water molecule to rotate and align itself to the applied field so this is
[1:29:47] an important concept because this is how the energy is stored when this microwave signal it interacts with the target
[1:29:57] so it's this alignment of this dipole water molecule to the to the electric field and i'm going to
[1:30:04] talk about why that's important in the next slide but before i do that i wanted to just talk a little bit about the
[1:30:10] dielectric constant you will hear this talked a lot about in radar literature the the dilator constant is a measure of
[1:30:18] the ease at which this molecule rotates um so if we have um a water well a water molecule which
[1:30:27] is not tightly down and can easily rotate the dielectric constant will be will be higher so it's the ease of that
[1:30:34] rotation of the water molecule that the dielectric constant is measuring measuring the dielectric constant represented by epsilon here it's a
[1:30:45] complex number so it has a permittivity or a real part in a conductivity or an imaginary part
[1:30:52] for most soils the imaginary part is very very small only when we get into salty soils do we
[1:30:59] have a higher imaginary component and because of that when we're talking about the dielectric constant in radar
[1:31:06] remote sensing we tend to ignore the imaginary part because it is so small so we tend to talk about the real
[1:31:12] dielectric constant so that's what that means when we're when you hear that term that we're referring to just that real
[1:31:18] part which is the biggest part of the the dielectric and the dielectric um constant has a big range uh
[1:31:27] really dry targets have a dielectric of around three and if we have a lot of water we're approaching a dielectric of
[1:31:33] eight so a really big dynamic range in dielectric dielectric okay so we talked about we propagate a
[1:31:40] wave um it interacts with a water molecule and there is this rotation of a water molecule so but what does that
[1:31:48] mean in terms of uh radar back scatter so again when we apply this electric field any free water free molecules are
[1:31:58] going to rotate and align itself to that electric field positive to negative charge and i fold it here not
[1:32:05] tightly down because some water is bound in the target and clay soils are a good example where a
[1:32:11] lot of the water is tightly bound to the clay particle itself so not all water is free water to rotate
[1:32:19] but any water that that is not tightly bound will rotate and align itself and this is interesting because it's
[1:32:26] this rotation and alignment that stores energy so we apply a field the water molecule rotates in response to that and that
[1:32:36] energy is held and then when the waves are periodic so the wave comes and goes as we know and
[1:32:42] when that wave passes that water molecule will relax and release the energy that was stored so if there's little
[1:32:51] frictional resistance most of that water that is stored in that rotation will will be released when the wave
[1:32:59] passes passes so it's not difficult to understand then if we have a lot of water molecules in
[1:33:05] our target we have a lot of rotation and a lot of energy that is stored and so a significant amount of energy can be
[1:33:12] stored and released and of course if there's very little water present to hold the energy most of
[1:33:18] that energy is going to is going to penetrate and be lost um so it's the storing and releasing of
[1:33:25] the energy that um uh that is uh important in terms of understanding how water affects radar response so we need water
[1:33:35] in the target to hold and store the energy but it's the roughness and the structure of the target that dictates
[1:33:42] once that energy is released what is the angular scattering that occurs once that energy is released and i want to talk about penetration
[1:33:52] depth depth we talked about the radar frequency or wave light being important in terms of penetration which
[1:33:58] it absolutely is so that if we have a lower frequency or longer wavelength we have more penetration so that is true
[1:34:06] but penetration depth also depends on how much water is in the target so sometimes we get this question how much
[1:34:13] or how deep does does do microwaves penetrate into the soil and it depends it depends on the frequency wavelength
[1:34:20] the incidence angle but also how much water water so the penetration depth into a target is defined by the dielectric the amount
[1:34:29] of water wavelength and incidence angle and penetration increases with wavelength we learned that and is greater when the target eat
[1:34:38] whether it's soil or crop is drier so we can get greater penetration so in most agricultural soils the penetration is
[1:34:45] not very deep and it's only when you get very very dry targets with very little water so you can think about desert
[1:34:52] soils where you would get substantial penetration penetration and this is just a convenient graph uh that demonstrates here we're talking
[1:35:02] about l-band so this is our preferred frequency for soil moisture let's put a 23 centimeter from our fingertip to our
[1:35:09] elbow elbow and you can see that as the soil moisture increases uh so most agricultural soils this moisture
[1:35:17] will be around between five percent and and even greater than this forty fifty percent percent you can see that it doesn't take very
[1:35:24] long uh for the soil moisture to reduce the penetration depth so if we have soils that have 15-20 percent soil
[1:35:33] moisture the penetration is only a few centimeters um vegetation so we talked about water has to be in the target in order to hold
[1:35:43] the energy and release the energy and how it's scattered uh really depends on the roughness when we're talking about soils and this
[1:35:51] structure when we talk about vegetation and the scale is is very different from optical remote sensing so we're not
[1:35:57] talking about pigmentation um or internal leaf structure here we're talking about large structures in the uh the crop canopy so it sees large
[1:36:06] structures you can think about the thighs thighs the volume biomass the shape orientation of leaves stems and fruit
[1:36:14] as well as the amount of water in the vegetation that is driving the radar response response so i just draw your attention here are
[1:36:21] just three um uh three illustrations of different uh crops so this is a soybean crop a wheat crop and a corn crop and and all
[1:36:31] you need to to really take away from this is that the structure is very different the the size and shape of the
[1:36:38] leaves are different the number of leaves are different how those leaves intersect with the stock is different um
[1:36:45] some of the in this case this this wheat crop has a has a head that it's emerged so this
[1:36:51] structure is very different and the radar responds to this structure and that's why radar is so sensitive to crop type and crop
[1:36:59] development because um and it's not just that that between different crop types we have different structures but the structure
[1:37:07] changes as the crop develops as well and so the radar is responding to these changes in structure
[1:37:14] among different crop types and as the crop crop develops when we think about radar interacting with vegetation and uh in
[1:37:24] the structure of crop canopies we have to think um a little bit like what the radar is experiencing
[1:37:31] and we can have all kinds of different um um scattering that occurs in the canopy and so we'll just take a look at this
[1:37:37] schematic on the right uh we can for example have direct scattering uh directly from the leaves or direct scattering even from the soil
[1:37:45] itself itself and we can have multiple scattering that occurs um from leaf to leaf or between the soil and the crop itself
[1:37:55] we're not going to talk in this one webinar about polametric radar but polametric radar which captures the full
[1:38:01] scattering characteristics of a target not just its intensity but also its phase phase i can really be exploited uh to take a
[1:38:10] look at these different types of scattering and the composition of how much direct multiple and and double bond
[1:38:17] scattering occurs is really um uh can be can be measured by a parametric radar uh data set and exploit it to tell us
[1:38:28] about not just what crop type it is but what the growth stage is of the crop i want to finish this part of the
[1:38:35] webinar talking about some complications we have to keep in mind when we're using radar data we talk about radar as being an
[1:38:43] all-weather sensor but that's not entirely true so it's true that radar will penetrate through clouds um through
[1:38:50] the small droplets um that that form clouds clouds but that's not true if we have uh rain
[1:38:56] with with large droplets and depending on the radar frequency we can get scattering of the radar signal from uh
[1:39:04] these rain events from these these larger rain uh droplets uh so what that means is that yes radars
[1:39:11] can see through clouds but we really need to pay attention to the the environmental conditions at the exact
[1:39:17] time that the radar is imaging and if my radar comes over and at the exact time it's gathering uh information
[1:39:24] about my target it's raining this can create a significant amount of scattering that is not related to the
[1:39:30] target but related to the scattering from these these rain droplets so what that means is that we should be
[1:39:37] paying attention to the weather conditions at the time of imaging if you have access to rain data
[1:39:45] rain gauge data or weather radar data that can be helpful in some regions of the world the risks are dire also there
[1:39:53] are some times during the day when rain is is more likely but do pay attention to that and if you see
[1:39:59] areas in your image that have it's a really bright area that doesn't seem to be target related it could be
[1:40:06] that that's a rain event that happened at the time of imaging as well i wanted to talk a little bit
[1:40:13] about um freeze thaw so we talked about the ease at with at which the water molecule will rotate
[1:40:21] when a microwave entered microwave wave is applied and remember i talked about the water molecule being free to rotate
[1:40:31] so if the you can imagine if the soil is frozen that soil molecule cannot rotate and so it even though there could be a
[1:40:37] lot of water in the soil if we apply this electric field there's no rotation that can occur that the
[1:40:45] water molecule is sort of locked in place place and so even though there could be a lot
[1:40:49] of soil moisture in our soil the radar will return um a low response because it doesn't think that there's there's much
[1:40:57] water in there because there hasn't been any any energy stored um so we have to be a little bit careful
[1:41:03] about that um so the dielectric constant can drop to close to zero um when water changes to a frozen state
[1:41:12] uh and so that means i'm paying a little bit of attention to the temperatures at the time of the
[1:41:18] image acquisition so for example sometimes we acquire data in the early morning hours so 7 8 a.m in the morning and we can have
[1:41:28] freezing of the soil over the over the night time and so to mitigate that if you are
[1:41:36] imaging at that time of year when you could have frozen soul you might think about imaging acquiring an image in the
[1:41:43] um um the overpass that is coming over in the afternoon or or early evening however this can be an advantage because
[1:41:51] sar is able to see a difference between the state the water states between freezing and sawing so
[1:41:58] it might be something interesting to uh to exploit is this free spa state because the radar is going to see those uh those soils
[1:42:07] differently differently and finally do on uh on the target so it's just an example of stew that's
[1:42:14] formed on this leaf and if we have very humid conditions and a lower temperature overnight we can get
[1:42:22] dew that will form on the target and i've walked through some of these fields many times in the early morning
[1:42:28] hours and there is a significant amount of water that sits on on the leaves and it can take many hours for that
[1:42:37] water to uh to evaporate so we talked about that um if we have water in the target that
[1:42:45] um that's going to have a impact on on a radar back scatter um and so especially if we're doing any
[1:42:54] biophysical modeling such as leaf air index index biomass for example and we have due on our target you can imagine that's
[1:43:03] going to create errors in that modeling so i do is most prominent in temperate regions early in the morning hours as i
[1:43:14] said early in the morning you walk these fields you get very wet by walking the fields so one strategy is to select
[1:43:20] again just like freeze saw selecting an orbit orbit ascending is in the evening descending is in the morning
[1:43:27] so if you think dew is going to be present and you're doing biophysical modeling you may want to um think about
[1:43:32] it select selecting the at the um sorry the the ascending orbit in the evening and always check to see what the
[1:43:39] meteorological conditions are and i'm going to finish this webinar just to show a few examples of how
[1:43:47] within my research team and within within agriculture canada were using radar data so one of the early activities at
[1:43:56] agriculture negro canada was to develop a method that we could use radar data to map crops across canada
[1:44:04] so so this started about 10 12 years ago the research research and what we did is we developed a
[1:44:12] classification methodology that integrates integrates uh c-band data at that time it was raider set 2 and now we're moving
[1:44:21] towards sentinel 1 as well as rcm but integrating c-band radar data with optical data and because we're limited to just one
[1:44:29] frequency c-band we are also integrating it with optical data so recall i showed that image from manitoba
[1:44:36] with xc and lban a beautiful image to demonstrate that multi-frequency radar does a very good job of crop
[1:44:43] classification classification but this is an operational activity in our department now and so we don't have access to operational x
[1:44:52] and l bands so we are integrating c band with optical data and the the radar data is really important
[1:44:58] because because we have issues of cloud cover in canada as well and the radar data brings that
[1:45:04] robustness to the classification that we can deliver highly accurate maps every year so this is an operational activity now
[1:45:13] within our department it's been running for 10 years you can see in the legend the number of
[1:45:18] different crop classes that are identified using c-band radar and optical data every field across canada is mapped
[1:45:26] every year and the map product is created at a 30 meter resolution and once the product is
[1:45:34] completed validated and the metadata is created for it these map products are provided free and open for download on
[1:45:42] the open government of canada open data portal so this is an operational activity 10 plus years that this has
[1:45:50] been running on the right hand side i have a bit of an animation that our operational group
[1:45:55] has created it's a really interesting animation this is uh one of the canadian prairie provinces and what this animation is showing is
[1:46:04] that between 2009 and 2015 where are soybeans being grown in this canadian province and what you can
[1:46:13] immediately see from this animation is that there's an expansion of soybeans in this canadian province and soybeans are being grown further
[1:46:22] north in canada than they were a few years ago and there's been in this part of canada
[1:46:28] there's been about a 40 increase in soybean production production that's because the climate is changing um there the
[1:46:38] frost that that kills in in the fall is now later in the fall and that's giving enough um growing degree days
[1:46:45] that producers are able to successfully grow soybeans so now that we have 10 plus years of mapping canada for different crop types
[1:46:55] using c-band radar and optical data we can now take a look at changing cropping patterns whether those are driven by
[1:47:02] market drivers or by climatic change i mentioned about using uh radar for soil moisture which is an
[1:47:11] excellent tool to do that uh so we've done some work using both semi-empirical and empirical models to
[1:47:19] estimate surface soil moisture and there are other groups around the world that are developing great methods to use
[1:47:25] radar data for soil moisture we've been applying the integral equation model which is a physically based model to estimate surface soil
[1:47:34] moisture remember i mentioned that especially using sea band as we are in canada canada that at sea band we are estimating just
[1:47:42] really the surface amount of water in the soil but as i said there are many other really interesting methods that are
[1:47:49] being developed so we're running the integral equation model using hh and bv polarizations this is just an output from the iem model
[1:47:59] over an area in western canada where blue areas are are color coded to high water content and
[1:48:08] red and yellow areas have our soils with lower water content and you can see some pivot irrigation
[1:48:14] happening in this area where the water content is higher so this is using on the im it's implemented in snap it's
[1:48:22] called the so moisture tool kit so you can download that that plug into snap to use the im model for soil moisture
[1:48:29] so so an interesting application of that is irrigation monitoring so this is some work that i did in in chile a few
[1:48:38] years ago so now that we can use a physical model or or some other model uh using c or l
[1:48:45] band data for that matter to derive surface cell moisture what would we do with that kind of
[1:48:50] information information there are many reasons we want to estimate soil moisture but one is to look at irrigation
[1:48:57] but chile has a significant amount of its agricultural land which is irrigated and so you can imagine with a changing
[1:49:04] climate there's a lot of concerns about availability of water and applying irrigation when and where it's needed
[1:49:13] so this is i just an output from some radar sat data collected over a site in in chile
[1:49:20] and one of the um high value crops in chile is it's chicory seedlings so you can see these tiny little seedlings very
[1:49:27] small the seedlings survive in the very top part of the soil for about 40 days so so they need to be well irrigated in order
[1:49:35] to survive so very important crop on needing irrigation and this is just an example i've outlined in black this chicory field
[1:49:44] uh so this is using radar set 2 data and applying the im model and you can see that on october the the 20th again
[1:49:52] we've color coded it so that oranges and and yellow are low soil moisture and you can see on the 20th of october the soil
[1:50:01] in this for this chicory field was the moisture was quite low this producer then irrigated three days
[1:50:08] later you can see half of that chili that that chicory field has been irrigated uh and the soils are now very
[1:50:14] wet and radar set two is detecting that and then we can see about seven days later we have this differential drying
[1:50:20] so some part of that irrigated field is still wet probably doesn't need to be irrigated again but
[1:50:26] but the northern part of that field is starting to dry and and it may need some attention in terms
[1:50:32] of irrigation we're also working with a canadian company aug signals to develop a method to use radar data and
[1:50:44] estimate what the growth stage what is the growth stage of phenology of a crop there are many different reasons we want
[1:50:51] to know that in this particular project it's important to know phonology because phenology can be linked with the
[1:50:58] risk of crop disease in this project we were looking at a disease called sclerotinia and canola and that disease scleretinia feeds on
[1:51:07] the petals of canola crops so the soils are very wet when the canola is flowering we have risk that
[1:51:13] this disease could take a foothold and have a devastating effect on canola production production so what we want to do is use radar data
[1:51:20] to tell us when the canola crop is flowering flowering uh so this is an interesting project it
[1:51:26] it used c and x band data to in a machine learning algorithm to use the scattering measured by those
[1:51:34] radar signals to tell us what is the growth stage of the crop so this is just a test site in western
[1:51:40] canada we have four canola fields four of our test fields and i'm just going to scroll through
[1:51:46] this timeline so on june the 15th that machine learning algorithm and the scattering measured by x and c band is
[1:51:54] telling us that those four fields are now developing uh leaves and buds so it's the canola the canola crop looks
[1:52:02] something like this um and it's on at the very beginning of july the fourth of july that the three
[1:52:09] out of the four canola fields are now flowering so that's important because of those three canola fields if the soil is
[1:52:15] very wet and the kernel is flowering these fields would be set up for a higher risk of
[1:52:22] this disease taking a foothold but we can also monitor when that canola field is in its seed development it's
[1:52:30] pod development stage and when it's ready for harvest as well so just keep in mind that this is using
[1:52:36] machine learning algorithm it's all radar driven we have a paper that's been published on this and we tested this over
[1:52:45] some blind testing over other sites in canada and we've demonstrated this approach does an excellent job of determining crop phenology
[1:52:57] um our team is also working on a radar vegetation index other teams are doing this as well
[1:53:03] and the reason is that normalized different difference vegetation index is used ubiquitously in precision farming and regional global crop monitoring
[1:53:12] um um and but we know that we have issues with cloud cover and so we're relying on sensors like
[1:53:20] modis for example to mitigate cloud cover interference and we composite seven days of modis data to get an estimate of
[1:53:30] the vegetation condition but the the challenge with that is that these these these these national or global
[1:53:38] ndvi monitoring activities are producing course resolution data products so 250 500 kilometers for example so the question then is can we
[1:53:51] sort of adapt some of these operational ndvi monitoring activities to use radar data and so our team's been working on
[1:53:59] this as i mentioned and we've developed this radar calibrated ndvi um so we are creating a statistical relationship
[1:54:10] between between radar scattering and ndvi in order to create this ndvi like product but exclusively derived from
[1:54:22] radar data and in our case we're coupling that with a crop structured dynamics model which is allowing us
[1:54:29] to estimate crop condition at field scales and on a daily time stop so there's a paper here which has now
[1:54:36] been published and you can just see that for these canola fields we are monitoring the change in sar calibrated
[1:54:44] ndvi over time but do pay attention in the literature there are others working in a similar area and the final example i'm going to
[1:54:53] show before we close off is um um is is using a radar to look at tracking tillage
[1:55:03] um so i mentioned that radar sends that the radar sensor will send out a pulse of energy we know a lot
[1:55:09] about that we know the intensity and we know the time that it takes for that pulse of energy to travel to
[1:55:16] the earth and go back to the sensor so what happens if the distance between the sensor and the earth changes
[1:55:24] then the time that it takes that pulse to reach the target and go back to the sensor changes
[1:55:29] so that's interesting um insar is a a really mature area of star remote sensing sensing but we're starting to look at how we can
[1:55:40] exploit this change in in time change in phase phase to look at tillage events uh so tillage is important to monitor
[1:55:48] because when we till the soil it destroys the soil structure or or reduces the soil structure um and it can also create risk of
[1:55:57] erosion whether it's wind or water erosion so we prefer if fields are not tilled especially before rain events or snow melt so that
[1:56:06] the soil is protected and and is not susceptible to erosion so we have this project that we're
[1:56:13] working on right now where we're using coherent change detection to measure the difference in the phase from one radar pass to another and we
[1:56:22] are linking that change in phase to to tillage events and this is just an example of an alert
[1:56:30] product product uh where we've used two sentinel one images images we're detecting the difference in in coherence between one image and another
[1:56:40] and all of these white fields um this coherent change detection has alerted us that there is change in that
[1:56:47] field due to a tillage event so that's my last slide and i won't i just want to wrap up and thank everyone
[1:56:55] for attending um this this webinar we've learned a little bit refreshed ourselves a little bit about the radar basics
[1:57:01] we've talked about how radar interacts with soils and crops and and we've shown some examples of how in canada we're
[1:57:08] applying that um so with that i'll close off the webinar and we'll be standing by to answer any questions you may have
[1:57:16] thank you please enter your questions in the q a box we will answer them in the order
[1:57:28] that they were received and we have been assembling them into a google doc which will be be sharing on screen shortly and this
[1:57:39] document document will be posted on the training website website following the conclusion of this session if you have any questions about the
[1:57:51] material presented today feel free to reach out to heather mcnair her email is on this slide if you wish to access the recording or
[1:58:02] the pdf for this session session you can access it through the training webpage webpage for this for this particular webinar
[1:58:15] information about our set please go to the link that you see here and if you want to keep up to date about our
[1:58:22] trainings feel free to follow us on social media on twitter thank you very much to all participants
[1:58:30] we've been gathering your questions and we will begin our q a session dr mcdaryn is here and she will be answering your questions
[1:58:39] live so we've been assembling the google doc as you can all see on your screens and let's just start
[1:58:54] working our way down now we've gotten a great number of questions so let's start with question number one
[1:59:03] um um there's a problem downloading uh the file that's listed here all other files are perfectly fine are
[1:59:12] there any ideas about that and i think this might pertain pertain i'm not sure this might be uh to session
[1:59:23] two or session three three yeah i um i i was chatting with laura who works for me uh who will be delivering some of
[1:59:33] the training next week and she deferred that to isa or or russ to to maybe uh deal with that but we'll make sure that
[1:59:42] problem is resolved great thank you question two how can we decide which polarization has to be used for a
[1:59:52] specific application so what are the characteristics of the target to decide that um okay so i just wanted to say as well
[2:00:03] there are 50 questions 5-0 that have been posted i've been busy trying to answer them as best i can but um
[2:00:10] i haven't been able to get through them all so um and some of your questions stumped me a
[2:00:15] little bit so i will have to do a little bit of thinking about them but um but
[2:00:19] the questions have been great um so what i've said here is that um you know understanding which polarizations
[2:00:27] to select for your particular application application um you know we've been working on research for many years whether it's
[2:00:34] agriculture or forestry or um you know ice monitoring etc so this is really really uh driven by um a lot of empirical
[2:00:44] research i'm going to say um and i there's a few questions around polarization that have been um
[2:00:51] that have been posted and i always say you know think a little bit about the structure of your crop
[2:00:59] or sorry the structure of your target to and and what polarization uh is being transmitted um and so for example i i'll talk about
[2:01:09] vegetation here um we know that the structure of a crop canopy is very complicated uh so we have
[2:01:16] many leaves and stalks and stems they interact interact they intersect at different angles the canopy is quite complex
[2:01:23] um and so there's a lot of volume scattering that that happens and what that means is that when we transmit a
[2:01:29] horizontal wave for example that horizontally polarized wave will there'll be a great deal of scattering as that wave interacts with different
[2:01:38] leaves and stalks and maybe the soil so there's a lot of scattering that goes on within that target
[2:01:45] and this cross pull up polarization hv or vh is is really a measure of um you know
[2:01:53] every time a wave is is scattered there is a um from one sort of unit to another there's
[2:02:01] this repolarization of the uh of the transmitted wave and so this cross polarization is really sensitive to this multiple scattering this
[2:02:12] repolarization of the weight because of this this complicated vegetation target um you know so we know from a lot of
[2:02:20] empirical research and we know from sort of the the physics behind how waves interact interact um that something like an hv or vh
[2:02:28] polarization is going to be sensitive to volume scattering and sensitive to this vegetation vegetation if we think about a vertically polarized
[2:02:37] wave as well a lot of crops for example have a vertical structure and so there's sort of this
[2:02:42] coupling of a vertically polarized wave with with that vertical structure and so we get a lot of scattering back uh
[2:02:52] from this vertically transmitted wave um so it makes a lot of sense when you think about how waves are transmitted
[2:02:59] and what the target looks like what the structure is it looks like and this has been borne out by a lot of empirical
[2:03:05] research so we've done a lot of research our team and many others uh in terms of which polarizations are
[2:03:10] best for vegetation for example and so we know from this uh the physics around this as well as the empirical research
[2:03:18] that cross polarization vh or hv plus vb are the two best polarizations but your application may be different uh
[2:03:28] if you're not looking at vegetation um you know you have to dig a little bit into the the literature to see what uh
[2:03:34] other researchers have have come up with so um i i think that that pretty much answers that question
[2:03:45] great great uh let's go on then question number three which polarization among vv and vh is best for mapping inundated rice
[2:03:54] fields and why yeah and so it gets back to a little bit what i was just explaining so um
[2:04:04] uh if we think about um the cross-pole polarization vh which is what this question is talking about so here we are
[2:04:11] we're transmitting a vertically polarized wave and we're receiving we're recording how much energy comes back in a horizontal polarization so you
[2:04:20] know we have this this multiple scattering um effect going on um in this particular case for example
[2:04:28] because we have a flooded vegetation we have this this double balance mechanism that that is occurring so what we've seen again like i was just
[2:04:36] saying you know the physics behind it makes a great deal of sense that if we have uh you know vegetation that
[2:04:43] is inundated we get this double bounce um um uh mechanism set up and so you know vh is the it you know tends to
[2:04:53] be able to identify these inundated um these inundated targets the best i also made a note here though um
[2:05:02] you know both hv and bh can be used to model the amount of biomass so whether that's rice
[2:05:08] or or any other um or any other crop biomass so uh even though hb may be the best at
[2:05:18] sort of isolating these inundated fields bb could also be useful perhaps in in modeling the the total amount of bio
[2:05:27] race biomass great great question number four it's it's not very clear i don't know if you want to try to take
[2:05:39] a stab at that is is there a resource that provides information on crop type and the type of band
[2:05:46] or does it change during the crop phenology i think what they mean is is is there a guideline
[2:05:53] that you should use a given band for given crops or does that change as with crop phenology
[2:06:00] yeah so um okay so i'm gonna break this down into talking about i must have missed this
[2:06:06] question sorry about that i'm gonna break this down to think about the radar frequency or or wavelength and the
[2:06:13] polarization polarization the polarization is a bit easier so we were just talking about hd um or vh lacrosse pole vb and h uh uh vv
[2:06:24] and hh for example so that that one's a little bit clear what our research is showing showing is that regardless of the crop type
[2:06:31] wheat or corn or soybeans for example that cross polarization hv or vh is the is the most sensitive to
[2:06:41] crop type and and and biomass and leave your index all of those things so that's the single
[2:06:48] most important um polarization as i was just mentioning vv also contributes and has information um in terms of crop type
[2:06:59] uh so that recommendation does not really change uh for the crop type or even the growth stage
[2:07:06] stage it's the pull it's the it's the radar frequency or wavelength that is a bit more complicated and there are some
[2:07:12] other questions about this as well um um and so uh uh you know you have to think about um the size of
[2:07:23] the canopy and you have to think about when the size of the canopy varies depending on the crop type and the and
[2:07:29] the growth stage uh so you can think about a corn canopy versus a soybean canopy so the amount of
[2:07:35] biomass is quite different between those two two and even a corn canopy if biomass is not the same through the entire growing
[2:07:43] season so you know that canopy starts up quite small and accumulates biomass as the crop grows um and in that case you know we want to
[2:07:52] think a little bit about the penetration depth of the microwave relative to the biomass and so our the rule of thumb is that you
[2:08:02] want enough of you want the wave to penetrate enough into the canopy itself and create all these multiple scattering
[2:08:08] events events um but you don't want the you know you don't want the penetration to be so
[2:08:15] so deep into the canopy that we get these contributions from the soil um um and so you have to match the frequency
[2:08:23] or or wavelength to the can the size of the canopy so we generally you know we think about recommending
[2:08:31] you know longer wavelengths uh to be able to map and monitor larger biomass crops like corn but you know shorter wavelengths to map
[2:08:41] and monitor lower biomass crops like soybeans for example and that makes it complicated because in an agricultural landscape you have many
[2:08:49] different crop types um and and in that case this is why this multi-frequency multi-frequency um approach is is the best because um
[2:09:00] you know the l-band wave length for example might be a might be able to map corn fields really well
[2:09:06] whereas the x-band wave may be better at um um mapping smaller biomass crops so so that's why you know integrating
[2:09:17] different frequencies especially when we're looking at crop mapping and knowing that biomass changes over the whole growth cycle you know this is
[2:09:24] why we have this richness of data when we combine radars at different frequencies great thank you for that
[2:09:36] these are complicated answers i'm sorry question number five when would you use ground range instead of slant range
[2:09:50] um yeah so you know i'm just saying here that you know it's convenient to uh to do our slant to ground range
[2:09:58] conversion when we want to stack data together together and especially if we're going to integrate data with other geospatial
[2:10:05] data so for example if you have field data training data that you want to do a classification that training
[2:10:11] data will be geo-referenced and so doing this slant to ground range conversion conversion is really helpful to stack
[2:10:21] all of our images together as well as any other geospatial data that um you know that that we need in our either
[2:10:28] classification or in our modeling and i just mentioned here too like the examples i showed are probably not as
[2:10:36] dramatic as as what you might see in other radar products if you look at airborne data collected radar data collected by
[2:10:46] airborne systems you will see a really significant significant compression because the you know the incidence angle changes a
[2:10:54] lot from near to far range or if you have satellite imagery where you have really wide swaths like scans are
[2:11:00] um the level of compression is is quite noticeable and and you would really appreciate if you look at airborne data
[2:11:07] why you need to do this slant to ground range conversion okay okay moving on then to the next question
[2:11:19] someone is not clear about the incident angle concept concept uh so if you could please explain more
[2:11:28] yes go ahead yeah sure so maybe i'll just uh i just want to get this right so
[2:11:33] just read my answer here um so as i was saying in the presentation you know regardless of the target um
[2:11:40] whether it's a smooth target or rough target we have this this uh as the intense ankle increases
[2:11:46] um we have this this decrease in in backscatter backscatter and um i didn't show it in the
[2:11:53] presentation but there's a something called the the radar equation and when you look at the radar equation which
[2:11:58] really characterizes how energy is propagated and how how it interacts and returns to the target um part of the reason that we have this
[2:12:06] decrease in backscatter is due to the fact that as the the power that's generated by the antenna as it
[2:12:13] hits the target there is a decrease in range and distance um in in the power that that sort of
[2:12:21] interacts with uh with the target i mean there's also a spreading loss of energy as we increase our distance from the
[2:12:28] radar antenna and so fundamentally there's just less energy that that comes to the target the further away the target is from the antenna
[2:12:37] and if we recall that you know incidence angle increases with range or distance from the antenna and that's why we see just fundamentally
[2:12:46] this decrease in in energy that's scattered back because we're transmitting less energy to those targets that are further away
[2:12:54] um but it's not you know it's not this you know that that's sort of the fundamental mechanism
[2:13:00] but you know you saw that that function is a little bit different depending on the roughness and we talked about a
[2:13:06] little bit further in the in the the webinar that if we have rough surfaces we have a lot of scattering in
[2:13:12] many different directions and so although even for rough surfaces we have um um less scattering occurring as angle
[2:13:22] increases because we have this scattering and rough surface of many different different directions fundamentally you have more scattering
[2:13:30] coming back to the radar antenna so i hope that answers that question okay moving on then to question number
[2:13:43] seven uh please please say something about the software used to convert from slant to ground range yeah and i i just noted here that i
[2:13:54] think on thursday uh will be the webinar on how to use snap um so that's the next
[2:14:00] series in the rsac training um and there is a process uh in snap and i just listed it here um if you look under the
[2:14:07] radar menu and on under geometric there is a slant to ground range conversion great question number eight what are the
[2:14:19] differences between modes and sentinel one so the four different modes that you mentioned mentioned yeah i thought it was probably best here
[2:14:27] i just provided a web link here uh to issa where they describe um not only the characteristics of the
[2:14:35] different modes but how they are generated from the sentinel from the sentinel satellite and i just made a note here that in our
[2:14:45] work in agriculture we're using the the interferometric wide mode because it gives a good trade-off between between swath width and resolution and we're
[2:14:56] able to to acquire these two important polarizations vb and vh okay question number nine what's the difference between power
[2:15:10] and intensity you know and i just i i noted here that um you know in in the radar literature
[2:15:18] because radar is you know it's it's you know it's genesis is really in physics and engineering and there are
[2:15:25] many of us in in other domains that uh that are using it there's sometimes the there's an interchangeability of
[2:15:32] terminology depending on whether um it's coming from an engineering source or maybe from an application source so
[2:15:41] just be aware of that but i just noted here that intensity is the power that's transmitted per per unit area so you can
[2:15:48] think of those two um terms uh they're directly related in that way all right question number 10 for
[2:16:00] multi-temporal analysis and change detection in the case of forests it will work for detecting short time disturbances to avoid significant
[2:16:09] incident angles if we want to monitor disturbances over many years might we get a different incident angle
[2:16:17] due to the growth of the forest oh i think i may i'm not sure if i understood this question then um
[2:16:29] okay i thought the question was about you know using different incidence angles over if you're doing long-term
[2:16:35] monitoring monitoring do i have that correct or yes correct okay so um as i'm saying here that
[2:16:44] you we always have to think about the fact that we want to measure a difference in the target so in this case
[2:16:49] a forest canopy so whatever the radar measures we want that change in in in intensity that's measured by the radar we want it
[2:16:59] to be related to the target itself so we don't want to be mixing in changes in intensity because the
[2:17:07] the radar data that we're using the configuration is changing and that's what we're doing for mixing in incidence angles as we talked about
[2:17:16] uh just previously so um um you know so that means that whether it's a short-term monitoring or long-term
[2:17:23] monitoring um if the incident's saying if the different products were integrating the incidence angle is is different from one product
[2:17:31] to another um some of the uh uh differences we're seeing are due to that incidence angle effect so
[2:17:39] it's you know it's really best to try to stick with uh one incidence angle which typically in radar means a repeat um
[2:17:46] where we're uh collecting uh um um the exact same um repeat mode of satellite satellite however uh and i'm just going to talk
[2:18:01] about agriculture here rather than forestry um you know what i was just mentioning is more about looking at change detection
[2:18:09] so looking at changes in intensity over time and relating them to the target not to the radar
[2:18:15] uh change in the radar configuration itself there are there are modeling i'm not that familiar with forestry but in
[2:18:21] in agriculture we use for example something called the water cloud model which is a semi-empirical model and if
[2:18:28] you have a model like that like the water cloud model model incidence angle is parameterized in that
[2:18:36] model model and because of that you can integrate different different radar modes with different instance angles in the model and we do that we've
[2:18:46] done that quite a bit to retrieve biomass or leaf area index from radar data by using the water cloud
[2:18:53] model and and there we're using radar different incidence angles and so the radar incidence angle we know what that is from the radar
[2:19:01] product and and it's fed into the water cloud model so if you have a a model that has
[2:19:06] its entangled as a parameter it can be you know that's a case where you can definitely integrate radar that's been
[2:19:13] collected at different angles okay question number eleven why is the doppler shift only important for side looking radars
[2:19:25] uh uh okay so um uh uh again i hope i understood the question here but my response here is that you
[2:19:33] know all radar instruments are side looking instruments um and the doppler shift is a is a phenomenon it's not specific to you know
[2:19:42] to radars per se this is a phenomenon that we see all around us that when the power
[2:19:48] when power is transmitted and the source of the power is moving we get these shifts shifts um but in radar it's you know it was
[2:19:55] just something that was uh that we use uh to create this synthetic larger radar aperture by recording the history of
[2:20:05] these shifts so i hope that answers that question good yeah okay the next question number 12 on slide 32
[2:20:18] the write up and the contents on the image are not matching when approaching the target do we have a negative or a
[2:20:25] positive shift yeah i was looking at that during the presentation and i'm gonna uh uh look back at that diagram that i used i
[2:20:35] pulled that off of a a site from can that from a canadian source here so i'm gonna take a look at
[2:20:41] that again um but just and sometimes in it depends on the point of reference so um i showed that example of the bug and
[2:20:50] the bug moving on the pond and so i i always think about the you know the doppler ship relative to the observer
[2:20:58] and i'm not sure if that you know i was mixing up maybe those references but you know let's focus on
[2:21:05] thinking about the doppler shift relative to the observer so think about yourself you know like i said the bug
[2:21:10] moving towards you as you're standing on the shore in that case the frequency it's an upward shift with respect to the
[2:21:17] observer because the source of the pulses of energy is approaching the observer and so you get more
[2:21:25] pulses per unit that are hitting the observer so i apologize for that if that was a bit
[2:21:31] confusing okay question number 13. it's a loaded question um um there are some great books um is pretty is the bible of that how so
[2:21:49] how is uh synthetic aperture in how are images reconstructed from radar signals what is the mathematics behind this process
[2:21:58] yeah so i i you know again apologies i don't have a engineering background um but i really like i'm just going to say
[2:22:07] i really like these types of questions because even for somebody like myself it really makes me dig and dig in and try to understand the
[2:22:14] physics and the engineering behind it so um um you know erica maybe you can provide some reference material that
[2:22:23] could could answer that but these are great questions i i really like the probing questions yeah so we will be posting this document
[2:22:31] on the rsa training webpage and i can include some references for this question question okay so the next one can you explain
[2:22:41] better not and gamma nuts again please uh okay so i i hope i can clarify this and i'll just say up front if anyone has
[2:22:49] if the question answers i have provided aren't clear you know you can directly contact me and i will try to explain
[2:22:56] better better um if they're not clear so as i was saying beta naught is the reflectivity or the intensity of
[2:23:04] energy per unit area so you can think about for example a one by one meter area what is the you know
[2:23:11] the intensity of energy in that one by one meter area but here we're thinking about it in the slant range projection
[2:23:18] or which is the natural viewing geometry um but we can transfer beta not to gamma naught um if we think it's advantageous
[2:23:26] and advantageous to represent the reflectivity energy per uh one by by one by one meter square um
[2:23:36] um if we think it's advantageous to present that in the plane that's perpendicular to the slant range
[2:23:43] so i wanted to put all of these in the training beta not gamma not sigma naught because you will come across these in
[2:23:50] the literature and some researchers do use gamma naught rather than sigma naught but but especially in the agriculture domain you
[2:24:00] will you know most most often you will uh uh you know users and researchers are transforming beta naught to uh to gamma
[2:24:09] naught so that's the amount of energy per unit area on the ground range like an agricultural field
[2:24:18] okay okay so the next question number 15 how can we integrate both coherence and intensity intensity to map flooded vegetation using random
[2:24:29] forest so uh i think it's next week uh you will be introduced to random force classification specifically for crop
[2:24:39] mapping but if this can be applied in this scenario as well so you know the random force is a
[2:24:46] you know a great way to integrate these different types of of data um so hopefully next week when you see
[2:24:53] that training you can see that the random force classifier is able to integrate integrate many different types of data
[2:25:01] including coherence and intensity yeah absolutely okay question 16 is the speckle if it's very high is the speckle related noise very high
[2:25:18] in soil moisture related data and how do you reduce it in such cases cases so you know speckle is a fundamental
[2:25:27] characteristic of all radar systems so we have to deal with it no matter what the application is
[2:25:34] is so yes you will encounter that if you're using radar data for so much to retrieval um there are
[2:25:43] a few ways to reduce noise and you're going to learn about that in the next rsa training as well
[2:25:49] multi multi selecting a multi-look product or multi-looking at yourself is is one way to reduce that noise as i mentioned but
[2:25:57] remember you're compromising on the resolution as well um most most commonly we apply some sort of radar adaptive filter to spatially
[2:26:07] average the image and as i said i think you're going to learn a lot more about that next week about how to do that
[2:26:15] okay question 17 how does multi look or what does multi-look mean in physical terms terms and how does the multi-look process
[2:26:25] compromise the resolution yeah i i think what i'm going to do in this one eric is i'll i'll
[2:26:32] look into some of the engineering literature because i think that's where we're going to find maybe a more
[2:26:37] detailed explanation of that so if you don't mind i will dig into that and provide some references
[2:26:43] references sure that sounds great and then question number 18 is there a python python three point x library to process
[2:26:52] sentinel one data other than snap i think this is for one of the um other sessions in the series
[2:27:01] yeah i again i was chatting with my afc team uh to clarify some of these questions and i was told we don't use
[2:27:09] this so um hopefully this is a question you can repost during the training um uh the next uh rsi training uh sessions
[2:27:19] right okay question number 19 is there significant impact in images formed by different polarizations hhb vhv uh
[2:27:30] yeah so again hopefully i understand this question so absolutely so once you start to work with radar data
[2:27:36] and you uh you know you can display an hh cross pull and bv image you're going to see that
[2:27:43] the intensity that you see from amongst those different polarizations will be quite different um it's very target specific so whether
[2:27:53] it's forestry or agriculture wetlands you will have to you know do some um investigating of that for your own
[2:28:01] application but as i said always think about you know how that energy is the polarization and how
[2:28:08] that energy is propagated and what is the structure of of the target target and and that's why you're going to see
[2:28:17] those changes but it's they're there and we exploit that to be able to differentiate from one target to another
[2:28:27] okay um question 20 how can we take care of the geometric geometric distortions that you mentioned mentioned in areas of complex topography
[2:28:38] so i'm going to give a brief answer and then erica i was hoping you probably have more experience
[2:28:44] in this i mean it's a challenging uh topography to use sarin and you can apply dm to do ortho ortho rectification
[2:28:52] for sure but the intensity is is distorted because of these layover and foreshortening impacts um selecting different orbits like
[2:29:00] ascending descending you may have a different look at the target because of the the orbit especially if you have radar shadows uh
[2:29:08] if depending on how the target lines up with the uh the radar um antenna you might be able
[2:29:15] to get a different look at the target but i don't know eric if you had something you wanted to add to that no
[2:29:22] not really i mean usually what i prefer especially in areas that have shadows is just to create a mask of the shadows
[2:29:29] because i find that applying applying different methods to try to fill in those shadows it's never perfect
[2:29:37] and so there are always some issues so i just rather just treat it as no data all right the next one can you explain
[2:29:49] the difference between single and dual polarization uh yep so single polarization is simply we transm the the radar antenna
[2:30:00] transmits one polarization and receives one so it could be h transmit h3z for example but some radar
[2:30:08] antennas can can transmit two polarizations at a time and or receive two polarizations at a time time so an example would be a radar that is
[2:30:19] collecting data in hh and hb okay okay question number 22 how can we retrieve biophysical variables from sentinel one
[2:30:31] radar uh so that's not a straightforward answer because there are a lot of different researchers using different methods
[2:30:42] so of course there's a lot of empirical research where we you collect field data and you create some sort of
[2:30:48] statistical model between the biophysical parameter and the radar response response i mentioned before that we've done a lot
[2:30:57] of work with the water cloud model and i can provide lots of references for that that where we can retrieve lai
[2:31:06] fixation water content or biomass using the water cloud model but there's also a lot of work being
[2:31:14] done now on um you know machine learning type of algorithms uh to retrieve um you know lai biomass
[2:31:23] et cetera so um there's you know there are a lot of different ways of doing that they all
[2:31:29] have their advantages and disadvantages um you know the water cloud model if you want to retrieve la and biomass you also
[2:31:37] have to be able to retrieve soil moisture because that's also a component of the water cloud model
[2:31:43] so you have to have a way to to estimate some moisture either through the model or by ancillary
[2:31:49] data data machine learning methods in all application areas are being widely studied but they're very data driven
[2:31:59] and the success of the machine learning algorithm really depends on the quality and and representativeness of the training data
[2:32:10] but i i have a few papers i can share about that super super okay how about two more questions
[2:32:19] um question 23 waves with higher frequencies have higher energy so these should be able to penetrate deeper
[2:32:26] compared to shorter frequencies but on slide number 42 it is stated that longer wavelengths penetrate deeper can you please clarify
[2:32:37] yeah i was i'm gonna answer this and erica if you have a better answer to this please let me know i i as i said
[2:32:43] these kind of questions i find really interesting because i'm like that's uh uh um this is uh
[2:32:49] this is a um a valid physics representation and um but the the you know we know uh
[2:32:58] absolutely that longer longer wavelengths will penetrate further into soil or into a crop canopy and i was thinking about this question
[2:33:07] and and you know penetration is also impacted by the size of the wave relative to the scatterer and so
[2:33:13] um um if you think about an l-band wavelength for example that could be 20 centimeters long and we have a you know a small
[2:33:21] uh a canopy with very small leaves on it those leaves are not going to create scattering from that l-band wavelength
[2:33:30] but i don't know eric if you had a better answer than that no that was great heather okay
[2:33:38] so how about then the last question here how deep can the radar signal penetrate into the soil
[2:33:47] uh so this is not a straightforward answer either because um it's going to depend on the radar wavelength we just
[2:33:54] talked about that in the previous um in the previous question so um x-band c-band l-band all have
[2:34:02] different penetration depths and it depends on the instance angle as well as we saw um and it so those are the star
[2:34:10] characteristics that drive penetration depth but it also depends on how much water is in the soil or in the target in
[2:34:18] general and so um you know scattering will happen once we have uh you know at this sort of
[2:34:26] discontinuity where we have uh you know water present in the target so as soon as the radar wave
[2:34:33] you know encounters uh water in the target scattering starts and so soils that have a lot of water in
[2:34:40] it the penetration depth is the last uh so just to recap you know longer wavelengths l-band will penetrate
[2:34:47] further than x-band incidence angle will also impact penetration depth and if we have a a very dry soil the wave will
[2:34:55] penetrate further than if we have a very wet soil but we do know just as a general comment
[2:35:03] that that we you know we favor longer wavelengths like l-band for soil moisture retrieval and the penetration is is a few
[2:35:12] centimeters in agricultural soils where we do have water present usually okay so let's um stop it there since we're already past
[2:35:26] our time um i would like to remind everyone that the second session will be on thursday and we will have fabrizio ramoino and
[2:35:38] magdalena magdalena from the european space agency presenting on how to process sentinel 2 data using the snap
[2:35:46] toolbox and they will provide a refresher on optical processing optical data data so so with that um thank you all very much for
[2:35:57] attending and thank you dr mcnaren for your excellent presentation and for handling all these questions there are
[2:36:04] quite a number of questions that we didn't get to but we will answer those on the document and put it on the rsep
[2:36:10] webpage webpage um um heather any closing words before we close the session no not not uh not really erica just
[2:36:20] thanks for the opportunity and and as i said if uh we didn't uh if i didn't adequately answer your question uh
[2:36:26] please reach out to me some of your questions will be answered in the next uh our set training sessions
[2:36:34] okay super so thanks everyone and wishing you all a great day bye
