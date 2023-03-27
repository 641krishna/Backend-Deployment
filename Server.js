const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const routes = require('./Routes/TodoRoute')

const app = express()
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// app.get('/', (req, res) => res.send('hello'))
app.use(routes)

app.listen(8080, () => { console.log('server started on port 8080') })