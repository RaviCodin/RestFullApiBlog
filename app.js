const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const errorMiddleWare = require('./middleWare/error.js');
const path = require('path')
const cors = require('cors')

const app = express();

// app.use(express.bodyParser({limit: '50mb'}));
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());


const blog = require("./routes/apiRoutes");
const users = require("./routes/userRoutes");

app.use("/api/v1",blog);
app.use("/api/v1",users);


app.use(express.static(path.join(__dirname,"./client/build")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./client/build/index.html"))
})

//errorMiddleWare use 
app.use(errorMiddleWare);


module.exports = app;