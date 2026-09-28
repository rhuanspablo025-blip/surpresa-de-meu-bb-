'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LilyCorner from '../components/LilyCorner'
import AmbientParticles from '../components/AmbientParticles'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

// ============================================================
// ÁREA EDITÁVEL - Adicione ou modifique os motivos abaixo
// ============================================================
const specialReasons = [
  {
    id: 1,
    icon: '❤️',
    title: 'Seu sorriso',
    // Edite este texto
    text: 'O seu sorriso ilumina qualquer dia, qualquer momento. É a luz que me guia nos dias cinzentos e a alegria que torna tudo mais bonito. Não existe nada que eu não faria para ver esse sorriso.',
    gradient: 'from-wine-500/10 to-dusty-300/20',
  },
  {
    id: 2,
    icon: '✨',
    title: 'Seu jeito',
    // Edite este texto
    text: 'A sua maneira de ser, única e especial... Como você transforma coisas simples em momentos mágicos. O seu jeito de falar, de rir, de abraçar... tudo em você me faz te amar mais a cada dia.',
    gradient: 'from-gold-400/10 to-cream-300/30',
  },
  {
    id: 3,
    icon: '🌷',
    title: 'Sua presença',
    // Edite este texto
    text: 'Só de você estar por perto, tudo parece melhor. A sua paz acalma, o seu carinho aquece, a sua voz tranquiliza. Você é o meu lugar seguro, o meu porto de paz no meio de qualquer tempestade.',
    gradient: 'from-pink-200/30 to-blush-300/20',
  },
  {
    id: 4,
    icon: '💫',
    title: 'Os momentos',
    // Edite este texto
    text: 'Cada instante ao seu lado é um presente. Do mais trivial dia comum à mais grandiosa aventura. Tudo com você tem um sabor especial, uma magia única que não existe em mais lugar nenhum.',
    gradient: 'from-wine-400/10 to-gold-300/20',
  },
]
// ============================================================

export default function AboutYou() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="voce"
      backgroundClass="bg-cinematic"
      className="py-24 sm:py-32"
      minHeight="min-h-[100svh]"
    >
      <AmbientParticles count={30} variant="light" />

      <LilyCorner position="top-left" size={140} color="blush" opacity={0.45} delay={0.3} />
      <LilyCorner position="bottom-right" size={180} color="cream" opacity={0.5} delay={0.6} />
      <LilyCorner position="middle-right" size={110} color="pink" opacity={0.4} delay={0.8} />

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-16 sm:mb-20 text-center relative z-[3]">
        <ScrollReveal delay={0.1}>
          <span className="inline-block font-script text-3xl sm:text-4xl text-gradient-gold mb-4">
            Para a mulher mais especial
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={30}>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-wine mb-6 text-balance break-words">
            Por que você é especial?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5} direction="fade">
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-16 h-[1px]" style={{
                background: 'linear-gradient(90deg, transparent, #d9a82a, transparent)',
              }} />
            </motion.div>
            <span className="text-gold-500 text-sm">✦</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-16 h-[1px]" style={{
                background: 'linear-gradient(90deg, transparent, #d9a82a, transparent)',
              }} />
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} y={20}>
          <p className="font-sans text-lg sm:text-xl text-wine-800/75 max-w-2xl mx-auto italic">
            É impossível listar todos os motivos, mas estes são alguns dos que fazem você ser única...
          </p>
        </ScrollReveal>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-6 relative z-[3]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {specialReasons.map((reason, index) => (
            <ScrollReveal
              key={reason.id}
              delay={0.2 + index * 0.1}
              y={40}
              direction={index % 2 === 0 ? 'right' : 'left'}
            >
              <motion.div
                className="relative group h-full"
                whileHover={shouldReduceMotion ? {} : {
                  y: -10,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  rotateX: -2,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{ perspective: 1000 }}
              >
                {/* Decorative small lily */}
                <div className={`absolute -top-4 z-[2] ${index % 2 === 0 ? '-right-4' : '-left-4'}`}>
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  >
                    <LilyFlower size={50} color={index % 2 === 0 ? 'white' : 'blush'} opacity={0.7} />
                  </motion.div>
                </div>

                <div
                  className={`relative h-full rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-500 bg-gradient-to-br ${reason.gradient}`}
                  style={{
                    background: 'linear-gradient(145deg, rgba(253,250,241,0.95) 0%, rgba(249,236,230,0.9) 100%)',
                    border: '1px solid rgba(234, 187, 168, 0.25)',
                    boxShadow: '0 8px 32px rgba(60, 12, 28, 0.06), 0 2px 8px rgba(60,12,28,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full" style={{
                      background: 'radial-gradient(circle, rgba(217,168,42,0.15) 0%, transparent 70%)',
                    }} />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full" style={{
                      background: 'radial-gradient(circle, rgba(204,75,111,0.12) 0%, transparent 70%)',
                    }} />
                  </div>

                  {/* Card number */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                    <span className="font-serif font-bold text-5xl sm:text-6xl opacity-[0.07]" style={{ color: '#7d203e' }}>
                      0{reason.id}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(217,168,42,0.1), rgba(204,75,111,0.08))',
                      border: '1px solid rgba(217,168,42,0.2)',
                    }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-3xl sm:text-4xl">{reason.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(217,168,42,0.4)',
                          '0 0 30px 10px rgba(217,168,42,0.1)',
                          '0 0 0 0 rgba(217,168,42,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-wine-800 mb-4">
                    {reason.title}
                  </h3>

                  <div className="h-[2px] w-16 mb-5 rounded-full" style={{
                    background: 'linear-gradient(90deg, #d9a82a, #cc4b6f)',
                  }} />

                  <p className="font-sans text-base sm:text-lg leading-relaxed text-wine-900/80 relative z-[1]">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Decorative phrase */}
        <ScrollReveal delay={0.8} direction="zoom" className="mt-20 sm:mt-28 text-center">
          <motion.div className="relative inline-block">
            <motion.div
              className="absolute -left-16 -top-8 opacity-50"
              animate={{ rotate: [-8, 8, -8], y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LilyFlower size={60} color="cream" />
            </motion.div>
            <motion.div
              className="absolute -right-16 -bottom-8 opacity-50"
              animate={{ rotate: [8, -8, 8], y: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <LilyFlower size={55} color="blush" />
            </motion.div>

            <p className="font-script text-4xl sm:text-5xl md:text-6xl text-gradient-wine py-6 px-8">
              Simplesmente... você.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
