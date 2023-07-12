const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
require('./api/db/db.connect'); 

app.use(cors());
app.use(express.urlencoded())

const ForwardRoute = require('./api/routes/ForwardRoute')
const SearchRoute = require('./api/routes/SearchRoute')

app.use('/api', ForwardRoute); 
app.use('/api', SearchRoute)

app.listen(PORT, ()=>{
    console.log(`server listening on Port ${PORT}`);
})