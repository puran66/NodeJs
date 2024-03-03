const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
  toDo:{
    type:String,
    required:true,
  },
  time:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
})

const user = mongoose.model('user', userSchema);

module.exports = user;