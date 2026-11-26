const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'
export async function apiRequest<T>(path:string, init:RequestInit = {}):Promise<T>{
 const response=await fetch(`${API_BASE}${path}`,{...init,credentials:'include',headers:{'Content-Type':'application/json',...init.headers}})
 if(!response.ok) throw new Error(`API request failed (${response.status})`)
 return response.json() as Promise<T>
}
