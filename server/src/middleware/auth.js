import jwt from 'jsonwebtoken'
import config from '../config/env.js'
import User from '../models/User.js'
import { AuthError, ForbiddenError } from '../utils/errors.js'

export async function authenticate(req, res, next) {
  try {
    const header = req.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
      throw new AuthError('Missing or invalid authorization header')
    }

    const token = header.split(' ')[1]
    let payload
    try {
      payload = jwt.verify(token, config.jwtSecret)
    } catch {
      throw new AuthError('Invalid or expired token')
    }

    const user = await User.findById(payload.id).select('-password')
    if (!user || !user.isActive) {
      throw new AuthError('User not found or inactive')
    }

    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

export function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ForbiddenError('Insufficient permissions'))
    }
    next()
  }
}
