import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const { DB_USER_1, DB_PASSWORD_1, DB_URI_1 } = process.env

export default mongoose.createConnection(
  `mongodb+srv://${DB_USER_1}:${DB_PASSWORD_1}${DB_URI_1}`,
  { useNewUrlParser: true }
)
