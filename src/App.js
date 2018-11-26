import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
        </header>
        <section>
          <MyForm/>
        </section>
      </div>
    );
  }
}

class MyForm extends Component {
  state = {
    annualInterestRate: null,
    loanLength: null,
    monthlyPayment: null,
    minMonthlyPayment: null,
  }
  render(){
    return(
      <form className="baseForm">
        <div className="labelInputContainer">
          <label for="interestRate">Annual Interest Rate</label>
          <input className="baseInput" type="text" name="interestRate"/>
        </div>
        <div className="labelInputContainer">
          <label  for="interestRate">Loan Amount</label>
          <input className="baseInput" type="text" name="interestRate" />
        </div>
        <div className="labelInputContainer">
          <label for="interestRate">Loan Length</label>
          <div>
            <select>
              <option value="month">Months</option>
              <option value="year">Years</option>
            </select>
            <input className="baseInput" type="text" name="interestRate"/>
          </div>
        </div>
        </form>
    )
  }
}

export default App;
