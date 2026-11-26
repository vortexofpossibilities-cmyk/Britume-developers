import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageHeader } from '../../components/ui/PageHeader'
import { supabase, supabaseConfigured } from '../../lib/supabase'
export function LoginPage(){
 const navigate=useNavigate();const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [error,setError]=useState('');const [busy,setBusy]=useState(false)
 async function submit(e:FormEvent){e.preventDefault();if(!supabase)return;setBusy(true);setError('');const {error}=await supabase.auth.signInWithPassword({email,password});setBusy(false);if(error)setError(error.message);else navigate('/')}
 return <div className="auth-page"><PageHeader eyebrow="WELCOME BACK" title="Sign in to BRITUME" description="Access your developer workspace securely."/><form className="panel auth-panel" onSubmit={submit}>{!supabaseConfigured && <p role="alert" className="form-error">Secure sign-in is not configured yet. Add the Supabase environment settings before users can access BRITUME.</p>}<label className="field-label">Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email"/></label><label className="field-label">Password<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password"/></label>{error&&<p role="alert" className="form-error">{error}</p>}<button className="primary-button full" disabled={busy||!supabase}>{busy?'Signing in…':'Sign in'}</button><p className="muted">New here? <Link to="/register">Create an account</Link></p></form></div>
}
