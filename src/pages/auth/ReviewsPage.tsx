import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function ReviewsPage(){return <><PageHeader eyebrow="CUSTOMER FEEDBACK" title="Ratings & reviews" description="Read feedback and manage supported review replies."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Connect an eligible Google Play account to retrieve available reviews."/></section></>}
