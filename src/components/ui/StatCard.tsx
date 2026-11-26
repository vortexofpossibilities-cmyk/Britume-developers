import type { LucideIcon } from 'lucide-react'
export function StatCard({label,value,detail,Icon}:{label:string;value:string;detail:string;Icon:LucideIcon}){return <section className="stat-card"><div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={18}/></span></div><strong>{value}</strong><small>{detail}</small></section>}
