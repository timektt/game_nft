'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'

type Web3ContextType = {
  account: string | null
  connectWallet: () => Promise<void>
  isConnected: boolean
  signMessage: (message: string) => Promise<string | null>
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

type Web3ProviderProps = {
  children: React.ReactNode
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [account, setAccount] = useState<string | null>(null)

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum)
        const accounts = await provider.send('eth_requestAccounts', [])
        setAccount(accounts[0])
      } catch (err) {
        console.error('Failed to connect wallet:', err)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  const signMessage = async (message: string): Promise<string | null> => {
    const eth = (window as any).ethereum
    if (!eth || !account) return null
  
    try {
      const provider = new ethers.BrowserProvider(eth)
      const signer = await provider.getSigner()
      const signature = await signer.signMessage(message)
      return signature
    } catch (err) {
      console.error('Failed to sign message:', err)
      return null
    }
  }
  

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null)
      })
    }
  }, [])

  return (
    <Web3Context.Provider
      value={{
        account,
        connectWallet,
        isConnected: !!account,
        signMessage, // ✅ เพิ่มตรงนี้
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const useWallet = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error('useWallet must be used within Web3Provider')
  }
  return context
}
