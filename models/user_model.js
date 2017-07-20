var db = require('../helpers/database');

exports.check_exist = function(user,cb) {
	db.getConnection(function(err, connection){	
		var str_query = "";
		if(user.frontreg)
		{
			str_query = "SELECT * FROM `users` WHERE `email`='"+user.email+"'";
			
		}
		else
		{
			str_query = "SELECT * FROM `users` WHERE `"+user.control_name+"` ='"+user.control_value+"'";
			if(user.user_val)
			{
				str_query +=" AND id!='"+user.user_val+"'";
			}
		}
        connection.query(str_query , function(err, result) {
			connection.release();
        	var data = [];
			if (err) {
				cb(err, {});
				return;
		  	}
			
			if(result.length>0)
			{
			cb(null, "exist");
			}
			else
			{cb(null, "not_exist");}
		  	
		});
	});
}