import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  type: { type: String, enum: ["rock", "paper", "scissors", "normal"], required: true },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' },
  description: { type: String, maxlength: 500 },
  hp: { type: Number },
  hits: { type: Number, default: 0 },
  attacks: {},
  items: [],
  authorId: { type: ObjectId, ref: 'User', required: true },
  beaten: { type: Boolean, default: false, required: true, },
  confronted: { type: Boolean, default: false, required: true, }
}, { timestamps: true })

export default class FightersService {
  get repository() {
    return mongoose.model('fighter', _schema)
  }
}