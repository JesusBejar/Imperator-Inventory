require('dotenv').config()

const express = require('express')
const divisionRoutes = require('./routes/divisions')

// variable that contains express app
const app = express()

// middleware
// the line below is important but i don't know why
app.use(express.json())

// invoke next so the next function will run
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// attaches all routes to the app
app.use('/api/divisions', divisionRoutes)

// listener
// process.env.PORT is pulling port # from .env file
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

process.env