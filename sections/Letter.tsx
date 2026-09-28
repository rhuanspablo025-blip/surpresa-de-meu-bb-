'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import LilyCorner from '../components/LilyCorner'
import AmbientParticles from '../components/AmbientParticles'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

// ============================================================
// ÁREA EDITÁVEL - Carta para Lorena
//
// Substitua TODO o conteúdo do texto abaixo pela sua declaração.
// Você pode escrever o quanto quiser.
// Use <br /> para quebrar linhas, ou deixe o texto naturalmente fluir.
// ============================================================
const letterContent = `
Minha querida Lorena,

<br /><br />

Desde o momento em que te conheci, o meu mundo ganhou cores que eu nem sabia que existiam. Cada dia ao seu lado é uma página nova de uma história que eu quero viver para sempre, um capítulo após o outro, sem pressa, sem fim.

<br /><br />

Eu não sei explicar com palavras tudo o que você faz comigo. É o jeito que o seu sorriso ilumina qualquer ambiente, é o som da sua voz que acalma os meus dias mais difíceis, é a paz que eu sinto só de saber que você existe.

<br /><br />

Você me mostrou o que é amar de verdade — sem medos, sem cobranças, com toda a leveza do mundo. E eu quero te devolver esse amor todos os dias, nos pequenos detalhes, nos olhares, nas conversas até de madrugada.

<br /><br />

Obrigado por ser você. Por ser essa mulher incrível, delicada, forte e cheia de luz. Obrigado por me escolher todo dia. Por me fazer acreditar que histórias felizes de verdade existem — e a nossa é a melhor de todas.

<br /><br />

Eu te amo mais do que palavras conseguem dizer. Mais do que ontem, menos do que amanhã.

<br /><br />

Com todo o meu amor, sempre.

<br /><br />

❤️
`

