import * as authService from '../services/auth.service.js'
import asyncHandler from '../middleware/asyncHandler.js'
import { success } from '../utils/response.js'

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const result = await authService.login(email, password)
  success(res, result, { message: 'Login successful' })
})

export const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body)
  success(res, result, { status: 201, message: 'User created' })
})

export const me = asyncHandler(async (req, res) => {
  const user = await authService.getMe(req.user._id)
  success(res, { user })
})

export const logout = asyncHandler(async (req, res) => {
  success(res, null, { message: 'Logged out' })
})
