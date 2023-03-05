const mongoose= require('mongoose');
const Consultation  = require('../models/consultation');

exports.postConsultation = (req, res, next) => {
  const details = new Consultation({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    message: req.body.message,
    budget: req.body.budget
  });
  details.save()
  .then( result => {
    res.status(200).json({
      message: "Your request is submitted",
      request: {
        name: result.name,
        message: result.message,
        telephone: result.telephone
      }
    })
  })
  .catch( err => {
    res.status(500).json({
      error : err
    })
  })
}

exports.retrieveRequests = (req, res, next) => {
  Consultation.find()
    .exec()
    .then( results => {
      res.status(200).json({
        total: results.length,
        requests: results
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}

exports.deleteConsult = (req, res, next) => {
  Consultation.remove(req.params.id)
    .exec()
    .then( result => {
      res.status(200).json({
        message: "Deleted!",
        request: result
      })
    })
    .catch( error => {
      res.status(500).json({
        error: err
      })
    })
}