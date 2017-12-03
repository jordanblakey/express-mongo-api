const express = require('express')
const bodyParser = require('body-parser')

let app = express()

// INITIALIZE MIDDLEWARE
app.use(bodyParser.json())

// REQUIRE ROUTES & prepend /api
app.use('/api', require('./routes/api'))

let port = process.env.port ? process.env.port : 4000

// LISTEN FOR REQUESTS
app.listen(port, function() {
  console.log('now listening on port ' + port)
})
