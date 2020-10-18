# Elevation-Map-Solution

## Problem Statement: 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

![Image of elevation map from LeetCode](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6 units of water are being trapped.
```

## Approach:
* Iterate through the elevation values:
* Find and store the potential height of water from going from left to right and right to left
* For each elevation value, find the smaller amount of potential water that could be trapped and subtract from it the current elevation value.
  
## Explanation:
When thinking about how to solve this problem, I first thought about the problem in the context of mountains and valleys. If you had a series of mountain peaks with valleys interspersed between them, how would you intuitively think about the amount of water that could be trapped in the valley (i.e. between mountain peaks)? 

What is key to remember in creating an algorithmic solution is that you have to find the smaller peak that would trap the water, and then subtract from it the elevation level you're currently at to calcuate the actual amount of water that would be trapped at the elevation level.

![Visual Explanation of Logic](https://i.imgur.com/C8tnnsm.png)
