require('dotenv').config()
const express = require('express')

// variable that contains express app
const app = express()

// middleware
// invoke next so the next function will run
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handlers
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to my project'})

})

// listener
// process.env.PORT is pulling port # from .env file
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

process.env