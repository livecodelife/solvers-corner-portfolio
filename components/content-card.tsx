"use client"

import { useState } from "react"
import Image from "next/image"

interface ContentCardProps {
  item: {
    id: number
    title: string
    subtitle?: string
    company?: string
    period?: string
    image: string
    description: string
  }
  onClick: () => void
}

export default function ContentCard({ item, onClick }: ContentCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group cursor-pointer transition-all duration-300 hover:scale-105" onClick={onClick}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
        {!imageError ? (
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="text-2xl mb-2">📄</div>
              <div className="text-sm">Image not available</div>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {!imageLoaded && !imageError && <div className="absolute inset-0 bg-gray-700 animate-pulse" />}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-lg font-semibold mb-2">View Details</div>
            <div className="text-sm opacity-80">Click to learn more</div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="mt-3 space-y-1">
        <h3 className="text-white font-semibold text-sm line-clamp-2">{item.title}</h3>
        {item.subtitle && <p className="text-gray-400 text-xs line-clamp-1">{item.subtitle}</p>}
        {item.company && item.period && (
          <p className="text-gray-500 text-xs">
            {item.company} • {item.period}
          </p>
        )}
        <p className="text-gray-400 text-xs line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}
