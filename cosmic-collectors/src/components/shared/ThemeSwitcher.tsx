'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) return null // ✅ กัน hydration error

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="text-xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 transition"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
    </button>
  )
}

export default ThemeSwitcher
