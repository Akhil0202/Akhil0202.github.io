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

When we open the 2nd chall they gave a hint saying “exported activities can be accessed using ADB.

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

## Flag six

We navigate to the FlagSixLoginActivity class which is present in b3nac.injuredandroid. There we can see this method called ```submitFlag```:

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/38a0f477-0632-4dac-9ec2-2080f4142a64)

This method basically checks if the user input is equal to the decrypted value. If it is equal then it prints out the flag. 
So here we need to use a tool called Frida to solve this challenge. Frida is a tool that is used to hook methods and manipulate the put put which is given by those methods.
So now we need to setup Frida server and write Frida script.
This is the Frida script which I have used:
```javascript
function intercept() {
// Check if frida has located the JNI
    if (Java.available) {
    //Switch to the Java context
        Java.perform(function() {
            const decrypt = Java.use('b3nac.injuredandroid.k');
            decrypt.a.overload('java.lang.String').implementation = function (send) {
                console.log('decrypting data' + send );
                var flag = this.a(send);
                console.log('decrypted data (flag) ' + flag);
                return flag;
            }   
            console.log('decrypt hooked - check a flag')
        }
    )}
}
intercept()
```
So basically in this code we call a method named "a" which does DES encryption. So we write a Frida script to call that method and give the input as k3FElEG9lnoWbOateGhj5pX6QsXRNJKh///8Jxi8KXW7iDpk2xRxhQ==. Now we send dummy data in the activity. So the data(k3FElEG9lnoWbOateGhj5pX6QsXRNJKh///8Jxi8KXW7iDpk2xRxhQ==) gets decrypted and gives us the flag in the Frida server, {This_Isn't_Where_I_Parked_My_Car}. Now we just need to type this onto our activity which gives us the message that we solved the challenge.
