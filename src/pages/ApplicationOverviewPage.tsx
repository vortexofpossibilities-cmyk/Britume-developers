import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function ApplicationOverviewPage(){return <><PageHeader eyebrow="APPLICATION DETAILS" title="Application overview" description="Review an application's information and activity."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Select an application from your workspace to see its supported details."/></section></>}
