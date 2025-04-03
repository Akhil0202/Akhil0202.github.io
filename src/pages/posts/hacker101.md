---
layout: '@/templates/BasePost.astro'
title: Hacker101 CTF writeups
description: This blog contains solutions for the Hacker101 CTF hosted by Hackerone.
pubDate: 2024-06-19T00:00:00Z
imgSrc: '/assets/images/image.png'
imgAlt: 'Hacker101 CTF'
---

## Hacker 101 writeup

Hello everyone, here are my writeup for [Hacker101 CTF](https://ctf.hacker101.com/ctf) hosted by Hackerone. Hopefully, I have explained it in a simple and well detailed manner.

--- 

### A little something to get you started

So this is the most simple challenge out of all. When goto the website we just see a simple screen.

<img width="572" alt="image" src="https://github.com/user-attachments/assets/01642477-0ad3-4a98-a52c-83136dea0a02" />

So this is just a blank website with nothing much. So I went and checked the source code of the website and found this:

<img width="271" alt="image" src="https://github.com/user-attachments/assets/6fbe1e2b-9db9-4ba4-b4eb-d83a520a854c" />

Now I appended /background.png to the URL and boom:

<img width="422" alt="image" src="https://github.com/user-attachments/assets/cd676ca4-46aa-4182-83aa-0c059f467a9c" />

And voila I got the flag and submitted it.

---

### Micro-CMS v1




