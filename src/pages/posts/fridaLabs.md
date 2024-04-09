---
layout: '@/templates/BasePost.astro'
title: Frida Lab Walkthrough
description: This blog contains solutions for the challenges that I solved from frida labs.
pubDate: 2024-02-06T00:00:00Z
imgSrc: '/assets/images/frida.png'
imgAlt: 'InjuredAndroid'
---

Welcome to my walkthrough for frida labs. Here I have tried to explain you guys on how to solve challenges from frida labs apk so let's get started.<br>
This is the link to GitHub repo if you guys want to solve it: https://github.com/DERE-ad2001/Frida-Labs.<br>
PS: I am new to writing walkthroughs so forgive me if the explanations are not detailed enough

## Level 1

Opening the apk in JADX this is what I found

![Screenshot from 2024-04-09 17-11-55](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/a37c15ce-d628-4812-af4b-8a9b8cda7d51)
![Screenshot from 2024-04-09 17-13-04](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/9bd45c0c-5985-4522-9eb5-cb70f208cbdb)

So basically there is  methid `get_random` which randomly generates a number between 0 to 100 then user inputs a number. There is a mathematical operation: `((i*2)+4 == i2)`
Here i is the number returned by `get_random` and i2 is what user inputs.

Now to solve this challenge if we know what is returned by `get_random` then we can find what we should input to the app.

So this is my frida script:

```JavaScript
Java.perform(function() {

    var a= Java.use("com.ad2001.frida0x1.MainActivity");
    a.get_random.implementation = function(){
      console.log("Returning 1")
      return 1;
    }
})
```
Now here I am returning 1. So I need to give input as 6 after this operation: `(i*2)+4`

Now I run this Frida script:
`frida -l chall01.js -U -f com.ad2001.frida0x1`

![Screenshot from 2024-04-09 17-20-15](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/c0032d72-5dff-49ec-bfa3-e88b0f8bf21d)

And I have got the flag and challenge has been solved.

---
## Level 2

Now in the 2nd challenge I saw this in JADX:

![Screenshot from 2024-04-09 18-37-42](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/4b82f8e6-fd19-475f-a000-ced7d6daf2a6)

So basically we need to hook this function and send 4919 as paramter and that will get us the flag. So this is my frida script

```Javascript
Java.perform(function(){

    var a = Java.use("com.ad2001.frida0x2.MainActivity");
    a.get_flag(4919);
})
```
Now I run the cmd using `frida -U -f com.ad2001.frida0x2` & `%load chall02.js`

The result is:
![Screenshot from 2024-04-09 18-41-06](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/43f9fe21-2c47-4876-b310-eb3a566cf43b)

---

## Level 3
