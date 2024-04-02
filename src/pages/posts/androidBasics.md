---
layout: '@/templates/BasePost.astro'
title: Android Basics
description: This blog contains all the basic things related to Android including its architecture, application components etc.
pubDate: 2023-10-25T00:00:00Z
imgSrc: '/assets/images/androidBasics.png'
imgAlt: 'InjuredAndroid'
---

# Android basics

## Android architecture

Android is made up of 5 layers

![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/c708f952-68b3-4e49-9086-bb998dd88023)

We begin each of these by starting from the bottom

### 1) Linux kernel

We know that Android is built upon Linux, It is the core of Android. Linux makes it easier to integrate hardware with software. It has hardware drivers which simplifies the process of integrating hardware.

### 2) Libraries

Here we have all the important things needed for Android to work. For example, here there is an SQLite database that can be used to store data, it has an open-source Web browser engine WebKit, it has SSL libraries responsible for Internet security, etc.

Here there are some Android libraries also which makes the development part easier. Some of the libraries are as follows:<br>
- **android.database** − Used to access data published by content providers and includes SQLite database management classes.
- **android.text** − Used to render and manipulate text on a device display.

There are more like this, these are just a couple of examples.

### 3) Android runtime

This is basically like a Java VM which is used to run. The Dalvik VM allows the app to run its own process and each of them have their own instances. In Android, Java is compiled into the DEX format. For earlier versions of Android, the bytecode was translated by the Dalvik virtual machine. For more recent versions of Android, the Android Runtime (ART) is used.

### 4) Application Framework

This layer provides many higher-level services to applications in the form of Java classes. Application developers make use of these services when they make applications.

Some examples are:

- **Activity Manager** − Controls all aspects of the application lifecycle and activity stack.
- **Content Providers** − Allows applications to publish and share data with other applications.

### 5) Application

On this layer, we install our application. These are the applications that we use in our day-to-day lives. For example apps like camera, contacts and messages.

---

## Application components

These are the building blocks for an Android application. These components are mentioned in the AndroidManifest.xml file of that particular app. 
The four main components are as follows:

- **Activities** - They dictate the UI and handle the user interaction with the smartphone screen.
- **Services** - These are used to handle background processing associated with an application.
- **Broadcast Receivers** - These are used for communicating between the Android OS and applications.
- **Content Providers** - These are used for storage and database purposes.

### 1) Activities

Activity is nothing but a UI screen that can interact with the user. For example, let's consider an email application, when we open the app we see our inbox is one activity, composing a mail is another activity as it goes to a different screen similarly viewing one mail is another activity, and so on.
Now each activity have their own activity life cycle.
![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/af2286ad-2755-4647-a0f9-dc23e319d926)

Syntax: `public class activity extends Activity`

- **onCreate()** - This is the first callback and is called when the activity is first created.
- **onStart()** - This callback is called when the activity becomes visible to the user.
- **onResume()** - This is called when the user starts interacting with the application.
- **onPause()** - The paused activity does not receive user input and cannot execute any code and is called when the current activity is being paused and the previous activity is being resumed.
- **onStop()** - This callback is called when the activity is no longer visible.
- **onDestroy()** - This callback is called before the system destroys the activity.
- **onRestart()** - This callback is called when the activity restarts after stopping it.

### 2) Services

Services is a component that runs in the background without the need for an interaction. For example take Spotify, even if we close the activity that runs the music, it still runs in the background and we can hear the music.
Syntax: `public class service extends Service`

There are mainly 2 types of services:

- **Started** - A service is started when an application component, such as an activity, starts it by calling startService(). Once started, a service can run in the background indefinitely, even if the component that started it is destroyed.
- **Bound** - A service is bound when an application component binds to it by calling bindService(). Bound is used to bind multiple components. It is also used for client-server interaction. Take Spotify for example, we can interact with it in the background. We can play, pause, stop, etc the music because all these are "bounded" together.

### 3) Broadcast Receivers

Broadcast receivers are used to simply respond to broadcast messages from other applications or from the system itself. We create a broadcast receiver by 
implementing a subclass of BroadcastReceiver class and overriding the onReceive() method where each message is received as an Intent object parameter.
```java
public class MyReceiver extends BroadcastReceiver {
   @Override
   public void onReceive(Context context, Intent intent) {
      Toast.makeText(context, "Intent Detected.", Toast.LENGTH_LONG).show();
   }
}
```
There are mainly 2 types of broadcast messages:

- **System broadcast messages** - These are the broadcast messages which come from the system itself. For example when your battery level is too low(	
android.intent.action.BATTERY_LOW), when calling someone(android.intent.action.CALL) etc.
- **Custom broadcast messages** - These are used when you want your app itself to generate broadcast messages. We create a broadcast method and create an intent inside it. Then we can call sendBroadcast() and pass the intent as a parameter to it like this `sendBroadcast(intent)`.

### 4) Content Providers

Content providers are used for storing data. It can store data in files, databases, or even over a network.
Syntax: `public class store extends ContentProvider`.
Content provider is very similar to a database hence it provides basic 6 methods:
- **onCreate()** - This is used when the content provider is started.
- **onQuery()** - This receives a query from the user.
- **insert()** - This inserts new data into the content provider
- **delete()** - This deletes the data from the content provider
- **update()** - This method updates the existing data present in the content provider
- **getType()** - This method returns the MIME type of the data at the given URI.

Content providers are accessed in URI, the format is: `<prefix>://<authority>/<data_type>/<id>`
Prefix is always set to content.<br>
authority is the name of the content provider. Eg: contact, browser, etc.<br>
data_type indicates the type of data that this particular provider provides.<br>
id specifies the specific record requested.<br>

We need to enclose our content provider in the provider tag while adding it to our AndroidManifest.xml file
```java
<provider android:name="store"
         android:authorities="com.example.MyApplication.store"/>
```



