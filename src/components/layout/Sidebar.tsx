import { NavLink, useNavigate } from 'react-router-dom'
import { Activity, BarChart3, Bell, BookOpen, Boxes, CreditCard, FlaskConical, Globe2, LayoutDashboard, Languages, MessageSquare, Package, Rocket, Settings, Shield, ShieldCheck, Users, Wallet, SlidersHorizontal, CalendarClock, Bug, Share2 } from 'lucide-react'
const groups = [
  { label: 'WORKSPACE', links: [
    {to:'/',label:'Dashboard',Icon:LayoutDashboard,end:true},
    {to:'/analytics',label:'Statistics',Icon:BarChart3},
    {to:'/releases',label:'Publishing overview',Icon:Globe2},
  ]},
  { label: 'PROTECTED WITH BRITUME', links: [
    {to:'/security',label:'App integrity & security',Icon:ShieldCheck},
    {to:'/settings',label:'Advanced settings',Icon:SlidersHorizontal},
  ]},
  { label: 'TEST AND RELEASE', links: [
    {to:'/releases',label:'Latest releases & bundles',Icon:Package},
    {to:'/production',label:'Production',Icon:Rocket},
    {to:'/testing',label:'Testing tracks',Icon:FlaskConical},
    {to:'/testing?track=sharing',label:'Internal app sharing',Icon:Share2},
    {to:'/applications',label:'Pre-registration',Icon:CalendarClock},
  ]},
  { label: 'MONITOR AND IMPROVE', links: [
    {to:'/analytics',label:'Performance monitoring',Icon:Activity},
    {to:'/analytics',label:'Crashes and ANRs',Icon:Bug},
    {to:'/reviews',label:'Ratings and reviews',Icon:MessageSquare},
  ]},
  { label: 'GROW USERS', links: [
    {to:'/applications',label:'Store listing',Icon:Boxes},
    {to:'/applications',label:'Translations & experiments',Icon:Languages},
    {to:'/analytics',label:'Audience and acquisition',Icon:BarChart3},
  ]},
  { label: 'MONETISE', links: [
    {to:'/analytics',label:'Revenue analytics',Icon:Wallet},
    {to:'/plans',label:'Subscriptions and purchases',Icon:CreditCard},
  ]},
  { label: 'DEVELOPER ACCOUNT', links: [
    {to:'/teams',label:'Team and permissions',Icon:Users},
    {to:'/security',label:'Account security',Icon:Shield},
    {to:'/settings',label:'Account settings',Icon:Settings},
    {to:'/notifications',label:'Notifications',Icon:Bell},
    {to:'/help',label:'Help and support',Icon:BookOpen},
  ]},
]
export function Sidebar(){const navigate=useNavigate();return <aside className="sidebar"><div className="brand"><div className="brand-mark">B</div><div><strong>BRITUME</strong><span>DEVELOPERS</span></div></div><button className="workspace-switch" onClick={()=>navigate('/')}><i className="workspace-dot"/> Developer workspace <span className="chevron">⌄</span></button>{groups.map(group=><div className="sidebar-group" key={group.label}><div className="nav-label">{group.label}</div><nav>{group.links.map(({to,label,Icon,end})=><NavLink key={`${group.label}-${label}`} to={to} end={end} className={({isActive})=>`nav-link${isActive?' active':''}`}><Icon size={17}/><span>{label}</span></NavLink>)}</nav></div>)}<div className="sidebar-bottom"><div className="plan-card"><span className="plan-kicker">YOUR PLAN</span><strong>Free workspace</strong><small>Explore available plans</small><button className="outline-button" onClick={()=>navigate('/plans')}>View plans</button></div><div className="profile-mini"><div className="avatar">D</div><div><strong>Developer</strong><small>Workspace account</small></div></div></div></aside>}
