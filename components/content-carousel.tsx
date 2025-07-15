"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCard from "./content-card"

import type { ContentItem } from "@/types/content"

interface ContentCarouselProps {
  title: string
  items: ContentItem[]
  onItemClick: (item: ContentItem) => void
}

export default function ContentCarousel({ title, items, onItemClick }: ContentCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold px-4 md:px-8">{title}</h2>

      <div className="relative group">
        {/* Left scroll button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll("left")}
          data-umami-event="carousel-scroll-left"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Right scroll button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll("right")}
          data-umami-event="carousel-scroll-right"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Carousel content */}
        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-[280px] sm:w-[320px] md:w-[280px] lg:w-[320px]">
              <ContentCard item={item} onClick={() => onItemClick(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
