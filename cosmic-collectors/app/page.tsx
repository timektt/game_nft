'use client'

import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import GameFeatures from '@/components/sections/GameFeatures'
import NFTGallery from '@/components/NFTGallery'
import Gameplay from '@/components/Gameplay'
import Roadmap from '@/components/sections/Roadmap'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/shared/Footer'
import WalletModal from '@/components/WalletModal'
import { useWallet } from '@/context/Web3Context'
import { useState } from 'react'

export default function Home() {
  const { isConnected, connectWallet } = useWallet()
  const [isModalOpen, setIsModalOpen] = useState(false)

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

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={async () => {
          await connectWallet()
          setIsModalOpen(false)
        }}
      />

    </>
  )
}
