import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function NotificationsPage(){return <><PageHeader eyebrow="UPDATES" title="Notifications centre" description="Important activity from your apps and workspace."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="You're all caught up. Notifications will appear here as features are connected."/></section></>}
