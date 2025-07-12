'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample LeetCode problems data - most recent first
const leetcodeProblems = [
  {
    id: 5,
    number: "#0005",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    date: "2025-01-10",
    tags: ["String", "Dynamic Programming"],
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    content: {
      problem: "Given a string s, return the longest palindromic substring in s.",
      approach: "I used the expand around centers approach. For each character (and pair of characters), I expand outward while the characters match to find the longest palindrome centered at that position.",
      solution: `def longestPalindrome(self, s: str) -> str:
    def expand_around_center(left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    
    longest = ""
    for i in range(len(s)):
        # Check for odd length palindromes
        palindrome1 = expand_around_center(i, i)
        # Check for even length palindromes
        palindrome2 = expand_around_center(i, i + 1)
        
        current_longest = palindrome1 if len(palindrome1) > len(palindrome2) else palindrome2
        if len(current_longest) > len(longest):
            longest = current_longest
    
    return longest`,
      insights: "The key insight is that every palindrome has a center. By checking both odd and even length palindromes from each position, we can find the longest one efficiently.",
      learnings: "This problem taught me about the expand around centers technique, which is more space-efficient than the dynamic programming approach."
    }
  },
  {
    id: 4,
    number: "#0004",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    date: "2025-01-08",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    timeComplexity: "O(log(min(m,n)))",
    spaceComplexity: "O(1)",
    content: {
      problem: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      approach: "I used binary search on the smaller array to find the correct partition point where the left side contains exactly half of all elements.",
      solution: `def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    left, right = 0, m
    
    while left <= right:
        partitionX = (left + right) // 2
        partitionY = (m + n + 1) // 2 - partitionX
        
        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
        minRightX = float('inf') if partitionX == m else nums1[partitionX]
        
        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
        minRightY = float('inf') if partitionY == n else nums2[partitionY]
        
        if maxLeftX <= minRightY and maxLeftY <= minRightX:
            if (m + n) % 2 == 0:
                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
            else:
                return max(maxLeftX, maxLeftY)
        elif maxLeftX > minRightY:
            right = partitionX - 1
        else:
            left = partitionX + 1`,
      insights: "The key insight is that we need to partition both arrays such that every element on the left is smaller than every element on the right.",
      learnings: "This problem taught me advanced binary search techniques and how to work with partitions in sorted arrays."
    }
  },
  {
    id: 3,
    number: "#0003",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    date: "2025-01-05",
    tags: ["Hash Table", "String", "Sliding Window"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))",
    content: {
      problem: "Given a string s, find the length of the longest substring without repeating characters.",
      approach: "I used the sliding window technique with a hash map to track character positions. When I encounter a duplicate, I move the left pointer to skip the duplicate.",
      solution: `def lengthOfLongestSubstring(self, s: str) -> int:
    char_map = {}
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        if s[right] in char_map and char_map[s[right]] >= left:
            left = char_map[s[right]] + 1
        
        char_map[s[right]] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length`,
      insights: "The sliding window technique is perfect for substring problems. The key is knowing when to shrink the window.",
      learnings: "This problem helped me understand the sliding window pattern, which is applicable to many string and array problems."
    }
  },
  {
    id: 2,
    number: "#0002",
    title: "Add Two Numbers",
    difficulty: "Medium",
    date: "2025-01-03",
    tags: ["Linked List", "Math", "Recursion"],
    timeComplexity: "O(max(m,n))",
    spaceComplexity: "O(max(m,n))",
    content: {
      problem: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
      approach: "I iterate through both linked lists simultaneously, adding corresponding digits and handling carry values.",
      solution: `def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode(0)
    current = dummy
    carry = 0
    
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        total = val1 + val2 + carry
        carry = total // 10
        digit = total % 10
        
        current.next = ListNode(digit)
        current = current.next
        
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    
    return dummy.next`,
      insights: "Using a dummy node simplifies the logic for building the result linked list. Don't forget to handle the final carry.",
      learnings: "This problem reinforced linked list manipulation and taught me about handling carry in addition algorithms."
    }
  },
  {
    id: 1,
    number: "#0001",
    title: "Two Sum",
    difficulty: "Easy",
    date: "2025-01-01",
    tags: ["Array", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    content: {
      problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      approach: "I used a hash map to store each number and its index as I iterate through the array. For each number, I check if its complement (target - current number) exists in the hash map.",
      solution: `def twoSum(self, nums: List[int], target: int) -> List[int]:
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    
    return []`,
      insights: "Hash tables are perfect for lookup operations. By storing complements, we can solve this in one pass.",
      learnings: "This was my first LeetCode problem and taught me the power of hash tables for optimization."
    }
  }
];

export default function LeetCode() {
  const [selectedProblem, setSelectedProblem] = useState(leetcodeProblems[0]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-400/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container mx-auto px-4 py-8 pt-35">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-200px)]">
          {/* Left Sidebar - Problems List */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Problems Solved ({leetcodeProblems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[calc(100vh-350px)] overflow-y-auto">
                  {leetcodeProblems.map((problem) => (
                    <div
                      key={problem.id}
                      className={`p-4 cursor-pointer transition-all duration-200 border-b border-gray-700 hover:bg-gray-800/50 ${
                        selectedProblem.id === problem.id
                          ? 'bg-blue-600/20 border-l-4 border-l-blue-400'
                          : ''
                      }`}
                      onClick={() => setSelectedProblem(problem)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-400 font-mono text-sm">
                          {problem.number}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        {problem.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {problem.date}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Selected Problem Details */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gray-900/50 border-gray-700 backdrop-blur-sm flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-white text-2xl mb-2">
                      {selectedProblem.number} {selectedProblem.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedProblem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedProblem.difficulty)}`}
                  >
                    {selectedProblem.difficulty}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Time Complexity:</span>
                    <span className="text-green-400 ml-2 font-mono">
                      {selectedProblem.timeComplexity}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Space Complexity:</span>
                    <span className="text-green-400 ml-2 font-mono">
                      {selectedProblem.spaceComplexity}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="overflow-y-auto flex-1 space-y-6">
                {/* Problem Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Problem</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProblem.content.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">My Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProblem.content.approach}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                  <pre className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-gray-300">
                      {selectedProblem.content.solution}
                    </code>
                  </pre>
                </div>

                {/* Insights */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Insights</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProblem.content.insights}
                  </p>
                </div>

                {/* Learnings */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">What I Learned</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProblem.content.learnings}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}