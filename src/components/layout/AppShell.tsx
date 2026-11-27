import { Outlet } from 'react-router-dom'
import { Topbar } from './Topbar'

export function AppShell() {
  return (
    <div className="app-shell app-shell-no-sidebar">
      <div className="main-column">
        <Topbar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
