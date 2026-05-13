import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import config from './config/env.js'
import routes from './routes/index.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: config.frontendUrl, credentials: true }))
app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/v1', routes)

app.use(errorHandler)

export default app
