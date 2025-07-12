'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and inventory management.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://your-taskmanager.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that provides real-time weather data, forecasts, and interactive maps using multiple APIs.",
    technologies: ["Vue.js", "Express", "Weather API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather",
    liveUrl: "https://your-weather.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for social media management with data visualization and automated reporting features.",
    technologies: ["Python", "Django", "D3.js", "Redis"],
    githubUrl: "https://github.com/yourusername/analytics",
    liveUrl: "https://your-analytics.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 5,
    title: "AI Chat Bot",
    description: "An intelligent chatbot powered by machine learning algorithms, capable of natural language processing and context awareness.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
    githubUrl: "https://github.com/yourusername/chatbot",
    liveUrl: "https://your-chatbot.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing development projects with smooth animations and interactive elements.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    image: "/project-placeholder.jpg"
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing development projects with smooth animations and interactive elements.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    image: "/project-placeholder.jpg"
  }
  
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-30">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-t-xl flex items-center justify-center border-b border-gray-700">
                <div className="text-gray-400 text-sm">Project Preview</div>
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
                  {/* Technologies */}
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
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
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