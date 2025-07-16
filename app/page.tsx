import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-8">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-10">
          <Link href="/projects" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image
                  src="/programming.avif"
                  alt="Projects showcase"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="py-6">
                <CardTitle className="text-white text-2xl">Project Portfolio</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  A gallery of my software development projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-gray-400 text-base">
                  In this section I showcase the applications I have built using a variety of programming languages and frameworks. Each project attempts to teach me a new concept or solve a unique problem.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/leetcode" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-gradient-to-br flex items-center justify-center">
                <Image
                  src="/LeetLogo.png"
                  alt="LeetCode journal"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="py-6">
                <CardTitle className="text-white text-2xl">LeetCode Journal</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  A journal of my leetcode solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-gray-400 text-base">
                  In this sections I document my thought process in solving various leetcode problems. Working torwards and discussing the most memory and time efficient solutions.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
