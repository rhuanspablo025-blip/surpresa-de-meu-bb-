'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LilyFlower from './LilyFlower'

type Position =
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  | 'top-center' | 'bottom-center' | 'middle-left' | 'middle-right'

interface LilyCornerProps {
  position: Position
  size?: number
  color?: 'white' | 'blush' | 'cream' | 'pink'
  opacity?: number
  rotate?: number
  className?: string
  delay?: number
}

const positionClasses: Record<Position, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  'middle-left': 'top-1/2 left-0 -translate-y-1/2',
  'middle-right': 'top-1/2 right-0 -translate-y-1/2',
}

const rotationOffsets: Record<Position, number> = {
  'top-left': -25,
  'top-right': 25,
  'bottom-left': 205,
  'bottom-right': 155,
  'top-center': 0,
  'bottom-center': 180,
  'middle-left': -60,
  'middle-right': 60,
}

export default function LilyCorner({
  position,
  size = 160,
  color = 'white',
  opacity = 0.85,
  rotate = 0,
  className = '',
  delay = 0.2,
}: LilyCornerProps) {
  const shouldReduceMotion = useReducedMotion()
  const baseRotation = rotationOffsets[position] + rotate

  return (
    <motion.div
      className={`absolute pointer-events-none z-[1] ${positionClasses[position]} ${className}`}
      style={{
        width: size,
        height: size,
      }}
      initial={shouldReduceMotion ? { opacity } : { opacity: 0, scale: 0, rotate: baseRotation - 40 }}
      whileInView={{
        opacity,
        scale: 1,
        rotate: baseRotation,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, -12, 0],
          rotate: [baseRotation, baseRotation + 3, baseRotation],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <LilyFlower
          size={size}
          color={color}
          opacity={1}
          rotate={0}
        />
      </motion.div>
    </motion.div>
  )
}
