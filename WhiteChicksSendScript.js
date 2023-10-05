async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
White Chicks Script
 
Where's Manny?



Tell him the ice cream man is here.



Freeze. Hammer time.



Can we get down to business?



You got the money?



Tell him.



He said that
he's not gonna give you one red cent...



until you tell him
what flavor the ice cream is.



Vanilla. That's what you ordered.



-Tell him.
-Okay.



lt's all about the Benjamins, baby!



Bring in the stuff.



-Arnold Schwarzenegger, funny man!
-He's funny like that!



There is your ice cream.



Tell him. l see coming. He say....



l tell him, l say Jesús.



He coming, and he say....



-Tell him.
-He say...



FBl. You're under arrest.



-He's going to run.
-No, he ain't.



You owe me $ .



Where are you going, big boy?



Goddamn. Now l'm going to bust your ass.



ls that all your big ass got?



-Enough.
-Kevin.



All right, you two over here. Right now.



l swear l'll shoot both of you.



Damn, Marcus, why you always
got to pick the biggest dude?



l don't know. l like a challenge.



See, what did l tell you?



We did it, right? Didn't l tell you?



-No help. No backup.
-You the man.



We'll get all the credit.
The biggest bust of our career.



 keys of pure....



-Vanilla ice cream?
-What?



My man! Where's the drugs?



l know nothing about drugs.



l sell ice cream. Strawberry. Vanilla.



Neapolitan, for example.



Tell Manny his ice cream delivery is here.



Never mind. Wrong store.



FBl. Freeze!



-Marcus?
-l'm good.



-They're moving.
-Let's go.



-Which one?
-l don't know.



-God.
-Damn.



l told you we should've called for backup.



You know the Chief's gonna kill us, right?



You know the Chief's gonna kill us, right?



Let me give you guys a little tip.



lf you're going to
operate outside the channels...



do the whole renegade cop thing...



you might want to make sure
that you get the right guy.



Chief, we almost had the guy.



Our intelligence was just a little off.



Wait a minute. lntelligence?



Look around you, Copeland.
There's nothing intelligent about this.



Now l'm tired of your escapades.
l want them to stop.



The last thing l need is
to be the laughingstock of the Bureau.



And furthermore, the--



Hold on. Hello? Baby, l can't talk.



The Chief is chewing my ass right now.
l got to call you back. Bye.



-Sorry, Chief.
-As l was saying--



Gordon here.



Yes, he is.



-lt's for you.
-Thank you.



-Baby, l'm still with the Chief.
-No respect.



No, he's really not happy now.



Okay, l got to go. Bye. Thanks, Chief.



You guys are.... Get this place cleaned up.



l expect to have a full report
on my desk tomorrow.



-Yes, sir.
-And in the meantime...



l'm checking with the Bureau
to see if they got any openings...



in lraq.



The Dynamic Duo strikes again.
Way to go, Baskin and Robbin.



Or is it Häag and Dazs?



Häag and Dazs. You wrote that?



That's good, l like that.



-Later, Häag.
-Adiós, Dazs.



-l hate those guys, dude.
-Oh, God.



All right.
Well, let's get this place cleaned up.



-All right.
-Okay, so, you do the floor.



Clean all the ice cream up
and l'll go warm the car up.



Okay. So much for a hot meal.



-Hey, baby.
-Don't ''hey, baby'' me.



l can't believe you have me
sitting here all night worried about you.



All night? Baby...



it's only :.



Look, after work, me and Kevin went
down to the bar and had a couple of drinks.



l know. l called the bar.
They said you left at :.



l checked MapQuest. lt only takes
six minutes to get there from here.



So, if you got somebody on the side,
you need to tell me.



Baby, listen to what you just say.



MapQuest said it takes six minutes
to get here. l got here in eight.



Which means there's two minutes
unaccounted for.



lf l was cheating on you, don't you think
l'd need more than two minutes?



You know what?
l ain't going to deal with this.



l'm tired, okay?
l had a long day at work. l got shot at.



See, that is exactly what l'm talking about.



We don't communicate.



-Okay, fine. You want to communicate?
-Yes.



Come on. Let's communicate. Okay?



Okay. Let's start with last week.



Last week.



You and l were supposed
to go shopping together. We get to the mall.



l buy this beautiful dress,
l get my hair done.



You don't say anything. l don't know,
maybe you just don't want to....



Did you hear me just now?



Tell me what l said.



l heard everything. You was communicating.



Don't play with me right now.
l am not in the mood.



l cannot believe you came home late
and then you start....



Marcus! You are falling asleep again.
l am talking to you.



l wasn't asleep, l was closing my eyes
and visualizing your words.



Oh, really? Visualizing?



Why don't you paint me a picture
of what l just said?



-Hold on.
-You know why?



Because you are
falling asleep again. Marcus!



We received this from Mr. Andrew Wilson,
CEO of Wilson Cruise Lines.



It was delivered to his home.
The girls in the photo are his daughters...



and heiresses to the Wilson fortune.



We believe
they are the kidnapper's next victims.



Mr. Wilson has given us permission
to shadow his daughters.



We're going to set up surveillance...



and if the kidnapper strikes...



this time we will be ready.



Now, the Wilson sisters will be flying
into JFK this morning.



So who's going to pick them up?



Obviously, everyone has read
the profile on the girls.



Still, somebody's got to do it.



l don't think this is a good idea.



l don't care. We deserve to be on this case
just as much as Gomez and Harper.



l know, but we don't want
to interrupt the man in a briefing.



Well, somebody got to stand up to him.



-Chief.
-What?



-Marcus has something he want to tell you.
-What?



Chief, we just want to know
if we could get on the case.



You're on.



The boys over at lntel seem to think
that the kidnapper's a guy...



named Ted Burton.



lt says Burton was a partner of Wilson's...



and some other associates
in some business venture that failed.



Says he spent time in the Federal pen
and lost his fortune.



Guy's been MlA since his release and those
dates coincide with the first kidnappings.



-What do you think?
-l think this babysitting gig sucks.



Dude, relax.



Look, man.
All we got to do is pick these chicks up...



drop their ass off in the Hamptons,
then we back in the Chief's good graces.



l didn't join the FBl to become a nanny.



l want to be on the street
where the action is.



Okay, Blackie Chan, and you'll get there.
Can we just do this first, please?



-All right.
-You didn't put dairy in this, did you?



-No.
-Because you know l'm lactose intolerant.



Last time, l barely made it to the bathroom.



Why would l want to disturb your stomach?



There goes your girls.



Come on, man. Let's do this.



-Hi, l'm Kevin Copeland. This is--
-We already gave to the United Negro Fund.



-Wait. Hold on.
-Excuse us.



We're actually here
to escort you ladies to the Hamptons.



