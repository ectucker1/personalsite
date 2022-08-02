---
tags: ['project', 'highlight']
title: ectert
preview_img: ectert.png
date: 2021-08-22
start_date: 2020
end_date: 2021
---

[ectert](https://github.com/ectucker1/ectert) is a CPU raytracer, based on James Buck's [The Ray Tracer Challenge](http://raytracerchallenge.com/).
It's written in C++, and has features including Blinn-Phong lighting, shadows, reflection, refraction and anti-aliasing.
It also has a very naive implementation of multi-bounce indirect lighting.

ectert isn't the most advanced renderer, but it sparked my interest in graphics programming, specifically lighting.
It was also my first foray into C++, which has since become one of my main languages.

---endpreview

Here's a couple of my favorite renders from ectert:

{% image "projects/ectert/refracted_spheres.png", "3D rendering of a hollow glass sphere bending light from a vertically striped background" %}

{% image "projects/ectert/striped_teapot.png", "3D rendering of a teapot" %}

Model credit [University of Utah](https://graphics.cs.utah.edu/courses/cs6620/fall2013/?prj=5).

I've poked a couple times at porting ectert to Vulkan or adding a visual editor.
This hasn't really panned out, and I've generally moved on to projects implementing more specific techniques.
