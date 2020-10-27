let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page */
router.get('/',indexController.displayHomePage);

/* GET home page */
router.get('/home', indexController.displayHomePage);

/* GET About me */
router.get('/about', indexController.AboutPage);

/* GET Projects page */
router.get('/projects', indexController.ProjectsPage);

/* GET Services page. */
router.get('/services', indexController.ServicesPage);

/* GET Contact Me. */
router.get('/contacts', indexController.ContactsPage);

module.exports = router;
