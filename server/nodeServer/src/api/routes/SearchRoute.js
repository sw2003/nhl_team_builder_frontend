const express = require('express') 
const router = express.Router()

const { SearchController } = require('../controllers/index')

router.get('/search', SearchController); 

module.exports = router; 