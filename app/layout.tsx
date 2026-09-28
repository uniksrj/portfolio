import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suraj Rajput — Full-Stack & Systems Engineer | Portfolio',
  description: 'Portfolio of Suraj Rajput, a full-stack & mobile developer specializing in high-performance web platforms, scalable APIs, and intuitive user interfaces.',
  keywords: ['Suraj Rajput', 'Full-Stack Developer', 'Next.js', 'React', 'PHP', 'Laravel', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Suraj Rajput', url: 'https://github.com/uniksrj' }],
  creator: 'Suraj Rajput',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suraj.dev',
    title: 'Suraj Rajput — Full-Stack & Systems Engineer',
    description: 'Turning complex problems into scalable products, intuitive interfaces, and dependable systems.',
    siteName: 'Suraj Rajput Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Rajput — Full-Stack & Systems Engineer',
    description: 'Turning complex problems into scalable products, intuitive interfaces, and dependable systems.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#090a0f' },
    { media: '(prefers-color-scheme: light)', color: '#f5f4ef' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-lime-400 selection:text-black">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
