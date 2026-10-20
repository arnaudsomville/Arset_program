# AQ Products from GOES, Part 2/3

`https://www.youtube.com/watch?v=_jtKJbDcjoU` · id 185 · 2:03:46 · module 23 — An Inside Look at How NASA Measures Air Pollution

[00:00] welcome everyone this is uh ongoing series of air quality data products using a new generation of satellite
[00:09] called geostation satellites so we are here in the week 2 or session two of this series in session one we have
[00:19] learned about some of the available geostation satellites sensors some Basics about uh differences between low Earth orbiting
[00:31] satellites which have been providing air quality observation for almost 20 plus years such as Modis Omi uh wears
[00:41] Etc so we are entering into this new era where we can actually focus on a specific region and get very high
[00:48] temporal resolution data to support air quality application so in week one again we learned about level 1V or trochler
[00:57] imagery is how to access through the world view and other online based tools today uh in week two or part two we have
[01:07] we are going to talk about air quality product from the gozar of series and for that we have our guest speaker Dr Amy K
[01:16] Howe uh from NOAA uh nazdis and she is going to introduce the air quality products from the gozar series of
[01:24] satellites satellites thank you again for joining week two and then in week three we will have finally
[01:30] conclude this series where where we will talk about the gems air quality data which focused in Asia so let's begin for
[01:41] today's uh with Dr Amy hump thank you everyone hello everyone my name is Amy Huff um I'm a senior research scientist at
[01:56] imsg and I'm a member of the aerosols and Atmospheric composition science team at the NOAA nesis Center for satellite
[02:03] applications and research um so today I'm going to talk to you about air quality products specifically aerosol Optical depth from the goes-r
[02:11] satellites so I'd like to acknowledge the aerosol product leads at NOAA so that's Dr shoga contragento and Dr isvan
[02:19] Laszlo and then my colleagues at Star who developed the aod products aerosol Optical depth products that I'm going to
[02:26] discuss today Dr mijao Dr Hong Ching Liu and Dr harjing all right so um this is just I wanted to
[02:35] cover the um go over the topics that I'm going to discuss today so first I'm going to give a brief overview of the
[02:44] aerosol Optical depth product from the gozar satellites then we're going to break and I'm going to actually show you
[02:50] Noah's aerosol watch website um because that has prepared imagery of the products that I'm going to talk
[02:56] about today uh then we're going to come back and I'm just going to have a few more slides I just want to discuss some
[03:02] details about the goes R data files that we're going to work with in the Hands-On exercise just to give you a little
[03:09] background information that you'll need to work with those data on your own then we're going to lead into most of the
[03:16] presentation today will be the python Hands-On exercises and so specifically we'll show you how to with python
[03:24] download level 2 derived data files from noaa's aerosol um excuse me noaa's uh Amazon web services archive then we're
[03:36] going to open up one of those files that we downloaded so you can understand the metadata and what the data variables are
[03:43] then we're going to actually process and visualize aerosol Optical depth data on a map and then finally we're going to
[03:50] create an animation we're actually going to visualize we're going to make one hour's worth so six images of aod data
[03:57] and then we're going to create a little animation or movie from those image files files all right so as I mentioned first I'd
[04:03] just like to give a short overview of the aerosol Optical depth product from nose goes our satellites and the the
[04:11] sensor that is on the gozar satellites is called the advanced Baseline imager or the Abi um so so Dr Gupta last week uh talked a
[04:21] little bit about aerosol Optical depth um you may remember it's a remote sensing measurement it can be made from
[04:27] satellites from the surface or from aircraft aircraft uh so aod is a quantitative measure of aerosols in a vertical column of the
[04:35] atmosphere so it's a measure of scattering and absorption of Light by aerosols so the um the goes are ABI aod
[04:43] is reported for 550 nanometer light so aod is unitless typically values will vary from zero to one in the United
[04:52] States but values can be as high as five so larger values correspond to high concentrations of aerosols like smoke
[05:00] and dust and lower values are for a clean or clear atmosphere so in the images below you can see on the left
[05:07] um this is a go 16 or goes east ABI geocolor or visible image from September 16th of this year um and so hopefully
[05:16] you can see there's kind of these gray shading areas here in the western U.S and also here in the Eastern us this is
[05:23] smoke from wildfires and if you look at the corresponding aerosol Optical depth image image um you can see the the color bar is here
[05:30] so again these blue colors that corresponds to clean atmospheres and when you get to the yellow the orange
[05:35] and the red that is indicating High aerosol Optical depth from the smoke so again you can see where the wildfires
[05:42] are actually burning in the western U.S you can see those red orange and yellow colors and then also with the transport
[05:48] smooth in the eastern U.S it's not quite as absolutely thick as as where the the smoke is being emitted from the fires
[05:55] because it's been transported across the U.S but you can still clearly see um the yellow orange and some of these
[06:01] teal colors corresponding to the smoke all right so why is aod useful for air quality quality um so unlike
[06:10] unlike collar are the visible or the geopolitor imagery that only provides qualitative info um so as I mentioned
[06:16] aerosol Optical depth is quantitative and so that means that aod is proportional to the number or the mass
[06:23] concentration of aerosols in the atmosphere and because of that we can estimate surface PM 2.5 concentrations from aerosol Optical depth and our group
[06:33] has developed a new algorithm that dynamically updates these satellite aerosol Optical depth and surface PM 2.5 relationships using what's called a
[06:43] geographically weighted repression or gwr model and you can see um some of the references below from the recent
[06:50] Publications by our group and so the way this works is you can see this is an example this is the same example from
[06:57] the previous page on September 16th of this year again you can see the high aerosol Optical depth from the smoke in
[07:03] the western U.S and the eastern U.S um and so based on that information we can um using the the relationships that
[07:12] have been developed by our group estimate surface PM 2.5 um and that's shown here using the the
[07:17] PM 2.5 air quality index so again any place where you see these orange red purple or maroon colors
[07:24] um that indicates um High estimated surface PM 2.5 um that's derived from the hourly um Avi aod data
[07:34] um and so the the real benefit with this is that it helps fill in gaps in the
[07:38] surface regulatory monitor Network um and these new hourly PM 2.5 Max like what you see here um they're going to be used by the air
[07:47] now program so they'll be available publicly and very soon sometime within the next year all right so um as I mentioned aod it's
[07:56] available from the advanced Baseline imager or ABI on the go satellite so that includes ghost East which is
[08:02] currently goes 16 and goes west which is currently goes 17 um but goes 18 we'll be replacing go 17
[08:09] this goes twice in early January of next year year um so as I mentioned the data range is
[08:16] actually it goes up to five um and it's it goes down to minus 0.05 um and so you can think of these very
[08:23] small negative values what they do is they indicate uncertainty in the aod retrieval just think of them as very
[08:29] small positive aods all right um and so this uh this graphic over here kind of gives you an idea of uh in terms
[08:38] of the the number value of aerosol Optical depth what that corresponds to in terms of thickness of aerosols in the
[08:44] atmosphere atmosphere um and so you can see the specifications and the availability in the table here at the bottom the thing to remember is
[08:51] the spatial resolution is two kilometers for aerosol Optical depth from both goes east and goes west um and then you may remember last week
[08:59] Dr Gupta was talking about the the coverage the scan sectors for the the gozar satellites um so there's three
[09:06] there's full disk which is the full hemispheric disc the conus which is just focusing on essentially the continental
[09:13] United States and then there's two adjustable mesoscale sectors so aerosol Optical depth is not retrieved for the
[09:20] the mesoscale sector so just be aware of that it's only available for the full disk and the current centers
[09:28] all right um so aerosol Optical depth as I mentioned it's the derived from the extinction of back scattered light by
[09:35] aerosols the ABI aerosol Optical adapter reported at 550 nanometers um and so the retrieval so basically how
[09:43] we determine aerosol off with that it's determined using an algorithm which is like a formula that we use to calculate
[09:50] or we'll say retrieve aerosol Optical depth you might hear that term retrieved um so just as a reminder aerosol Optical
[09:57] depth is what's called a level 2 or L2 product and that uses the ABI radiances which are also called the level 1B data
[10:05] as inputs um and so I'll explain this example in the table here in a minute so the the
[10:17] directing the algorithm is retrieving aerosol Optical depth um you need to isolate the extinction of the back
[10:23] scattered light by Airsoft from all the other things that are scattering light in the atmosphere so specifically we
[10:30] need to separate the aerosol signal from the surface reflectance and then scattering by clouds and absorb absorption by Trace gases in the
[10:37] atmosphere atmosphere um and the way the ABI aod algorithm does that is what's called a multi-band algorithm so it builds on the Heritage
[10:47] for the polar orbiting satellite algorithms such as veers and Modis aerosol Optical depth and they're separate algorithms for aerosol Optical
[10:54] depth retrieved over land and over water and a key feature is using ABI band 6 to estimate the surface reflectance over
[11:03] land and there's also various internal texts that use different bands to screen for unfavorable conditions and that's
[11:10] where it's difficult or impossible to retrieve aod like where there's clouds for example um so in this table this is just showing
[11:17] the bands the seven bands that are used in the aod algorithm and you can see the corresponding wavelengths there and as I
[11:25] mentioned some of them are used in the actual aod retrieval itself and some of them are used for these internal tests
[11:32] all right so um I'd like to illustrate how the goes our ABI multi-channel aod algorithm um Works uh so as you remember
[11:42] I mentioned that there's separate aod algorithms over land and over water um and each of them include a number of
[11:49] different aerosol models and aerosol models are actually what's retrieving aod so I just wanted to show a
[11:56] simplified uh version of that using the figure here so in the figure we're using an example of two different aerosol
[12:04] models models um and that's represented aerosol model number one is represented by this black line here and then aerosol model number
[12:12] two is represented by this red line here um and these lines represent the aerosol Optical depth retrieved at 550
[12:19] nanometers using inputs as ABI Band 1 on the x-axis and then Band 2 on the y-axis so let's imagine that we have an
[12:29] observation which is represented by this orange dot here and so if we look at the reflectance in band One
[12:37] we get two different aod values so using aerosol model 1 we would have an aod value of 1.6 and if we use aod model 2
[12:45] we would have an aod value of 1.0 so which one is correct so let's look at the reflectance in band 2. So if we do
[12:54] that now we can see that the difference or what we call the residual the difference between the aod retrieved with model 1
[13:04] is larger than that with aod model number two so basically this distance between the reflectance and Band 2 between aod model 2 and the
[13:14] observation is smaller than that between the observation and aod model one um and so that means that we're going to
[13:23] use model 2 as our retrieved aod and the the actual aod value will be 1.0 um so in terms of validation so how do
[13:32] we know the the accuracy and the the Precision of the the goes ABI aod data um so they're validated using uh aeronet
[13:43] aerosol Optical depth data so um Dr gupton mentioned um aeronet last in last week's training so internet is a Global
[13:50] Network of ground-based sunphotometers um and those aod data are used to verify satellite aerosol Optical depth and so for this particular validation
[14:00] we're looking at the most recent version of the high quality ghost 16 Avi aod um and this is for the time period from
[14:08] October 24th 2020 to September 23rd 2022. so again we can see we have separate results for Overland and over
[14:15] water as you remember um from a couple slides ago there's separate aod algorithms to retrieve aod over land and OverWatch
[14:24] um and so in figure a here at the top um you can see essentially what this is
[14:28] showing is the relationship between ABI aod and aeronet aod um and so you can see for both land and
[14:36] over water there's a very small bias um a positive bias of about 0.01 um and then the standard deviation of
[14:45] the uh the correspondence between the ABI aod and the arena aod over land is about twice as large as that over water
[14:56] um and that has to do excuse me to the fact that there's more uncertainty in estimating the surface reflectance over
[15:02] lands than OverWatch um and then in the lower figures figure B here um you can see that the ABI aod captures
[15:12] the diurnal variability observed by Aaron at aod so here we're looking at um the uh arena aod in blue the blue
[15:21] line and the ABI aod is the red line um and this is for um the local time
[15:26] average time during the day and then you can also see on the um the Y2 axis these
[15:32] graze bars of the number of matchups meaning the number of coincident measured measured um aod from aeronet and from the ABI
[15:41] satellite and so again you can see M for both over land and then over water these two lines the red and blue lines are
[15:48] very close together all right so um in the last slide we referenced the high quality aod data one
[15:56] thing to be aware of with aod data from the advanced Baseline imager um is that there they come with what are
[16:03] called Data quality Flags um and these Express the confidence in aod data so in the figure here you can
[16:10] see example of the the data quality flags for go 16 Abi aod um so high quality is the most accurate
[16:19] um and it's used for all quantitative applications like the verification then if people were using it from a modeling
[16:25] application application there's also medium quality so that has some uncertainty so it can be safely used for qualitative applications like
[16:34] forecasting or any sort of operational applications applications and then the low quality that has high uncertainty and so we recommend avoiding
[16:43] that for most most situations um and then aod is not retrieved for areas with clouds or bright surfaces
[16:51] like snow or ice um or bright land surfaces kind of like deserts and mountainous regions and also
[16:58] sunglit which Dr Gupta excuse me mentioned last week and then of course at night time as well we
[17:04] need visible light to have aod retrieves all right so I just want to show some examples of what I mean by these high
[17:11] medium and low quality uh ABI aods so this is an example um from from wildfires that were burning near Los
[17:18] Angeles in December 2020. um so the first example here this is high quality aod only um and so you can see there's quite a
[17:27] few few um uh Missing areas these kind of holes in this plume of high aod corresponding to smoke from these wildfires that were
[17:35] burning near Los Angeles um and there's also a lot of missing aod along coastlines so next if we look at now high and
[17:44] medium so I'll go back so this is just high and this is high plus medium we can
[17:48] see that most of the smoke point the higher aod from that smoke has been filled in and um there's still some gaps
[17:56] along the coastlines but they're not quite as big as they were with the high quality data only and then finally now
[18:02] if we look at High plus median plus low so we're going to go back this is high
[18:06] plus medium and this is high plus medium plus low you can see now that in fact all of the plume has been filled in and
[18:15] most of the the gaps along the coastlines also but the problem is now you can see hopefully there's a lot of
[18:22] these red little red patches along the coastlines and then some Inland so these are erroneous high aod retrievals so
[18:31] that they're wrong essentially they're false positive so that's the limitation of using the low quality is that you can
[18:37] fill in for example something like a smoke Bloom but it comes with a cost of these erroneous High aod values so the
[18:46] bottom line is you just need to make sure if you're working with ABI aod data that you know what the quality flags are
[18:52] and that you use the appropriate quality Flags we recommend avoiding the low quality for most situations um and then for kind of routine
[19:02] operational applications we recommend using High plus medium we call that the top two qualities aod data and when we
[19:09] work with the python um in in a bit you'll get to actually see the the different quality flags and get a feel
[19:15] from them okay so one other thing I want to mention is that um aod is often um missing it's not
[19:24] retrieved in very thick aerosol plans so you can see in the example here um so this this is aod and uh true color
[19:32] imagery from The Polar Urban satellite snpp and the viewers instrument but the ABI aod is very similar so in this case
[19:41] on September 8th 2020 we had really thick smoke from wildfires um in Oregon and Washington and California so you can
[19:48] see the Thick Smoke here um and then the aod algorithm um it just what it does is it
[19:54] misclassifies this very thick smoke as a cloud cloud um and so there's no aod retrieved in Cloudy areas and so that's why we'll
[20:02] have the missing aod corresponding to that for ethic smoke so this is a very common situation with all aod algorithms
[20:10] it's an area of active research um so as a user it's just something to be aware all right so just to summarize
[20:19] um um the reason why we use aerosol Optical depth and we also use it for air qualities because it's a quantitative
[20:26] measure of aerosols and it can be used to estimate surface PM 2.5 concentrations it's really easy to
[20:32] interpret and identify areas of high aerosol concentrations typically from smoke blowing dust or from Haze and it
[20:39] supplements visible imagery but the limitations are we didn't talk that much about this but it's a column
[20:47] measurement so again it's looking at the aerosols in a vertical column of the atmosphere so just looking at Eros
[20:53] obstacle depth you don't really know where those aerosols are they may not be reaching the surface uh and also there's
[21:00] no aerosol Optical adapter retrieved in areas where there's clouds or reflective or bright surfaces so snow ice areas of
[21:07] sunlight or bright surfaces and it's available during the daytime only all right so what I'd like to do next is
[21:14] I'd like to do a demonstration of Noah's aerosol watch website and so this is where you can find both near real time
[21:20] and archived imagery from the gozr satellites so I believe we're putting the URL for Airsoft watch in the chat
[21:28] um but if it's sometime later and you're looking at this after the training um what you want to do is just you know
[21:33] pull up your favorite web browser we recommend Google Chrome and you want to type into your search engine NOAA
[21:39] aerosol watch and it should be the first uh results let's click on that and so yeah so this
[21:49] is the NOAA aerosol watch website um and so as what it will do is it will load the most recent approximately one
[21:57] hour of go 16 or goes east Geo collar imagery imagery and so I believe Dr Gupta talked about
[22:05] geocara last week so geocolor is the simulated true color imagery from the uh the ABI sensor on the gozar satellites
[22:15] because ABI doesn't have a green band The Green band is simulate all right so one thing I like to do
[22:22] first is I like to come over here so on the right hand side um these these kind of white um uh
[22:29] uh menus here will allow you to adjust the the layers that you're looking at so I like to click on the very last one
[22:37] that says labels layer and so under each of these you'll see different options that you can click on so if it's colored
[22:45] red that means it's not being shown and if it's color green it means it is being shown so I like to click on the
[22:51] boundaries both the boundaries and that's going to give you the state and international boundaries and also I just
[22:57] I like to add the labels um just so I can see kind of what the city and state and um uh International
[23:04] names okay um so if we come over here again as I said the default is the go 16 Geo color
[23:11] you can see that's colored in green there so we know it's being displayed and there's a bunch of different options
[23:16] but again I want to focus on aerosol Optical depth because that's what we're talking about today so if we click on
[23:21] aod we'll see that fill in so the color bar will appear again it's the the um the rainbow color bar that you have
[23:29] been seeing so again colors of blue dark blue and a lighter blue indicate a clean atmosphere and when you start to see the
[23:37] yellow orange and red colors that indicates High aerosol Optical depth from aerosols typically from either smoke blowing dust or Urban Haze
[23:46] and so today it's a really clean day across the United States um and so we can animate again we have
[23:53] the the most recent approximately one hour worth of data so if we come up here to the top we see these blue buttons
[23:58] there's an arrow right in the middle we click on that it will actually animate the imagery so again we're looking at
[24:05] about the past now worth of so because not too much is going on today let me stop this
[24:13] um I'm gonna go back a few days about a month and so we can look at a day when there was
[24:19] actually some aerosols in the atmosphere but before I do that I just want to let me turn off the Geo color so you can see
[24:25] it a little bit better you might notice that this again this is the ghost 16 that goes e satellite the aerosol
[24:31] Optical depth cuts off over the Western us you can kind of see um see it here hopefully approximately
[24:37] cutting off um and that's because on aerosol watch we're looking at the High plus medium quality aod data that's what's being
[24:44] plotted and so because the Western us is quite far from the um the ghost 16 satellite data over the Western us here
[24:55] are considered low quality and so they're not shown on the aerosol watch website website if you want to see aerosol Optical depth
[25:02] over the Western uis what you would do is you come over we're going to actually do this in a second and you would click
[25:07] on go 17 which just goes west and then you could click on aerosol Optical depth and that will actually fill in the
[25:14] aerosol Optical depth in the western ux okay okay look at this and let's look at a day when there were
[25:21] some there were some uh Wildfire smoke in the western U.S so to change the date we would come up here to the calendar
[25:30] um and so we're going to go back actually to let's see what date did I pick September 10th
[25:35] um and so then we're going to click on September 10th um and what that will do is that will
[25:39] actually um it'll automatically upload the same time range that you would just been visualizing but I want to actually
[25:45] I want to change the time so to do that you come over again to these blue buttons and the one that has a clock on
[25:51] it it'll say select animation range if we click on that it'll give us the option just to show the start time and
[25:57] the end time and so here you just you don't want to pick too long of a time period uh like
[26:04] for example you wouldn't want to pick the whole day because um you'll see the red the red warning at
[26:08] the Top If you select too long of a time period it just takes a really long time
[26:13] to load because it's a geostationary satellite there's a very frequent observations so my recommendation is start with an hour maybe two hours worth
[26:21] of data um and then go from there depending on you know what your your internet connection is like
[26:28] um you'll be able to to load more or less potentially in terms of a range of data so I want to go to uh the afternoon
[26:37] so I want to pick from 1731 UTC to 1831 UTC UTC oh so you just select your start and end
[26:46] times and then you hit submit then that's going to load up automatically and so we can see here actually first
[26:53] let's look at the Geo color for a second let me turn off the aerosol Optical deck um and so let me just let me just run
[27:00] this as an animation so hopefully you can see I can zoom in a little bit and you can zoom in and out using the
[27:07] normal your mouse or there's these little plus and minus uh navigation menu up here so hopefully you can see this
[27:14] very thick almost brown colored smoke um so these were some wildfires uh that are occurring in the state of Oregon uh
[27:21] that have actually been burning for several months but they were particularly intense on on this day on
[27:25] September 9th of this year um and so what we can do they're also I should add there were also
[27:32] wildfires in British Columbia and the state of Washington as well um so if we add the aerosol Optical
[27:39] depth now we can see and I'm going to slow it down so again there's more controls up here so these these two
[27:46] double arrows you click on those will actually slow down the animation and then the double forward arrows will
[27:53] speed up the animation slow it back down again and then if actually if you want to stop you can stop the animation and
[28:01] then then um this Arrow this button here will allow you to step forward one time step and then this will allow you to to step
[28:09] backward one time you can control the animation so yeah so if we do that if we just step forward gradually you can see
[28:16] the that smoke plume the movement of it kind of surging northward that that big huge one and then there's also obviously
[28:24] transported smoke kind of all across the Pacific Northwest of the United States let me just skip through that a little bit more okay
[28:32] so again you can see in the very thickest smoke there was that that kind of anomaly that I was mentioning that
[28:38] there's some missing aod retrievals just because that smoke is so thick that the aod algorithm is mistaking it for a
[28:44] cloud cloud that's just something to be aware of okay but um one thing that we can do
[28:50] kind of a a way to help circumvent that um is that if I turn off the aerosol
[28:55] Optical depth um what we offer is What's called the aerosol Optical depth composite so let me turn that on so what that is is
[29:02] that's a three well it can be any any averaging time but on our website here we offer in three hour periods so what
[29:10] we're looking at here is the 15 to 18 UTC aod composite so that's a three hour average of aod from 15 to 18 UTC so then
[29:20] if we go then there's one from 18 to 21. so so now we're looking at the the
[29:26] average from 18 to 21 UTC and so you can see that a lot of those gaps that are
[29:32] from the the lack of aod and the Very thickest part of the smoke probe those are filled into it to a certain extent
[29:39] when we look at the multi-hour aod composite so again this is from 18 to 21 UTC we go back we can see from 15 to 18
[29:48] UTC UTC so that's that's pretty and when we do the python Hands-On we'll see how to make an aod composite that that can be a
[29:56] really helpful way to kind of fill in some of the gaps from an individual time steps missing aod retrievals either
[30:03] because of clouds or because of something like this where there's a really thick smoke plume at all of the
[30:08] aod isn't being retrieved okay so let me just go back to the the the the um the aod for each time stamp and then
[30:15] we put this in motion again um so let's just say you know you want to save this particular animation maybe
[30:22] you want to you need it for your research or for a presentation or you want to put on your website so you just
[30:27] want to kind of get everything going like the speed you want the location that you want the products that you want
[30:35] um and then what you do is you come up to um this little blue button with the
[30:38] camera on it it says save image so we're going to click on that and that will turn our cursor into a little plus sign
[30:44] and so we can use that to draw a box around the area that we want to save and
[30:49] if you don't get the box quite right you can actually adjust it so don't worry about that so let me make this look good
[30:55] in a little bit further maybe up a little bit more so that looks pretty good so when you have the the box where
[31:01] you want to you're going to come here and select submit and a new tab is going to open on your
[31:08] browser and it's going to take a few minutes minutes it'll you know the time will vary depending on how long the the data
[31:15] animation the imagery animation you've selected and then also you know your internet connection your computer so you'll see
[31:23] um there'll be a little loading bar here um that'll kind of give you an idea of where you are and then once the
[31:29] animation is ready you'll see it pops up here and so then what you can do is you
[31:32] can either of course copy it or what I like to do is I like to save it and so
[31:39] you can right click and then see it looks like I've saved a whole bunch of stuff so then you can just rename it
[31:45] whatever you want and then you hit save and now you have that gif file which for me is opening up
[31:54] in a different window here there we go over here so now you have a gif file with that animation so that's really
[31:59] handy handy um I know a lot of people let me close that out again a lot of people um in
[32:05] part one in the Q a were asking where they can retrieve or access um the the geostationary satellite data
[32:13] from the past from the archive and this is one really good place okay so one other thing I want to
[32:19] mention we've been looking at the the Kona sector imagery so I'm going to hide the go 17 again and I'm going to go back
[32:28] to the go 16. for this particular day um it looks like it might take a minute for the Geo color to load up so you can
[32:38] see hopefully you can see here at the top right hand corner there's the cone in this view sector which we've been
[32:42] looking at and then also there's a full disk sector so for um for folks that that don't live in southern Canada or
[32:49] the United States or Mexico um you know there's a I know there's quite a few participants from Central
[32:54] America from South America um you can come here and you can click on the full disk sector
[33:00] um and this will show you again this is you know the same thing the Jew color the aod we have the aod composite
[33:06] imagery imagery um and so you can use zoom in and out okay you can pan around so in this
[33:13] particular day um there was quite a lot of seasonal burning occurring in the Amazon basin so we see very high Airsoft Optical depth
[33:20] over very wide you know area of Central South America um It's associated with smoke from second high this you can see hopefully
[33:28] the gray shading associated with smoke from those fires so I'm anticipating for a lot of participants um this full disc
[33:36] uh scepter imagery will be very helpful for people okay okay um all right so now I want to move on
[33:45] and I want to go back I'm going to have a quick few more slides to talk about
[33:49] how we actually work with the aod data themselves themselves all right great so um so now I'd just
[33:55] like to give you a brief overview of of the actual data files that we'll be working with
[34:01] um because there's some unique aspects about building that the goes are ABI data files that are different from other
[34:08] data files like for example from Polar orbiting satellites that you may have worked with um so the first thing I want to mention
[34:14] is that all of this the NOAA satellite data files they're a net CDF format um and so you may have encountered
[34:21] netcdf files before um netcf is a it's a set of software libraries and data formats that are
[34:26] specifically for scientific data um and so netcdf files they all have a common organizational structure um what's called a top level group or a
[34:39] root group and then the contents they can be organized by additional subgroup subgroups but they but not necessarily
[34:47] um the the files that we're going to look at today for example won't have optional subgroups but but some NOAA
[34:52] satellite data files do um but the data organized is variables um and then the variables have attributes and dimensions and the
[35:02] attributes and variables will have data types and so we're going to see all of these different examples when we look at
[35:09] an aod data file today um so we're going to open up a file and we're going to actually look at the
[35:15] variables we're going to look at some of the different data types and and attributes attributes and see that the structure of the netcdf
[35:23] file file all right so ABI data files have a lot of information just in the file name and
[35:31] it can be a little bit complicated so I just want to go over some of the information that you're going to
[35:35] encounter so the first kind of way that the data files are classified is by What's called the processing level and
[35:42] so you've heard these terms before so there's the level 1B data those are the ABI Band 1 through 16 radiances and then
[35:50] there's level two products these are the products like aerosol Optical depth that are derived from the level 1B radiances
[35:58] all right and then there's each of the different level two products have a product's name and you'll see examples
[36:03] of those in a minute um and then there's the scan sector so there's three scan sectors and this is
[36:09] the like the domain of the data so there's the full disk which is the full hemispheric disk there's What's called
[36:16] the Kona sector which is a subset of the full disk typically that's covering the conus conus um the actual conus or for Goes West
[36:25] it's called the packets and so you can see examples here so this is the goes east Kona sector
[36:31] um and then this is the Goes West packus sector which is still considered the conus abbreviated C it gets a little bit
[36:39] confusing but again we're going to open up these some of these files so you'll I think you'll understand a little bit
[36:43] when we started working with that specifically specifically um and then there's two adjustable zoom in regions that are called mesoscale
[36:50] domains domains um and they are not constant they're just based on current hazards okay and we won't be working with those today
[36:57] because as you remember I mentioned the Aeros obstacle depth data they aren't retrieved for the mesoscope sectors just
[37:03] this is the conus um and then again this is an example of the the full disk for goes east and then
[37:08] goes west okay we also talked about um the scan mode mode um Dr Gupta talked about that last week
[37:15] so there's essentially four different scan modes um for the the gozar satellites and that's what determines the observation frequency of the full
[37:23] disk the conus and the mesoscale sectors so the most common one you're going to encounter is mode six which is
[37:30] abbreviated M6 that's called the flex mode mode um and that's typically the default mode all right um and then of course there's a
[37:37] different satellites there's goes 16 go 17 and then goes 18 which will be taking over for go 17 in early January
[37:43] okay so here's an example of of what a ABI level 2 file name looks like you can
[37:50] see it's really long long name so this schematic breaks it down so you can understand what the content is
[37:57] because there's a lot of information here that will will tell you about what's in the file before you even open
[38:02] the font so it's important to understand um what what the file name how it breaks down all right
[38:10] um so the things you're the most big things to notice is that um first this is telling us the sensor
[38:16] the API the advanced Baseline imager that's a level two product and then here's the product name again
[38:22] we'll see examples of these on the next few slides but in this case this is the aod aerosol Optical deck and it's the
[38:29] Kona sector data then we have the scan mode this is mode six so called Flex mode the satellite so this is either
[38:36] going to be go 16 go 17 or goes 18. and then we have three times so we have the
[38:41] observation start time the observation end time and then the time the file the data file is created all right so the
[38:48] thing to notice here is that for whatever reason those are ABI data files use the Julian three-digit day they do not use the two
[39:00] digit month and then the two digit day of the month to designate times all right so that's just something we're
[39:07] going to have to keep in mind when we're working with the data okay oh and then finally they're net CDF files
[39:13] all right so um there are about 20 ABI level 2 products um and so I've listed them on this slide
[39:20] in the next slide just so you have them as an example um again we're going to be working with
[39:25] aerosol Optical depth we comes in full discector and come to sector there are no mesoscale sector um aerosol Optical depth data files
[39:34] and if you want you really want to know more information I included a link here to some of the product documentation for
[39:40] these different files and then here's the the rest of that somebody last week asked about um in the Q a asked about uh wins
[39:50] information from the satellite so this is the derived motion wind product that um that person hope that is maybe
[39:57] interested in okay all right so specifically now aerosol obstacle depth um I just want to show an example so
[40:05] again can't say this enough times aod is available for the full disk sector and here's an example of what the full disk
[40:12] sector aod data looks like for one time step and then for the conus sector and again this is an example of what the aod
[40:19] data looks like for one time step of the Kona sector okay um the full dissector files are big
[40:25] we're going to work with those today with python so they're about 30 to 40 megabytes megabytes um again both all AMD has two kilometer
[40:33] resolution at Nader the observation frequency depends on the scan mode typically with that mode 6 Flex mode we
[40:40] get every 10 minutes we get a full deceptor observation and every five minutes we get to come this week after
[40:46] and in the data files um in the the aod data includes high medium and low quality data with the
[40:52] data quality flags and we will see what those look like when we open up a file and we will actually use them today
[40:58] um these examples here these are both what we call the um the high quality so you can see I put it in the title here
[41:04] so this is just the highest quality data that's being shown in this example okay okay um so I don't want to spend a lot of
[41:11] time on this but anybody that's work going to be working with Avi data files you just need to be aware that latitude
[41:19] and longitude of the observations um they're not included as separate variables in the data files and this is
[41:26] done to save save file space really um and the reason why is because um the goes satellite so goes Easter
[41:34] Goes West um they're in what's called a fixed grid so the grid doesn't change unlike for a
[41:39] polar orbiting satellite where every time the satellite makes a new overpass it's you know it there's a different
[41:44] grid of satellite pixels on the ground for the go satellites that grid is fixed and so um that means that in the data files the
[41:53] all the information that's needed to um to calculate lie to the longitude are included in the data files and you kind
[42:01] of have to do that calculation yourself um so you can see some of the examples of some of the constants
[42:06] um here's a diagram that shows essentially the relationship between the satellite and latitude and longitude um we did this this math for you so I
[42:15] will we'll see when we do the python section section um how to actually calculate latitude and longitude from the information it's
[42:21] in a data file but I just wanted you anybody who's working with these files I just wanted you to be aware of that
[42:27] okay uh we already talked about the aerosol watch website but there's just a slide here to remind you if you're
[42:33] looking for prepared imagery already that's where you want to go um so right right maybe there are times when you actually
[42:44] want to work with the data files directly yourself so um there's different places that you can go to actually download the data
[42:53] um what we're going to use is um NOAA has a new data archive on Amazon web services
[43:00] um and that includes access to all of the level 1B radiances and all the level T data files including Aerosoft depth
[43:07] which is what we're going to download today all right so I've just included the information here with the links
[43:12] um you can actually go on a web browser and take a look um at these different um data archives for Citgo 16 17 18.
[43:21] um it's free it's easy there's no registration required um this is actually separate from an Amazon web services account a lot of
[43:30] people will do uh cloud computing on Amazon web services and for that you need an account this is completely
[43:36] different this is a public archive that just happens to be housed on Amazon web services okay and it's part of noaa's
[43:44] what they're calling the open data dissemination program which is Noah's effort to make their satellite and other
[43:51] data files more accessible to the public okay okay all right and then finally I just want to mention I have a new website
[43:59] um we're still adding information to it but if you have a question um you know you're confused about
[44:04] something uh you're looking for an answer try going to this website there is a lot of information here uh you can
[44:11] always you know contact me obviously email me but we have information about working with python so setting up um
[44:19] Anaconda and Jupiter notebook I have some annotated tutorials talking about the different code that we're going to
[44:26] cover today to work with the satellite data files um information more information on kind of what I've just covered about the
[44:33] different scan sectors and scan modes um and the different domains and other information you need to know about the
[44:40] satellite data um and then a glossary that defines common satellite terms um and then links to all sorts of
[44:48] reference information for satellites imagery python packages anything that you might need to work with the data okay
[44:56] okay all right so now what I want to do for the rest of my time that's allotted to
[45:02] me is I want to take you through some actual python code to work with the data themselves
[45:09] themselves so what we're going to do is hopefully if we have time we're going to actually learn the proper workflow for
[45:17] visualizing satellite data specifically level two data files and we're going to use aerosol Optical depth as an example
[45:23] so I want to show you how to do this from start to finish using python so the
[45:27] first thing that we want to do number one is we actually want to download the data files and we're going to download
[45:32] them from that Amazon web services archive that I was mentioning all right and so we're going to use a case study
[45:38] um from September 7th of this year so we're going to download one hour's worth of full disk scepter aod data file so
[45:45] that's six files um and this is when there was a pretty intense seasonal burning in the Amazon
[45:51] so there was a lot of very thick snow smoke across Central South America then we're going to open one of those
[45:57] data files and we're just going to see how to read the metadata how to understand what the data variables are
[46:03] um how is the the data file organized what information do you need to know to work with the data
[46:09] then number three we're going to actually process and visualize we're going to make some maps some images of
[46:14] the aod data files and there's two different options so we can make maps of the individual time steps or we can make
[46:22] a multi-file composite remember I showed you the composite with aerosol watch on the website that just helps fill in some
[46:28] of the gaps because sometimes aod is missing for individual time steps so the aod composite can kind of give you a
[46:34] more complete picture um and then finally if we have time I'll show you how to if we have our one hours
[46:42] worth our six maps of individual aod timestamps we can actually put them together to make an animated gif file
[46:48] kind of make a little movie or an animation animation um of those AUD Maps okay um and I should mention you should have
[46:56] gotten all this information from the rset team but all the code files that I've given you they're not just specific
[47:02] to this case study you can actually reuse them on on your own and I hope that you will
[47:08] um okay so something about that though um um the main thing that I want to mention is
[47:14] that there's a big difference between writing code for yourself and then writing code for others to use and so
[47:19] what I mean by that is that you know we've provided these um these code files to you they're more complicated than
[47:27] they would be probably if you wrote them yourself okay and the reason is because I've included a lot of extra functions
[47:34] um and things to make it really easy for you to use that UV user to use them
[47:38] things that you might not necessarily put in if you were writing the code for yourself yourself um so error checks um I have a Graphic
[47:45] user interface which you'll see when we do the Hands-On so just be aware you you probably this is probably overkill for
[47:52] what your specific application is but I just did that to make the the training process a little bit easier okay
[47:58] um and just another thing so we're going to use Jupiter notebook um if you want regular python format dot
[48:04] py code files let me know and I can help you with that um and then obviously there won't be
[48:10] enough time for me to go through everything but I'll try to go over the major steps and I have a lot of comments
[48:16] in the code so hopefully you'll be able you should be able to follow along on your your own okay
[48:22] um so these next two slides these are just there is a reference for you so um you know we're gonna download files
[48:28] specifically for that case study I mentioned from September 7th so um just this the information we're going to use to
[48:35] download this files this is just here's a reference for you um and then the same thing when we
[48:39] actually visualize the files again we're going to focus on a specific area of Central South America and and so those
[48:46] specifications are just here for you to come back as a reference um and so this is going to give you a
[48:51] flavor of what we're going to actually make today um so I'm not sure if you can see this
[48:56] so this is the animated gif here on the the left um focusing on one hour's worth of data
[49:02] over Central South America um and then here we have this the the composite the six file composite
[49:09] um image so again you can see there's a lot more of the the aod that's been filled in there's a few gaps here and
[49:15] there in terms of different time stamps um and those most of those gaps are filled in with deposit
[49:22] and then also you can work with so not only can you zoom into a specific region you could also visualize the full
[49:30] um domain in this case the full disk sector of aod data and this is just an example of that this is the the one hour
[49:36] Composite High medium quality aod data for the um the whole entire full disk okay which takes a lot longer so what
[49:45] we're going to do it takes about 11 minutes to make the six individual aod Maps if we're looking at the top two
[49:51] qualities aod um if you're going to do that for the full disk domain to make a composite it
[49:57] takes about 20 minutes so it's a lot of data data all right everybody so hopefully those participants who want to run the python
[50:06] Hands-On on their own computer um and kind of go along with me while I'm doing it hopefully you had a chance
[50:13] to uh set everything up make sure you have Anaconda installed on your computer and set up a new folder on jupyter
[50:21] Notebook that should look very similar to this hopefully so you should have a one two three four uh five
[50:30] i p y and b files and then one dot py file all right and so hopefully you all
[50:37] actually already ran this check python packages just to make sure that everything everything um has was installed and ready to go
[50:44] uh so let's let's assume that everybody has that setup so the first thing that we're going to do is we're going to
[50:50] actually download the data files that we're going to work with today so let's open up the the file that's called ABI
[50:56] level 2 download AWS and so to do that we're just going to click on it and it's
[51:01] going to open up in a separate tab on your browser it might take a second or two for it to
[51:07] load up all right and so um once it does so the way that Jupiter notebooks works for those of you who haven't used it
[51:17] before is that it's nice because it allows you to to run each of these blocks these gray squares
[51:26] separately from the other so you can get output right away separately from the other parts of the the code file so it's
[51:35] really great for for beginners for Learning and then also I'm I even use it myself often if I'm working with a new
[51:42] data file so what we want to do is we want to click anywhere in the block that we want
[51:47] to run and then we come to the top and see this run button with the arrow we're
[51:52] going to click on that and then any output from the the block will appear underneath okay so this this first black
[51:59] box here just has information about the code file all right so if we scroll down to block one which says import python
[52:06] packages packages um so this is where we're going to import the packages that we're going to need to run this file and the one that I
[52:12] want to mention I want to highlight is I'm called S3 FX this is one of the ones
[52:17] that you had to install yourself so this is what's going to allow us to interface with the Amazon web services
[52:25] archive that contains the data files that we're going to download Okay so let's run block one um and then most of the rest of these
[52:34] blocks are just functions that I've written myself um just to make it easy to download the data files
[52:42] um and if I hadn't already I should mention that this this code file will allow you to download any of the API
[52:48] level 2 products so that includes aerosol Optical depth uh includes Drive motion wins again someone had asked
[52:55] about that in week one um and then any of the other products there's a fires product for example
[53:00] um any of the other products that you might potentially be interested in okay um so block two
[53:07] um all this one does is that it allows us to enter the observation date that we want to download the files for in our
[53:14] normal month and day and it's this function is going to convert that to the Julian day so remember the ABI data
[53:20] files are organized with the three digit Julian day so um this is just going to convert that for us so we don't have to
[53:26] look it up so that's run block two um now block three um what this is doing is again remember
[53:33] I said there's all there's almost 20 I think of those different um ABI level 2 products so what this
[53:39] function does is it finds the correct um product abbreviation that we need that's part of the ABI file name we're
[53:48] going to put in we're going to select with scan sector either full disk conus or mesoscale and then the product that
[53:55] we want for example errors Optical depth and then this function is going to return that abbreviation that we need in
[54:02] order to search for the data file so let's run block three um so now block four this is kind of
[54:08] where that the actual action happens so in this function this is where we're going to actually query uh right here
[54:16] we're going to query the um the Amazon web services data archive and we're going to actually get the list of file
[54:24] names that correspond to the search parameters the the day the month the year the start time and the end time the
[54:31] product the scan sector all that stuff that we put in to search for this block right here this function is going to
[54:38] actually return the list of data files that correspond to those parameters so that's where I'm block four
[54:44] okay okay um and so again we're not seeing any output here because we're not going to see the output until the very end when
[54:50] we run the search so you should if you're not seeing any output from these when you run them that is correct that's
[54:56] what we want okay um so block five this is where we're this is kind of an interface so this is
[55:02] what we're going to do is we're going to we're going to run the search um then we're going to get some output
[55:07] that says here's the the list of files and the file size for each one that matches your search parameters do you
[55:13] want to download these files that way like maybe you made a mistake like you enter the wrong year or the wrong month
[55:18] by mistake the then you're not downloading a bunch of data that you actually made a mistake and you don't
[55:24] really want so we want to we want to review our search results and then decide to actually download the files
[55:29] and so that's what this block is doing so let's run block five okay so block six um this is where we
[55:36] run this this is going to actually generate let's do it let's run block six this is going to generate if you scroll
[55:42] up up so underneath block six you should see um menus that look like this so this is
[55:49] where we're going to actually enter our search specifications okay so you just you only have to run this block block
[55:57] six one time okay to generate the menus then if you change any of your search specifications you don't need to rerun
[56:05] this block again you just change it with the menus and then all that information will automatically upload when we run
[56:12] the search itself okay so um for the satellite I'm gonna use go16 okay follow along with me and again if you if you
[56:22] forget this or you're not doing this live live um this search information is in the slides the second to last slide
[56:29] um has all the search information parameters that you want to enter here okay so our product is aerosol obstacle
[56:35] depth depth we're going to use we're going to do full disk it's going to be 2022. September
[56:43] September 7th 7th and then let me just scroll down a little bit here and we're going to start at
[56:51] 1400 UTC and we're going to end at 14 50 UTC UTC okay so let me just oh that's it there
[57:01] for a second so people can see that and then there's a choice you can either download your files to the current
[57:07] working directory which is what I want to do because that's going to download them into the same directory of your
[57:13] computer we have these code files so that'll be the easiest for the training but maybe if you're you're going to
[57:18] reuse those these files at some point you might want to specify a different directory on your computer if you did
[57:23] that you would you would change this button here and then you would just type in the name of the director okay
[57:29] so we have go 16 aerosol Optical depth full disc September 7th 2022 1400 to 1450 UTC okay so then if we scroll down
[57:39] to block seven so this is the main function this is where we're going to actually run the search
[57:44] um and so if you have time you look through this you'll see there's some different error checks just to make sure
[57:49] that like for example you're not searching for a day in the future or that you haven't specified an end time
[57:55] for the observation that's before the start time just little things like that okay so let's run this last block that
[58:02] shouldn't be the case for us so um as I mentioned you see what we have here is
[58:07] we have the list of files that are available and then their approximate file size so you can see each one is
[58:12] about 30 megabytes so they're they're not enormous but they're they're you know they're not small they're relatively large
[58:18] um and then this is going to again tell us where uh we're actually downloading our data files just to double check the
[58:24] directory name and then just double check that these are in fact the files you want to tell
[58:28] so here you can type you can type out yes or you can just type y to download those files and you can see
[58:35] it's really quick this is going to give us a little um process bar to see how quickly we're
[58:40] processing them what our progress is you can see it was that fast okay at least not on my computer maybe depending on
[58:47] you know your internet speed or your computer processing it might take a little bit longer for you but if we go
[58:52] back out now to the tab for our um our original cheaper notebook file you should see you've got your six ABI aod
[59:01] full disk receptor files here okay all right so then what we can do is we can just close this out so there's two
[59:11] different things you could do actually so you can if you want to just leave this the way it is you can just close it
[59:16] out what I like to do is I like to come up to um where it says sell
[59:22] um and it says all output you select all output clear that's going to clear out everything from
[59:30] um all the output from underneath each individual cell okay it's kind of like resetting it back to when you started
[59:36] and then if you come up here to where it says file you save and checkpoint that'll save the file as if it were so
[59:44] then when you use it again you're not looking at the results from the last time you used it so that's just the
[59:49] thing I like to do but you don't have to okay another thing that's nice so hopefully you can see um the little
[59:55] notebook here for the file that we just closed it's green that means the file is still running so one thing you can do is
[1:00:02] you can click the little check box next to it um and that'll um um a new menu will come up here and so you
[1:00:08] want to click the the box it says kind of this orangish brownish color box that says shut down
[1:00:13] and then you'll see now the little notebook it went from green to a like a black or dark brown color so that means
[1:00:19] it's closed and again that's not necessary but it just you know if we're not using the file anymore we can just
[1:00:24] close it down it'll kind of just release that memory that computer memory back okay okay so now let's actually open up one of
[1:00:32] these files and see what's inside so now I'd like you to please open up the file that says ABI aod open understands
[1:00:39] okay and so this one's a little bit different so the one the previous one we looked at was more like a script where
[1:00:45] we actually were writing a bunch of functions that I wrote and then we were kind of writing the search at the end
[1:00:51] and getting results here we're going to get um output every you know when we go along along um and so we're going to actually see
[1:01:00] the results of of our Jupiter notebook blocks underneath the blocks printing out as we go along okay so again the
[1:01:08] first one if we we click on block zero and we run it we'll just see some information about the the file itself so
[1:01:15] let's go down to block one where we're going to import our python packages and the package I want to point out here
[1:01:22] um is called netcdf4 this is another one of the packages that you had to to install yourself directly
[1:01:28] um and so net cdf4 this is the package that we're going to actually use to open up the the netcdf data file and take a
[1:01:34] look inside so let's run block one all right so block two um here's where we're going to actually open up the file
[1:01:42] so um first what I'm doing is I'm setting the directory where the data files are and so again we're using the
[1:01:49] current working directory that's where our data files are if you had a different directory that wasn't your
[1:01:55] current current working directory you would just change this information here um and then the file name um this is one of the files that we just
[1:02:03] downloaded it's the first one the observation from 1400 UTC if you wanted to look at a different file you would
[1:02:09] just change this name um and then this is right here this is this data set file name this is the the
[1:02:18] command that's going to actually open up the data file using the netcdf for python package or python fiber so let's
[1:02:24] run block two okay so we didn't do anything yet we just opened the file so now in block three let's print the
[1:02:31] metadata the global metadata for the entire file the way we do that is we just say print and then basically the
[1:02:37] the file that we just opened okay when we do that you should see a whole lot of text print out underneath that
[1:02:45] block so you can read through there's all sorts of information you know it tells you all about
[1:02:51] um the you know about Noah about the the satellite itself about its resolution all sorts of good stuff we scroll down
[1:03:00] you just read it there's a whole bunch of stuff okay but I want you to take a look at as we
[1:03:06] get down towards the bottom you should see something that says variables in parentheses Dimensions okay so remember
[1:03:12] I told you that um that cdf4 files have a common structure structure um and one of the things that they have
[1:03:19] is variables so here uh this whole list here those are all the variables that are in this
[1:03:28] particular file you can see there's a lot of them okay so we're going to focus on a few so
[1:03:34] we're going to focus on aod right here okay that's the Air's obstacle depth and then also the dqf that's the data
[1:03:41] quality Flags uh and then somewhere is X and Y which is not popping out of you right now here we go there's Y and
[1:03:48] there's X okay those are the ones that we're going to focus on but you could if you wanted to come back on your own and
[1:03:54] take a look at some of these other ones like the angstrom exponent which is AE um there's two of them ae1 and 82 you
[1:04:01] can come back you start you could you you could look around um all these different variables on your
[1:04:05] own okay but for the sake of time let's just focus on the ones that are relevant to us today so block four let's take a
[1:04:13] look at the the metadata specifically for the aod aod variable okay so when we do that we see that it's
[1:04:22] aerosol Optical depth of 550 nanometers we can see there's a valid range which looks a little funky remember I told you
[1:04:30] that the valid range of the aod data was minus 0.05 to 5. well that doesn't look like minus 0.05 to 5. I wonder what's
[1:04:42] going on there we'll come back to that okay okay um so units equals one that means that there's
[1:04:50] it's dimensionless there's no units we have some other information down here we notice that we're using the goes imager
[1:04:57] projection remember I said there's no latitude and longitude but we use the goes imager projection in these files so
[1:05:02] then we'll see what that means and then there's some other information well the other thing is so the shape
[1:05:07] down here so this is telling you that essentially the dimensions of the file so this is a full disk file so it's
[1:05:13] quite large okay so we have 54 24 by 54 24 pixels okay all right so so to go back to this funny
[1:05:22] valid range okay so if we look up here we'll see that um the afd data are in in units or
[1:05:31] excuse me in a data type of unsigned integers 16. that's what this is so it's there's 16-bit unsigned integers that's
[1:05:40] the data type of the aod data okay so what that means is is that the aod data
[1:05:46] are not stored as floating Point numbers in the data file they're stored as unsigned integers all right and that's
[1:05:53] what this data range is is representing so this is the data range not in floating Point numbers but in
[1:06:00] um unsigned integers okay so the the the metadata include this scale factor and add offset can you see here so what
[1:06:09] we need to do is we need to to multiply the valid range by the scale factor and
[1:06:16] then add the add offset and that will convert the the unsigned integers to floating Point numbers all right so
[1:06:22] let's do that in Block five that's that's what we're going to do and we do that we see okay great now
[1:06:29] this makes more sense right so the data range is minus 0.05 and then essentially what this is if we round up this is five
[1:06:36] okay python does some funky things with floating Point numbers but essentially this is five okay so that's just
[1:06:42] something to remember that in in these data files the aod data you always want to take a look at what the data type is
[1:06:49] okay if you see a scale factor in at offset that means that the data are not stored as floating Point numbers okay
[1:06:57] now one nice thing about the net cdf4 package that we're using is that it automatically I have it right here
[1:07:07] okay so we uh it does a couple things first of all it automatically masks pixels with missing data
[1:07:15] um or they're outside the valid range and it automatically applies the scale factor and add offset to convert the
[1:07:22] stored integers to floating Point numbers so we don't actually manually have to do that here um if you you were to use a different
[1:07:30] um programming language like IDL or R for example you would have to manually multiply the aod array by the scale
[1:07:38] factor and then add the add offset value okay to convert the stored integers to floating Point numbers okay we don't
[1:07:45] have to do that so we're going to print out out um so first of all we're going to read
[1:07:50] in the aod data itself uh then we're going to print out a snippet of the array near the center of the array so we
[1:07:57] can see some values um and then we're going to print out the maximum and minimum values in the array
[1:08:03] and then we're just going to check the shape just to make sure everything looks like it should so let's do that if we
[1:08:08] run block 7 or excuse me block six so here we can see sure enough these are floating Point numbers so this is a
[1:08:15] snippet of the aod data array near the center of the array um and so we can see that these are in
[1:08:21] fact floating Point numbers okay and then we can see in this particular array it has really high aod data essentially
[1:08:28] the aod data RFI um it goes down to the minimum of aod data and notice that the the shape of
[1:08:35] the array is exactly the same as what the metadata we saw in a few blocks ago what the metadata told us so so that's
[1:08:42] good news all right so next I just wanted to show you the data quality flag variable so if
[1:08:49] we run that um you can see again this is the the data quality Flags Okay so this is also
[1:08:57] an unsigned integer but um the value ranges from zero to three so we don't have to worry about any sort of
[1:09:02] conversion these aren't floating Point numbers they are actually the data themselves are actually in it and down here we can see the flag
[1:09:09] values so the values and then the meetings so zero corresponds to high quality data one corresponds to medium quality data
[1:09:20] Q corresponds to low quality data and then three corresponds to no retrieval okay and so if we do the same thing in
[1:09:28] Block eight as we did before we print out a snippet of the array and we print out the maximum and minimum
[1:09:35] we can see here so here are the the data quality flag values that correspond I'm going to scroll up to the aod data that
[1:09:44] we printed out here all right and so you notice that there's four oops I should do right here four
[1:09:51] pixels that are missing that's what these dashed lines mean that there's no aod data retrieved for those particular
[1:09:57] pixels and if we scroll down we'll notice that those for those four pixels the data quality of flag is three and
[1:10:06] three means no aod retrieved okay so that makes sense so if you're if you're you know again you just want to print
[1:10:13] out a small a part of the array just kind of check and see what the contents are
[1:10:17] are this is a really helpful thing to do okay so we're going to do the same thing
[1:10:22] now scrolling down to block nine and block 10. we're gonna do the same things now for the X and Y variables
[1:10:29] um so X and Y are the the variables that you need among other constants um you need those in order to be able to
[1:10:35] calculate latitude and longitude so um X is the um the goes fixed grade projection x-coordinate variable so
[1:10:44] we'll print it out we'll see it does again it has a scale factor and add offset offset in units of radians
[1:10:51] um and so uh you'll see this is just an example of the data array again the net
[1:10:57] cdf4 package is automatically applying that scale factor in any offset and converting the X variable to floating
[1:11:04] Point numbers and then if we do the same thing in Block 10 for the Y the Y variable uh again it looks very
[1:11:13] similar except that it's the the y-coordinate y-coordinate which is why it's called Y and again we can see that it as actually it's um the
[1:11:22] net cdf4 package is converting um the stored integers to floating Point numbers okay so if we scroll down to block 11
[1:11:30] remember I promised you that you wouldn't actually have to on your own calculate latitude and longitude um so that's what this function here
[1:11:39] um that that I've written called degrees um it's going to read in the X and Y coordinates variables it's going to read
[1:11:48] in all of the constants associated with the goes imager projection um and then it's going to do a bunch of
[1:11:54] math and it's going to actually calculate the latitude and longitude so let's run block 11. okay um and then we won't have any output
[1:12:03] there so in Block 12 what we're going to do is we're going to actually apply that function to that same snippet
[1:12:11] of values in the um in the middle of the array near the center um so we're going to print out the
[1:12:17] latitude and then the longitude corresponding to that that uh same part of the the data array that we looked at
[1:12:25] for the aod data and the data model so let's run that that might take a few minutes or a few seconds not a few
[1:12:31] minutes minutes foreign foreign just because it's a big file so what it's doing is it's the function
[1:12:40] is actually calculating the latitude and longitude for all of the pixels and then it's just printing out the the snippet
[1:12:45] so again we can see see here's the um the small the snippet near the center um corresponding to the latitude values
[1:12:55] for that part of the array and then again we can see for the whole array the maximum latitude value and the minimum
[1:13:01] latitude value and we check the shape it's it's the same shape as we saw for the aod and the
[1:13:07] data quality flag data array so that's good good um and then here is the the um the
[1:13:13] snippet of the longitude values again near the center um so they're around minus 75 uh degrees longitude and again the the goes 16
[1:13:24] satellite is centered at minus 75.2 so so that's about right again we're looking at this roughly at the center of
[1:13:31] the array so we would expect the longitude to be around -75 point degrees and also the latitude to be very close
[1:13:38] to zero degrees the equator which is what they are they are okay and then the whole you
[1:13:43] know the entire range is going to span that goes east full this sector so we're going to go from about six degrees
[1:13:49] longitude to minus 150 almost 157 degrees degrees okay okay all right so again this is just information purposes for you
[1:13:59] um you can use some of these same basic commands to to look at any of the variables again if I scroll up here
[1:14:07] um you know any of these variables that you might be interested in you can actually use this same sort of
[1:14:15] um syntax you would just change the variable name and that will allow you to print out the metadata and then to
[1:14:22] actually for example you know read in the data itself and then print out you know part of the array or
[1:14:30] um or the minimum maximum values in the shape okay all right so again I like to clear the
[1:14:38] output output and then save it before I put it before I close the file You may wish to to keep
[1:14:45] the the information and then save it I'm going to close that okay okay all right so now that we've downloaded
[1:14:57] the data files and we've opened one up um so we know what's inside let's actually kind of put all that together
[1:15:03] and let's actually map process and then map the data so go ahead and open up the Avi aod process visualize file
[1:15:13] okay and so this is another one where um most of the blocks contain functions that I've written and we won't see any
[1:15:21] output for those until the very end when we run we put everything together and we initialize the the visualization of the
[1:15:30] data files so so um so I may step through them relatively quickly in the interest of time
[1:15:37] um but again if we start with block zero that just gives us some information uh about the the the code file itself
[1:15:46] black one so we're going to import python packages you'll see there's a lot more packages than there have been for
[1:15:53] the the previous files because we're going to be doing a lot we're going to be doing kind of a lot more things in
[1:15:58] this particular file than we have in the previous ones um the main ones to point out um our matplotlib which is the library
[1:16:06] to make plots and then also a cartel pie which is a library to create maps and work with
[1:16:12] map projections all right so that's one block one all right so block two this is where we're going to read in our a of data
[1:16:21] um so some of this will look very similar to what we just saw in the previous file we're going to read in the
[1:16:27] aod data we're going to read in the data quality Flags um and then we're actually going to
[1:16:31] apply the data quality Flags to the aod data so that we can either work with high quality only data
[1:16:41] um what we call top two which is again the the high plus medium aod data and then all what we call all qualities
[1:16:48] which is high plus median plus low okay so that's so this is the the Syntax for how we do that in Python
[1:16:57] uh then we're going to again you just saw this so the rest of this block is applying the uh the function to
[1:17:05] calculate latitude and longitude um and then we're going so we're going to be left with as a result of this
[1:17:11] particular block we're going to get our aod data we're going to latitude and we're going to get longitude
[1:17:16] let's run that um so block three this is the same thing um except that we're going to calculate
[1:17:23] that aod composite so essentially what we're going to do is we're just going to run a loop and we're going to actually
[1:17:29] read in the aod data the data quality Flags data we're going to select the AOE data using the data quality Flags but
[1:17:37] we're going to do that for more than one data file and then when we're done we're going to average the aod data together
[1:17:43] so we get this multi-file component all right so let's run that block um so block four this is just
[1:17:50] information about the projection because um the way I set this this file up um based on requests from end users is they
[1:17:58] wanted to be able to plot the data with the native geostationary projection and then they also want to be able to plot
[1:18:05] it with a different map projection called plate Curry which is a so-called flat projection it's a equidistant
[1:18:12] rectangular projection um so block four this is just reading in the information about the native geostationary map projection so let's
[1:18:20] run back four and block five is um we're going to create a color Bar for our aerosal obstacle depth data
[1:18:27] um and so there's a I wrote this function there's a lot of special things about this color bar
[1:18:33] um so I put them in the the comments if anybody has any questions feel free to email email
[1:18:39] just again special things that are kind of make it easier for you to work with the color bar
[1:18:44] um block six we have to set up Contours for when we plot the aod data um so we're assuming that we're going to
[1:18:51] display the data the aod data from zero to one um and so we're going to display the
[1:18:57] data in intervals of 0.05 so if you wanted to change the range the AMD range or you want to change the contour
[1:19:03] interval this is where you would do that in Block six okay let's run that block seven here
[1:19:09] we're going to add recently going to kind of set up the way the map looks so we're going to draw coastlines we're
[1:19:15] going to draw borders on the map we're going to shade the land a light gray color and then the ocean so sorry the
[1:19:23] land a gray color and the oceans a light gray color so if you wanted to change anything about the appearance of the max
[1:19:31] um block 7 this is where you would do that um black eight um this is where we're
[1:19:38] going to set up excuse me it keeps moving here this is we're going to set up the um the the latitude and longitude
[1:19:45] grid for when we use that plate Curry matte projection um and so this is going to allow us to
[1:19:52] set longitude ticks and latitude ticks um around the map and if you wanted to some people like to put latitude and
[1:19:59] longitude grid lines on the map and some people don't like them so I've set it up where we don't have any any grid lines
[1:20:06] if you if you're one of those people that does like them you would just come down to this section of the code and you
[1:20:12] would uncomment these three lines and that will actually Place grid Mark or grid lines on the plots okay so that
[1:20:20] that option is there for you if you're interested in it that's from block eight so block nine this is the same thing
[1:20:27] except we're doing it for the geostationary domain so we're setting up the the latitude longitude tick marks
[1:20:34] um and then there's the option for the grid lines again if you want the grid lines you would either delete or comment
[1:20:41] out these two lines right here so let's move on that um so this is making a title for your
[1:20:48] plot um using information most of it is information that's in the actual data file itself so we're going to pull out
[1:20:55] the dates the time of the observation the satellites and some other things from the actual file name
[1:21:03] so let's run block 10. uh and then the same thing for Block 11 this is for the
[1:21:08] composite plots so um if you make a composite aod plot it's a little bit more complicated to make the title
[1:21:14] because it's a range of time so you just need to make sure you get the kind of
[1:21:18] starting time and ending time so let's run block 11. okay so then we get to block 12 13 14 and 15.
[1:21:28] um there's four different functions that are going to be plotting the data all right and again this is probably more
[1:21:34] complicated than you would do on your own because again I'm trying to meet requests that I've had from end users so
[1:21:40] the first one block 11 this is going to plot aod data from a single file on the
[1:21:46] plate Curry map projection so let's run block 12. block 13 um is the same it's going to plot aod
[1:21:55] from a single file but on the native geostationary map projection so let's run block 13. um flat 14 is now going to plot the aod
[1:22:04] multi-file composite on the plate create map projection it's from Block 14 and then finally block 15 this is going to plot the
[1:22:13] multi-file aod composite on the native geostationary map to me so let's run block 15. okay so again there's
[1:22:20] basically four different options that you can use to make to to visualize the data and make these Maps
[1:22:26] all right block 16 again this is just a an interface essentially so again before we make the plots just like when we
[1:22:33] downloaded the data um we're gonna get a chance to kind of look everything over and make sure it's
[1:22:38] what we want before we actually say yes let's let's make these these Maps all right just give us a chance to look
[1:22:44] everything over in case we made a mistake so let's run block 16. all right block 17. um again this is the
[1:22:52] one where we're another one where we're going to make menus um so let's run Block 17 and underneath
[1:22:58] that you should see a somewhat long uh list of menus that will allow you to enter the visualization options okay so
[1:23:07] let's go through these so the first one is we wanted to to tell python where the ABI data files are located so we have
[1:23:15] then the six files in the current working directory again if you were going to reuse this file this code file on your own you
[1:23:23] might have a different directory where you have the data files then you would click that and then just type in the
[1:23:28] name of the directory but we're going to use the current jerking directory um and then the the we're going to
[1:23:34] select the directory we want to save the map image files that we're going to make so again let's put them Just for ease in
[1:23:41] the current working directory if you were to reuse this data file at some point or this code file I should say at
[1:23:47] some point you may want to put those files that you're making in a different directory and you could specify that
[1:23:52] here okay all right so again I encourage you to come back on your own and play with
[1:23:59] different combinations here um you know look at the different AOG data qualities um so try multiple different types of
[1:24:08] map types um but for right now in the interest of time we're going to keep this as
[1:24:14] individual aod data files we're going to select high and medium data quality so the top two qualities for the image file
[1:24:22] format it doesn't matter whatever one you prefer I like PNG files so I'm just going to keep it there
[1:24:28] for the map resolution I suggest starting with 150 or 300. um the the higher the DPI setting here
[1:24:35] the longer it's going to take the the map files to be created and also the the bigger the file size
[1:24:42] so probably for everyday use you don't need anything more than 150 or 300 I'm going to pick 300.
[1:24:49] all right so again I would encourage you to come back and try plotting the the full disk
[1:24:54] sector sector um it's gonna these are full disk data files so it's going to take a kind of a
[1:24:59] while to plot those um so in the interest of time let's actually zoom in on a specific area of
[1:25:05] Central South America so we're going to select the option that says specify map domain manually and then we're going to
[1:25:11] enter all the settings below okay so let me scroll down a little bit here actually I think I can leave it like
[1:25:18] this all right so um in terms of the uh the the basically the quarters of the domain all right so we're gonna um plot
[1:25:28] from minus 80 to minus 50. and then um we're gonna keep the northernmost latitude zero and the southernmost latitude is going to be
[1:25:38] minus 25 degrees okay okay um in terms of the latitude and longitude tick marks so um this is
[1:25:45] basically just setting the the ticks that will be around the edge of the map um so the way this works is that you're
[1:25:51] going to set in essentially the range from west to east of your longitude tips and then the increment between ticks so
[1:25:58] we're going to go from minus 80. to minus 50 degrees longitude and we're going to have that increments of 10
[1:26:06] degrees so that'll plot minus 80 minus 70 minus 60 minus 50 degrees longitude on our map and for the latitude checks so the
[1:26:15] northernmost latitude again is going to stay zero that's the Equator the southernmost one is going to be minus 20
[1:26:21] and again we're going to keep 10 degrees latitude between 6. so then we'll have plot so we'll have ticks at minus 20
[1:26:27] minus 10 and 0 degrees I don't know okay so let me just let me just leave that up
[1:26:32] there for a second so everybody can get a chance to so take a look at all those and again on
[1:26:37] the the last slide from the slide presentation file has all the the specifications all these um values that you can use to enter if
[1:26:48] you if you didn't get a chance to see them all or you want to go back and run
[1:26:52] it again on your own like so once we have that all set up then we scroll down to block 18 this is
[1:27:00] the last block this is the main function so again we have a bunch of basic checks just to make sure that our directories
[1:27:07] are real we haven't made a mistake entering a directory and that we don't have any other problems and then we're
[1:27:12] going to actually make the maps so let's run this block and again it's gonna it's just because
[1:27:18] just gonna tell us where are we saving our map files use that directory we want in this case we're we're going to be
[1:27:24] subsetting or excuse me plotting a subset of the aod data we're not plotting the whole domain we're just
[1:27:30] plotting a subset and that subset corresponds to these map Corners here so west longitude east longitude southernmost latitude northernmost
[1:27:40] latitude latitude um and then here's what our longitude ticks are going to look like and here's what our latitude
[1:27:47] so everything looks good to me um and so we're gonna hit it actually let me back up so let's just say you
[1:27:53] made a mistake like maybe you entered the wrong um the wrong longitude value for the westernmost longitude all you
[1:28:01] would do is you would say actually you would still you guys don't do this I just want to show you what would happen
[1:28:06] you would hit no okay and then this will just end it'll say okay we're not making maps and then all
[1:28:13] you would do is you would scroll back up and you would change whatever mistake you made so again let's say
[1:28:20] um you know you you entered the wrong longitude value here you would just change that value I'm not going to do it
[1:28:25] because this is the one we want but you would just change that and then you would scroll back down to block 18 and
[1:28:30] you would run it again okay and then again you double check say okay yes this is what I want now and then we're going
[1:28:36] to type y for yes and it's going to start plotting the data all right so I just want to show
[1:28:45] um while those those images are are running I just wanted to show the participants a few examples of what they
[1:28:53] can do other options um maps that they can make I'm using the same code file so um this is an example
[1:29:01] here of the um the full disk so plotting the full domain of data um so this and this is also the
[1:29:08] multi-file composite so this is showing for high medium quality aod um this is the the six file 1400 or 4 to
[1:29:18] 1450 UTC composite of the full disk data um and there we can see um in comparison um this is just the high quality aod all
[1:29:30] right and so and this is also a JK file and the other one was a PNG file all
[1:29:35] right so I'm looking at the differences again this is the high quality um and then this is the the top two
[1:29:41] qualities and so the difference with the high quality is that um it's the most stringent so they're
[1:29:48] slightly less coverage in terms of the aod data compared to the top two qualities qualities hmm hmm okay so let's check oh okay so here's we
[1:30:00] check back on our code um as the the aod um data files are being generated you'll see them appear uh underneath the um the
[1:30:10] code block as output and then if we go back to um our our current working directory so
[1:30:17] our our directory on jupyter Notebook um we'll start to see those image files being generated and saved there's the
[1:30:25] first one right there okay all right just a couple other while we're waiting um so this is an example um remember I
[1:30:33] mentioned the um the option for the grid lines so some people like to include the latitude of longitude grid lines and
[1:30:41] some people don't like them so if you're one of the people that does like them I pointed out in the um in the two
[1:30:48] functions where we're setting up the latitude and longitude tick marks um there are options there that you can
[1:30:54] either hide or or uncomment depending on which one um code commands a couple lines of code and that will add these these grid lines
[1:31:04] if you want to see them okay um and then let's see what's the other option I think I just wanted to show the
[1:31:11] difference between this is the high quality aod all right just the high quality only and again you can see um
[1:31:18] it's the it's got a lot of coverage but it's the most stringent so if we look at
[1:31:22] the high post medium quality AMD it has a little bit more coverage um compared to just the high quality
[1:31:29] it might be a little faint to see but this is an example that has the grid lines so you can kind of see them
[1:31:34] they're just faint um light gray lines we're not latitude and longitude grid lines on the full disc
[1:31:42] disc um um map of the aod data so again for people that want to add the grid lines that
[1:31:47] option is available for you and this is an example of what they look like so that they're subtle I like them but a
[1:31:52] lot of end users don't like them so and that's fine everybody obviously has their own preferences or you know
[1:31:57] specific requirements for their application application okay so again we can see as we're going along now we have the 1410 UTC map has
[1:32:08] been made all right everybody so um somewhere in the range of 11 to in this case it took me about 17 minutes
[1:32:16] this time um you should see um the the six individual Maps uh print out uh underneath the uh the final block
[1:32:26] and so when it's very done you'll see the words done um and then if you go back to your
[1:32:32] current working directory you should see the six uh I again I selected PNG but if you did jpegs or PDFs you'll see those
[1:32:41] six image files um in your current working directory um and then you obviously you could open up
[1:32:46] any one of them individually but what I like to do now is um I'd like to show you how to uh to
[1:32:54] create a a little movie or animation as a gif file so again I'm going to come back and I'm going to close the
[1:33:02] visualize I'm not going to save it so we'll just leave that and then again I like to actually close out and shut down
[1:33:09] the file before I open the next one so let's do that and so then the very last
[1:33:14] one let's open up animate images this is this is very short I know we're running a little bit longer in terms of time
[1:33:21] then I budgeted so this one's really fast so there's three different options that I've given you and I run block zero so there's three
[1:33:33] different options I've given you in Python to make animations all right and so um in terms of importing the
[1:33:40] libraries one of them is called um imagio uh and then we're gonna also use matplotlib to make an animation
[1:33:49] um and then the final one is called pil or python image Library so let's run block one
[1:33:56] um so blocks two three and four um they're identical except that the only thing different between them is
[1:34:03] that each one is using a different one of those packages to create the animation so block two is using um the
[1:34:11] package called imagio and so for all of them we essentially do the same thing we read in the list of of image files that
[1:34:19] we've created in this case we have Styx aod maps that we made and then um we whatever the function is it's
[1:34:28] going to put them together and make a gif file and then it's going to save the file so let's run block two that's for
[1:34:34] imagio again block three is using pillow or python image Library it's the same thing we read in the image files we make
[1:34:42] the GIF and we save that gif file so let's run that one block four um again it's the same thing but now
[1:34:48] we're using matplotlib it's a little bit more complicated because it's matplotlib um and we have to actually set up a
[1:34:55] figure and do some other things so that we don't actually see the axes but the concept is the same we're reading in our
[1:35:03] image files we're making the animation and we're saving the gift box so let's run that black again block five when we
[1:35:10] run that this is uh again our graph of user interface menus um this is where we're just going to
[1:35:15] select the different options for making the animation so first we have to specify where the graphics files are
[1:35:21] located and that's going to be the same directory where the animation the GIF is going to be saved so in this case we're
[1:35:27] using the current working Library that's where all of your uh aod map image files should be um here you can just whatever name you
[1:35:35] want for the animation um I'm just going to call it I'm just going to call it animation you can call
[1:35:40] it whatever you would like um that'll just you know just differentiate when you save the file so again there's three choices I would
[1:35:48] encourage you to to redo this three times and see what the animation looks like using each of these
[1:35:54] um let's do homagio first um and then you can set the time interval between your frames again I
[1:36:00] just did you know half a second all the way up to five seconds you could change this if you want I like one second
[1:36:08] um and then you have to we have to specify what the uh the file type is for
[1:36:13] those those map files that you made so I made pngs um if you made a JPEG or a PFD
[1:36:19] then you would want to specify that okay and then we're going to come down to the main function again there's a bunch of
[1:36:24] error checks for you um we're going to run that and it's really fast and when it's done it'll say
[1:36:30] animation done um and then again we'll go back to our uh our current working directory and you
[1:36:36] should see a gif file with whatever name you designated and then it'll have also I just did this so you would you
[1:36:43] wouldn't be overwriting files it'll have the package that was used to make the animation animation so again if we click on that I'm going
[1:36:50] to to I'm going to actually pull it up pull the actual file up from my windows folder so I can just show you what it
[1:36:59] looks like so that's this is an example of what of what the gift that we just made what else
[1:37:05] so you can see it slowly repeating every one second between frames um so again I would encourage you to go
[1:37:13] back and um try making it with um with the the pillow the python image library and with
[1:37:21] matplotlab maybe change the number of seconds between frames see what you like um try the the three different options
[1:37:28] just to see what they all look like each one has their strengths and weaknesses some of them are better for
[1:37:35] um images that have a continuous color bar some are better for discrete color bar you know individual colors play
[1:37:41] around with them and see what you like okay okay um so I I hope that that was helpful
[1:37:48] um I again I had to go through the python pretty quickly but if you have any specific questions
[1:37:54] um certainly the Q a is coming up now or you can feel free to contact me directly
[1:37:58] all right thank you okay uh thank you Emmy that was great presentation and we had uh a lot of
[1:38:13] questions so we'll move to the question answer session now if you have not put your question answer please put that in
[1:38:20] your question answer section uh using the good webinar option and we will display the question answer on the
[1:38:29] screen and then Dr Emmy will take one question at a time she will read the question and then respond to it thank
[1:38:36] you I mean you can begin anytime okay thanks Paulie can you guys hear me okay hi everyone
[1:38:43] thanks so much for attending I hope that was helpful and we can hear you in the Q
[1:38:48] a so let me get started uh so the first one was how do we match different aod
[1:38:54] retrieval algorithms from different satellites or are they or are they matched by Design or default um I wasn't sure what um this the person
[1:39:03] who asked this question what they meant by matched um but the aod algorithms they're developed for each specific satellite
[1:39:10] and that's because each of the this I should say satellite sensors each of the sensors have slightly different
[1:39:17] um wavelengths you know bands or channels as Dr Palawan talked about last week week um so the aod algorithms are slightly
[1:39:24] different for each sensor but they're they're all typically based on what we call Heritage so one of the first
[1:39:32] multi-channel aod algorithms that was developed was the Modis aod algorithm and so that's one of the heritages that
[1:39:39] the modern satellite sensors the algorithms are built and also the early years aod algorithm so the ABI aod
[1:39:48] algorithm is is based on the heritage of both modus aod and the early beers aod algorithms and I put some references
[1:39:55] um in their uh in the answer just in case anybody had any questions about that I wanted to you know look up and
[1:40:00] read some of those papers okay so the next question is actually could you yeah could you scroll thank
[1:40:07] you uh so the next question is question two I'm interested in gridded PM 2.5 data at the fine spatial resolution over
[1:40:14] South Asia and India can you please suggest any data sets available or are going to be available in the near future
[1:40:20] for this part of the globe from NASA um and so uh we put a link there in the
[1:40:27] chat chat um or excuse me in the the answer to the questions you can access the global
[1:40:32] monthly and annual PM 2.5 data sets at one kilometer resolution um from that that link there all right so question three on slide 12
[1:40:43] um what is the diagonal Edge inside the visible image on the right um so I can actually show that can you
[1:40:50] guys remind me how to share my screen so can you see the the so this is the that
[1:40:55] same same um beers true color image that I was showing in the slides and so the person
[1:41:01] is asking about this kind of um a very noticeable diagonal line here kind of going right through the area of smoke
[1:41:09] that's coming off this is the coast of the western United States this is Washington State here um and then Oregon
[1:41:14] and California um and so what this line is here this is actually actually um due to the overlapping fears swaths
[1:41:24] or or areas of observation that are adjacent so as you you guys probably remember from last week
[1:41:31] um so this is a Beer's image this is from the snpp satellite which is a polar orbiting satellite and so portal
[1:41:38] orbiting satellites as they orbit around the Earth each time they complete an orbit they're looking at a new area of
[1:41:45] the Earth's surface um and so this just happens to be this area here off the coast um the area where two of those
[1:41:54] observation swaths overlap and so because adjacent swaths they're approximately 90 minutes apart um so that's why there's actually been
[1:42:03] about 90 minutes between this observation here closer to the coast and then the one further off the coast and
[1:42:09] so that's why you see this line because um in 90 minutes the smoke plume has moved it shifted slightly and so that's
[1:42:16] why you see this discontinuity here okay so if we were to look at this is the snpp if we were looking to look at the
[1:42:22] NOAA 20 various observation you see there isn't that discontinuity in the same place it's a little bit hopefully
[1:42:29] you guys can see that it's a little further offshore um because the NOAA 20 and snpp satellites they're they're offset by
[1:42:37] about 50 minutes so they're they're swaths their observation areas um are are slightly different so um probably I guess for the the
[1:42:46] presentation I should have shown the note 20 image we wouldn't have had that line right through there but I didn't
[1:42:51] think of it so that's a great question thank you okay so let's go back to the questions
[1:42:58] that was an excellent question okay question four uh what is the maximum of ABI aod which can be
[1:43:06] retrieved in the algorithm uh five can you extend to a higher number number um actually yes I guess I can stop
[1:43:13] showing my screen here probably you don't need to see that um so yes so five is as I mentioned in
[1:43:20] the slides five is the maximum ABI aod value the algorithm actually does retrieve values higher than five but the
[1:43:30] uncertainty uncertainty um is is very high in the algorithm there's something called a lookup table which actually matches the the uh The
[1:43:38] observed information from the ABI spectral band that corresponds to then the aod models that give us the actual ad value so so
[1:43:48] that table only goes up to five so that's why ABIA of these only reported as a maximum value of five
[1:43:57] um just because that's the the highest value that we have confidence in question five is it possible to use the
[1:44:04] goes database and the aerosol watch platform for retrieving and analyzing fog events um what would be the main limitation in
[1:44:13] using aod observations from satellites to analyze fog I would not recommend using aod for fog aod is not it wasn't
[1:44:21] designed to to monitor fog so instead I would say there actually are quite a lot of products that have
[1:44:30] been developed specifically for fog because of course fog is a major issue for operational weather forecasters so I
[1:44:37] put some links there um so so the main products that are applicable are what are called composite
[1:44:43] imagery products or they're abbreviated as RGB that stands for red green blue um and so these these RGB products are
[1:44:52] developed specifically for fog um so I put a couple of links there there's one called a day snow fog RJ RGB
[1:45:00] um and then the other one is the um I think I forget what it's called now it's
[1:45:04] like the the night micro uh imagery you can pull it up here again uh nighttime that's what it's nighttime
[1:45:12] microphysics RGB imagery so that one's good at night and then the day snow fog imagery is useful during the day
[1:45:19] so that's what I would recommend using those instead all right question six how do I get the
[1:45:25] aod data and CSV format from the aerosol watch website unfortunately that is not an option from aerosol watch you can
[1:45:33] only download the imagery files from aerosol watch we do not have an option where you can download the data in CSV
[1:45:39] format format question seven are aerosol watches downloadable animations geo-referenced um so they so so you can either I
[1:45:48] demonstrated how to download an animation you could also just download a static image so just instead of
[1:45:54] animating the imagery you could just have one one time step and so either of those are going to be either the the
[1:46:01] static image the one time step is going to be a PNG file or the animation is going to be an animated gif
[1:46:07] um and so those are geo-referenced um in the sense that they will include the layer layers with the international and
[1:46:15] state and local boundaries and also the place labels if you include those um layers under the labels layer tab so if
[1:46:24] I could share my screen again I could just point that out for folks you can pull that up here to show you
[1:46:31] exactly where that is so remember when you open aerosol watch it's going to look something similar to
[1:46:37] this it's showing the most recent approximately one hour of go 16 Geo collar or visible imagery so if you come
[1:46:46] over to the left where there's all this kind of white menu with the different tabs if you go to the very bottom one
[1:46:51] that says labels layer so you can click on the boundaries and that's just going to show the um the state and local and
[1:46:59] international boundaries and then if you want the place names you can add the labels layer and then that will add the
[1:47:05] place names so you have if you have either of these layers activated when you save your your static image file or
[1:47:13] an animation so again just a save a static image file we've come up to the little blue button that has the the
[1:47:19] camera on it and then you can just draw a box around the area that you want to
[1:47:25] save and then you hit submit this would be fast because it's just one image and then that opens in the new tab and then
[1:47:32] you just right click and then you save your image or you could copy it as well so you can see because I have those
[1:47:37] layers the labels layers activated the um the image that I'm saving actually has that geo-reference information okay great thank you
[1:47:50] okay the next question is question eight in aerosol watch is the disc coverage only the one we are seeing or can we
[1:47:58] switch it to the whole globe so as um as you you saw when I did the demo
[1:48:03] there's two basically two options so there's the Kona sector which is what I was just showing um and then there's the full disk sector
[1:48:11] which is the whole hemispheric disc um so because um the the goes are satellites they're geostationary satellites they do not
[1:48:19] have Global coverage so there's no way to have um to switch anything to the whole globe on aerosol watch
[1:48:26] um because they're they're just showing the um the Western hemisphere which is what the goes are satellites cover
[1:48:33] all right uh question nine does Noah geostation our data support harp so um we didn't know what harp is
[1:48:41] um so some water pollen do we have any um information about What harp is did anybody add that to the chat
[1:48:50] or maybe it doesn't follow up with in the Q a I'm not sure yeah we can address
[1:48:55] that later on okay yeah so if we ever asked this question wants to just um like give us a little more information
[1:49:01] about What harp is then we can add that to the the text here of the the Q a um
[1:49:06] after the session's over all right so question 10 what are the limits in percent of the different data
[1:49:13] quality flags for aod um so this is a great question as well so they don't they don't have limits in
[1:49:19] percent percent um so they describe the confidence in the aod data it's it's not quite subjective but it's more of a subjective
[1:49:27] sense in that they're they're divided into high medium and low so you can see and then not retrieved so you can see
[1:49:33] the criteria that are used um for assigning the quality Flags um they're given in What's called the
[1:49:39] algorithm theoretical basis document the atvd atvd um so table 3.9 um has the the the criteria for the
[1:49:48] quality flags for aod retrieved over water and table 3.13 has the the quality flags for the criteria for the retrieval
[1:49:58] of aod over land and so if you're you're more you're interested in the quality size you kind of understand like what
[1:50:03] what's used to determine what the high medium and low aod quality are go look at those tables
[1:50:10] um and it'll it'll explain everything for you I think it'll make it more clear um but I added the important really the
[1:50:15] message for users is that you the main thing to remember is that you want to make sure you use the recommended
[1:50:21] quality flags for your specific application so if you're if you have a quantitative application um like for example you're doing data
[1:50:29] assimilation or verification with a model then you want to use the high quality aod only um if you have a more qualitative
[1:50:38] application like operational forecasting or any sort of situational awareness for um for aerosol events like like fires or
[1:50:48] smoke from fires or blowing dust then you want to use what we call the top chain qualities that's the high and
[1:50:53] medium quality aod data okay okay um so question 11 um so this person was confused about the
[1:51:02] aod unsigned integer scaling from float that we showed I showed in the um the python demo um so they're confused about
[1:51:13] um the they got the standard range of avd values is zero to one um so so they're kind of confused
[1:51:19] between the the this the available range of aod which as I mentioned it the the full range of aod that's going to be in
[1:51:27] a data file um that's reported is going to be minus 0.05 to 5. okay but then typically when
[1:51:35] we display aod like if you're looking at aerosol watch for example or in the python um that I showed
[1:51:42] um typically when we display aod we display it from zero to one um and that's the reason for that is we
[1:51:49] don't go all the way up to five the reason for that is because typically most of the time aod values are are like
[1:51:57] in the actual atmosphere they are rarely higher than one so if we always show them from zero to five then
[1:52:05] um all of the like for example we're using a color bar uh we used a rainbow color bar in the python and aerosol
[1:52:10] watch uses a rainbow color bar all the the aod that we've shown will be squished down in those blue colors so we
[1:52:17] wouldn't really be able to see any variation in The observed aod so if we went all the way up to five so that's
[1:52:23] why we display it from zero to one so we can see and observe and interpret the natural range in the the aod that we see
[1:52:31] in the atmosphere now sometimes of course if we have really intense aerosol events like we're in the middle of a
[1:52:37] wildfire or maybe there's a Saharan dust transport event that aod can be higher than one so in those cases if you're
[1:52:45] making your own images you might want to change the scale and you might want to show AUD values higher than one
[1:52:51] um going up to five but like I said typically when you see aod displayed it's usually shown ranging from zero to
[1:52:59] one just so that we can actually see and interpret the full range of the aod values values okay yeah this is a great question
[1:53:06] all right um question 12 is there a way to download aod time series for certain locations or points from the AWS
[1:53:15] database without downloading the retrospective set of goes images this would be useful for users who just need
[1:53:22] the values at certain locations so as I'm reading this again I'm wondering if I misinterpreted this question initially
[1:53:27] so I just wanted to clarify and if I did misinterpret this I apologize just but just for everybody else too so from AWS
[1:53:34] you can't download the imagery you can only download the the data files themselves which are in netcdf4 format
[1:53:43] okay so if you're looking for imagery or you want to download imagery then you want to go to the aerosol watch website
[1:53:49] okay just I want to make that clear at the top so um so I think what this person is
[1:53:54] asking is basically it can instead of downloading an entire data file like for example in the python
[1:54:02] um we wanted to look at um the the eight the high aod from smoke from fires that were burning in the
[1:54:08] Amazon in Central South America so in order to to focus in on that subset of region we needed to download the ABI aod
[1:54:18] data for the full disk sector so for the whole hemispheric disk so that because that includes the the area over South
[1:54:25] America so I think what this person is asking is so instead of downloading that that large data file that's the whole
[1:54:31] full disk file can instead we just download the subset of data that corresponds to for example the central
[1:54:39] South America region and unfortunately the answer to that is no you can't you have to download the entire data file
[1:54:47] um at least from the aerosol watch website I'm not aware of any even Noah has another data archive which is called
[1:54:55] class and even there you have you you can't unfortunately subset the files themselves and just download a subset of
[1:55:02] the data so unfortunately you do have to download the file for the whole sector and again either for aerosol Optical depth it's
[1:55:11] either going to be full disk or the Kona sector sector so if you're if you're in Central
[1:55:15] America or you're in South America you're going to have to download the the the data file that's for the full disk
[1:55:21] sector and then once you have that downloaded then you on your own can subset and pull out just the data for
[1:55:27] the location that you're interested um but you can certainly download a Time series of data you could you could
[1:55:34] certainly download let's say you wanted a week's worth of files um at a certain you know a certain time
[1:55:40] or a period of time during the day you could download those files from the aerosol watch website but you have to
[1:55:46] the copied as you have to download the entire uh sector either the full disk or the context whichever is appropriate for
[1:55:52] your location of Interest yeah that's a great question though all right question 13 um do libraries such as X-ray and python
[1:56:02] also automatically apply the scale factor in the ad offset when when um reading in the the aod data variables
[1:56:11] um yes so I I do use x-ray I haven't used it in a while so I couldn't
[1:56:16] remember but one of our colleagues on the team actually um uh pulled this up and checked so it
[1:56:21] looks like that x-ray is is um built on the net cdf4 package it has that as a dependency
[1:56:28] um so it makes sense that that would be the case um but I believe I put a note in you can
[1:56:34] you could always check this yourself if you're not sure if you open up X-ray and you read in the aod data uh into a
[1:56:41] variable and then print out the array and you'll see either their voting Point numbers or their scaled integers you can
[1:56:46] always and it always is a good idea when you're working with a new data set just to check all the variables yourself and
[1:56:51] make sure you understand everything um but x-ray should do the same uh kind of the same thing that we demonstrated
[1:56:58] today using the net cdf4 package okay that's a great question um all right question 14. uh for some
[1:57:05] reason my files do not contain the aod variable variable um they do have the data quality flag
[1:57:10] information though any thoughts on how I can fix this yeah so there are two thoughts that I had there so first you
[1:57:16] just want to make sure that you actually downloaded the aod data files so if you um support this person is if you look at
[1:57:23] the file name that really long file name that starts with uh capital o r underscore ABI if you look at that file
[1:57:31] name and it doesn't include aodf um that means you didn't download the aod data file you got a different
[1:57:39] product by mistake so if that's the case go back um to the you know where you download
[1:57:45] the files in Block six those pull down menus and just make sure that you select it under product the product menu you
[1:57:52] selected aerosol Optical depth um a common mistake is the first item in that list is aerosol detection product
[1:57:59] which looks a little bit similar if you're not reading carefully to aerosol Optical depth so it's possible you got
[1:58:05] the aerosol detection product by mistake okay so just double check that all right question 15 on aerosol watch the
[1:58:12] available data seems to span UTC 1332 to 1447 six steps um should the full daylight hours be
[1:58:20] available I am looking at April 12 2018. yes they should so so um as I mentioned when you open when you
[1:58:27] first open up the aerosol watch website it always displays the approximately most recent one hours worth of data so
[1:58:34] then even if you change dates um by default that's that's still that one approximately one hour time period
[1:58:41] will still be selected so what you want to do is you want to go actually I can
[1:58:46] demonstrate this can I can I share my screen again hopefully you guys can see this so again we're on our Earth I'll
[1:58:52] watch website um so if you um you come up to the top here again these blue buttons you're going to pick
[1:58:58] the one that has a little clock on it it's and if you hover over it it'll say
[1:59:02] select animation range you select that one and this window will pop up and it will allow you to select the animation
[1:59:09] range that you're interested in so again you can select the start time and then the end time so again I'm looking at
[1:59:16] today's data so let's say I just wanted to look at from 1300 to 1400 UTC oops oh 1351.
[1:59:26] um and then I would hit submit um before I do that though I just want to remember
[1:59:29] especially for this person that's looking at um a retrospective case so something in the past um don't select like the whole date like
[1:59:37] 12 hours or 24 hours worth of data um to animate because it'll be really slow slow um I recommend starting with maybe two
[1:59:46] hours maybe stretch that to three or four depending on how fast your internet connection is um you know try and see but start with
[1:59:54] two hours worth of data or maybe even one hour's worth like I'm gonna show and we'll hit submit and it will bring up
[2:00:00] those those that time period um if you if things are loading really slowly especially if you start animating
[2:00:07] it it um then select a shorter time period all right great next question is all right looks like 16 and 17 we just
[2:00:21] got brand new um so let's um we have another time to fill those in so um let's actually skip those and we can
[2:00:31] fill those in after the fact um so let's go to question 18. in the beginning of the webinar
[2:00:38] um some slides was given the range of the A to Z values from minus 0.5 to 5
[2:00:42] but we know that aod is thickness so how can it be negative yes that's a great question so I mentioned that in the
[2:00:47] slides so the um obviously aod can't be negative right so those negative numbers they the the minus 0.0521 don't really have any
[2:00:58] physical value so what you should do is you should think of those as very small positive aods
[2:01:04] um so what those those that negative range that small negative range it represents the uncertainty in the aod
[2:01:10] retrieval okay so that's why um there is that the option the possibility of having those various that
[2:01:17] very small range of negative numbers they represent the uncertainty in the um the aod retrieval from the algorithm but
[2:01:25] physically think of them as very small positive aov values okay that's a great question uh question 19.
[2:01:34] oh this is another one we had a chance haven't had a chance to answer yet is there any work being done to develop
[2:01:39] better imagery or products of the areas that are currently difficult to map such as the Caribbean due to Sun Glen and
[2:01:46] Coastal coastal areas um so sunlight is not a a permanent feature so it's going to vary during the
[2:01:53] course of the day so in the Caribbean for example um you can you can get very uh you know
[2:02:01] quite a number of hours of aod retrievals um just depending on the time of day some of it of course will be
[2:02:07] covered by some glint but certainly not the entire day um so often um I have a a Twitter fee
[2:02:14] called aerosol watch and I often will post post um uh ABI go 16 ABI aod imagery of the
[2:02:22] Caribbean because of the Saharan dust events that theoretically impact the Caribbean so certainly sunglint shouldn't be an insurmountable issue
[2:02:32] um so along coastal areas that is an area of active research um so I I have some some papers that
[2:02:40] some references that I can put into um to the answer to this question um after the the Q a is over yeah there
[2:02:47] is definitely work that's being done uh looking at coastal areas unless unless um palette has something that he wants
[2:02:53] to add to they're they're about that uh no I think that just sounds good okay all right so it's about it's 1205 now
[2:03:07] um so I think probably we want to start wrapping up um how and someone you sure yeah yeah I think we kind of
[2:03:15] addressed most of the questions so that is good so I think we can wrap it up now
[2:03:21] okay okay okay great thank you everyone for attending this part two and thanks to Dr Amy hub for really nice presentation and
[2:03:31] taking time to answer all the questions and we'll share this question answer transcripts once we proofread uh
[2:03:38] internally in few days on our website
