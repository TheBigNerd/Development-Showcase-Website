'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A website to showcase my software projects and track my leetcode progress.",
    technologies: ["Next.js", "TypeScript", "React"],
    githubUrl: "https://github.com/TheBigNerd/Development-Showcase-Website",
    image: "/project-placeholder.jpg"
  },
  {
    id: 2,
    title: "Overcore E-commerce Platform",
    description: "An E-commerce platform built for my placement company Overcore.",
    technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Stripe", "Prisma"],
    githubUrl: "https://github.com/TheBigNerd/Development-Showcase-Website",
    image: "/overcore.png"
  },
  
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-30">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-t-xl flex items-center justify-center border-b border-gray-700">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full"
                  width={300}
                  height={200}
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              
                <div className="flex-1 flex flex-col justify-end">
                <CardFooter className="flex gap-3 mt-auto">
                  <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-gray-600 text-gray-500 hover:bg-gray-700 hover:text-white"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                  GitHub
                  </Button>
                </CardFooter>
                </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}