var express = require('express');
var router = express.Router();
router.get('/admin/login', function(req, res) {

  res.render('admin/login');
});
router.use('/', require('./home'));
//router.use('/*', require("./content"));
router.use('/user', require('./user'));

module.exports = router;