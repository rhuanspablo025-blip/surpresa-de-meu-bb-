'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PetalData {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  color: string
  startOpacity: number
}

interface FallingPetalsProps {
  count?: number
  className?: string
}

export default function FallingPetals({
  count = 18,
  className = '',
}: FallingPetalsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const petals = useMemo<PetalData[]>(() => {
    const colors = [
      '#fdfaf1',
      '#fdf2f4',
      '#fbe4e9',
      '#f9ece6',
      '#f4d7cc',
      '#faf3dd',
    ]

    if (!mounted) {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 50,
        size: 14,
        duration: 20,
        delay: 0,
        color: colors[0],
        startOpacity: 0.7,
      }))
    }

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 12 + Math.random() * 20,
      delay: Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
      startOpacity: 0.5 + Math.random() * 0.4,
    }))
  }, [count, mounted])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0"
          style={{
            left: `${petal.left}%`,
            opacity: petal.startOpacity,
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, 40, -30, 50, -20, 10, 0],
            rotate: [0, 120, 200, 320, 420, 520, 720],
            opacity: [0, petal.startOpacity, petal.startOpacity * 0.8, petal.startOpacity * 0.6, 0],
            scale: [0.7, 1, 1, 0.9, 0.8],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.8}
            viewBox="0 0 40 72"
          >
            <defs>
              <linearGradient id={`fp-grad-${petal.id}`} x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor={petal.color} stopOpacity="0.85" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Lily petal shape - long narrow ovate with slightly wider middle and pointed tip */}
            <path
              d="M 20,2
                 C 9,12 4,30 6,50
                 C 8,60 14,68 20,70
                 C 26,68 32,60 34,50
                 C 36,30 31,12 20,2 Z"
              fill={`url(#fp-grad-${petal.id})`}
              stroke="rgba(234, 187, 168, 0.35)"
              strokeWidth="0.3"
            />
            {/* Midrib - central vein of lily petal */}
            <path
              d="M 20,6 C 19,22 18,44 20,66"
              stroke="rgba(217, 168, 42, 0.2)"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Subtle side veins */}
            <path
              d="M 20,16 C 14,22 10,30 9,40"
              stroke="rgba(234, 187, 168, 0.18)"
              strokeWidth="0.35"
              fill="none"
            />
            <path
              d="M 20,16 C 26,22 30,30 31,40"
              stroke="rgba(234, 187, 168, 0.18)"
              strokeWidth="0.35"
              fill="none"
            />
            <path
              d="M 20,30 C 15,38 11,48 11,58"
              stroke="rgba(234, 187, 168, 0.15)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M 20,30 C 25,38 29,48 29,58"
              stroke="rgba(234, 187, 168, 0.15)"
              strokeWidth="0.3"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
