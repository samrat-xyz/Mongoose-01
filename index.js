const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require("./config/db")
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Get Started With Mongoose')
})

connectDB()

app.listen(port, () => {
  console.log(`Mongoose server is running on port : ${port}`)
})
