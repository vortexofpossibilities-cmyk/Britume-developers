import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { healthRouter } from './routes/health.routes.js'
export function createApp(){
 const app=express()
 app.use(helmet())
 app.use(cors({origin:process.env.APP_ORIGIN||'http://localhost:5173',credentials:true}))
 app.use(express.json({limit:'1mb'}))
 app.use('/api/health',healthRouter)
 app.use((_req,res)=>res.status(404).json({error:{code:'NOT_FOUND',message:'Route not found'}}))
 return app
}
