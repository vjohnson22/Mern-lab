const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Episode = new Schema ({
  url: String,
  name: String,
  season: Number,
  airdate: Date,
  image:{
    medium: String,
    original: String
    },
  summary: String
})

module.exports = mongoose.model("Episode", Episode)