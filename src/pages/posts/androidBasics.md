# Android basics

## Basics about android

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

On this layer, we install our application. These are the applications which we use in our day.
