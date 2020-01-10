import UserService from '../services/UserService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

let _userService = new UserService().repository
let userService = new UserService()


//PUBLIC
export default class UserController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .put('/:id', this.editUser)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let skip = req.query.page || 0
      let users = await userService.getAll(skip)
      return res.send(users)
    }
    catch (err) { next(err) }
  }
  async editUser(req, res, next) {
    try {
      let user = await _userService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (!user) {
        throw new Error("invalid id broh")
      }
      return res.send(user)
    } catch (error) {
      next(error)
    }
  }
}
