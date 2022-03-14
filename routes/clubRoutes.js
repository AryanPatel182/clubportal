const express = require('express');

const clubController = require('../controllers/clubController.js');
const router=express.Router();

// router.get('/', clubController.get_clubs);

router.post('/addClub', clubController.createClub);
// router.get('/', clubController.getAllClubs);

// router.route('/').get(clubController.getAllClubs);

// router.route('/addClub').post(clubController.createClub);

module.exports = router;