The bags are on the plane.
Take Baby and clean out his bag.



He didn't have his colonic
and he like pooped everywhere.



-What's this?
-Baby got to ride in the car seat.



Where the hell am l supposed to sit?



This ain't right.



Man, you guys sure got a lot of bags
for a weekend.



-This isn't a weekend.
-lt's the weekend.



Labor Day in the Hamptons.
The last weekend of the social season.



Only the hottest people
are going to be there.



And only the hottest of the hottest
are going to make it onto the cover...



of Hamptons Magazine. And this is our year.



Open the window.
Baby likes a little fresh breeze.



l just hope the Vandergeld sisters'
private jet crashes on the way there.



-Oh, my God, Brittany!
-You were thinking it!



-l know, but you said it.
-l know.



You know Heather totally hates you
because you slept with her boyfriend.



My God. So what?
l sleep with everyone's boyfriend.



ls everybody all right?



My God! Your lip.



My God! Your nose.



Marcus, are you okay?



-l'm cool.
-Baby's in a wreck!



l can't believe...



you think we're going to go to the Hamptons
with my face looking like that.



lt's really not that bad.
Just get some makeup and cover it up.



Put makeup on this?



l am so fricking pissed.



My God, this is like the worst day of my life.



l went to go get my brows done...



and l told her to make me look like J-Lo.



And then that fricking Russian toad
made me look...



like Liza Minnelli or something.



Oh, my God! l'm going to have a B.F.



Wait. What's a B.F.?



She's going to have a bitch fit!



-You better get out of here.
-l am going to call your boss.



-You don't have to do that.
-No, l'll call the owner of the company.



Come on, just take it easy.
Look, we can work this out.



-l'm going to write a letter.
-No.



Please don't write a letter.
Look, just calm down.



You guys just stay here.
Stay here the whole weekend.



Do whatever you want. But whatever you do,
do not leave this room.



Don't leave this room, because if you do,
everyone's gonna see those hideous scars.



Scar?



-My God! Permanent damage.
-My life is over.



lf l lose this job with these good benefits,
Gina's gonna kill me.



-Well?
-They won't go.



-What do you mean, they won't go?
-They won't go.



Marcus, this weekend in the Hamptons
means everything for these girls.



They won't show up with a scratched-up
nose and a busted lip for nobody.



That's cool.



What are you doing?



l'm just going to kill myself before
the Chief does.



-Bye-bye, Kevin.
-Come on.



Don't do that. Stop being ridiculous.



l'm not being ridiculous. You heard the man.



One more screw-up, and we're through.



-l know, man.
-See? That's probably him right now.



Hey, what's up, Chief?



There's something me and Kevin
want to tell you.



Yeah, Chief? Hey.



Me and Marcus just wanted to thank you
for the opportunity, man.



No, we didn't.



Yeah, we really appreciate it.



They wanted to stop off
and get something to eat.



He's lying to--



Two, three hours max.



Trust me.



lf l don't have them there in three hours,
l'll cut them off and mail them to you myself.



-All right, take care. Bye.
-He lied, Chief.



Why did you do that? You know them girls
aren't going to be there.



They'll be there.



Hey, Josh.



How'd you like to be part of the team?



Where are the white women at?



Let's do this.



He's right. Make them bigger.



Chief. They're here.



Chief. They're here.



All right, the girls are yours.
Stick with them. Don't blow your cover.



Yes, sir.



-Are you sure this is going to work?
-Just trust me. Follow my lead.



What's up, money? You got a problem?
What you looking at my ass for?



No, yo, hold my poodle.



What's up? Y'all got a problem?
Y'all want some of this?



You want some of this, punk? What, boy?



-l'll take the both of you.
-Cut it out.



-He was looking at my ass like l'm a girl.
-You are a girl!



And you better start acting like one
or you're going to be an unemployed girl.



Damn. l'd sure like to cut that cake.



Here, yo, hold this!



Hey, you trying to look at my lumps?



l'll pull off my G-string and handle mine.



-l'll handle mine.
-Kevin, it's Gomez.



Welcome to the Royal Hamptons Hotel.



-The bags are in the car, José.
-The name is Gomez.



-Whatever.
-Yeah, great. Here. Take Baby.



Clean out his bag.
Poor thing just pooped everywhere.



And teach him how to say,
''Quiero Taco Bell.''



-Thanks a lot, Rico Suave. Grazie.
-Thanks, Julio.



Right away, ma'am.



Sweetie, you've got to slow up
with those Cosmos.



Brittany and Tiffany Wilson, checking in.



Sorry. They're new.



-Dr. Dorfman did an amazing job.
-They feel so real.



Hi. Yeah, l just...
l need a credit card, please.



And some lD, please.



Credit card? lD?



l'm so fricking pissed.



-Ma'am, l--
-First of all...



l go to Dr. Dorfman.
He totally messes up my nose job.



l ask him to make me
look like Gwyneth Paltrow.



l get off the surgery table
looking like freaking Shrek.



Then l get here, and Mr. Harper...



makes me feel like
l'm some dumb blonde with fake boobs...



going to a Hugh Hefner party.



No. l didn't mean to offend you.



-lt's just protocol.
-l'm going to have a B.F.



My God. She's going to have a bitch fit.



No. Don't have a B.F. now--



l want to speak to your supervisor.
Better yet, l'm going to write a letter.



-Miss, there's no reason to--
-You are in big trouble.



''Dear Mr...



''Royal Hampton.



''l am a white woman...



-''in America.''
-Ladies, is there a problem here?



-Yes.
-No.



There's no problem.



These are two of our VlP guests.



lssue them keys. lmmediately.



VlP. Learn your acronyms.



-What a sweetheart.
-Here you are. Enjoy your stay.



Has anyone ever told you
you look just like Denzel Washington?



Yes, actually l have heard it once or twice.



What a beautiful chocolate man.



Beautiful. God.



-That was close.
-Yeah.



-Are they waving at us?
-l don't know.



-What are we going to do?
-Just act friendly.



My God.



Well, don't act like you don't know us.



Karen, Lisa, Tori.



Oh, my God.



l haven't seen you in forever.



lt's only been a year.



Did you do something different
to your hair?



-No.
-You gain weight?



-No.
-l know! You just had a birthday.



-Yeah.
-Totally. Total fire sign. l knew it.



-l totally knew it.
-Wait a minute.



There is definitely...



something different about the two of you.



Collagen.



You little witch. How did you know?



Duh, it's totally obvious.
Your lips went from Cameron Diaz to Jay-Z.



You got taller, too.



We got our knees done.



You can do that?



-You should do that.
-Yes.



Well, it was really good
seeing you ladies. Bye.



Excuse me.
Where do you think you're going?



To go freshen up.



