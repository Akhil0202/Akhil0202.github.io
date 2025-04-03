---
layout: '@/templates/BasePost.astro'
title: Hacker101 CTF writeups
description: This blog contains solutions for the Hacker101 CTF hosted by Hackerone.
pubDate: 2024-06-19T00:00:00Z
imgSrc: '/assets/images/image.png'
imgAlt: 'Hacker101 CTF'
---

# Hacker 101 writeup

Hello everyone, here are my writeup for [Hacker101 CTF](https://ctf.hacker101.com/ctf) hosted by Hackerone. Hopefully, I have explained it in a simple and well detailed manner.

--- 

## A little something to get you started

So this is the most simple challenge out of all. When goto the website we just see a simple screen.

<img width="572" alt="image" src="https://github.com/user-attachments/assets/01642477-0ad3-4a98-a52c-83136dea0a02" />

So this is just a blank website with nothing much. So I went and checked the source code of the website and found this:

<img width="271" alt="image" src="https://github.com/user-attachments/assets/6fbe1e2b-9db9-4ba4-b4eb-d83a520a854c" />

Now I appended /background.png to the URL and boom:

<img width="422" alt="image" src="https://github.com/user-attachments/assets/cd676ca4-46aa-4182-83aa-0c059f467a9c" />

And voila I got the flag and submitted it.

---

## Micro-CMS v1

After going to website this is what is shown to us:

<img width="293" alt="image" src="https://github.com/user-attachments/assets/d14cbd3c-ae2a-4e5c-88bc-0e54183926fa" />

After that, I navigated to testing and I could see an option called "edit this page". After clicking on that I could enter my text in a textbox.

<img width="545" alt="image" src="https://github.com/user-attachments/assets/799fc4d9-daf0-4744-a483-9ac7e30893cb" />

My first intuition after seeing this was a XSS attack but its mentioned that "Markdown is supported, but scripts are not" hence `<script>alert(1)</script>` payload doesn't work.
So I went ahead with `<img src="x" onerror=alert(1)>` and this was the result:

<img width="1919" alt="image" src="https://github.com/user-attachments/assets/7e291489-75df-45f7-9d29-04b3fdb9bb12" />

And then clicking on "go home" gave me the flag:

<img width="343" alt="image" src="https://github.com/user-attachments/assets/7704d2bc-439b-40c4-8805-882880b88089" />

Now coming to the next part the hint was saying we need to tamper with the input. Then I try to tamper around the textbox but nothing was happening.
Other place where the input can be tampered is the URL, so now this was the URL: `https://e549d3ba23b259134f2262ef4b8c17f6.ctf.hacker101.com/page/edit/1`, now after changing the number present in the URL from 1 to 2, 2 to 3, so on when the input was 6 I got the flag.

<img width="479" alt="image" src="https://github.com/user-attachments/assets/e0c16b6d-c63b-4247-b1fe-3d850b04caee" />

Now one more option is that we can tamper with the URL by adding special characters. Now I got the flag by adding ' at the end of URL

<img width="470" alt="image" src="https://github.com/user-attachments/assets/21d763ac-3eb0-4ae1-8d22-8d235085898d" />












