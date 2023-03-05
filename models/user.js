const mongoose = require('mongoose');

const userSchema = {
  _id: mongoose.Schema.Types.ObjectId,
  email: { 
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: {
     type: String,
     required: true,
  },
  name: String,
  city: String,
  state: String,
  street: String,
  image: {
    type: String,
    required: true
  },
  review: String
}

module.exports = mongoose.model('User', userSchema);