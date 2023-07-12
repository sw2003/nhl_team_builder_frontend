const mongoose = require('mongoose') 

const playerSchema = new mongoose.Schema({
    fullname: String,
    goals: Number,
    assists: Number, 
    gamesPlayed: String,
    team: String, 
    timeOnIcePerGame: Number, 
    espnId: Number
})

module.exports = mongoose.model('Players' , playerSchema, 'Players')