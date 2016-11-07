import React, { Component } from 'react';

import Name from './Name.js'
import Cell from './Cell.js'
import './Table.css'

class TableRow extends Component {
  render() {
    return(
      <div className="Row">
        <div className="Cell">
          <Name name={this.props.name} />
        </div>
        {this.cells()}
      </div>
    );
  }

  cells() {
    return this.props.names.map((name, index) =>
      <div className="Cell" key={index} >
        <Cell value={this.props.record[name]} />
      </div>
    );
  }
}

export default TableRow;
