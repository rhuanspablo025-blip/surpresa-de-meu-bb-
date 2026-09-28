'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  once?: boolean
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  className = '',
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0 }
    switch (direction) {
      case 'up': return { opacity: 0, y }
      case 'down': return { opacity: 0, y: -y }
      case 'left': return { opacity: 0, x: y }
      case 'right': return { opacity: 0, x: -y }
      case 'zoom': return { opacity: 0, scale: 0.8 }
      case 'fade': return { opacity: 0 }
      default: return { opacity: 0, y }
    }
  }

  const getAnimate = () => {
    if (shouldReduceMotion) return { opacity: 1 }
    switch (direction) {
      case 'up':
      case 'down':
      case 'fade': return { opacity: 1, y: 0 }
      case 'left':
      case 'right': return { opacity: 1, x: 0 }
      case 'zoom': return { opacity: 1, scale: 1 }
      default: return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
