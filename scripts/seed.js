import 'dotenv/config'
import mongoose from 'mongoose'
import config from '../server/src/config/env.js'
import User from '../server/src/models/User.js'
import Service from '../server/src/models/Service.js'

async function seed() {
  await mongoose.connect(config.mongodbUri)
  console.log('Seeding database...')

  const adminExists = await User.findOne({ email: 'admin@peluqueriaego.com' })
  if (!adminExists) {
    await User.create({
      name: 'Admin',
      email: 'admin@peluqueriaego.com',
      password: 'admin123',
      role: 'admin',
    })
    console.log('Admin user created: admin@peluqueriaego.com / admin123')
  } else {
    console.log('Admin user already exists')
  }

  const serviceCount = await Service.countDocuments()
  if (serviceCount === 0) {
    await Service.insertMany([
      { name: 'Corte de cabello', duration: 30, price: 15 },
      { name: 'Corte + lavado', duration: 45, price: 22 },
      { name: 'Tinte completo', duration: 120, price: 50 },
      { name: 'Peinado', duration: 30, price: 18 },
      { name: 'Barba', duration: 15, price: 8 },
    ])
    console.log('Default services created')
  } else {
    console.log('Services already exist')
  }

  await mongoose.disconnect()
  console.log('Seed complete')
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
