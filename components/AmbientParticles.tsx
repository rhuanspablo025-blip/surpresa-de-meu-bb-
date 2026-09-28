'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ParticleData {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: 'dust' | 'glow'
}

interface AmbientParticlesProps {
  count?: number
  variant?: 'light' | 'dark'
  className?: string
}

export default function AmbientParticles({
  count = 30,
  variant = 'light',
  className = '',
}: AmbientParticlesProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particles = useMemo<ParticleData[]>(() => {
    if (!mounted) {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 50,
        y: 50,
        size: 2,
        duration: 12,
        delay: 0,
        type: 'dust' as const,
      }))
    }
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 4,
      duration: 8 + Math.random() * 16,
      delay: Math.random() * 10,
      type: Math.random() > 0.6 ? 'glow' : 'dust',
    }))
  }, [count, mounted])

  const colors = variant === 'light'
    ? { dust: 'rgba(217, 168, 42, 0.5)', glow: 'rgba(240, 222, 142, 0.8)' }
    : { dust: 'rgba(217, 168, 42, 0.4)', glow: 'rgba(217, 168, 42, 0.9)' }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.type === 'glow' ? colors.glow : colors.dust,
            boxShadow: p.type === 'glow'
              ? `0 0 ${p.size * 4}px ${p.size * 2}px ${colors.glow}`
              : 'none',
          }}
          animate={{
            y: [0, -40, 10, -20, 0],
            x: [0, 20, -10, 15, 0],
            opacity: [0, 0.6, 1, 0.5, 0],
            scale: [0.5, 1, 1.2, 1, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
