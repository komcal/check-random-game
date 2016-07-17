import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Button from './components/Button.js';
import Table from './components/Table.js';
import {case1, case2, case3, case4, setCase} from './utils/calculate.js';
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
      rounds: [ref]
    });
  }
  checkAnswer(data, cases) {
    return cases.reduce((prev, current, index) => {
      if (current === data) {
        prev.push(index+1);
      }
      return prev;
    },[]);
  }
  render(){
    console.log(`history ${this.state.history}`);
    console.log(`correct ${this.state.correctCase}`);
    return (
      <div className='container'>
        <Header currentData={this.state.currentData} />
        <span>next round</span>
        <Table rounds={this.state.rounds} currentData={this.state.currentData}/>
        <span>case correct: </span>
        {
          this.state.correctCase.map((data) => {
            return (
              <span key={data}>{data},</span>
            );
          })
        }
        <Button setData={this.setData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
