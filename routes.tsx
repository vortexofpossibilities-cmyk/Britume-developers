import type { ComponentType } from 'react'
import { OnboardingPage } from './pages/OnboardingPage'
import { ApplicationsPage } from './pages/ApplicationsPage'
import { ApplicationOverviewPage } from './pages/ApplicationOverviewPage'
import { ReleasesPage } from './pages/ReleasesPage'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { TeamsPage } from './pages/TeamsPage'
import { SecurityPage } from './pages/SecurityPage'
import { SettingsPage } from './pages/SettingsPage'
import { HelpSupportPage } from './pages/HelpSupportPage'
export const pageRoutes: { path: string; Component: ComponentType }[] = [
 {path:'onboarding',Component:OnboardingPage},
 {path:'applications',Component:ApplicationsPage},{path:'applications/:appId',Component:ApplicationOverviewPage},
 {path:'releases',Component:ReleasesPage},{path:'analytics',Component:AnalyticsPage},{path:'reviews',Component:ReviewsPage},
 {path:'notifications',Component:NotificationsPage},{path:'teams',Component:TeamsPage},{path:'security',Component:SecurityPage},
 {path:'settings',Component:SettingsPage},{path:'help',Component:HelpSupportPage},
]
