
import {
  Activity,
  AppWindow,
  ArrowUpRight,
  Download,
  Plus,
  Star
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { StatCard } from '../components/ui/StatCard'

const setupTasks = [
  {
    title: 'Complete your developer profile',
    description: 'Add the details for your workspace.',
    path: '/onboarding'
  },
  {
    title: 'Connect a Google Play account',
    description: 'Use official Google authorisation.',
    path: '/settings'
  },
  {
    title: 'Import your applications',
    description: 'Bring in supported app information.',
    path: '/applications'
  },
  {
    title: 'Explore your analytics',
    description: 'View data when available.',
    path: '/analytics'
  }
]

export function DashboardPage() {
  const navigate = useNavigate()

  return (
    <>
      <PageHeader
        eyebrow="OVERVIEW"
        title="Good to see you."
        description="Your developer workspace at a glance."
        action={
          <button
            className="primary-button"
            onClick={() => navigate('/applications')}
          >
            <Plus size={16} />
            Manage applications
          </button>
        }
      />

      <div className="welcome-banner">
        <div>
          <span className="banner-label">YOUR NEXT STEP</span>
          <h2>Connect your developer workflow.</h2>
          <p>
            Set up your workspace and connect supported services when
            you're ready.
          </p>
          <button
            className="banner-button"
            onClick={() => navigate('/onboarding')}
          >
            Continue setup <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="banner-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <Activity size={32} />
          </div>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Workspace overview</h2>
          <p>Real metrics will appear when data sources are connected.</p>
        </div>
        <span className="live-pill">
          <i /> Workspace ready
        </span>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Applications"
          value="—"
          detail="Connect Google Play to view apps"
          Icon={AppWindow}
        />
        <StatCard
          label="Downloads"
          value="—"
          detail="No reporting data connected"
          Icon={Download}
        />
        <StatCard
          label="Average rating"
          value="—"
          detail="No ratings data connected"
          Icon={Star}
        />
        <StatCard
          label="Recent activity"
          value="—"
          detail="Activity will appear here"
          Icon={Activity}
        />
      </div>

      <div className="content-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h3>Getting started</h3>
              <p>A few steps to prepare your workspace.</p>
            </div>
            <span className="muted-count">0 of 4</span>
          </div>

          {setupTasks.map((task, index) => (
            <div className="task-row" key={task.title}>
              <span className="task-number">
                0{index + 1}
              </span>

              <div>
                <strong>{task.title}</strong>
                <small>{task.description}</small>
              </div>

              <button
                className="subtle-arrow"
                aria-label={`Open ${task.title}`}
                onClick={() => navigate(task.path)}
              >
                <ArrowUpRight size={17} />
              </button>
            </div>
          ))}
        </section>

        <section className="panel connection-panel">
          <div className="panel-heading">
            <div>
              <h3>Service connections</h3>
              <p>Manage authorised integrations.</p>
            </div>
          </div>

          <div className="connection-logo">G</div>
          <h4>Google Play</h4>

          <p className="connection-copy">
            Not connected yet. You can connect an account using
            Google's official authorisation flow once configured.
          </p>

          <span className="status-chip">Not connected</span>

          <button
            className="outline-button"
            onClick={() => navigate('/settings')}
          >
            Connection settings
          </button>
        </section>
      </div>

      <div className="footnote">
        Metrics are intentionally blank until connected data is
        available. BRITUME never invents developer statistics.
      </div>
    </>
  )
}