The Hamptons Magazine reception
just started, so let's hit it.



Hey, check it out.



Are those the Wilson sisters?



More like the Wilt Chamberlain sisters.
l never noticed how big they are.



But l'd still bone.



My God. There's Heath.



Dude, are you hitting Karen Googlestein,
the soap heiress, too?



How do you keep that shit dangling?



l keep telling her l'm going to break
up with my girl.



You better hope Heather doesn't find out.



She won't.



At least until l wrap up this big deal
with her father.



Hey, Mr. V.



And look, there they are.
The fen-phen twins.



They're hot.



What, are you blind?



That's Heather and Megan Vandergeld.



Your sworn enemies since you were like,
l don't know. Eight?



Did l say hot? l meant not.



-l totally hate them.
-Did you guys hear about Megan?



She got stopped by security at Saks
trying to pull a Winona.



God. Come on.



-This is going to be fun.
-Move.



Look who just flew in from the slums
of Beverly Hills.



lt's The Beverly Ho-billies.



-Squeeze me?
-No, you didn't.



l'm sorry, but we just saw your new video.



They had a screening
over at Saks Fifth Avenue...



in the security office.



A klept-ho-maniac.



Your mother shops at Saks.



What?



My God. You want to talk about mothers?



You want to talk about mothers.



lt's mother time. Okay.



Your mother's so dumb
she went to Dr. Dre for a Pap smear.



''Something's wrong, Dr. Dre.
My coochie's doing a beatbox.''



Yeah? Well, your mother is so stupid...



she exercises when she could just get...



liposuction or something.



Your mother's so old that her breast milk
is powdered. You breast-feed like this.



Your mother is so, like....



She's so....



Megan, you go.



Your mother is so stupid...



that she goes to Barneys Rooftop
Deck Restaurant for lunch...



and orders a niçoise salad and calls it
a ''ni-coise'' salad.



''Ni-coise'' salad, right?



Your mother's ass is so hairy...



it looks like Don King's about to pop out
and say, ''Only in America!''



Your mother's so stupid...



that she goes into Gucci
and she tries to buy, like, Fendi and stuff.



Megan, Heather. Come on now, girls.
ls this any way to speak to your guests?



Brittany and Tiffany Wilson.



l haven't seen you since you were smaller.



Yeah. Well, we're all grown up now.



Yeah, l can see that.



Ladies, l fully expect
to see you later at the White Party.



-l think it's gonna be the best one ever.
-We'll be there.



-Take care. Bye. Good seeing you again.
-Bye, Mr. V.



This isn't over yet.



This is a long weekend.
You better watch your back.



-Ladies.
-Whatever.



l can't believe you guys just did that
to the Vandergelds.



You know, they could take you
off the scene just like that.



-Yeah, but it was so cool, you guys.
-So cool.



lsn't that Denise Porter from NY News?



Yeah, l'm working on getting you
an interview with her.



Great for your image.



l think l'll go over there
and introduce myself.



-Do you think now's a good time?
-Actually, it's a perfect time.



-Wouldn't want to miss a photo op.
-Never that.



-See you later.
-Have fun.



-What's wrong? Did you just get cramps?
-Yeah.



-Do you need a tamp?
-Heating pad?



-Hors d'oeuvres?
-Thank you, Wolfgang Paco.



Would you give that to Baby? Thank you.



-Bye, Chico. Vamonos.
-Bon appétit.



l'll have one.



-Hi, my name is--
-Brittany Wilson, of course.



Yeah. How'd you know? Brittany Wilson.



Well, it's my job to know.



Your publicist, Tori, has been calling me
nonstop about setting up an interview.



lf l would've known you were so beautiful,
l probably would've called you myself.



Well, if l wasn't mistaken, l'd think
you were flirting with me, Miss Wilson.



Me? Flirting with you? A girl? Never.



Sorry, honey. Only beef.



-Boy, you're really strong, aren't you?
-lt's from all that protein.



My God. These are delicious.



You might want to slow down
on the cheese.



You mean, there's cheese,
as in dairy cheese?



Yeah. Unless you know another way
to make quiche.



-Ladies, l think l got to go to the bathroom.
-Good. We'll come with.



No, l can handle it myself.
Thank you, though.



Like we're going to let you go alone.



Time for touchups anyway.



Move, bitch.



My God, you guys.
Heath is here. What should l do?



l don't understand what you see in him.



He's an out-of-work actor
living in a share house.



And he drives a  Series BMW.



Tori, l really think that you need
to cut Heath a little bit of slack.



His aunt died three years ago
and he really needs new headshots.



He's just going through
a really rough time right now. Okay?



You okay?



Everything all right in there?



lt's fine. Shit.



Tiff, we're just going to
meet you outside. Okay?



Love you.



Man, it may be summertime
in the Hamptons...



but it is snowing up in here.



Tony, hand me my boots
because l'm about to go skiing.



-Great game last night, Latrell.
-That's what l do, baby.



Now that's what l'm talking about.



A white girl with a black girl's ass.



l'm taking that home to Mama.



Pardon me.



Santa must've come early this year...



because you were first on my Christmas list.



There it is, right there.



l want to know. Are you naughty or nice?



Sorry, l'm not interested.



-l'll take that as naughty.
-Naughty.



You know what they say:



''Once you go black,
you're going to need a wheelchair.''



-Okay, call me later.
-As l was saying....



Look, King Kong. Why don't you take you
and your  pickup lines...



climb the Empire State Building,
beat on your big old monkey chest...



and then jump off? Excuse me.



Hold up, hold on now. l'll get the--



-This is no joke, man.
-Get your hands off me, man.



She don't know it yet,
but that's wifey right there.



Hello, everybody. For just one second.



I'm Warren Vandergeld.
I'm sure most of you know me.



And I just want to remind you
that tonight's the night.



The Vandergeld Foundation's
annual charity auction.



So bring your checkbook...



dress to impress,
and we'll see you there. Have fun.



-So what are you going to wear?
-This?



You're so funny.



Ladies, you know what this means.



Shopping!



And now, the Number One
most requested song on WQQR....



-lt's our jam.
-This is our jam, ladies. Come on.



Ready? Five, six, seven, eight...



Making my way downtown
Walking fast



Faces pass
And I'm home bound



Staring blankly ahead
Just making my way



Making a way
Through the crowd



Take it, Tiff and Britt. This is your verse.



Into the sky



Do you think time
Would pass me by



'Cause you know I'd walk
A thousand miles



If I could
Just see you



Tonight



C-minus.



That's hot. Totally hot.



feel a nigga



Guys. l can't believe that you just said that.



Said what?



The ''N'' word.



-So? Nobody's around.
-Yeah.



 Cent and B.I.G. my nigga



Don't try to act like you don't feel a nigga



