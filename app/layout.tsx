import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <div className="">{children}</div> 
       <Footer />
      </body>
       
    </html>
  )
}
