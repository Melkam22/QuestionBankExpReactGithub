import React, { Component } from 'react';
import './App.css';
//import Form from './compontents/Form';
import QuizBank from './QuizBankServer/QuizBank';
import QuestionAnswer from './components/QuestionAnswer';
import Replay from './components/Replay';

class App extends Component{
  state = {
    quizBank: [],
    score: 0,
    packOfQuiz: 0
  }

  quizFunction = ()=>{
    QuizBank().then(question=>{
      this.setState({
        quizBank: question
      })
    })
  }
  
  componentDidMount(){
    this.quizFunction()
  }

  //choosing correct answer function
trueAnswer = (response, correct)=>{
  if(response === correct){
    this.setState({
      score: this.state.score + 1
    })
  }
  this.setState({
    packOfQuiz: this.state.packOfQuiz < 10 ? this.state.packOfQuiz + 1 : 10 
  })
} 
//rematch
rematch = () =>{
  this.quizFunction();
  this.setState({
    score: 0,
    packOfQuiz: 0
  })
} 


  render(){
  return (
    <div className="App">
        {/* <Form /> */}
      <h1>QuizBank with React</h1>
      {this.state.quizBank.length > 0 && this.state.packOfQuiz < 10 && this.state.quizBank.map((
        {question, answers, correct, questionId})=>(<QuestionAnswer question={question}
                                                                allOptions={answers}
                                                                correctAnswer={response => this.trueAnswer(response, correct)}
                                                                key={questionId}
          />)  
      )}
     
      {this.state.packOfQuiz === 10 ? < Replay score={this.state.score}
    
      rematch={this.rematch}
/> : null}
</div>
  );
}
}

export default App;
