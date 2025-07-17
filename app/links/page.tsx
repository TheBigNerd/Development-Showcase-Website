import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

export default function Links() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-8">
      <div className="max-w-md w-full">
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl mb-2">
              Contact Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Link 
              href="https://github.com/TheBigNerd" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/50 cursor-pointer">
                <div className="flex-shrink-0">
                  <Github className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                    TheBigNerd
                  </h3>
                  <p className="text-gray-400 text-sm">
                    View my Software Projects
                  </p>
                </div>
              </div>
            </Link>
            <div className="pt-4 border-t border-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Get in touch
                </p>
                <a 
                  href="mailto:ethanpotter0123@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  ethanpotter0123@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}