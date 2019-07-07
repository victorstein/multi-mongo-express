import { Router } from 'express'
import Models from '../../models/db1_models'

const { User: { model, validation } } = Models
const User = model
const UserValidation = validation
const router = Router()
let status = 500

export default
router
  .get('/user', async (req, res) => {
    try {
      let users = await User.find().exec()
      res.json(users)
    } catch ({ message }) {
      res.status(status).json(message)
    }
  })
  .post('/user', async (req, res) => {
    try {
      // Validate received data
      let validation = UserValidation.validate(req.body)

      // Throw error id data is invalid
      if (validation.error) {
        status = 400
        throw new Error(validation.error)
      }

      // If data is validproceed to create user
      let user = new User(req.body)

      // Save user
      user = await user.save()

      // return successful response
      res.status(200).json(user)
    } catch ({ message }) {
      res.status(status).json({ error: message })
    }
  })
