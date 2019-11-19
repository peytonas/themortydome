import FightersService from '../services/FightersService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

let _fightersService = new FightersService().repository

//PUBLIC
export default class FightersController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let fighters = await _fightersService.find({})
      res.send(fighters)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let fighter = await _fightersService.findById(req.params.id)
      if (!fighter) {
        throw new Error("invalid id")
      }
      res.send(fighter)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let fighter = await _fightersService.create(req.body)
      return res.status(201).send(fighter)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let fighter = await _fightersService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (fighter) {
        return res.send(fighter)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let fighter = await _fightersService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


