import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    isActive: { type: Boolean, default: true },
    calendlyEventTypeUri: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model('Service', serviceSchema)
