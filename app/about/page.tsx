import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function projects() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black pt-50">
      <Card className="w-full max-w-2xl bg-gray-950 text-white mx-auto">
        <CardHeader>
          <CardTitle>What is this website?</CardTitle>
          <CardDescription>
            Short: This is a website to display my various software projects and track my leetcode progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            I am a final year computer science student at Aston University, and I have created this website to showcase my projects and track my progress on leetcode.
            <br />
            <br />
            I am interested in the fields of Artifical Intelligence, Machine Learning, Cyber Security and Quantum Computing. During my final year at University I am taking modules in Computational Intelligence,
             Multiagent Systems, Data Mining and Advanced Database Systems and GIS.
            <br />
            <br />
            As part of my final year I am also working on a project to create software that can be used of UAVs during a disaster recovery scenario to help in search and rescue operations. If this goes well an extension
            of this project will be to create a program that usalises these UAVs to create an ad-hoc network to for communication.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}