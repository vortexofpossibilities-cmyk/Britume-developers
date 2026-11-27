import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BadgeCheck, BookOpen, Boxes, CheckCircle2, Circle, ClipboardCheck, FileCheck2, FlaskConical, Globe2, LockKeyhole, Plus, Rocket, ShieldCheck, Smartphone, Users } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'

const setupTasks = [
  { id: 'privacy-policy', title: 'Set privacy policy', description: 'Add the public URL for your privacy policy.', icon: ShieldCheck },
  { id: 'sign-in-details', title: 'Sign-in details', description: 'Explain how reviewers can access your app.', icon: LockKeyhole },
  { id: 'ads', title: 'Ads', description: 'Declare whether your app contains advertising.', icon: Globe2 },
  { id: 'content-rating', title: 'Content rating', description: 'Answer questions about app content.', icon: ClipboardCheck },
  { id: 'target-audience', title: 'Target audience', description: 'Choose the age groups your app is designed for.', icon: Users },
  { id: 'data-safety', title: 'Data safety', description: 'Explain data collection, sharing and protection.', icon: ShieldCheck },
  { id: 'government-apps', title: 'Government apps', description: 'Declare government affiliation where applicable.', icon: BadgeCheck },
  { id: 'financial-features', title: 'Financial features', description: 'Declare financial products and services.', icon: FileCheck2 },
  { id: 'health', title: 'Health', description: 'Declare health-related features and content.', icon: CheckCircle2 },
  { id: 'app-category', title: 'App category and contact details', description: 'Choose a category and provide contact information.', icon: Boxes },
  { id: 'store-listing', title: 'Set up your Store Listing', description: 'Add your app name, descriptions, icon and screenshots.', icon: Smartphone },
]

function StageCard({ number, title, description, icon: Icon, status, action, onClick }: { number: string; title: string; description: string; icon: typeof FlaskConical; status: string; action: string; onClick: () => void }) {
  return <button className="publish-stage clay-card" onClick={onClick} type="button"><span className="stage-icon"><Icon size={21} /></span><span className="stage-copy"><small>STAGE {number}</small><strong>{title}</strong><span>{description}</span><em>{status}</em></span><span className="stage-action">{action}<ArrowRight size={16}/></span></button>
}

export function DashboardPage() {
  const navigate = useNavigate()
  const [savedSections, setSavedSections] = useState<string[]>([])
  const [showAllTasks, setShowAllTasks] = useState(false)
  useEffect(() => { try { const answers = JSON.parse(localStorage.getItem('britume.setup.answers') || '{}') as Record<string,Record<string,string>>; setSavedSections(Object.keys(answers).filter(key => Object.values(answers[key] || {}).some(value => value.trim().length > 0))) } catch { setSavedSections([]) } }, [])
  const progress = Math.round((savedSections.length / setupTasks.length) * 100)
  return <>
    <PageHeader eyebrow="PUBLISHING DASHBOARD" title="Get ready to publish your app" description="Complete your app setup, test your build and prepare for a production release." action={<button className="primary-button" onClick={() => navigate('/applications/new')}><Plus size={16}/> Create application</button>} />

    <section className="publish-intro clay-card">
      <div><span className="eyebrow">YOUR PUBLISHING JOURNEY</span><h2>Everything you need, one step at a time.</h2><p>Follow the guided stages below. Your progress is saved as you complete each section.</p><div className="publish-progress-label"><span>Setup progress</span><strong>{savedSections.length} of 11 sections saved</strong></div><div className="publish-progress"><i style={{ width: `${progress}%` }} /></div></div>
      <div className="publish-intro-mark"><Rocket size={38}/></div>
    </section>

    <div className="publish-section-title"><div><h2>Get ready to publish</h2><p>Move through each stage in order. Optional tools are clearly marked.</p></div><span className="neutral-chip">Guided workflow</span></div>
    <div className="publish-stage-list">
      <StageCard number="01" title="Internal testing" description="Quickly share early builds with your own device or trusted testers." icon={Smartphone} status="OPTIONAL · EARLY QUALITY CHECKS" action="Set up internal testing" onClick={() => navigate('/testing?track=internal')} />
      <StageCard number="02" title="Quick app setup" description="Answer a few short questions so BRITUME can tailor your preparation checklist." icon={ClipboardCheck} status="PERSONALISED · ABOUT 2 MINUTES" action="Start quick setup" onClick={() => navigate('/quick-setup')} />
      <StageCard number="03" title="Closed testing" description="Choose countries, invite testers, distribute a release and collect feedback." icon={FlaskConical} status="REQUIRED FOR PRODUCTION READINESS" action="Set up closed testing" onClick={() => navigate('/testing?track=closed')} />
      <StageCard number="04" title="Production access" description="Review your testing results and prepare your production access application." icon={Rocket} status="LOCKED UNTIL REQUIREMENTS ARE MET" action="View production requirements" onClick={() => navigate('/production')} />
    </div>

    <div className="publish-columns">
      <section className="clay-card publish-checklist"><div className="publish-section-title compact"><div><h2>Finish setting up your app</h2><p>App content and store presentation</p></div><span className="neutral-chip">{savedSections.length} / 11 saved</span></div>
        {setupTasks.slice(0, showAllTasks ? setupTasks.length : 5).map(task => { const Icon = task.icon; return <button className="setup-task-row" key={task.id} onClick={() => navigate(`/setup/${task.id}`)}><span className="setup-task-icon"><Icon size={17}/></span><span className="setup-task-copy"><strong>{task.title}</strong><small>{task.description}</small></span><span className="task-pending">{savedSections.includes(task.id) ? <><CheckCircle2 size={15}/> Saved</> : <><Circle size={15}/> Not started</>}</span><ArrowRight size={16} className="task-chevron"/></button> })}
        <button type="button" className="show-more-button" onClick={() => setShowAllTasks(value => !value)}>{showAllTasks ? 'Hide extra sections' : `See more (${setupTasks.length - 5} more)`} <ArrowRight size={15}/></button>
      </section>
      <aside className="clay-card production-card"><span className="production-icon"><LockKeyhole size={22}/></span><span className="eyebrow">PRODUCTION READINESS</span><h2>Build confidence before launch.</h2><p>Track the closed-testing requirements shown in your Google Play Console and prepare answers about your testing experience.</p><div className="requirement-metric"><strong>Account-specific</strong><span>testing eligibility</span></div><div className="requirement-metric"><strong>Check Play Console</strong><span>for your current tester and testing-period requirements</span></div><div className="production-note">Testing requirements can depend on your developer account type and status. BRITUME does not assume one tester count or testing period applies to every developer.</div><button className="outline-button" onClick={() => navigate('/production')}>View production checklist <ArrowRight size={15}/></button></aside>
    </div>
    <section className="clay-card learn-panel"><div className="learn-icon"><BookOpen size={20}/></div><div><strong>Need help preparing your release?</strong><p>Explore release guidance, testing explanations and policy checklists in the BRITUME Help Centre.</p></div><button className="outline-button" onClick={() => navigate('/help')}>Open help centre <ArrowRight size={15}/></button></section>
    <p className="dashboard-disclaimer">BRITUME helps organise your publishing workflow. It does not guarantee Google Play approval or replace Google Play Console declarations and review.</p>
  </>
}
