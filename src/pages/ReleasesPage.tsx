import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function ReleasesPage(){return <><PageHeader eyebrow="DELIVERY" title="Releases" description="Prepare and track your application releases."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Release workflows will be enabled after the Google Play integration and upload pipeline are configured."/></section></>}
