'use client'

import { useEffect, useState } from 'react'
import Hero from '../sections/Hero'
import OurStory from '../sections/OurStory'
import AboutYou from '../sections/AboutYou'
import PhotoGallery from '../sections/PhotoGallery'
import SpecialSection from '../sections/SpecialSection'
import Letter from '../sections/Letter'
import Final from '../sections/Final'

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = total > 0 ? window.scrollY / total : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative">
      {/* Barra de progresso suave */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[200] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #7d203e, #cc4b6f, #d9a82a)',
          transformOrigin: '0% 0%',
          transform: `scaleX(${scrollProgress})`,
          transition: 'transform 0.1s linear',
          opacity: 0.8,
        }}
      />

      <Hero />
      <OurStory />
      <AboutYou />
      <PhotoGallery />
      <SpecialSection />
      <Letter />
      <Final />
    </main>
  )
}
