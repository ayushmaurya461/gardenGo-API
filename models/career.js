const mongoose = require('mongoose');

const careerFormSchema = {
  _id : mongoose.Schema.Types.ObjectId,
  name : {
    type: String,
    required: true,
  },
  email :{
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  telephone: {
    type: Number,
    required: true,
  },
  callTime: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}

module.exports = mongoose.model('Career', careerFormSchema);