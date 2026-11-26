export type Theme = 'light' | 'dark'
export type AppStatus = 'Published' | 'Draft' | 'Unavailable'
export interface DeveloperApplication { id: string; name: string; packageName: string; status: AppStatus; rating?: number; downloads?: number }
