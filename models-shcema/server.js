require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const route = express.Router()


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

route.get('/',(req,res,next)=>{

const file = path.join(__dirname,'/index.html')

    res.sendFile(file)
})

//routes
app.use(route)

//server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start')
})