Biggie yo nigga,  yo nigga
Squeeze the trigga' leave a nigga fo' sho



Ladies, can l help you?



Yes, actually.
l need something for my friend.



Something that says,
''l'm not a whore but l'm not a virgin either.''



l've got just the thing. Come.



-What about you, Brittany?
-No, thank you, sweetie. l'm fine.



Good. You can help me. Come on.



-Me?
-Yeah, we're girls. That's what we do.



God.



Come on.



-Hello?
-Hi, baby.



What's up, baby?



l'm getting my hair done, and l was thinking
that we could go to the movies.



How's that sound?



-l'm back.
-Who is that?



You're never going to get that big old head
in this tiny hole.



-Here, let me help you.
-Hold on.



-l'll hold it open while you put it in.
-Okay.



-What is she holding?
-Push it.



-lt's almost in.
-What is almost in? Marcus.



Marcus Anthony Copeland ll,
you better answer me right now.



-lt's so tight.
-Tight?



The only thing's that's going to be tight
is my foot down your throat.



You better answer me!



lt's a perfect fit.



-l can't believe what l just heard.
-l told you.



l'm exhausted.



Gina. Damn. Hello? Baby?



What do you think?



That looks so sexy.



Are you kidding?



''Hi, l'm Cellulite Sally.
Look at my huge bedonkey.''



''And don't forget about me.
l'm Back Fat Betty.''



Now who could have said that?



Yeah, it's Tina the Talking Tummy.



l can't even wear a short skirt...



and a top without looking like a fat pig.



Calm down. l'll go see if there's something
else out there for you. Okay?



Do you think Heath will love....
Do you need help?



l think l need a bigger size.



Honey, you never need a bigger size.
Come here.



Let me show you a little trick.
Brace yourself.



Suck it in. Squeeze those cheeks, sister.



Suck it in. Come on. Work with me.



Don't give up on me.
You can do this. Suck it in.



Now that looks totally cute.



My God! Are you kidding?



''Hi, l'm Carnie Wilson before my
gastric bypass surgery.''



Well, what about this?
This goes with your skin tone.



Somebody throw Shamu back in the ocean!



Okay. Let me get you something else. Okay?



How's that?



l can't breathe.



Honey, this is just not going to work.
l'm sorry.



Well, of course not.
You're wearing the wrong underwear.



ls that better?



l can taste the leather.



Okay, you need a pair of hot shoes.
What size do you wear again?



-Fourteen.
-What?



Do you think you could bring us a size ?



-A what?
-A .



lt's an open-toed slide.



lt gives you two sizes in the front
and two in the back.



-What about these? This one's--
-You bitch! That's so terrible.



Let me go
and see if there's some help out there.



Some professional help.
You need professional help. Hang on.



-Okay.
-Dr. Phil!



Oprah. Somebody, help me.



Come on out, honey. Let's see.



lt is absolutely fabulous.
lf you don't buy it, l'm buying it for myself.



l don't know. Stand up straight.



Turn around.



Honey, just relax. Breathe.



You know what? Maybe a nice dress.



Okay. Who would you do?



Janet Reno or Rosie O'Donnell?



-What! Are you kidding me?
-And death is not an option.



l don't know. Rosie.



-You're a pig. That's disgusting.
-What are you talking about?



-Rosie's all right.
-Heads up. Here they are.



-Hold on. Who would you do?
-No time. We're on the job.



-He's got my gun and badge.
-Go get him!



Get in! Get in the car.



My God, l need a cigarette!



-Can you believe this?
-What do we do?



We follow them.
But we can't blow our cover.



-Give me back my bag.
-Oh, man.



l'll rip your head off.



Your ass is mine.



What is this girl, a track star?



You messed
with the wrong blonde today, pal.



-Holy Christ.
-Now l'm pissed.



l think she's bionic, dude.



Holy smokes.



-That was nice.
-Jeez, lady. All that for a bag?



lt's not just a bag. lt's Prada.



-lt was like a reality show.
-lt was so cool.



-Right behind you.
-Nice going, Tori.



Way to get us sat at the losers' table.
l thought you had it all hooked up.



Excuse me. l do have the hook-up.



Don't blame me.
Blame Little Miss Def Jam over here...



who had to go, ''Yo' mama''
on the Vandergelds.



We could be finished in this town.



-Somebody had to stand up to those guys.
-They're the ''it'' girls.



-That's the way it's always been.
-Whatever.



Honey, quick. Give me a pat.



No, a powder for my nose. Quick.



Thanks.



No, l'm just kidding.



l tried to call you,
but your number changed?



Yeah, l know. l changed it.



Anyway, so, l was just wondering if maybe...



later we could--



Hello. Where have you been all night?
l've been looking all over for you.



Why are you talking to her?



Clean it up, coke whore.



Do you have any more of that?



Don't hate me because you ain't me.



Can I have your attention, please?



Gentlemen, get out your wallets...



because you'll be bidding on a date...



with some of Hamptons'
most eligible bachelorettes.



First up, yours truly.



Who wants to start the bidding?



-$?
-$.



Okay. Do I hear $?



Well, looks like we're all
on the Vandergelds' D-list.



-ls this seat taken?
-Oh, no. Have a seat.



Can you believe this?
They're actually auctioning off women.



-Would you ever do anything like that?
-Well, it's for a good cause.



Besides, being wined and dined
by a rich guy might be nice.



l see, so you like rich guys?



lt might be a pleasant change
from all the losers that ask me out.



-$.
-That's good.



l see.



But I think that we can do better than that.



-$.
-Sold.



$. That is a new record.



That is very good.



Next to be auctioned is Tiffany Wilson.



-That's you.
-Me?



You better do something.



Excuse me, honey. l'll be right back.



Who wants to start the bidding?



$.



$. Do I hear $?



$.



$. Does anyone wish to go higher?



Yeah, l got $ right here.



$.



$.



Who said that?



$ to the dirty geezer in the back.



I'm sure no one will wish
to go higher than that...



so we can just be done with it now.



$.



$.



$! Going once, going twice--



$. Cash!



Fine.



Sold...



to the big black guy right there.



Step right up and claim your prize.



l don't want
to go on a date with Buff Daddy.



Come here, baby.



Dude, my feet are killing me.



And on top of that, that G-string
gave me diaper rash.



-How long we got to do this, man?
-Just a couple more days.



l don't have a couple of more days.
Do you know who my wife is?



Here, listen to this message.
She's losing her mind.



...with another woman
doing what I think you're doing!



You don't want to hear the rest.



By the end of the weekend,
we'll be heroes and all will be forgiven.



All right.



-You order room service?
-No.



Who is it?



Damn! These girls won't quit.



We'll be right there. We're coming. Hang on.



-Open up!
-Open.



