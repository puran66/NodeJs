const http = require('http')
const express = require('express')

const app = express()
const route = express.Router()

route.get('/',(req,res,next)=>{
  res.status(200).json({
    status:'success',
    message: 'Welcome to the API'
  })
})

app.use(route);

http.createServer().listen(process.env.PORT,()=>{
  console.log("server started...");
})