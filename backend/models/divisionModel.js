const mongoose = require('mongoose')

const Schema = mongoose.Schema

// schema defines structure
const divisionSchema = new Schema({
    // division title
    dTitle: {
        type: String, 
        required: true
    },
    // infantry count
    iCount: {
        type: Number, 
        required: true
    }, 
    // horse count
    hCount: {
        type: Number, 
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Division", divisionSchema)