One second.



We'll be right there. Hang on.



The ice cream's melting!



Hold tight, girls!
We're just shaving our feet, okay?



And braiding our vaginas.



What, did you guys forget?
lt's your turn to host the slumber party.



Okay, you guys. What does it mean...



when a guy is in a really bad relationship...



and it's really obvious
that he wants to be with you...



but he just can't seem to break up with
his girlfriend?



lt means you're a total booty call.



-My God! Brittany!
-Well, you were thinking it.



Well, you said it.



You know,
sometimes you sound just like a man.



So l've been told.



What she means to say, honey...



is maybe you're just making yourself
just a little bit too, like, available.



Come on, you guys.



Don't act like you haven't done it before.



You know how it is
when you really care about someone.



You call them all day long...



because you just wanna know
how their day is going...



and what they're thinking about
and if they're thinking about you.



You spend all day trying to find
the perfect outfit.



You even change your hairstyle
just so he'll take a second look.



But they never notice.



Sometimes l just wish
that they could trade places with us...



so that they would know how it feels.
You know?



-All done.
-Really?



My God! This is so cool.



You know something?



l think you might have been black
in a previous life.



Fo' shizzle, my nizzle.



All right, l got another one for you.
Carmen Electra or Pam Anderson?



Easy.



But they both got a yeast infection.



Now that's tough.



-l'm going to go with Pam Anderson.
-You're disgusting.



-What?
-They got a yeast infection.



Who would you choose?



Hey, Gomez. We got a couple of bogeys.



-No time.
-Oh, come on!



lt's Pam Anderson, like you care.



Run their faces. Let's go.



-Brittany Wilson?
-Yeah, that's me.



Let's get her.



-Put the blindfold on her!
-Damn, this girl's strong.



-Who do you work for?
-lntimate Fantasies!



My God. You need help?



What are you doing?
Those are the strippers, Raoul and Tito.



Strippers?



-l thought they were going to kidnap me.
-That's part of their routine.



Oh, my God! l am so sorry.



Hotel security! ls everything all right here?



Everything is fine.
Just a little case of PMS. That's all.



l'm just one big, emotional wreck.



Could you guys go
get me some Midol and a Snickers?



-Let's get out of here.
-My ass is fat.



This is Harper. lt's all clear.



Okay, ladies. Let's focus.
We have to find the perfect spot.



Skank alert.



My God, girls.
l totally forgot my suntan lotion.



l'm gonna get some suntan lotion.
l'll be right back.



Hey, Russ.



Hey, bro. Go long. l got a plan. Go.



Hey, yo! You do that again,
l'm going to bust....



l'll bust out in tears.



-lnbreds!
-You're a jerk.



My bad, sweetheart. Over here.
Don't hurt yourself.



Don't worry, l won't.



Sorry. Better lay off the spinach.



Tony. Let's go hunting.



What a beautiful, sunny day.



Oh, my God. What happened to the sun?



Easy, white chocolate.



l wouldn't want you to melt.



Yeah. Hasta la vista, Schwarzenegro. Bye.



Hey, kids! You guys want to make $?



Yeah! Sure!



Okay, here's what l want you to do.



Yeah, l'll take the usual.
And put it on my tab.



Hey, Latrell Spencer!
Could we have your autograph?



-Sure, little buddy.
-Thanks. You're the greatest.



Hey, that's what l do, baby.



-Sweet!
-Nice!



-Hey, stay in school.
-Okay, we will!



-Wow! You must be pretty good.
-l'm all right.



Sometimes l feel l should be paying them
to take my autograph.



l'm sorry, l didn't even get your name.



Latrell. Latrell Spencer. And you are?



-Denise Porter.
-Denise. Denise Porter.



You know, you look so familiar.
l feel like l've seen you somewhere.



No. l play pro ball.
Maybe you've seen one of my games.



No. But l mean if l did, l'm sure
l would've definitely remembered you.



Okay, well. Look, Denise...



l don't mean to be too forward or anything...



but l'm here in town,
checking out some real estate, and--



Oh, whereabouts?



-You know, up around over there.
-ln Montauk?



-More like around--
-East Hampton.



Just all over the place. lt's one big blur.



One big, business blur.



l kind of want to
get away from all that business and...



hang out with somebody
and have a real conversation.



So, l was wondering if you're not too busy...



-maybe we can hang out?
-Yeah, sure.



-Really? All right. Cool!
-Yeah.



So, l'll pick you up at about....



You know,
the jet should be here about :...



and the limo will take about a half-hour.
About :. ls that good?



-Yeah, : sounds great.
-: sounds good? All right.



-Goodbye.
-Take care.



Hey, where's our $?



All right, calm down.



Here you go. $. $. each.



-You promised to give us $ each.
-Stay in school.



Cheapo.



l am not making excuses.
l refuse to believe it.



l am not making excuses.
l refuse to believe it.



-Really?
-l don't want to believe Marcus is cheating.



l don't wanna believe
Michael Jackson keeps carving up his nose.



Excuse me. Your card has been declined
for insufficient funds.



The rep's on the line.



Yes, this is Mrs. Copeland.



$ dress?
And where did l buy this dress?



The Hamptons!



Yes, l remember.



Thank you.



lt is on.



l don't see
why l got to go out with Mandingo.



'Cause if you don't, you'll blow our cover.



What you gonna be doing?



Me? l'm going to follow up on a lead.



You're going on a date.



She's a reporter.



Who else knows more
about the Hamptons people than her?



All right, so l like the girl. You're the one
always telling me to settle down.



And you should.



But that don't mean
l got to go with Buffy the White Girl Slayer.



All right. Look. Just go to dinner. Okay?



l'm only gonna be a couple of hours
and l'll meet you back at the club.



-You promise?
-l promise?



l'm serious, dude. Promise.



l do. l'm serious. All right.



And if you need to use protection...



tell Latrell there's an extra shower curtain
in the bathroom.



Hop in.



Take your time. Watch those marshmallows.



Ease on in there, now.



l won't bite unless you ask me to.



You are so beautiful.



Good boy, Baby.



How about we listen to a little bit of music?



What the....



How did you know? l love this song!



Making my way downtown
Walking fast



Faces pass
And I'm home bound



And I need you



And I miss you



And now I wonder



If I could fall
Into the sky



Do you think time
Would pass me by



'Cause you know I'd walk
A thousand miles



If I could
Just see you



Tonight



-Good evening, madam. Welcome to Bella.
-Thank you.



What are you doing here?



l came to borrow the car
and the keys to his house.



Are you crazy? lf you crash this man's car,
he will kill you.



l won't crash it. Look. Just call me
before you leave. l'll bring it back.



Then you meet me back at the club.



No, my brother. You got to get your own.



Help me.



Thank you.



