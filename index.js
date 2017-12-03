const express = require('express')

let app = express()

// initialize routes
app.use('/api', require('./routes/api')) // prepend /api to routes from api.js

let port = process.env.port ? process.env.port : 4000

// listen for requests
app.listen(port, function() {
  console.log('now listening on port ' + port)
})
