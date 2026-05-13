import mongoose from 'mongoose'
import config from './env.js'
import logger from '../utils/logger.js'

export default async function connectDB() {
  try {
    await mongoose.connect(config.mongodbUri)
    logger.info('Connected to MongoDB')
  } catch (err) {
    logger.error({ err }, 'Failed to connect to MongoDB')
    process.exit(1)
  }
}
