'use client'

import { motion } from 'framer-motion'

interface LilyFlowerProps {
  size?: number
  color?: 'white' | 'blush' | 'cream' | 'pink'
  opacity?: number
  rotate?: number
  className?: string
}

export default function LilyFlower({
  size = 120,
  color = 'white',
  opacity = 0.9,
  rotate = 0,
  className = '',
}: LilyFlowerProps) {
  const palettes = {
    white: {
      petalMain: '#fdfaf1',
      petalEdge: '#f4d7cc',
      petalRidge: 'rgba(234, 187, 168, 0.45)',
      throatBase: '#efd698',
      throatAccent: '#d9a82a',
      anther: '#c79a2e',
      filament: '#faf3dd',
      stigma: '#e7c16e',
    },
    blush: {
      petalMain: '#fdf2f4',
      petalEdge: '#eabba8',
      petalRidge: 'rgba(224, 117, 147, 0.4)',
      throatBase: '#dc957b',
      throatAccent: '#b95f42',
      anther: '#a96a1a',
      filament: '#f9ece6',
      stigma: '#cc775a',
    },
    cream: {
      petalMain: '#fdfaf1',
      petalEdge: '#efd698',
      petalRidge: 'rgba(231, 193, 110, 0.45)',
      throatBase: '#e7c16e',
      throatAccent: '#c48b1d',
      anther: '#b8873d',
      filament: '#faf3dd',
      stigma: '#daa74e',
    },
    pink: {
      petalMain: '#fbe4e9',
      petalEdge: '#e07593',
      petalRidge: 'rgba(181, 48, 85, 0.4)',
      throatBase: '#eca7b9',
      throatAccent: '#972447',
      anther: '#d9a82a',
      filament: '#fdf2f4',
      stigma: '#cc4b6f',
    },
  }

  const c = palettes[color]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={className}
      style={{ opacity, overflow: 'visible' }}
    >
      <defs>
        {/* Petal gradient - base to tip */}
        <linearGradient id={`petal-grad-${color}`} x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={c.petalEdge} stopOpacity="0.95" />
          <stop offset="45%" stopColor={c.petalMain} stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
        </linearGradient>

        {/* Throat / funnel gradient (inside the lily cup) */}
        <radialGradient id={`throat-grad-${color}`} cx="50%" cy="72%" r="32%">
          <stop offset="0%" stopColor={c.throatAccent} stopOpacity="0.95" />
          <stop offset="55%" stopColor={c.throatBase} stopOpacity="0.6" />
          <stop offset="100%" stopColor={c.petalMain} stopOpacity="0" />
        </radialGradient>

        {/* Soft glow under the flower */}
        <radialGradient id={`glow-grad-${color}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.petalEdge} stopOpacity="0.3" />
          <stop offset="100%" stopColor={c.petalEdge} stopOpacity="0" />
        </radialGradient>

        {/* Petal clip for shading */}
        <clipPath id={`clip-center-${color}`}>
          <circle cx="120" cy="120" r="60" />
        </clipPath>
      </defs>

      {/* Soft outer glow */}
      <circle cx="120" cy="120" r="115" fill={`url(#glow-grad-${color})`} opacity="0.4" />

      <g transform={`translate(120 120) rotate(${rotate})`}>
        {/* ========================================
            OUTER SEPALS (3, alternating with inner petals - characteristic of LILIES)
            Slightly wider and shorter, placed behind
            ======================================== */}
        {[0, 120, 240].map((deg, i) => (
          <g key={`outer-${i}`} transform={`rotate(${deg})`}>
            {/* Outer sepal shape - classic lily trumpet */}
            <path
              d="M 0,14
                 C -32,0 -48,-45 -38,-92
                 C -32,-114 -10,-128 0,-134
                 C 10,-128 32,-114 38,-92
                 C 48,-45 32,0 0,14 Z"
              fill={`url(#petal-grad-${color})`}
              stroke={c.petalEdge}
              strokeWidth="0.4"
              opacity="0.98"
            />
            {/* Midvein on outer sepal */}
            <path
              d="M 0,10 C -2,-30 -4,-70 0,-120"
              stroke={c.petalRidge}
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Subtle edge shade on sepal */}
            <path
              d="M 0,14
                 C -30,-2 -44,-40 -36,-86
                 C -30,-108 -12,-122 -4,-128"
              stroke={c.petalEdge}
              strokeWidth="0.3"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M 0,14
                 C 30,-2 44,-40 36,-86
                 C 30,-108 12,-122 4,-128"
              stroke={c.petalEdge}
              strokeWidth="0.3"
              fill="none"
              opacity="0.4"
            />
          </g>
        ))}

        {/* ========================================
            INNER PETALS (3, alternating with sepals)
            Narrower, slightly longer, curl back at tips - hallmark of lilies
            ======================================== */}
        {[60, 180, 300].map((deg, i) => (
          <g key={`inner-${i}`} transform={`rotate(${deg})`}>
            {/* Inner petal with characteristic curled-back tip */}
            <path
              d="M 0,10
                 C -24,-2 -34,-52 -30,-98
                 C -28,-120 -20,-134 -14,-146
                 C -6,-158 0,-160 0,-160
                 C 0,-160 6,-158 14,-146
                 C 20,-134 28,-120 30,-98
                 C 34,-52 24,-2 0,10 Z"
              fill={`url(#petal-grad-${color})`}
              stroke={c.petalEdge}
              strokeWidth="0.4"
            />
            {/* Strong midvein on inner petal */}
            <path
              d="M 0,6 C -2,-36 -4,-76 -2,-120 C -1,-140 0,-152 0,-156"
              stroke={c.petalRidge}
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Side veins */}
            <path
              d="M -1,-30 C -14,-52 -20,-82 -20,-108"
              stroke={c.petalRidge}
              strokeWidth="0.5"
              fill="none"
              opacity="0.45"
            />
            <path
              d="M -1,-30 C -18,-50 -24,-84 -22,-120"
              stroke={c.petalRidge}
              strokeWidth="0.4"
              fill="none"
              opacity="0.35"
            />
            <path
              d="M 1,-30 C 14,-52 20,-82 20,-108"
              stroke={c.petalRidge}
              strokeWidth="0.5"
              fill="none"
              opacity="0.45"
            />
            <path
              d="M 1,-30 C 18,-50 24,-84 22,-120"
              stroke={c.petalRidge}
              strokeWidth="0.4"
              fill="none"
              opacity="0.35"
            />
            {/* Recurved tip shadow */}
            <path
              d="M -14,-146 C -6,-156 0,-158 0,-158 C 0,-158 6,-156 14,-146"
              stroke="#ffffff"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* ========================================
            FLOWER THROAT / FUNNEL (trumpet shape center)
            ======================================== */}
        <circle r="62" fill={`url(#throat-grad-${color})`} opacity="0.85" />
        <g clipPath={`url(#clip-center-${color})`} opacity="0.6">
          {/* Nectar guide spots - lilies have freckles inside */}
          {[-24, -12, 12, 24].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={-8 + (i % 2) * 6} r="1.4" fill={c.throatAccent} opacity="0.55" />
              <circle cx={x - 5} cy={0 + (i % 2) * 8} r="1" fill={c.throatAccent} opacity="0.4" />
              <circle cx={x + 5} cy={-4 + (i % 2) * 4} r="0.9" fill={c.throatAccent} opacity="0.45" />
            </g>
          ))}
        </g>
        {/* Cup/funnel rim shadow */}
        <ellipse rx="58" ry="18" cy="-10" fill="none" stroke={c.throatAccent} strokeWidth="0.6" opacity="0.35" />
        <ellipse rx="48" ry="12" cy="-2" fill="none" stroke={c.throatBase} strokeWidth="0.4" opacity="0.5" />

        {/* ========================================
            STAMENS (6, long filaments + anthers on top)
            One of the most recognizable lily features
            ======================================== */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          // Each stamen leans out slightly and is at varying heights
          const leanOut = 18 + (i % 3) * 2
          const filamentLen = 62 + (i % 4) * 3
          const antherLen = 10 + (i % 2) * 2
          return (
            <g key={`stamen-${i}`} transform={`rotate(${deg})`}>
              {/* Filament - long thin stalk */}
              <path
                d={`M 0,0 C ${-leanOut * 0.4},${-filamentLen * 0.5} ${-leanOut * 0.9},${-filamentLen * 0.8} ${-leanOut},${-filamentLen}`}
                stroke={c.filament}
                strokeWidth="1.1"
                strokeLinecap="round"
                fill="none"
                opacity="0.95"
              />
              {/* Anther - oblong pollen sac on top (perpendicular to filament) */}
              <g transform={`translate(${-leanOut}, ${-filamentLen}) rotate(${deg + 90})`}>
                <ellipse
                  rx={antherLen / 2}
                  ry={antherLen}
                  fill={c.anther}
                  opacity="0.9"
                />
                <ellipse
                  rx={antherLen / 2 - 1}
                  ry={antherLen - 1.5}
                  fill="#fdfaf1"
                  opacity="0.15"
                />
                {/* Pollen dots */}
                <circle cx="0" cy={-antherLen * 0.6} r="0.8" fill={c.anther} opacity="0.6" />
                <circle cx="0.8" cy={antherLen * 0.4} r="0.7" fill={c.anther} opacity="0.5" />
                <circle cx="-0.9" cy="0" r="0.6" fill={c.anther} opacity="0.5" />
              </g>
            </g>
          )
        })}

        {/* ========================================
            PISTIL (female part) in the very center
            Taller than stamens, with a bulbous stigma on top
            ======================================== */}
        {/* Style */}
        <path
          d="M 0,0 C 0,-38 -1,-70 2,-98"
          stroke={c.filament}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        <path
          d="M 0,0 C 0,-38 -1,-70 2,-98"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Stigma - 3 lobed lily characteristic */}
        <g transform="translate(2, -98)">
          {/* Central stigma bulb */}
          <ellipse rx="5" ry="6" fill={c.stigma} opacity="0.92" />
          {/* Three characteristic recurved lobes of lily stigma */}
          <path
            d="M 0,-2 C -2,-8 -8,-10 -11,-8 C -13,-6 -10,-2 -5,-1"
            fill={c.stigma}
            opacity="0.88"
          />
          <path
            d="M 0,-2 C 2,-8 8,-10 11,-8 C 13,-6 10,-2 5,-1"
            fill={c.stigma}
            opacity="0.88"
          />
          <path
            d="M 0,0 C -1,5 -3,9 -6,10 C -8,10 -4,6 0,3"
            fill={c.stigma}
            opacity="0.9"
          />
          {/* Glossy highlight on stigma */}
          <ellipse cx="-1.5" cy="-2" rx="1.2" ry="2" fill="#ffffff" opacity="0.4" />
        </g>

        {/* Very center connection base */}
        <circle r="8" fill={c.petalMain} opacity="0.95" />
        <circle r="5" fill={c.throatBase} opacity="0.7" />
      </g>
    </svg>
  )
}
