---
layout: '@/templates/BasePost.astro'
title: Frida Lab Walkthrough
description: This blog contains solutions for the challenges that I solved from frida labs.
pubDate: 2024-02-06T00:00:00Z
imgSrc: '/assets/images/frida.png'
imgAlt: 'InjuredAndroid'
---

Welcome to my walkthrough for frida labs. Here I have tried to explain you guys on how to solve challenges from frida labs apk so let's get started.<br>
PS: I am new to writing walkthroughs so forgive me if the explanations are not detailed enough

## Level 1
Aim: Change class challenge_01's variable 'chall01' to: 1

After downloading the apk and analyzing it in JADX I saw challenge_01 class

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/b524fa66-a36f-42d7-9be0-f37918271109)

Quite an easy challenge and we just need to change the variable chall01 to 1.

```JavaScript
Java.perform(function(){

    var a = Java.use("uk.rossmarks.fridalab.challenge_01")
    a.chall01.value=1
})
```

In the code I have hooked the the class challenge_01 in a variable 'a'. Then I accessed the variable chall01 and changed it to 1.

Running the script by using `frida -U -f uk.rossmarks.fridalab` `%load l1.js`
I solved the challenge.

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/656db806-9e6a-4865-be16-db300b13470a)


