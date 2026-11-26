import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { ApplicationWizard } from '../components/applications/ApplicationWizard'
export function CreateApplicationPage(){const nav=useNavigate();return <><PageHeader eyebrow="GUIDED APP SETUP" title="Create an application" description="Complete each stage in order. You can go back and review your answers." action={<button className="outline-button" onClick={()=>nav('/applications')}>Cancel</button>}/><ApplicationWizard/></>}
