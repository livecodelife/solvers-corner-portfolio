"use client"

import { useState } from "react"
import HeroBanner from "@/components/hero-banner"
import ContentCarousel from "@/components/content-carousel"
import ContentModal from "@/components/content-modal"

// Import data
import workExperience from "@/data/work-experience.json"
import newsletter from "@/data/newsletter.json"
import community from "@/data/community.json"
import projects from "@/data/projects.json"

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Content Carousels */}
      <div className="space-y-12 py-12">
        <ContentCarousel title="Work Experience" items={workExperience} onItemClick={handleItemClick} />

        <ContentCarousel title="Newsletter" items={newsletter} onItemClick={handleItemClick} />

        <ContentCarousel title="Community" items={community} onItemClick={handleItemClick} />

        <ContentCarousel title="Projects" items={projects} onItemClick={handleItemClick} />
      </div>

      {/* Modal */}
      <ContentModal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
    </div>
  )
}
