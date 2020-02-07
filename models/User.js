const mongoose = require('mongoose')

const User = mongoose.model('user',
	{
		email: String,
		username: String,
		password: String,
		height: Number,
		weight: Number,
		age: Number,
		activityLevel: String
	})

module.exports = User
