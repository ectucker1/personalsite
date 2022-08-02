---
tags: ['project', 'highlight']
title: Congressional Speech Research
preview_img: congressionalresearch.png
date: 2020-08-15
start_date: 2019
end_date: 2020
---

My CIS115 included a data science research project applying various text analysis metrics to US congressional speeches.
These metrics include basic calculations such number of words and frequency of words in different categories
as well as more advanced metrics such as the [Coleman-Liau Index](https://psycnet.apa.org/record/1975-22007-001) and sentiment analysis.
My teammate and I decided that the most interesting way to examine this was to chart changes in these numerical metrics over time.
After filtering, the dataset included 959,237 speeches over a timespan of 138 years.

This yielded many interesting results &mdash; the graphs were much less noisy than would normally be expected in data science.
Our professor, Dr. Shamir, was impressed and worked with us after the course to publish the research.
With his help, we were able to publish the work in Heliyon as ["A Data Science Approach to 138 Years of Congressional Speeches"](https://www.sciencedirect.com/science/article/pii/S2405844020312615) ([doi:10.1016/j.heliyon.2020.e04417](https://doi.org/10.1016/j.heliyon.2020.e04417)).
It also received some media attention with commentators drawing conclusions of varying rigor from the work.

---endpreview

The actual metric calculations were done using Dr. Shamir's own tool, [UDAT](https://academic.oup.com/dsh/article/36/1/187/5804949).
From that output, charts were generated using Python and matplotlib.
I'd recommend reading the paper for more information on our methods and conclusions.

Here are a few of my favorite charts generated from this (pardon the poor choice of coloring):

{% image "projects/congressionalresearch/sentence_length_mean.png", "Plot of the average sentence length in speeches over time" %}

{% image "projects/congressionalresearch/female_frequency.png", "Plot of the frequency of words referring to women in speeches over time" %}

{% image "projects/congressionalresearch/energy_frequency.png", "Plot of the frequency of words referring to energy in speeches over time" %}
