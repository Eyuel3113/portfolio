import { Outfit } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import GridBackground from '@/components/ui/GridBackground'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/Navbar'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Eyuel Endale | Senior Full Stack Developer',
  description: 'Senior Full Stack Developer specializing in scalable backend architectures and premium UI/UX design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
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
