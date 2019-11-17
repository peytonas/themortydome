import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



let _schema = new Schema({
  title: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true })

//CASCADE ON DELETE
_schema.pre('findOneAndRemove', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    // @ts-ignore
    _listRepo.deleteMany({ boardId: this._conditions._id }),
    // @ts-ignore
    _taskRepo.deleteMany({ boardId: this._conditions._id }),
    // @ts-ignore
    _commentRepo.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default class BoardService {
  get repository() {
    return mongoose.model('board', _schema)
  }
}