"use client"

import type React from "react"

import { useEffect } from "react"
import { X, Play, Plus, ThumbsUp, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ContentModalProps {
  item: {
    id: number
    title: string
    subtitle?: string
    company?: string
    period?: string
    image: string
    description: string
    fullDescription: string
    technologies: string[]
    achievements: string[]
    externalLink: string
    duration: string
    type: string
  }
  onClose: () => void
  category: string
}

export default function ContentModal({ item, onClose, category }: ContentModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleExternalLink = () => {
    if (item.externalLink) {
      window.open(item.externalLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="bg-[#181818] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with video/image */}
        <div className="relative aspect-video">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-[#181818] hover:bg-gray-700 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Netflix logo and content type */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#E50914] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
          </div>

          {/* Bottom content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>

            {/* Action buttons */}
            <div className="flex items-center space-x-4 mb-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-5"
                onClick={handleExternalLink}
              >
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-4">
              {/* Metadata */}
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-green-500 font-semibold">{new Date().getFullYear()}</span>
                <span className="text-white">{item.duration}</span>
                <div className="bg-gray-600 text-white px-2 py-1 text-xs rounded">HD</div>
                <div className="bg-gray-600 text-white px-2 py-1 text-xs rounded">{item.type || "Professional"}</div>
              </div>

              {/* Description */}
              <p className="text-white text-base leading-relaxed">{item.fullDescription}</p>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Key Achievements:</h3>
                  <ul className="text-gray-300 space-y-1">
                    {item.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {item.company && (
                <div>
                  <span className="text-gray-400 text-sm">Company: </span>
                  <span className="text-white">{item.company}</span>
                </div>
              )}

              {item.period && (
                <div>
                  <span className="text-gray-400 text-sm">Date: </span>
                  <span className="text-white">{item.period}</span>
                </div>
              )}

              <div>
                <span className="text-gray-400 text-sm">Category: </span>
                <span className="text-white capitalize">{category}</span>
              </div>

              <div>
                <span className="text-gray-400 text-sm">This {item.type} is: </span>
                <span className="text-white">{item.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
