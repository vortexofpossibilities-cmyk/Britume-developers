import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { pageRoutes } from './routes'
export default function App() {
  return <Routes><Route element={<AppShell />}><Route index element={<DashboardPage />} />{pageRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />} />)}<Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>
}