May l bring you something from the bar?



Let me have
a bottle of your best champagne.



-And bring us some oysters.
-Very good, sir.



l have to say, l was so....



l was happy
when l bought you at the auction.



l mean, it's very rare
l have the opportunity to...



bask in the ambience
of such a classy lady such as yourself.



Oh, my God!



-l am humbled by your...
-This athlete's foot is just killing me.



-...beautiful nature.
-That smell. That's infection.



-The most high-classness of your....
-My God. ls that a hangnail?



Captivated by your beauty.



Your bountiful curves remind me
of the hills in ltaly.



l'm sorry. You were saying?



-That's perfect. Thank you.
-Are you ready to order?



Yes, l'll have the chicken. White meat only.



And for the lady, perhaps a salad?



Perhaps not.
l'll have the steak, smothered in onions.



A rack of ribs. Pasta with extra garlic.



French fries with lots of vinegar and a
side of onion rings with lots of sauerkraut.



Have you ever had oysters?



Did you know oysters are an aphrodisiac?



Sorry.



My tongue's kind of big.



lt'll open. Hold it!



l'll push. Yeah. See, that did it there.



Just a little turn.



There's so many keys involved...



sometimes it's hard to figure out
what's what.



lt's Mei Ling.



What are you doing here? Girl, it's late!



Come on, now. You have to go home.
Get some rest.



You cannot stay. There are laws
against this kind of workmanship.



They'll think
l'm running some kind of sweatshop.



That girl does not know when to go home.



l'm telling you, she will stay here
and just clean forever.



This is really nice.



Yeah, this is dope.



Dope summer home l picked, boy.



Who's that?



The big, buff, bald dude with the fur?



That's my trainer.



You have your trainer on your wall?



Yes, well, for inspiration.
l want to look like that one day and...



l come in every morning
and l look at the.... You ever see Titanic?



-No, l haven't seen it.
-Me, either. You want something to drink?



-Yeah, sure. A glass of wine would be nice.
-Wine.



Okay, so l'll get you a glass of wine and....



That'd be in the kitchen, right?



l don't know. This is your house, Latrell.



Who? Oh, me! Latrell.



That's right. l'm Latrell. That's right.



l'm going to get you
a bottle of my wine in my house.



It's my house and I live here



Damn, little lady!



You sure can put it away.



You're so funny.



Voilà!



You have a dog.



No, l don't have no damn dog.



Well, then whose dog is that?



Shit.



That's not no dog.



That's family.



Hey, cousin.



Come here, boy.



He looks really mad! Are you okay?



Yeah, l'm fine. He just misses me, that's all.



Okay, boy, playtime's over. Let me up!



-You want me to go for help?
-No, we're just having fun.



You sure are playful today.



You want to go for a walk, boy?



l'll be right back!



You know what?
Forget this! l'm out of here!



l don't want to go on a date with a guy
and his dog is biting him and....



What's he doing now? What's that?



Don't pay him no mind.



He's just going to do that
until he falls asleep.



Now, where were we? Wine!



You know,
l like a woman with a little extra something.



A little cushion for the pushing.



l'd really love for you
to come to one of my games.



No, thank you. l've seen you play.
Not impressed.



Excuse me? l'm the highest scoring forward
in the league!



But all that talent? Totally overshadowed by
nothing but scandals and pure laziness.



Come on! You're shooting under %
from the free throw line, okay?



Your turnover ratio, abysmal.



And on top of that, you can't shoot
three-pointers to save your life. So...



squeeze me.



No one's ever cared like that before.



Come here, baby!



Oopsie! l had a poopsie.



Girl, we're going to get along just fine.



Back at you!



-Bask in the ambience!
-l'm going to be sick.



So, no. l jump over the fence, fall.
l scrape my knee.



-Get out of here.
-No, seriously, listen.



l scrape my knee. l get chased by the cops
and l spend the night in jail.



That's insane. You did all that
just to find J-Lo and Ben's hideaway?



l can't help it. You know,
investigative journalism is my passion.



So how'd you end up
writing puff pieces for the local news?



Unfortunately, l made some enemies...



and ended up getting fired from my last job.



What happened?



Believe me,
you don't want to know about that.



Look, l spent all night talking about myself.



Sometimes it's good for a man
to just sit back and listen.



Well, since you put it that way.



l did this piece on Warren Vandergeld.



Him and his partners tried to swindle a guy.



You talking about Ted Burton?



Yeah, how did you know that?



lt was in the paper. l read about it.



But what they didn't report in the paper...



was that Burton was  times smarter
than all of them.



He embezzled millions
and stashed it in an offshore account.



When Vandergeld heard the story
was going to break...



he didn't want to be embarrassed.



Well, there goes my job.



You know, you're a good listener.



lt seems like you have the whole package.



Man!



-Hello?
-Kev, you got to go.



-What? Now?
-Yeah, now. We're on our way.



Can't you stall him for a little while?



Look, this man sang to me.
He tried to kiss me and on top of that...



he been farting for the last  minutes.



All right, l'll be there in a minute. Bye.



-Cottontail!
-l'm coming, nigger!



Gomez, what the hell are we looking for?



l don't know. Something just isn't right
about these girls.



l'm gonna check the bathroom.



Find anything?



No. Not yet.



You won't believe what l....
What the hell are you doing?



Sniffing chicks' underwear, man.
What is the big....



lt's.... What?



They're guys, aren't they?



You really are disgusting.



-Latrell, my man! What's going on, brother?
-What's up, man?



-Two apple martinis.
-You hitting that, bro?



-This is a tough one to crack.
-Tiffany Wilson?



She puts the ''E'' in easy.



Here. Drop a couple of these babies
in her drink, man.



Are you sure this will work?



Man, l just took two of them,
and l'm telling you...



l'm boinking someone tonight, you know?



Excuse me.



That's for you, my little Miracle Whip.



You need to loosen up. There you go.



That's for you.



-Oh, my God! ls that Britney Spears?
-Where?



Right over there. Forget it, she just left.



Oops, she did it again.



-Let's drink up.
-Let's do it.



To the last drop.



That's good. You want to dance?



You know, that's a great idea.
Here, hold Baby. Let's go, girls.



l found out some interesting information.
Ted Burton turned the tables on Vandergeld.



Tucked away $ million.



Been living the high life
ever since he got out of prison.



There goes our motive.



Those skanks think they're hot?



Let's show them what sexy really is.



They want to battle. Let's go, girls.



You girls want some of this?



Bring it on, sisters!



Okay, let's do it!



Five, six, seven, eight.



Come on.



Hold on.



l know you hookers
don't think this is over with.



Let's kick it old school.



They suck!



Oh, my God!



We won!



Come on, let's go.



Get out of my way! Move it!



l need a drink.



