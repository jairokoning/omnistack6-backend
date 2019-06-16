const mongoose = require('mongoose')
 
const Boxes = new mongoose.Schema({
    title: {}    
})

module.exports = mongoose.model('Boxes', Boxes)