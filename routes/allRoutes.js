const express = require('express');
const router = express.Router();

const quizeSchema = require('../models/schema'); 
 
//test route
router.get('/question', (req, res)=>{
    res.json('welcome to quiz challenge!')
})

//route to save data to database
router.post('/question/save', (req, res)=>{
    const data = req.body;
    const newquizeSchema = new quizeSchema(data);//creating new instance of my model
    newquizeSchema.save((error)=>{
        if(error){
            res.status(500).json({msg: 'Error on server occured.'})
        } else {
            res.json({msg: 'data from frontend is received'}); 
        }
    })
     
})


module.exports = router;