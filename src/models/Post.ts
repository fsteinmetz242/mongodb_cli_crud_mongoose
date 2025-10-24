import { Schema, model } from "mongoose";

const postSchema = new Schema({
  userRef: { type: String, required: [true, "Ref is required!"] },
  title: { type: String, required: [true, "Title is required!"] },
  post: { type: String, required: [true, "Post text is required!"] },
  lastUpdated: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

export default model("Post", postSchema);
