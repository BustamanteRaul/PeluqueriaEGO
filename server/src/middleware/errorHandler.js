import logger from '../utils/logger.js'

export default function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500
  const message = err.isOperational ? err.message : 'Internal server error'

  if (!err.isOperational) {
    logger.error({ err, method: req.method, url: req.url }, 'Unexpected error')
  }

  const body = { success: false, message }
  if (err.errors) body.errors = err.errors
  res.status(status).json(body)
}
