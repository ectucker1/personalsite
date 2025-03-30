---
title: 10 Years of Game Jams; 28 Games
date: 2025-03-30
permalink: "blog/{{ date | permalinkDate }}/{{ page.fileSlug }}/"
tags: article
tagline: Ludum Dare 57 marks 10 years since I first competed in a game jam. What have I made in that time?
layout: article
---

[Ludum Dare 57](https://ldjam.com/) is this weekend!
That marks 10 years since I first competed in a game jam during Ludum Dare 32 in April of 2015. (Freshman year of High School for me!)

Since first trying out Ludum Dare, I've been hooked - I've competed in 2-3 game jams every year since.
I've worked alone and with teams as large as 7.
I've collaborated with 12 different artists, musicians, programmers, and general game designers.

I'd like to especially mention my good friends Lex, who has competed in 20 of these with me doing a hodgepodge of level design, programming, and art, as well as Ben, who has composed music for 16 of these games.

That's left me with a long trail of games to reflect on, so let's get into them!
I'll give them all a screenshot (or GIF if I have one), an elevator pitch, and a few interesting tidbits about their developmet.
Whatever comes to mind when I think about them.

## [Quest for the Golden Spork](https://web.archive.org/web/20170912033618/http://ludumdare.com/compo/ludum-dare-32/?action=preview&uid=50639)

- Jam: Ludum Dare 32
- Date: April 2015
- Theme: An Unconventional Weapon

{% relImage, "quest-for-the-golden-spork.png", "Screenshot of Random Bullshit Go. A man in a blue coat holding a spork approaches a meatball with legs." %}

"An action game where you must take on the cultists of the church of the Flying Spaghetti Monster."

The one that started them all!

I gathered three friends in my parent's basement for the weekend and we made plans.
There would be so many weapons, so many levels.
I had done _a little_ game programming before but nothing like this.
Nothing with like tilemaps, physics, combat, enemy AI, that sort of thing.
How hard could it be?

Predictably, we had to cut a lot of plans.
Most of the plans.
But we made a game!
It mostly worked!

And also the artwork for the boss battle is _awesome_.

Because of this game, I usually use "Team Spaghetti" when asked for a team name and working with anyone else who contributed to it.

## [Dis-o-rder](https://web.archive.org/web/20170911063925/http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=50639)

- Jam: Ludum Dare 33
- Date: August 2015
- Theme: You Are the Monster

{% relImage, "dis-o-rder.png", "Screenshot of Dis-o-rder. A man in a gray coat and hat a faces a pair of dead bodies in a parking lot." %}

"Play as detective Pocket investigate a series of related murders."

This detective game is clunky, the clues are hard to parse, and it has very few decision points.
And the twist ending is the theme of the jam.
Don't play this one.

## [Jungle Climb](https://web.archive.org/web/20170910230013/http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=50639)

- Jam: Ludum Dare 34
- Date: December 2015
- Theme: Two Button Controls, Growing

(Can't seem to find a screenshot of this one around anywhere.)

"A pretty generic endless climber."

I made this game on my grandma's computer because my parents were out of town and dropped me off there for the weekend.
That's why it's like this.

## [AmeriMorph](https://web.archive.org/web/20170909221437/http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=50639)

- Jam: Ludum Dare 35
- Date: April 2016
- Theme: Shapeshift

{% relImage, "amerimorph.png", "Screenshot of Amerimorph. A man with an American flag cape shoots bullets at his robotic clone." %}

"A platformer where you shapeshift into the most American of animals to fight your robot clones."

Somehow, this still has the most complicated cutscene of any game I've made.

There's a fascinating bug I never figured out where bullets _usually_ didn't damage the player, and _usually_ bounced you into the air instead.

It was also originally supposed to end with a boss battle against Donald Trump in a mech suit, which we unfortunately ran out of time to implement.
Really didn't think that throwaway joke would still be relevant 9 years later.

## [Runes of the Ancients](https://web.archive.org/web/20170909185412/http://ludumdare.com/compo/ludum-dare-36/?action=preview&uid=50639)

- Jam: Ludum Dare 36
- Date: August 2016
- Theme: Ancient Technology

{% relImage, "runes-of-the-ancients.jpg", "Screenshot of Runes of the Ancients. Arrows rain down on an approaching wave of giants, moles, and zombies." %}

"A tower defense game except you're the tower."

Runes and ruins are pronounced the same way.

This was my first game made with my own game framework, [cobblestone](https://pub.dev/packages/cobblestone).
I made it so we could put these games in-browser (a big boon for getting reviewers for jam games!) without learning JavaScript.
The problem with a self-made game framework though, is that sometimes it's broken.
That was definitely the case here; I badly misunderstood the vector math library I was using so the arrow hitboxes are extremely long and rapidly spinning around the arrows.
But I changed the collision checking code so that they had to overlap for 2 frames before doing damage so they still  _kind of_ work.

## [The Core](https://ldjam.com/events/ludum-dare/38/the-core)

- Jam: Ludum Dare 38
- Date: April 2017
- Theme: A Small World

{% relImage, "the-core.png", "Screenshot of The Core. A red ball sits in a grid of gray tiles." %}

"A puzzle game about excavating an entire planet by bouncing a ball around."

The slickest thing about this game is the level select screen.
It rotates around the planet in a pleasing way.

The second slickest thing about this game is that the movement function (which handles all the puzzle mechanics) is recursive.
It calls itself with a different travel direction if the ball has to make a turn.

## [The Tertielemental Wizard](https://ldjam.com/events/ludum-dare/39/the-tertielemental-wizard-1)

- Jam: Ludum Dare 39
- Date: July 2017
- Theme: Running out of Power

{% relImage, "the-tertielemental-wizard.png", "Screenshot of The Tertielemental Wizard. A wizard faces a frozen skeleton in an ice cave." %}

"A game where you must use a highly limited amount of magic power to defeat waves of enemies."

I am weirdly non-opinionated about this one.

## [Submerge](https://ldjam.com/events/ludum-dare/41/submerge)

- Jam: Ludum Dare 41
- Date: April 2018
- Theme: Combine 2 Incompatible Genres

{% relImage, "submerge.png", "Screenshot of Submerge. A set of cards prompt the player to choose which sea creature to fight next." %}

"An action game where you pick your next encounter from a set of cards."

We got to bring in some real visual artist friends for this one!
Can you tell?

History has shown that "Card" and "Roguelike" are not so incompatible of genres.

## [Castle Custodian](https://ldjam.com/events/ludum-dare/42/castle-custodian)

- Jam: Ludum Dare 42
- Date: August 2018
- Theme: Running Out of Space

{% relImage, "castle-custodian.png", "Screenshot of Castle Custodian. A figure in a cloak huddles in the corner against a crowd of floating knives and candlesticks." %}

"An bullet-hell in a haunted manor where any missed shots cause the walls to collapse."

I still have the exact number of shots needed to take down each of these enemies memorized.

## [Library of Madness](https://ldjam.com/events/ludum-dare/44/library-of-madness)

- Jam: Ludum Dare 44
- Date: April 2019
- Theme: Your Life is Currency

{% relImage, "library-of-madness.png", "Screenshot of Library of Madness. The player reaches up to the next ledge in this oddly-shaped library." %}

I went with the Tile Based (Pure) method for implementing platformer mechanics in this, as described in the classic [Guide to Implementing 2D Platformers](http://higherorderfun.com/blog/2012/05/20/the-guide-to-implementing-2d-platformers/).
Most reviewers found that annoying, so I'd recommend against it unless you're really targeting the hardcore Flashback fans.

The dynamic music as sanity changes was a really neat thing to get working though.

## [SkateBot: Replication](https://ect.itch.io/skatebot-replication)

- Jam: GAMES MADE QUICK??? III-2
- Date: July 2019

{% relImage, "skate-bot-replication.jpg", "Screenshot of SkateBot: Replication. A robot in a roller skate zooms past a suburban home." %}

"A platformer where you play as a robot in a roller skate collecting all the parts needed to build your offspring."

This game jam runs in parallel with Summer Games Done Quick.
I didn't have any ideas, so I just copied the movement mechanics of the first speedrun I watched, that being Spyro.
I think that inspiration served me well!

This was also my first jam doing art myself and I think it turned out pretty cute!
A robot in a roller skate is a solid character concept, if I do say so myself.

## [W RGB CMY K?](https://ect.itch.io/w-rgb-cmy-k)

- Jam: GMTK Game Jam 2019
- Date: August 2019
- Placing: #15 in Adherence to Theme

{% relImage, "w-rgb-cmy-k.png", "Screenshot of W RGB CMY K?. There is a single red square on a black background." %}

"A game played in a single pixel."

If I say anything about this game it'll defeat its purpose.

## [You Are Nothing](https://ldjam.com/events/ludum-dare/45/you-are-nothing-1)

- Jam: Ludum Dare 45
- Date: October 2019
- Theme: Start with Nothing

![GIF of You Are Nothing. Stick figures made of ASCII art sling spells at one another.](you-are-nothing.gif)

"An ASCII-art action game where you pick up new spells from your enemies."

The particle effects for the attacks here still some of my best VFX work.

I didn't have time for real pathfinding, so when enemies can't see the player they move in a kind of cirle-spiral pattern.
This gets them into a good position a shocking amount of the time.

## [Sunset Seeker](https://ect.itch.io/sunset-seeker)

- Jam: Kansas State University Spring Game Jam 2020
- Theme: What Goes Up, Must Come Down
- Date: February 2020
- Placing: Best Art

{% relImage, "sunset-seeker.png", "Screenshot of Sunset Seeker. A figure gazes out on a neon-lit city." %}

"A platformer where you use teleportation to find the sun."

This was the first in-person game jam I participated which was a pretty neat experience!
The engineering building gets _cold_ at night though.

## [Repair-bot Rodeo](https://ldjam.com/events/ludum-dare/46/repair-bot-rodeo)

- Jam: Ludum Dare 46
- Date: April 2020
- Theme: Keep it Alive

![GIF of Repair-bot Rodeo. Robots disperse around a fast-moving spacehsip.](repair-bot-rodeo.gif)

"An RTS puzzle game where you must franticly order tiny robots to keep a spaceship running."

The only thing more stressful than playing this game is making it.

Most of the level design was done on top of a photo of a paper sketch of the ship layout.

## [Spells of Elimination](https://ect.itch.io/spells-of-elimination)

- Jam: GMTK Game Jam 2020
- Date: July 2020
- Theme: Out of Control

{% relImage, "spells-of-elimination.png", "Screenshot of Spells of Elimination. A water attack beams down on the player's head." %}

"A turn-based RPG where you pick your moves from a set of face-down cards."

I really feel like there's something there with this sort of process-of-elimination randomness, but this game didn't quite capture it.

The duck is fun though.

## [The Cult of the Broken Clock](https://ldjam.com/events/ludum-dare/47/the-cult-of-the-broken-clock)

- Jam: Ludum Dare 47
- Date: October 2020
- Theme: Stuck in a Loop

{% relImage, "cult-of-the-broken-clock.png", "Screenshot of The Cult of the Broken Clock. A large explosion disperses cultists." %}

"An action game that switches between attack and defense like clockwork."

We really went in on the Aseprite Jumble tool to make those explosions and they turned out as intended.

We used some videos in the UI to explain the abilities of the character, which is a pretty good idea for these game jam contexts where players mostly won't read the controls.
I think we stole the concept from Overwatch.

## [Radiation Roulette](https://nospaces.itch.io/radiation-roulette)

- Jam: Kansas State University Fall Game Jam 2020
- Date: October 2020
- Theme: No Pain, No Gain

{% relImage, "radiation-roulette.png", "Screenshot of Radiation Roulette. A man is pursued by mutated bugs." %}

"An action game where you take on mutations - some helpful; some harmful."

My position in this jam was weird because I was an officer in the K-State Game Dev Club at the time
As an officer, I was assigned to fill in on a team that needed my help.
So I wound up working with members of the club I didn't know all that well, who did things very differently than I expected!

I of course used my role as a teacher here responsibly.
By adding mutations that made the game near-unplayable, such as tank controls and spider eyes.

## [The Ouroboros Labyrinth](https://ect.itch.io/the-ouroboros-labyrinth)

- Jam: Kansas State University Spring Game Jam 2021
- Date: February 2021
- Theme: Without a Trace
- Placing: 1st Overall

![GIF of The Ouroboros Labyrinth. A snake eats its tail and is shrunk around the tiles of the level.](ouroboros-labyrinth.gif)

"A puzzle game where you must eat your own tail."

If you're looking for one to play, this is the best game jam game I have worked on.
The idea is clever, the implementation is smooth, and the whole thing just _works_ the way the best jam games do.

My teammates designed some real head-scratching puzzles with just the most basic part of the mechanics.

The code is a _mess_ though.
I failed to come up with an elegant solution to resolving the whole tail-eating step, so the final codebase uses a weird mix of A* pathfinding and flood fills.
Every once in a while I turn the problem around in my head again, but I haven't taken a serious stab at fixing it.

## [MegaFlail](https://ect.itch.io/megaflail)

- Jam: GMTK Game Jam 2021
- Date: June 2021
- Theme: Joined Together

{% relImage, "megaflail.png", "Screenshot of MegaFlail. A large wooden circle is covered in turrets and thrusters." %}

"Build a giant death machine. Swing it around."

Getting yourself inside your machine is kind of a degenerate strategy for this.
But it's also fun, in a sort of breaking-the-rules sort of way.

## [Cook for Your Soul](https://coldpepperoni.itch.io/cook-for-your-soul)

- Jam: Kansas State University Fall Game Jam 2021
- Date: October 2021
- Theme: Feeding Frenzy
- Placing: 1st Overall

{% relImage, "cook-for-your-soul.jpg", "Screenshot of Cook for Your Soul. Two kitchens flank a conveyor belt feeding a monster." %}

"A competitive version of Overcooked where you must placate an ever-hungry monster or be eaten yourself."

Lex and I tried something different for this one by putting him on programming and myself on pixel art.
It was different, but nice to be doing not-code for my whole weekend.

There's a shader that makes food darker when you burn it.
This resets the timer, so it can happen _again_ after a second fry.
There's theoretically no limit to how burnt your chicken can be.

## [Stone Raider](https://ect.itch.io/stone-raider)

- Jam: 6AMES MADE QUICK???
- Date: January 2022

{% relImage, "stone-raider.png", "Screenshot of Stone Raider. A hooded figure jumps across brick platforms in a mushroom forest." %}

"A roguelike platformer where you craft spells to escape the underworld."

This one is a masterclass in overscoping.
We had a team of four and a whole week to work on the game.
So clearly there was time for procedural generation, three distinct biomes, and spellcrafting.

The actual big achievement of this game is that the enemies jump at you.
It's terrifying.

## [Battle for Dice Tower Hill](https://ect.itch.io/battle-for-dice-tower-hill)

- Jam: GMTK Game Jam 2022
- Date: July 2022
- Theme: Roll of the Dice

{% relImage, "battle-for-dice-tower-hill.png", "Screenshot of Battle for Dice Tower Hill. Walking playing cards approach a field of dice." %}

"A farming game where you grow crops of dice and shoot them at the invading army of cards."

This game really hinged on a sort of physical satisfaction of throwing dice at things, but couldn't quite execute on it.

I do love the quirky little faces for the cards though.

## [MP Fighter](https://devpost.com/software/mp-fighter)

- Jam: Hack K-State 2022
- Date: November 2022
- Placing: Best Video Game Hack

{% relImage, "mp-fighter.jpg", "Screenshot of MP Fighter. An editor shows a video of someone punching, overlayed by the detected bones." %}

"A fighting game where you can record video of yourself to create your own moves."

This was for Hackathon, not a game jam _per se_.
I tried _really hard_ to come up with something to make other than a game.
But Lex and I made this anyways.
What else are you supposed to do with a cool motion-tracking library?

We captured a moveset of our Computer Science professors for this.
Unfortunately he didn't punch very far forward so it's not very good.

## [Slim Pickings](https://ldjam.com/events/ludum-dare/52/slim-pickings)

- Jam: Ludum Dare 52
- Date: January 2023
- Theme: Harvest

![GIF of Slim Pickings. A green slime slides across the screen collecting gems.](slim-pickings.gif)

The little indicator at the top of the screen when you've gone up too high is called the "slimdicator."

The table on the end screen was traced over da Vinci's _The Last Supper_.

The rotating pedometer score counter was _really annoying_ to implement in a good way.
There's lots of little details about making the texture repeat and then wrap again later.
Very worth it though.

## [Old School Classic World of War of eXile XIV: Online](https://coldpepperoni.itch.io/old-school-classic-world-of-war-of-exile-xiv-online)

- Jam: GMTK Game Jam 2023
- Date: July 2023
- Theme: Roles Reversed

{% relImage, "old-school-classic.png", "Screenshot of Old School Classic World of War of eXile XIV: Online. Three skeletons face three stick-figure players." %}

"A turn-based RPG where the Lv. 1 skeletons copy the players and fight back against their bosses."

The dialog here doesn't quite live up to West of Loathing, but we [didn't forget to put some jokes in it](https://youtu.be/OZzpDOK8PoI?si=IBSb48KaNiSEzzTO).

Those Gamer player names are randomly generated and I love the results.

## [Slipbeam](https://ect.itch.io/slipbeam)

- Jam: Lex and I wanted to do a game jam but there wasn't one happening so we choose a weekend and made it ourselves jam
- Date: March 2024

{% relImage, "slipbeam.jpg", "Screenshot of Slipbeam. A giant rocket approaches Earth." %}

"Play as the scientist Slyvia as you manipulate gravity to stop the giant death rocket approaching Earth."

This was a weird one since it's not for an actual jam.
But Lex wanted to try making a 3D game but not let it drag on too long.

The rear view mirror is entirely unnecessary, but I'm glad I took the time to make it work.

## [Ensmallening](https://ect.itch.io/ensmallening)

- Jam: GMTK Game Jam 2024
- Date: August 2024
- Theme: Built to Scale

{% relImage, "ensmallening.png", "Screenshot of Ensmallening. A rodent stands in a room with an odd looking portal." %}

"A gameboy-styled puzzle dungeon crawler where everything can shrink."

This game is part of a [prestigous itch.io collection](https://itch.io/c/2631373/rat-games-of-all-time).

My most Zelda-enthused friends say it rubs the same itch as a dungeon, so I think this one did its job.

## Some kind of Ending

So there we are, 28 little games made over 10 years!

You might be expecting some kind of lesson or takeaway here, but really it's just:
- Making games is fun!
- Making games can teach you a lot, which can help you make higher-quality (read: more polished) games.
    - Or, in some cases, weirder and more out-there games.
- Working with lots of different people on games gets you some more variety in results!

I definitely plan to keep doing game jams and adding to this collection!
Ludum Dare 57 is a lock for the anniversary.
But I'll probably stay backed off from the 5-a-year rate I hit in 2020.

If you've read this far, you're a nerd, and nerds like numbers so here are some numbers:

Most Frequent Genres:
- Action (x11)
- Platformer (x6)
- Puzzle (x6)
- RPG (x2)
- Other (x3)

Most Frequent Artstyles:
- Pixel Art (x18)
- 2D Digital Art (x4)
- Vector Art (x3)
- Other (x3)

Most Frequent Engines:
- Godot (x15)
- cobblestone (x9)
- LibGDX (x4)

Most Brag-Worthy Placings:
- 1st Overall K-State Spring Game Jam 2021 (The Ouroborous Labyrinth)
- 1st Overall K-State Fall Game Jam 2021 (Cook for your Soul)
- #15 in Adherence to Theme GMTK Game Jam 2019 (W RGB CMY K?)
- #78 Overall Ludum Dare 45 (You Are Nothing)
