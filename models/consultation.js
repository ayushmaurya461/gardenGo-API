const mongoose = require('mongoose');

const consultSchema = {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  telephone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  budget: {
    type: String
  }
}

module.exports = mongoose.model('Consultation', consultSchema);