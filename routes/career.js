const mongoose = require('mongoose');
const express = require('express');
const { addRequest, getRequests, getSingleRequest } = require('../controllers/career');
const router = express.Router();
const multer = require('multer');


router.post('/', addRequest);
router.get('/', getRequests);
router.get('/:id', getSingleRequest);

module.exports = router;