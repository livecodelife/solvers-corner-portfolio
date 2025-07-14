"use client"

import { X, Play, Plus, ThumbsUp, Volume2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  item: any
}

export default function ContentModal({ isOpen, onClose, item }: ContentModalProps) {
  if (!item) return null

  const handlePlayClick = () => {
    if (item.externalLink) {
      window.open(item.externalLink, "_blank")
    }
  }

  const getYearFromDuration = (duration: string) => {
    if (duration?.includes("Present")) return "2024"
    if (duration?.includes("-")) return duration.split("-")[1].trim()
    return "2024"
  }

  const getContentType = () => {
    if (item.company) return "EXPERIENCE"
    if (item.publication) return "NEWSLETTER"
    if (item.organization) return "COMMUNITY"
    if (item.category) return "PROJECT"
    return "CONTENT"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#181818] border-none text-white p-0 overflow-hidden rounded-lg">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-20 bg-[#181818] hover:bg-[#333333] text-white rounded-full h-9 w-9"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Hero section with video player styling */}
          <div className="relative aspect-video bg-black">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

            {/* Video player overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Netflix logo and content type */}
            <div className="absolute top-6 left-6">
              <div className="flex items-center gap-3">
                <div className="text-[#E50914] font-bold text-2xl">N</div>
                <span className="text-white text-sm font-medium tracking-wider">{getContentType()}</span>
              </div>
            </div>

            {/* Title and controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">{item.title}</h1>

              {/* Control buttons */}
              <div className="flex items-center gap-3">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 rounded-sm px-8 py-2 font-semibold"
                  onClick={handlePlayClick}
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  View Details
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[#2A2A2A]/80 hover:bg-[#2A2A2A] text-white rounded-full h-10 w-10 border border-gray-500"
                >
                  <Plus className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-[#2A2A2A]/80 hover:bg-[#2A2A2A] text-white rounded-full h-10 w-10 border border-gray-500"
                >
                  <ThumbsUp className="h-5 w-5" />
                </Button>

                <div className="ml-auto">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-[#2A2A2A]/80 hover:bg-[#2A2A2A] text-white rounded-full h-10 w-10 border border-gray-500"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-4">
                {/* Metadata row */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#46D369] font-semibold">
                    {item.duration ? `${getYearFromDuration(item.duration)}` : "2024"}
                  </span>

                  {item.duration && (
                    <Badge variant="outline" className="border-gray-500 text-gray-300 bg-transparent">
                      {item.duration}
                    </Badge>
                  )}

                  {item.tech && (
                    <Badge variant="outline" className="border-gray-500 text-gray-300 bg-transparent">
                      HD
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-white text-base leading-relaxed">{item.description}</p>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 text-sm">
                {item.company && (
                  <div>
                    <span className="text-gray-400">Company: </span>
                    <span className="text-white">{item.company}</span>
                  </div>
                )}

                {item.publication && (
                  <div>
                    <span className="text-gray-400">Publication: </span>
                    <span className="text-white">{item.publication}</span>
                  </div>
                )}

                {item.organization && (
                  <div>
                    <span className="text-gray-400">Organization: </span>
                    <span className="text-white">{item.organization}</span>
                  </div>
                )}

                {item.tech && (
                  <div>
                    <span className="text-gray-400">Technologies: </span>
                    <span className="text-white">{item.tech}</span>
                  </div>
                )}

                {(item.subscribers || item.members || item.participants || item.downloads) && (
                  <div>
                    <span className="text-gray-400">
                      {item.subscribers
                        ? "Subscribers"
                        : item.members
                          ? "Members"
                          : item.participants
                            ? "Participants"
                            : "Downloads"}
                      :
                    </span>
                    <span className="text-white">
                      {item.subscribers || item.members || item.participants || item.downloads}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-gray-400">Category: </span>
                  <span className="text-white">
                    {item.category ||
                      (item.company
                        ? "Professional Experience"
                        : item.publication
                          ? "Content Creation"
                          : item.organization
                            ? "Community Involvement"
                            : "Technology")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
