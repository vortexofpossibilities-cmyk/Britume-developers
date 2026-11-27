import { Bell, CircleHelp, Home, ChevronLeft } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/applications', label: 'Applications' },
  { to: '/releases', label: 'Releases' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/teams', label: 'Team' },
]

export function Topbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="topbar topbar-no-sidebar">
      <div className="topbar-brand">
        <span className="brand-mark">B</span>
        <span><strong>BRITUME</strong><small>DEVELOPER WORKSPACE</small></span>
      </div>
      <nav className="top-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="top-actions">
        <button className="icon-button back-button" aria-label="Go back" onClick={() => navigate(-1)}><ChevronLeft size={18} /></button>
        <button className="icon-button home-button" aria-label="Home" onClick={() => navigate('/')}><Home size={17} /></button>
        <button className="icon-button" aria-label="Help" onClick={() => navigate('/help')}><CircleHelp size={18} /></button>
        <button className="icon-button" aria-label="Notifications" onClick={() => navigate('/notifications')}><Bell size={18} /></button>
      </div>
      <span className="topbar-current-path">{location.pathname === '/' ? 'Dashboard' : location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')}</span>
    </header>
  )
}
