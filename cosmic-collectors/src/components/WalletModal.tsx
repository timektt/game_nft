'use client'

import { FaEthereum, FaWallet, FaBitcoin, FaGhost, FaTimes } from 'react-icons/fa'

type WalletModalProps = {
  isOpen: boolean
  onClose: () => void
  onConnect: () => void
}

const WalletModal = ({ isOpen, onClose, onConnect }: WalletModalProps) => {
  if (!isOpen) return null

  const wallets = [
    { name: 'MetaMask', icon: <FaEthereum className="text-2xl" /> },
    { name: 'WalletConnect', icon: <FaWallet className="text-2xl" /> },
    { name: 'Coinbase Wallet', icon: <FaBitcoin className="text-2xl" /> },
    { name: 'Phantom', icon: <FaGhost className="text-2xl" /> },
  ]

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl max-w-md w-full p-8 card-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Connect Wallet</h3>
          <button onClick={onClose} aria-label="Close modal" className="text-gray-400 hover:text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="space-y-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={onConnect}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-xl transition flex items-center justify-between"
            >
              <span>{wallet.name}</span>
              {wallet.icon}
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-6">
          By connecting a wallet, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default WalletModal
