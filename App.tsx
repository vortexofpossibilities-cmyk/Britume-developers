import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { pageRoutes } from './routes'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { VerifyEmailPage } from './pages/auth/VerifyEmailPage'
import { PlansPage } from './pages/PlansPage'
import { PaymentPage } from './pages/PaymentPage'
import { CreateApplicationPage } from './pages/CreateApplicationPage'
export default function App() {
  return <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/verify-email" element={<VerifyEmailPage />} />
    <Route path="/plans" element={<PlansPage />} />
    <Route path="/payment" element={<PaymentPage />} />
    <Route element={<AppShell />}>
      <Route index element={<DashboardPage />} />
      <Route path="applications/new" element={<CreateApplicationPage />} />
      {pageRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />} />)}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
}
