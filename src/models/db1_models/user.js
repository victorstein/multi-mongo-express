import mongoose from 'mongoose'
import databases from '../../db_connection'
import Joi from '@hapi/joi'

// Retreive database 1
const { db1 } = databases

const User = new mongoose.Schema({
  email: {
    required: true,
    lowercase: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
}, {
  timestamps: true
})

const UserValidation = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .error(new Error('The password must be at least: - 8 characters long - Contain 1 uppercase letter - Contain 1 number - Contain 1 special character'))
})

export default {
  model: db1.model('User', User),
  validation: UserValidation
}
