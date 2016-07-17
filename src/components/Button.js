import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.setData.bind(this, 'R')}>RED</button>
        <button onClick={this.props.setData.bind(this, 'B')}>BLUE</button>
      </div>
    );
  }
}