Hey, Latrell, my man.



So did it work, man?



l don't know.



But l got to dance.



l got to hit this.



Hold the dog.



Let it out.



Let it out.



Oh, yeah. Now it's out.



l paid thousands of dollars on this outfit...



and do you think he even noticed?



lt's going to be okay.



Little Miss Vandergeld walks in...



and he just forgets all about me.



Okay, let it out.



l wonder...



if he would think she was so hot...



if he knew that she is broke.



Vandergeld's broke?



We mustn't talk of such things.



No, we won't.



But, yes, they're broke.



My father even had to
loan her father money...



just so that they could keep their house.



They just paid us back.



-You guys, l love you guys.
-We love you, too.



l love you so much!



Thank you.



Can we get you some gum
or a mint or something?



Hey, little girl.



Really? l love you, too.



What the hell are you doing? Give me her!



Sicko. Where's Latrell?



Dance floor.



Good morning, snowflake.



Oh, my God. Brittany!



-What?
-We're on page six.



-No.
-Yeah.



Look. ''Wilson sisters rock Hamptons.''



-Wilsons rock!
-We rocked!



Wait. We weren't in the Hamptons
this weekend.



No! We've been cloned!



He's got to be around here somewhere.



Girl, wait a minute.
lsn't that Marcus right there?



-That's him, all right. Old lying dog!
-Caught you.



That sounds like Gina.



-Don't answer it. She'll go away.
-No, she won't.



l'm not going anywhere
until you open this door!



-l told you! What am l going to do?
-Just get rid of her.



l'll get rid of her. You hide the stuff.



-l'm not playing with you!
-Coming, baby!



What is all that noise?



Nothing! Okay, baby, l'm coming!



l'm coming. Hide.



Hey, baby! Hi, boo-boo.



-Nice room you got, Marcus.
-Hey, baby, what you doing here?



-l could ask you the same question.
-Me?



l'm on assignment.



Are you wearing lipstick?



No. That's Kool-Aid. You want some?



You know, it's filled with lots of
vitamin C and riboflavin.



ls that a bra?



No, this?



This is the new holsters
they gave us at work.



They're government issue.
You can put two guns in there and just....



''Freeze, FBl!''



-l know somebody's in here.
-Baby, nobody's in here.



See? Nobody's in here.



-Check under the bed--
-What do you mean, ''Check under the bed''?



-l heard somebody on the phone.
-Check under the bed!



-That's where everybody hides! Check it!
-Marcus! Nobody can fit!



See, nobody here, right? Nobody there.



-l'll look in the bathroom.
-Wait! No! Don't check the bathroom!



You don't want me to check the bathroom!



See? Nothing in the bathroom.
Nobody in the room. See?



l told you no one was here. See?



You know, baby, this gotta stop!



-We can't have love if we don't have trust.
-l know, but look.



l was at the restaurant and the card
wouldn't go through--



Listen. lf we don't have trust,
we don't have nothing.



This is not about trust. This is about--



There she is, right there!



Now, baby. l can explain.



-l knew it.
-Baby, it's not what you think.



-Baby, it's not what you think.
-Don't you even say nothing to me!



l can explain. Baby, it's not what you think.



He's a man!



You're sick!



We have to find them and stop them
before they execute their evil plan.



We have to find them and stop them
before they execute their evil plan.



-Wait, what do they look like?
-Duh, us!



Afternoon, ladies.



The Chief would like
to have a word with you.



My God, Tiffany. They're the Men in Black.



Come on.



-Easy, Ponch and Jon. My hair!
-Let's move it along, pal.



-Wait a minute!
-Let's go!



Chief, we just got confirmation
that Burton's arrived at JFK.



l want him trailed. Give him plenty of room.
l don't want anyone jumping the gun.



l want to get this guy red-handed.



-Get your hands off of me!
-Let's go.



-Hey, easy!
-Right this way, girls.



What the hell you guys doing
with the Wilson sisters?



-Chief, these aren't the Wilson sisters.
-No, sir.



Chief, check this out.



My God! What are you doing?



-That's on there pretty good.
-Let her go.



That's nothing, Chief.



How about....



-Those are nice.
-That's enough!



l don't know how he did that...



but you can't fake these.



My God! Look who's here.
lt's that beautiful--



Save it!



Because of you, l had to suspend
two of my best agents!



-Chief, l can explain.
-l don't want to hear it!



You're just lucky we caught Burton
before he could strike.



But Burton is not our guy!



Let me guess: Women's intuition?



You're both fired.



Turn in your guns and your badges.
This operation is over!



-Come on, Chief! You can't fire us.
-l just did.



Forget him, Marcus. We can do this ourself.



-Look, all we got to do is--
-Wait.



''We''? Kevin, this ain't about ''we.''



lt's never been. lt's about you.



You come up with some stupid idea
and l'm dumb enough to go along with it.



And look where it's gotten me, Kevin.



l just lost my wife and my job
because of you.



So don't tell me about ''we'' no more,
all right?



They bought it. The FBl is packing up.



They'll be out of our hair in a couple hours.



We could make the grab tonight.



You sure you and your friend
can get the job done?



Would l let you down, Mr. V?



-Hey, man. l just want to say sorry.
-Forget about it, dude.



No. You're right. You're absolutely right.
l've been selfish.



l'm always dragging you into everything.
l never even asked what you want to do.



l don't know, there's something about
always having you around, that just...



makes me want to step up my game.



l guess it's because l always know
you're gonna have my back.



Hello?



Thanks.



-Who was that?
-That was Josh.



Turns out that Vandergeld's prints
was all over the ransom note.



-What are you doing?
-Calling the Chief.



No, you ain't! You said we could do this
on our own, right?



What about backup?



l got you, you got me.
That's all the backup we need.



Triple T-K-A.



Time to totally kick ass!



Three generations at the Bureau
and l'm the first to get fired.



My dad is going to kill me!



Yeah? What? Who?



-Copeland!
-Copeland, you dick!



You've got a lot of nerve, calling.



Where?



-You better not be wrong about this.
-What?



-We might be getting our jobs back.
-What are you talking about?



-We gotta go.
-What do you mean, go?



How about this?
RuPaul or Whoopi Goldberg?



-l told you, l'm not playing your games.
-Come on!



-Any sign of Vandergeld?
-l don't see him.



All right, keep an eye out for him.



lf it's going down,
it's going to go down here.



Thank God! There you are! l did it.



-You did what?
-l got you into the fashion show!



Brittany, did you hear that?
We're in the fashion show.



Not if we don't get moving.
Come on, let's go!



-Get the lead out, ladies.
-l mean, it's like you forgot.



-You mean the Wilson sisters are in?
-And we're out?



l'm sorry. That's just the way it is.
They're hot, you're not! So deal with it.



