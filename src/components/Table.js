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
                <tr key={index}>
                  {
                    round.map((data,index) => {
                      return (
                        <td key={index+data}>{data}</td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </table>
      </div>
    );
  }
}
