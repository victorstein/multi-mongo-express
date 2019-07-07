import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import databases from './db_connection'
import router1 from './api/conn1_endpoints/user'
import router2 from './api/conn2_endpoints/user'

// retreive databases
const { db1, db2 } = databases

// initiate env imports
config()

// Retreive variables from process.env
const { PORT } = process.env;

// Initiate server with a self invoking function
(async () => {
  try {
    // Create the app
    const app = express()

    // Apply body parser middleware
    app.use(bodyParser.json())

    // Set up db connection
    await Promise.all([ db1, db2 ])

    // Use router connection 1
    app.use('/api/conn1', router1)
    app.use('/api/conn2', router2)

    // listen for connections
    app.listen(PORT, () => {
      console.log(`App listening to port ${4000}`)
    })
  } catch (e) {
    console.log(e)
  }
})()
