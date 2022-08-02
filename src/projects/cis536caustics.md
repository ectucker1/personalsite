---
tags: ['project', 'highlight']
title: CIS536 Caustics
preview_img: cis536caustics.png
date: 2021-04-10
start_date: 2021
end_date: 2021
---

[CIS536 Caustics](https://github.com/ectucker1/CIS536-Caustics) was a course project for a Computer Graphics class at K-State.
The goal of the project was to render geometrically-accurate caustics using photon mapping, in Unity.
The project was inspired by the idea of a "caustic map" in Yaobin Ouyang and Xueqing Yang's "[Generating Ray-Traced Caustic Effects in Unreal Engine 4, Part 2](https://developer.nvidia.com/blog/generating-ray-traced-caustic-effects-in-unreal-engine-4-part-2/)."
However, my project computed the caustic map ahead of time and stored it to disk to be reused.

The implementation unfortunately suffers from several issues.
Ray-tracing shaders were far out of scope for the class, so the implementation uses raycasting in Unity's physics engine instead.
This doesn't provide enough accuracy or performance as would be desired for this application.
It did, however, allow for some very interesting visualizations of the caustic map generation.

---endpreview

Here's a video of the photon mapping process (warning, flashing images):

![Video showing rays shooting through a sphere, forming caustics](/assets/images/projects/cis536caustics/causticgeneration.mp4)

A few more showcases of the results:

{% image "projects/cis536caustics/lensedcaustic.png", "Chart showing the effect of the number of photons and samples on a lensed caustic" %}

{% image "projects/cis536caustics/reflectedcaustic.png", "Chart showing the effect of the number of photons and samples on a reflected caustic" %}

{% image "projects/cis536caustics/watercaustic.png", "Image of a more visualy interesting caustic formed by water" %}

These results could all certainly be improved by more advanced techniques like a gaussian filters or photon differentials.
Performance improvements for more photons and samples would also certainly help.
