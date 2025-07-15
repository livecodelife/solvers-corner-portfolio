import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Database, Cloud, Users, Heart, BookOpen, Gamepad2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Caleb - The Solvers Corner",
  description: "Learn about Caleb Cowen's 8+ years of experience in GenAI technology, cross-functional leadership, and scalable engineering solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            Caleb Cowen
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Senior Software Engineer & GenAI Strategist
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            8+ years transforming complex challenges into scalable solutions through innovative technology and collaborative leadership
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Background Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Background</h2>
          <div className="max-w-4xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I&apos;m a passionate software engineer who thrives at the intersection of cutting-edge technology and real-world problem solving. 
              My journey began with a fascination for how code could transform ideas into impactful solutions, leading me to specialize 
              in GenAI integration, scalable architectures, and cross-functional team leadership.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Throughout my career, I&apos;ve had the privilege of working with industry leaders like Checkr, Object Partners, Cognizant, 
              and Allstate, where I&apos;ve consistently delivered innovative solutions that drive measurable business impact. My approach 
              combines technical excellence with strategic thinking, ensuring that every line of code serves a larger purpose.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Code className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Full-Stack Development</h3>
              </div>
              <p className="text-gray-400">Ruby on Rails, React, Node.js, Java, Spring Boot, GraphQL</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Cloud className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-400">Docker, Kubernetes, AWS, CI/CD, GenAI Integration</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Database className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Data & Architecture</h3>
              </div>
              <p className="text-gray-400">SQL, NoSQL, Microservices, Scalable Systems Design</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Leadership</h3>
              </div>
              <p className="text-gray-400">Cross-functional Teams, Mentorship, Technical Strategy</p>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Career Highlights</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Checkr - Senior Software Engineer</h3>
              <p className="text-gray-400 mb-2">2021 - Present</p>
              <p className="text-gray-300 mb-3">
                Spearheaded GenAI integration initiatives, achieving 82% reduction in approval time and 24% reduction in cycle time. 
                Developed AI-powered merge request review agent and delivered workshops to 150+ engineers.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Unlocked $2M in revenue through critical engineering leadership</li>
                <li>• Achieved 56% reduction in customer process time</li>
                <li>• Enhanced and maintained services handling ~2000 requests per minute</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Object Partners - Senior Consultant</h3>
              <p className="text-gray-400 mb-2">2020 - 2021</p>
              <p className="text-gray-300 mb-3">
                Guided three client organizations through complex Java/Spring and React projects
              </p>
            </div>

            <div className="border-l-2 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Cognizant - Senior Software Engineer</h3>
              <p className="text-gray-400 mb-2">2019 - 2020</p>
              <p className="text-gray-300 mb-3">
                Developed and maintained scalable web applications using Java and Spring Boot framework for a major
trucking company&apos;s payroll system.
              </p>
            </div>

            <div className="border-l-2 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Allstate - Software Engineer</h3>
              <p className="text-gray-400 mb-2">2017 - 2019</p>
              <p className="text-gray-300 mb-3">
                Led a 7-engineer team to deliver a claims processing platform with real-time image quality scoring and video capture capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Beyond Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-gray-400">
                Passionate about staying at the forefront of technology through books, courses, and hands-on experimentation with emerging tools and frameworks.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Community Building</h3>
              </div>
              <p className="text-gray-400">
                Active in tech communities, sharing knowledge through workshops, mentoring, and contributing to open-source projects.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Gamepad2 className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Gaming & Strategy</h3>
              </div>
              <p className="text-gray-400">
                Enjoy strategic games and puzzles that challenge problem-solving skills, often finding parallels between game strategies and software architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <Link href="/" data-umami-event="back-to-home-click">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}