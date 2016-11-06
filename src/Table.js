import React, { Component } from 'react';

import Header from './Header.js'
import TableRow from './TableRow.js'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [
        "Alex", "Alice", "Bruce", "Mary", "Mollie", "Tim", "House"
      ],
      record: {
        "Bruce" : {
          "Mary" : 200
        }
      }
    };

    this.rows = Object.keys(this.state.record).map((key, index) =>
      <TableRow 
        name={key} 
        record={this.state.record[key]} 
        names={this.state.names}
        key={index} 
      />
    );
  }

  render() {
    return(
      <div>
        <Header names={this.state.names}/>
        <div>{this.rows}</div>
      </div>
    );
  }
}

export default Table;
