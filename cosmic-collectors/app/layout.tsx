import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'


// ใช้ Poppins แทน Geist (ตามดีไซน์ใน Cosmic Collectors)
const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Cosmic Collectors - NFT Adventure Game',
  description: 'Embark on an intergalactic NFT journey!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <body className={`${poppins.variable} font-sans bg-white text-gray-900 dark:bg-[#0f0e17] dark:text-gray-100`}>
      {children}
    </body>
  </html>
  
  )
}
