const Division = require('../models/divisionModel')
const mongoose = require('mongoose')

// get single division
const getSingleDivision = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Division not found"})
    }

    const division = await Division.findById(id)

    if (!division) {
        return res.status(404).json({error: 'Division not found'})
    }

    res.status(200).json(division)
}

// get all divisions
const getDivisions = async (req, res) => {
    // -1 is descending order (most recent)
    const divisions = await Division.find({}).sort({createdAt: -1})

    res.status(200).json(divisions)
}
// post a division
const createDivision = async (req, res) => {
    const {dTitle, iCount, hCount} = req.body

    // add info doc to database
    try {
        const division = await Division.create({dTitle, iCount, hCount})
        res.status(200).json(division)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a division
const deleteDivision = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Division not found"})
    }

    const division = await Division.findOneAndDelete({_id: id})

    if (!division) {
        return res.status(404).json({error: 'Division not found'})
    }

    res.status(200).json(division)    
}

// update a division
    const updateDivision = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: "Division not found"})
        }

        const division = await Division.findOneAndUpdate({_id: id}, {
            // line below somehow represents all three data fields??
            ...req.body
        })

        if (!division) {
            return res.status(404).json({error: 'Division not found'})
        }
    
        res.status(200).json(division)  

    }

module.exports = {
    createDivision, 
    getSingleDivision, 
    getDivisions, 
    deleteDivision, 
    updateDivision
}