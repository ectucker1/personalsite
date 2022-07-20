---
tags: ['project', 'highlight']
title: cobblestone
preview_img: /assets/images/cobblestone.png
date: 2016-08-20
start_date: 2016
end_date: 2020
---

[cobblestone](https://pub.dev/packages/cobblestone) was my own mid-level game development framework.
It's written in [Dart](https://dart.dev/) and uses the WebGL and WebAL APIs for rendering and audio respectively.
The overall design of the framework is strongly inspired by [LibGDX](https://libgdx.com/), with abstractions like `SpriteBatch`, `Texture`, etc.

I created cobblestone to solve the problem of creating lightweight web games.
Being web-based and easy to load helps imensely for getting ratings in game jams like Ludum Dare.
My prior engine of choice, LibGDX, has a web exporter but I found it hard to use,
and the exported games were large due to transpiling Java code.

---endpreview

I used and maintained cobblestone as an open source project for years.
It has a [tutorial](https://gitlab.com/ectucker/cobblestone/-/wikis/A-Basic-Game), examples,
and has been downloaded a few times from Dart's package manager.
However, I don't know of any published games using it other than my own.

All of my [Ludum Dare entries](https://ldjam.com/users/ectucker1/games) from LD36-LD45 run on cobblestone.
The most complex showcase of the framework's capabilities would probably be [Library of Madness](https://ldjam.com/events/ludum-dare/44/library-of-madness).

I moved on from cobblestone after trying out [Godot Engine](https://godotengine.org/),
which has a very high quality web export.
It's similarly lightweight, and maintains a larger feature set and community than I ever could alone.

Here are some screenshots of cobblestone demos:

![Demo showing thousands of pixel-art rocks falling](/assets/images/projects/cobblestone/performance_demo.png)

![Demo showing a dynamic 2D lighting shader](/assets/images/projects/cobblestone/lighting_demo.png)
