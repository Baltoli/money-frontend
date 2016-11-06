import React, { Component } from 'react'

class Cell extends Component {
  render() {
    if(this.props.value) {
      return(
        <div>{this.props.value}</div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default Cell;
