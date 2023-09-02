const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose') 
require('dotenv').config();
require('../src/api/db/db.connect')

const PORT = 4000;

app.use(cors());
app.use(express.urlencoded())





const ForwardRoute = require('./api/routes/ForwardRoute')
const SearchRoute = require('./api/routes/SearchRoute')

app.use('/api', ForwardRoute); 
app.use('/api', SearchRoute)

app.listen(PORT, async ()=>{

    console.log(`server listening on Port ${PORT}`);
})