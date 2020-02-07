const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.use(cors({credentials: true}))



app.post('/signup', require('./controllers/postSignup'))

app.post('/login', require('./controllers/postLogin'))

app.listen(4000, () => {
	console.log('Listening on PORT 4000');
})

mongoose.connect('mongodb://localhost:27017/calorie-log', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  err ? console.log(err) : console.log('Connected to MongoDB')
})
