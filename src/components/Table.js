import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const {rounds} = this.props;
    const test = [1,2,3,4];
    return (
      <div>
        <table>
          {
            rounds.map((round, index) => {
              return (
                (index === 0) ?
                <thead>
                  <tr key={index}>
                    {
                      round.map((data,index) => {
                        return (
                          <td key={index+data} className={(data === 'R')? 'red':'blue'}>{data}</td>
                        );
                      })
                    }
                  </tr>
                </thead>
                :
                <tbody>
                  <tr key={index}>
                    {
                      round.map((data,index) => {
                        return (
                          <td key={index+data} className={(data === '/')? 'correct':'wrong'}>{data}</td>
                        );
                      })
                    }
                  </tr>
                </tbody>
              );
            })
          }
        </table>
      </div>
    );
  }
}
