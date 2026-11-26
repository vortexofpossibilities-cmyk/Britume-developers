import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function SecurityPage(){return <><PageHeader eyebrow="PROTECTION" title="Security & account protection" description="Review account security and connected services."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Security controls will be enabled as authentication and session management are implemented. This page is not a security audit."/></section></>}
