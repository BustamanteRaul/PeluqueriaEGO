import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String },
    email: { type: String },
    specialties: [{ type: String }],
    bio: { type: String },
    isActive: { type: Boolean, default: true },
    calendlyUserUri: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model('Staff', staffSchema)
