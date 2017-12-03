const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREATE SCHEMA
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required.']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geolocation
})

// CREATE MODEL
const Ninja = mongoose.model('ninja', NinjaSchema)

// MAKE THE MODEL AVAILABLE
module.exports = Ninja

// We will use this model to create ninja from our post requests w/ validation.
