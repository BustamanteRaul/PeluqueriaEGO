import jwt from 'jsonwebtoken'
import config from '../config/env.js'
import User from '../models/User.js'
import { AuthError, ConflictError, NotFoundError } from '../utils/errors.js'

export async function login(email, password) {
  const user = await User.findOne({ email: email.toLowerCase() })
  if (!user) throw new AuthError('Invalid email or password')

  const isMatch = await user.comparePassword(password)
  if (!isMatch) throw new AuthError('Invalid email or password')

  return generateAuthResponse(user)
}

export async function register(data) {
  const existing = await User.findOne({ email: data.email.toLowerCase() })
  if (existing) throw new ConflictError('Email already registered')

  const user = await User.create(data)
  return generateAuthResponse(user)
}

export async function getMe(userId) {
  const user = await User.findById(userId)
  if (!user) throw new NotFoundError('User')
  return user
}

function generateAuthResponse(user) {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    config.jwtSecret,
    { expiresIn: config.jwtAccessExpiresIn }
  )

  const refreshToken = jwt.sign(
    { id: user._id, type: 'refresh' },
    config.jwtSecret,
    { expiresIn: config.jwtRefreshExpiresIn }
  )

  return { accessToken, refreshToken, user }
}
