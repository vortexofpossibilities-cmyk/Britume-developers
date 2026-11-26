import { CircleHelp } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { EmptyState } from '../components/ui/EmptyState'
export function OnboardingPage(){return <><PageHeader eyebrow="GETTING STARTED" title="Set up your workspace" description="A few details help tailor your developer workspace."/><section className="panel page-panel"><EmptyState Icon={CircleHelp} title="Workspace area ready" description="Onboarding choices are not saved yet. Profile and workspace persistence will be added in Phase 1."/></section></>}
