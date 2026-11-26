import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function ApplicationsPage(){return <><PageHeader eyebrow="APPLICATION MANAGEMENT" title="Applications" description="Manage the apps in your developer workspace."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Your applications will appear here after you add them or connect an authorised Google Play account."/></section></>}
