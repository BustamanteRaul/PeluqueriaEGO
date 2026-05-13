import pino from 'pino'
import config from '../config/env.js'

const transport =
  config.nodeEnv === 'development'
    ? { target: 'pino-pretty', options: { colorize: true } }
    : undefined

export default pino({ level: config.logLevel, transport })
