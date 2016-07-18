import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='btn_wrapper'>
        <button onClick={this.props.setData.bind(this, 'R')} className='btn red'>RED</button>
        <button onClick={this.props.setData.bind(this, 'B')} className='btn blue'>BLUE</button>
      </div>
    );
  }
}
