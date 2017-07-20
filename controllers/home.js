var express = require('express');
var router = express.Router();
var user_model = require('../models/user_model');
router.post('/check',function(req, res){
	
	if(!req.body.control_name || !req.body.control_value)
	{
		res.json({msg: ""});
	}
	user_model.check_exist(req.body, function(err, data) { 
		res.json({msg:data});
	});
	
});
module.exports = router;