const express = require('express')
const {
    createDivision, 
    getSingleDivision, 
    getDivisions, 
    deleteDivision, 
    updateDivision
} = require('../controllers/divisionController')
const router = express.Router()

// get single division
router.get('/:id', getSingleDivision)

// get all divisions
router.get('/', getDivisions)

// post
router.post('/', createDivision)

// delete
router.delete('/:id', deleteDivision)
// patch (or update)
router.patch('/:id', updateDivision)

module.exports = router