let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

/* GET Surveys page - READ Operation */
router.get('/', surveyController.displaySurveys);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), surveyController.displaySurveyAddPage);
   
/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), surveyController.processSurveyAddPage);

router.get('/survey/:id', surveyController.displaySurveyPage);

/* POST Route for processing the Survey page */
router.post('/survey/:id', surveyController.processSurveyPage);

module.exports = router;
