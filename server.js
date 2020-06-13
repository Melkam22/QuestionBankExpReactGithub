const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

//importing routes
const routes = require('./routes/allRoutes');

const PORT = process.env.PORT || 4000;


//linking my database
//const MONGODB_URI = 'mongodb+srv://QuizBankExpressReact:ashu123@quizbankexpressreact-xdfcq.mongodb.net/<dbname>?retryWrites=true&w=majority'
const MONGODB_URI = 'mongodb+srv://QuizBankExpressReact:ashu123@quizbankexpressreact-xdfcq.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB is connected!')
});

//bodyParsers to make available datas on req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use(morgan('tiny'));

//test routes, before creating route folder
/* app.get('/ashu', (req, res)=>{
    res.json('Ashu route is working')
}) */

//routes initialized
app.use('/', routes);


app.listen(PORT, console.log(`server is started @ ${PORT}`));