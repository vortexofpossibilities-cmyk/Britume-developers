import { useEffect, useState } from 'react'
import { Smartphone, Trash2, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { supabase } from '../lib/supabase'
type AppRow={id:string;name:string;package_name:string;description:string|null;created_at:string}
export function ApplicationsPage(){
 const navigate=useNavigate()
 const [apps,setApps]=useState<AppRow[]>([])
 const [message,setMessage]=useState('')
 async function load(){
  if(!supabase){const local=JSON.parse(localStorage.getItem('britume-local-apps')||'[]');setApps(local.map((a: any)=>({id:a.id,name:a.name,package_name:a.packageName,description:a.fullDescription||a.shortDescription||null,created_at:a.created_at})));return}
  const {data,error}=await supabase.from('applications').select('id,name,package_name,description,created_at').order('created_at',{ascending:false})
  if(error)setMessage(error.message);else setApps((data||[]) as AppRow[])
 }
 useEffect(()=>{void load()},[])
 async function remove(id:string){
  if(!window.confirm('Delete this application record?'))return
  if(!supabase){const local=JSON.parse(localStorage.getItem('britume-local-apps')||'[]').filter((a:any)=>a.id!==id);localStorage.setItem('britume-local-apps',JSON.stringify(local));await load();return}
  const {error}=await supabase.from('applications').delete().eq('id',id);if(error)setMessage(error.message);else await load()
 }
 return <><PageHeader eyebrow="APPLICATION MANAGEMENT" title="Applications" description="Manage application records saved in your private developer workspace." action={<button className="primary-button" onClick={()=>navigate('/applications/new')}><Plus size={15}/> Create application</button>}/><section className="panel page-panel"><div className="application-form"><h3>Start a new application</h3><p className="muted">Use the guided seven-stage setup to enter your package, store listing, content, testing and release details.</p><button className="primary-button" onClick={()=>navigate('/applications/new')}><Plus size={15}/> Start guided setup</button></div>{message&&<p className="form-error" role="alert">{message}</p>}<div className="application-list"><h3>Your applications ({apps.length})</h3>{apps.length===0?<p className="muted">No application records yet. Create your first app to get started.</p>:apps.map(app=><article className="application-row" key={app.id}><Smartphone size={20}/><div className="application-copy"><strong>{app.name}</strong><small>{app.package_name}</small>{app.description&&<p>{app.description}</p>}</div><button className="icon-button" aria-label={`Delete ${app.name}`} onClick={()=>void remove(app.id)}><Trash2 size={17}/></button></article>)}</div></section></>
}
