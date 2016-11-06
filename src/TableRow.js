import React, { Component } from 'react';

import Name from './Name.js'
import Cell from './Cell.js'

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.cells = props.names.map((name, index) =>
      <Cell 
        value={props.record[name]} 
        key={index}
      />
    );
  }

  render() {
    return(
      <div>
        <Name name={this.props.name} />
        {this.cells}
      </div>
    );
  }
}

export default TableRow;
