import { z } from 'zod'

export const createClientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(7, 'Phone must be at least 7 characters'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  notes: z.string().optional(),
})

export const updateClientSchema = createClientSchema.partial()

export const listClientsSchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().max(100).optional(),
  search: z.string().optional(),
})
