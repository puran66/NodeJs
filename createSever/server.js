const PORT = 3000
const http = require('http')
const express  = require('express');
const users = require('./MOCK_DATA.json')


const app = express()
const route = express.Router()


// routes //

route.get('/',(req,res,next)=>{
  res.status(200).json({
    message: 'Welcome to the API'
  })
})

route.get('/allUsers',(req,res,next)=>{
  res.status(200).json(users)
})

route.get('/allUsers/user/:id',(req,res,next)=>{
  const id = Number(req.params.id);
  const user =  users.find((item)=>item.id === id);

  res.status(200).json(user)
})




app.use(route)

// server //

http.createServer(app).listen(PORT,()=>{
  console.log("server started...");
})