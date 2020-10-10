var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About me */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Me. */
router.get('/contacts', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
