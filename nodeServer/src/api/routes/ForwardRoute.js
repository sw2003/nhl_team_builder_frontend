const express = require('express') 
const router = express.Router() 

const { ForwardControllerLeafs } = require('../controllers/index')


router.get('/Forwards/Leafs', ForwardControllerLeafs)  


module.exports = router; 