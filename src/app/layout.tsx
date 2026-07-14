import type { Metadata } from 'next'
import { Instrument_Serif, Spectral, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const spectral = Spectral({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-spectral',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono-rw',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REWILD — An Ecological Effort',
  description:
    'An open, interdisciplinary movement for ecological & nature-based literacy — bridging science, humanities, indigenous knowledge, and technology into one living platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spectral.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
