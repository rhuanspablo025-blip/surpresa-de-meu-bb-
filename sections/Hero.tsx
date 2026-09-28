'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LilyFlower from '../components/LilyFlower'
import LilyCorner from '../components/LilyCorner'
import AmbientParticles from '../components/AmbientParticles'
import FallingPetals from '../components/FallingPetals'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const scrollToStory = () => {
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section
      id="hero"
      backgroundClass="bg-hero-gradient"
      minHeight="min-h-[100svh]"
      className="flex items-center justify-center"
    >
      <AmbientParticles count={40} variant="light" />
      <FallingPetals count={14} />

      <LilyCorner position="top-left" size={200} color="blush" opacity={0.7} delay={0.6} />
      <LilyCorner position="top-right" size={180} color="cream" opacity={0.65} delay={0.9} rotate={15} />
      <LilyCorner position="bottom-left" size={170} color="white" opacity={0.75} delay={1.1} rotate={-10} />
      <LilyCorner position="bottom-right" size={210} color="pink" opacity={0.6} delay={0.8} rotate={-20} />

      {/* Middle floating lilies */}
      <motion.div
        className="absolute top-[18%] left-[8%] sm:left-[12%] hidden sm:block z-[1]"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.3, y: 50 }}
        animate={{ opacity: 0.6, scale: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.4, ease: 'easeOut' }}
      >
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <LilyFlower size={90} color="white" opacity={0.8} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] right-[6%] sm:right-[10%] hidden md:block z-[1]"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.3, y: -40 }}
        animate={{ opacity: 0.55, scale: 1, y: 0 }}
        transition={{ duration: 2.2, delay: 1.8, ease: 'easeOut' }}
      >
        <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
          <LilyFlower size={75} color="blush" opacity={0.85} rotate={30} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-[45%] right-[3%] hidden lg:block z-[1]"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.2, rotate: -30 }}
        animate={{ opacity: 0.45, scale: 1, rotate: 10 }}
        transition={{ duration: 2.5, delay: 2.2, ease: 'easeOut' }}
      >
        <LilyFlower size={60} color="cream" opacity={0.9} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-[5] w-full max-w-4xl px-6 py-12 mx-auto text-center">
        {/* Small top decoration */}
        <ScrollReveal delay={0.2} y={30} direction="up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold-400 to-wine-600 opacity-60" />
            <span className="font-script text-2xl sm:text-3xl text-gradient-gold">Com carinho</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold-400 to-wine-600 opacity-60" />
          </div>
        </ScrollReveal>

        {/* Main title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-balance break-words">
            <span className="text-gradient-wine">Para Lorena</span>
            <span className="inline-block ml-2 sm:ml-4">
              <motion.span
                initial={shouldReduceMotion ? {} : { scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.9, type: 'spring', stiffness: 200, damping: 12 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  ❤️
                </motion.span>
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Decorative divider */}
        <ScrollReveal delay={2.1} direction="fade" className="mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold-400 opacity-70">
              <path fill="currentColor" d="M12 2C11 6 6 8 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5-5-7-6-11z"/>
            </svg>
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-gold-400/80 via-wine-500/60 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-glow" />
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-gold-400/80 via-wine-500/60 to-transparent" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold-400 opacity-70 scale-x-[-1]">
              <path fill="currentColor" d="M12 2C11 6 6 8 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5-5-7-6-11z"/>
            </svg>
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={2.4} y={30} direction="up">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl leading-relaxed text-wine-800/85 max-w-2xl mx-auto mb-12 sm:mb-16 italic text-balance">
            Algumas pessoas entram na nossa vida.<br className="sm:hidden" />
            <span className="whitespace-nowrap"> </span>
            Outras fazem a nossa vida ganhar um novo significado.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={2.9} y={20} direction="up">
          <motion.button
            onClick={scrollToStory}
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.04,
              boxShadow: '0 12px 40px rgba(125, 32, 62, 0.25), 0 0 60px rgba(217, 168, 42, 0.2)',
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 sm:px-14 py-4 sm:py-5 rounded-full font-serif text-lg sm:text-xl font-medium tracking-wide overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7d203e 0%, #b53055 50%, #7d203e 100%)',
              color: '#fdfaf1',
              boxShadow: '0 6px 24px rgba(125, 32, 62, 0.2), 0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(110deg, transparent 20%, rgba(240, 222, 142, 0.25) 50%, transparent 80%)',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['100% 0', '-100% 0'] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <span>Nossa história</span>
              <motion.svg
                width="20" height="20" viewBox="0 0 24 24"
                fill="none"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor"/>
              </motion.svg>
            </span>
          </motion.button>
        </ScrollReveal>

        {/* Scroll hint */}
        <ScrollReveal delay={3.4} direction="fade" className="mt-16 sm:mt-20">
          <motion.div
            className="flex flex-col items-center gap-2 text-wine-700/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs tracking-[0.3em] uppercase font-sans">Role para descobrir</span>
            <svg width="20" height="28" viewBox="0 0 20 28" className="opacity-60">
              <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <motion.circle
                cx="10" cy="9" r="2.5" fill="currentColor"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
