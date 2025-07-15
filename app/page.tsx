"use client"

import { useState } from "react"
import HeroBanner from "@/components/hero-banner"
import ContentCarousel from "@/components/content-carousel"
import ContentModal from "@/components/content-modal"
import SplashScreen from "@/components/splash-screen"

// Import data
import workExperienceData from "@/data/work-experience.json"
import newsletterData from "@/data/newsletter.json"
import communityData from "@/data/community.json"
import projectsData from "@/data/projects.json"

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showSplash, setShowSplash] = useState(true)

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-black">
      <HeroBanner />

      <div className="space-y-12 py-12">
        <ContentCarousel title="Work Experience" items={workExperienceData} onItemClick={handleItemClick} />

        <ContentCarousel title="Newsletter" items={newsletterData} onItemClick={handleItemClick} />

        <ContentCarousel title="Community" items={communityData} onItemClick={handleItemClick} />

        <ContentCarousel title="Projects" items={projectsData} onItemClick={handleItemClick} />
      </div>

      {selectedItem && <ContentModal item={selectedItem} onClose={handleCloseModal} category="general" />}
    </div>
  )
}
