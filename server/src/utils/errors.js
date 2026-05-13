export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 404)
    this.name = 'NotFoundError'
  }
}

export class ValidationError extends AppError {
  constructor(errors) {
    super('Validation failed', 400)
    this.name = 'ValidationError'
    this.errors = errors
  }
}

export class AuthError extends AppError {
  constructor(message = 'Authentication required') {
    super(message, 401)
    this.name = 'AuthError'
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Access denied') {
    super(message, 403)
    this.name = 'ForbiddenError'
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super(message, 409)
    this.name = 'ConflictError'
  }
}
