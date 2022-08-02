---
tags: ['project', 'highlight']
title: Outline Runner
preview_img: outlinerunner.png
date: 2021-03-17
start_date: 2020
end_date: 2021
---
[Outline Runner](https://ect.itch.io/outline-runner) is a parkour shooter with a time slowdown mechanic.
It's one of my longer-term game projects, developer with a friend over several months.

The most interesting technical component is the outline shader that gives the game its distinct look.
This works by comparing the normals and depth values in screen space,
and setting the color to black if the difference is large enough.

---endpreview

Levels for the game were created in [TrenchBroom](https://trenchbroom.github.io/)
and imported into the engine using the [Qodot Plugin](https://github.com/QodotPlugin/qodot-plugin).
I found this to be a really good workflow for this style of game.

Here are a few screenshots of the game:

{% image "projects/outlinerunner/screenshot1.png", "Screenshot showing several enemies firing in a yellow room" %}

{% image "projects/outlinerunner/screenshot2.png", "Screenshot showing a red hallway" %}

{% image "projects/outlinerunner/screenshot3.png", "Screenshot showing a tall purple tower" %}
