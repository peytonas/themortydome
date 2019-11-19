import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' },
  description: { type: String, maxlength: 300 },
  health: { type: Number, default: 100 },
  hits: { type: Number, default: 0 },
  attacks: {},
  items: [],
  fighterId: { type: ObjectId, ref: 'Fighter', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true })

export default class FightersService {
  get repository() {
    return mongoose.model('fighter', _schema)
  }
}