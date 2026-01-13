const express = require('express')
const app = express()
const port = 5050

app.get('/', (req, res) => {
  res.send('Get Started With Mongoose')
})

app.listen(port, () => {
  console.log(`Mongoose server is running on port : ${port}`)
})
