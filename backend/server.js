const express = require('express')

// variable that contains express app
const app = express()

// route handlers
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to my project'})

})

// listener
app.listen(4000, () => {
    console.log('listening on port 4000')
})