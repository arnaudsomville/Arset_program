# Solar Induced Fluorescence and its Applications, Part 3/4

`https://www.youtube.com/watch?v=VvZi5xIye-8` · id 116 · 2:04:49 · module 53 — Solar Induced Fluorescence (SIF) Observations for Assessing Vegetation Changes Related to Floods, Drought, and Fire Impacts

[00:01] good morning everyone this is erica podest here speaking welcome to this third session of our webinar series
[00:11] just to recap what we've done in the past two sessions they were focused on lidar lidar and the first session
[00:19] focused on the fundamentals of lidar and we saw a presentation where where amy showed you how to use icesat-2 for
[00:29] vegetation studies and then we had a demo on how to use icesat-2 data how to access and use that data
[00:37] the next session session number two was focused on the use of jedi lidar data so icesat-2 is a photon
[00:45] counting lidar jedi is a full waveform lidar they're both in space one is a satellite the other one is on the
[00:52] international space station so so today today and the la in the last session which is on thursday we will now switch gears and
[01:02] be focusing on sif solar induced fluorescence specifically solar induced chlorophyll fluorescence and we have uh three really great guests
[01:13] we have a christian frankenberg philippe kohler and karen ewan they're from the california institute of technology and jet propulsion laboratory
[01:23] so today today's session is just focused on on these fundamentals of solar induced chlorophyll fluorescence and christian frankenberg will be
[01:35] talking about that thursday session will be a demo on how to use that data with oco-2 and tropomi which are two
[01:45] satellites in space that are collecting these type of measurements so welcome very much professor frankenberg and thank you everyone for attending
[01:56] remember we'll have a q a session at the end hello and welcome to the applied remote sensing training program um my name is
[02:06] christian frankenberg i'm faculty member in environmental science and engineering at caltech and partially also affiliated with the jet prop nasa's jet propulsion
[02:15] laboratory both in pasadena and today i'm going to talk to you about the use of solar used fluorescence to
[02:22] assess vegetation photosynthesis so most of what we are going to talk about today is basically uh what do how
[02:29] how can we interpret solar and use chlorophyll fluorescence measurements from space give rise to beautiful images like the one that you've shown here that
[02:36] i've shown here in the background but then also teach you a little bit um the techniques how we actually measure this
[02:43] from space and then later on philip kuhler will talk a lot more about those details plus give you some examples on how you can
[02:50] actually access access the data and work with it in a kind of real-life settings let's set the agenda as as follows so
[03:00] what i'm gonna do here first i'll give you a little bit of a primer into solar and use chlorophyll fluorescence a bit
[03:06] of the theory and how we actually perform these kind of retrievals later on in the women the webinar series
[03:12] you will have an overview of different satellite derived fluorescence data products that you can take a look at
[03:18] there will be some explanation about the specific characteristics where they can be accessed and there will be a demo with oco2 data actually
[03:25] showing showing you how to open interpret and analyze the data to basically ask some specific questions and
[03:33] for all of these sessions there will be recordings there will be a q a session where you can basically ask us questions
[03:40] based on the recordings that you've seen so what i'm gonna do now is is give you a little bit of an introduction
[03:48] into solar induced fluorescence it's kind of the primer sif101 um what i want you to take home is also
[03:57] understand the real differences between active fluorometry something that we typically call pamphleurometry and solar and use chlorophyll
[04:05] fluorescence because these are fundamentally different things and sometimes they are being conflated so it's important to really understand
[04:12] what the differences are and how these two techniques are used differently uh then i'll go a little bit
[04:18] into into the topic as to how we measure fluorescence before i'll be talking briefly on one slide just on the
[04:25] limitations of using this if things that you should keep in mind and i'll give you a little bit of a
[04:31] literature overview what kind of papers you could read if you really want to delve a little bit deeper into the topic
[04:37] so the learning objectives for today are as follows first i want you to understand the basic concepts of solar
[04:44] induced fluorescence i want you to understand how fluorescence is related to photosynthesis and the electron transport transport within the photosynthetic processes that
[04:53] are happening in the leaf um as i mentioned before i want you to know what the difference is between pam
[04:59] fluorescent fluorescent fluorescence and solar induced fluorescence fluorescence i want you to know how to interpret the measurements and apply them and at the
[05:07] end eventually you should be able to access open analyze civ data on the global scale or also for some regional
[05:14] local analysis but let me start with some motivational slides why are we actually interested in solar and
[05:23] use fluorescence what what science questions can we actually answer with these kind of measurements so so at least to me specifically it's about
[05:32] the global calm cycle some people might have a more local interest in the data set but if i take a
[05:38] look at it from the global perspective it is very important to basically understand how much photosynthesis the earth as a planet is actually doing
[05:47] so photosynthesis that we typically call gross co2 uptake sometimes it's abbreviated by gpp it's basically the largest thing for carbon in the earth
[05:56] atmosphere atmosphere and its future will determine whether plants will continue to do us a favor by taking up co2 what do i mean by that
[06:04] sentence what i mean by that is basically that every co2 that we as mankind are being emitting into the
[06:11] atmosphere atmosphere not all of these will stay in the atmosphere about half only about half of the
[06:18] co2 emissions that we emit into the atmosphere actually remain there off that half roughly half of it is
[06:24] actually going into the ocean and the other half into the land at um into the land surface
[06:31] and especially the terrestrial biosphere site which basically takes up um a substantial fraction of this is often very variable in time i'm not
[06:41] sure whether you see my cursor here but all these wiggles here that you see in green these are basically internal
[06:46] variations and how much co2 the biosphere is actually taking up year by year year and this is one of the biggest
[06:53] uncertainties moving forward into a changing climate will the biosphere basically still do us a favor by taking
[06:59] up more co2 or might this sync that we currently have have um actually be reduced in the future or
[07:08] even switch back into a source source term so that's kind of on the global scale of motivation why we are
[07:13] interested and really to really understand understand how the lens thing functions we need to understand understand basically the engine of all
[07:21] biogeochemical cycles which is mostly driven by photosynthesis and then of course we also need to understand respiratory processes like
[07:29] how is um reduced carbon basically being re-mineralized re-mineralized and emitted as co2 into the atmosphere this is the other big carbon flux but
[07:39] here we want to focus just on the engine of biogeochemical cycles how do plants fix carbon from the atmosphere
[07:47] across the globe so giving you a little bit of an introduction to solar induced chlorophyll fluorescence here
[07:55] what you are seeing on the right is actually chlorophyll fluorescence on the bottom so on the top is a little display of
[08:05] basically dissolved chlorophyll so it happens with all the chlorophyll molecules this has been dissolved in alcohol so in principle you could grind
[08:14] a leaf dissolve it in alcohol and get some kind of solution like this if you illuminate this solution with a
[08:21] heavily blue light so let's say light around the 400 nanometer spectral range you should see some red glow
[08:30] so this is weird the color of the chlorophyll is green you illuminate it with blue light and it appears
[08:36] reddish if you look at it from the side so if you just look in a scattered direction and this can be seen with the
[08:41] human eye if you do it right so this is basically a re-emitted signal at longer wavelength in the red
[08:49] wavelength wavelength it would be much brighter if you go a little bit more towards outside of the
[08:55] red area but the human eye can't really see this so there's a specific range around 700 nanometers that the human eye
[09:00] can still perceive and this is what you would be seeing if you you perform this experiment at home
[09:06] so a small fraction of the absorbed light light by chlorophyll is always being re-emitted as fluorescence this is
[09:12] typically happening above 700 nanometers the first speak is around 680 so it starts a little earlier which might be
[09:20] the one that you see here and it extends beyond this 850 nanometer range and there's a little tiny overlap in
[09:27] wavelength range with a visible spectral range so in principle if it's dark you have a blue light source and a strong
[09:33] chlorophyll solution or laser with which you illuminate it you might be able to see it um um so this happens even for dissolved
[09:42] chlorophyll solution for instance an alcohol that's the figure on the right so you might think now what is this all
[09:49] about this is kind of a pure chlorophyll solution solution how can fluorescence now have anything to do with photosynthesis because these
[09:57] chlorophyll molecules in this flask here basically for sure not performing on any photosynthesis in this case and they're actually brighter than a
[10:07] leaf would be so now we are going into understanding how these things actually happen and what they mean
[10:15] so what is happening during photosynthesis or what happens if chlorophyll is basically absorbing light which is just shown here on the right
[10:24] we see a typical absorption spectrum absorption spectrum in green which shows where chlorophyll is preferentially absorbing typically there is a peak in the blue
[10:34] and the peak in the red and the fact that chlorophyll absorptions are somewhat weaker in the green
[10:40] spectral range actually give rise to the color of leaves that's the main reason why leaves appear green because they
[10:46] absorb a little bit less light in the green spectral range than they do in the blue and the red
[10:52] but if light is being absorbed by chlorophyll chlorophyll what happens you basically get an excited energy level in the system and
[10:59] this can jump to an energy level here to a higher state in this case a red photon
[11:03] has less energy well excited to some lower state and then there can is actually internal conversions conversions that are kind of quenching the energy of
[11:12] a high energetic blue photon here pretty rapidly towards kind of the lowest common denominator which has roughly the
[11:19] energy of a red photon and from there it can move down to some of the ground states
[11:26] after some internal energy conversion and this signal when it spontaneously basically moves down to a ground state
[11:33] without heat quenching gives rise to the fluorescent signal so this is what we see we see excited
[11:39] states in a chlorophyll molecule that are internally being quenched to a lower energy level and then they jump
[11:45] down to the lowest energy level and give rise to the fluorescent signal so this is the definition of fluorescence
[11:50] basically basically so during photosynthesis or in all chlorophyll molecules a small fraction of light is always being re-emitted as
[11:57] fluorescence this is what's happening there there and now we can actually use remote sensing instruments um that overlap in the spectral region and
[12:07] arrange where this fluorescence takes place to basically measure the signal from space which to me still is very
[12:13] astounding astounding and in principle i'll talk a little bit about this in more detail this measurement is more directly tied to
[12:21] plant health and activity than traditional measurements such as just greenness because now we're actually having a probe into the photosynthetic
[12:29] machinery um of plants as opposed to just the status like how green is a leaf what color does the leaf have
[12:36] which is really the only thing we have so far if we look at this in a more energetic
[12:43] sense if you think about a solar photon that's being absorbed in the antenna system within a leaf
[12:49] in the photosynthetic machinery that is tied to some kind of reaction center that we are calling ps2
[12:56] this is the center of actually the water splitting takes place where water is being split and o2 is being released so
[13:02] photosynthesis photosynthesis is a byte product that we are all happy about this oxygen um this is happening
[13:08] in this ps2 for the system this is where photochemistry is taking place and the amount of fluorescence
[13:15] that actually happens depends on the ratio of all these um fates of a solar photon so what happens
[13:23] with this energy is that it can actually either perform photochemistry it can radiatively decay this is a term
[13:31] kind of more than more or less constant term here with a rate constant kd and then plants have one peculiar thing
[13:38] that's very important it's called npq non-photochemical quenching it's actually a kind of release valve of extra energy
[13:46] that plants can shunt energy into and they can actively regulate this so if there's too much light
[13:52] and the plants are stressed they can't really use all this light for photosynthesis they can activate npq
[13:59] thereby have a higher rate kn and that dissipates energy what is also left is this kf term
[14:08] typically this kf has a rate constant for photosynthesis and this is kind of an intrinsic property of the molecule so
[14:14] kf itself can't be regulated kd is often supposed to be relatively constant but what changes all the time
[14:22] in a leaf is kp the rate constant for photochemistry photochemistry and kn the rate constant for non-photochemical quenching and now if
[14:30] we have all these rate constants competing for the fate of the solar photon photon the yield of fluorescence like what
[14:37] fraction is actually going into fluorescence is the rate constant of resonance divided by the sum of all the other rate constants
[14:47] now you can imagine what would happen in this chlorophyll solution that i showed before in the chlorophyll solution
[14:55] it doesn't have the capacity to do photochemistry anymore it also doesn't have the capacity to really do
[15:01] non-photochemical quenching anymore because that whole mechanism is not there anymore in those cases kn and kp would be
[15:08] basically reduced and the pure chlorophyll solution would does actually do quite a bit more fluorescence than chlorophyll that is within an antenna
[15:17] system in a leaf just because you remove these k n and k p currents here so so moving forward
[15:28] i want to go through a little bit of a darwin review that albert pachaka still wrote to explain to you how we actually
[15:35] link this chlorophyll fluorescence to photosynthesis for remote sensing applications and i'll give you a little bit of an example here on the left slide
[15:42] again on the left side again of the chlorophyll a b absorbance spectrum the peak in the blue and the
[15:48] red and the minimum a minimum in the in the green spectral range overlapping with the um spectral description of the chlorophyll
[16:00] a fluorescence with a typical peak at around 680 nanometers the first one and the second bigger on
[16:07] nanometers nanometers and then it slowly decays towards 900 nanometers nanometers so how does this all go about and what factors are
[16:17] determining the amount of fluorescence that's taking place so what i will do is i will walk you
[16:22] a little bit through this term on the right side here and what we have displayed here on the
[16:31] right side is basically the fate of absorbed radiation and how this feeds into photosynthesis photosynthesis so what i will do is first outline the
[16:41] first part here something is here written called f a power power which is the fraction of power light so par is this whole light
[16:52] in this spectral range where chlorophyll is absorbing that is driving photosynthesis that's typically the range between 400 and 700 nanometers
[17:00] and fa pass basically a number between zero and one what fraction of the light that a canopy a leaf absorbs is going
[17:08] into the antenna system so the total light that's being absorbed is basically f a power times power
[17:14] typically what we call a power which is absorb power so we have this incoming radiation fraction of this will be reflected as we
[17:24] can see here on the left side fraction of the light within a canopy is being reflected back
[17:30] a little bit is transmitted so a little bit hits the ground here potentially but actually quite a lot in a good healthy
[17:36] canopies being absorbed absorbed and this signal here actually gives our eyes to some of these beautiful reflectance spectra that we typically
[17:44] see in vegetation and the structure of leaves actually gives rise to like a so-called red edge where the reflectance of a leaf will
[17:53] actually go up dramatically beyond 700 nanometers nanometers and if the human eye could see in the spectral range here at 800 nanometers
[18:01] all leaves would be basically almost looking like snow very bright whereas in the visible spectral range they absorb a lot of light with a tiny
[18:10] little bump in the green range but there are spectrometers they can actually measure this relief brightness or canopy brightness here as
[18:19] well and these are basically techniques that determine something like this normalized differential vegetation index that some of you might have worked with
[18:27] just basically just looking at band ratios in the reflectance in this spectral range around 800 nanometers and
[18:33] in this red spectral range around 680 nanometers nanometers so this is the fade of a solar photon
[18:41] coming from the sun how much is being absorbed because this total amount of absorbed radiation is basically kind of an upper bound
[18:48] as to how much photosynthesis can a plant actually do so what happens in the next step then it gets a little bit more tricky
[18:56] because now we have absorbed and now we have to go into the photosynthetic machinery what does the
[19:03] light actually do where what does it power power a fraction here is again lost into phenon phenon non-photosynthetic pigments but the most
[19:11] important part what the light in the leaves is doing is it's powering two cycles both in photosystem two and photo system
[19:20] one one where light goes into these and basically excites um chlorophyll molecules molecules and these work in a sequence it's often
[19:30] called the z scheme of the light reactions of photosynthesis in ps2 we have this oxygen evolving complex
[19:37] this is basically where water is being split split h plus is being generated and o2 is being generated almost as a waste
[19:44] product product the hydrogen here basically is not wasted in that sense because it can basically lead to gradients across
[19:55] this this membrane here and there's atp synthase which can actually make use of these gradients to use them to force h plus through here
[20:07] and thereby actually gain power power this atp synthase which takes adp and basically gives it back to
[20:16] atp so this is later on an energy currency to power the photosynthetic reactions in the carbon reactions
[20:25] in ps2 it is another photosystem it also requires light typically they are in sequence and both should absorb about
[20:33] half of the total light so they should be coordinated and what is happening in ps1 is basically a
[20:41] process that creates nadph from nadp and this gives the carbon reactions later the kind of reducing power that you need to power
[20:50] photosynthesis you don't need to know all the details but the most important part is that what's being done
[20:57] with the light is not fixing carbon it is splitting water creating nadph creating atp this is all
[21:06] what's happening afterwards with the light they don't know anymore and in this time step here we basically then also have um
[21:17] these terms like how much of the light will actually go into ps2 being used to basically split water here and this
[21:25] oxygen involving evolving complex how efficiently is it used in ps1 even though there it's mostly thought that this is
[21:33] basically not really variable only the the yields in ps1 are variable and parts of it can be quenched as heat
[21:41] so how efficiently it goes to drive the so-called electron transport chain this is being determined here in the
[21:48] next step this is basically similar to what i've shown you before it gives us the rate constants for
[21:54] fluorescence displayed here but you can turn these equations around and compute the rate the the yields for
[22:01] photochemistry and the yields for non-photochemical quenching so this basically determines the fate of the fade in the electron transport chain
[22:11] how much goes into fluorescence how much is being quenched as heat and how much goes into the real linear
[22:17] electron the electronic electron transfer and the cyclic electron and so i'm not going into the details here
[22:25] but typically this is being driven by both ps1 and ps2 and then a small part of it is being um
[22:34] still leaked out through alternative electron strings this is not so important but the most important part is that the end product of this electron
[22:43] transfer transport chain in the photosynthetic machinery is atp and nadph and from the cyclic electron transfer also atp so this is basically
[22:54] the entire part of the light reactions this is the only thing where fluorescence is really taking place
[23:02] later on the plants will actually use atp and nadph to fix carbon that's completely independent in that sense from the light
[23:11] reactions but of course they have to work in sequence because one process the carbon reactions actually use the
[23:17] products of the light reactions and they have to work in coordination and they have to work pretty quick
[23:24] and this gives this is being done in the so-called kelvin basin benson cycle this is basically the
[23:30] way way co2 is being fixated where you have co2 reacting basically through an enzyme rubisco with riboloes15 bisphosphate
[23:41] and that basically fixes the carbon into a c6 compound first which is then being split into two
[23:47] c3 compounds and in this process which is enzymatic basically with the enzyme rubisco which is very important in global
[23:55] photosynthesis you might have heard about it co2 is being fixed and then in several other steps these energy units that have been
[24:05] kind of gained in the light reactions atp atp as an energy unit and nadphs reducing power basically fixes carbon
[24:14] um creates sugars along the line and actually regenerates the cerebellus 5-bisphosphate at the end of the day and
[24:21] then it goes in kind of this um cycle part where the phase one is calm fixation then it will be reduced
[24:29] and then it will regenerate uh the rebels five biswas fade so that this cycle can basically go on
[24:38] for a long time so these are the basic steps of photosynthesis and it tells you a little bit how fluorescence might be
[24:44] related to them there is some problem there sometimes well it's important because it is important to understand the differences
[24:54] in how fluorescence is relating to the photosynthesis of c3 and c4 plants there's one alternative pathway for rubisco it can not only react
[25:06] with co2 but also with o2 and through this so-called photorespiratory pathway rubisco actually works with ripolo's bisphosphate
[25:17] bisphosphate and o2 [Music] [Music] and in this process it actually creates a co2 molecule on the way out
[25:24] so if we lose o2 we gain co2 in this case so it's a sink um term where actually
[25:31] the electron transport rate then is um part of that energy of these electrons in the atr are being kind of siphoned
[25:40] off for photorespiratory processes that reduces the amount that is actually available for fixing calm and the gross
[25:46] photosynthesis gpp so this is one part where we might have a quite a difference between c3 and c4
[25:53] plants and c3 plants typically around 30 can be lost in this photorespiratory pathways whereas it is mostly inhibited
[26:01] in the c4 photosynthetic pathway which can basically create its own high co2 concentrations near the rubisco side thereby
[26:10] suppressing suppressing the oxygen pathway here last but not least um quite often we are interested in net
[26:18] photosynthesis so what is the net part of photosynthesis what do we mean i mean by net photosynthesis we
[26:24] typically um take off the autotrophic respiration so it's basically relief respiration in this case so if you have gbp getting in
[26:35] if we take out the plant respiration we are left with the net primary production and then we can also look at
[26:41] heterotrophic respiration i'm sorry that can be reduced this gives rise to kind of the net ecosystem exchange and in the end if you also take
[26:50] into account longer term effects we can define the term nekox net ecosystem productivity so but for the case here we mostly want to stop at
[27:02] the npp term so if you have gpp and then just want to see what is the net gain win of plans in
[27:09] terms of co2 basically just have to take into account autotrophic respiration pathways in the plant six which which
[27:16] ends up with the term npp as a rule of thumb it's typically about half of the gpb
[27:24] that that ends up as npp this is just as a rough ballpark number but quite often it works out pretty well
[27:32] if you think about the fate of a forest um this so-called npp to gpp ratio is not always the same
[27:40] um this is just one example i always try to refer to references here on the bottom which just shows like the annual
[27:47] carbon flux in terms of gpp and npp uh for forest and with different age so if it is pretty young in the
[27:55] beginning when it's not a mature forest yet it can't do so much photosynthesis overall it doesn't it's not yet fully
[28:00] developed as a forest so gpp increases npp increases as well uh the respiratory process like eye or
[28:10] trophic respiration increases as well and then the part that is gray shaded here is basically the part that remains
[28:17] as npp so in this nice optimum here we basically have about half npp is half of gbp so this is kind of
[28:25] the peak productivity so to say of a forest forest once it ages then gbp and autotrophic respiration might actually
[28:32] asymptotically move towards each other and the npp itself is basically not increasing that much anymore anymore was being reduced so it's kind of
[28:42] getting a whole forest into some kind of steady state where its net effect on co2 is getting
[28:47] smaller and smaller in terms of its sink so so um after all these complicating factors what can fluorescence really teach us
[28:59] about for uh photosynthesis so let's start with some active methods that have been used for decades and after that we can move on to solar
[29:07] induced fluorescence and what we can learn from that and what the difference is this kind of two active methods
[29:16] so so give me one second active fluorometry which we often call pamphleurometry pulse amplitude modulated fluorescence is a method that has been used in
[29:28] decades of research because it's such a powerful powerful yet simple method in a way what is doing
[29:37] and i show you some example here of a leaf clip and the instrument the spam instrument here on the right side
[29:44] and some graphic on the left to show the measurement principle which comes from leica on the left and
[29:49] another another producer on the right with the image of the actual measurement devices you have a little bit of a
[29:57] normal light source that can illuminate a leaf and kind of mimic power but then you have a modulating light
[30:03] beam that constantly illuminates the leaf it's kind of like an on off switch this can be running at 100 hertz or so
[30:10] it's modulating a little bit so it goes on up and down up and down so you basically have one part which we
[30:17] call actinic light this can go off so this would be basically dark if it's off you can turn
[30:23] it on this mimics the sun what you can also do is you give it a flash flash with a flash we mean it's so bright that
[30:31] it's basically about four to five times brighter than the sun in in during midday in california on a
[30:38] wonderful sunny day so it's so bright that there's too much light for the plants to use because i've never been
[30:44] used to that so it closes all the photo centers because it's too much light and what this will do i'll explain later
[30:52] and then you can turn it back on to normal light kind of sunny conditions and you can turn it back into light mode
[30:57] but what it's always being done is during that part you have this little light beam which is very very weak which
[31:04] basically just gives you a modulated signal on top of the sun so to say just going on and off and on and off
[31:12] um and this is basically being run at a very high frequency and the signal is also being measured at
[31:18] a very high frequency so with this technique that's pulse amplitude modulated so you can basically distinguish what fraction of the
[31:26] emitted or reflected signal has this modulation frequency and which one is more broadband it's kind of like an ac dc
[31:36] separation and in the end what you would measure as a total light is something like this in panel c so if
[31:41] it's dark you only see the modulated light beam if the light is on you basically see everything is moving up a little bit
[31:48] but you still see that with little modulation on the top of it here with the flash the same it jumps
[31:54] the actinic light basically jumps everything up to a high degree and you see the modulation on the top here
[32:01] so this is in fluorescence light and in the emissions you can then basically try to demodulate the signal
[32:07] so that you see what is the response to the actinic glide what is the response to just your
[32:12] modulated signal and the important part now here is that the amplitude of your modulated signal is always the same
[32:19] what you then would see in terms of the fluorescence signal which is basically oh this was the emitted signal that's
[32:26] basically being used to drive it what you will see in a fluorescent signal which is this part here
[32:32] is basically in the modulated signal just a response to a fixed modulated light beam so the amplitude of
[32:39] which is always the same and you can see already here that this is is disproportional so it was very small
[32:46] and it was dark it's a little brighter when there was the sun on it's very big once you had give it this flash the
[32:54] question is now why is this amplitude so much bigger because in principle it's driven by the same small signal but
[33:00] suddenly it gives rise to much more fluorescence fluorescence and now we can call this a yield because
[33:07] the light that is driving this amplitude has a constant intensity it's the modulating height basically and this is the method that's typically
[33:16] being used in pam fluorescence so i really want you to understand how this works works that's why i'm going through some basics
[33:22] here so outlining the power of active fluorometry and how we can actually probe photosynthesis with this again to repeat a little bit what i said
[33:32] before if we are interested in the fluorescence yield fluorescence yield here we ignore the kd term now to make it
[33:40] easier is just the ratio of this kf which is the fluorescence rate constant which we assume to be constantly an
[33:47] intrinsic property divided by kf plus kp plus kn so this is the rate constant for photosynthesis and the rate constant for
[33:58] non-photochemical quenching and on the right we have some kind of curve of these fluorometry measurements for a leaf
[34:06] that has been in the dark at the beginning here where i outlined this as black it's completely in the dark it's adapted
[34:14] to dark light and then suddenly you turn the light on and this is the time period that is yellow
[34:19] so you switch it on you keep it at the same level so it's not slowly ramping up
[34:23] or going up and then down it's just turned on stays there like a block and then it's
[34:29] being turned off at this time step and it's dark again so this is basically what's being done
[34:36] here and sometimes this curve this leaf can be flashed with this so-called saturating pulse that i mentioned before
[34:44] now i want to walk you a little bit through what is happening at these different stages so what happens in the beginning
[34:51] if the leaf is so called dark adapted so it hasn't seen light or the sun for like
[34:56] let's say half an hour or an hour what a leaf does then it relaxes all of these non-photochemical quenching
[35:03] mechanisms mechanisms that give rise to this k n term the rate constant for nonphotochemical quenching so this term here if the leaf is in the
[35:12] dark the kn term is basically very very low but the kp term is maximum why is this maximum
[35:22] because if there is no light that the photosystems can basically process all of the reaction centers are open
[35:30] that means they in principle can quench all the energy at that time so you have a maximum kp
[35:37] rate at in this dark adapted state but you basically have completely removed the km term and this gives rise to a so-called f
[35:45] naught signal so this is basically the fluorescence yield under dark adaptation so so what happens now if you give it a flash
[35:55] so if you give the leave a tiny little bit of too much light in the dark the kn term is still zero so this is
[36:04] reduced to nothing and the kp term is also going to zero in that flash because you give it so much light that
[36:12] all the reaction centers are closed so the processing through elect of electrons through the electron transport chain is basically being blocked
[36:21] so kp is being set to zero or near zero in this case in most cases because it's
[36:27] hard to really get it down to complete zero zero which then gives a rise to kind of this
[36:31] maximum fluorescence here typically we should add a kd here so that this doesn't go to one but this is basically the maximum
[36:39] fluorescence yield that we could get in this case this is what we call fm in this case the m is always during these
[36:45] saturation pulses and and the main reason to do these saturation pulses is to set kp to zero
[36:54] because only then can we really probe what the kp is under normal conditions and how this works i'll explain now
[37:05] so so we turned off the saturation flash was still in the dark now we turn the normal
[37:11] light on this is kind of remove the curtain from the leaf let the sun in turn the actinic light source on so what
[37:18] happens now so this is not a saturation flash anymore this is something that the leaf might typically see outside
[37:25] suddenly we see the fluorescent signal going up and then after the initial rise it will actually slowly go down
[37:34] and what is happening during that time curve is basically an adaptation of these kp and kn terms
[37:44] so initially um um when kn when the light goes up here kn is still very low and kp has to first
[37:52] kind of get its gears um is not yet that high so initially you actually give a get a rise
[37:58] in the fluorescence yield because these terms might be reduced but then slowly the kn term is kicking in so
[38:05] the leave is under light the non-photochemical quenching mechanisms turn slowly on in time now this gives rise to a decrease in the
[38:14] overall fluorescence yield and then the important part is now here if at the end of this curve we give the
[38:20] light another flash what happens then it does not go up to the same level as it did
[38:27] during the initial initiation in a dark adapted leaf so what is happening here at fm prime here
[38:37] is basically we still kill kp but now kn is still working so the only difference between the term
[38:44] here in the beginning and this peak here what gives rise to this difference in the absolute peak is that we suddenly
[38:52] have a kn term in there and this actually then enables us to compute what kn is so if we have all of these parts here
[39:01] we can basically determine what is non-photochemical quenching this is basically this part here of the fluorescence curve is all
[39:09] normalized normalized we can determine what the ps2 photosynthetic yield is in the electron transverse chain which is basically um
[39:18] kind of this variable fluorescence part here which is fm prime minus ft here in this case so this part
[39:25] has to be within this driven by kp we can also look at the maximum ps2 yield here when we look at the dark
[39:34] adapted leaf we can look at steady state fluorescence ft here here this in principle should be normalized
[39:41] by the amplitude of the modulating light beam typically this is all working in electronic units so people are not
[39:49] interested in the actual units in pamphlerometry but just the ratios between each other so that cancels out
[39:55] all unit aspects so it's never really fully calibrated in terms of giving you absolute gradients which is what we
[40:02] typically need for remote sensing purposes and the only thing that x can measure from space it's not strictly f t
[40:12] it is in principle f t divided by the strength of the modulating beam times the actual a power value that is
[40:22] happening so this would give rise to something something what we would see from space it's the only thing we can measure from
[40:29] space space we can't have a saturating light beam on a satellite that basically flashes every canopy canopy and suppresses photosynthesis and
[40:37] thereby we can calculate all the yields so we can't directly calculate fpq we can't directly calculate the ps2 yield
[40:45] the only thing we can measure from space is this ft signal times the absorbed light radiation uh absorb light in the past spectral
[40:54] range so the tricky part is now how can we relate measurements of this ft yield times power
[41:02] with stress conditions and potentially also with photosynthesis um um so what the power of active fluorometry is that we can basically directly
[41:13] compute the so-called ps2 yield and with that we can determine to a very good degree the rate of electron transfer
[41:20] that actually goes through ps2 so this is then basically j this electron transport rate is equal to the
[41:27] ps2 for the synthetic yield times the absorbed radiation that goes through the system times better which is kind of the
[41:34] fraction of light that is being absorbed by ps2 typically people take 0.5 on average sometimes the antenna
[41:42] system can be redistributed in various occurrences but i'll not go into this so the first order you can assume that half
[41:50] of the light goes into ps1 half of the light goes into ps2 so how is this now related to
[41:59] photosynthesis photosynthesis so in principle we can consider the sieve signal that we measure again shown on the left side
[42:06] and the green curve would be kind of the spectrum that we see it should be proportional to the amount
[42:12] of light that the leaf sees times the fraction of light that is being absorbed by chlora by the antenna system times the yield of
[42:20] fluorescence so this is basically the photosynthetically active radiation times the fraction of part that's being absorbed times f a power this can be
[42:30] estimated from kind of vegetation indices roughly what this fraction should be gpp on the other hand is also something
[42:39] very similar it is if you look at it in what kind of light use efficiency the description gpp is
[42:46] also proportional to part time that power which is a power times a kind of photosynthesis yield in
[42:53] our case this is not strictly speaking the ps2 yield there's some parts of this loss and photorespiratory processes
[43:00] should be involved into this vector so it's not completely easy to determine it in the same way as the ps2 yields that i
[43:06] mentioned before but think of it like a bulk efficiency parameter for photosynthesis right now if we take these two equations we can in
[43:16] principle bypass at least this part times f bar term and we would have an equation that looks like gbp equals
[43:22] fluorescence times the ratio of these two yields times some escape probability like how likely is it actually that's if
[43:31] still escapes from a canopy and goes out into space so that we can measure it but the tricky part is now um that this
[43:39] ratio the yield of photosynthesis and divided by the yield of fluorescence is of course not always constant if it
[43:46] were constant we would have the perfect proxy for photosynthesis photosynthesis we already have a very good proxy for
[43:53] photosynthesis because most of what a synthetic variation is actually driven by particles f-bar now i want to delve a little bit deeper
[44:02] and look at what how these ratios and the yields are actually changing as well and this is just to give you one example
[44:10] here here where we plot the typical quantum yield of photochemistry on the bottom on the x-axis x-axis and the quantum yield of fluorescence on
[44:19] the y-axis and what you typically have is is that it always depends on the state of npq
[44:26] npq if npq is low both photosynthesis and fluorescence basically compete for the same kind of resources so they are anti-correlated
[44:36] this is typically happening here so if the photosynthetic yields are high npq is low the two yields are
[44:44] anti-correlated this would not be good couldn't really be be fluorescent signals should be anti-correlated with photosynthesis in this case
[44:53] but once non-photochemical quenching kicks in and this typically happens when the sun is out so not not in the early
[45:00] morning or late afternoon um situations but mid-day non-photochemical quenching typically kicks in and then these two yields are correlated with each other
[45:11] so this is important to note that this ratio of these two is basically correlated under high light
[45:19] conditions conditions and anti-correlated under very low light conditions but under these typically la light conditions during middays they
[45:28] should be correlated with each other one thing this is important to note on the right hand side we have kind of
[45:34] averaged averaged measurements that we basically took on avocado plants and my backyard with pam system system showing exactly the same feature as this
[45:45] one here which was on conifers um so in the beginning if you have low lights below this is all below 100 micro mole
[45:51] per square meter per second and power you have this anticorrelation but once you get light on these leaves above 300
[45:58] micro moles these are anti-correlated but one thing is to know that often the change the fractional change in
[46:06] fluorescence versus the fractional change in ps2 yield is somewhat dampened so if you have stress conditions the ps2
[46:12] yield is being decreased the shield also goes down but not always to the same degree it might be dampened by a factor two to
[46:20] three three but overall this correlation that is happening here is a reason why fluorescence also probes to some degree of vegetation stress and
[46:31] not just greenness and not just apar just have to be cautious that in some conditions these yields might be
[46:38] anticorrelated so we have to make sure that we are measuring in the right conditions conditions and we also have to see how these yields
[46:45] respond to different environmental conditions be it water stress or other activities and with that i want to move on to how
[46:55] do we measure sieve it's basically now from the theory of what civ means to the means of measuring it it's
[47:02] basically a broad overview of how we can actually measure this fluorescence signal signal this all follows after the theory that
[47:11] i've explained before now we actually look at it how we measure this from space space or with any remote sensing instrument
[47:17] because we can't really afford these measurements that the pamphlet from major is doing which basically only measures this fluorescent signal by
[47:25] having this modulated light beam and separating the wavelength ranges completely completely so the problem that we now have
[47:36] how do we measure this faint glow remotely um if you think about fluorescence from plants plants when do they happen
[47:47] they only happen if the sun is out if the sun is out the sun is also very
[47:52] bright in the 750 through 800 nanometer range range so you can imagine a problem that is similar to you
[48:01] having like a really low low wattage light bulb and you turn it out you turn it on in
[48:08] the middle of full sunlight in the middle of the day you will hardly see it it will hardly
[48:15] make a dent in let's say the brightness of the paper that you're reading or anything that is reflect being reflected
[48:22] on the ground because the background light is so extreme it's exactly the same problem with solar induced
[48:28] chlorophyll fluorescence if you look at reflected light from any surface from a canopy in the 750 nanometer range fluorescence just adds a
[48:37] tiny tiny little bit to it maybe one percent percent and how do we measure this one percent
[48:45] most of the fluctuations the sun depending on the angles variations in the total light reaching that specific spot varies
[48:54] much more than one percent surface albedo of a spot might be changing by way more than one percent
[49:00] from one overpass to the other so how do we know what part of this light that we
[49:04] measure measure actually belongs to fluorescence this is just some random fluctuations in the reflected radiance because maybe the
[49:11] sun was a little shaded or the reflectance actually changed so this is basically our main problem how do we measure something if the
[49:20] background signal is so large in principle this problem goes back to something that you might be familiar
[49:27] with um if you look at minerals and that basically glow as well they also show often fluorescence typically
[49:33] in the visible spectral range and they absorb the light in the uv spectral range how do we make those visible
[49:40] typically you go into some of these museums you go into a dark room in this dark room you have minerals
[49:48] you're not swamped by outside light that you can see and then you turn on uv light uv light you can't see so it's still
[49:55] dark for you but the minerals absorb uv light and re-emit re-emit the light in the visible spectra range
[50:02] so you suddenly you can immediately see it because there's no background light but once you would open the curtain let
[50:09] the sunlight in you certainly would not see anything anymore you would see the minerals as they would look in bright
[50:14] daylight daylight and we have the same problem with fluorescence how do we measure the signal without having this curtain with
[50:21] which we can block off the background light to make the signal visible um um so this is our basic remote sensing
[50:31] problem in that sense and i'll show you one example of a simulated spectrum what we typically observe from space here in black
[50:40] so these are basically measurements that we would see as a total radiance at the top of atmosphere with somewhat higher
[50:47] scattering angle depth of 0.46 this is a signal that we would see and the fluorescent signal that we would
[50:53] see on top of it is basically the red range range the red signal here just at different units so you see the
[51:00] units here are about a factor 100 a difference so the signal here and fluorescence is 100 times less strong than the reflected
[51:09] radians radians but it's basically emitting almost everywhere in this spectral range typically we have this decreasing slope
[51:16] in the spectral range and it's also being reabsorbed within the atmosphere by oxygen so this is a typical oxygen
[51:22] absorption feature but there are some peculiar features in here that i'll go into later because these features don't absorb the
[51:30] fluorescence fluorescence that is being re-emitted from the surface surface because these absorption features don't come from the earth atmosphere they
[51:39] basically already happened in the sun and we call those lines solar frond over lines lines so what i want to show you first is how
[51:46] we can actually make this signal visible in the laboratory because in a laboratory we can devise our
[51:52] curtain curtain and this is one thing that we developed in one of these typical gas leaf exchange measurement systems
[52:00] how can we develop a curtain we can do it in a way by having a sun which we the model as an actinic light
[52:09] source so here would be a leaf in the kind of leaf chamber and we put a short pass filter in here
[52:15] so we block off all the we only let light pass that is lower than 675 nanometers nanometers so now we have a curtain in spectral
[52:23] space it's like the curtain in the mineralogy museum you illuminated with uv light that you can't see
[52:29] now we just illuminate it with light lower than 675 nanometers and then we have a four optics in there in there
[52:36] and only measure light that is being emitted beyond 675 nanometer so in this case it can't be coming from the light
[52:43] source so everything that we measure above 675 nanometers suddenly has to be fluorescence it has to be generated
[52:50] within that leaf because we didn't use that that wavelength to illuminate the leaf so this is what's happening here this
[52:58] way we can make this absolute solar and use chlorophyll fluorescence signal directly measurable in a leaf chamber
[53:05] and this is one system that we basically redeveloped here a paper is being mentioned here led by troy magni
[53:13] we can do this so we can do still the active pam fluorometry in this couple system but we can also feed it back to a
[53:19] fiber that basically measures the spectrum directly and this is now looking at the absolute fluorescence coming out in this so-called ft signal
[53:28] in the bottom here and for fm if you give it a flash this is also something we can measure and this is being
[53:34] measured here in this term for these fm spectra that are reacting to the flashes so now we don't just see a one constant
[53:43] value but we can actually see the spectrum emanating from a leaf with this system just to give you some
[53:49] examples here um for fm and ft value so to say um under different conditions so typically the fm
[53:58] values here if you d if you basically increase the ambient power light dfm values will go down
[54:06] because now fm is kind of more or less normalized because we always use the same saturation flush
[54:11] this is exactly what we are kind of expecting from a pam-like system but now we can see it's spectrally resolved
[54:17] and this down regulation in fm is basically affecting all the different wavelength ranges almost equally so it's
[54:24] actually hard to get any gain any information from the spectral shape here and for f lambda which is actually now reacting to the
[54:33] amount of actinic light this f lambda signal which is the absolute fluorescence basically what we would see
[54:38] from space is of course increasing with ambient light but under some stress conditions we basically see here
[54:46] in this experiment that the f signal here the sif signal is also going down down to um
[54:52] compared to the initial levels here if it is under somewhat stressed conditions so there is some information in here on
[54:58] the stress level as well but i would refer to the paper to go into more details if you are interested
[55:04] in in basic message here is in this case we can develop our own curtain with a band pass filter
[55:12] but from space we need a curtain so how do we can we develop a curtain with which we can actually make this
[55:19] signal visible from space or any remote sensing instrument because we can't put a band pass filter or a short pass filter on the top of the
[55:27] atmosphere to make sure that the sun is not illuminating us with any light above 700 nanometers so we need a dark room
[55:36] and we have a dark room not a black room but a grey room not kind of physically but in spectral
[55:45] space so these frown over lines that i talked about are kind of our dark room we have a dark room in spectral space
[55:53] so use a font frown over he was actually the first to determine or to detect that if you measure the sunlight
[56:00] at sufficiently high spectral resolution you actually see that it's not a continuous spectrum anymore you have these dark lines in there
[56:08] that basically in specific wavelength ranges are much much darker than in the continuum and this is happening in the sun's
[56:16] atmosphere so it's basically elements in the sun that actually already give rise to these kind of absorption features in the light that
[56:23] reaches us and planet earth so so if we had an idealized fraunhofer line let's look at one like this in the
[56:33] bottom here where we have in the continuum continuum a nice smooth line but inside this frown over and it would be completely black so
[56:40] this would be our perfect curtain and then we add some additive light source what fluorescence actually is
[56:47] which is the same everywhere across this wavelength range in this simplified example what we would see is basically a
[56:53] signal like this it looks like the one previously previously let's just shift it up a little bit
[56:59] if he had a spectrometer that would just measure in this wavelength range in the middle middle all we would see
[57:05] would be purely fluorescence because it can't have been come from come from something else because it was
[57:11] in this line when the sun was not emitting any light what happens though is also that the
[57:18] depth of this line is changing so this high high intensity or radiance inside that band divided by outside of that band and this
[57:25] continuum here changes in this case it changes pretty dramatically um because it was basically go go almost zero transmission within that
[57:35] line line which is not what we have unfortunately in the sun but even if it would be
[57:40] having 50 transmission it always changes this ratio of inside divided by outside which is kind of a normalized depth
[57:49] of the so-called fraunhofer line so how would that look like with a real frown of a line where transmissions can
[57:57] be be between like 30 to 80 so how can we make use of those as kind of our dark room so
[58:04] i made up a frown of a line here looks like a gaussian shape this is all flat to make it easy but it
[58:10] absorbs light in the middle so it looks like this what happens if we have solar use fluorescence let's assume there's no
[58:18] spectral dependency on that signal all it would do is move the signal up a tiny little bit by one percent in
[58:26] the continuum if you have fluctuations in light or reflectance it would not shift it up by one percent but it would roughly scale
[58:35] it with 1.01 and you would see a [Music] [Music] similar signal but not exactly the same because once we take the ratio of this
[58:46] green and reddish line now we would actually see something like the blue one and you see that it's not straight it's
[58:53] not a straight line it is a little bit higher in the middle so this is why we call it sometimes the
[58:59] infilling of round over lines if you take this ratio spectrum you see a tiny little bump and what we are doing is actually we are
[59:06] trying to measure these tiny little changes in the depth of these front overlines to determine how much fluorescence must
[59:14] have been in that signal to get the measurement that we actually observed and this we can use doing
[59:21] fitting routines basically so we fit an entire spectrum over multiple fraunhofer lines to basically determine this so called infilling so we fit this
[59:30] in filling and thereby we can determine the quantity of the fluorescence emission so we basically use these dark
[59:37] lines as kind of our curtain and for that it actually doesn't really matter whether we are looking at a leaf
[59:42] at a tree at an ecosystem or a hemisphere the total emission that we measure the strength of the light bulb
[59:49] should be unbiased that's one key advantage of this fluorescence technique that we are scale independent in a way
[59:55] so if the satellite would look at a pixel that is half a city or just buildings in half a
[1:00:01] forest forest it would really just measure half the signal compared to the same pixel that would be covered with the entire forest
[1:00:08] the same kind of forest in both halves of the pixel this would be different if you looked at something
[1:00:14] like an dvi index where there's non-linear mixing effects in there and you need homogeneous pixels in there
[1:00:20] this is a problem that we don't have so no we wouldn't see for instance i would not be affected by
[1:00:26] that the other big example is that this additive signal of fluorescence is also less sensitive to scattering effects in
[1:00:34] the atmosphere if you've ever landed in a big sea with an airplane at night and sometimes you have like cloudy
[1:00:42] conditions and you have the street light it's still going on and airplane is above the clouds you
[1:00:47] sometimes see the glow of the city light through the clouds it just looks more diffuse in principle if we were to look at
[1:00:55] chlorophyll fluorescence the same thing would happen under moderately thick clouds we can still see this glowing fluorescent signal through moderately
[1:01:02] thick clouds just that this spatial kind of sharpness of the signal would get lost but to be honest we are
[1:01:09] measuring only at kilometer scale anyhow so we don't really have a sharp picture to deal with in the first place so this
[1:01:15] might be a moot point at least for fluorescence research because we are still working at relatively coarse
[1:01:20] spatial skills so how do we measure this it's basically exactly using this kind of infilling technique and what we use is typically
[1:01:29] these wavelength ranges here around 755 nanometers these are just by chance because because especially in the beginning because this
[1:01:38] was was a wavelength range at some of the high resolution electrometer that are supposed to measure co2 in the
[1:01:44] atmosphere like the oco-2 mission or the cosad mission from the japanese um we're providing and we can use the infilling
[1:01:52] of these lines to basically measure the fluorescence signal from space there's a reference here in the bottom as well if
[1:01:58] you're more interested in retrieval details it's a tiny overview into the history and evolution of these measurements
[1:02:08] philip will go into more details into those later these were kind of the first measurements measurements that we have obtained from the gosart
[1:02:15] satellite it was actually two papers coming out at roughly the same time from joanna joiner one and from our group as well
[1:02:23] we basically developed methods um to measure fluorescence from space first on the gosat satellite which is a japanese
[1:02:29] satellite satellite and the first time we looked at the signal we got an image like this um
[1:02:35] um now we laugh about it at that time this was great because this was the best thing we could
[1:02:41] ever hope for so this is the fluorescent signal on a global scale whatever happened midday when the satellite basically
[1:02:50] was measuring fluorescence over a long time period this is an annual average and we compared this to the best current
[1:02:58] model estimate of gpp at that time that came from this fluxcom project from the rexplana institute of biogeochemistry
[1:03:05] indiana indiana we have this image this is basically gbp in grams carbon per square meter per day
[1:03:10] if i flip back and forth they're eerily similar actually when we performed some analysis we in almost all the regions we
[1:03:19] found a near linear correlation between the gbp signal that comes from optimized models and the global measurements that we could see
[1:03:28] from the gosart satellite so this basically gave rise to some of these assumptions that sif should be a good linear proxy for
[1:03:36] gbp i mentioned some of the really strong caveats in the beginning but in most cases if you look at course
[1:03:43] or spatial scales and temporal scales this seems to be a very linear a linear relationship between cif and gpp
[1:03:53] what came after goeszad came basically oco the orbiting carbon observatory um this is just a brief overview here
[1:04:01] it has much smaller ground pixels now on the order of two kilometers much more many more measurements so the
[1:04:08] pictures are not as noisy anymore but it does not provide full global coverage so what it has is basically a
[1:04:15] swath that's only about 10 kilometers wide and it basically paints this swath like 15 16 times per day across the
[1:04:22] globe globe and by having like this narrow brush we can never paint the entire earth with measurements
[1:04:29] measurements so it's kind of a striping measurement so to say but we have a dense measurement system
[1:04:35] along that track so it can do specific things that we can't do with any of the other sensors but the big caveat is that
[1:04:42] we are losing kind of the spatial context context at the finer domain but we can still use
[1:04:48] this pixel very nicely uh this means these measurements very nicely and we can actually go and look into
[1:04:54] signals going over a city here for instance the city of chicago in this case and look at specific conditions
[1:05:01] where we can actually basically look at dependencies on the actual land cover type in more detail because now we have
[1:05:06] a relatively fine resolution after this we worked with a tropomy satellite and this is now mostly worked
[1:05:15] by philip curler in our group here where we can look at the fluorescence signal on the top left over the us now
[1:05:23] the model gpp signal on the top right we kind of have the temporal derivative of fluorescence in the bottom left and
[1:05:31] the temporal derivative of gbp on the bottom right so this basically one shows the status for the sif at that
[1:05:38] time and the other one that will derivative is basically just telling you how quickly it changes in time
[1:05:44] and i'll just let that run for a little bit and you can take a look at it
[1:05:49] so you see the spring broom basically appearing pretty soon in here it starts in florida the derivatives are pretty high here in
[1:05:57] these areas so the whole growing season moves over corn belt glows up and then you saw for a short time period
[1:06:06] these highly red signals here when you suddenly have a very dramatic reduction in fluorescence and i will play it again
[1:06:13] maybe this time you can focus on the gpp model this is basically modeling the seasonal cycle in the u.s
[1:06:20] and parts of mexico and you can see how similar in many many ways these measurements are two kind of gpp
[1:06:30] estimates from set from the best modeling perspective that we currently have this is just one teaser what we can do
[1:06:37] with it right now oops and what we can also do now something that i won't really go into we
[1:06:44] can measure fluorescence in the red spectral range around 680 nanometers over the oceans as well now with the
[1:06:51] satellite so this is an example here how you can see this evolution of far red fluorescence that we measure
[1:06:57] typically in the nanometer range over land and fluorescence from phytoplankton in the ocean in a 680 nanometer range
[1:07:07] both using exactly the same techniques that i mentioned before so we look at the infilling of frown over lines which
[1:07:14] is very different from other techniques that that have been traditionally being used to determine ocean fluorescence as
[1:07:20] well well so what's pretty cool sometimes you see these upwelling regions here the west coast of africa or here in the bay
[1:07:28] of maine near the yemen here basically phytoplankton blooms that are pretty extreme in this area or some other
[1:07:35] upwelling regions here in the southern part of africa but what we can do as well now is we can
[1:07:44] measure the signal from towers to get a more local perspective it's just one fun example where we installed a
[1:07:50] spectrometer system that can perform measurements that are similar to those of a satellite at a so-called flux tower site that
[1:07:56] measures fluxes of co2 and water directly directly this was at the neighborhood rich site in colorado very nice flux tower this is actually
[1:08:05] troy magni here at the top gotcha grossmann there installing the spectrometer system on the tower and a beautiful front range
[1:08:14] here here mountains of colorado in the background so we basically mount a spectrometer here at the top
[1:08:21] and the most interesting part of an evergreen system is that it is evergreen evergreen so this f-pass signal what the fraction
[1:08:28] of absorbed light is in time is basically almost staying constant be it winter or be it summer because they
[1:08:34] maintain most of the chlorophyll throughout the year what this means is we can actually probe a little bit better how fluorescence can
[1:08:42] figure out things that are related to yields changes versus absorbed light changes and for this this was the primary purpose if we
[1:08:50] actually installed a system at this site and i would rich this was not what i wanted to do
[1:08:57] but having this picture here with the installation here we could actually see that the gpp signal in black here that's
[1:09:04] a temporal change here this is the winter period and this is the end of the summer period and the fluorescence
[1:09:10] signal signal actually co-vary to a large degree more than we thought so during the winter time time when the sun is relatively still still
[1:09:20] relatively bright at this site probably brighter than in norway in the summertime summertime this signal is reduced dramatically
[1:09:30] as well so we actually track the seasonal cycle of the photosynthetic activity in this evergreen forest with the sieve signal reasonably well
[1:09:38] and this is the first thing where we could clearly prove that it's not just absorbed light that
[1:09:44] fluorescence detects it also has to do something with the quenching status especially if it's sustained on photochemical quenching
[1:09:52] like it is often for overwintering evergreen plants which is partially a different mechanism than the kind of more
[1:10:01] dynamic non-photochemical quenching that plants can turn on so what to do if you want to learn a little bit more
[1:10:10] than this short brief overview just kind of put out um two additional papers here one i would
[1:10:17] suggest albert castel's overview paper that i mentioned before before um this is a little bit of a book
[1:10:23] chapter just on the solar and use chlorophyll fluorescence more on the origins the relations to photosynthesis and retrieval relatively
[1:10:32] broad overview of what's going on also talking a little bit more about the history of the retrievals itself
[1:10:39] um um there has been a very recent paper by gina muhammad on kind of the remote sensing of sif and
[1:10:46] vegetation 50 years of progress so this is a really broad overview of all the different topics in this domain also very good overview
[1:10:54] to go through written by a lot of the flex people who work on a european mission to measure fluorescence
[1:11:03] by lia nongoo a nice paper um a new phytologist on sun induced growth fluorescence and it's important for biophysical modeling of
[1:11:12] photosynthesis based on light reactions this goes really more into the equations of photosynthesis between the light reactions and basically the light
[1:11:21] use efficiencies and the common use efficiencies efficiencies photorespiratory terms how you can actually pull everything together so i
[1:11:28] can only suggest you to go into this paper as well and last but not least the nice
[1:11:33] commentary that troy mcnee materie burns and she hung wrote on the core variations of chlorophyll fluorescence and photosynthesis across scale so if
[1:11:42] you you want to get an idea what's happening there i would encourage you to read this paper as well
[1:11:49] last but not least let's go through some limitations and caveats of using fluorescence even though you might have
[1:11:54] heard enough caveats on the way here already already let's see so one is segregation in time and space
[1:12:01] um so gbp and sif show surprisingly good linear correlation so if we have it aggregated aggregated this is a good point um however we
[1:12:12] should not conflate civ to be always perfectly proportional to gpp especially on short time scales and the
[1:12:19] papers that i mentioned before will basically outline this a little better especially on something like there on
[1:12:24] all time scales because typically peak gpp values kind of tend to flatten off with light whereas the fluorescent signal will not
[1:12:32] really flatten off that much or if this happen uh there's down regulation happening due to stress the
[1:12:38] linear relationship can break down even though at large our spatial and temporal scales we typically see a very
[1:12:44] good lingerie relationship it might break down under stress conditions and shorter time scales we still also have lots to learn about
[1:12:55] the relation of ps2 and fluorescence yield under different conditions so in my mind there's still some research that is needed in a different
[1:13:03] environmental conditions even at the leaf scale even at the yield scale the other part is fluoresce retrievals
[1:13:12] are not easy and the data is noisy so some of you might not be used to that
[1:13:19] if you've worked with indices like ndvi or evi they typically always look very sharp so they don't really have a precision
[1:13:28] problem where the signal itself is noisy but sometimes it may be inaccurate so it looks sharp but it's wrong um what we
[1:13:35] have with fluorescence it's often accurate but noisy it's like a grainy old digital camera that's always has a bad detector chip and it always
[1:13:46] looks a little a little grainy and noisy and this is one thing that hampers our retrieval retrieval it's just there by nature because we
[1:13:56] have to measure this little infilling which is tiny so we need a good spectrometer where we need a super high signal to noise ratio
[1:14:03] in the spectrometer to actually see that signal at all so the retrieved fluorescence is by nature noisy
[1:14:10] we typically provide and give you estimates of how high the noise is like what's the uncertainty in each
[1:14:15] measurement you provide this with the data data so look at it and see whether any changes that you see are actually higher
[1:14:23] than noise so the noise should be handled properly it also means beware of the meaning of our square if you plot fluorescence
[1:14:30] against any other property if you have a noisy signal on one axis the r square will look bad even if the
[1:14:37] mechanisms would be perfectly linear or perfectly correlated just by having noisy measurements the harsh gray will go down
[1:14:44] once you take the noise into account fits might be perfect at the larger corsa spatial and stamp
[1:14:54] temporal scales i think we still need to fully understand why it works so well so there might be adaptive processes
[1:15:02] that plans actually find their sweet spot in time in specific ps2 yield conditions where they like to be because
[1:15:11] it's comfortable so to say where they work in the optimal way and under these conditions you might
[1:15:16] actually see this nice linear correlation but how and why this works so well we still have to understand this
[1:15:22] a little better and also remember that sif is mostly a proxy for electron transport rate as both of these are driven by absorbed
[1:15:31] light light how this is being used to fix carbon in the carbon reactions is a completely different story it basically gives rise
[1:15:38] to changes between how civ is related to gbp between like the c3 and c4 photosynthetic pathways they have slightly different safe to gpp
[1:15:47] relationship relationship so these things should be taken into account in general so next steps future uses of civ
[1:15:58] more research is needed on civ gpp relationships from how would we scale it from the leaf to the canopy um sustained
[1:16:06] non-photochemical quenching and sif needs to be properly understood and characterized their avenues already in place place but there's probably more research that
[1:16:14] could be needed especially in this transitioning period when sustained quenching kicks in was being relaxed ideally in the future we want to combine
[1:16:24] the measurements of with other metrics to basically break the caveats that i mentioned before this could be done through let's say
[1:16:31] measuring transpiration which gives you some proxy for stomatal conductance and thereby also gpp gpp could measure the photochemical
[1:16:39] reflectance index which is more tuning onto this npq mechanism if you get some of the other variables a handle on kind
[1:16:48] of the stress level you might be able to use if much better to determine gpp we could work towards measuring diurnal
[1:16:57] cycles from space right now we can't really do that oc3 might provide a little glimpse into that but it's not
[1:17:03] really measuring the same place at different times of day so what can we learn from civ at shorter
[1:17:09] time scales that's also one reason why we look into tower data make use of sif signals at different
[1:17:16] spectral positions we found that in terms of the intrinsic sif being emitted from chloroplasts this is probably relatively hard to do
[1:17:27] but it might tell us something about the chlorophyll reabsorption within the canopy so it probably bears a lot of
[1:17:34] signal strength in kind of the the structural effects that determines if in different wavelength ranges also take a look at flex which is
[1:17:43] basically will be the first dedicated fluorescence mission um by esa and i put down the link here and they basically
[1:17:51] triggered a lot of the fluorescence research with their proposed instrument and be innovative do something that i haven't mentioned
[1:18:00] here be innovative use your own methods use it intelligently there's so much data in so many different areas that
[1:18:07] local studies could be used and apply that so the sky is the limit and with that i want to finish my slides
[1:18:15] here and wish you all the best for the remaining work packages thank you excellent thank you very much professor
[1:18:30] frankenberg for that thorough review on sif and now before we start the q a i wanted to introduce two other um
[1:18:42] guest lectures that we have here with us they will be talking about sif on thursday but i'd like to introduce them
[1:18:50] to the group today so we have dr philip kohler kohler from caltech philip are you there can you
[1:18:59] can you please uh introduce yourself hi uh can you hear me yes loud and clear ah perfect so my name is philip kuhler
[1:19:08] and uh i work in christian frankenberg's group and i'm mainly responsible for running all the solar induced chlorophyll fluorescence
[1:19:17] retrievals so my latest products are from tropomi in the red and far right spectral range great thank you very much
[1:19:30] and we have karen ewan from the jet propulsion laboratory karen would you please introduce yourself hi good morning everyone and good
[1:19:39] afternoon i hope you can hear me um i look forward to speaking with you all on thursday and
[1:19:45] thank you so much for joining us and i want to thank you all on behalf of the
[1:19:50] oco2 and the oco 3 projects thank you thank you very much all right so we have been gathering the
[1:19:58] questions that you've been writing on the chat box and we have been compiling them into a document that you should see
[1:20:05] on your screen now and what we'll do is we'll be working down these questions and and and answering each of them if by any
[1:20:14] chance we cannot get through all of them we will be posting this document online in the next couple of days all right so
[1:20:22] let's start with the first question question number one is there a direct way to measure net productivity from sif or does it work
[1:20:31] more like ndvi i'll go ahead christian oh my apologies um so i can just outline my response here again um
[1:20:48] some principal fluorescence only represents processes that are happening in the light reactions of photosynthesis so it doesn't capture anything that has
[1:20:56] to do with respiratory processes be it in the leaf or from the ecosystem itself so neither autotrophic nor hydrotropic
[1:21:03] respiration respiration in principle the only thing you can do to alleviate that problem is use co2 flux measurements at the same time so
[1:21:10] that you can disentangle net fluxes from growth fluxes but this is kind of the only thing you could do um however i
[1:21:17] should stress that fluorescence is more than just ndvi as it captures basically the true green part part that means the absorbed light only by
[1:21:25] chlorophyll molecules nothing else so the branches or other things are not being included plus we can also capture some of the
[1:21:32] yield effects as i mentioned in the presentation before great thank you question number two can you estimate sif
[1:21:42] using hyperspectral data that's an excellent question in principle yes it depends really on the spectral resolution and the observing
[1:21:51] geometry um so if your detector is right above the canopy um you might be able to work just by looking at the infilling of
[1:22:01] oxygen lines dioxygen lines um which are broader in that sense that you can probably get away with a spectrometer
[1:22:08] with about one to two nanometer spectral resolution resolution so this is what you have you might be
[1:22:13] able to pull this off from directly above the canopy doing this from space will be much much much harder because
[1:22:19] then you will also have to take into account o2 reabsorptions and a lot of the scattering effects so it really depends
[1:22:26] on the geometry but in principle you don't need the same kind of high super high resolution high
[1:22:34] signal to noise instruments that we have in space if you are right above the canopy okay okay question number three what is the
[1:22:45] earliest data in terms of years that i can get that's a good question ironically it goes back further than when we started
[1:22:54] detecting it so there's a website that we posted here that you can follow climatesciences.jpl.nasa.gov sith which is a measures project from nasa to
[1:23:04] actually make all the data available that we have for fluorescence at the moment moment um um and the earliest
[1:23:12] data that we basically have right now starts around 1995 from the gomi satellite satellite but bear in mind that this isn't much
[1:23:19] course or spatial and spectral resolution than the images that we showed you at the end so once we go to like the year 2018 we
[1:23:27] start having tropomy data which for us is kind of um the best instrument that we currently have for fluorescence research um
[1:23:35] but there's also the oco2 mission things like that that start kind of earlier than triple me of course a
[1:23:42] couple of years okay okay question four what are the differences between ps1 and ps2 that's a tricky question it would take a
[1:23:54] long time to go into this in detail and i'm probably also not the expert on this but basically ps2 is the first part of
[1:24:00] the z scheme uh the electric transport chain and this is also where the water splitting splitting and o2 generation basically happens and
[1:24:07] the electrons that are then being transferred in the electron transport chain through ps1 as well are used to produce the high energy
[1:24:14] carrier and adph and together if you combine combine generation of atp and nadph these are the ones that are being produced by both
[1:24:22] together together and that are then powering the carbon reactions reactions but i could post some links to papers that it might go into
[1:24:30] more detail if that is warranted good that would probably be very useful okay so maybe it's also worth to mention in this
[1:24:41] context that actually so the naming might be a bit confusing that ps2 uh uh leads to ps1 or gives the electron or
[1:24:51] the electron train goes from ps2 to ps1 but the only reason is that ps1 was discovered earlier
[1:25:04] great great that's a great point yes okay question five i have some experience with arcgis pro but i still
[1:25:13] would consider myself a beginner can you please recommend a particular easy reading for someone who is still taking first steps in this
[1:25:22] field of how to use sip data so this will be covered on thursday where um um philip is going to be doing a demo
[1:25:30] but uh maybe you can say a little bit about that now philip um in principle all the data comes in a net cdf format
[1:25:42] so there's no way around programming a bit at least right now so if you are familiar with any of those
[1:25:54] climate related files or satellite data in general it's always shared in this format format and they are
[1:26:02] you you can read those files with the multitude of programs for example there's one um where you could just take a look at the
[1:26:13] data with panoply i think it's provided by nasa right um yeah we put the link link to the
[1:26:21] download as well you can also use just a regular python program or r or julia so you're really
[1:26:29] free to use whatever programming language is able to reach net cdf files so and there's a difference between
[1:26:41] those those single soundings and gridded data i will touch on this on thursday thursday but just to let you know if you want to
[1:26:51] look at the world map you would need to use level three data so in general what you have for
[1:26:58] satellite data is level one is the raw spectra spectra level two uh is already a product so when i estimate
[1:27:08] the amount of chlorophyll fluorescence that would be considered as level two um but it's still on a single sounding
[1:27:14] basis basis and once you start to aggregate those data spatially this is called level three data and we have also a few files available
[1:27:26] and tools how to grid those data sets and um yeah that that would be then the ideal case for panoply where you can
[1:27:35] just take a look how those time steps look on a world map okay okay question six could you explain the k
[1:27:45] terms again yeah yeah that's that's a good question um so in principle the k terms that we refer to
[1:27:53] are basically rate constants um think of it like reaction rates and chemical reactions you know basically the the
[1:27:59] reaction constant for fluorescence the kf term is usually a constant so we assume that this is an
[1:28:05] intrinsic property of the chlorophyll molecule so temperature dependence in there but in principle this is something that plants can't regulate kf it's not
[1:28:13] can't be regulated however the fluorescence yield can be regulated by just changing things like the rate constant for photosynthesis
[1:28:20] which basically depends on how many photosystems are open at that time and the so-called non-photochemical quenching decay mpq which is kind of
[1:28:29] like sometimes called the pressure release valve so there's too much too many electrons flowing into the system you cannot need
[1:28:35] to dispose them by some way or fashion that's typically being actively done through the kn term you can think of
[1:28:42] some kind of bathtub analogy where all the electrons are kind of the water flowing into your bathtub
[1:28:47] but now you have like three or four little exit holes and they can all be called one of them is kf it's a constant
[1:28:53] pipe diameter the other one is kp and kn that you can actually open and close and depending on how much you open and close
[1:28:59] the other ones it will basically determine a little bit how much is flowing through all the other outlets if
[1:29:04] that makes sense great question seven which caveats do you mean to use the ndvi to calculate gpp
[1:29:19] gpp so there's a few things one is that ndvi is only a rough proxy for absorbed light
[1:29:25] in the photosynthetically active spectral range it's a so-called greenness index even though that's also kind of a misnomer because
[1:29:32] there's actually no green band being used to determine this so it's a simple band ratio approach that basically gives
[1:29:38] you an indication whether there is vegetation in the fixed or not um and often also how healthy it is
[1:29:45] because because the reflectance and then the infrared is pretty representative of the status as well so it might not always perfectly
[1:29:52] represent the total absorbed light by chlorophyll only as it includes everything like branches and things like this as well and it
[1:30:00] gives us no into indication as to how efficiently light is being used for photosynthesis photosynthesis so it doesn't sense the total light
[1:30:07] that's being absorbed by chlorophyll and you will need to have some other ancillary estimates for the light use
[1:30:12] efficiency to basically convert something like an ndvi into a gpp product okay okay question eight can we say that during daytime we cannot
[1:30:25] measure surf but it though it is correlated with ps2 yield and that time as the sun i'm not sure i understand and at the
[1:30:35] time as the sun is out we can measure civ clearly but it will not be correlated with ps2
[1:30:42] yeah my apologies if this was um misunderstood the way i've raised it um so we strictly speaking we can only measure
[1:30:51] sif if the sun is out because that's basically part of the name with solar induced chlorophyll fluorescence so the sun has to be the
[1:30:58] light source to be able to measure sieve so what you're doing with pam is you're not measuring sieve because you have an
[1:31:04] artificial light source so we measure it only if there's a light source out there in our specific case
[1:31:09] the sun um um at very low light you're right the ps2 and the fluorescent seals may be
[1:31:16] anti-correlated um but during mid day they call uh they are correlated again so using the techniques that we outlined
[1:31:24] in the talk we can actually separate the sunlight uh from the fluorescence signals and thus measure sieve directly
[1:31:30] even in sunlight basically we just block off the sunlight a little bit in the so-called from overlays not perfect but using these
[1:31:37] techniques we can separate out the contributions from kind of your light bulb the fluorescence at the bottom
[1:31:44] and the reflected sunlight all right question number nine please recommend a remote sensing book that contains today's material i fear
[1:31:56] the feel there's a lot to catch up with thanks yes i hope this was not too much
[1:32:02] of a buffer overflow today um so for that reason i refer to some of the overview papers at the end of the
[1:32:08] talk that might be a little bit easier to digest so feel free to take a look at those
[1:32:13] again on slides the order there might be the other way around um we can also try to post the links to
[1:32:21] these papers directly on here some of them should be public access access open to everyone um some not all of them might but
[1:32:32] there's not yet a really good book on that that um but we can also try to find
[1:32:38] for instance one thing that would might actually be quite helpful is for instance philips phd thesis there's probably a lot of material in
[1:32:46] there um that people typically don't access because it's kind of gray literature literature um but we can post a link maybe
[1:32:53] somewhere here said right philip yeah um maybe also your book or the chapter of the book you've wrote with
[1:33:00] joe berry yes this this is a linked on the on this slide as well oh oh yeah
[1:33:07] yeah great that would be fantastic all right question 10 would the retrieval of sif especially in the far
[1:33:14] red red be difficult from aquatic systems because it would be absorbed by water excellent question um maybe i glanced over this part but in
[1:33:25] fact we have not yet managed to measure fluorescence in the far right for this exact reason and the fact that the first fluorescence
[1:33:31] peak at 680 nanometers is typically higher if you look at it at the chloroplast level it's only in a leaf where you have so
[1:33:38] much chlorophyll reabsorption that suddenly the secondary peak at 740 nanometers appears to be stronger than the first
[1:33:46] but for phytoplankton in the ocean typically the first peak is stronger in the first place and then the second peak around 700 400
[1:33:53] is 740 nanometers is also being reabsorbed reabsorbed by liquid water absorptions in the ocean so that's being subdued in that sense
[1:34:02] so what we've shown you for fluorescence of the oceans is actually all measured in the red spectral range not in the
[1:34:08] thyroid spectral range good question great great all right question 11 can sif be used to monitor habitat
[1:34:18] restoration restoration um um in principle yes but um i i should honestly state that for some tasks it might really be overkill so
[1:34:29] there's things that that sith might be ideally suited for but for things like habitat restoration or in general if you want to track like
[1:34:36] the greenness of your backyard simple vegetation indices might actually be better in that case as it provides kind of a better spatial
[1:34:43] resolution and you can solve changes and habitats fairly well um so with fluorescence we are still working at the
[1:34:50] kilometers resolution at the moment um whereas with images you can go to like 30 meters resolution on landsat resolution things like this
[1:35:00] which might be much better to really detect kind of finely grained changes in habitat restorations it depends a little bit on
[1:35:08] the purpose if you're interested in tracking like a 50 by 50 kilometer area then yes fluorescence might be a
[1:35:15] reasonable choice to look at as well but if you want to detect changes at the sub kilometer
[1:35:21] level level a modis landsat and the like will be much better suited question 12. and this is related to a
[1:35:34] question uh two questions ago what about having an idea over phytoplankton species distribution and density via these measurements
[1:35:43] that's a good question we haven't what we do right now is we only measure the fluorescent signal
[1:35:51] um we have no idea yet what kind of phytoplankton species this is whether it's kind of um
[1:35:59] um that's hard the photo system itself should be the same for both so the mechanism as to
[1:36:05] how fluorescence is being generated in the process should not really matter in that case um we might probably need some ocean
[1:36:12] color color additional information to actually get some information about the phytoplankton species distribution but that's a good question but it's a
[1:36:21] little bit out of our comfort zone because we just started kind of working on the ocean ocean and this is an area that we are trying
[1:36:28] to explore ourselves but we are just in the uh initial steps because we are so focused on land at the
[1:36:35] moment okay also you you could say that uh maybe the spectral shape itself could could give us some insights in this respect
[1:36:48] but on the other hand um you have so the spectral shape will also also change uh depending on the depth
[1:36:57] where the where are those phytoplanktons are so it's a really hard task to to do that at least with our tools right now
[1:37:13] okay question 13 are there other space-borne sensors used to measure sif and this is something that karen yoon will cover on thursday
[1:37:23] but uh maybe you're gonna discuss discuss this a little bit here karen yeah just a quick answer all the
[1:37:30] sensors that can do this are listed on this climatesciences.jbl.nasa.gov website um so there are some mentioned already here like ghost oco 2 oco 3
[1:37:41] tropomy gomi gomi2 i should stress though that none of these missions have been designed to actually actually work on sif all of these are air quality
[1:37:53] missions that have been designed to measure trace gases in the atmosphere we kind of take them and abuse them to
[1:38:00] measure fluorescence the only dedicated mission that will fluorescence fluorescence will have fluorescence as its real target mission target will be the
[1:38:09] fluorescence explorer mission flex from the european space agencies but this is not yet flying great so christian when is flex intended
[1:38:21] to fly uh uh good question i i i don't want to give an answer right now because i i don't
[1:38:27] really know i would have to look it up but i think it's scheduled 2024 2024 yeah yeah okay
[1:38:36] all right great so uh question 14 can you summarize some applications for good question um i should have read that that question
[1:38:49] earlier that so that i can prepare well um um the first application that we basically had was finding that fluorescence is an
[1:38:57] excellent proxy for gbp um much much better than we expected so to some degree this linear near linear behavior
[1:39:05] at course or spatial and temporal scales is kind of an excellent framework with which that we can use to basically
[1:39:12] estimate give estimates of gbp across the globe using fluorescence measurements measurements especially for air areas like evergreen
[1:39:21] forests um this actually turned out to be a much much better proxy than anything else that we have at the moment
[1:39:28] so this is definitely one application where we have a better proxy for gpp despite some of the creates that i
[1:39:34] mentioned before um um at the same time so our big other hope is that we can also detect stress a little bit earlier
[1:39:43] than some of the other vegetation measurements measurements because in principle we should have some signal of the fluorescence yield
[1:39:51] in the ps2 through fluorescence as well so in principle fluorescence should go down a little bit under stress even if
[1:39:59] the leaf itself doesn't really change its pigment its pigments that would be uh one other application for
[1:40:05] fluorescence from space this is sometimes still a little bit hard to attack directly because we have to average in time and space as
[1:40:12] well over more like an eight day period and then quite often even leave pigments change change so these are some of the um
[1:40:20] the other part is there's many many regions on globe where modis or other images might sometimes not have great coverage
[1:40:28] because there's for instance in the amazon there's frequent cloud cover so fluorescence might actually give us an insight
[1:40:34] through clouds as well which is also highly important because quite often we don't actually know exactly how much photosynthetic active
[1:40:43] radiation is reaching a canopy under cloudy conditions so netway fluorescence might be a more unbiased proxy for true apart even on
[1:40:52] cloudy conditions and not just clear sky conditions conditions we can try to summarize more later but off the cuff this was what kind of
[1:41:01] came up in my mind maybe to add on top of the gpp uh it's from a broader perspective it's
[1:41:10] also just to look at the seasonal cycle of photosynthesis in the first place especially for evergreen nidalee forests
[1:41:19] which always look the same but they might not be active or they might already be active and that's what we see earlier with
[1:41:27] fluorescence fluorescence than with vegetation indices which might be also affected by snow coverage where we don't have as many problems
[1:41:45] okay question number 15 has anyone looked at measuring sieve from aircraft or uavs for high resolution measurements
[1:41:54] excellent question as well um there's different kind of measurements some from the group in euless in germany from the
[1:42:02] so-called high plan sensor and then at jpl we've also developed our own imaging system for aircraft the
[1:42:09] crawfish fluorescence imaging spectrometer or high planters h y p and then plant like p l a and t
[1:42:17] um um from uavs in principle if you put like a medium resolution spectrometer on there and fly near above
[1:42:25] the canopy you should also be able to do this from uav systems it's just that quite often
[1:42:32] you need stability in the detector and if you have a small uav this is currently still relatively
[1:42:37] hard but there are some measurements from a group in spain that actually uses coavs coavs to measure fluorescence and vegetation
[1:42:45] indices as well all right question number 16. how do you know npq is equal to zero for
[1:42:55] stressed stressed vegetation vegetation oh um maybe this was also npq is not zero for stressed vegetation um when npq
[1:43:07] is is mpq equals zero if a leaf is dark adapted adapted so you can think of it
[1:43:15] um if you take a leaf even if it has been outside in the sun and put it into
[1:43:19] like a dark chamber so that it doesn't see any light slowly but steadily all these non-photochemical quenching mechanisms
[1:43:26] will relax and go down to zero this is the reason why why in these pam measurements that i
[1:43:32] mentioned that you basically look first at a dark condition of a leaf and then you put it into light because
[1:43:39] that's the only way to do perform some measurements where kns at its lowest if it's not sustained don't
[1:43:46] photograph a quenching so there's a difference difference in evergreen over inter into overwintering overwintering plants there might still be npq going on
[1:43:55] at night might not go to zero because it's sustained long-term quenching but the dynamic one typically is going
[1:44:01] down to zero so the km goes zero in dark conditions but it might take 1550 minutes half an hour up to an hour to
[1:44:09] fully relax and reduce the npq to its minimum i like to view it as so npq or fluorescence as the fastest mechanism
[1:44:24] to dissipate energy and npq has basically two different regimes one is on a daily level and one is on a
[1:44:34] seasonal level so that might help to just just digest it a bit all right question number 17. what does
[1:44:48] the plant re-emit why does the plant re-emit parts of the absorbed light by fluorescence fluorescence the simple answer is probably it can't
[1:44:57] help it it's an intrinsic property it's basically the lifetime of the excited state of chlorophyll fluorescence of a
[1:45:04] chlorophyll molecule so it's basically a natural process that would happen with chlorophyll anyhow even if the plant is
[1:45:10] not not embedded around it if you have a pure chlorophyll solution um um the thing that plants do they have other
[1:45:18] mechanisms to quench the excited state of chlorophyll even faster than fluorescence so this is happening through photosynthesis or
[1:45:25] non-photochemical quenching but in principle the plants can't just do anything about it because it just happens with a chlorophyll molecule
[1:45:33] at the same time it doesn't really hurt it's only a small fraction around one percent of the energy that's getting
[1:45:38] lost that way which is at the end of the day nearly nothing so it's not kind of a huge energy loss
[1:45:44] term for the plants but it is something that the clients can't control okay question number 18 can you comment on large-scale sif
[1:46:00] uh how it's closely related to apar to gppm okay so i assume that the question is meant um
[1:46:12] let's say we take a measurement over like an entire hemisphere let's take an extreme example um you
[1:46:19] take a sensor that measures fluorescence and let's say measures a whole continent let's say north america or south
[1:46:24] america and you you basically integrate the signal over a long time period over an entire continent so all you would
[1:46:31] measure is basically the integrated fluorescence fluorescence signal fluorescence emission over that entire continent and that's an unbiased
[1:46:41] product so in principle this signal that you would measure if you had like a really bad spectrometer
[1:46:49] with with the spatial resolution of a continent would measure exactly the same integrated signal compared to like the
[1:46:55] perfect instrument that can measure at 30 meter resolution and then you just add all the subpixels up so it would give you exactly the same
[1:47:02] value theoretically which is very different from like an imaging system imagine measuring the ndvi of an entire continent it would be
[1:47:11] meaningless meaningless it would not be the same as measuring the ndvi at 30 meters and then averaging
[1:47:16] everything together if that makes sense so it's kind of an unbiased estimate that it's irrespective of scale for a
[1:47:24] path path because we are basically blind to snow we are blind to streets we are blind to everything else
[1:47:30] so all these instead are not emitting fluorescence are blind to us they don't disturb us street lights
[1:47:43] question 19 do you think sif products could replace existing fa par products i be careful with the word replacing i
[1:47:52] think every product has its place um a lot of the fap products are just provided at such tremendous facial
[1:48:00] resolution that they will always be useful useful and just by the nature of the fluorescence measurement we would not be
[1:48:06] able able to get it in the same kind of noise freeness so to say and spatial resolution
[1:48:13] resolution as the imaging spectrometers do where you just look at the color so i would not say
[1:48:19] replace i would say complement so they both have ideally we use kind of combinations of products to try to tease
[1:48:26] out out changes in let's say like use efficiencies from changes that are purely related to fa power
[1:48:34] so kind of a combined analysis of satellite data that looks into fa power or even looks into proxies for
[1:48:40] non-photochemical quenching like the photochemical reflectance index if you could start combining data you get much more information out of it
[1:48:48] but it will certainly not replace high resolution measurements from modis landsat or other satellites great point okay question 20 how much of the
[1:49:00] correlation between core sift gpp is about the apar variation versus the changing yield ratios is the dynamic
[1:49:08] range of the yield ratio particularly large that is an excellent question um that to be honest is still a little bit
[1:49:20] hard hard to answer for various reasons um once we look at cause to gpp we often don't really have a good
[1:49:31] or let's say perfect proxy for apa people try to use something for apa but then you divide
[1:49:37] both safe and gpp by some number that might be wrong and then it's correlated with each other but it doesn't mean
[1:49:42] anything anything because you're using the wrong apart um and the common apart so in that sense it's still very tricky
[1:49:51] sometimes to disentangle these effects you might even changing leaf orientations might change apar and then you might confuse it with yield
[1:50:00] changes changes there's lots of things that might disturb both the signals so the only thing where we could really tackle this
[1:50:06] is at the leaf scale when you basically stress a leaf um at the same light conditions without
[1:50:12] actually changing um the absorption in there then there's other effects that actually even even more insidious um you might have
[1:50:21] chloroplast movements within the leafs itself so they are stacking on top of each other to minimize light absorption
[1:50:27] under stress conditions and high blue light sometimes or you might leaves have leaves wilting chain chain shape a little bit or moving away from
[1:50:35] the sun so plants can actually is two different ways to cope with stress one is of course to
[1:50:41] turn turn on non-photochemical quenching but an even easier method for plants is to try to avoid light absorption in the
[1:50:49] first place and some can do that by actively actively changing leaf positions or basically wilting in that sense but that's the
[1:50:56] wrong word here um but basically trying to minimize the absorption even in the cellular at the cellular level by stacking the
[1:51:04] chloroplast against the cell wall there's tricky things that are happening so that makes it often a little bit hard
[1:51:10] to really disentangle them directly but overall apa has a much higher dynamic range and the fluorescence of gbp changes due
[1:51:20] to yields four fluorescents are probably on the order of plus minus twenty percent whereas a power can span orders of
[1:51:28] magnitude if that okay question 21 sorry do you have anything else i think yeah that's good great question 21 is sif more linked to
[1:51:44] fa par or uh to lue like i would say sip is smalling to a power so that's the absolute value of sif is
[1:51:57] always closely linked to f a power times power power in many conditions on the global scale there's
[1:52:06] a complication that we don't really know what power is above the canopy directly so that's already a good thing so if
[1:52:14] captures this uncertainty to a degree as well well and the f in fa in the fraction of absorbed light it
[1:52:22] captures also well because we are only sensitive to the fraction that has really been absorbed by the antenna
[1:52:27] system system of the plant so that is a fundamental difference to vegetation indices so to first order most of the drivers
[1:52:37] globally are related to changes in aid across the globe the light use efficiency part is always a second order
[1:52:43] effect effect that might modulate the yields and fluorescence on the order of plus minus 20 but roughly but at the same time again
[1:52:53] if you look at a canopy there are not every leaf is the same so leaves at the top of the canopy might actually
[1:53:00] experience much more light stress so to say say than leaves that are in needed conditions so this mixture there is one that we
[1:53:10] have to deal with as well because stress is not evenly distributed across a canopy in the vertical domain
[1:53:22] okay question 22 is your fluorometer experiment or in the fluorometer experiment experiment why is kp equal to zero when there is no
[1:53:31] light at the beginning in the dark stage i mean kp max at the beginning dark stage stage okay so he's meaning kp max oh it's it's
[1:53:41] max it basically means that if it's dark no no um um no photo system closed closed so that the theoretically maximum rate
[1:53:52] of kp is is highest so you basically have have every little light that you put in there
[1:53:58] which is basically this modulating light beam can be quenched through kp directly so no photo system has been closed
[1:54:05] at that time that means you have a maximum maximum kp yield at that time whereas if you give it that that
[1:54:14] flash which is in terms of power units probably around like 8 000 micro mole per square meter
[1:54:20] per second it's so bright that the plants can't really quench the energy fast enough so that basically forces the
[1:54:27] photocenters to close so no light can be funneled through that anymore anymore and that's how you set kp to zero once
[1:54:35] you flash it with a saturating light beam but try flying something like this on a spaceborne satellite that's not going to
[1:54:43] work okay question 23 is it possible to differentiate between healthy vegetation and and ill ill vegetation vegetation disease vegetation with sift data
[1:54:59] yes typically we see that under normal conditions healthy vegetation is emitting a lot more fluorescence than unhealthy vegetation
[1:55:08] quite often they would also show quite a difference in their vegetation indices but at the same time we also see that
[1:55:14] let's say a forest system that might have an fa power of one or near one um is emitting much less
[1:55:22] fluorescence than a healthy corn canopy which also has a like an f8 of around almost close to one
[1:55:30] um so in that sense we always see fluorescence over like agricultural areas to always be highest across the globe not only in
[1:55:39] the us with triple maybe see many more agricultural areas across the globe the corn belt in the u.s is just
[1:55:46] something that that really glows up in the summertime and has the highest peak fluorescence values across the globe
[1:55:54] so in that that sense it really reflects the intense uh productivity of corn like any agricultural area
[1:56:03] which are typically very healthy because they've been designed to be that way right so question 24 there are multiple
[1:56:13] parts to this question the first part on the sift data can we use if data in a
[1:56:17] gis software that's been answered above but but then there's uh the other parts how does sift differ
[1:56:24] from ndvi what's the sif accuracy in percent percent and can we detect water stress okay um so how does it
[1:56:36] differ from ndvi um it's mostly kind of the spatial resolution um that an ndvi is just much
[1:56:44] friends what we can't really do um at the fine spatial scales um but i think the the difference to ndvi kind of we are
[1:56:53] answered a little bit beforehand already so that ndvi in principle captures only kind of a band ratio approach kind of the
[1:57:01] greenness of the plant it's basically a ratio in the far red around this 850 nanometer range and then
[1:57:07] the red spectral range um so i don't know whether this appropriately answered this question yes yes maybe
[1:57:21] maybe mention here that uh so ndbi or greenness in general is rather referring to capacity while fluorescence is more activity
[1:57:34] yes yeah that's a good point so ndvi might give you a theoretical upper limit of what a canopy can do what it actually
[1:57:43] does might not always be fully captured accuracy in percent um i want to stress that we have to
[1:57:52] distinguish precision and accuracy so i would say sif is typically very accurate accurate but but in precise so a single
[1:58:00] measurement measurement of fluorescence can have errors of 50 easily easily um related to its kind of absolute value if you measure
[1:58:10] fluorescence over a non-vegetated area then the precision and percent of the background signal is basically in um because you divide by zero so if a
[1:58:22] single measurement is often noisy um um just because we have to measure it in the way that that we outlined before
[1:58:31] that's why we have to average data in space and time to actually look at causal causal spatial and temporal averages
[1:58:40] but it is important to keep the precision in mind and what we always do for each and every individual point that
[1:58:47] you will get from us from space we will give you the fluorescence value and we will give you an estimate of the one
[1:58:54] sigma precision error in there which is the purely noise related one which basically translates how noise on
[1:59:00] the detector similar to your digital camera translates into noise and or retrieved properties so this is something that we complete
[1:59:09] compute during the retrieval process from first principles so it's a very accurate measurement accurate error estimate and once you start to
[1:59:21] aggregate or average soundings over one area area you basically scale your uncertainty by the square root of the number of
[1:59:31] observations observations so let's say you have nine observations and you decrease your uncertainty by a third third yeah that's a very good point that
[1:59:42] philip made so in our case all the precision errors are perfectly uncorrelated that means that we can
[1:59:48] basically use proper error propagation and then typically you reduce your error in the mean mean by by uh
[1:59:56] uh you basically have to divide it by the square root of n square root of the number of measurements that you averaged
[2:00:01] over all right so we're coming up at the top of the hour how about uh two more
[2:00:10] questions and then we'll close this off next question which case on a sunny day versus a cloudy day shows a better relationship
[2:00:19] between gpp and sit good question um [Music] i typically i would say on a cloudy day if you have a lower dynamic range of the
[2:00:38] total sunlight that hits the canopy fluorescence and gpp should be somewhat more linearly related because you have
[2:00:45] not reached yet the light levels where gpp levels off so you basically reach kind of the light saturation point of
[2:00:53] photosynthesis but you will be more in the linear range where gpp and fluorescence are almost perfectly correlated
[2:01:00] correlated so under fully bright sunny skies there we often see both in measurements and theoretically a slight non-linearity
[2:01:10] between fluorescence and gpp because at very high light a gbp might be the ps2 yield is fractionally more
[2:01:20] reduced than the fluorescence yield all right and then one more question question 26 is it possible to combine
[2:01:31] sif with other remote sensing data such as for example landsat and can it be used to monitor
[2:01:38] multi-temporal above-ground biomass changes or modeling um um to the first part of the question yes it's absolutely possible to combine with
[2:01:49] other remote sensing data landsat is of course very high resolution so there might be more of a
[2:01:55] discrepancy discrepancy because you will have to aggregate lots of landsat data to represent the fluorescence footprint modis might be
[2:02:02] better suited in terms of spatial resolution so you have like a 500 or 250 meter resolution then there's lots of
[2:02:10] studies that combine fluorescence and for instance modis data to downsample the fluorescence products from its core spatial scales to finer
[2:02:18] spatial skills alex turner has done wonderful work in the us or for california california can be used to monitor multi-temporal
[2:02:27] above-ground biomass changes yes in principle if above ground biomass changes change kind of apar apar in that sense or some of the other
[2:02:37] efficiencies we should be able to see changes in there as well but in some cases it might be better
[2:02:43] than to combine with other measurements let's say lighter measurements would be probably multi-temporal lighter measurements would be much better to
[2:02:50] detect changes in the structure and fluorescence would um plus landsat and modus data would also help in that case
[2:03:01] so yes i would say if you can it's great to combine it with other remote sensing data
[2:03:09] great so we'll wrap it up here there are a number of questions we didn't get to but what we'll do is as
[2:03:18] mentioned we will respond these on the document and we will be posting the document so i want to thank professor frankenberg uh
[2:03:29] phillip and karen and all of you for your attendance today um before i close it off uh professor
[2:03:36] frankenberg would you like to say anything anything yeah this is um exciting to have more than 500 people in
[2:03:44] in in a study like this this is probably the biggest audience i've ever spoken to um um great to see this
[2:03:51] interest and curiosity and great questions across the board so keep that up please and try to embed
[2:03:58] fluorescence in your research if you can we would be very excited about that wonderful i'm sure they will
[2:04:06] so so tune in to thursday where uh karen and philip will be talking about about uh the different stiff uh satellites in
[2:04:17] space and then a demo on how to use tropomy and oco2 data so thank you all very much and
[2:04:26] we will uh connect again on thursday at the same time time thank you everyone thanks erica thank you
