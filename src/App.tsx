
import { useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { pageRoutes } from './routes'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { VerifyEmailPage } from './pages/auth/VerifyEmailPage'
import { PlansPage } from './pages/PlansPage'
import { PaymentPage } from './pages/PaymentPage'
import { CreateApplicationPage } from './pages/CreateApplicationPage'
import { SetupTaskPage } from './pages/SetupTaskPage'
import { TestingPage } from './pages/TestingPage'
import { ProductionPage } from './pages/ProductionPage'
import { supabase, supabaseConfigured } from './lib/supabase'

function SetupTaskRoute() {
  const { taskId } = useParams()
  return <SetupTaskPage key={taskId} />
}

function ProtectedArea() {
  const location = useLocation()
  const [checking, setChecking] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (!supabase || !supabaseConfigured) {
      setAuthenticated(false)
      setChecking(false)
      return
    }

    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (active) {
        setAuthenticated(Boolean(data.session))
        setChecking(false)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session: Session | null) => {
        if (active) {
          setAuthenticated(Boolean(session))
          setChecking(false)
        }
      },
    )

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [])

  if (checking) {
    return (
      <div className="auth-loading" role="status">
        Checking your secure session…
      </div>
    )
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return <AppShell />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />

      <Route element={<ProtectedArea />}>
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/applications/new"
          element={<CreateApplicationPage />}
        />
        <Route
          path="/setup/:taskId"
          element={<SetupTaskRoute />}
        />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/production" element={<ProductionPage />} />

        {pageRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<Component />}
          />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
