import dotenv from 'dotenv'
dotenv.config()

const required = ['MONGODB_URI', 'JWT_SECRET']

for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`)
    process.exit(1)
  }
}

export default {
  port: parseInt(process.env.PORT, 10) || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  logLevel: process.env.LOG_LEVEL || 'info',

  calendlyApiKey: process.env.CALENDLY_API_KEY,
  calendlyWebhookSecret: process.env.CALENDLY_WEBHOOK_SECRET,
  calendlyUserUri: process.env.CALENDLY_USER_URI,

  whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
  whatsappAccessToken: process.env.WHATSAPP_ACCESS_TOKEN,
  whatsappAppSecret: process.env.WHATSAPP_APP_SECRET,
  whatsappVerifyToken: process.env.WHATSAPP_VERIFY_TOKEN,
  whatsappBusinessAccountId: process.env.WHATSAPP_BUSINESS_ACCOUNT_ID,
}
