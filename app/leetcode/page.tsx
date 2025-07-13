'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const leetcodeProblems = [
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
    
    return []
    
---------------------
    
    Hello`,
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