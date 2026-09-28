'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LilyCorner from '../components/LilyCorner'
import AmbientParticles from '../components/AmbientParticles'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

// ============================================================
// ÁREA EDITÁVEL - Modifique os textos e títulos abaixo
// ============================================================
const storyMoments = [
  {
    id: 1,
    title: 'O começo',
    subtitle: 'Quando tudo começou...',
    text: 'Foi assim que tudo começou... Um dia qualquer, que se tornou o mais especial da minha vida. O momento em que tudo mudou para sempre.',
    icon: '🌱',
  },
  {
    id: 2,
    title: 'Os momentos',
    subtitle: 'Cada detalhe importa',
    text: 'Cada momento ao seu lado se tornou uma memória que guardo com todo o carinho. Os risos, as conversas até tarde, os olhares que não precisam de palavras. Todos eles formam a coisa mais linda que já vivi.',
    icon: '✨',
  },
  {
    id: 3,
    title: 'Hoje',
    subtitle: 'E sempre...',
    text: 'E depois de tudo, ainda escolheria você. Em cada versão da minha vida, em cada realidade possível, eu sempre te escolheria. Você é a certeza que eu nunca preciso questionar.',
    icon: '❤️',
  },
]
// ============================================================

export default function OurStory() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="historia"
      backgroundClass="bg-cinematic"
      minHeight="min-h-[100svh]"
      className="py-24 sm:py-32"
    >
      <AmbientParticles count={25} variant="light" />

      <LilyCorner position="top-right" size={150} color="cream" opacity={0.5} delay={0.3} />
      <LilyCorner position="bottom-left" size={160} color="blush" opacity={0.55} delay={0.5} />

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-16 sm:mb-24 text-center relative z-[3]">
        <ScrollReveal delay={0.1}>
          <span className="inline-block font-script text-3xl sm:text-4xl text-gradient-gold mb-4">
            Capítulo Um
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={30}>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-wine mb-6 text-balance break-words">
            Tudo começou com você...
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5} direction="fade">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-400/60" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="opacity-70"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#d9a82a" d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/>
              </svg>
            </motion.div>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} y={20}>
          <p className="font-sans text-lg sm:text-xl text-wine-800/75 max-w-2xl mx-auto italic">
            Cada página da nossa história é escrita com o seu nome...
          </p>
        </ScrollReveal>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 relative z-[3]">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wine-400/40 to-transparent sm:-translate-x-1/2 hidden sm:block" />

        <div className="space-y-12 sm:space-y-20">
          {storyMoments.map((moment, index) => (
            <ScrollReveal
              key={moment.id}
              delay={0.2 + index * 0.2}
              direction={index % 2 === 0 ? 'right' : 'left'}
              y={50}
            >
              <div
                className={`relative flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 flex-shrink-0 hidden sm:block z-10">
                  <motion.div
                    className="relative"
                    initial={shouldReduceMotion ? {} : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: 'spring', stiffness: 180, damping: 14 }}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{
                        background: 'radial-gradient(circle, #d9a82a 0%, transparent 70%)',
                        width: 40,
                        height: 40,
                        left: -8,
                        top: -8,
                      }}
                    />
                    <div className="w-6 h-6 rounded-full border-2 shadow-gold flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #7d203e, #b53055)',
                        borderColor: '#f0de8e',
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gold-300" />
                    </div>
                  </motion.div>
                </div>

                {/* Lily decoration - desktop */}
                <div className="hidden sm:block flex-shrink-0" style={{ width: 100 }} />

                {/* Card */}
                <div className={`flex-1 sm:max-w-[45%] ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : {
                      y: -8,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    }}
                    className="relative group"
                  >
                    {/* Lily on card corner */}
                    <motion.div
                      className={`absolute -top-8 ${index % 2 === 0 ? '-right-6 sm:-left-6' : '-left-6 sm:-right-6'} opacity-60 z-[1] hidden sm:block`}
                      animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                    >
                      <LilyFlower size={55} color={index % 2 === 0 ? 'blush' : 'cream'} />
                    </motion.div>

                    <div
                      className="relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 overflow-hidden"
                      style={{
                        background: 'linear-gradient(145deg, rgba(253,250,241,0.95) 0%, rgba(252,247,244,0.9) 100%)',
                        borderColor: 'rgba(234, 187, 168, 0.3)',
                        boxShadow: '0 4px 24px rgba(60, 12, 28, 0.06), 0 1px 0 rgba(255,255,255,0.9)',
                      }}
                    >
                      {/* Hover gradient border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          padding: 1,
                          background: 'linear-gradient(135deg, rgba(217,168,42,0.5), rgba(204,75,111,0.3), rgba(217,168,42,0.5))',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />

                      {/* Card number */}
                      <div className={`flex items-center gap-3 mb-5 ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                        <span className="text-2xl">{moment.icon}</span>
                        <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                          <span className="font-script text-3xl text-gradient-gold leading-none">
                            0{moment.id}
                          </span>
                          <div className="h-px w-10 bg-gold-400/40" />
                        </div>
                      </div>

                      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-wine-800 mb-2">
                        {moment.title}
                      </h3>
                      <p className="text-dusty-600 font-medium text-sm tracking-wide mb-4 uppercase">
                        {moment.subtitle}
                      </p>
                      <p className="font-sans text-base sm:text-lg leading-relaxed text-wine-900/80">
                        {moment.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decorative lily */}
        <ScrollReveal delay={0.9} direction="zoom" className="flex justify-center mt-20 sm:mt-28">
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={100} color="white" opacity={0.85} />
            </motion.div>
            <div className="absolute -inset-8 rounded-full" style={{
              background: 'radial-gradient(circle, rgba(240,222,142,0.2) 0%, transparent 70%)',
            }} />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
