const Box =  require('../models/Box')
const Boxes =  require('../models/Boxes')
const mongoose = require('mongoose')

class BoxController{

    async store(req, res){

        const box = await Box.create(req.body)

        return res.json(box)
    }

    async show(req, res){
        try {

            const box = await Box.findById(req.params.id).populate({
                path: 'files',
                options:  {sort: {createdAt: -1}}
            })
            return res.json(box)
                    
        } catch (error) {
           console.log(error) 
        }
    }

    async listBoxes(req, res){
        try {

            const boxes = await Boxes.find().populate({
                path: 'boxes',
                options:  {sort: {createdAt: -1}}
            })
            return res.json(boxes)
                    
        } catch (error) {
           console.log(error) 
        }
    } 
    
    async listAllBoxes(req, res){
        try {

            const boxes = await Box.find().populate({
                path: 'boxes',
                options:  {sort: {createdAt: -1}}
            })
            return res.json(boxes)
                    
        } catch (error) {
           console.log(error) 
        }
    }     

}

module.exports = new BoxController()