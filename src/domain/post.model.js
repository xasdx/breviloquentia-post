import mongoose from "mongoose"

let ENTITY_NAME = "Post"

let model = mongoose.model(ENTITY_NAME, new mongoose.Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
  date: { type: Date, default: Date.now },
  tags: [String]
}))

export default model
