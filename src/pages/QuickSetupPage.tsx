import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'

type QuickAnswers = {
  appName: string
  appType: string
  purpose: string
  hasAccounts: string
  accountDeletion: string
  collectsData: string
  hasAds: string
  hasPayments: string
  audience: string
  hasSensitiveFeatures: string
  privacyPolicy: string
}

const initialAnswers: QuickAnswers = {
  appName: '', appType: 'App', purpose: '', hasAccounts: 'No', accountDeletion: 'Not applicable', collectsData: 'Not sure',
  hasAds: 'No', hasPayments: 'No', audience: 'General audience',
  hasSensitiveFeatures: 'No', privacyPolicy: '',
}

const storageKey = 'britume.quick-setup.answers'

export function QuickSetupPage() {
  const [answers, setAnswers] = useState<QuickAnswers>(initialAnswers)
  const [step, setStep] = useState(0)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) setAnswers({ ...initialAnswers, ...(JSON.parse(stored) as Partial<QuickAnswers>) })
    } catch { /* Start with a clean quick setup if saved data cannot be read. */ }
  }, [])

  function update<K extends keyof QuickAnswers>(key: K, value: QuickAnswers[K]) {
    setAnswers(current => ({ ...current, [key]: value }))
    setSaved(false)
  }

  function saveAndContinue() {
    localStorage.setItem(storageKey, JSON.stringify(answers))
    setSaved(true)
    setStep(current => Math.min(current + 1, 3))
  }

  const question = (label: string, value: string, options: string[], onChange: (next: string) => void) => (
    <div className="quick-question">
      <h3>{label}</h3>
      <div className="quick-options">
        {options.map(option => <button type="button" key={option} className={value === option ? 'quick-option selected' : 'quick-option'} onClick={() => onChange(option)}>{option}</button>)}
      </div>
    </div>
  )

  return <>
    <PageHeader eyebrow="QUICK GUIDED SETUP" title="Tell us about your app" description="A few short questions help BRITUME show the preparation steps that apply to your app." />
    <section className="quick-setup-card clay-card">
      <div className="quick-setup-top"><span><ClipboardCheck size={17}/> STEP {step + 1} OF 4</span><span>{Math.round(((step + 1) / 4) * 100)}%</span></div>
      <div className="quick-progress"><i style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
      {step === 0 && <div className="quick-step"><h2>Start with the basics</h2><p>What should we call your app, and what kind of product is it?</p>
        <label className="quick-field">App name<input value={answers.appName} onChange={event => update('appName', event.target.value)} placeholder="e.g. My brilliant app" /></label>
        {question('What are you building?', answers.appType, ['App', 'Game'], value => update('appType', value))}
        <label className="quick-field">What does it help people do?<textarea value={answers.purpose} onChange={event => update('purpose', event.target.value)} placeholder="Describe it in one or two sentences" rows={3} /></label>
      </div>}
      {step === 1 && <div className="quick-step"><h2>How does it work?</h2><p>These answers help identify account, data and monetisation tasks.</p>
        {question('Can users create an account or sign in?', answers.hasAccounts, ['Yes', 'No'], value => update('hasAccounts', value))}
        {answers.hasAccounts === 'Yes' && question('Can users request deletion of their account?', answers.accountDeletion, ['Yes', 'No', 'Not sure'], value => update('accountDeletion', value))}
        {question('Does the app collect or share personal data?', answers.collectsData, ['Yes', 'No', 'Not sure'], value => update('collectsData', value))}
        {question('Does the app show advertisements?', answers.hasAds, ['Yes', 'No'], value => update('hasAds', value))}
        {question('Does the app sell digital goods or offer subscriptions?', answers.hasPayments, ['Yes', 'No'], value => update('hasPayments', value))}
      </div>}
      {step === 2 && <div className="quick-step"><h2>Who is it for?</h2><p>Help us identify audience and sensitive-feature checks.</p>
        {question('Who is your intended audience?', answers.audience, ['Children', 'General audience', 'Adults'], value => update('audience', value))}
        {question('Does it include health, financial, government or other sensitive features?', answers.hasSensitiveFeatures, ['Yes', 'No', 'Not sure'], value => update('hasSensitiveFeatures', value))}
        <label className="quick-field">Privacy policy URL (if you have one)<input type="url" value={answers.privacyPolicy} onChange={event => update('privacyPolicy', event.target.value)} placeholder="https://example.com/privacy" /></label>
      </div>}
      {step === 3 && <div className="quick-step"><h2>Your quick setup summary</h2><p>Review your answers. BRITUME will use these to suggest relevant preparation tasks.</p>
        <dl className="quick-summary">{Object.entries({ 'App name': answers.appName || 'Not provided', 'Product type': answers.appType, 'Purpose': answers.purpose || 'Not provided', 'Account access': answers.hasAccounts, 'Account deletion': answers.hasAccounts === 'Yes' ? answers.accountDeletion : 'Not applicable', 'Data collection': answers.collectsData, 'Advertising': answers.hasAds, 'Payments': answers.hasPayments, 'Audience': answers.audience, 'Sensitive features': answers.hasSensitiveFeatures, 'Privacy policy': answers.privacyPolicy || 'Not provided' }).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="quick-policy-note"><CheckCircle2 size={17}/> These answers are a planning aid, not a compliance certification. You must verify your app's actual behaviour, SDKs and declarations against current Google Play policies.</p>
        {saved && <p className="quick-saved">Your answers have been saved on this device.</p>}
      </div>}
      <div className="quick-actions">
        <button className="outline-button" type="button" disabled={step === 0} onClick={() => setStep(current => Math.max(0, current - 1))}><ArrowLeft size={15}/> Back</button>
        {step < 3 ? <button className="primary-button" type="button" disabled={step === 0 && !answers.appName.trim()} onClick={saveAndContinue}>Save and continue <ArrowRight size={15}/></button> : <button className="primary-button" type="button" onClick={() => { localStorage.setItem(storageKey, JSON.stringify(answers)); setSaved(true) }}>Save answers <CheckCircle2 size={15}/></button>}
      </div>
    </section>
  </>
}
