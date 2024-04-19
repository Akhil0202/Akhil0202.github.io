---
layout: '@/templates/BasePost.astro'
title: Frida Lab Walkthrough
description: This blog contains solutions for the challenges that I solved from frida labs.
pubDate: 2024-02-06T00:00:00Z
imgSrc: '/assets/images/frida.png'
imgAlt: 'InjuredAndroid'
---

Welcome to my walkthrough for frida labs. Here I have tried to explain you guys on how to solve challenges from Frida labs apk so let's get started.<br>
This is the link to the GitHub repo if you guys want to solve it: https://github.com/DERE-ad2001/Frida-Labs.<br>
PS: I am new to writing walkthroughs so forgive me if the explanations are not detailed enough

## Level 1

Opening the apk in JADX this is what I found

![Screenshot from 2024-04-09 17-11-55](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/a37c15ce-d628-4812-af4b-8a9b8cda7d51)
![Screenshot from 2024-04-09 17-13-04](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/9bd45c0c-5985-4522-9eb5-cb70f208cbdb)

So basically there is method `get_random` which randomly generates a number between 0 to 100 then the user inputs a number. There is a mathematical operation: `((i*2)+4 == i2)`
Here i is the number returned by `get_random` and i2 is what the user inputs.

Now to solve this challenge if we know what is returned by `get_random` then we can find what we should input to the app.

So this is my Frida script:

```javaScript
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

```javascript
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

Opening the 3rd apk in JADX we can see that:

![Screenshot from 2024-04-09 18-59-01](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/25ad3c8b-6b1f-4a4b-b5b6-277a8e043099)

There is a Checker class and a variable called code and when the code's value is 512 it gives the flag. So I write my Frida script in such a way that the code's value is equal to 512. Here is my Frida script:

```javascript
Java.perform(function(){

    var a = Java.use("com.ad2001.frida0x3.Checker")
    a.code.value = 512;
})
```
I ran this script using `frida -U -f com.ad2001.frida0x3` & `%load chall03.js`

And I got the flag:

![Screenshot from 2024-04-09 18-57-55](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/fbe896a9-5077-46f7-8578-5b2c9dc0a013)

--- 

## Level 4

![Screenshot from 2024-04-09 21-46-26](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/d7bb01de-8edd-47cf-8540-93f92faa58fd)

```javascript
Java.perform(function(){

    var a = Java.use("com.ad2001.frida0x4.Check");
    var b = a.$new();
    var c = b.get_flag(1337);
    console.log(c);

})
```

![Screenshot from 2024-04-09 21-45-09](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/93e4a0fb-07f4-45cb-9977-7b0f3d3cd373)

---

## Level 5

![Screenshot from 2024-04-09 22-08-56](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/6f48834c-8f06-4f40-b2ef-a1e4dc56dabe)

```javascript
Java.perform(function () {
    var a = Java.use('com.ad2001.frida0x5.MainActivity');
    Java.choose('com.ad2001.frida0x5.MainActivity', {
        onMatch: function(instance) {
            console.log("Found instance: " + instance);
            Java.scheduleOnMainThread(function() {
                instance.flag(1337);
            });
        },
        onComplete: function() {}
    });
});
```

And I got the flag:

![Screenshot from 2024-04-09 22-09-47](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/660ca8bc-1b9c-45b0-89e2-7e5f4ef3f5c0)

---

## Level 6

In this challenge I opened it using JADX and inspected MainActivity and saw this:
![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/b0a98850-c704-4453-abfc-e2bf8125ba5c)

Here we can see a Checker class which is called in MainActivity. Now when I navigate to Checker class I saw this:
![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/59c19555-017e-4915-a6a3-e45452c93cb9)

This class has 2 integer value.

Now to solve this challenge we need to create an instance for Checker class and set values of num1 and num2 as 1234 and 4321 respectively. Then we find a MainActivity function and once it is matched we call the Checker method. This is the code:

```javascript
Java.perform(function() {
    var Checker = Java.use("com.ad2001.frida0x6.Checker");
    var checker = Checker.$new();
    checker.num1.value = 1234;
    checker.num2.value = 4321;

    var MainActivity = Java.use("com.ad2001.frida0x6.MainActivity");
    Java.choose("com.ad2001.frida0x6.MainActivity", {
        onMatch: function(instance) {
            console.log("MainActivity instance found: " + instance);
            instance.get_flag(checker);
        },
        onComplete: function() {
            console.log("Search complete.");
        }
    });
});

And I got the flag:
![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/b2fd2209-1f5c-42b0-a680-71066714dc60)

---

## Level 7
