import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function SettingsPage(){return <><PageHeader eyebrow="PREFERENCES" title="Developer settings" description="Manage your profile, preferences and connections."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Settings will become editable as account services are implemented."/></section></>}
