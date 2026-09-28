'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  backgroundClass?: string
  minHeight?: string
}

export default function Section({
  id,
  children,
  className = '',
  backgroundClass = 'bg-cinematic',
  minHeight = 'min-h-screen',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${minHeight} ${backgroundClass} ${className}`}
    >
      <div className="relative z-[2] w-full h-full">
        {children}
      </div>
    </section>
  )
}

interface TextSplitProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextSplit({
  text,
  className = '',
  delay = 0,
  as = 'span',
}: TextSplitProps) {
  const shouldReduceMotion = useReducedMotion()
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
  }

  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag className={className} style={{ display: 'inline-block' }}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{ display: 'inline-block' }}
      >
        {letters.map((letter, index) => (
          <motion.span
            variants={child}
            key={`${letter}-${index}`}
            style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : undefined }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
