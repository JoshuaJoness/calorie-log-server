const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({credentials: true}))

app.listen(4000, () => {
	console.log('Listening on PORT 4000');
})

app.get('/', (req,res) => {
	res.send('Connected')
})

mongoose.connect('mongodb://localhost:27017/calorie-log', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  err ? console.log(err) : console.log('Connected to MongoDB')
})
