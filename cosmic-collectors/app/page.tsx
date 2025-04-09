 'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import GameFeatures from '@/components/sections/GameFeatures'
import NFTGallery from '@/components/NFTGallery'
import Gameplay from '@/components/Gameplay'
import Roadmap from '@/components/sections/Roadmap'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/shared/Footer'
import WalletModal from '@/components/WalletModal'
import FloatingWalletBtn from '@/components/FloatingWalletBtn'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
    setIsModalOpen(false)
  }

  return (
    <>
      <Header />
      <Hero />
      <GameFeatures />
      <NFTGallery />
      <Gameplay />
      <Roadmap />
      <Newsletter />
      <Footer />

      {/* ✅ ส่ง props ให้ถูกต้อง */}
      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={handleConnect}
      />

      <FloatingWalletBtn
        isConnected={isConnected}
        onClick={() => setIsModalOpen(true)}
      />
    </>
  )
}

