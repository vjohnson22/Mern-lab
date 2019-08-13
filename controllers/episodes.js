const Episode = require('../models/episodes')

module.exports = {
    index: (req,res) => {
        Episode.find({}).then(episode => {res.json(episode)})
    },
    create: (req,res) => {
        Episode.create(req.body).then(episode => {res.json(episode)})   
    },
    show: (req,res) => {
        Episode.findOne({name: req.params.name}).then(name => {res.json(name)})
        
    },
    update: (req,res) => {
        Episode.findOneAndUpdate({name:req.params.name}, req.body,{new:true}).then(updated => {
            res.json(updated)
        })
    },
  
    destroy: (req,res) => {
        Episode.findOneAndDelete({name: req.params.name}).then(deleted => {
            res.json(deleted)
        })    
    }
}
