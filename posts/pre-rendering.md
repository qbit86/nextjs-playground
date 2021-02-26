---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**.
The difference is in **when** it generates the HTML for a page.

![Kiwi][kiwi-fruit]

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**.
The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

$$
φ(x) = \frac1{\sqrt{2π}}\exp\left(-\frac12x^2\right)
$$

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page.
You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

Lorem ipsum $\rho$ dolor sit amet.

[kiwi-fruit]: /images/kiwi-fruit.png
