---
layout: '@/templates/BasePost.astro'
title: Side Channel Attacks
description: Here I have explained about the project on the topic of side channel attacks on hardware devices.
pubDate: 2023-10-09T00:00:00Z
imgSrc: '/assets/images/sidechannel.png'
imgAlt: 'InjuredAndroid'
---

# Side channel attacks

In this project, I used side-channel attacks to guess the secret key which had been used.

I had mainly focused on 3 types:
1) Simple Power Analysis
2) Differential Power Analysis
3) Correlation Power Analysis

## Simple Power Analysis

Out of all the three, this method is the most straightforward one. The concept is we just directly see which ith bit in the key is crossing the threshold. The bit that is crossing the threshold is said to be the ith bit of the secret key. For example, if assume the key to be 1A2B3C. Now 1st bit is 1, we find the power consumption which is used by all the possible bits, that is from 0 to F and we will naturally find that 1 will be the one which is crossing the threshold. So it is the 1st bit of secrt key. 

Now going to the 2nd bit, the 2nd bit is A. Now we try to analyze the power consumption used by all the possible bits which can be found in the 2nd bits position. Naturally, as we can find that A will cross the threshold, so A is the 2nd secret bit. We need to run this for the entire length of the secret key and like that we can guess the entire password.

The code which I used here is:
```python
guessed_pw = ""

for _ in range(0, 5):  
    biggest_diff = 0
    biggest_char = '\x00'
    ref_trace = cap_pass_trace(guessed_pw + "\x00\n")
    
    for c in 'abcdefghijklmnopqrstuvwxyz0123456789': 
        trace = cap_pass_trace(guessed_pw + c + "\n")
        diff = np.sum(np.abs(trace - ref_trace))

        if diff > biggest_diff:
            biggest_diff = diff
            biggest_char = c
            
    guessed_pw += biggest_char
    print(guessed_pw)
```

Note: The range (0,5) is being used because I know the length of the password is 5. This code is part of much bigger code and I have added this here to just give an idea on how it can  be implemented. 

## Differential Power Analysis

In this method, we compare the power consumption which is being used by all the possible bits and then whichever bit uses the most power will be the secret key.
For example, if the power consumed by F is 0.5, the power consumed by A is 0.4 and the power consumed by C is 0.41. From this, we can find that the power consumed by F is higher than anything else. So we conclude that F is the secret key. Now we need to repeat this procedure for the entire length of the secret key.
```python
for subkey in trange(0, 16, desc="Attacking Subkey"):
    max_diffs = [0]*256
    full_diffs = [0]*256
    for guess in range(0, 256):
        full_diff_trace = calculate_diffs(guess, subkey)
        max_diffs[guess] = np.max(full_diff_trace)
        full_diffs[guess] = full_diff_trace
    sorted_args = np.argsort(max_diffs)[::-1]
    key_guess.append(sorted_args[0])
    print("Subkey %2d - most likely %02X (actual %02X)"%(subkey, key_guess[subkey], known_key[subkey]))

Note: This is just a partial code of a much bigger code, I added it here to just show the way I did

# Correlation Power Analysis

In this method, we use a correlation factor between X and Y where X is the bits that we guess and Y is the power consumption traces.
For example, let's assume that 4th bit of the secret key is 5. Now for the 4th bit of the secret key we make an array of values which it can take, that is from 0 to F. This array is nothing but X and Y tells about how much power consumption is taken by each of them (0-F). Now using this array of X and Y it finds which bit in the X array has the most positive correlation factor with the value present in Y. In our example, as we assumed the 4th bit is 5, we will observe that 5 will have the most positive correlation factor as compared to any other from 0 to F.

The correlation which I used is:
![image](https://github.com/Akhil0202/Akhil0202.github.io/assets/66013822/a2e07d7a-2db0-4221-9800-b04d3ee3e787)

The code which I used is:
```python
hws = np.array([[HW[aes_internal(textin[bnum],kguess)] for textin in textin_array]]).transpose()
hws_bar = mean(hws)
o_hws = std_dev(hws, hws_bar)
correlation = cov(trace_array, t_bar, hws, hws_bar)
cpaoutput = correlation/(o_t*o_hws)
maxcpa[kguess] = max(abs(cpaoutput))
```

Note: This is just a partial code of a much bigger code, I added it here to just show the way I did, like by finding the mean, then finding the standard deviation then finding the correlation factor.


