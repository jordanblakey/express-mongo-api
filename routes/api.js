const express = require('express')
const router = express.Router()

// LIST ROUTES
// get a list of ninjas from the database
router.get('/ninjas', function(req, res) {
  res.send({ type: 'GET' })
})

// SINGLE ITEM ROUTES
// add a new ninja to db
router.post('/ninjas', function(req, res) {
  res.send({ type: 'POST' })
})
// update(put) a ninja in the db
router.put('/ninjas/:id', function(req, res) {
  res.send({ type: 'PUT' })
})
// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res) {
  res.send({ type: 'DELETE' })
})

// Because every route is property of router, this exports all of them
module.exports = router

// ORIGINAL EXPRESS ROUTES
// app.get('/api', function(req, res) {
//   console.log('GET request')
//   res.send({
//     name: 'yoshi'
//   })
// })

// app.post('/api', function(req, res) {
//   console.log('POST request')
// })

// app.delete('/api', function(req, res) {
//   console.log('DELETE request')
// })
