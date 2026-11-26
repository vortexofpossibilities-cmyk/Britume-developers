import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { supabase } from '../../lib/supabase'
export function VerifyEmailPage(){
 const [params]=useSearchParams(); const navigate=useNavigate(); const [email,setEmail]=useState(params.get('email')||''); const [token,setToken]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false)
 async function submit(e:FormEvent){e.preventDefault();if(!supabase)return;setBusy(true);setError('');const {error}=await supabase.auth.verifyOtp({email,token,type:'signup'});setBusy(false);if(error)setError(error.message);else navigate('/')}
 return <div className="auth-page"><PageHeader eyebrow="ACCOUNT VERIFICATION" title="Check your inbox" description="Enter the six-digit code sent to your email address."/><form className="panel auth-panel" onSubmit={submit}><Mail size={28}/><label className="field-label">Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label className="field-label">Verification code<input required inputMode="numeric" maxLength={6} pattern="[0-9]{6}" value={token} onChange={e=>setToken(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="000000"/></label>{error&&<p role="alert" className="form-error">{error}</p>}<button className="primary-button full" disabled={busy||!supabase}>{busy?'Verifying…':'Verify email'}</button><p className="muted"><Link to="/register">Back to registration</Link></p></form></div>
}
