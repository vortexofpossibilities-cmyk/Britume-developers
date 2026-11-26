import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function AnalyticsPage(){return <><PageHeader eyebrow="INSIGHTS" title="Analytics & statistics" description="Understand application performance with supported reporting data."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="No analytics source is connected. Metrics will appear here when authorised reporting data becomes available."/></section></>}
