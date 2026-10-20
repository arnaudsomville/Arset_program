# SAR Polarimetry for Agriculture (Theory and Practice), Part 1/4

`https://www.youtube.com/watch?v=-Mq5A9aXIuc` · id 76 · 2:30:39 · module 21 — Mapping Crops and their Biophysical Characteristics with Polarimetric SAR and Optical Remote Sensing

[00:02] welcome to the first part of the rset training training mapping crops and their biophysical characteristics with polarimetric
[00:09] synthetic aperture radar and optical remote sensing my name is sean mccartney and i'm joined today by my colleague sarah banks from
[00:18] environment and climate change canada and laura dingle-robertson from agriculture and agri-food canada this four-part advanced training builds
[00:30] on the previous rset agricultural training held in october of 2021 for those unfamiliar with the applied remote sensing training program or our
[00:42] site site our ourset is part of nasa's applied sciences capacity building program our set provides accessible relevant and
[00:51] cost-free training on remote sensing satellites sensors methods methods tools and applications trainings are offered online and in
[01:03] person for beginners and advanced practitioners alike though unfortunately due to the covet 19 pandemic the program has suspended
[01:12] in-person training trainings cover a range of data sets and analysis tools and their applications to air quality
[01:21] agriculture disasters land and water resources management our set's goal is to increase the use of earth science remote sensing and model
[01:33] data in decision making through training for professionals in the public and private sector environmental managers policy makers
[01:43] trainings are freely available to anyone with an internet connection and conducted either live instructor-led or self-guided such as our fundamental to
[01:53] remote sensing since 2009 the program has reached over 50 000 participants from over 170 countries countries all our set materials are freely
[02:05] available to use and adapt for your curriculum curriculum if you use the methods and data presented in our set trainings
[02:14] please acknowledge the nasa applied remote sensing training program over these four weeks there will be four two and a half hour
[02:24] sessions which will include presentations presentations case studies and question and answer sessions the same content will be presented at
[02:33] two different times each day session a will be presented in english and session b will be presented in spanish
[02:41] all materials and recordings from each session will be available from the training webpage provided by the link on
[02:48] this slide there will be one homework assignment for all four parts of the training answers must be submitted via google
[02:58] form which can be accessed from the training page on the rset website homework will be made available on may
[03:05] 3rd with a due date of may 17th a certificate of completion will be awarded to those who attend all live
[03:12] webinars and complete the homework assignment by the deadline you will receive a certificate approximately two months after the
[03:21] completion of the course from marinas martin the prerequisites for this four-part training are rset's fundamentals of remote sensing session 1
[03:35] introduction to synthetic aperture radar and agricultural crop classification with synthetic aperture radar and optical remote sensing links to each of these trainings are
[03:47] provided and we encourage you to go through them to familiarize yourselves with content directly related to this
[03:54] training this slide outlines what each part of the four-part training will cover from april 12th through may 1st
[04:05] we hope you would join us for all four parts to gain as much value from the training as possible
[04:11] if you are not able to attend one or more parts a recording will be made available within 48 hours of the training day on
[04:19] the rset website regarding training objectives for this webinar series by the end of this training attendees will be able to
[04:31] explain the theory behind sar polarimetry especially as related to crop characteristics attendees will be able to generate
[04:40] polarimetric parameters using open source imagery and software and perform a time series analysis of crop growth identify how send for stat can support
[04:53] national statistical offices in the uptake uptake of satellite earth observations for agricultural statistics and finally perform a time series
[05:04] analysis of crop types using sentinel-2 derived leaf area index i will now hand it over to sarah banks
[05:14] from environment and climate change canada to provide the theoretical background using sar polarimetry for agriculture agriculture sarah over to you
[05:30] hello everyone my name is sarah banks i'm a physical scientist with environment and climate change canada and a phd student in the department of
[05:38] geography and environmental studies at carleton university in ottawa canada today i will be presenting the first of
[05:44] four sessions on mapping crops and their biophysical characteristics with synthetic aperture radar and optical remote sensing in this lecture i will focus on the
[05:55] theory of star polarimetry over the course of this lecture we will cover four main topics we'll start with a very short review of
[06:05] electromagnetic electromagnetic radiation followed by a discussion of the system characteristics that define a sar sensor we will then go over some common sar
[06:15] imaging modes and finally talk about polarimetry polarimetry now to fully grasp the contents of this lecture it is strongly recommended that
[06:23] you review the prerequisite material shown on the right hand side of the screen from the prerequisite material you will
[06:35] recall that electromagnetic radiation is commonly conceptualized as behaving like a wave and there are different ways that
[06:43] these waves can be described mathematically mathematically for simplicity we typically base their profile on sine or cosine curves which
[06:52] are just mathematical functions or mathematical curves that are useful for modeling periodic or cyclical phenomena and it is convention to represent these
[07:02] curves on a right-handed cartesian cartesian coordinate system with the z-axis indicating the direction of travel the x and y planes are then defined at
[07:13] the sensor with convention also being that the x-axis is parallel to the earth's surface now that i've reminded you all of what
[07:25] electromagnetic radiation is we can get into an important system property of star sensors which is their polarization
[07:34] now you've likely seen a figure like this before with the blue line used to represent the electric field of an
[07:39] electromagnetic wave and most of the time it is oscillating in the vertical direction but the electric field of an
[07:49] electromagnetic wave can actually oscillate in any direction in this example you can see that the electric field is oscillating
[07:56] horizontally but again this can be at any angle perpendicular to the direction of travel and the reason why this is important to
[08:05] know know is because polarization describes the orientation and shape that's traced by the wave's electric field so why is this important well radars
[08:17] only transmit and receive microwaves of a specific polarization here for example we can see that this radar antenna can only transmit and
[08:26] receive vertically polarized microwaves now it's also important to know that electromagnetic radiation can also be completely unpolarized or only partially
[08:39] polarized polarized light that is emitted by the sun for example shown here in black and gray is
[08:46] an example of completely unpolarized electromagnetic radiation whereas what is transmitted by a star sensor is completely polarized and we
[08:56] have an example of that shown in blue so there can be varying degrees of regularity to the electric field vector
[09:05] waveform when completely unpolarized the electric field oscillates randomly and when completely polarized oscillation is in the plane of
[09:15] polarization at all times and when there is partial polarization there is a combination of both again first our sensor though the
[09:26] transmitted signal is always polarized though what is received following interaction with the surface or a target is either partially or completely
[09:35] unpolarized most of the time and we can quantify the degree of polarization which is the ratio of the
[09:41] polarized power power to the total power most radars today transmit and receive horizontally polarized or vertically polarized microwaves
[09:54] regardless of what is transmitted though the backscattered wave can have a variety of polarizations and it is the
[10:01] analysis of these different transmit receive polarization combinations that is the focus of radar polarimetry now that we know a bit more about
[10:14] polarization we can talk about phase and polarization together which is really important for understanding radar polarimetry before we begin to talk about phase
[10:24] though i wanted to start by describing what a vector is because we use this term and conceptualization a lot in
[10:31] radar polarimetry so you can think of a vector as a quantity with both direction and magnitude magnitude typically vectors are represented as
[10:40] arrows with the head at some point and the tail at the origin or using an ordered list of numbers
[10:48] we can denote a vector using bold face text or sometimes using an arrow over the number if you have a vector and want to refer
[10:57] only to its magnitude though you can use two vertical bars as shown here and an example of a vector you all may
[11:07] be familiar with is velocity which is just speed in a given direction you can represent vectors on a cartesian
[11:16] coordinate system and it is worth noting that we can use the same notation for a vector and point because you can
[11:23] essentially think of a point as being a vector with its tail at the origin of the coordinate system where the x and y
[11:30] axes cross in linear algebra which is something that we use in radar polarimetry the tail is usually at the origin where the
[11:38] x and y axes cross as well when we use a list of order numbers to represent a vector essentially this list
[11:48] tells us how to go from the tail or origin origin to the head and it is convention to
[11:54] write this list vertically using square brackets one of the reasons why we use vectors is that it's easier to manipulate
[12:04] coordinates than direction and magnitude here i'm also showing how we can determine the magnitude of the vector
[12:11] which is equal to its length to do this we simply use pythagorean theorem which states that the square length of the
[12:18] hypotenuse of a right angle triangle is the sum of the squares of the length of the other two sides
[12:25] so to get the magnitude of the vector shown here we simply take the square root of 2 squared plus 3 squared
[12:36] vectors can also be added together really easily here i'm showing you two different vectors a and b and adding
[12:42] these is really just the equivalent of translating b's tail to the head of a then the new vector represented by c
[12:54] is the direct line segment from the tail of a to the head of b and what's really interesting is that
[13:00] the order of addition doesn't matter a plus b is equivalent to b plus a again you can think of it like a list of
[13:14] directions here i'm showing you the addition of vectors a and b using a list of values in this case we
[13:24] can think of it like walking along the x direction by 5. moving up along the y direction by 5
[13:38] then along the x direction by 2 and down in the y direction by 2 which is again equivalent to drawing a
[13:49] line from the tail of a to the head of b and if we know how to add vectors this
[13:57] can be really useful for visualizing something called interference which is when waves occupy the same space or move
[14:04] simultaneously through the same medium and depending on differences in their phase which we'll talk about shortly we
[14:11] can have either constructive or destructive interference so what i'm showing you here is multiple different vectors each of which
[14:19] represents a different wave which you can think of as occupying the same space at the same time
[14:26] and the product of all these ways is simply the sum of all of their amplitudes and phases together
[14:34] which i'm showing you here as the final vector in purple so now that we know what vectors are we
[14:56] can talk about phase which is really important in sar polar metry to start there's really this interesting
[15:04] relationship between sine waves and circles i have a short video clip which shows a vector rotating in an
[15:10] anti-clockwise direction about a fixed point point now the length of this vector remains the same but the distance between the
[15:17] head of this vector and the horizontal axis changes through time and if we map these changes in distance
[15:24] through space we can see that a sine wave is formed as that vector makes a full 360 degree rotation
[16:03] now remember that these waves model repeating cyclical phenomena so you can think about waves in terms of cycles with a
[16:11] beginning middle and end after which the same shape repeats with this in mind you can see that we can use the relationship
[16:18] between circles and sine waves to measure phase or the stage of the wave cycle cycle and because one complete rotation of
[16:26] that vector draws out the equivalent of one complete wave cycle we can express express phase in degrees which simply
[16:34] measures the angle made between the vector used to represent the wave and the horizontal x axis as shown
[16:42] and and which we represent using the greek letter phi so one quarter of a wave cycle can
[16:49] be represented by a rotation of 90 degrees wave cycle can be represented by rotation of 180 degrees
[17:01] three quarters of a wave cycle by 270 degrees degrees and a full wave cycle by 360 degrees
[17:14] and remember that the length of the vector represents the wave amplitude so with a vector we know both the wave
[17:20] amplitude and its phase and at different stages in the wave cycle we can see how a wave's amplitude changes by projecting
[17:28] the length of this vector onto the y y-axis so how is this information useful well it's important to first know the
[17:38] initial phase or the stage at which the wave cycle begins but with that we can start to look at
[17:47] differences in phase between different waves waves phase differences measure measure the offset in space or time of one wave with
[17:56] respect to another waves can be said to be in phase if their origin origins of phase 0 degrees are perfectly aligned when
[18:05] this is not met though waves are said to be out of phase in this example below i'm showing you
[18:11] two waves which happen to be which happens to have the same amplitudes but are out of phase
[18:19] and in this example i'm showing you two waves that happen to be in phase but with different amplitudes
[18:28] and finally in this example we have three waves with equal amplitudes two of which are in phase and another that is
[18:35] phase shifted by 180 degrees phase is also useful for characterizing polarization which we'll talk about later later and is key
[18:51] to interferometric sar which uses differences in phase to measure changes in the position of targets targets phase is also impacted by the structure
[19:01] of a target so by looking at differences in phase it can help us distinguish between them despite the fact that phase information
[19:12] can be very useful it's not always available or calibrated two common types of data you will encounter are single
[19:20] look complex products where phase is available this includes radar set 2 fine wide quad pole mode data and raw slc sentinel 1 data
[19:31] there's also ground range detected products where phase information is not available available and then an example of this includes the
[19:39] sentinel one grd products available on google earth engine so each wave has a phase angle describing at what stage in its wave
[19:51] cycle it's in as well as an amplitude which is related to its power within this context we can use something
[19:59] called complex numbers to store both values values so you can think of this as just another way that we can describe ways
[20:06] mathematically mathematically so every complex number has both a real value and imaginary value expressed using the following equation
[20:15] where x and y are real numbers and i is what's called the imaginary unit or the number whose square is equal to negative
[20:22] one one sometimes the symbol j is used instead of i which is more often the case in in
[20:29] electrical engineering well i is more common in physics and math and the reason why it's called the imaginary
[20:36] number is because i is not defined you just have to imagine what it is here in the figure below you can see
[20:45] that we have just replaced the x and y axes from our previous examples with what are called the real and and
[20:51] imaginary dimensions with this we have one complex number with a real value in the real dimension and
[20:59] and a value in the imaginary dimension as well well so imagine again that this point is actually a vector then the phase is
[21:06] represented by the angle this vector makes with the real dimension measured in the anti-clockwise direction and its
[21:14] and its magnitude is equal to its length now if that sounds a bit confusing you can just think of complex numbers as a
[21:25] construct construct a construct just like negative numbers which didn't always exist either in fact we can compare complex and
[21:33] negative numbers to make them easier to understand understand for example a negative number might seem strange because how can you have less
[21:41] than nothing well a complex number is also strange because how can you take the square root of less than nothing
[21:48] for both though there are intuitive meanings meanings for negative numbers you can consider that they mean the opposite and for
[21:55] complex numbers the intuitive meaning is rotation rotation if we think about their use in coordinate systems negative numbers are
[22:04] used to move backward from the origin and complex numbers can be used to effectively rotate about the origin
[22:15] so if you think of each complex number as a vector with the tail tied to where the imaginary and real axes cross then
[22:23] the phase is the angle made between the horizontal or real dimension and the vector in the anti-clockwise direction
[22:31] with values ranging from 0 to 360 degrees degrees and the total wave amplitude is the length of this vector
[22:40] but you'll oftentimes see this value expressed in linear power which is equal to the amplitude squared to get that value again to get that
[22:49] value you again use pythagorean theorem you take the magnitude in the real direction a square it then take the magnitude in the
[22:59] imaginary direction b square it add those together to get the length of z squared squared which is the amplitude
[23:16] now that we know about phase we can talk a bit more in depth about polarization again polarization describes the
[23:23] orientation and shape traced by the wave's electric field and it is convention to consider the shape traced
[23:29] by the tip of that rotating vector projected onto a plane or flat surface so in this example i'm showing you a
[23:36] wave with an electric field oscillating in the vertical direction the blue line represents the path traced by the tip of the electric field vector
[23:44] through space and time now let's imagine that this path that blue line is a solid object if we were to shine a light behind it
[23:53] then project that shape onto a plane it would just be one vertical line and this is what we call linear vertical
[24:02] polarization now imagine that the electric field vector is just oscillating in the horizontal direction parallel to the
[24:14] x-axis x-axis the red line again really represents the path traced by the tip of the electric field vector through space and time
[24:23] now again let's imagine that this path this red line is a solid object if we were to shine a light behind it then the
[24:31] shape the object would project onto this flat surface would just be a horizontal line line and this is what we call
[24:38] linear horizontal polarization linear vertical and linear horizontal are the two most most important polarizations because most radars
[24:52] transmit and receive linear horizontal and linear vertical now the linear refers to the fact that a straight line is being traced by the tip
[25:01] of the electric field vector and horizontal and vertical refers to the fact that the fact that oscillations
[25:08] are along the x and y axes respectively but again it's important to remember that the electric field can oscillate at
[25:18] any angle and in fact we can measure what's called the waves orientation angle which is simply the angle made between the wave and the
[25:26] horizontal x-axis shown here and measured in an anti-clockwise direction values therefore range from 0 to 180 degrees and are represented using the
[25:38] greek letter psi and now what i'm showing you are just some different orientation angles you can have
[25:48] but again two very important orientation angles to remember are linear horizontal at 0 degrees and linear vertical at 90 degrees
[26:07] up until this point though we have only seen linearly polarized waves but that's only one of three different
[26:14] canonical polarization states so in addition to linear there's also elliptical and circular polarization before we dive into those though what's
[26:25] interesting is that we can describe the polarization state of any wave by fitting two orthogonal waves to the
[26:32] total wave cycle by convention we use one along the vertical and one along the horizontal axis axis and this might sound a little bit
[26:41] confusing but let's see how it works for circularly polarized waves for circular polarization you can think of it as the superposition of two linear
[26:54] orthogonal waves that are 90 degrees out of phase and have equal amplitudes and superposition really just describes
[27:02] the behavior of waves that occupy the same space and time as they travel through a medium now in this example what i'm showing you
[27:13] is a linear vertical polarized wave in wave in blue and we know that the shape traced by the
[27:19] tip of that electric field vector will just be a vertical line we also have a linear horizontal wave on
[27:27] the right hand side shown in green and we know that the shape trace by the tip of that electric field vector will just
[27:34] be a horizontal line now both ways have equal amplitudes and they are 90 degrees out of phase so to
[27:42] get circular polarization we're just going to superimpose them or make them occupy the same space at the same time
[27:50] but how does this make a circular shape when we project this onto a plane to visualize this let's say that this house
[27:57] is our target and you can think about the difference in arrival time to the target for each part of the wave
[28:03] and i want you to focus on when each wave reaches its maximum amplitude if i look at the green wave it arrives
[28:11] first first it reaches its maximum amplitude at the house first the second component to arrive would be
[28:19] the the vertical vertical followed by the other horizontal component component and then the other vertical component so if we take all those together the
[28:33] shape that's being traced out in time is actually a circle now this animation is showing you what i
[28:44] was just describing and the red line is what you should be focusing on which is the tip of the rotating electric field
[28:50] vector vector and it's tracing a circle through space and time so now that we have a good understanding
[29:01] of what linear and circular polarization is let's talk about elliptical polarization polarization now it's important to know about
[29:10] elliptical polarization because this is the typical polarization state of what is back scattered by the surface linear and circular polarization can
[29:20] therefore be thought of as special cases and this is typically the polarization that sar sensors transmit so elliptical polarization can be
[29:35] described in a similar way to circular polarization you can think of it as the superposition of two linear orthogonal
[29:42] waves waves though in the case of elliptical polarization they are not 90 degrees out of phase and or they do not have the
[29:49] same same amplitudes amplitudes so in this example we again describe the full wave cycle by fitting one vertical
[29:58] and one horizontal wave and the shape being traced out through space and time by the tip of the
[30:05] electric field vector is an ellipse and again it's possible to describe any wave using just two orthogonal
[30:20] components usually one oriented along the horizontal axis and the other oriented along the vertical axis and it's possible to characterize the
[30:34] degree of non-circularity of a wave using something called the ellipticity or eccentricity and that's just a function of the
[30:43] semi-major and semi-minor axes a and b shown here and which is represented by the greek letter chi
[30:52] values are measured in degrees and range from the positive to negative forty-five so in this example i'm showing you a
[31:01] wave with new tips ellipticity of 34 degrees but let's look at how that can change depending on the relative
[31:12] size difference of the vertical and horizontal components so wave will tend toward the horizontal as the vertical component tends to zero
[31:20] and vice versa so let's see what happens if this wave tends more to the horizontal horizontal we can see that the vertical component
[31:29] starts to decrease and again any polarization state can be described by two linear orthogonal waves as long as the phase is also measured
[31:40] so what's interesting is that if our sar sensor can measure just two orthogonal components we can measure circular
[31:47] linear and or elliptical polarization now we can combine both the ellipticity and orientation angle in the first
[32:01] example example the orientation angle this wave is 45 degrees measured again from the positive x x axis in the anticlockwise direction
[32:11] though the ellipticity here is zero in the middle we have a wave with the same orientation angle 45 degrees
[32:21] but an ellipticity of 34 degrees now for the circular polarization on the right again we have an ellipticity of 45
[32:29] degrees but we do not define its orientation angle but as we saw chi values can be negative
[32:41] let's look at why both ellipticity is both elliptically and circularly polarized waves have a handedness or a
[32:50] direction of rotation which just tells us if the vector tip is rotating clockwise or anti-clockwise in this example we have the viewer
[32:58] located at the source of the wave looking toward the direction of travel the example closest to the viewer shows
[33:05] a wave spinning in the anticlockwise or left-handed direction while the one farthest from the viewer shows a wave
[33:11] spinning in the opposite direction or clockwise direction in the example on the left in the example of the left hand of
[33:21] rotation chi values would be negative and in the right-handed rotation chi values would be positive but when you view these same waves from
[33:30] the target toward the source both ways would be rotating in the opposite direction so it's really important to understand
[33:45] that the direction of rotation depends on where you are viewing the wave from there are two different conventions that
[33:52] are used that you should be familiar with with in all cases we define a coordinate system by three axes so we have
[34:00] something called the forward scatter alignment convention where the positive says axis always points in the direction of travel
[34:07] and we have the back scatter alignment convention where the positive z-axis always points towards the target now the backscatter alignment convention
[34:17] is more commonly used but it's important to know that both do exist remember though that waves can be
[34:27] completely unpolarized which is when the electric field vector oscillates randomly and there is no clearly defined polarization
[34:36] polarization there are also completely polarized waves where these oscillations are in the plane of polarization at all times
[34:43] and then you can have waves that are partially polarized which is really the superposition of many different
[34:49] polarizations with one or more being dominant now the wave that's transmitted to the target is always fully polarized but
[35:01] what we get back from the target depends on the characteristics of it we can define two different types of
[35:07] targets coherent and incoherent backscatter from a coherent target is completely polarized and examples include things like buildings
[35:17] on the other hand backscatter from incoherent targets can be partially or completely unpolarized most natural surfaces fall
[35:26] into this category and includes things like trees which are made up of multiple randomly oriented elements like leaves needles trunks and
[35:35] stalks stalks resulting in multiple waves that are scattered from all these that vary in phase and amplitude or power again the
[35:44] back scattered wave is a superposition of all these waves and we can define the degree of polarization as the ratio of
[35:51] the polarized power to the total received power so now we'll talk about some common sar imaging modes as we as we've mentioned
[36:04] sar sensors are designed not only to transmit microwaves of a specific polarization but to also receive a
[36:11] specific polarization only so it's necessary not only to define the polarization of the transmitted wave but also the polarization that's received
[36:23] to do this we use a combination of two letters letters the first always indicates what polarization was transmitted and the
[36:31] second always indicates what polarization was received again the most common transmit received polarizations are some combination of
[36:41] linear horizontal represented by h and linear vertical represented by v so again what i'm showing you here is
[36:52] the first letter indicating the transmit polarization polarization and the second letter indicating the receive polarization now what is transmitted by the sensor is
[37:09] very closely controlled so the wave that arrives at the target is fully polarized say in the linear vertical or linear
[37:17] horizontal horizontal but just because that's what's transmitted doesn't mean that's all that we will receive remember that linear and circular
[37:25] polarization are special cases and that most often waves are elliptically polarized polarized meaning that they have both a vertical
[37:33] and horizontal component that are not 90 degrees out of phase and or differ in amplitude and remember that we can describe any
[37:42] electromagnetic wave using a linear horizontal and linear vertical wave fitted to the entire wave cycle cycle so now what i'm showing you is the
[37:53] transmission in the linear vertical and what is back scattered is elliptically polarized meaning that it contains both a vertical and horizontal
[38:07] component component but because our polarization is also vertical on receive the polarization is vb we can only
[38:16] receive the vertically polarized component and that's also true if we transmit in the h and receive in the h
[38:26] so what i'm showing you here now is our sensor transmitting linear horizontal and then just receiving that which is
[38:33] also linearly horizontal polarization there is some vertical component but we can only receive the linear horizontal because our received polarization is
[38:45] linear horizontal now all other factors being equal returns for a given polarization depend on the amount of energy that hits the
[39:00] target so it's proportional to the target cross-section in other words the size and orientation of the target and the polarization of
[39:09] what is transmitted determin determines the amount of energy that's returned now what i'm showing you here are the
[39:15] returns for both linear horizontal and linear vertical from a given target shown in grey now as i rotate that target towards the
[39:27] horizontal plane we can see that our returns in the vertical start to decrease decrease and as we continue this rotation
[39:39] and the target becomes more horizontally oriented returns in the hh polarization increase while returns in the vv
[39:47] polarization decrease so when you transmit and receive the same polarization it's referred to as co-polarization but it's also possible
[40:02] to transmit one polarization and receive another another we call this cross polarization and in this example what i'm showing you is vh
[40:11] where we transmit in the linear vertical and noting again that just because we transmit linear vertical doesn't mean that that's
[40:25] all that is scattered back towards the sensor but in this case we're just going to be re receiving in the linear horizontal
[40:46] so when incident microwaves encounter a rough surface returns are mostly in the same polarization as what was
[40:53] transmitted transmitted however when scattering is within a volume or medium such as when incident microwaves encounter a vegetated canopy
[41:02] something called volume scattering occurs where incident microwaves interact with varying elements within the canopy and this generally results in higher
[41:12] cross pull returns so higher hv or vh so with linear horizontal and linear vertical there are four possible
[41:23] transmit received combinations we can have hh where we transmit in the linear horizontal and receive in the
[41:30] linear horizontal hv where we transmit in the linear horizontal and receive in the linear vertical vertical vh where we transmit in the linear
[41:42] vertical and receive in the linear horizontal horizontal and vv where we transmit and receive in the linear vertical
[41:56] with just one polarization though this really only provides sort of one dimensional information about the surface or target
[42:05] so with just one polarization we can really only talk about varying degrees of brightness and while that can be useful for
[42:12] distinguishing certain targets it can also be advantageous to collect more than one polarization so in fact some star sensors are dual
[42:22] polarized polarized and some of those also record the phase difference between different polarizations polarizations and these are called
[42:31] coherent dual pole radars for those that only record intensity information though we call those standard dual pole stars
[42:45] so there are only three combinations possible with dual polarized star sensors including hh and hv where linear horizontal is transmitted
[42:54] and both linear horizontal and linear vertical are received there is also vv and vh where linear vertical is transmitted and
[43:04] both linear horizontal and linear vertical vertical are received and then we have hh and vv where both
[43:12] eight linear horizontal and linear vertical are transmitted and both are also received now the copol phase difference which
[43:29] measures the phase difference between hh and vv can be really useful for characterizing the structure of targets
[43:36] as values are indicative of the number of bounces incident microwaves experience before returning to the sensor sensor when the phase difference is zero
[43:46] we can interpret this as an odd number of bounces and this is characteristic of scattering from a rough surface
[43:53] a phase difference of 180 degrees can be interpreted as an even number of bounces and is characteristic of scattering from
[44:01] two perpendicular surfaces which is called double bound scattering and values between these two extremes are then interpreted as indicative of
[44:11] volume scattering so every time there's a surface interaction hh and vv go in and out of phase
[44:21] phase when there's an odd number h and v v are in phase and when there is an even
[44:27] number hh and vv are out of phase there is also a cross pull phase difference but it's usually quite random
[44:37] there is also a quad pole or polarimetric radar which is the equivalent of transmitting and receiving all single polarizations
[44:46] and also recording the phase differences between them polarimetric or quad pole radar requires the transmission and reception of two
[45:00] orthogonal polarizations which are typically linear horizontal and linear vertical vertical and to do this a switch directs energy
[45:09] to the horizontal and vertical parts of the antenna in sequence and and the horizontal and vertical are received
[45:17] simultaneously simultaneously and for this to be fully polar metric their relative phase differences are also recorded so again this is equivalent of capturing
[45:28] all four single polarizations together as well as their relative phases and so one of the advantages of
[45:42] collecting quad pole or fully polar metric data is that you have the information available to characterize so-called scattering mechanisms which
[45:51] help us identify targets and or surface types as well as monitor changes in what we call scattering behavior through time
[46:00] and these are generally these are roughly categorized as rough surface scattering which is characteristic of rough surfaces
[46:09] volume scattering which is typically observed for vegetated surfaces and double bound scattering which we often see for
[46:18] buildings so the main benefit of fully polarimetric radar is that they can capture complete scattering characteristics characteristics
[46:32] including target orientation and we can do something called polarization synthesis which allows us to simulate the transmission and
[46:43] reception of any polarization combination combination even though we just transmit and receive linear horizontal and linear vertical
[46:50] which can help improve the detectability of targets and or the contrast between them some of the cons of fully polarimetric
[47:02] radar radar are though that it requires two times the pulse repetition frequency or data rate and power usage of a dual polarized
[47:11] sar sar and the available power and data rate are extremely limited for spaceborne platforms platforms so to keep the power usage constant the
[47:20] swath is often half of that half that of dual pole data an alternative to fully polarimetric or
[47:31] quad pole radar is something called compact pole which is when one polarization is transmitted and two orthogonal polarizations and the
[47:40] relative phase are received and really the main benefit is that these systems operate at half the pulse
[47:46] repetition frequency of fully polar metric radars which allows them to acquire images or very large swaths now this can be implemented in a number
[47:56] of different ways though the preferred way is to transmit a circularly polarized wave and then receive both in
[48:05] the linear horizontal and linear vertical vertical and there are several satellites with the compact pole option including aloe 2
[48:12] rysat-1 rysat-1 seocom the radarsat constellation mission and nysar so in this figure i'm just showing you a
[48:26] visual visual visualization of this transmission in the right hand circular and receiving both linear horizontal and linear verticals simultaneously
[48:37] as well as their relative phase so with all this information we can finally talk about polarimetry which is
[48:48] the science of acquiring processing and analyzing the polarization state of an electromagnetic field so essentially what we transmit is a
[48:58] fully polarized wave there's an interaction between the target and that wave and then we receive typically multiple
[49:06] waves of varying amplitudes and phases which are partially or completely unpolarized most often and so in radar polarimetry we study why
[49:17] and how these differences arise based on the characteristics of the surface including roughness orientation and shape so for this part of the lecture we're
[49:36] going to be going over three different things we're start we will start with a review of what vectors and matrices are
[49:43] and then we'll talk about commonly used vectors and matrices in sar polar metry and then we'll talk about decomposition
[49:58] we go any deeper into polarimetry it's important not only to know about vectors but also about matrices so let's do a
[50:05] quick review of what a matrix is and have a short introduction on matrix algebra algebra a matrix is really just an array of
[50:12] numbers arranged in m number of rows and n number of columns and we use these a lot in radar
[50:18] polarimetry both to store and transform our data a vector can also be considered a matrix with one row or one column
[50:27] by default though we use the column form and the dimensions of the matrix are given in terms of m number of rows and n
[50:35] number of columns when referring to a specific element of a matrix we identify the row and then
[50:46] the column in this example we're looking for element 1 2 shown in red that would be the first row
[50:55] second column in the second example shown in green we're looking for the element stored in the first row and third column
[51:05] and in the example shown in blue we're looking for the element stored in the second row third column
[51:16] let's look at the differences between vectors and matrices a vector is just an ordered list of numbers
[51:23] numbers with one row or one column and a matrix is an array of numbers of one or more rows and columns
[51:35] by storing our data in a matrix format we can apply a lot of interesting transformations we can add and subtract
[51:41] values and multiply them and another useful thing we can do is transpose our matrix which is just
[51:48] mirroring the matrix along the main diagonal diagonal in this example we're transposing matrix a a and we use the sub the superscript t
[51:57] to remind ourselves that the matrix has been transposed if we want to add and subtract matrices we just add and subtract elements that
[52:08] are in the same position and this means that in order to add and subtract matrices they have to have the
[52:14] same dimension so in this example we're adding matrix a to make sure matrix b and we simply just
[52:23] add all the elements that are in the same position to form the final matrix c shown in purple
[52:31] and i won't go into the same amount of detail here but it's the same process if we want to subtract matrices
[52:42] multiplying matrices is more complicated though though here we will show you an example of how to multiply matrices but it's worth
[52:51] noting that this this is a construct uh this was something that was invented it could have been done a number of
[52:57] different ways but this is the way that's been defined so let's say that we have two different
[53:02] matrices a and b well we can only multiply them if the number of columns of a is equal to the number of rows of b
[53:13] so in this example both matrices are two by two so a simple trick to tell if they can be
[53:19] multiplied is to list the size of both matrices and look at the two numbers closest together if these are the same then
[53:28] those two matrices can be multiplied it's also important to note that the order of multiplication matters so how do we do this let's first look at
[53:46] the top left entry this is the product of the first row with the first column the top right entry is the product of
[53:58] the first row with the second column the bottom left entry is a product of the second row with the first column
[54:07] and the bottom right entry is the product of the second row with the second column so now let's talk about some different
[54:20] ways we can characterize our data using some common vectors and matrices as we saw previously the wave vector is
[54:30] the simplest way to describe wave polarization mathematically but it's also not always the most practical so something that was introduced was is
[54:43] called the stokes vectors which fully describe both fully and partially polarized waves and to make things easier they're usually stored as a
[54:52] vector vector you'll sometimes see these represented using i q u and v or using some combination of s and four subscripts
[55:01] sometimes starting at zero or one for now we're going to stick to the iq unb convention so you can imagine that for a single
[55:11] pixel you have these four different values stored in four different image bands bands and that would be one way to represent
[55:19] your data for every pixel within your image the first element i is simply equal to the total wave power or intensity
[55:32] and remember that the total power or intensity is the total amount of energy in the wave which is equal to the
[55:38] amplitude squared now you may be wondering why we square the amplitudes it's because we're just interested in
[55:51] this length here and you'll remember that the length of c squared is simply the sum of the length
[56:02] of b squared plus the length of a squared and the brackets used in this equation indicates the averaging was applied over
[56:16] time which is necessary when waves are partially polarized note that this first parameter does not contain any polarization information
[56:25] it's just the total power or intensity of the wave and if we wanted to calculate the amplitude we would simply take the
[56:38] square root of the sum of each magnitude in the horizontal and vertical direction q is the second stokes parameter and
[56:49] it's useful if we want to know how linearly polarized the wave is so what we do is just take the
[56:55] difference between the horizontal and vertical components and this just tells us the extent to which the wave is
[57:01] vertically or horizontally oriented when values for q are greater than zero this indicates more vertical orientation and when values are less than zero it
[57:12] indicates more horizontal orientation now we need an additional term u because if waves were oriented at the positive
[57:25] 45 or at negative 45 degrees they would still be linearly polarized but q would be equal to zero
[57:34] so u tells us the extent to which the wave is polarized at the positive or negative 45
[57:40] when u is greater than 0 it's more oriented in the positive 45 direction and when it's less than 0 it's more
[57:48] negative 45. the final parameter tells us about the handedness of the rotation so whether it's rotating in the
[57:59] clockwise or right-handed direction or in the anti-clockwise or left-handed direction direction when values are greater than zero that
[58:07] means it's rotating in the left-handed direction and when it's less than zero it's rotating in the right-handed
[58:13] direction and all these parameters together can provide a clear picture of both the intensity and polarization state of the
[58:24] wave wave for waves that are completely polarized we don't have any value for q u and v
[58:31] because these describe the polarization state of the wave but we do have intensity and there are equal parts in the horizontal and
[58:39] vertical dimension because the electric field vector is just rotating randomly in all directions so both are actually equal
[58:53] for linearly polarized wave we have a positive value for both i and q q whereas u and v are equal to zero
[59:03] for a linearly polarized wave at the negative 45 we have a positive value for i i q is equal to zero u is negative and v
[59:13] is also zero and for a right-hand circular polarization we have a positive value for i u u and q are equal to zero and v is
[59:28] positive indicating a right hand circular orientation and stokes parameters together can also measure the degree of polarization
[59:41] which is just the ratio of the polarized power to the total power so we take the square root and sum of q
[59:50] u and v and divide by the total power when m is equal to one that indicates that the wave is completely polarized
[59:58] and when m is equal to zero that indicates a completely unpolarized wave and when values are intermediate between those two it
[1:00:08] indicates partial polarization but what about quad pole data we would need at least two stokes vectors to
[1:00:18] store all of our intensity and phase information for every channel so because you need at least two sets of
[1:00:30] stokes vectors for fully prolometric sar data the stokes vector representation is always not always the most efficient way to store data
[1:00:40] instead what we can use is something called the scattering matrix here each of the spq elements represent
[1:00:47] each of the four transmit receive combinations of a fully polarimetric radar radar the first letter indicates the transmit
[1:00:55] polarization and the seconds are received so typically these are used to represent the linear horizontal and linear
[1:01:04] vertical combinations it's interesting to note that p and q can actually be any pair of polarizations as long as they are are
[1:01:12] orthogonal so for fully polarimetric star data the stokes vector is not the most efficient way to store data
[1:01:27] because you would need at least two sets of stokes vectors instead what you can use is the
[1:01:35] scattering matrix which describes the transformation of the incident to the back scattered wave here each of the spq elements represent
[1:01:47] each of the four transmit receive combinations of a fully polarimetric radar radar the first is the transmit and the second
[1:01:54] is the receive polarization and p and q can be any pair of polarizations as long as they are
[1:02:01] orthogonal orthogonal and we can represent them in the scattering matrix each element of the scattering matrix is
[1:02:11] also a complex number containing both amplitude and phase information there are four in total and we call hh
[1:02:20] and vvv are copol channels and vh and vv are cross pool and again what what the scattering matrix is really
[1:02:33] doing is describing the transformation of the incident to the back scattered wave so when you open a quad pole or fully
[1:02:44] polar metric image in something like snap you'll see all these different channels one for the real and
[1:02:52] imaginary and one just representing the wave intensity or amplitude squared for most natural features though the scattering matrix only has three
[1:03:13] independent independent parameters hv and vh are reciprocal and that just means that the process is the same forward as it is backwards
[1:03:24] so what usually happens is that we average hv and vh together and that gives us just three independent
[1:03:31] parameters parameters this is advantageous because it provides a more accurate estimate of what you would call your cross pull returns
[1:03:40] and this is great because returns are typically low and closer to the noise floor for these channels so averaging
[1:03:46] improves improves their estimation and when we do this averaging it makes these elements equal and our matrix can
[1:03:57] be said to be symmetric but it's important to remember that when you calculate the total power it must be the sum of all four elements
[1:04:11] so we always have to multiply that cross pole term by two now your scattering matrix will take on
[1:04:21] different forms depending on whether you're using the forward scatter alignment or back scatter alignment convention convention again though the backscatter alignment
[1:04:30] is more commonly used so since there are only three complex measurements once reciprocity has been assumed instead of a matrix what's
[1:04:50] called a target vector can be defined now k as shown here is the target vector in the linear coordinate
[1:04:59] form form and note that each element is a complex number still and the superscript t reminds us that
[1:05:06] the column has been transposed so what you can do is represent each of these elements in an rgb composite
[1:05:24] we can also transform this data into the poly basis which can be more efficient and easier to inter interpret polar
[1:05:32] metric data the poly basis is composed of the sum and difference of the co-pol terms and twice the cross pull terms
[1:05:42] note that these are addition and subtraction of complex numbers which helps to emphasize the difference in phase between hh and vv
[1:05:52] rough surface scattering is dominated by the first term double bounce by the second and volume and or multiple by the
[1:06:00] third from these target vectors other matrices can be defined and these can be considered second order descriptors of
[1:06:16] the scattering matrix which rather than representing the channels themselves as is the case with the scattering matrix
[1:06:23] they characterize this the statistical interrelationship between different channels which is achieved via averaging usually of adjacent pixels through
[1:06:33] application of a speckle filter the covariance matrix is one of the most common and is generated by multiplying
[1:06:52] the target vector in the linear basis by its conjugate transpose what that means is just applying a
[1:07:00] change in sign of the imaginary part of the complex number and again this characterizes the degree of similarity of the polarimetric
[1:07:08] channels channels and brackets here are used to indicate that averaging has been applied usually usually over multiple pixels
[1:07:29] so there are nine elements to the covariance matrix three of these numbers are real representing the intensity of
[1:07:35] each polarimetric channel these are represented on the main diagonal of the matrix there are also six complex values
[1:07:44] that are contained in the off diagonal elements of the matrix and to get the total power we simply sum the main
[1:07:50] diagonal diagonal elements elements note again that we multiply the cross pull term by two so i thought it would be interesting to
[1:08:09] show how we get those power values along the main diagonal and again to get the covariance matrix
[1:08:16] we multiply a set of complex numbers by their complex conjugate and in the case of the main diagonal
[1:08:22] elements this gives us just the total power power i won't go into too much detail here but
[1:08:28] this is just to show that when we multiply these two vectors the result is just a rotation of the original vector
[1:08:36] so that it lies parallel with the real dimension and then in effect what you have is just
[1:08:44] one magnitude value which is equal to the length of the vector and we know that that is equal to the
[1:08:52] wave amplitude and if we square it that is the total wave power note that we don't have any phase angle
[1:09:00] to measure here anymore and that is how we get the power values along the main diagonal i won't go into too much detail here
[1:09:12] about what all the other elements mean because interpreting these can be really difficult and in fact that's one of the
[1:09:18] reasons why we apply decompositions i will just say for example though that elements c12 and c21 are close to zero
[1:09:27] for natural targets though do contain some useful information in urban areas element c13 is also the phase difference
[1:09:35] between hh and vv which can be useful for distinguishing between odd and even number of bounces so it's the same process for generating
[1:09:49] the coherency matrix we multiply the target vector in the poly basis by its conjugate transpose and again for polar
[1:09:57] metric channels this matrix characterizes their degree of similarity so often the question is asked whether the covariance and the coherency
[1:10:08] matrices are equivalent you can transform one into the other and they contain the same information about correlation phase and intensity but the
[1:10:17] coherency matrix does a better job at physically interpreting the scattering mechanisms from the target target and elements are more related to the
[1:10:28] geometric and physical scattering processes but depending on what you're doing you do have choice to use a multiple
[1:10:38] different types of matrices and some matrices are more appropriate depending on the data type that you have available
[1:10:49] so let's talk specifically about coherent dual poll data which we're going to be using in the next lecture
[1:10:56] remember that this data for which we do have phase and intensity information so with those dual pole data we can
[1:11:04] still use the covariance matrix representation representation but we don't have everything we need to construct a full covariance matrix but
[1:11:12] what we can do is construct a two by two covariance matrix and you can do this with either co or cross poll data
[1:11:20] now let's say that you have copol data we would simply follow the same process as before we would take our target
[1:11:27] vector in the linear basis and in this case we have just two elements and we multiply it by our co by its
[1:11:34] conjugate transpose and remember that these are complex numbers and what we would get from that is this
[1:11:44] two by two matrix and the hh and vv intensity in this case are also represented on the main
[1:11:50] diagonal diagonal the off-diagonal elements represented in this matrix are the phase difference between hh and hv so now that we have an idea about some
[1:12:03] of the different matrices we can use in this final section on polarimetry we're now going to go ahead and talk about
[1:12:10] polarimetric decompositions polarimetric decomposition is really just used to describe a target's scattering properties and focuses on partitioning the total power into
[1:12:23] relative contributions from different idealized scatterers and the whole idea or goal is just to make image interpretation easier
[1:12:33] and we can talk about two different types of decomposition methods coherent methods which are more appropriate for human-made or unnatural
[1:12:41] targets like buildings and incoherent methods which are more appropriate for natural targets an example would be a forested area
[1:12:53] the whole idea behind coherent decomposition is that we want to express the scattering matrix as a combination
[1:12:59] of responses from simpler canonical objects and we do this because to directly interpret individual elements of the scattering matrix can be
[1:13:08] difficult difficult and this deep type of decomposition is ideally suited again for what we call coherent coherent point or pure targets and these are
[1:13:17] targets for which the phase is known and predictable predictable so an urban area would be a good example
[1:13:24] of this now let's have a look at incoherent decomposition methods because of speckle it's necessary to characterize some
[1:13:35] targets statistically and this cannot be done using this the scattering matrix so we need second order descriptors like
[1:13:42] the covariance and the coherency matrix that we just went over however direct direct interpretation of these is also difficult
[1:13:51] so we can express those as a combination of responses from from simpler targets and these decomposition methods are
[1:13:59] appropriate for natural features like forced areas now there are a lot of different decomposition methods some of which are
[1:14:09] for coherent or incoherent targets and some of which are based on the covariance or coherency matrix or the scattering matrix
[1:14:18] we don't have time in this lecture to go over every one but we will go over one
[1:14:22] example which is the cloud potty decomposition that is based on the coherency matrix the cloud quantity decomposition is
[1:14:33] what's called an eigenvector eigenvalue based decomposition and from this we get three secondary parameters including the entropy
[1:14:41] anisotropy and mean alpha angle entropy describes the degree of randomness of scattering with values equal to 1 indicating a distributed
[1:14:53] target where there are multiple individual scatterers values of zero indicate pure targets where there's just one scattering
[1:15:02] mechanism mechanism and when entropy values are greater than 0.7 it can be difficult to interpret scattering mechanisms so we use
[1:15:10] anisotropy as a complementary information source in the figure on the right side of the slide you'll see an example of a
[1:15:19] radarsat-2 quad pole image that was acquired along the coast of canada and what you can see is that over water
[1:15:26] values are low indicating that there is one dominant scattering process whereas values over land are high indicating
[1:15:33] multiple scattering processes in this presence of vegetation anisotropy indicates the relative importance between secondary and tertiary scattering mechanisms
[1:15:46] when the values are greater than zero a low value indicates a third scattering mechanism contributes significantly to
[1:15:53] the total power and when the values are high only the second contributes significantly to total power when
[1:16:00] when anisotropy values are equal to zero contributions from the second and third scattering mechanisms are equal so in the example on the right hand side
[1:16:09] again you'll see that we have near equal contributions over land as indicated by the color blue finally the me alpha angle is used to
[1:16:22] determine the dominant scattering mechanisms mechanisms values range from 0 to 90 degrees with low values from 0 to 45 degrees
[1:16:31] indicating surface or odd bounce scattering scattering intermediate values around 45 degrees indicate volume or multiple scattering and values greater than 45 degrees
[1:16:42] indicate double bounce scattering now although we weren't able to cover cover everything today there are many great tutorials out there that you can
[1:16:54] find more information on the things we didn't get a chance to cover and of course we're going to be talking in
[1:17:00] greater depth about these things in the following sessions here are some additional references and contributors that helps prepare this
[1:17:10] material material and i just wanted to say thank you for everyone everyone for attending this session on sarah
[1:17:17] polametry hello my name is dr laura dingle robertson and i work in research and development at agriculture and agri-food
[1:17:31] canada aafc using sar and optical satellites for mapping and monitoring agriculture in canada canada in this session i will provide
[1:17:40] instructions on how to create intensity derived sar parameters from radarsat constellation mission polypolymetric data data intensity of each pixel represents the
[1:17:52] proportion of microwave back scattered from that area on the ground and depends on a variety of factors
[1:17:59] types sizes shapes and orientations of the scatterers in the target area moisture content of the target area
[1:18:07] frequency and polarization as well as the incidence angles of the radar beam the pixel pixel intensity values are
[1:18:15] often converted to a physical quantity called the back scattering coefficient or the normalized radar cross section measured in decibels db units with
[1:18:26] values ranging from plus 5 db for very bright objects to -40 db for very dark surfaces intensity derived parameters are not
[1:18:45] concerned with phase information of complex r systems they can simply be generated from the backscatter coefficient coefficient there are several intensity parameters
[1:18:54] that can be derived in particular while using esa's snap processing tool these include total power or intensity
[1:19:02] called span radar vegetation index the radar force degradation index biomass index and canopy structure index the cold pole and cross pole ratios hh
[1:19:15] over hb hh over vv and vv over vh and all of these the indexes and the cold pole and crossbow ratios
[1:19:25] integrate backscatter from different polarizations to one value like optical indices these mitigate system mirror and noise assuming calibration error is the same
[1:19:37] for all polarizations a ratio or index may mitigate the error and may mitigate some impacts of changes in incidence
[1:19:46] angles if you're using several piece several images generally generating these require fully polymetric or quad polymetric data with
[1:19:56] vv hh and vhhv intensity these can come from sensors like rcm or socom for example but also newer indices and ratios are
[1:20:07] being generated with the dual polymetric sentinel1 data total intensity or span this is a quantity given the total power intensity
[1:20:20] received by the four channels of a fully polymetric radar system or if we're considering a dual polymetric system
[1:20:27] that would be the channels the two channels of received intensity in terms of the scattering matrix the
[1:20:33] total power is equal to the sum of all matrix elements and the equation for calculating span is the sum of h
[1:20:42] plus 2 hv plus vv where hv is multiplied by 2 due to the reciprocity condition where hv equals vh
[1:20:53] what you see in the span image here from june in canada on the left you have low span or low total power or
[1:21:01] intensity in bare agricultural fields represented by the red color and this is due to the quasi-specular reflection on
[1:21:09] these bare fields of the tsar waves the high span or dark blue areas in mixed forests and shrub areas
[1:21:17] is due to the high radar return that can be linked to what is known as volume scattering
[1:21:27] other intensity derived parameters can be generated by combining the intensity channels such as hh vv and vh along with
[1:21:36] scaling factors in a similar way to optical imagery manipulation in these scenarios the combinations of the intensity channels to one value help
[1:21:46] simplify the response but allow for quantitative and qualitative evaluations of agriculture vegetation cover health and growth dynamics one such example is
[1:21:57] the radar vegetation index or rvi and it's used to estimate vegetation conditions similar to ndvi hv backscatter is highly impacted by
[1:22:09] vegetation vegetation rvi is calculated as 8 times hv over the sum of hh vvv and 2 times hv
[1:22:21] 8 is a scaling factor because hv values are significantly lower as compared to hh and vv as i mentioned other indices available
[1:22:31] in snap include the radar forest degradation index the biomass index and the canopy structure index when you're using these you really
[1:22:40] should try and understand the physics behind them and their associated equations equations to make a true assessment as to whether
[1:22:48] or not they will be useful for agricultural applications currently we've only been looking at using this radar vegetation index that
[1:22:57] is available through snap for our agricultural purposes here's an example of temporal rvi here we have three rvi images that were
[1:23:13] generated from rcm imagery over a site in manitoba canada the growing season in this region ranges from seeding out in may to full
[1:23:21] harvesting in august and september onwards onwards in these rvi images that were generated with snap low values are represented by a blue
[1:23:31] color and high values are representative by red or orange color throughout time from july to september we see that the values are lower and
[1:23:41] there is more blue representing lower radar vegetation index values this is representative of the drying out of the crops and leaves dropping off the
[1:23:50] plants and harvesting that is going on throughout these months we would expect that the most green period or the period with the most
[1:23:58] volume scattering would be in about july which is representative of the majority of the yellow and orange red values we
[1:24:06] are seeing in the first image from july 19th 19th but you will notice there are high values of rvi in red in september and
[1:24:14] while this could be representative of maybe strong vegetation values at that time it could also be a reflection of a
[1:24:21] rough response from rough soils so in particular you'll see these red circles circles and these circular fields are actually
[1:24:30] in this area usually potato fields so potatoes when they're harvested have very deep trenches some of which are
[1:24:37] filled with harvested potatoes and these values have a or these surfaces have a very rough surface and these values
[1:24:45] these high rvi values could actually be related to those rows and rough surfaces and how these have all been
[1:24:52] harvested harvested so it's very important when you're using indices to actually understand what's happening on the ground rather than
[1:25:00] simply trying to represent rbi high rvi to high green values an additional type of intensity derived parameter are intensity ratios
[1:25:14] these can be simple ratios that integrate the backscatter intensity from the different polarizations into one simple value
[1:25:21] to calculate these values from foley polar metrics r data you have the first cross pull ratio of hh over hv the
[1:25:29] second cross pole ratio of vv over vh and the copol ratio of hh over vv correlations have been found with simple
[1:25:38] ratios and lai and biomass which as we can see in the table on the left cereal crops of wheat oats and barley
[1:25:46] are negatively correlated to the cross-pull ratio of hv over hh and positively correlated to both the cross
[1:25:54] pole hv over vv and the cold pole ratio of vv over hh in the figure on the right we can derive
[1:26:02] lai maps which are based on these correlations and from those values pick out the cross crop type for the varying
[1:26:09] values so under the red circled fields these are barley fields the yellow fields represent spring wheat fields and the blue outline fields
[1:26:19] represent represent oats there are very simple steps with which to generate these intensity derived parameters in snap the following is a
[1:26:30] demonstration on what steps to take to create these parameters we will use the raidersack constellation mission data fully polametric quad-pole
[1:26:40] qp image from july 23rd 2020. the five steps that are used to process this in snap are first a radiometric
[1:26:51] conversion then the generation of the parameters parameters the speckle filtering a geometric correction and finally you have your
[1:26:59] outputted parameters while the parameters we'll be generating today are all intensity based and do not require phase information we will be
[1:27:11] using the slant range slc product single look complex product product each image pixel is representative by a
[1:27:19] complex real eye and imaginary cube magnitude value no interpolation into ground range coordinates is performed during the
[1:27:27] pre-processing for an slc image products and the range coordinate is given in the radar slat range rather than the ground
[1:27:33] range so for example the range resolution is measured along the slant path perpendicular to the track of the
[1:27:39] sensor sensor the processing for all slc products covers a single look in both the range and azimuth directions
[1:27:49] rcm imagery is available to anyone through the earth observation data management system eodms you can gain access to the data by first
[1:27:57] going and registering for a user account at eodms next you will apply for vetted user access this is an application that is
[1:28:05] assessed by global affairs canada and the canadian space agency once access is granted you will have the
[1:28:11] ability to access the rcm catalog rcm does not collect continuous coverage imagery in the same manner as sentinel
[1:28:18] one one rcm is the government of canada-owned satellite constellation that's primary purposes for the operations of government of canada departments
[1:28:28] firstly acquisition plans are driven by government of canada needs the majority of imagery collected is therefore over canada however there are
[1:28:36] acquisitions that do occur over much of the other parts of the world once you receive your vetted user access
[1:28:42] you can check the catalog to see if imagery has been collected over your site of interest the first step in the data imagery
[1:28:52] processing is the radiometric conversion sar slc products are complex and must be converted to intensity and phase
[1:29:00] channels channels the conversion is mission specific and for polymetric processing the data must be complex lookup tables luts provided with the rcm
[1:29:10] slc products are used to convert the digital number to complex real and imaginary bands snap will automatically determine which
[1:29:19] kind of output input product you have and what conversion needs to be applied based on the product's metadata
[1:29:29] first you will open the rcm image in snap snap start the snap tool and be sure to unzip
[1:29:35] the rcm image in the snap interface you will go to the file menu and open the product
[1:29:42] you can click through the rcm folders until you find the manifest.save file file you will select advanced and then select
[1:29:51] yes yes you can also drag and drop the folder directly into the snap product window the product explorer window of snap
[1:30:01] contains like pull and cross pull bands in the intensity and complex formats next you will complete the radiometric
[1:30:14] conversion in snap you will go to the radar menu and then you will go to the radio metric
[1:30:22] drop down drop down tab you will select the calibrate option and the calibration window will subsequently pop up
[1:30:32] on the i o parameters tab you will make sure that your source is set to the raw rcm image and that you've
[1:30:39] named an output product and an output location for your target product on the processing parameters tab you
[1:30:47] just want to ensure that all source parameters are selected and that you're saving your output as complex output
[1:30:55] you will run the opt the the window and it will close when completed next you will generate the intensity
[1:31:05] derived polarimetric parameters in snap you will first select the radar menu once again and go to the polar metric
[1:31:13] drop down then you will select the output of the polarimetric parameters the compute polar metric parameters window will then open
[1:31:23] under the i o parameters tab you will select that previously calibrated image and make sure that you've indicated
[1:31:30] where the target product should go under the processing parameters tab this is where you're going to indicate
[1:31:37] which parameters you would like generated generated you will see there are other parameters that we have not just described in this
[1:31:44] session you can also choose those as well well for today's activity we will simply chose span or total intensity or power
[1:31:53] the radar vegetation index and the cold pull and cross pull ratios these are intensity derived parameters and therefore you can apply a regular
[1:32:07] radar speckle filtering to be used the choice of filter type and size should be related to your area of
[1:32:14] interest and what your final data is going to be used for to generate a ra or to process the
[1:32:21] imagery and then apply a radar speckle filter you need again to go to the radar tab and choose the speckle filtering
[1:32:28] drop down you will simply be doing a single product speckle filter once again the single product speckled
[1:32:35] filter will open window will open up ensure again your i o parameters is selecting the calibrated parameters
[1:32:43] images and you've indicated a place for your target images to go your source bands should be indicated as
[1:32:50] the parameters that you've generated span rvi and the three different cold pole cross pull ratios then you need to select the type of
[1:33:00] filter you want to use and your appropriate window size the choice of a filter type is very
[1:33:08] specific to your area of interest in our particular case in this area of canada we have very large fields and
[1:33:16] previous testing has shown that we can use very large window sizes 9x9 in order to apply the speckle
[1:33:23] filtering filtering we also have done previous research for our areas of interest and have chosen the gamma map filter but there are other
[1:33:31] filter types and you should look into that for your area of interest once these parameters are selected you
[1:33:37] click run and close the window when completed terrain correction with the use of a digital elevation model or dem data
[1:33:48] corrects the topographical distortions like foreshortening foreshortening layover or shadowing the range doppler approach is one way to
[1:33:57] perform a geometric correction or terrain correction this method needs information about the topography as provided by a dem as well
[1:34:06] as the orbit satellite information to correct the topographic distortions and derive a precise geolocation for each pixel of the image
[1:34:14] to process this you need again to go to the radar it radar menu and the geometric drop down
[1:34:22] selecting the terrain correction and then the range doppler train correction method method the range doppler terrain correction
[1:34:30] window will open and again under the i o parameters you want to make sure that your source is
[1:34:36] the speckle filtered parameters and that you've indicated a place for your target output output under the processing parameter tab you
[1:34:44] will need to make sure that the choices of these options digital elevation model map projection are related to your area of interest
[1:34:53] in this scenario we use the srtm 1 second hdt dem which is available over this part of
[1:35:01] canada canada and we use a map projection of utm zone 14 with a wgs 1984 which is related to
[1:35:10] the area once you have chosen the parameters as appropriate to your aoi you click run and close and the process will be
[1:35:20] complete and what you end up with is a geometrically speckle filtered corrected intensity parameter image in this
[1:35:30] scenario the span image from an rcm july 23rd 2020 2020 2020 image over carmen manitoba canada as i've noted before
[1:35:42] in my examples there are many things that you can do with these parameters from monitoring agriculture you can use these for images and
[1:35:50] classifications classifications you can do correlation analysis with the values in relation to biomass and lai and you can use them in a time series
[1:36:00] for assessments of change over the land this demonstration should help you start to explore sar data just beyond using
[1:36:08] simple intensity or backscatter in our next session we will demonstrate how to derive polymetric parameters which consider phase from both dual
[1:36:18] polymetric sentinel 1 imagery and fully polymetric rcm and saocom time series data thank you laura for a wonderful
[1:36:30] demonstration on intensity derived parameters for agriculture monitoring we will now transition to the question and answer session of today's training
[1:36:40] please enter your questions in the question and answer box and we will get to them in the order they were received
[1:36:46] we will post the question and answer document to the training website before the start of next week's training
[1:36:56] below is the contact information for sarah and laura along with links to the training web pages and rset's twitter
[1:37:05] handle handle for those who are interested in getting a jump start with the code we will use in part 2 to process
[1:37:13] polarimetry data we have provided missing sections of the python code accessible by jupiter notebook notebook the code and data can be found under
[1:37:24] part 1 of the training on our website we recommend that you attempt this before attending part 2 to better
[1:37:33] familiarize yourselves with the fully polarimetric imagery we've also provided the solutions to the python code in the part two folder
[1:37:44] python code for those who might need help again all of this will be covered thoroughly next week but we wanted to
[1:37:52] offer participants the option of working with the code before next week's practical thank you and we will now start with the
[1:38:02] question and answer session great and it looks like we've had some really good questions coming in so thank
[1:38:21] you for everybody who has been submitting them uh we can jump right into it uh question number one
[1:38:27] what is the difference in the data for signals received in h and v for a same signal sent in v
[1:38:42] and whoever answered that one feel free to unmute and you can speak out all right so i hope that this answers uh
[1:38:54] the question uh hearing it again i'm not entirely sure but please feel free to correct me but a strong return in the vv meaning
[1:39:03] you transmit and receive in the linear vertical that would indicate that your targets also have a linear vertical
[1:39:10] orientation so an example would be a cornfield so you would typically see a strong bb return from corn which is also
[1:39:20] tall and aligned in that vertical direction conversely a strong return in the vh that would be indica indicative of
[1:39:30] multiple or volume scattering so that's something that we typically see for objects that have a random orientation
[1:39:38] as well so if you think about the branches and leaves and stems within a forested area that those are all
[1:39:44] randomly oriented and so we would get see a strong vh return from that type of surface great thanks sir
[1:39:56] and question two can a sar sensor typically send out multiple polarizations or do they typically only have one or two
[1:40:05] how can you tell on the data what polarization it is so i answered this question as well
[1:40:13] most sensors today have the capacity to acquire multiple different polarizations and even quad pole data so so we use radar set 2 a lot in canada so
[1:40:24] that's the example that i gave um raider set 2 can acquire single pole data dual pole data and quad pull data and you can
[1:40:33] test the satellite to acquire whatever data type you would like sentinel one also has the capacity to
[1:40:40] acquire quad pole data but most of the time it operates in that dual pole mode in order to figure out what type of
[1:40:48] polarization you're working with though you can refer to the metadata it's always listed what polarization was acquired
[1:40:56] acquired and because you can you can request a specific polarization depending on the sensor you'll always know what polarization it is and it just
[1:41:05] takes a little bit of familiarity with working with the data and after you've worked with the data
[1:41:11] for some time you can also tell visually between hh versus hv for example uh depending on how much backscatter you
[1:41:21] get from the target thanks sir uh question three how do i calculate rvi from sentinel 1 data for areas where hh
[1:41:33] polarization data are not available okay so i will answer that so rbi is a vegetation index that was created using
[1:41:43] foley polymetric data so that would be the quad pole data that sarah was talking about um therefore it's not
[1:41:50] really possible to generate rvi using 701 dual polymetric data you can generate the cross pole ratios such as vv over vh and you can
[1:42:00] potentially see if there is a relationship with crop types that are similar to the relations with the fully
[1:42:06] polametric cross pull ratios in the next presentation in this series so next week we will describe deriving
[1:42:12] the pseudopolymetric parameters from the dual polymetric slc sentinel one data so that's including things such as generating stokes vectors degree of
[1:42:21] linear polarization etc so you may have more information there great thank you laura and that's a great
[1:42:29] we do hope that everybody will join for next week we have some really wonderful practicals so please do uh continue
[1:42:34] through this webinar series and question number four four can you provide more information about the indices uh example given if they
[1:42:44] will be suitable you mentioned understanding physics but can you provide more context information or where to look to see if it makes sense
[1:42:55] um yeah hi sean i i answered this one um this is heather mcmahon from agriculture canada canada um so a little bit of this comes from
[1:43:03] experience once you get um more experience working with sarda you'll begin to understand um how waves are
[1:43:11] interacting with the target but i just want to give it a simple example so here i'm saying
[1:43:16] um you know consider how how do you expect the wave to scatter within the target of interest so here we're talking
[1:43:22] about vegetation and sarah mentioned for example that these types of targets like like crop canopies they have very random
[1:43:30] oriented components so the leaves and stalks are in all kinds of different angles and orientations and that causes the wave that enters
[1:43:38] into those targets to either repolarize um or depolarize um and we know that the cross polarization hv or vh
[1:43:48] are indicative of this type of multiple scattering because of these complex structures structures so given this um understanding how these
[1:43:56] waves are scattering why they're scattering like that in a complex charter like vegetation you should be thinking about ratios or indices or
[1:44:05] other methods that are going to exploit this hv or vh um intensity backscatter so rbi is a good example of that
[1:44:15] um but if you limit yourself uh you know we don't want to we want to to really focus on ratios that exploit hv
[1:44:23] and bh but if you limit yourself to ratios that do not so you can think about a
[1:44:28] um a co-pol uh ratio like h over vb we're not using the cross pull point here and you're going to miss important
[1:44:36] information about the vegetation target there's been a lot of research published that links the intensity of hv or vh to
[1:44:44] things like crop biomass and lei so we know that there's a sensitivity um so this all links back to um thinking
[1:44:51] about how it how are the waves scattering within the vegetation think about radar systems that are going to
[1:44:56] capture this crossfull um intensity and and pick methods and and ratios and other um um methodologies that will exploit this
[1:45:06] cross polarization wonderful heather thank you so much and question five can we choose a dem of higher resolution instead of srtm
[1:45:20] okay so that was me it's laura again um absolutely absolutely you should consider and use the dem that
[1:45:26] is most appropriate for your area and provides the highest resolution so that that just depends on where your area of
[1:45:33] interest is and and that you should be looking um for that for your specific area of interest you can um
[1:45:40] use a downloaded and out dm that is outside of sort of the snap list of options so you can if you have a
[1:45:50] higher resolution dm then you can use that as as an external source so be sure to look into that for your area of
[1:45:58] interest because in some scenarios the dems that are actually available on snap don't don't actually cover all areas so you want to
[1:46:07] make sure that that your area is covered and that you're using the highest resolution dm that you could possibly
[1:46:13] use great thanks laura and question six i would like to know which oh please go ahead and go
[1:46:25] well ahead sorry heather did you have anything you wanted to add to the answer for questions no i'm sorry go ahead and
[1:46:29] ask the question i was going to answer before you stated the question okay no problem problem that's great so question six i would
[1:46:36] like to know which criteria should be considered to choose the most adequate speckle filter in the example the gamma
[1:46:42] filter was chosen why this one um okay so uh it's heather again if you go back to the um
[1:46:50] some of the uh the previous webinars that we we delivered on radar basics we talk a lot
[1:46:56] about filtering and different uh types of filters that you can choose the most important thing here is that you choose
[1:47:02] a radar filter that respects the statistics of the radar scattering but also suppresses or reduces the noise so
[1:47:09] you have to choose one of these radar adaptive filters and there are several of them available again you can go back
[1:47:16] to the the background material we delivered previously to take a look at them gamma is one that's widely used
[1:47:22] it's a radar adaptive filter it tends to respect or preserve edges so field edges for example um but it's not the only radar filter
[1:47:31] that that you can choose um the second important decision on picking a filter is the size of the kernel that you use
[1:47:38] to uh when you're applying the filter um there's not a simple answer to that you have to think about the filter size
[1:47:45] relative to the target or the unit of area that you want to reduce the noise so if we think about field sizes
[1:47:53] you want to change the size of the filter kernel to be adapted to your field sizes and in our experience with with our
[1:48:00] research you know using the largest filter sizes possible at times to produce the best results wonderful thank you heather
[1:48:11] question seven can we apply polarimetric parameters ratios rv etc after pre-processing of the data like speckle filtering terrain and radiometric
[1:48:21] correcting and subsiding or is it to be applied before these steps excuse me as told here what could be the differences
[1:48:28] between the two results okay so that's me again that's laura um so we generally follow these steps uh
[1:48:36] that we presented here to process the data um and generate these um these parameters so these intensity derived
[1:48:43] parameters um that's um we've done uh completed research in the past um for order of operations of pre-processing um
[1:48:51] particularly just for generating intensity or backscatter um this was for our crop classification pre-processing so we've we've found that in in many
[1:48:59] cases it doesn't really make a difference in terms of the order of operations um for the generation of the
[1:49:05] actual intensity or backscatter other than we've noticed there's actually a time difference in terms of when each uh
[1:49:12] option is in the order so what uh this could be important for is operational endeavors and we do have a link to a
[1:49:19] paper that we could put up for people to look at because there was a lot of testing over sites in canada the us and
[1:49:26] argentina particularly in relation to sort of the methods of pre-processing and then the order of operations we haven't really looked at testing it
[1:49:35] for these generation of these intensity derived parameters but i suspect it'll be it would be a similar a similar
[1:49:41] aspect thank you laura question number eight how do you calculate the plant height from single look complex data
[1:49:53] uh so this is me again sean um and i'm just trying to formulate my answer as we're going through these so
[1:50:01] um certainly from single look complex data you know one thing that we get from that is phase information
[1:50:08] um um so when this question was posed i was originally thinking maybe the the person asking the question was thinking about
[1:50:15] uh insar as a uh as the methodology so i'll talk about that first first um so if we think about a phase as sarah
[1:50:25] was talking about phases about the distance or the time that it takes the signal to go from the satellite to the
[1:50:31] uh to the target to the crop canopy in this example i mean so that if that time
[1:50:37] or distance changes um that tells us that the that the uh the target the height of the
[1:50:43] target is changing so inserts used for these types of things so changes in deformation of the earth's
[1:50:49] surface for example um so you can you know sometimes we think could we use insert to look at how crops are growing
[1:50:55] so we know as crops grow they get higher and the distance from the radar antenna to the to the top of the
[1:51:02] canopy changes um this can be a bit tricky though because we have this issue about decoration over time um so you can think
[1:51:11] about you know when the crops are growing uh it's not just the height that's that's changing but how the
[1:51:18] leaves are oriented can change because we can have wind occurring um or the crop canopy is just filling out and so
[1:51:24] we can get this temporal decoration so using insert to measure crop height can be a bit tricky
[1:51:31] unless we have good correlation phase correlation over time if you think about big canopies and one type of candy we're looking at are
[1:51:43] bananas so these are really big leaves and so it's possible that we won't see as much temporal decoration over time
[1:51:51] and we might be able to use this this phase information um other than that if you talk about
[1:51:57] intensity from slc data so soc means we get intensity and phase there's been quite a bit of work looking
[1:52:04] at modeling crop height or biomass or lai using semi-empirical models something like the water cloud model for example but in
[1:52:15] those cases we're by and large just exploiting the intensity great thank you heather question number nine what are the best
[1:52:26] vegetation indices for crops we can estimate from sentinel one okay so this is me again um we have yet
[1:52:35] to really start looking at sort of these vegetation indices derived from sentinel one um in our own research um uh but
[1:52:41] obviously have started to look at vegetation indices derived from foley plummetric data including such data as radar set to and rcm data
[1:52:50] and as i've mentioned in the past we can look and provide links to papers on on that research as well for the sentinel
[1:52:56] one data um i think it would be best in if someone was really interested in trying to understand vegetation and just
[1:53:03] indices is to start looking in the literature and then of course testing in the area of interest because of course
[1:53:09] that's kind of what we do in research is just try to figure out what what works well and where and when so for that i
[1:53:15] think we'll we'd have to go with that answer thank you laura question 10 please tell me how to download microwave
[1:53:26] remote sensing images for the above analysis analysis okay so um this is again me and um so
[1:53:34] for the rcm data that we used in this this research or this presentation sorry um so i believe our set site will have
[1:53:43] links to the actual imagery so you can practice based on what you saw here however if you want to access the actual
[1:53:49] rcm catalog so this is everything that's been collected from rcm you can do this you go to what we call
[1:53:56] the earth observation data management site website um we can provide that link and you will register for an account so
[1:54:04] you would just go on there and there's a a a spot which to register for an account
[1:54:09] and you would register for an account then to access rcm you need to apply for vetted user access and so there is a
[1:54:17] link on eodms and it just brings you to a form that you complete fully with your information and then
[1:54:24] that is actually reviewed and vetted by the global affairs canada and the um the canadian space agency and then once
[1:54:33] you're vetted you will gain access to the rcm catalog and you'll be able to search up what data is available where like i said
[1:54:41] in in the presentation a lot of the data collected for rcm is collected over canada because it is up
[1:54:46] they are operational satellites they are meant for the operations of the government of canada but um there are uh
[1:54:54] other areas of the world where there is data collected so you may find that there are there are
[1:54:59] data over your particular area of interest so that's the way you can get access to rcm laura thank you so much that's great and
[1:55:08] we did add a link here to the the web page for this training you can't access the rcm data that is
[1:55:14] being being shown in both the first two parts of this training so we do encourage you to go to the link
[1:55:20] that we've provided and you can access the data that's being used specific to this training but we will also go back
[1:55:25] and add the link that laura just mentioned for the eodms site we will add that when we clean up this document and
[1:55:30] before we post it next tuesday for part two of the training so thank you question 11 how do i do corrections in the tiles to
[1:55:38] make it homogenous while doing mosaic so i answered this as best i could i suspect this might be a really great
[1:55:46] question for our esa colleagues who will be presenting further along in this series so i'm hoping that we can we can
[1:55:52] keep this question and maybe ask them as well because i i'm not exactly uh 100 sure on how to do this but yeah i think
[1:56:01] that'll be a good question for issa great sounds good thank you laura question 12 what might be some of the
[1:56:08] good resources slash lists to study sar based indices that was me um laura heather and i and dr gopika suresh
[1:56:27] we uh we work um to collaboratively to uh keep a running list of multiple star training resources as part of our
[1:56:36] work as the sisters of tsar on twitter so i've just put a link to our website and you can go ahead and
[1:56:42] check it out there are a ton of different resources that are available nowadays nowadays so there's tons of stuff online you can
[1:56:48] find great thanks sir question 13 does rvi correlate with ndvi where does it fail uh so this is heather again um
[1:57:02] so so we've looked at this quite a bit in our research group and the strength of the
[1:57:07] correlation between rbi and ndvi has varied so we have noted that for some crops the correlations are are pretty strong
[1:57:16] and for other crops they're not as well correlated so the question is why would some crops work better than others
[1:57:23] so again think about the fact that rbi uses um two two copoly linear polarizations hh and vb
[1:57:32] and we know in particular hh is not a particularly useful polarization for crops there are some crops like forage crops
[1:57:42] so you can think about pastures and alfalfa there's a better correlation with hh for those crops but other field
[1:57:49] crops like corn soybeans wheat these types of crops the hh backscatter is not very useful and can often confuse the situation so
[1:57:59] rvi uses hh and so that this is why sometimes we get better correlations with some crops than others and i just added in the
[1:58:07] comments that um we are in the process of developing a radar vegetation index our team is others are as well
[1:58:14] um and really we're focusing on the polametric parameters that are sensitive to volume scattering so recall what
[1:58:21] sarah's talking about think about how the waves are scattering in the target um so these vegetation indices are
[1:58:27] really exploiting those um parameters like the cross pole intensity we talked about parameters like entropy and and even some of the decomposition
[1:58:37] parameters like volume scattering great thanks heather question 14 is there any non-negligible impact of wind and other weather conditions over
[1:58:50] intensity and polarization returns and if so how can we eliminate them so i started to answer this but i think
[1:59:00] maybe heather might have a better idea for um agricultural areas but i just wanted to add here that
[1:59:08] these effects are really dependent on the target so hard targets specifically like a building it wouldn't be affected
[1:59:14] by the wind or weather conditions but vegetation can be wind can actually change the orientation of the vegetation and that can in turn
[1:59:23] affect the back scatter that you receive at the sensor if your canopy is wet as well this can
[1:59:29] also affect your data and it can be difficult to sort of remove effects all right great thank you sir question
[1:59:41] 15. 15. the rvi formula uses sigma naught data but the calibration in the example output complex numbers is calibration
[1:59:50] the sigma enough not required i'm not entirely sure that i i understand this question either so please uh feel free to correct me but uh
[2:00:01] i was just going to say that sigma naught is the radar reflectivity per unit area on the ground
[2:00:07] so it reflects how the data are calibrated and that's sort of different how how we express them in terms of
[2:00:13] phase and intensity which is with complex numbers thank you sarah question 16 can those parameters be calculated with
[2:00:24] radar sat2 i can just jump on here yes radar sat2 is fully polarimetric data so those parameters can actually be calculated
[2:00:42] with radar set too because you have access to hhv vh and vvv thank you sarah question 17
[2:00:52] how can cross-pole power and volume scattering power be analyzed over agricultural fields uh sure i can i can try to answer this
[2:01:03] one so again you know think back to crop canopies and how different they are in their structures
[2:01:10] so if you think about a corn canopy or a rice canopy um or or a forage canopy
[2:01:16] you know the the size and orientation of these the leaves and stocks are quite different and that's going to create
[2:01:23] different amounts of volume scattering whether that's measured through the intensity of a cross pull channel like h v or vh
[2:01:33] or whether that we do that through volume scattering that we can get from some of these decompositions
[2:01:40] decompositions and you should note that the cross pull power and volume scattering are often highly correlated so you can measure
[2:01:46] this amount the differences in volume scattering from these different targets using really either of those parameters so we can use this it's it's
[2:01:56] these are both good parameters to complete classification so in fact the cross pool um power is the most important polarization
[2:02:08] in order to be able to classify different crop types we use that a lot in in agriculture classification
[2:02:15] um if you're looking for other parameters like biomass or lai this is usually done through some sort of
[2:02:24] modeling modeling the water cloud model is one that many have used including my team and in that
[2:02:30] case you know we're primarily looking at things like volume scouting or cross pull scattering and we're creating a
[2:02:36] model between field measure data and the amount of scattering whether it's measured through cross pull or volume
[2:02:44] scattering once again that's heather mcnair from agriculture and agri-food canada thank you heather question 18 looks like this participant is seeking
[2:02:56] clarification clarification when we talk about phase data are we referring to the phase difference between the emitted wavelength and the
[2:03:03] received one i just want to confirm if i got it right or not thank you hi this is sarah banks again so the
[2:03:10] phase difference that we're talking about is would be the phase difference between hh and vvv so two separate
[2:03:17] polarizations polarizations so you can imagine if we transmit h and v at the same time the phase difference
[2:03:24] we're talking about would be the time delay between when we receive those back at the sensor raid question 19 as far as i know a 35
[2:03:38] to 45 degrees incidence angle is mostly suitable for crop monitoring with the sar data set a bit more
[2:03:45] explanation on that will be helpful thanks thanks um sean it's it's heather mcnarron again i'll i'll try to answer this one
[2:03:54] i don't think it's as straightforward as a particular incidence angle range um i always i always frame it this way is
[2:04:01] that that um we have to think about the frequency of the radar as well whether it's x
[2:04:06] fancy band or l-band i mean we have to think about the growth stage so we're talking about early in that cropping
[2:04:12] season or maybe the crop is more advanced advanced so pick an incidence angle that you think is
[2:04:18] going to provide you know good interaction within the canopy itself um we want to minimize the amount of
[2:04:25] contributions typically coming from the soil so that's why we don't want these really steep incidence angles um but we also want enough penetration
[2:04:34] into the target so that we get all of this this volume scattering that's happening within the target
[2:04:40] so i think the the person who asked this question is is in the ballpark i think we want the
[2:04:45] shallower angles that provide a scattering within the volume but but think about the size of your canopy what the crop
[2:04:53] type is the growth stage um as well as the frequency so pick an angle where we have
[2:04:59] have penetration into the canopy um deep enough into the canopy to to interact with the canopy structure but not
[2:05:08] penetrating so far that we're getting these contributions from the soil thanks heather question 20 is polarization only horizontal and
[2:05:20] vertical can it be at an angle yes it can be at an angle but usually we just transmit and receive in the linear
[2:05:31] horizontal and linear vertical those are the most common polarizations that are used thanks sarah question 21 can sar data be
[2:05:42] used in deriving optical image vegetation vegetation index okay so that was me so as heather mentioned we are looking at uh working
[2:05:52] on a sarah vegetation industry that's uh looking or being derived from fully polametric data and in particularly uh
[2:06:00] those parameters relating to the volume scattering um and we're looking at this in relationship uh to sort of that
[2:06:06] typical ndvi uh normalized difference vegetation index that is an optical image uh vegetation index so as heather
[2:06:14] mentioned so again we can try and provide links to some papers on that and there are others as heather mentioned
[2:06:21] that we are also looking at this kind of research as well so using sar data um and deriving a vegetation index and
[2:06:30] relating those two optical optically derived vegetation indices thank you laura question 22 the sensor aol alos has
[2:06:42] ceased to operate since 2011. how do we currently obtain polarimetric datasets so i answered this again um i was taking
[2:06:51] it as an interest in l-band polymetric data um so a list ii pulsar ii and i believe halo's four but i i would say go
[2:06:59] to the jaxa website to double check um well als ii impulse r2 offers follow polymetric data um they are available
[2:07:06] through jaxa i'm i imagine if you or if you go to uh jackson's website and check that out there might be a way in which
[2:07:14] to acquire that fully polymetric outband data um as well i believe there's fully polymetric options from the saocom data
[2:07:23] and i believe our esa colleagues just mentioned that it's sal com some of the salcombe davido will
[2:07:28] be available through their sites so we might want to double check with issa on sort of access to the salcom l band data
[2:07:37] and as well nissar which is expected to launch in 2023 um is supposed to have a fully polametric option although it
[2:07:45] should be only available over certain areas from my understanding so that was my understanding of what they were
[2:07:50] talking about in terms of l-band data polymetric data terrific terrific question 23 to what extent can rvi be compared with
[2:08:03] ndvi ndvi is data fusion possible uh yet so i answered that question at tether again um so we answered most of
[2:08:13] that under question 13 but i will add that that our team at agriculture canada is creating a radar vegetation index we've
[2:08:22] mentioned that a few times and what we're trying to do is not just create a radar vegetation index but to calibrate
[2:08:27] it to ndvi um so that if you track vegetation development over the growing season and you have a
[2:08:35] vegetation index curve any point on that curve can come from optical or radar data data so bear in mind that a lot of user
[2:08:43] communities communities are well embedded in nddi um so they're doing regional national global um operations using ndvi so we
[2:08:53] have to make sure that radar is fitting into that that feature space and so the user's not going to really
[2:08:59] care whether the vegetation condition is being described by a radar sensor or by an optical sensor the most important thing is that the
[2:09:07] crop development is going to be well described thanks heather question 24 may we assume that different crops
[2:09:19] generate different signal responses based on sar that we may further use to recognize different crops so this was me
[2:09:31] and completely this is one of the areas that we are fully interested in and we've done a lot
[2:09:37] of research on and over over years and decades at afc um in terms of the sar response over different crop types so
[2:09:45] when you're thinking about about sar and and the interaction of the waves um you should be thinking about the actual crop
[2:09:52] types and what and the form of the specific uh crop types how they're planted um how they grow and as well you
[2:09:59] should be thinking about the frequency of the sar waves so is it a small sar wave an expansar wave is is it a little
[2:10:05] bit bigger at c band or is it a longer star wave as an l band and how do those
[2:10:10] waves interact with those crop types um in terms of where they are at their phenology so these interactions all
[2:10:16] change obviously as the crop is planted it emerges it may have small amount of leaves it may have a very sort of
[2:10:24] tall linear structure with a lot of exposure to soil around it um it it has it changes as it flowers or as the
[2:10:33] flowers then develop into pods or seeds and then subsequently these crop types are ripening and harvesting so for sure
[2:10:41] different crop types do generate different uh signal responses and uh again i i don't like to point to the
[2:10:48] literature but there is a lot of different literature over different crop types so sort of typical uh wheat
[2:10:55] soybean soybean canola type crops or rice um um vegetables and there's a lot of different research out there on how how
[2:11:03] the sar signal actually interacts with different crop types and and what you should expect in terms of the response
[2:11:13] thank you laura question 25 what are the critical factors to combine ascending and descending modes what is an effective
[2:11:21] way to do so okay so it's heather i tried to answer this one as well so we think about
[2:11:28] ascending and descending the two the two differences that come to mind for me immediately is time of day
[2:11:35] um so when it will be a uh you know usually a morning acquisition one will be sort of a a late day or evening
[2:11:43] acquisition so there's a time of day difference difference so you have to think about that so some
[2:11:48] things in the target can change diurnally you can think about the amount of water in vegetation sometimes there
[2:11:54] is a diurnal effect um certainly so moisture can change over that 12-hour period as well so there's a time of day
[2:12:03] impact so just think about the target is that going to change uh over a 12 a 12 hour period the second
[2:12:11] difference between ascending descending is the look direction so that's the direction not it's not incidence angle it's the direction that the radar from
[2:12:20] the radar that being sent from the radar antenna and the target so it's the the angle at which the radar is is
[2:12:27] looking at the target and if you have a target that doesn't have any structure in it this probably
[2:12:32] won't be an issue so think about a pasture field there's not really any structure structure um or periodic structure in that so
[2:12:40] probably not an issue but think about a situation where you have crops that are growing in rows so
[2:12:46] corn for example or wheat where we have a specific orientation of these rows or if we're tilling a field
[2:12:54] and we have our furrows in the field or even seeding sometimes we seed in these these seedbeds that have an orientation
[2:13:02] so now you can think about the look angle between the radar antenna and the target is going to change because we're
[2:13:08] looking at it at a different angle and that may or may not uh impact the radar scattering
[2:13:15] so i think uh it's important to think about those things and what impact that might have for crop classification um we
[2:13:22] frequently use ascending and descending um keeping in mind about these diurnal effects so um in in northern latitudes
[2:13:31] we have a lot of dew that forms on the crop um over the you know the cooler
[2:13:38] uh overnight uh time period and we have early morning due so we do tend to like to have acquisitions in the evening
[2:13:46] but the temporal domain is really important so if you combine astonishing descending you're trading off a little
[2:13:52] bit about this due effect to having a really denser coverage of acquisitions so for crop classification we've
[2:13:59] combined both ascending and descending um and we don't worry so much about those differences biophysical modeling is different though
[2:14:06] if you want to estimate things like biomass biomass leavery index or soil moisture you really have to pay attention to these
[2:14:13] differences both in terms of how the target is changing do effects freeze thaw effects moisture effects and the you know what difference this
[2:14:24] this difference in look angle might bring to the radar scattering thanks heather question 26 what is the effect of water
[2:14:35] vapor in the air on the polarization of the electromagnetic waves it's heather i i i don't think i'm
[2:14:47] a good expert on this um you know the water vapor in the air is not generally something within radar um
[2:14:55] at the wavelengths that we're talking about that we're really concerned about if we have large enough droplets like
[2:15:01] during rain events then that can cause scattering you know even at x and c band for example so
[2:15:07] you know larger water particles that happen during rain events can affect the scattering of the radar but water vapor
[2:15:16] i think those particles are much smaller the one thing i'll mention is that there's this um uh
[2:15:22] you know there's an effect on the from the ionosphere on especially l band um transmissions and so you get this
[2:15:30] this slight change in polarization that l band but this is in the higher ionosphere ionosphere and this slight change in in
[2:15:39] transmission at l band due to this ionospheric ionospheric impact this is usually uh calibrated for uh during
[2:15:50] during with the star radar providers great and in question 27 can snap be used to monitor carbon
[2:16:04] sequestration hi this is sarah uh so there's quite a bit of research on this uh for estimating above ground biomass and so
[2:16:15] that would be an indicator of carbon using star and that's especially with longer wavelength l and p dandy l and p band
[2:16:23] data data and that's because they're able to effectively penetrate into the canopy providing information on its structure
[2:16:31] these data aren't widely available though you can find some archive data through jaxa some l-band archive data
[2:16:38] and there's new missions coming up called biomass and nysar which will provide longer wavelength lmp band data
[2:16:45] that will be free and open so one thing you can do to monitor carbon sequestration is build an
[2:16:52] empirical model if you have the field data to do so and you can do this in snap you can process the data and
[2:16:59] then kind of export the values where you've taken coincident field measurements another thing you can do is
[2:17:06] measure height from star and that would be the height of vegetation and use that as an input to an elemetric equation and
[2:17:14] something that you can do in snap is uh do something called insert and that will give you the height of some canopies and
[2:17:22] the effectiveness with which this works will really depend on a number of different parameters like heather was
[2:17:28] mentioning you have to think about the wavelength um so if you're trying to measure the the height of the canopy
[2:17:35] use something like expand which doesn't penetrate penetrate very deep into the canopy but um yeah it's something that's definitely
[2:17:44] possible with sar okay thanks sarah question 28 how do we choose between gamma and sigma transformation transformation okay so i i answer this um so typically
[2:17:58] in agriculture applications we utilize the sigma not conversion um because it's understandable in relation to the ground
[2:18:04] so it's a measure of the um it's a measure in relation to the unit area on the ground
[2:18:11] from our understanding gamma knots typically more used for calibration as the range cell is equally distanced to
[2:18:17] the satellite so both the near and far range are equally bright there may be instances where it's useful
[2:18:22] to use a gamma knot transformation but but typically we in rsr applications for agriculture we have been utilizing a sigma not
[2:18:31] transformation thanks laura question 29 does snap only work with full granules tiles as the initial input is there any
[2:18:41] way to take advantage of cog partial reads to read and process only a subset of a sentinel one granule slash tile
[2:18:50] so i hope and i'm understanding this question right but um actually next week um in the uh trainings next week we will
[2:18:57] be describing how to minimize the amount of a sentinel one image um that you need to use for deriving the pseudopolymetric
[2:19:03] parameters so that's including reducing the data to specific sub swaths of an interferometric wide swath uh image so
[2:19:11] there's three sub spots and also to minimize to actual individual bursts within an individual sub swath so we do
[2:19:19] show next week on how to actually do that that type of processing because the the images are set to one images are
[2:19:25] really quite large and they do take a long time to process if you're trying to use the full image obviously
[2:19:34] yeah thank you so much and and please do join us next week where laura will continue with this practical and and
[2:19:38] demonstrate this so uh please we hope to see you next tuesday uh question 30 can these processes pre-processing be
[2:19:46] implemented in google earth engine i answered that and i think the short answer is it depends on what you want to do
[2:19:58] google earth engine currently as far as i know only provides the ground range detected data and as i mentioned in my
[2:20:06] presentation uh that you do not have phase information with that so to do a lot of this stuff that we're talking
[2:20:13] about you need to actually take the data outside of earth engine or use earth engine's cloud computing
[2:20:20] platform other resources where you have that full phase information thanks sarah question 31 is the biomass index accurate if data
[2:20:33] comes from a sensor with a short wavelength example given sentinel one with a five centimeter wavelength uh so it's heather i answered this one
[2:20:43] um um uh so to be uh fully candid with you the only um vegetation index within snap
[2:20:51] that we've uh worked on our team is rbi so i'm just going to limit my comments to
[2:20:56] to rbi um but with rbi we've certainly evaluated its use using c bands our data both radar sat and
[2:21:05] sentinel one but as a as a general comment um you really have to can always go back to you
[2:21:12] know that that size of the wavelength the um the wavelength or the frequency of the transmitted wave and and think about how
[2:21:21] that size relates to the size of the canopy canopy um for example the total biomass and we know that canopies
[2:21:30] have different amounts of biomass so if you look at one crop type to another crop type the bot the amount of biomass
[2:21:36] is different and we know that the biomass changes over the season so from the beginning the middle to the end of the season
[2:21:44] and so it's a pretty complicated target we're looking at variations in biomass over time and over space
[2:21:51] um and so in in that case i think that the biggest dividends the most advancement that we will see
[2:21:58] in measuring biomass for crops will be when we start to integrate radar from different frequencies thanks heather question 32 how can we
[2:22:11] deal with the biomass saturation issues particularly with sentinel one data so i answered this one as well
[2:22:20] and there really is no simple answer to this or there's no immediate solution again i guess that's what i was just
[2:22:26] stating stating um there's just a fundamental physics behind how far these waves can penetrate um into a target
[2:22:35] when we look at the size of the transmitted wave to the size of the canopy so seaband
[2:22:40] i will only get so far into those canopies and as the canopies grow over the season we get this saturation effect
[2:22:47] and really again our solution is to look at multi-frequency radar and i think someone just mentioned nissa which will
[2:22:53] be coming up shortly um um and so i think this is going to be a really great opportunity to integrate
[2:23:00] sensors like nissar with with sentinel one for example and we were we're going to see big dividends and that will help
[2:23:07] address some of these saturation issues i'll just add however that we often think about longer wavelengths being
[2:23:14] better and that's not necessarily true we want as i said before we want the wave to penetrate into the crop canopy
[2:23:22] but not through the crop canopy to the soil soil and so that's why even with the launch
[2:23:27] of nissa which will have l-band this will be really great for big biomass crops crops um it may be that that frequency or that
[2:23:35] wavelength is too too big for smaller biomass crops so it's really the integration of l and c band
[2:23:43] where we're going to see the the biggest advancements thanks heather question 33 there are some negative pixels in the
[2:23:52] aster aster dem dem how do you remove them hi i answered that question um one solution you might want to think
[2:24:04] about is whether you can store the dem locally if then then you can edit yourself manually and then point to that
[2:24:12] new edited version uh when you're using snap snap but i'm not entirely sure how that dem has been edited so i it might be
[2:24:23] worthwhile to to check and see if those negative values have actually already been removed in the version that snap is
[2:24:31] pointing to marie thanks sir question 34 in the southeast asian region patty and jute are the most cultivated crops on
[2:24:44] both the field properties change from time to time and with that the dielectric properties change too so how
[2:24:50] does that impact rbi okay it's heather so let me um try to answer that question as well um so if we
[2:25:00] think about rbi for example um um you know rvi is is capturing the total intensity that that the total amount of
[2:25:11] energy that's being scattered by the target target so the total amount of energy will be due to
[2:25:18] many different things including the amount of biomass the structure of the crops and the the water or the
[2:25:25] dielectric properties of the canopy itself as well as the soil so you can think about rvi is sort of
[2:25:31] capturing all of those and so a a metric like rbi or an index like rvr it's going to be difficult to tease out
[2:25:40] what contribution is coming from changes in water and how much is coming from changes in the structure itself
[2:25:49] there are other methods we didn't talk about them in this lecture but i mentioned before the water water cloud
[2:25:56] model model or other semi-empirical models and in those cases you can integrate in those models you can integrate both sort
[2:26:05] of the intensity um um or the response that's coming from um you know changes in the dielectric of
[2:26:12] the the canopy canopy um as well as changes in things like biomass so we've done that in some of
[2:26:18] our publications where we've derived for example the amount of water in the vegetation as well as the amount of
[2:26:25] biomass using these semi-empirical models models because those those models are capturing both the changes in water as well as
[2:26:33] changes in biomass so i think i would move away from rvi and look at some of these
[2:26:40] other modeling approaches thanks heather question 35 is the rcm data commercial or is it also open access
[2:26:51] access okay so i answered that um so the rcm satellites they're fully owned by the government of canada um but there is
[2:26:58] open access to that data through the process i described above and in the presentation presentation so but that being said the data
[2:27:05] collection is programmed mostly over canada because these are operational satellites they feed the government of canada departments for our operational
[2:27:12] endeavors whether it's our annual uh crop applications for crop mapping or for our monitoring of our marine and other terrestrial
[2:27:22] areas areas but as i also mentioned there are imagery being acquired over other areas of the world
[2:27:28] so if you follow the procedure to get your viewed vetted user access you can check the catalog to see what is
[2:27:33] available um but keep in mind the actual acquisition plan is dictated by the government of canada departments
[2:27:44] thank you laura question 36 in the philippines croplands are very small the majority of the farmers have less than
[2:27:50] one hectare do you think polarization or any software manipulation can help determine different indices and crop classification with such very small area
[2:28:01] against the hardware resolution limitation of the sar satellites so this has been a very interesting question that we've been thinking about
[2:28:08] a lot ourselves in our research we often find that these very small crop areas are in need of a higher spatial
[2:28:14] resolution imagery which we have access to ourselves um but there are other options that we think that uh will help
[2:28:20] with crop classifications in these these types of areas um such as these polametric parameters or using multi-frequency sar which both heather
[2:28:28] and i believe sarah have talked about um along with classifiers you have to think about the classifier you're using if
[2:28:34] you're trying to do a crop classification that will take into account sort of these very complex cropping systems these small areas these
[2:28:43] dual in inter cropping type type agriculture systems these long term temporal periods in which crops are planted or when they're being harvested
[2:28:54] so we're looking at particularly methods like deep learning methodologies such as neural networks artificial intelligence intelligence and we have been looking in areas in the
[2:29:04] world that have very complex cropping system uh with smalls fields and we're finding better classification results when we're using the polymetric
[2:29:12] parameters and when we're including things like multi-frequency data in a classifier that can handle the complexity of the situation
[2:29:24] great thank you laura and looking at the time uh we're almost at the 30 mark so we do want to respect
[2:29:30] the time and end uh as we as we stated that we would but i first want to thank
[2:29:35] everybody for joining today for all the participants wherever you're joining from uh we hope you got a lot out of the
[2:29:40] first part of this training and we hope you'll join us next week next tuesday for part two of the training where we
[2:29:46] will continue with today's practical uh and we also want to thank sarah banks from environment and climate change
[2:29:52] canada as well as laura dingle robertson from agriculture and agri-food canada and finally uh heather mcnaren from the
[2:29:59] agriculture and agri-food canada for joining us today and providing such amazing presentations and doing such a thorough job and answering your
[2:30:06] questions so thank you for them and we will uh for those questions that we were not able to get to uh we know that
[2:30:12] there's still a handful left we will answer them and put this on the website and that will be accessible before next tuesday
[2:30:19] so for those that did not get their question answered please do go to the website before next tuesday to look for
[2:30:24] that but thank you everybody again and we look forward to seeing you next tuesday thank you
