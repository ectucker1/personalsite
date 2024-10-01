---
permalink: projects/random-bullshit-go/
title: Random Bullshit Go
date: 2024-05-11
start_date: 2022
end_date: 2024
layout: justapage
---

Counter cards, rearrange cards, and play chicken.
Random Bullshit Go is an **in-development** real-time online multiplayer card game where timing is everything.

Everything in the game plays on a "Stack" much like in MTG.
Cards have no effect until the cards above them on the Stack resolve.
Everyone gets a chance to respond to everything.
And to respond to the response.

---endpreview

### Gameplay

The goal of Random Bullshit Go is simple - get to 15 points.
A basic card like Bread might say something like "Target player gains 3 points."
If you played 5 copies of Bread without any responses, you'd win!

But probably the other players will do something about your bread.
They might play a card like Stopsign, which could negate the card entirely.
They might Redirect your bread, changing it to target themselves.
Or they might play so many of their own point gaining cards that everyone forgets about your Bread, sitting there on the bottom of the stack.

{% relImage, "screenshot1.jpg", "Screenshot of Random Bullshit Go, in which a Bread is on the stack below a Redirect and a Stopsign targeting it." %}

Since these responses are on top of your Bread on the stack, their effects will happen first.

Oh, and there's a timer pushing things along.
If the timer runs out, the top card on the stack will resolve, applying its effects.
You'll have to decide quick what to do if you don't want that to happen.
Or wait it out in hopes someone else handles it.

If the timer runs out with no cards left on the stack, everyone draws 5 more cards and the chaos begins again.

Other gameplay details:
- The game plays best with 3-5 players.
- Players draw from a shared deck.
- There's no mana or other resources - playing a card is free, except for the card.
- There's no priority - if the timer is ticking, you can play a card.
- At the start of each round, a random player gets targeted with an Inciting Incident card to get things moving.

Here's a few more cards to get your imagination flowing:

{% relImage, "cards-of-note.jpg", "Cards from Random Bullshit Go, including Die Roll, Corruption, Gizmo, and Chicken Storm." %}

### Inspirations

The game is highly inspired by Magic, especially the Commander format.
Commander is awesome because of the free-for-all multiplayer and general unpredictability.
A few turns in, you'll often find yourself looking at a wild board state and wondering how exactly you got into this position.
Sometimes one player will be far ahead and the rest will have to team up to stop them.
And sometimes everyone will be an inch from winning for several turns in a row, barely answering threats to win.

{% relImage, "chaotic-magic.jpg", "Photo of an ongoing game of Commander in which every player has an absurd number of lands for an indiscernible reason." %}

Random Bullshit Go tries to recreate that feeling within the scope of a stack.
There's no resource system, and therefore nothing to stop you from adding your cards onto the ever-growing stack.
There's a timer, pushing you to act or wait to fake out your opponents.
And many of the card effects only make the situation weirder.

Other miscellaneous inspirations:
- [Cosmic Encounter](https://www.fantasyflightgames.com/en/products/cosmic-encounter/) - this board game does the "everyone is an inch from winning" moment excellently. And the flare cards are devious.
- [/r/hmm](https://www.reddit.com/r/hmm/) and "Cursed Images" - these photos always put me in a chaotic mood and inspired the use of photo composites in my game's art.

### Development

The game is being developed in my spare time using the Godot game engine.
It was on the backburner for a couple years during college, but is my main creative focus now.
Once it's ready, it will be released for free on [itch.io](https://ect.itch.io/).

For updates, you can follow me on {% relMe "Mastodon", "https://kind.social/@ectcetera" %}, {% relMe "itch.io", "https://ect.itch.io/" %}, or my blog's [Atom Feed](/blog/atom.xml).
