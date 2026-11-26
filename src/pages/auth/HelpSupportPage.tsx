import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function HelpSupportPage(){return <><PageHeader eyebrow="WE'RE HERE TO HELP" title="Help & support" description="Find guidance for using BRITUME DEVELOPERS."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Help articles and support ticket submission will be added as the platform grows."/></section></>}
