import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Web3Provider } from '@/context/Web3Context' // <-- import context

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
      <body className={`${poppins.variable} font-sans bg-white/90 text-gray-900 dark:bg-[#0f0e17]/80 dark:text-gray-100 transition-colors duration-300`}>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  )
}
