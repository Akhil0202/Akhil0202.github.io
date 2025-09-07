---
layout: '@/templates/BasePost.astro'
title: Request Smuggling
description: In this blog I will explain what is request smuggling attack and how we can exploit it.
pubDate: 2025-02-06T00:00:00Z
imgSrc: '/assets/images/rs.png'
imgAlt: 'requestSmuggling'
---

Hi everyone, in this blog, I will be explaining what Request Smuggling is and the different types of attacks. So without any further ado, let's get started. 

### Introduction to request smuggling

Nowadays, how websites work is that, when a user sends a request, it first passes through a FE server(proxy, like Cloudflare) and then to the BE server. Now sometimes the FE server and BE server might not have set the boundaries properly, which will make request smuggling attack possible. Let me explain it in a simple manner, when FE server sends the request to BE server, due to discrepancies between the FE and BE servers, where the request ends and where the new request starts will be different. 

Let's dive deeper into the attack now:
The main why request smuggling attacks are possible is because HTTP/1 supports two types of header which will specify where a particular request ends. Those 2 headers are:
- `Content-Length`: As the name suggests, it basically tells the length of the request body. If the request body contains "name=d4rk", then the value of CL will be 9.
- `Transfer-Encoding`: 
