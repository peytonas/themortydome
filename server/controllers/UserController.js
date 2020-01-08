import UserService from '../services/UserService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

let _userService = new UserService().repository


//PUBLIC
export default class UserController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let users = await _userService.find({})
      res.send(users)
    }
    catch (err) { next(err) }
  }
}
