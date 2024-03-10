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

## Flag one-login

1st we navigate to androidmanifest.xml file where we find this activity:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/0c170ad8-968b-4e79-af80-188535c5762d)

Now we can decompile the entire program and search for this particular activity
Then we can find the source for that activity and here is the ss of the same:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/427d59b6-2bab-4c8a-8943-42686bc677cd)

Here in the source itself we can find the flag for the challenge

## Flag two

When we open the 2nd chall they give a hint saying “exported activities can be accessed using ADB.

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/29b5b07b-6393-40a0-8e4b-a2327e7f9415)

So now as I know this challenge deals which export activities, I spotted an activity named b25lActivity
Then I searched for it in the decompiled version and found this:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/d53f4176-a588-4ebb-8593-96926c7945dd)

So we just had to call this activity and for that as hint had been given, I used ADB and this was the cmd which I used:

**>adb shell am start -n b3nac.injuredandroid/b3nac.injuredandroid.b25lActivity**

## Flag three

First we goto AndroidManifest.xml and find FlagThreeActivity and then search it in the decompiled version and then we can find the activity itself
We open that and see this:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/fa418a9a-5789-4d73-8388-250a4ba433c3)

We had seen one of the hint as “R stands for resources” and 2nd hint as “check .xml files”
So now we know it has something to do with resources inside which we find res folder and inside which we find values folder and inside that we can find tons of .xml files.

Now we need to find what that string means so we navigate to string.xml and see this:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/663bea44-19bc-4ad1-b46d-85f32c1dc2e7)

## Flag four

And after base64 decoding I got the flag as: 4_overdone_omelets

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/425cd5e6-df3d-4361-beb7-e3dcbde7cea1)

## Flag five

1st we open the chall on phone…and it shows a weird error
Then I just tried to open it again and it said the msg “keep trying”
Now I just listened to them and tried again to open the app and it gave me the flag as: {F1v3}

