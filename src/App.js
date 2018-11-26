import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  state = {
    interestRate: '',
    monthlyPayment: '',
    minMonthlyPayment: '',
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const interestCostJSX = (
      <span>
        {((this.state.interestRate) / 12)*(this.state.loanAmount)}
      </span>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
        </header>
        <section>
          <MyForm onChange={this.handleInputChange}/>
        </section>
        <section>
          <span>{this.state.interestRate}</span>
          {interestCostJSX}
        </section>
      </div>
    );
  }
}

class MyForm extends Component {
  handleInputChange = (event) => {
    event.preventDefault();
    this.props.onChange(event);
  }
  render(){
    return(
      <form className="baseForm">
        <div className="labelInputContainer">
          <label for="interestRate">Annual Interest Rate</label>
          <input
          onChange={this.handleInputChange}
            className="baseInput"
            name="interestRate"
            type="number"
            />
        </div>
        <div className="labelInputContainer">
          <label  for="loanAmount">Loan Amount</label>
          <input
            onChange={this.handleInputChange}
            className="baseInput"
            name="loanAmount"
            type="number"
            />
        </div>
        <div className="labelInputContainer">
          <label for="loanLength">Loan Length</label>
          <div>
            <select>
              <option value="month">Months</option>
              <option value="year">Years</option>
            </select>
            <input
              onChange={this.handleInputChange}
              className="baseInput"
              name="loanLength"
              type="number"
              />
          </div>
        </div>
        <div className="labelInputContainer">
          <label for="minMonthlyPayment">Loan Amount</label>
          <input
            onChange={this.handleInputChange}
            name="minMonthlyPayment"
            className="baseInput"
            type="number"
          />
        </div>
      </form>
    )
  }
}

export default App;
