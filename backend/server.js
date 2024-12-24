const express = require('express')

// variable that contains express app
const app = express()

// listener
app.listen(4000, () => {
    console.log('listening on port 4000')
})