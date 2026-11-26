import { NavLink, useNavigate } from 'react-router-dom'
import { AppWindow, BarChart3, Bell, BookOpen, LayoutDashboard, MessageSquare, Package, Settings, Shield, Users } from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', Icon: LayoutDashboard, end: true },
  { to: '/applications', label: 'Applications', Icon: AppWindow },
  { to: '/releases', label: 'Releases', Icon: Package },
  { to: '/analytics', label: 'Analytics', Icon: BarChart3 },
  { to: '/reviews', label: 'Ratings & reviews', Icon: MessageSquare },
  { to: '/notifications', label: 'Notifications', Icon: Bell },
  { to: '/teams', label: 'Team', Icon: Users },
  { to: '/security', label: 'Security', Icon: Shield },
  { to: '/settings', label: 'Settings', Icon: Settings },
  { to: '/help', label: 'Help & support', Icon: BookOpen },
]

export function Sidebar() {
  const navigate = useNavigate()
  return (
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">B</div><div><strong>BRITUME</strong><span>DEVELOPERS</span></div></div>
      <button className="workspace-switch" onClick={() => navigate('/')}><i className="workspace-dot" /> Developer workspace <span className="chevron">⌄</span></button>
      <div className="nav-label">WORKSPACE</div>
      <nav>{links.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          <Icon size={17} /><span>{label}</span>
        </NavLink>
      ))}</nav>
      <div className="sidebar-bottom">
        <div className="plan-card"><span className="plan-kicker">YOUR PLAN</span><strong>Free workspace</strong><small>Explore available plans</small><button className="outline-button" onClick={() => navigate('/plans')}>View plans</button></div>
        <div className="profile-mini"><div className="avatar">D</div><div><strong>Developer</strong><small>Workspace account</small></div></div>
      </div>
    </aside>
  )
}
