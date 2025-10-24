// models/User.ts
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  age: { type: Number },
  dateOfBirth: { type: Date },
  isActive: { type: Boolean, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
