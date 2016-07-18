import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Button from './components/Button.js';
import Table from './components/Table.js';
import {case1, case2, case3, case4, setCase} from './utils/calculate.js';
require('!style!css!sass!./sass/main.scss');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentData: '-',
      history: [],
      rounds: [['-', '-', '-', '-']],
      correctCase: []
    };
    this.setData = this.setData.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  setData(data) {
    const ref = setCase(this.state.history, data);
    this.setState({
      history: [...this.state.history, data],
      currentData: data,
      correctCase: this.checkAnswer(data, this.state.rounds[0]),
      rounds: this.addRound(ref, this.checkAnswer(data, this.state.rounds[0]), this.state.rounds)
    });
  }
  addRound(ref, correct, rounds) {
    rounds[0] = ref;
    rounds.push(correct);
    return rounds;
  }
  checkAnswer(data, cases) {
    if(cases[0] === '-') {
        return [];
    } else {
      return cases.reduce((prev, current) => {
        if (current === data) {
          prev.push('/');
        } else {
          prev.push('X');
        }
        return prev;
      },[]);
    }
  }
  render(){
    console.log(`history ${this.state.history}`);
    return (
      <div className='container'>
        <Header currentData={this.state.currentData} />
        <Table rounds={this.state.rounds} currentData={this.state.currentData}/>
        <Button setData={this.setData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
