import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, trim: true },
    notes: { type: String },
    source: {
      type: String,
      enum: ['web', 'whatsapp', 'calendly', 'manual'],
      default: 'web',
    },
    calendlyUri: { type: String },
    totalVisits: { type: Number, default: 0 },
    lastVisit: { type: Date },
  },
  { timestamps: true }
)

clientSchema.index({ phone: 1 })
clientSchema.index({ email: 1 })

export default mongoose.model('Client', clientSchema)
