const express = require('express');
const { postConsultation, retrieveRequests, deleteConsult } = require('../controllers/consultation');
const router = express.Router();

router.post('/', postConsultation);
router.get('/', retrieveRequests);
router.delete('/:id', deleteConsult);

module.exports = router;