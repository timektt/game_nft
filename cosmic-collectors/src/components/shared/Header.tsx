'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRocket, FaWallet, FaBars, FaTimes } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher'
import { useWallet } from '@/context/Web3Context'
import ConnectWalletModal from '../ConnectWalletModal'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isConnected, account } = useWallet()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Marketplace', path: '/marketplace' },
    { label: 'Leaderboard', path: '/leaderboard' },
    { label: 'My Collection', path: '/collection' },
    { label: 'About', path: '/about' },
  ]

  return (
    <>
      <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <FaRocket className="text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text font-orbitron">Cosmic Collectors</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="text-white hover:text-purple-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <FaWallet className="mr-2" />
              <span>
                {isConnected && account
                  ? `${account.slice(0, 6)}...${account.slice(-4)}`
                  : 'Login'}
              </span>
            </button>
            <button
              className="md:hidden text-white"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="block text-white hover:text-purple-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition flex items-center justify-center"
              onClick={() => {
                setIsModalOpen(true)
                setMenuOpen(false)
              }}
            >
              <FaWallet className="mr-2" />
              <span>
                {isConnected && account
                  ? `${account.slice(0, 6)}...${account.slice(-4)}`
                  : 'Login'}
              </span>
            </button>
          </div>
        )}
      </header>

      {/* Connect Wallet Modal */}
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
