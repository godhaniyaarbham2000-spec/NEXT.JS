import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user", // By default, sab normal user honge
  }
}, { timestamps: true });

// Agar model pehle se bana hua hai to wahi use karo, varna naya banao
export default mongoose.models.User || mongoose.model('User', userSchema);
