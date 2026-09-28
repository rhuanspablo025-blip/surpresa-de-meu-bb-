'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import LilyCorner from '../components/LilyCorner'
import AmbientParticles from '../components/AmbientParticles'
import Section, { TextSplit } from '../components/Section'
import ScrollReveal from '../components/ScrollReveal'
import LilyFlower from '../components/LilyFlower'

// ============================================================
// ÁREA EDITÁVEL - Adicione suas fotos aqui
//
// Instruções:
// 1. Coloque suas imagens na pasta /public/fotos/ (crie a pasta se não existir)
// 2. Atualize os caminhos abaixo: src: "/fotos/nome-da-imagem.jpg"
// 3. Ou use URLs completas de imagens hospedadas
// 4. Adicione quantas fotos quiser, copiando os objetos
// 5. Preencha o atributo "caption" com uma descrição carinhosa para cada foto
// ============================================================
interface PhotoItem {
  id: number
  src: string
  caption: string
  alt: string
  rotation?: number
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: '/fotos/6.jpeg',
    caption: 'Nosso momento, com as luzes que só tornam tudo mais especial ao seu lado.',
    alt: 'Casal juntos em momento especial',
  },
  {
    id: 2,
    src: '/fotos/7.jpeg',
    caption: 'O seu sorriso de vestido azul — impossível não derreter por você.',
    alt: 'Lorena de vestido azul',
    rotation: -90,
  },
  {
    id: 3,
    src: '/fotos/10.jpeg',
    caption: 'Esse riso... faz todo o meu dia valer a pena. Te amo.',
    alt: 'Lorena sorrindo',
    rotation: 180,
  },
  {
    id: 4,
    src: '/fotos/8.jpeg',
    caption: 'Esse seu olhar... meu lugar favorito no mundo todo.',
    alt: 'Lorena mão no rosto',
  },
  {
    id: 5,
    src: '/fotos/9.jpeg',
    caption: 'Com óculos, sem óculos... você sempre, sempre linda.',
    alt: 'Lorena de óculos',
    rotation: -90,
  },
  {
    id: 6,
    src: '/fotos/img2.jpeg',
    caption: 'Cada detalhe seu, cada detalhe que me faz te amar mais.',
    alt: 'Momento 2',
  },
  {
    id: 7,
    src: '/fotos/img3.jpeg',
    caption: 'Memórias que a gente guarda no fundo do coração, pra sempre.',
    alt: 'Momento 3',
  },
  {
    id: 8,
    src: '/fotos/img4.jpeg',
    caption: 'Sua beleza... impossível descrever. Só sentir.',
    alt: 'Momento 4',
  },
  {
    id: 9,
    src: '/fotos/img5.jpeg',
    caption: 'Você, Lorena. A razão do meu sorriso todos os dias.',
    alt: 'Momento 5',
  },
  {
    id: 10,
    src: '/fotos/WhatsApp Image 2026-09-28 at 12.59.21.jpeg',
    caption: 'Só mais um de tantos momentos que quero viver com você.',
    alt: 'Momento especial WhatsApp',
  },
]
// ============================================================

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const openLightbox = useCallback((photo: PhotoItem) => {
    setSelectedPhoto(photo)
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    if (selectedPhoto) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [selectedPhoto, closeLightbox])

  return (
    <Section
      id="fotos"
      backgroundClass="bg-cinematic"
      className="py-24 sm:py-32"
      minHeight="min-h-[100svh]"
    >
      <AmbientParticles count={25} variant="light" />

      <LilyCorner position="top-right" size={170} color="white" opacity={0.5} delay={0.4} />
      <LilyCorner position="bottom-left" size={150} color="cream" opacity={0.55} delay={0.5} />
      <LilyCorner position="middle-left" size={100} color="blush" opacity={0.35} delay={0.7} />

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-16 sm:mb-20 text-center relative z-[3]">
        <ScrollReveal delay={0.1}>
          <span className="inline-block font-script text-3xl sm:text-4xl text-gradient-gold mb-4">
            Nossas memórias
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={30}>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-wine mb-6 text-balance break-words">
            Nossos momentos
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5} direction="fade">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-14 sm:w-20 bg-gradient-to-r from-transparent via-wine-500/50 to-gold-400/60" />
            <motion.div
              whileHover={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="cursor-default"
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#cc4b6f" d="M12 2a5 5 0 015 5c0 1.6-.8 3-2 4h-6c-1.2-1-2-2.4-2-4a5 5 0 015-5zM4 11h16l-2 9H6l-2-9z"/>
              </svg>
            </motion.div>
            <div className="h-px w-14 sm:w-20 bg-gradient-to-l from-transparent via-wine-500/50 to-gold-400/60" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6} y={20}>
          <p className="font-sans text-lg sm:text-xl text-wine-800/75 max-w-2xl mx-auto italic">
            Clique em uma foto para vê-la em detalhes. Cada imagem guarda um pedacinho do nosso amor.
          </p>
        </ScrollReveal>
      </div>

      {/* Gallery grid */}
      <div className="max-w-6xl mx-auto px-6 relative z-[3]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {photos.map((photo, index) => (
            <ScrollReveal
              key={photo.id}
              delay={0.1 + index * 0.08}
              y={30}
              className="aspect-square w-full"
            >
              <motion.button
                onClick={() => openLightbox(photo)}
                className="group relative w-full h-full aspect-square overflow-hidden rounded-2xl transition-all duration-500"
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.02,
                  zIndex: 10,
                }}
                style={{
                  boxShadow: '0 6px 24px rgba(60, 12, 28, 0.1), 0 2px 6px rgba(60,12,28,0.06)',
                  background: 'linear-gradient(135deg, rgba(125,32,62,0.12), rgba(217,168,42,0.15))',
                }}
              >
                {/* Inner image */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-1 sm:p-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    style={photo.rotation ? { transform: `rotate(${photo.rotation}deg) scale(${Math.abs(photo.rotation) === 90 ? 0.82 : 1})` } : undefined}
                    loading="lazy"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-wine-900/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Golden frame on hover */}
                <div className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: '1px solid rgba(240, 222, 142, 0.6)',
                    boxShadow: 'inset 0 0 30px rgba(217, 168, 42, 0.2)',
                  }}
                />

                {/* Hover icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                    style={{
                      background: 'rgba(125, 32, 62, 0.7)',
                      border: '1px solid rgba(240, 222, 142, 0.5)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fdfaf1">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="w-4 h-4">
                        <LilyFlower size={16} color="cream" opacity={0.9} />
                      </div>
                    </motion.div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-300/80 to-transparent" />
                  </div>
                  <p className="text-cream-100 font-sans text-xs sm:text-base italic leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>

        {/* Add photo placeholder hint */}
        {/*
        <ScrollReveal delay={1} direction="fade" className="mt-10 text-center">
          <p className="font-sans text-sm text-wine-700/60 italic">
            💡 Dica: Adicione quantas fotos quiser editando o arquivo <code className="font-mono bg-wine-50 px-1.5 py-0.5 rounded text-wine-700">sections/PhotoGallery.tsx</code>
          </p>
        </ScrollReveal>
        */}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(26, 6, 16, 0.9) 0%, rgba(0, 0, 0, 0.96) 100%)',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Close button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'rgba(125, 32, 62, 0.95)',
                border: '2px solid rgba(240, 222, 142, 0.7)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5), 0 0 20px rgba(217, 168, 42, 0.2)',
                padding: 0,
              }}
              whileHover={shouldReduceMotion ? {} : { rotate: 90 }}
              aria-label="Fechar"
              type="button"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#fdfaf1" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </motion.button>

            {/* Content */}
            <motion.div
              className="relative z-10 max-w-5xl w-full max-h-[90svh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            >
              {/* Corner decorations */}
              <div className="absolute -top-6 -left-6 opacity-60 hidden sm:block">
                <LilyFlower size={70} color="white" />
              </div>
              <div className="absolute -top-6 -right-6 opacity-60 hidden sm:block scale-x-[-1]">
                <LilyFlower size={70} color="cream" />
              </div>

              {/* Image frame */}
              <div
                className="relative p-2 sm:p-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #d9a82a 0%, #f0de8e 20%, #7d203e 50%, #f0de8e 80%, #d9a82a 100%)',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 80px rgba(217, 168, 42, 0.15)',
                }}
              >
                <div
                  className="relative rounded-xl overflow-hidden bg-wine-950 flex items-center justify-center w-full"
                  style={{ maxHeight: '75vh', minHeight: '50vh' }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center p-3 sm:p-5"
                    style={selectedPhoto.rotation ? { transform: `rotate(${selectedPhoto.rotation}deg)` } : undefined}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      className="max-w-full max-h-[73vh] w-auto h-auto object-contain rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-gold-400/60" />
                  <span className="text-gold-400">✦</span>
                  <div className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-gold-400/60" />
                </div>
                <p className="font-sans text-lg sm:text-2xl italic text-cream-100 max-w-2xl mx-auto">
                  {selectedPhoto.caption}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
