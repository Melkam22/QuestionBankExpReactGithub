const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const QuestionChallenge = new Schema({
    firstName: String,
    lastName: String,
    idNo: String,
    result: String,
    date: {
        type: String,
        default: Date.now()
    }
}); 

const quizeSchema = mongoose.model('quizChallengeDatabase', QuestionChallenge);


module.exports =  quizeSchema;  