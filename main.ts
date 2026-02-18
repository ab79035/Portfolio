import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Akshay Shivashankar Bharadwaj</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Software Engineer | Cloud & Distributed Systems | Full-Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" className="rounded-2xl">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            <Button variant="outline" className="rounded-2xl">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" className="rounded-2xl">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-gray-700 leading-relaxed">
              I am a Master’s student in Computer Science at the University of Southern California with a strong foundation in algorithms, operating systems, and scalable system design. I have professional experience at Qualcomm building cloud-native automation frameworks and deploying microservices on AWS using Docker and Kubernetes. I am passionate about designing efficient, reliable systems that solve real-world problems at scale.
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">IT Engineer – Qualcomm</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Developed an AngularJS–Flask application integrating ServiceNow APIs to automate RFC workflows, saving 100+ engineering hours per month.</li>
                <li>Led deployment of 70+ web applications on AWS EC2 using Lambda automation and CloudWatch monitoring.</li>
                <li>Built scalable CI/CD pipelines using AWS CloudFormation and containerized microservices with Docker and Kubernetes.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Weenix OS Kernel</h3>
                <p className="text-gray-700">Implemented core kernel subsystems in C including process scheduling, virtual memory management, and file systems within a Unix-like OS.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Triviophilia</h3>
                <p className="text-gray-700">Led development of a full-stack academic quiz platform using HTML, CSS, JavaScript, PHP, and MySQL.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Artsy Web & Mobile App</h3>
                <p className="text-gray-700">Built a web and Android front-end using AngularJS and Android Studio with a Node.js and MongoDB backend.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Moonquake Alert System</h3>
                <p className="text-gray-700">Developed a Python-based seismic data analysis system deployed in Docker containers for lunar mission simulations.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Technical Skills</h2>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-gray-700">
              <p><strong>Languages:</strong> Python, Java, C++, C, SQL, JavaScript, PHP</p>
              <p><strong>Cloud & DevOps:</strong> AWS (Certified Solutions Architect), Docker, Kubernetes, CloudFormation</p>
              <p><strong>Web & Databases:</strong> AngularJS, Flask, REST APIs, MongoDB, MySQL</p>
              <p><strong>Systems:</strong> Linux, Unix Shell Scripting, Kernel Programming</p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 pt-12">
          © {new Date().getFullYear()} Akshay Shivashankar Bharadwaj
        </footer>
      </div>
    </div>
  );
}
