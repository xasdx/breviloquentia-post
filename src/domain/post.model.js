import mongoose from "mongoose"

let model = mongoose.model("Post", new mongoose.Schema({
  userId: { type: String, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
  date: { type: Date, default: Date.now },
  tags: [String]
}))

export default model
