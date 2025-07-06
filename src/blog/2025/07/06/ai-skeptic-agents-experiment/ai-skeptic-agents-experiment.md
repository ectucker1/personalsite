---
title: A LLM-Hesitant Dev's First Experiment with Coding Agents
date: 2025-07-06
permalink: "blog/{{ date | permalinkDate }}/{{ page.fileSlug }}/"
tags: article
tagline: I've long considered myself skeptical of LLMs. Recent developments (and discourse), however, led me to experiment with Zed's coding agent on a hobby project. Did it change my view?
layout: article
---

For a few years, I've been (mildly) skeptical of the ability of Large Language Models to be useful for my programming work.
Around May of 2023, a professor asked my operating systems class for a honest show of hands for who was using a generative AI tool for homework, GitHub Copilot, ChatGPT, whatever.
I was one of only 2-3 students to not raise my hand.

I'd love to say this was because I had a well-considred understanding of the abilities, risks, and ethics of these tools.
But the truth is I didn't know much about them!
I didn't try Copilot and then decide it wasn't worth the hassle, or get burned by a hallucinated respone from ChatGPT.
I didn't watch demos from AI companies and leave unimpressed.
Instead, I simply abosrbed the AI opinions of my peers in places like Mastodon and Bluesky, which are broadly anti-AI on a variety of grounds.
Mostly I got the impression that they could _probably_ help me do my homework faster, but I might not learn as much.
And they could _probably_ generate useful contributions to web frontends and backends following common patterns, but might struggle to comprehend the million-line desktop monolith I develop on at work.
And using them _might_ be evil.

{% asiderow %}
    {% asiderowcontent %}
