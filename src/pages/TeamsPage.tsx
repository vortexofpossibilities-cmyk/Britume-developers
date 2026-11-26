import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function TeamsPage(){return <><PageHeader eyebrow="COLLABORATION" title="Teams & workspaces" description="Manage members, roles and workspace access."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Your personal workspace is ready. Team invitations and role management are coming as the access-control service is implemented."/></section></>}
