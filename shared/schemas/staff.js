import { z } from 'zod'

export const createStaffSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  specialties: z.array(z.string()).optional(),
  bio: z.string().optional(),
})

export const updateStaffSchema = createStaffSchema.partial()
