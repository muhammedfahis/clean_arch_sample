const express = require('express');
const db = require('../libs/connections/databaseConnection');
const routes = require('./routes');
const bodyParser = require('body-parser');

const REDIS_PORT = process.env.PORT || 6379;
const PORT = require('./config/PORT.JS');
const {jwtVerifiyer} = require('../libs/middlewares/middlewares')



const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded( {limit:'30mb',extended:true}));
// app.use(jwtVerifiyer)
app.use('/',routes)
db.connect(()=>{
    console.log('database connected');
})
app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`));