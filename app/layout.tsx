import { Outfit } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import GridBackground from '@/components/ui/GridBackground'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/Navbar'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://eyuel.pro.et'),
  title: {
    default: 'Eyuel Endale | Senior Full Stack Developer',
    template: '%s | Eyuel Endale',
  },
  description: 'Eyuel Endale - Senior Full Stack Developer specializing in scalable backend architectures, high-performance web applications, and premium UI/UX design.',
  keywords: [
    'Eyuel',
    'Eyuel Endale',
    'eyuel.pro.et',
    'eyuel',
    'Eyuel Developer',
    'Full Stack Developer',
    'Software Engineer Ethiopia',
    'Next.js Developer',
    'React Developer',
    'Web Application Developer'
  ],
  authors: [{ name: 'Eyuel Endale', url: 'https://eyuel.pro.et' }],
  creator: 'Eyuel Endale',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eyuel.pro.et',
    title: 'Eyuel Endale | Senior Full Stack Developer',
    description: 'Eyuel Endale - Senior Full Stack Developer specializing in scalable backend architectures and premium UI/UX design.',
    siteName: 'Eyuel Endale Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eyuel Endale | Senior Full Stack Developer',
    description: 'Eyuel Endale - Senior Full Stack Developer specializing in scalable backend architectures and premium UI/UX design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eyuel Endale',
  url: 'https://eyuel.pro.et',
  jobTitle: 'Senior Full Stack Developer',
  sameAs: [
    'https://github.com/Eyuel3113'
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden relative`}>
        <ScrollProgress />
        <GridBackground />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