const letterSignOff = ''
// ============================================================

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="carta"
      backgroundClass="bg-cinematic"
      className="py-24 sm:py-32"
      minHeight="min-h-[100svh]"
    >
      <AmbientParticles count={25} variant="light" />

      <LilyCorner position="top-left" size={160} color="blush" opacity={0.55} delay={0.4} />
      <LilyCorner position="bottom-right" size={180} color="cream" opacity={0.5} delay={0.6} />
      <LilyCorner position="top-right" size={120} color="white" opacity={0.45} delay={0.7} rotate={15} />

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-14 sm:mb-20 text-center relative z-[3]">
        <ScrollReveal delay={0.1}>
          <span className="inline-block font-script text-3xl sm:text-4xl text-gradient-gold mb-4">
            Com amor
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={30}>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-wine mb-6 text-balance break-words">
            Uma carta para você
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5} direction="fade">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-wine-400/60" />
            <svg width="26" height="20" viewBox="0 0 26 20" className="text-wine-600">
              <path fill="currentColor" d="M2 0h22c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zm0 2v.5L13 10l11-7.5V2H2zm22 3.3l-10.4 7a1.9 1.9 0 01-1.2-.3L2 5.3V18h22V5.3z"/>
            </svg>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-wine-400/60" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} y={20}>
          <p className="font-sans text-lg sm:text-xl text-wine-800/75 max-w-xl mx-auto italic">
            Clique e abra... cada palavra foi escolhida pensando em você.
          </p>
        </ScrollReveal>
      </div>

      {/* Letter envelope */}
      <div className="max-w-3xl mx-auto px-6 relative z-[3]">
        <ScrollReveal delay={0.4} direction="zoom" y={40}>
          <div className="relative perspective-1000">
            {/* Decorative lilies around */}
            <motion.div
              className="absolute -top-10 -left-8 sm:-left-14 z-10 hidden sm:block"
              animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={70} color="blush" opacity={0.8} rotate={-20} />
            </motion.div>
            <motion.div
              className="absolute -top-8 -right-6 sm:-right-12 z-10 hidden sm:block"
              animate={{ y: [0, 10, 0], rotate: [8, -4, 8] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <LilyFlower size={65} color="cream" opacity={0.8} rotate={30} />
            </motion.div>

            {/* Envelope / Paper */}
            <div className="relative">
              {/* Envelope base - closed state */}
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <motion.div
                    key="envelope"
                    initial={shouldReduceMotion ? {} : { rotateX: 0 }}
                    exit={shouldReduceMotion ? {} : { rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                  >
                    <motion.button
                      onClick={() => setIsOpen(true)}
                      className="relative w-full block cursor-pointer text-left"
                      whileHover={shouldReduceMotion ? {} : { y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Envelope body */}
                      <div
                        className="relative w-full rounded-lg overflow-hidden shadow-elegant"
                        style={{
                          paddingTop: '60%',
                          background: 'linear-gradient(135deg, #7d203e 0%, #972447 35%, #6a1e38 70%, #3c0c1c 100%)',
                          boxShadow: '0 20px 60px rgba(60, 12, 28, 0.35), 0 6px 20px rgba(0,0,0,0.15)',
                        }}
                      >
                        {/* Envelope inner texture */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(240,222,142,0.1) 35px, rgba(240,222,142,0.1) 70px)',
                        }} />

                        {/* Envelope top flap (closed) */}
                        <div
                          className="absolute top-0 left-0 right-0"
                          style={{
                            height: '50%',
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                            background: 'linear-gradient(180deg, #8a2445 0%, #6a1e38 60%, #50182d 100%)',
                            borderBottom: '1px solid rgba(240, 222, 142, 0.2)',
                          }}
                        />

                        {/* Wax seal */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 z-10">
                          <motion.div
                            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                            animate={{
                              boxShadow: [
                                '0 0 0 0 rgba(217, 168, 42, 0)',
                                '0 0 25px 8px rgba(217, 168, 42, 0.25)',
                                '0 0 0 0 rgba(217, 168, 42, 0)',
                              ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative"
                          >
                            {/* Seal background */}
                            <div
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                              style={{
                                background: 'radial-gradient(circle at 30% 30%, #e07593, #b53055 50%, #6a1e38)',
                                border: '2px solid rgba(240, 222, 142, 0.5)',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 4px rgba(255,255,255,0.2)',
                              }}
                            >
                              <span className="font-script text-2xl sm:text-3xl" style={{ color: '#f0de8e' }}>
                                L
                              </span>
                            </div>
                          </motion.div>
                        </div>

                        {/* "Clique para abrir" hint */}
                        <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                          <motion.span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm tracking-wider font-medium"
                            animate={{ y: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                              color: '#f0de8e',
                              background: 'rgba(60, 12, 28, 0.5)',
                              border: '1px solid rgba(240, 222, 142, 0.25)',
                              backdropFilter: 'blur(4px)',
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                            Clique para abrir
                          </motion.span>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Opened letter paper */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="paper"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Paper card */}
                    <div className="relative">
                      {/* Outer decorative border */}
                      <div
                        className="absolute -inset-1 rounded-3xl"
                        style={{
                          background: 'linear-gradient(135deg, #d9a82a, #cc4b6f, #d9a82a, #7d203e, #d9a82a)',
                          opacity: 0.5,
                          filter: 'blur(4px)',
                        }}
                      />

                      {/* Paper */}
                      <div
                        className="relative bg-paper rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-12 md:p-16 shadow-card-hover"
                        style={{
                          border: '1px solid rgba(217, 168, 42, 0.2)',
                        }}
                      >
                        {/* Paper texture overlay */}
                        <div className="absolute inset-0 opacity-30 pointer-events-none"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 20% 30%, rgba(184, 135, 61, 0.05) 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, rgba(204, 75, 111, 0.05) 0%, transparent 40%)
                            `,
                          }}
                        />

                        {/* Close button */}
                        <motion.button
                          onClick={() => setIsOpen(false)}
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
                          style={{
                            background: 'rgba(125, 32, 62, 0.08)',
                            border: '1px solid rgba(125, 32, 62, 0.15)',
                            color: '#7d203e',
                          }}
                          whileHover={shouldReduceMotion ? {} : { rotate: 90 }}
                          aria-label="Fechar carta"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </motion.button>

                        {/* Corner decorative lines */}
                        <svg className="absolute top-4 left-4 w-14 h-14 opacity-50" viewBox="0 0 56 56" fill="none">
                          <path d="M2 14V2H14" stroke="#d9a82a" strokeWidth="1" strokeLinecap="round"/>
                          <path d="M6 18V6H18" stroke="#d9a82a" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                        <svg className="absolute top-4 right-4 w-14 h-14 opacity-50 rotate-90" viewBox="0 0 56 56" fill="none">
                          <path d="M2 14V2H14" stroke="#d9a82a" strokeWidth="1" strokeLinecap="round"/>
                          <path d="M6 18V6H18" stroke="#d9a82a" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                        <svg className="absolute bottom-4 left-4 w-14 h-14 opacity-50 -rotate-90" viewBox="0 0 56 56" fill="none">
                          <path d="M2 14V2H14" stroke="#d9a82a" strokeWidth="1" strokeLinecap="round"/>
                          <path d="M6 18V6H18" stroke="#d9a82a" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                        <svg className="absolute bottom-4 right-4 w-14 h-14 opacity-50 rotate-180" viewBox="0 0 56 56" fill="none">
                          <path d="M2 14V2H14" stroke="#d9a82a" strokeWidth="1" strokeLinecap="round"/>
                          <path d="M6 18V6H18" stroke="#d9a82a" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>

                        {/* Letter header */}
                        <motion.div
                          className="text-center mb-8 sm:mb-12"
                          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.7 }}
                        >
                          <div className="inline-flex items-center gap-3 mb-5">
                            <div className="w-6 h-6 sm:w-8 sm:h-8">
                              <LilyFlower size={24} color="blush" />
                            </div>
                            <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, rgba(217,168,42,0.6), transparent)' }} />
                          </div>

                          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-gradient-wine mb-4">
                            Minha querida Lorena,
                          </p>
                          <div className="h-px w-32 sm:w-40 mx-auto rounded-full" style={{
                            background: 'linear-gradient(90deg, transparent, rgba(217,168,42,0.7), transparent)',
                          }} />
                        </motion.div>

                        {/* Letter body */}
                        <motion.article
                          className="relative z-[1] font-sans text-base sm:text-lg md:text-xl leading-[2] sm:leading-[2.1] text-wine-900/90"
                          style={{ textAlign: 'justify', hyphens: 'auto' }}
                          initial={shouldReduceMotion ? {} : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7, duration: 1.2 }}
                        >
                          <div className="first-letter:font-serif first-letter:text-6xl sm:first-letter:text-7xl first-letter:font-bold first-letter:mr-2 first-letter:mt-1 first-letter:float-left first-letter:leading-none first-letter:text-gradient-wine">
                            <div dangerouslySetInnerHTML={{ __html: letterContent.trim() }} />
                          </div>

                          {letterSignOff && (
                            <div className="mt-10 pt-8 border-t border-wine-200/40">
                              <p className="font-script text-3xl text-right text-wine-800">
                                {letterSignOff}
                              </p>
                            </div>
                          )}
                        </motion.article>

                        {/* Bottom small lily decoration */}
                        <motion.div
                          className="flex justify-center mt-10 sm:mt-14"
                          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, type: 'spring', stiffness: 180, damping: 18 }}
                        >
                          <div className="relative">
                            <LilyFlower size={50} color="cream" opacity={0.8} />
                            <div className="absolute inset-0 -m-6 rounded-full" style={{
                              background: 'radial-gradient(circle, rgba(240,222,142,0.25) 0%, transparent 60%)',
                            }} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Edit hint */}
            {/*
            <ScrollReveal delay={1.4} direction="fade" className="mt-10 text-center">
              <p className="font-sans text-sm text-wine-700/60 italic">
                💡 Edite o conteúdo da carta no arquivo <code className="font-mono bg-wine-50 px-1.5 py-0.5 rounded text-wine-700">sections/Letter.tsx</code>
              </p>
            </ScrollReveal>
            */}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
