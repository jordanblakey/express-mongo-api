const express = require('express')
const router = express.Router()

// LIST ROUTES
// get a list of ninjas from the database (REQUEST)
router.get('/ninjas', function(req, res) {
  // (MIDDLEWARE)
  // ROUTE HANDLER (MIDDLEWARE)
  res.send({ type: 'GET' }) // (RESPONSE)
})

// SINGLE ITEM ROUTES
// add a new ninja to db
router.post('/ninjas', function(req, res) {
  console.log('[POST]:', req.body) // WHAT WE GOT (RESPONSE)
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  }) //  WHAT WE RETURNED
})

// update(put) a ninja in the db
router.put('/ninjas/:id', function(req, res) {
  res.send({ type: 'PUT' })
})

// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res) {
  res.send({ type: 'DELETE' })
})

// ROUTES ARE PROPERTIES OF ROUTER
module.exports = router