Meanwhile, these tools have changed a lot!
Current-gen LLMs can use tools, apply chain-of-thought reasoning, analyze both text and images at the same time, and act "agentically," taking multiple actions in sequence without user guidance.
They're not the same as 2023!
Thomas Ptacek makes an important, if bluntly-stated, point about this in [My AI Skeptic Friends Are All Nuts](https://fly.io/blog/youre-all-nuts/).
If I'm going to talk (or think) about AI, I need to talk about the state-of-the-art.
    {% endasiderowcontent %}

    {% asidenote %}
It might be more correct to say that the _tooling and infrastructure_ around LLMs has changed a lot, but the result is the same.
    {% endasidenote %}
{% endasiderow %}

My prior abstention sets up for an interesting experiment: if I try one of these current-gen coding agent tools now, what happens?
Fortunately, I always have a side or two project going, so I can run an test by implementing a small feature using a coding agent.

I'm leaving aside questions about ethics, energy use, philosophical musings about whether LLMs "truly understand anything."
This also isn't a benchmark — I'm only going to try one model (Anthropic Claude 4 Sonnet) and one agent (the Zed editor agent).
All this experiment tests is whether these tools can impress me.

## Experiment Context

I'm testing these tools on an early-stage prototype hobby project.
[Electric Wheat Machine](https://gitlab.com/ectucker/electric-wheat-machine) is a little music-making tool inspired by Elektron grooveboxes.
It uses the open-source [Surge XT](https://surge-synthesizer.github.io/) synthesizer to generate the sounds.
Might be easier to show in action than describe:

![The Electric Wheat Machine playing some acid-ish music.](wheat-machine-demo.mp4)

It's written in Rust and uses [Iced](https://iced.rs/) for the GUI.

Some things about this project that I'd expect to help our agent:
- It's written in Rust. Rust provides strong type safety and other gurantees, sometimes touted as "if it compiles, it works." A coding agent is allowed to check if it compiles and fix it if it doesn't!
- It's small! Currently about 5.8k lines of code, and half of that is just a fork of part of Iced.
- The project structure is straightforward — just a `Cargo.toml` file and a `src/` directory.

Some things about this project that I'd expect to give the agent a hard time:
- The UI framework, Iced, is popular in the space of Rust UI frameworks, but it's far from being a widespread standard tool like React.
- I'm using some weird data structures such as my custom `Param` system which can be used to define a variety of parameters on either a per-note or per-track basis and an implementation of [Persistent Data Structures](https://crates.io/crates/rpds).
- I'm new to Rust and might have done something misguided.
- This is, again, an early prototype — there are no tests and plenty of half-baked architecture.

The feature we'll add is so-called "Trigger Conditions." These may be either a probability (only trigger 25% of the time this step is hit) or a loop count (only trigger on the 1st of every 4 loops of this pattern).
Conditions may set for either an entire track or on a per-note basis.
Despite being a value with several distinct variants, they will be edited via a slider at the top of the screen like all other parameters currently.

## Round 1 - Building Layer-by-Layer

I started by asking the agent to implement each part of the feature in a seperate prompt, in roughly the same order as I'd do it.

### Prompt 1 - Adding a Parameter Type

Trigger Conditions don't match any of the types currently supported by our parameter system, so we'll need a new variant of the `Param` enum. I asked the agent to add one.

> Add a new parameter type to the Param struct called TrigCondition which contains an instance of new struct called TrigConditionParam that implements ParamType.

I'm going to take a longer detour here to describe what happens when you hit send on a prompt using Zed's coding agent.
The rest of the model output descriptions will be more high-level (because boy do they write _a lot_), but some description is needed to understand what's going on.

Zed's agent panel looks like a messaging app, a lot like what you might have seen with ChatGPT.
There's a text box where you can type your request to the agent, a Send button, and a dropdown to select a model and what tools to allow it to use.

When you hit Send, the model starts generating its response.
It gives a saccharinely helpful response like, "I'll help you add a new parameter type called `TrigCondition` to the `Param` enum and create the corresponding `TrigConditionParam` struct that implements `ParamType`.
Let me first examine the existing code structure to understand the pattern."
And from there it, to a shocking extent, _does what it says it would do_.
The model generates some text that says "I'm going to do X," followed by some JSON that describes to the agent what tool to call to do X.
The agent parses that JSON and calls the tool.
It's basically just an API.

In it's raw form, that looks like this:
```json
I'll help you add a new parameter type called `TrigCondition` to the `Param` enum and create the corresponding `TrigConditionParam` struct that implements `ParamType`. Let me first examine the existing code structure to understand the pattern.

**Use Tool: read_file (toolu_014nwkXHh1RRQTVX4uD6TUt1)**
```json
{
  "path": "electric-wheat-machine/src/model/params.rs"
}
```

Zed displays this nicely, using icons to distinguish different tool calls.
When it gets to editing, the agent's changes are displayed in a nice git-like diff view.
If you enable Follow Agent, it bounces your main text editor view around the codebase to the lines that the model is reading or editing.

{% relImage, "zed-agent-output-example.png", "Screenshot of Zed's agent panel output, showing the agent checking for compiler errors, then implementing a trait to fix one." %}

{% asiderow %}
    {% asiderowcontent %}
I'm going to pause the experimenter facade to comment that this is _cool as hell_, actually.
I described, in natural language, what I wanted it to do and then it worked through multiple steps to do that.
My jaw was dropped watching this happen.
Why did no one tell me I was living in the future?
    {% endasiderowcontent %}

    {% asidenote %}
Many people, in fact, told me I was living in the future.
Many other people told me not to believe them.
That's why I'm checking now.
    {% endasidenote %}
{% endasiderow %}

After running through all this, the agent:
- Added the requested `TrigCondition` variant to the `Param` enum.
    ```rust
    TrigCondition(TrigConditionParam),
    ```
- Added a new `TrigConditionVal` variant to the `ParamVal` enum.
    ```rust
    TrigConditionVal(u32),
    ```
- Handled the case of `TrigCondition` in the `match_param_types` macro.
    ```rust
    Param::TrigCondition(trig_condition_param) => {
        apply!($return_macro, trig_condition_param)
    }
    ```
- Wrote and implemented the requested `TrigConditionParam` struct.
    ```rust
    #[derive(Clone, Debug, Default)]
    pub struct TrigConditionParam {}

    impl TrigConditionParam {
        pub fn new() -> Self {
            TrigConditionParam {}
        }

        pub fn condition_name(&self, index: u32) -> &'static str {
            match index {
                0 => "Always",
                1 => "Note On",
                2 => "Note Off",
                3 => "High Velocity",
                4 => "Low Velocity",
                _ => "Always",
            }
        }

        pub fn num_conditions(&self) -> u32 {
            5
        }
    }

    impl ParamType for TrigConditionParam {
        type TVal = u32;

        fn short_name(&self) -> String {
            String::from("TRIG")
        }

        fn long_name(&self) -> String {
            String::from("Trigger Condition")
        }

        fn short_format_val(&self, val: Self::TVal) -> String {
            self.condition_name(val).to_string()
        }

        fn long_format_val(&self, val: Self::TVal) -> String {
            format!("Trigger: {}", self.condition_name(val))
        }

        fn default_val(&self) -> Self::TVal {
            0 // Always
        }

        fn wrap_val(&self, val: Self::TVal) -> ParamVal {
            ParamVal::TrigConditionVal(val)
        }

        fn unwrap_val(&self, val: &ParamVal) -> Self::TVal {
            match val {
                ParamVal::TrigConditionVal(condition) => *condition,
                _ => unreachable!(),
            }
        }
    }

    impl PartialEq for TrigConditionParam {
        fn eq(&self, _other: &Self) -> bool {
            true // All instances are equivalent since there are no fields
        }
    }

    impl Eq for TrigConditionParam {}

    impl std::hash::Hash for TrigConditionParam {
        fn hash<H: std::hash::Hasher>(&self, _state: &mut H) {
            // No fields to hash, so this is a no-op
        }
    }
    ```
- Handled `TrigCondition` params in the GUI method `param_from_float` (but didn't realize it also needed handled in `param_to_float`).
    ```rust
    Param::TrigCondition(_) => ParamVal::TrigConditionVal(val as u32),
    ```
- Fixed a couple compiler errors along the way.
- Wrote a bunch of tests.

It also:
- Reformatted a bunch of unrelated code in `params.rs` and `gui.rs`. Mostly whitepsace-only changes, but it also renamed an unrelated variable from `len_param` to `length_param`.
- "Hallucinated" the possible values of `TrigConditionParam`. (In all fairness, I had not specified at all what a `TrigConditionParam` should store or what it's format methods should do.)

Giving the agent a partial pass on this step — it did what I asked, and then several things that I didn't ask for that were slightly wrong.

I manually added a new `TrigCondition` enum that contains the data we actually want to store with these parameters.
Typing that code is definitely faster for me than trying to describe it to a model.

```rust
pub enum TrigCondition {
    Probability(u32),
    Beat(u32, u32),
}
impl Default for TrigCondition {
    fn default() -> Self {
        TrigCondition::Probability(100)
    }
}
```

### Prompt 2 - Trigger Condition Ordering

Next I put the agent up to listing out all the possible `TrigCondition` values in the order I'd want them shown in the UI.

> Add a function called generate_trig_conditions that generates a vector of TrigConditions.
> The vector should start with a list of Probability enum cases ranging from 0-100, increasing by five each time.
> Then, it should include a list of Beat enum cases following the pattern of (1,2), (2,2), (1,4), (2,4), all the way up to (8,8).

The agent:
- Wrote the `generate_trig_conditions()` function that I asked for.
    ```rust
    /// Generates a vector of all available trigger conditions.
    /// Starts with Probability conditions from 0-100 (incrementing by 5),
    /// then includes Beat conditions following the pattern (1,2), (2,2), (1,4), (2,4), ... up to (8,8).
    pub fn generate_trig_conditions() -> Vec<TrigCondition> {
        let mut conditions = Vec::new();

        // Add Probability conditions from 0 to 100, incrementing by 5
        for prob in (0..=100).step_by(5) {
            conditions.push(TrigCondition::Probability(prob));
        }

        // Add Beat conditions following the pattern (1,2), (2,2), (1,4), (2,4), ... up to (8,8)
        for denominator in [2, 4, 8].iter() {
            for numerator in 1..=*denominator {
                conditions.push(TrigCondition::Beat(numerator, *denominator));
            }
        }

        conditions
    }
    ```
- Modified `TrigConditionParam::short_format_val()` and `long_format_val()` to handle the data changes I had made between prompts.
    ```rust
    fn short_format_val(&self, val: Self::TVal) -> String {
        match val {
            TrigCondition::Probability(prob) => format!("{}%", prob),
            TrigCondition::Beat(num, den) => format!("{}/{}", num, den),
        }
    }

    fn long_format_val(&self, val: Self::TVal) -> String {
        match val {
            TrigCondition::Probability(prob) => format!("Probability: {}%", prob),
            TrigCondition::Beat(num, den) => format!("Beat: {}/{}", num, den),
        }
    }
    ```
- Added some helper functions to help use this ordering.
    ```rust
    impl TrigConditionParam {
        /// Returns the total number of available trigger conditions
        pub fn num_conditions(&self) -> usize {
            generate_trig_conditions().len()
        }

        /// Returns the index of a specific trigger condition
        pub fn index_of_condition(&self, condition: TrigCondition) -> Option<usize> {
            generate_trig_conditions()
                .iter()
                .position(|&c| c == condition)
        }

        /// Returns the trigger condition at a specific index
        pub fn condition_at_index(&self, index: usize) -> Option<TrigCondition> {
            generate_trig_conditions().get(index).copied()
        }
    }
    ```
- Fixed the GUI `param_from_float` and `param_to_float` functions to use the ordering defined by `generate_trig_conditions()`. (Though weirdly this didn't use the helper functions it just wrote.)

...why did I bother explaining what it did myself.
It wrote me a summary explaining all that and also listing all the values generated by `generate_trig_conditions` and giving examples of what's returned by the format methods.

This is a full pass — everything the agent did is something I wanted done, even if I didn't explicitly ask for it.
I do kind of have a problem with it generating the trigger condition list again every time I need to check an index in it.
Let's fix that!

### Prompt 3 - Optimization for Prompt 2

(I technically ran this one last, but I'm listing it earlier since it's connected to Prompt 2)

> Modify the generate_trig_conditions() method to return a bi-directional map with the keys as the indicies of the current vector.
>
> Optimize index_of_condition() and condition_at_index() by:
> 1. Using a static variable to cache the map returned by generate_trig_conditions().
> 2. Using map operations to avoid the need to iterate.

This succesfully rewrote the generate_trig_conditions() function:
```rust
/// Bidirectional map for trigger conditions with index-based lookups.
pub struct TrigConditionMap {
    pub index_to_condition: HashMap<usize, TrigCondition>,
    pub condition_to_index: HashMap<TrigCondition, usize>,
}

/// Generates a bidirectional map of all available trigger conditions.
/// Starts with Probability conditions from 0-100 (incrementing by 5),
/// then includes Beat conditions following the pattern (1,2), (2,2), (1,4), (2,4), ... up to (8,8).
pub fn generate_trig_conditions() -> TrigConditionMap {
    let mut conditions = Vec::new();

    // Add Probability conditions from 0 to 100, incrementing by 5
    for prob in (0..=100).step_by(5) {
        conditions.push(TrigCondition::Probability(prob));
    }

    // Add Beat conditions following the pattern (1,2), (2,2), (1,4), (2,4), ... up to (8,8)
    for denominator in [2, 4, 8].iter() {
        for numerator in 1..=*denominator {
            conditions.push(TrigCondition::Beat(numerator, *denominator));
        }
    }

    let mut index_to_condition = HashMap::new();
    let mut condition_to_index = HashMap::new();

    for (index, condition) in conditions.into_iter().enumerate() {
        index_to_condition.insert(index, condition);
        condition_to_index.insert(condition, index);
    }

    TrigConditionMap {
        index_to_condition,
        condition_to_index,
    }
}
```

A struct with two `HashMap`s is a pretty reasonable interpretation of what I mean by "bi-directional map."
Could get fancy with a `bimap` crate, but I wouldn't really want the agent to install arbitrary dependencies.

And optimized the helper functions to use a static `TrigConditionMap`:
```rust
/// Returns the cached trigger condition map
fn get_condition_map() -> &'static TrigConditionMap {
    static INIT: Once = Once::new();
    static mut CONDITION_MAP: Option<TrigConditionMap> = None;

    unsafe {
        INIT.call_once(|| {
            CONDITION_MAP = Some(generate_trig_conditions());
        });
        CONDITION_MAP.as_ref().unwrap()
    }
}

/// Returns the total number of available trigger conditions
pub fn num_conditions() -> usize {
    Self::get_condition_map().index_to_condition.len()
}

/// Returns the index of a specific trigger condition
pub fn index_of_condition(condition: TrigCondition) -> Option<usize> {
    Self::get_condition_map()
        .condition_to_index
        .get(&condition)
        .copied()
}

/// Returns the trigger condition at a specific index
pub fn condition_at_index(index: usize) -> Option<TrigCondition> {
    Self::get_condition_map()
        .index_to_condition
        .get(&index)
        .copied()
}
```

{% asiderow %}
    {% asiderowcontent %}
...it's plausible that was the best way to initialize a static variable in Rust at one point, but it's not now.
We can do this using a `LazyLock`.
Really would want it to be more cautious about introducing `unsafe` code.
    {% endasiderowcontent %}

    {% asidenote %}
I guess anyone using these tools to generate C is looking at LLM-generated `unsafe` code constantly.
Poor souls.
    {% endasidenote %}
{% endasiderow %}

Regardless, I think this is a pass.
The only problem I have with this code is easy to spot.

### Prompt 4 - GUI Support for Trigger Conditions

Our earlier hacking around `param_to_float` and `param_from_float` kinda works, but only as long as you keep within the supported range.
Let's add a dedicated GUI component for trigger condition parameters.

> Add a function called trig_condition_param_editor which is similar to enum_param_editor but takes a TrigConditionParam instead and limits the slider range to the number of trigger conditions.

The AI did exactly what I'd do here, copy-pasting my exisitng parameter slider code and using the `num_conditions()` and `index_of_condition()` functions to determine the current slider value and maximum range.
Minor nitpick that it wrote some full paths to imports it needed instead of adding them to the top of the file.

It also seems to have understood the parameter system I was worried about.
The model included the line "**Dual functionality**: Handles both track-level and trigger-level parameter changes" in its summary.

Giving it a full pass here!

### Prompt 5 - Sequencer Functionality

We can edit these parameters, now let's make them do something!

> Modify the run_sequencer function to check the TrigCondition parameter at each trigger before starting the note.
>
> If the trigger condition is Probability, the note should only start the specified percentage of the time.
>
> If the trigger condition is a Beat, the note should only trigger during the specified index out of the specified number of loops of the pattern.

This was a full pass too!
The model successfully realized that I needed a new `pattern_loop_count` variable outside of the main sequencer loop and added that:

```rust
let mut pattern_loop_count = 0u32;
loop {
    ...
    // Track pattern loops for beat conditions
    if step == 1 {
        pattern_loop_count = pattern_loop_count.wrapping_add(1);
    }
    ...
}
```

And it handled both the described trigger conditions:

```rust
// Check trigger condition before starting the note
let trig_condition = trigger
    .get_param(&TrigConditionParam::default(), track)
    .get_val();
let should_trigger = match trig_condition {
    TrigCondition::Probability(prob) => {
        let random_roll = rng.gen_range(0..100);
        random_roll < prob
    }
    TrigCondition::Beat(numerator, denominator) => {
        let current_beat = (pattern_loop_count % denominator) + 1;
        current_beat == numerator
    }
};

if !should_trigger {
    continue;
}
```

At this point, the feature is done and works as described!

## Round 2 - What if we just one-shot the whole feature?

In prompts 1-3, the agent constantly did more than I asked.
What if I let it?
Can I compress all 5 of those prompts into one and get a working feature?
Let's reset to the original repo state and try.
I also ran `rustfmt` so maybe the model will find my inconsistent indents less distracting.

Here's our mega prompt:

> Implement Trigger Conditions, a new parameter in the Trigger ParamPage.
These conditions result in a note only playing some of the time.
>
>To do this, add a new parameter type to the Param struct called TrigCondition which contains an instance of new struct called TrigConditionParam that implements ParamType and stores a TriggerCondition.
>
>A TriggerCondition can be either:
>- Probability: The note should only start the specified percentage of the time.
>- Loop: The note should only start during the specified index out of the specified number of loops of the pattern.
>
>The default TriggerCondition is 100% probability.
>
>In the UI, the Trigger Condition parameter should be editable by using a slider to scroll through a list of possible TriggerCondition values. This list should start with Probability enum cases ranging from 0-100, increasing by 5 each time. Then, it should include a Loop enum cases following the pattern of (1,2), (2,2), (1,4), (2,4), all the way up to (8,8). The range of the slider must be limited to the number of trigger conditions.
>
>The run_sequencer function should check the TrigCondition parameter at each trigger before starting the note, and only start the note if its condition is met.

I hit a tool use limit as this was running, but was able to enabe "Burn Mode" to keep going.
I assume this could contribute to blowing through my token limit if I had a paid plan instead of a free trial.

But it did work!
This one prompt resulted in a feature that worked just like the one I built up through both human and LLM work previously.
I pushed the fully LLM-generated code for it to a [new branch](https://gitlab.com/ectucker/electric-wheat-machine/-/commit/f0a92f50817ceb929544d48c622d9efeaa8afebf).

Even when working entirely on its own, the model was able to make a few leaps of logic I didn't specifiy:
- It wrote helper functions for generating the list of trigger conditions and getting indicies in that list.
- It came up with reasonable formats for the parameter `short_format_val()` and `long_format_val()`.
- It gave the parameter "COND" as a name.

It _did_ do something a bit off in the GUI this time; the trigger condition slider has a bit of extra blank space at the bottom relative to other sliders.
I noticed that the agent spent thinking through the GUI work without the hint that it could just copy `enum_param_editor`, so I'm not suprised it missed a detail there.
And I should really make the code for the sliders less repetitive anyways.

{% relImage, "wheat-machine-offset-padding.png", "Screenshot of the parmeter editors in Electric Wheat Machine, showing the new COND parameter." %}

## Takeaway

{% asiderow %}
    {% asiderowcontent %}
I'm left in an interesting position here.
Coding agents impressed me, quite a bit!
The technology here is cool and futuristic-feeling, and I won't pretend it's not.

At the same time, I don't really think they could have saved me any time in this case?
The mega prompt in Round 2 took more keystrokes to type than I think implementing this whole feature would usually take me.
    {% endasiderowcontent %}

    {% asidenote %}
Writing this post certainly took longer than just adding the feature would have.
    {% endasidenote %}
{% endasiderow %}

Maybe I need to scale up and ask the model to do a scary large refactor.
I wouldn't have as clear of an idea what I wanted as a result, so the prompt would be harder to write clearly and I'd need to spend more time validating the result.
Despite it's success here, the idea of asking a model to do something I don't 100% understand _feels_ dangerous.
And if I actually 100% understand something, it's not that much more work to implement it myself.

These tools are new, weird, and I don't have a clear answer yet for if or how I or any other dev should use them.
But at least I understand better now what they actually do.
