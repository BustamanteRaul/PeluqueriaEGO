import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    staff: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show'],
      default: 'pending',
    },
    notes: { type: String },
    source: {
      type: String,
      enum: ['web', 'whatsapp', 'calendly', 'manual'],
      default: 'web',
    },
    calendlyEventId: { type: String },
    calendlyEventUri: { type: String },
    reminderSent: { type: Boolean, default: false },
  },
  { timestamps: true }
)

appointmentSchema.index({ date: 1, status: 1 })
appointmentSchema.index({ client: 1, date: -1 })
appointmentSchema.index({ calendlyEventId: 1 }, { sparse: true })

export default mongoose.model('Appointment', appointmentSchema)
