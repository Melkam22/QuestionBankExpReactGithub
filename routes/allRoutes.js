const express = require('express');
const router = express.Router();

const quizeSchema = require('../models/schema'); 
 

router.get('/question', (req, res)=>{
    res.json('welcome to quiz challenge!')
})


module.exports = router;