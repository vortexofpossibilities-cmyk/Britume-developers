
import {
  LayoutDashboard,
  Package,
  BarChart3,
  Star,
  Bell,
  Users,
  Shield,
  Settings,
  HelpCircle,
  Rocket
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigation = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', path: '/', icon: LayoutDashboard },
      { label: 'Applications', path: '/applications', icon: Package },
      { label: 'Releases', path: '/releases', icon: Rocket },
      { label: 'Analytics', path: '/analytics', icon: BarChart3 },
      { label: 'Reviews', path: '/reviews', icon: Star },
      { label: 'Notifications', path: '/notifications', icon: Bell }
    ]
  },
  {
    title: 'Workspace',
    items: [
      { label: 'Team', path: '/teams', icon: Users },
      { label: 'Security', path: '/security', icon: Shield },
      { label: 'Settings', path: '/settings', icon: Settings },
      { label: 'Help & Support', path: '/help', icon: HelpCircle }
    ]
  }
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">B</div>
        <div>
          <strong>BRITUME</strong>
          <span>DEVELOPERS</span>
        </div>
      </div>

      <nav className="sidebar-navigation">
        {navigation.map((section) => (
          <div className="sidebar-section" key={section.title}>
            <p className="sidebar-section-title">{section.title}</p>

            {section.items.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `sidebar-link${isActive ? ' active' : ''}`
                  }
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>BRITUME DEVELOPERS</span>
        <small>Developer workspace</small>
      </div>
    </aside>
  )
}

export default Sidebar
