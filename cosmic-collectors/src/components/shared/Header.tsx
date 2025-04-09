'use client'

import { FaRocket, FaWallet, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ['Home', 'Marketplace', 'Leaderboard', 'My Collection', 'About']

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <FaRocket className="text-white" />
          </div>
          <h1 className="text-2xl font-bold gradient-text font-orbitron">
            Cosmic Collectors
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <button className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition items-center">
            <FaWallet className="mr-2" />
            <span>Connect Wallet</span>
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
            <a
              key={item}
              href="#"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <FaWallet className="mr-2" />
            <span>Connect Wallet</span>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
