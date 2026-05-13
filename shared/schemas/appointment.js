import { z } from 'zod'
import { AppointmentStatus } from '../enums.js'

const objectId = z.string().regex(/^[a-f\d]{24}$/i, 'Invalid ObjectId')

export const createAppointmentSchema = z.object({
  client: objectId,
  service: objectId,
  staff: objectId.optional(),
  date: z.string().datetime({ message: 'Invalid date format' }),
  duration: z.number().int().positive('Duration must be positive'),
  notes: z.string().optional(),
})

export const updateAppointmentStatusSchema = z.object({
  status: z.nativeEnum(AppointmentStatus),
})

export const listAppointmentsSchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().max(100).optional(),
  status: z.nativeEnum(AppointmentStatus).optional(),
  dateFrom: z.coerce.date().optional(),
  dateTo: z.coerce.date().optional(),
  staff: objectId.optional(),
  client: objectId.optional(),
})
