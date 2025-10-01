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
- `Transfer-Encoding`: This specifies that the request uses "chunks" of data. How it works is that first the size of chunk is mentioned in hexadecimal, followed by the data and the full stop equivalent of chunk message is 0, so each chunk of data is always followed by 0 which specifies that chunk of data is done.

Now the issue arises, what if a request has both CL and TE in the header? It works in such a way that if both CL and TE are present in then CL should be ignored. Now itseems like the issue is resolved but it isnt resolved yet. If two or more servers are in play then the issue still persists.
- Some servers might support TE but can be made to not process it if the header is obfuscated in some way.
- Some servers do not support TE.

Now there are mainly 3 types of scenarios for request smuggling to happen:
- CL.TE
- TE.CL
- TE.TE

Now lets dive into each of them and explain it in more detail

#### CL.TE

In this case the FE server uses CL and BE server uses TE to find the size of the request. Lets take this request as an example:
```POST / HTTP/1.1
Host: vulnerable-website.com
Content-Length: 13
Transfer-Encoding: chunked

0

SMUGGLED
```
Now lets see what will happen when someone sends this request:
- FE which uses CL to determine the end of request body, receives the request with CL 13, so the entire request which is sent to FE is sent to BE.
- BE which uses TE to determine the end of request body, receives the request with TE as chunked and checks for 0 which will mark the end of the request body. It sees 0 and terminates the request.
- Now the request which was sent by FE to BE is processed by BE till the 0, now the "SMUGGLED" part of the request is treated as a new request by BE because the previous request terminated when it recieved the 0. So the smuggled is treated as a new request by the BE.
- So now if we send the request again, the sumggled part is added to that is sent.

#### TE.CL



