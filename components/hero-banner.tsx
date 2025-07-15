"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Info, VolumeX, Volume2 } from "lucide-react"

export default function HeroBanner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="banner.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Mute toggle button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">The Solvers Corner</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
              Where code meets innovation. Explore 8+ years of solving complex problems through GenAI technology,
              cross-functional leadership, and scalable engineering solutions that drive real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Explore My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
              >
                <Info className="mr-2 h-5 w-5" />
                About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
