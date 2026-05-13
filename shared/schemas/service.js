import { z } from 'zod'

export const createServiceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  duration: z.number().int().positive('Duration must be positive'),
  price: z.number().positive('Price must be positive'),
  category: z.string().optional(),
})

export const updateServiceSchema = createServiceSchema.partial()
