let express = require('express');
let router = express.Router();
let passport = require('passport');
let indexController = require('../controllers/index');


/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


/* User Profile Section */

/* GET Route for Profile Pages
   this will show the user the profile page so they can edit their profile */
   router.get('/profile/:id', indexController.displayUserProfile);

   /* POST Route for processing the Survey page */
   router.post('/profile/:id', /*passport.authenticate('jwt', {session: false}),*/ indexController.updateUserProfileInfo);

module.exports = router;
