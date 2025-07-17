'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeetCodeProblem } from '@/lib/leetcode';

interface LeetCodeClientProps {
  problems: LeetCodeProblem[];
}

export default function LeetCodeClient({ problems }: LeetCodeClientProps) {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);

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

  if (!problems || problems.length === 0) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="text-white text-xl">No LeetCode problems found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container mx-auto px-4 py-8 pt-35">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-200px)]">

          <div className="lg:col-span-1">
            <Card className="h-full bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Problems Solved ({problems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[calc(100vh-350px)] overflow-y-auto">
                  {problems.map((problem) => (
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
                  <div 
                    className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedProblem.content.problem }}
                  />
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">My Approach</h3>
                  <div 
                    className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedProblem.content.approach }}
                  />
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                  <div 
                    className="prose prose-invert max-w-none [&_pre]:bg-gray-800/50 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-sm [&_code]:text-gray-300 [&_h3]:text-white [&_h3]:font-semibold [&_h3]:mb-3 [&_h3]:mt-6"
                    dangerouslySetInnerHTML={{ __html: selectedProblem.content.solution }}
                  />
                </div>

                {/* Insights */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Insights</h3>
                  <div 
                    className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedProblem.content.insights }}
                  />
                </div>

                {/* Learnings */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">What I Learned</h3>
                  <div 
                    className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedProblem.content.learnings }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
