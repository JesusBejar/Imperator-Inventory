const express = require('express')
const router = express.Router()

// get single division
router.get('/', (req, res) => {
    res.json({mssg: "Get all divisions"})
})
// get all divisions
router.get('/:id', (req, res) => {
    res.json({mssg: "Get an individual division"})
})

// post
router.post('/', (req, res) => {
    res.json({mssg: "Post a new individual division"})
})

// delete
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete an individual division"})
})
// patch (or update)
router.patch('/:id', (req, res) => {
    res.json({mssg: "Update an individual division"})
})

module.exports = router