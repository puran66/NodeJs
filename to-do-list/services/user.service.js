const { userSchema } = require("../models")

const getData = () => {
  return userSchema.find({});
}

const addToDo = (body) => {
  return userSchema.create(body);
}

const findUserById = (id) => {
  return userSchema.findById({ _id: id });
}

const updateToDo = (body) => {
  const id = body._id;

  return userSchema.findByIdAndUpdate({ _id: id }, body)
}

const removeToDo = (id) =>{
  return userSchema.findByIdAndDelete({_id : id});
}

module.exports = { addToDo, getData, findUserById, updateToDo , removeToDo}