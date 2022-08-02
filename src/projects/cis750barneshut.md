---
tags: ['project', 'highlight']
title: CIS750 Barnes-Hut
preview_img: cis750barneshut.png
date: 2022-05-12
start_date: 2022
end_date: 2022
---

[CIS750 Barnes-Hut](https://github.com/bathompson/ksu_cis750_barneshut) is a CUDA implementation of the [Barnes-Hut approximation](https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation) for N-Body simulations.
These simulations calculate the influence of forces such as gravity on a large number point masses.
I worked on it with a team of two other students as a course project for the Avanced Computer Architecture class at K-State.

The Barnes-Hut algorithm uses an octree to restrict calculations to nearby bodies.
In our test case with 32768 bodies, our CUDA implementation achieved over a 3000x speedup relative to a CPU serial implementation.
It also outperformed several existing CUDA N-Body simulators,
though I believe this was largely a benefit of using newer CUDA APIs such as [Cooperative Groups](https://developer.nvidia.com/blog/cooperative-groups/).

---endpreview

My contributions to the project included a 3D visualizer of our simulations using OpenGL,
as well as a large portion of the parallelization of the Barnes-Hut algorithm.

Here's a video showing several interesting simulations in our visualizer:

![Video showing a N-body simulation](/assets/images/projects/cis750barneshut/simulations.webm)

This chart shows the running time of our parallel and serial implementations as the number of bodies increases.
The Y-axis is logarithmic.

{% image "projects/cis750barneshut/executiontimevsbodies.png", "Graph of execution time vs. number of bodies" %}

There are several remaining optimizations from prior implementations, most notably methods for parallelizing the construction of the octree.
More work could also be done to verify correct outputs here &mdash; problems with units kept us only comparing to our serial version.
