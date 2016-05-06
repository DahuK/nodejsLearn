module.exports = function(JavaBook) {
	JavaBook.beforeRemote('create', function(context, user, next) {
//		var req = context.req;
////		req.body.date = Date.now();
////		req.body.publisherId = req.accessToken.userId;
//		next();
	});
};


////grab the things we need
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//// create a schema
//var userSchema = new Schema({
//  name: String,
//  username: { type: String, required: true, unique: true },
//  password: { type: String, required: true },
//  admin: Boolean,
//  location: String,
//  meta: {
//    age: Number,
//    website: String
//  },
//  created_at: Date,
//  updated_at: Date
//});
//
//// the schema is useless so far
//// we need to create a model using it
//var User = mongoose.model('User', userSchema);
//
//// make this available to our users in our Node applications
//module.exports = User;