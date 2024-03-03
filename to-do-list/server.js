require('dotenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./db/dbConnect');
const { userRoutes } = require('./Routes');
const app = express();

// body parser //
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set ejs  for view js engine//

app.set('view engine','ejs')

// Db Connect //

connectDb();

// routes //

app.use('/',userRoutes)

// create server //

http.createServer(app).listen(process.env.Port,()=>{
  console.log("server started");
})

