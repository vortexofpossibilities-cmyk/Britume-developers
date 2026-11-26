import { useEffect, useState } from 'react'
import type { Theme } from '../types'
export function useTheme() {
 const [theme,setTheme] = useState<Theme>(() => (localStorage.getItem('britume-theme') as Theme) || 'dark')
 useEffect(() => { document.documentElement.dataset.theme=theme; localStorage.setItem('britume-theme',theme) },[theme])
 return {theme,setTheme}
}
