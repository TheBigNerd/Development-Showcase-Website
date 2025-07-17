---
id: 1
number: "#0001"
title: "Two Sum"
difficulty: "Easy"
date: "16/07/2025"
tags: ["Array", "Hash Table"]
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
---

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

## My Approach

For my first attempt, I used a brute force approach with a nested loop to check every pair of numbers [Solution 1]. This proved to be inefficent with a time complexity of O(N^2) and a runtime of 2107 ms. I then tried a more efficent approach using a hash table [Solution 2]. My first attempt still used two for loops but was an improved from the first attempt as it run all cases in just 3 ms with a time complexity of O(N). Even though this is the best time complexity achievable after research I edited my solution to have a runtime of 1ms.

## Solution

### Solution 1: Brute Force Approach

```python
class Solution(object):
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return([i, j])
```

### Solution 2: Hash Table Approach

```python
class Solution(object):
    def twoSum(self, nums, target):
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
        return []
```

### Solution 3: Optimized Hash Table Approach

```python
class Solution(object):
    def twoSum(self, nums, target):
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i
        return []
```

## Key Insights

Hash tables are perfect for lookup operations. By storing complements, we can solve this in one pass.

## What I Learned

Before this problem I didn't look at using hash tables in this way before which greatly helps my thinking process in future problems.
