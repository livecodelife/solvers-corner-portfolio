"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ContentCardProps {
  item: {
    id: string
    title: string
    image: string
    blurb: string
    [key: string]: any
  }
  onClick: () => void
}

export default function ContentCard({ item, onClick }: ContentCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden bg-gray-900 border-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-1">{item.title}</h3>
          <p className="text-gray-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.blurb}
          </p>
        </div>
      </div>
    </Card>
  )
}
