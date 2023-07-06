const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res)=>{
    res.json({
        'Connor Mcdavid': {team: 'EDM'},
        'Cale Makar': {team: 'AVL'}, 
        'Chris Tanev': {team: 'CGY'}
    })
})


app.listen(PORT, ()=>{
    console.log(`server listening on Port ${PORT}`);
})