import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Para Lorena ❤️',
  description: 'Um presente digital feito com todo o carinho do mundo para a pessoa mais especial da minha vida.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
