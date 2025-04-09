'use client'

import { FaWallet, FaCheckCircle } from 'react-icons/fa'

type Props = {
  onClick: () => void
  isConnected: boolean
}

const FloatingWalletBtn = ({ onClick, isConnected }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      <button
        onClick={onClick}
        aria-label={isConnected ? 'Wallet Connected' : 'Connect Wallet'}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition duration-300
          ${
            isConnected
              ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
              : 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
          }`}
      >
        {isConnected ? (
          <FaCheckCircle className="text-xl text-white animate-pulse" />
        ) : (
          <FaWallet className="text-xl text-white" />
        )}
      </button>
    </div>
  )
}

export default FloatingWalletBtn
