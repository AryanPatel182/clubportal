const express = require('express');

const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/', eventController.get_event);

module.exports = router;