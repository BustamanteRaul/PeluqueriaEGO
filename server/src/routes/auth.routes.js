import { Router } from 'express'
import * as authController from '../controllers/auth.controller.js'
import { authenticate } from '../middleware/auth.js'
import validate from '../middleware/validate.js'
import { loginSchema, registerSchema } from '../../shared/schemas/auth.js'

const router = Router()

router.post('/login', validate(loginSchema), authController.login)
router.post('/register', validate(registerSchema), authController.register)
router.get('/me', authenticate, authController.me)
router.post('/logout', authenticate, authController.logout)

export default router
