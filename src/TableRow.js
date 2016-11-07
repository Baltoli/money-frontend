import React, { Component } from 'react';

import Name from './Name.js'
import Cell from './Cell.js'
import './TableRow.css'

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.cells = props.names.map((name, index) =>
      <div className="CellContainer" key={index} >
        <Cell value={props.record[name]} />
      </div>
    );
  }

  render() {
    return(
      <div className="TableRow">
        <div className="CellContainer">
          <Name name={this.props.name} />
        </div>
        {this.cells}
      </div>
    );
  }
}

export default TableRow;
