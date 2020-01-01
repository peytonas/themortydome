import mongoose from "mongoose"
import { stringify } from "querystring"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// let image = new Schema({
//   img: {
//     data: Buffer, contentType: String
//   }
// });

let _schema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  type: { type: String, enum: ["rock", "paper", "scissors", "normal"], required: true },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' },
  // image: { image },
  description: { type: String, maxlength: 500 },
  hp: { type: Number },
  hits: { type: Number, default: 0 },
  attacks: [{
    name: { type: String, required: true },
    AD: { type: Number, required: true },
    effect: { type: String, required: false },
    AP: { type: Number, required: false }
  }],
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