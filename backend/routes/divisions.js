const express = require('express')
const {
    createDivision, 
    getSingleDivision, 
    getDivisions
} = require('../controllers/divisionController')
const router = express.Router()

// get single division
router.get('/:id', getSingleDivision)

// get all divisions
router.get('/', getDivisions)

// post
router.post('/', createDivision)

// delete
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete an individual division"})
})
// patch (or update)
router.patch('/:id', (req, res) => {
    res.json({mssg: "Update an individual division"})
})

module.exports = router