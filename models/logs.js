const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title: {type:String, required:true},
    entry: {type:String, required:true},
    shipIsBroken: Boolean
})// the Outline for ALL logs we create/populate in dataset

const Log = mongoose.model('Log', logSchema)

module.exports = Log