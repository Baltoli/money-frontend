import React, { Component } from 'react';

import Name from './Name.js'
import Cell from './Cell.js'
import './Table.css'

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.cells = props.names.map((name, index) =>
      <div className="Cell" key={index} >
        <Cell value={props.record[name]} />
      </div>
    );
  }

  render() {
    return(
      <div className="Row">
        <div className="Cell">
          <Name name={this.props.name} />
        </div>
        {this.cells}
      </div>
    );
  }
}

export default TableRow;
