export const AppointmentStatus = Object.freeze({
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  NO_SHOW: 'no-show',
})

export const Source = Object.freeze({
  WEB: 'web',
  WHATSAPP: 'whatsapp',
  CALENDLY: 'calendly',
  MANUAL: 'manual',
})

export const Role = Object.freeze({
  ADMIN: 'admin',
  STAFF: 'staff',
})
