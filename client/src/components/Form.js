import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Form extends Component{
    state={
        firstName: '',
        lastName: '',
        idNo: '',
        result: '',
        data: []
    }


changeInput = (e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value
    this.setState({
        [name]: value
    })
}

/* push it to database */
 handleSubmit = (e) => {
    e.preventDefault();
        const data = {
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         idNo: this.state.idNo,
         result: this.state.result
}

axios({
    url: '/log/save',
    method: 'POST',
    data: data
})
.then(()=>{
    console.log('Data has been saved to backend.');
    this.resetFunction();
})
.catch(()=>{
    console.log('Error occurs during data save.')
})
} 

//reset func
resetFunction = ()=>{
    this.setState({
        firstName: '',
        lastName: '',
        idNo: '',
        result: ''
    })
}
 

  render(){
        console.log(this.state);
  return (
    <div className="App">
        {/* <h2>Form</h2>
        <p>Fill in the below input fields once you finished answering all questions!</p> */}
        <form onSubmit={this.handleSubmit} autoComplete="off" className="form">
            <input name="firstName" value={this.state.firstName} placeholder="insert first name" onChange={this.changeInput}/>
            <input name="lastName" value={this.state.lastName} placeholder="insert last name" onChange={this.changeInput}/>
            <input name="idNo" value={this.state.idNo} placeholder="insert id number" onChange={this.changeInput}/>
            <input name="result" value={this.state.result} placeholder="insert result" onChange={this.changeInput} />
            <button className="btn" resetFunction={this.resetFunction}>Submit</button>
        </form>
    </div>
  );
}
}

export default Form;
