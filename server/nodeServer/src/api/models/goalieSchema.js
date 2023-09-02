const mongoose = require('mongoose');

const goalieSchema = new mongoose.Schema({
    fullname: String,
    savePct: Number, 
    saves: Number,
    gamesPlayed: Number, 
    shotsAgainst: Number,
    team: String,
    goalsAgainst: Number,
    goalsAgainstAverage: Number,
    wins: Number, 
    losses: Number,
    espnId: Number
})

module.exports = mongoose.model('Goalies', goalieSchema, 'Goalies')