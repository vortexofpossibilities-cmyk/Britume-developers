import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageHeader } from '../../components/ui/PageHeader'
import { supabase, supabaseConfigured } from '../../lib/supabase'

export function RegisterPage() {
  const navigate = useNavigate()
  const [name,setName] = useState(''); const [email,setEmail] = useState(''); const [password,setPassword] = useState(''); const [country,setCountry] = useState('')
  const [accountType,setAccountType] = useState('individual'); const [busy,setBusy] = useState(false); const [error,setError] = useState('')
  async function submit(e: FormEvent) {
    e.preventDefault(); if (!supabase) return
    setBusy(true); setError('')
    const {data,error} = await supabase.auth.signUp({email,password,options:{emailRedirectTo:`${window.location.origin}/`,data:{full_name:name,country,account_type:accountType}}})
    setBusy(false)
    if(error){setError(error.message);return}
    if(data.session) navigate('/')
    else navigate(`/verify-email?email=${encodeURIComponent(email)}`)
  }
  return <div className="auth-page"><PageHeader eyebrow="CREATE YOUR ACCOUNT" title="Join BRITUME DEVELOPERS" description="Create your secure developer workspace."/><form className="panel auth-panel" onSubmit={submit}>
    {!supabaseConfigured && <p className="muted">Supabase settings are missing. Check your .env.local file.</p>}
    <label className="field-label">Full legal name<input required value={name} onChange={e=>setName(e.target.value)} autoComplete="name"/></label>
    <label className="field-label">Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email"/></label>
    <label className="field-label">Password<input required minLength={8} type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="new-password"/></label>
    <label className="field-label">Country<input required value={country} onChange={e=>setCountry(e.target.value)} placeholder="e.g. Botswana"/></label>
    <label className="field-label">Account type<select value={accountType} onChange={e=>setAccountType(e.target.value)}><option value="individual">Individual</option><option value="company">Company</option></select></label>
    {error && <p role="alert" className="form-error">{error}</p>}
    <button className="primary-button full" disabled={busy||!supabaseConfigured}>{busy?'Creating account…':'Create account'}</button>
    <p className="muted">Already registered? <Link to="/login">Sign in</Link></p>
  </form></div>
}
