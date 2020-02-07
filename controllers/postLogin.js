const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req,res) => {
	User.findOne({username:req.body.username})
		.then(data => {
			let match = bcrypt.compareSync(req.body.password, data.password)
			if (match) {
				let obj = data.toObject()
				let token = jwt.sign(obj, 'secret')
				res.send(token)
			}
		}).catch(err => {
			console.log(err);
		})
}
