'use client'

import { motion, useReducedMotion } from 'framer-motion'
import AmbientParticles from '../components/AmbientParticles'
import FallingPetals from '../components/FallingPetals'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

export default function Final() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="final"
      backgroundClass="bg-dark-gradient"
      minHeight="min-h-[100svh]"
      className="py-24 sm:py-32 cinematic-vignette relative"
    >
      <AmbientParticles count={50} variant="dark" />
      <FallingPetals count={10} />

      {/* Surrounding lilies cluster */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top cluster */}
        <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
          <div className="absolute top-4 left-[8%]">
            <ScrollReveal delay={0.2} direction="zoom">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-4, 6, -4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LilyFlower size={110} color="blush" opacity={0.3} />
              </motion.div>
            </ScrollReveal>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <ScrollReveal delay={0.4} direction="zoom">
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [3, -5, 3] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LilyFlower size={140} color="cream" opacity={0.25} />
              </motion.div>
            </ScrollReveal>
          </div>
          <div className="absolute top-6 right-[10%]">
            <ScrollReveal delay={0.3} direction="zoom">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [8, -3, 8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LilyFlower size={100} color="white" opacity={0.3} rotate={30} />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom cluster */}
        <div className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden">
          <div className="absolute bottom-0 left-[5%]">
            <ScrollReveal delay={0.6} direction="zoom">
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [10, -5, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LilyFlower size={120} color="pink" opacity={0.28} rotate={-20} />
              </motion.div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <ScrollReveal delay={0.5} direction="zoom">
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [-8, 5, -8] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LilyFlower size={160} color="white" opacity={0.3} />
              </motion.div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-4 right-[8%]">
            <ScrollReveal delay={0.7} direction="zoom">
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-6, 8, -6] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <LilyFlower size={130} color="blush" opacity={0.25} rotate={25} />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Middle sides */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          <ScrollReveal delay={0.8} direction="zoom">
            <motion.div
              animate={{ x: [0, 8, 0], rotate: [-10, 5, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={90} color="cream" opacity={0.35} rotate={-45} />
            </motion.div>
          </ScrollReveal>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <ScrollReveal delay={0.9} direction="zoom">
            <motion.div
              animate={{ x: [0, -8, 0], rotate: [10, -5, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <LilyFlower size={95} color="pink" opacity={0.3} rotate={55} />
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Small floating inner lilies */}
        <div className="absolute top-[28%] left-[22%]">
          <ScrollReveal delay={1.1} direction="fade">
            <motion.div
              animate={{ y: [0, -6, 0], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={40} color="cream" opacity={0.6} />
            </motion.div>
          </ScrollReveal>
        </div>
        <div className="absolute top-[65%] right-[20%]">
          <ScrollReveal delay={1.3} direction="fade">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <LilyFlower size={45} color="blush" opacity={0.6} rotate={-30} />
            </motion.div>
          </ScrollReveal>
        </div>
        <div className="absolute top-[45%] left-[15%]">
          <ScrollReveal delay={1.5} direction="fade">
            <motion.div
              animate={{ y: [0, -5, 0], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <LilyFlower size={32} color="white" opacity={0.7} />
            </motion.div>
          </ScrollReveal>
        </div>
        <div className="absolute top-[75%] left-[25%]">
          <ScrollReveal delay={1.7} direction="fade">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <LilyFlower size={35} color="pink" opacity={0.65} rotate={45} />
            </motion.div>
          </ScrollReveal>
        </div>
        <div className="absolute top-[35%] right-[18%]">
          <ScrollReveal delay={1.4} direction="fade">
            <motion.div
              animate={{ y: [0, -7, 0], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <LilyFlower size={38} color="cream" opacity={0.6} rotate={-60} />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-[5] min-h-[90svh] flex flex-col items-center justify-center px-6 py-20">
        {/* Top lily arrangement */}
        <ScrollReveal delay={0.3} direction="zoom" className="mb-10 sm:mb-16">
          <div className="relative flex items-end justify-center gap-4 sm:gap-8">
            <motion.div
              animate={{ rotate: [-6, 6, -6], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={60} color="blush" opacity={0.85} rotate={-20} />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.06, 1], rotate: [-3, 5, -3] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 -m-10 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(240,222,142,0.25) 0%, transparent 65%)',
              }} />
              <LilyFlower size={100} color="white" opacity={0.95} />
            </motion.div>

            <motion.div
              animate={{ rotate: [8, -5, 8], y: [0, -8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <LilyFlower size={55} color="cream" opacity={0.85} rotate={25} />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Top decorative divider */}
        <ScrollReveal delay={0.4} direction="fade" className="mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="w-14 sm:w-24 h-px" style={{
              background: 'linear-gradient(90deg, transparent, rgba(240,222,142,0.7))',
            }} />
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(240, 222, 142, 0)',
                  '0 0 20px 6px rgba(240, 222, 142, 0.3)',
                  '0 0 0 0 rgba(240, 222, 142, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #f0de8e, #d9a82a)',
              }}
            />
            <div className="w-14 sm:w-24 h-px" style={{
              background: 'linear-gradient(90deg, rgba(240,222,142,0.7), transparent)',
            }} />
          </div>
        </ScrollReveal>

        {/* Main love text */}
        <div className="text-center max-w-5xl mb-10 sm:mb-16 relative">
          <ScrollReveal delay={0.5} y={40}>
            <h2 className="font-serif font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] text-balance tracking-tight break-words">
              <span className="bg-gradient-to-br from-cream-100 via-gold-200 to-dusty-200 bg-clip-text text-transparent">
                Te amo, Lorena.
              </span>
              <span className="inline-block ml-2 sm:ml-5">
                <motion.span
                  initial={shouldReduceMotion ? {} : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2, type: 'spring', stiffness: 220, damping: 12 }}
                  className="inline-block"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    ❤️
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Subtitle phrase */}
        <div className="text-center max-w-3xl mb-14 sm:mb-20">
          <ScrollReveal delay={2.4} y={30}>
            <motion.div
              className="relative"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Opening quote */}
              <motion.span
                className="absolute -left-4 sm:-left-10 -top-6 sm:-top-10 font-serif font-bold text-5xl sm:text-8xl leading-none"
                style={{ color: 'rgba(240, 222, 142, 0.35)' }}
                initial={shouldReduceMotion ? {} : { y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                "
              </motion.span>

              <p className="font-script text-3xl sm:text-5xl md:text-6xl py-4 px-4">
                <span
                  className="bg-gradient-to-r from-cream-200 via-gold-300 to-dusty-200 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 5s linear infinite',
                  }}
                >
                  Que essa seja apenas mais uma página da nossa história.
                </span>
              </p>

              {/* Closing quote */}
              <motion.span
                className="absolute -right-4 sm:-right-10 -bottom-16 sm:-bottom-20 font-serif font-bold text-5xl sm:text-8xl leading-none rotate-180"
                style={{ color: 'rgba(240, 222, 142, 0.35)' }}
                initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.7, duration: 0.8 }}
              >
                "
              </motion.span>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bottom decorative */}
        <ScrollReveal delay={3} direction="fade" className="mb-12">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={45} color="white" opacity={0.75} />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 sm:w-40 h-px" style={{
                background: 'linear-gradient(90deg, transparent, rgba(217,168,42,0.6), transparent)',
              }} />
              <span className="font-script text-2xl sm:text-3xl opacity-70" style={{ color: '#f0de8e' }}>
                para sempre
              </span>
              <div className="w-24 sm:w-40 h-px" style={{
                background: 'linear-gradient(90deg, transparent, rgba(217,168,42,0.6), transparent)',
              }} />
            </div>
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="scale-x-[-1]"
            >
              <LilyFlower size={45} color="blush" opacity={0.75} />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={3.2} direction="fade" className="mt-4">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase" style={{ color: '#f0de8e' }}>
              <span>Feito</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
              >
                ❤️
              </motion.span>
              <span>com amor</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
