const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loggSchema = new Schema({
  date:{
    type:Date
  },
  name: {
    type: String
  },
  type: {
    type: String
  },
  warm: {
    type: String
  },
  interv: {
    type: String
  },
  time: {
    type: String
  },
  notes:{
    type:String,
  }
}, {
  collection: 'loggs'
})

module.exports = mongoose.model('Logg', loggSchema)