-You! Straighten up that blouse, now!
-That's impossible!



We've been on that catwalk every summer
for six years straight!



Let's just cut to the chase.



Who do we have to sleep with
for us to get in the show?



Honey, you're so
barking up the wrong tree right now. Really!



lf you nail this, you're a shoo-in
for the cover of Hamptons.



Darlings! Where have you been?



Megan! Don't!



This is unacceptable.



They just messed with the wrong girls!



l've been looking everywhere for you.



Can we get the Wilson sisters
their outfits now, please? Go.



-Can we talk?
-Of course.



You were incredible at the nightclub
last night.



-Thank you. Thanks.
-lncredible.



And Heather will be leaving after the party
tonight, and l was thinking...



maybe you could come by around :?



Make that : a.m.



You know what?



l don't think so.



Excuse me?



You think l'm just a booty call.



Well, l'm not.



l deserve better than that.



l'm tired of being your doormat.



Honey...



what makes you think you're that special?



-Bastard.
-Excuse me.



Asswipe!



-You're going to regret that.
-l'm so scared.



Oh, my God! Tiffany!



-Thank you so much, honey.
-l am so proud of you.



Thanks. l just wish l didn't feel so crappy.



Honey.



Sometimes a man can't see
when he has someone so special...



sitting right in front of him.



Are you, like, a lesbian?



-l better go get changed.
-Okay.



Ladies and gentlemen,
this evening we are proud to present...



the fall couture line, Aubrey Allure.
Please take your seats.



-Excuse me?
-You're not on the list.



lnvitation, my ass!
They don't know how we do it.



-Let's just blend.
-All right.



Go! Get going! Move it!



Didn't we just have this conversation?



Can we get these fantastic supermodels...



-back into their dressing rooms?
-l can't believe it!



-They changed that quick!
-Amazing!



These ought to get the critics' attention.



Second changes, everybody! Go! Now!



This'll be a nice little treat.



My God! What's happening?



That's not mine!



Let's get out of here!



l'm sorry!



Just give me your hand. lt'll be okay.



l'm so sorry. Oh!



Come here! l got you!



Here we go. Up!



-My God!
-l hope she's okay.



l'm ruined.



Looks like some people just don't know
when to quit. Come on, girls.



-Help me.
-l got you.



Karen, what are you doing?



Look, someone has got to give those girls
a taste of their own medicine.



So revolutionary! lt's so bold and so....



So brilliant!



Everybody, they're imposters!



Hit the lights.



Where's Brittany?



Where are you?



Get down!



l told you you were going to regret it.



You hit like a bitch! Come on.



You run and l'll shoot you. Come on.



-My turn.
-Mama?



Girl, we going to need some backup.



Girl, call NayNay and LaQuanda.



Tell them to bring the Vaseline
and the straight razors.



These bitches are on some other shit!



What's going on?



-Don't touch my dress!
-Vandergeld's got Tiffany!



What? No one messes with my queen!



Marcus! Are you okay?



-No.
-What's wrong?



These damn G-strings are killing me!



-Freeze!
-FBl.



You guys take care of them.
We're going after Vandergeld.



Copeland! You're going to need this.



Come on, let's go.



FBl! Freeze!



Daddy, what are you doing?



Why don't you take your mother
and your sister and go on home?



Daddy, why are you doing this?



Daddy didn't tell you? He's broke.



What do you mean, broke?



Like Martha Stewart broke
or MC Hammer broke?



-MC Hammer broke!
-No!



l've been funneling money out of the charity
into a private account, just to get us by!



Are you filming this?



l'll give you something to shoot!



-Get out of my way!
-l can't do that.



Drop it!



l got you, man. Man, we'll get that stain out.
Don't even worry.



Don't move!



Warren Vandergeld, you are under arrest!



l just want to tell you, l appreciate
what you did. That was real brave of you.



l had no choice. l couldn't let them take
my one true love away.



Hey, dude. l'm not what you think l am.



Baby, we all got secrets. That's okay.



Are you telling me that you are not....



-Yeah. l'm not a woman.
-White?



The deception! The betrayal, man!
You deceived me!



Calm down. l'm an FBl agent.
l was uncovering a--



Negro, please!



Didn't somebody tell you
this was an all-white party?



Someone get this jigaboo away from me!



Are you okay?



Yes, l'm fine. Thank you.



So, do l get to see my knight
in shining armor?



-Well....
-Get a leg!



Get off me!



What do you mean?
l'm going to let you have it!



-You ain't never met nobody like me!
-lt's me!



You don't know who you messing with!
My name's Gina!



lt's me.



This is some Jerry Springer shit!



Once again, you guys managed to do
everything l told you not to do.



You caused over $ worth of damage.



Two people were shot.



But at least you got the right guy.



-Good work.
-Thanks a lot, Chief.



But we couldn't have done it
without Gomez and Harper.



All right,
l'll see you all in the office tomorrow.



Good work, guys.



Who will be featured
on the cover of Hamptons Magazine?



l have to take care of some business.



See you guys on Monday.



So, who do you think wore those panties
you were sniffing?



Kevin or Marcus?



-Gomez, l told you. l was looking for DNA.
-Oh, yeah.



What are you laughing at, ''Denzel''?



''Oh, what a beautiful chocolate man!''



You guys got some work to do?



l'm Denise Porter. Good night.



l'm Kevin Copeland. l'm an FBl agent.



l make $ a year after taxes.



l don't drive a Bentley
and l don't have a house on a hill.



But l'd really like to take you out.



Are you kidding me? Any man...



who would jump in front of a bullet for me...



can definitely take me on a date.



-Come on, girl, let's go.
-Wait, could l just please--



-l have nothing more to say to you.
-l know. Just listen to me, please.



Gina, l lied to you.



l've hid things from you.



But l have never cheated on you.
But l am guilty.



l'm guilty of paying more attention
to my job than l do my wife.



l'm guilty of not appreciating
all the little things you do for me.



Like getting your hair done.



Wearing that sweet-smelling Chanel
cologne l love so much.



But my biggest crime is that
l didn't tell you l loved you every single day.



-You're not going to let him off that easy.
-Will you shut up?



l love you.



A wheelchair?



Yes, but the feeling will come back,
l promise.



Making my way downtown
Walking fast



Faces pass
And I'm home bound



Backup, Tony.



Hey, girls.



So you guys were pretending to be them
the entire time?



Yes, we were.
But we was only doing our job.



l hope you guys aren't too pissed off at us.



We're so bummed!



We liked Brittany and Tiffany...



so much more when you were them.



So much more!



So l guess this means
we won't be hanging out any more?



Don't say that. Of course, we will hang out.



Oh, yeah. We'll all get together
and we're gonna go...



shopping!

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
