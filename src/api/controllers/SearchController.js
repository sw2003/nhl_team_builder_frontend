const mongoose = require('mongoose'); 

const playerModel = require('../models/playerSchema'); 


module.exports = async (req, res)=>{
    const name = req.query.prefix


    const doc = await playerModel.find({fullname : {$regex :  new RegExp(name, "i")}}).limit(15).sort({goals: -1});

    res.json(doc); 
}