const mongoose = require('mongoose'); 

const playerModel = require('../models/playerSchema'); 
const goalieModel = require('../models/goalieSchema'); 


module.exports = async (req, res)=>{
    const name = req.query.prefix;
    const mode = req.query.mode; 

    if (mode === '/forwards'){
        const doc = await playerModel.find({fullname : {$regex :  new RegExp(name, "i")}}).limit(15).sort({goals: -1});
        res.json(doc); 

    }
    else if (mode === '/Defenders'){ 
        const doc = await playerModel.find({fullname : {$regex :  new RegExp(name, "i")}}).limit(15).sort({assists: -1});
        res.json(doc); 
    }
    else{
        const doc = await goalieModel.find({fullname : {$regex :  new RegExp(name, "i")}}).limit(15).sort({wins: -1});
        res.json(doc); 
    }
}