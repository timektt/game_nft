import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = window.document.documentElement
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const current = saved || (preferDark ? 'dark' : 'light')

    root.classList.toggle('dark', current === 'dark')
    setTheme(current)
  }, [])

  return theme
}
