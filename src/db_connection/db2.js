import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const { DB_USER_2, DB_PASSWORD_2, DB_URI_2 } = process.env

export default mongoose.createConnection(
  `mongodb+srv://${DB_USER_2}:${DB_PASSWORD_2}${DB_URI_2}`,
  { useNewUrlParser: true }
)
