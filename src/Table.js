import 'babel-polyfill';
import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header.js'
import TableRow from './TableRow.js'

class Table extends Component {
  render() {
    return(
      <div>
        <Header columns={this.columns()}/>
        <div>{this.rows()}</div>
      </div>
    );
  }

  rows() {
    return Object.keys(this.props.record).map((key, index) =>
      <TableRow 
        name={key} 
        record={this.props.record[key]} 
        columns={this.columns()}
        key={index} 
      />
    );
  }

  columns() {
    let columns = new Set();
    for(let key of Object.keys(this.props.record)) {
      for(let name of Object.keys(this.props.record[key])) {
        columns.add(name);
      }
    }

    return Array.from(columns).sort(this.sortToLast("House"));
  }

  sortToLast(str) {
    return function(a, b) {
      if (a === str) { return 1; }
      else if (b === str) { return -1; }
      else return a.localeCompare(b);
    }
  }
}

export default Table;
