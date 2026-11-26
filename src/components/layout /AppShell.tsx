import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { useTheme } from '../../hooks/useTheme'
export function AppShell() {
 const {theme,setTheme}=useTheme()
 return <div className="app-shell"><Sidebar /><div className="main-column"><Topbar theme={theme} onToggleTheme={()=>setTheme(theme==='dark'?'light':'dark')} /><main className="page-container"><Outlet /></main></div></div>
}
