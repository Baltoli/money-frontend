import React, { Component } from 'react'

import Money from './Money';

class Cell extends Component {
  render() {
    if(this.props.value) {
      return(
        <div>{Money.toDisplayFormat(this.props.value)}</div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default Cell;
