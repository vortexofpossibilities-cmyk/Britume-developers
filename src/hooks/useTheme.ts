import { useEffect, useState } from 'react'
import type { Theme } from '../types'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  useEffect(() => {
    document.documentElement.dataset.theme = 'light'
    localStorage.setItem('britume-theme', 'light')
  }, [])
  return { theme, setTheme }
}
