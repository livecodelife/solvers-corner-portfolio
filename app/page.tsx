"use client"

import { useState, useEffect } from "react"
import HeroBanner from "@/components/hero-banner"
import ContentCarousel from "@/components/content-carousel"
import ContentModal from "@/components/content-modal"
import SplashScreen from "@/components/splash-screen"

// Import data
import workExperienceData from "@/data/work-experience.json"
import newsletterData from "@/data/newsletter.json"
import communityData from "@/data/community.json"
import projectsData from "@/data/projects.json"

// Import analytics
import {
  trackContentCardClick,
  trackModalInteraction,
  trackSplashScreenCompletion
} from "@/lib/analytics"

import type { ContentItem } from "@/types/content"

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null)
  const [showSplash, setShowSplash] = useState(true)

  // Track page load
  useEffect(() => {
    if (!showSplash) {
      // Only track page load after splash screen is completed
      trackContentCardClick({
        category: 'page',
        itemTitle: 'home_page_loaded'
      })
    }
  }, [showSplash])

  const handleItemClick = (item: ContentItem) => {
    setSelectedItem(item)
    // Track content item click
    trackContentCardClick({
      category: item.category || 'general',
      itemTitle: item.title
    })
  }

  const handleCloseModal = () => {
    if (selectedItem) {
      // Track modal close event
      trackModalInteraction({
        actionType: 'close',
        itemTitle: selectedItem.title,
        category: selectedItem.category || 'general'
      })
    }
    setSelectedItem(null)
  }

  const handleSplashComplete = () => {
    // Track splash screen completion
    trackSplashScreenCompletion({ duration: 0 }) // Duration can be calculated if needed
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

      {selectedItem && <ContentModal item={selectedItem} onClose={handleCloseModal} category={selectedItem.category || "General"} />}
    </div>
  )
}
