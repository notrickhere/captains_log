const mongoose = require('mongoose')

const gunSchema = new mongoose.Schema({
    manufacturer: {type:String, required: true},
    model: {type:String, required: true},
    isGunBroken: Boolean
})

const Gun = mongoose.model('Gun', gunSchema)

module.exports = Gun