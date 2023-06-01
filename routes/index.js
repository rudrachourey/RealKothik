var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", { title: "Kothik" },);
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home-Kothik' },);
});

router.get('/food', function(req, res, next) {
  res.render('food', { title: 'Food-Kothik' },);
});
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map-Kothik' },);
});

router.get('/room', function(req, res, next) {
  res.render('room', { title: 'Room-Kothik' },);
});
router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Table-Kothik' },);
});
module.exports = router;
