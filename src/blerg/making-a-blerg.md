---
title: Making a Blerg
slug: making-a-blerg
description: How and why we put this website together.
uploadDate: 2026-06-25
tags: ["meta"]
author: Anna, broarr
image:
  src: "https://docs.astro.build/assets/rose.webp"
  alt: "testing some alt text"
---
Making a co-op is a lot of work. Between writing bylaws, applying for grants,
and creating a fully fleged mesh network capable of delivering internet
connectivity to people across the city, there's a lot going on. And while we
were taking notes interally, we figuring there were some things we really wanted
to document publically. Sure, it's useful for _us_ to know how BGP works, but
what if one of our members wants to learn about networking? Why not share this
information? Even though we're early into this process at this point, if there's
one thing I've learned so far, it's that making a co-op is hard! And I've
already learned so much. So hopefully we can share what we learn as we learn it
for anyone and everyone to benefit from.

### So, how did we do it?

We make a lot of websites, so when we decided to start a blerg, we had a lot of
technologies to choose between. We knew we wanted something that could generate
static websites for two reasons:

1. It makes hosting this website trivially easy. The initial plan is to use
   GitHub pages, but moving it anywhere else shouldn't be hard once we can get
   our own infrastucture laid.
2. It makes the website as accessible as possible. You don't need any special
   technology to view this (beyond a normal computer and web-browser), and it's
   mostly future proof. HTML and CSS aren't going away any time soon.

Given that, we had a few options. We initially started trying to use
[Lume](https://lume.land/), but we found the API a little un-ergonomic, and
quickly switched to [Astro](https://astro.build). Astro is almost built to
handle this use-case (the super light weight blog), and the API is really
intuitive. So it was kind of a natural fit once we decided to use it. We started
a new project, added some base styles with
[Open Props](https://open-props.style/), and then started buliding out our
design system.
