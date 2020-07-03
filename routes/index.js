/* index.js | Kavita Bhardwaj | Express Portfolio Site */

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express Portfolio Site' });
});

router.get('/home', function (req, res) {
    res.render('home', { about: 'Home Page' });
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { about: 'About Me' });
});

router.get('/projects', function (req, res) {
    res.render('projects', { about: 'Projects' });
});

router.get('/services', function (req, res) {
    res.render('services', { about: 'Services' });
});

router.get('/contactme', function (req, res) {
    res.render('contactme', { about: 'Contact Me' });
});

module.exports = router;