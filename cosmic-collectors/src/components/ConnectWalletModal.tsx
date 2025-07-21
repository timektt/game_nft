'use client'

import { useWallet } from '@/context/Web3Context'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const ConnectWalletModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { connectWallet, isConnected, account } = useWallet()

  if (!isOpen) return null

  const isMetaMaskInstalled = typeof window !== 'undefined' && (window as any).ethereum

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wallet-login-title"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 to-purple-900 border border-purple-600 rounded-2xl p-4 w-[90%] max-w-xs shadow-xl shadow-purple-800/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-sm"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2
          id="wallet-login-title"
          className="text-lg font-bold mb-5 text-white font-orbitron text-center"
        >
          Login with Wallet
        </h2>

        {/* Content */}
        {!isMetaMaskInstalled ? (
          <div className="text-center space-y-4">
            <p className="text-red-400 text-sm">MetaMask not detected</p>
            <Link
              href="https://metamask.io/download/"
              target="_blank"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform text-sm"
            >
              Install MetaMask
            </Link>
          </div>
        ) : !isConnected ? (
          <button
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2.5 px-4 rounded-full font-semibold hover:opacity-90 transition-all text-sm"
            onClick={async () => {
              try {
                await connectWallet()
                onClose()
              } catch (error) {
                console.error('Failed to login:', error)
              }
            }}
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/metamask-logo.png"
                alt="MetaMask"
                width={18}
                height={18}
              />
            </div>
            Login with MetaMask
          </button>
        ) : (
          <div className="text-center text-green-400 text-sm">
            Logged in as:{' '}
            <span className="font-mono text-white">
              {account?.slice(0, 6)}...{account?.slice(-4)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConnectWalletModal
