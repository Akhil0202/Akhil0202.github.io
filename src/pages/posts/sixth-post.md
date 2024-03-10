---
layout: '@/templates/BasePost.astro'
title: Injured Android Walkthrough
description: This blog contains solution for some of the challenges which I solved from injured android.
pubDate: 2024-02-06T00:00:00Z
imgSrc: '/assets/images/InjuredAndroid.png'
imgAlt: 'InjuredAndroid'
---

Welcome to my walkthrough for Injured android. Here I have tried to explain you guys on how to solve challenges from injured android apk so let's get started.<br>
PS: I am new to writing walkthrough so forgive me if the explanations are not detailed enough

## Flag one-login(IJ)

1st we navigate to androidmanifest.xml file where we find this activity:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/0c170ad8-968b-4e79-af80-188535c5762d)

Now we can decompile the entire program and search for this particular activity
Then we can find the source for that activity and here is the ss of the same:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/427d59b6-2bab-4c8a-8943-42686bc677cd)

Here in the source itself we can find the flag for the challenge
