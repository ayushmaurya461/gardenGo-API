const Career = require('../models/career');
const mongoose = require('mongoose');

exports.addRequest = (req, res, next) => {
  const careerReq = new Career({
    _id : new mongoose.Types.ObjectId(),
    name : req.body.name,
    email : req.body.email,
    telephone: req.body.telephone,
    callTime: req.body.callTime,
    experience: req.body.experience,
    message: req.body.message
  });
  careerReq.save()
    .then( result => {
      res.status(200).json({
        message: "Request received.",
        request: {
          name: result.name,
          experience: result.experience,
          message: result.message
        }
      })
    })
    .catch( error => {
      res.status(500).json({
        err : error
      })
    })
}

exports.getRequests = (req, res, next) => {
  Career.find()
    .exec()
    .then(results => {
      console.log(results);
      const newResult = {
         total : results.length,
         data : results
      }
      res.status(200).json(newResult);
    })
    .catch( err => {
      res.status(500).json({
        error : err
      })
  })
};

exports.getSingleRequest = (req, res, next) => {
  Career.findById(req.params.id)
    .exec()
    .then( result => {
      if(result){
        res.status(200).json({
          request: result
        })
      }
    })
    .catch( err => {
      res.status(500).json({
        error: err
      })
    })
}