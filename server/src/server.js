import config from './config/env.js'
import logger from './utils/logger.js'
import connectDB from './config/db.js'
import app from './app.js'

async function start() {
  await connectDB()
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`)
  })
}

start().catch((err) => {
  logger.error({ err }, 'Failed to start server')
  process.exit(1)
})
