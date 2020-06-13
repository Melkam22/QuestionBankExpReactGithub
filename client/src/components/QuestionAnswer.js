import React, {useState} from 'react';
import '../App.css';

const QuestionAnswer = ({question, allOptions, correctAnswer}) =>{
    
    const [response, setResponse]= useState(allOptions); 

    return(
        <div className="quizAnswer">
               <div className="questionList">{question}</div>  

               {response.map((item, b)=>(
                   <button key={b} className="answerBtn" onClick={()=>{setResponse([item]); correctAnswer(item)}}>
                        {item}
                   </button>
               ))} 
        </div>
    )
}

export default QuestionAnswer;
