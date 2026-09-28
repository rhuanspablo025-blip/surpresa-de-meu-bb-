'use client'

import { motion, useReducedMotion } from 'framer-motion'
import AmbientParticles from '../components/AmbientParticles'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

export default function SpecialSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="especial"
      backgroundClass="bg-dark-gradient"
      minHeight="min-h-[100svh]"
      className="py-24 sm:py-32 cinematic-vignette overflow-hidden"
    >
      <AmbientParticles count={60} variant="dark" />

      {/* Surrounding lilies - appear on scroll */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top left cluster */}
        <ScrollReveal delay={0.3} direction="zoom" className="absolute top-10 -left-8 sm:-left-4">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-6, 4, -6] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LilyFlower size={140} color="blush" opacity={0.25} />
          </motion.div>
        </ScrollReveal>

        {/* Top right cluster */}
        <ScrollReveal delay={0.5} direction="zoom" className="absolute top-16 -right-10 sm:-right-6">
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [6, -4, 6] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LilyFlower size={160} color="cream" opacity={0.2} rotate={20} />
          </motion.div>
        </ScrollReveal>

        {/* Middle left */}
        <ScrollReveal delay={0.7} direction="zoom" className="absolute top-1/3 -left-6">
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LilyFlower size={100} color="white" opacity={0.3} rotate={-30} />
          </motion.div>
        </ScrollReveal>

        {/* Middle right */}
        <ScrollReveal delay={0.9} direction="zoom" className="absolute top-1/2 -right-4">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <LilyFlower size={110} color="blush" opacity={0.25} rotate={45} />
          </motion.div>
        </ScrollReveal>

        {/* Bottom left cluster */}
        <ScrollReveal delay={1.1} direction="zoom" className="absolute bottom-16 -left-10 sm:-left-4">
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-10, 5, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LilyFlower size={130} color="pink" opacity={0.22} rotate={-20} />
          </motion.div>
        </ScrollReveal>

        {/* Bottom right cluster */}
        <ScrollReveal delay={1.3} direction="zoom" className="absolute bottom-10 -right-10 sm:-right-2">
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [15, -5, 15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <LilyFlower size={150} color="white" opacity={0.2} rotate={30} />
          </motion.div>
        </ScrollReveal>

        {/* Center small floating lilies */}
        <div className="absolute inset-0">
          <ScrollReveal delay={0.6} direction="fade" className="absolute top-[18%] left-[15%] sm:left-[22%]">
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={45} color="cream" opacity={0.5} />
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.8} direction="fade" className="absolute bottom-[25%] right-[18%] sm:right-[25%]">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <LilyFlower size={40} color="blush" opacity={0.5} rotate={60} />
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={1} direction="fade" className="absolute top-[60%] left-[10%]">
            <motion.div
              animate={{ y: [0, -6, 0], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <LilyFlower size={35} color="white" opacity={0.6} />
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={1.2} direction="fade" className="absolute top-[30%] right-[12%]">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <LilyFlower size={38} color="pink" opacity={0.55} rotate={-40} />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-[5] min-h-[100svh] flex flex-col items-center justify-center px-6 py-20">
        {/* Top decorative element */}
        <ScrollReveal delay={0.1} direction="fade" className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 sm:w-32 h-px" style={{
              background: 'linear-gradient(90deg, transparent, rgba(240,222,142,0.5), rgba(217,168,42,0.7))',
            }} />
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(240, 222, 142, 0)',
                    '0 0 20px 8px rgba(240, 222, 142, 0.25)',
                    '0 0 0 0 rgba(240, 222, 142, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 rounded-full"
                style={{ background: 'linear-gradient(135deg, #f0de8e, #d9a82a)' }}
              />
            </div>
            <div className="w-20 sm:w-32 h-px" style={{
              background: 'linear-gradient(90deg, rgba(217,168,42,0.7), rgba(240,222,142,0.5), transparent)',
            }} />
          </div>
        </ScrollReveal>

        {/* First phrase */}
        <div className="text-center mb-10 sm:mb-14 max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal delay={0.2} y={40}>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.2] sm:leading-[1.25] mb-4 tracking-wide break-words">
              <span className="bg-gradient-to-r from-cream-200 via-cream-100 to-dusty-200 bg-clip-text text-transparent">
                Se eu pudesse escolher novamente...
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Middle big decorative lily */}
        <ScrollReveal delay={0.9} direction="zoom" className="relative my-6 sm:my-10">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 -m-10 rounded-full" style={{
              background: 'radial-gradient(circle, rgba(240,222,142,0.15) 0%, rgba(217,168,42,0.05) 40%, transparent 70%)',
            }} />
            <LilyFlower size={90} color="cream" opacity={0.85} />
          </motion.div>
        </ScrollReveal>

        {/* Second phrase - cinematic */}
        <div className="text-center mt-10 sm:mt-14 max-w-6xl mx-auto px-4 sm:px-6 relative">
          <ScrollReveal delay={1.2} y={50}>
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              {/* Reveal mask */}
              <div className="relative overflow-hidden pb-2">
                <motion.p
                  className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance italic leading-[1.1] sm:leading-[1.15] break-words whitespace-pre-wrap"
                  style={{
                    background: 'linear-gradient(135deg, #f0de8e 0%, #d9a82a 30%, #cc4b6f 60%, #d9a82a 80%, #f0de8e 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  initial={shouldReduceMotion ? {} : { y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    y: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.3 },
                    opacity: { duration: 0.8, delay: 1.3 },
                  }}
                >
                  ...eu escolheria você.
                </motion.p>
              </div>

              {/* Shimmer animation on gradient */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ backgroundPosition: '200% center' }}
                whileInView={{ backgroundPosition: '-200% center' }}
                viewport={{ once: true }}
                transition={{ duration: 5, delay: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                aria-hidden
              />
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bottom decorative */}
        <ScrollReveal delay={1.9} direction="fade" className="mt-14 sm:mt-20">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10">
                <LilyFlower size={40} color="white" opacity={0.7} />
              </div>
              <span className="text-cream-100/60 font-script text-2xl sm:text-3xl">
                hoje e sempre
              </span>
              <div className="w-10 h-10 scale-x-[-1]">
                <LilyFlower size={40} color="white" opacity={0.7} />
              </div>
            </div>
            <div className="w-40 sm:w-56 h-px" style={{
              background: 'linear-gradient(90deg, transparent, rgba(217,168,42,0.5), transparent)',
            }} />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
