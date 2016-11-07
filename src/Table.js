import 'babel-polyfill';
import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header.js'
import TableRow from './TableRow.js'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      record: {}
    };
  }

  render() {
    return(
      <div>
        <Header names={this.names()}/>
        <div>{this.rows()}</div>
      </div>
    );
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    axios.get('/active')
      .then((response) =>
        this.setState({
          record: response.data
        })
      );
  }

  rows() {
    return Object.keys(this.state.record).map((key, index) =>
      <TableRow 
        name={key} 
        record={this.state.record[key]} 
        names={this.names()}
        key={index} 
      />
    );
  }

  names() {
    let names = new Set();
    for(let key of Object.keys(this.state.record)) {
      for(let name of Object.keys(this.state.record[key])) {
        names.add(name);
      }
    }

    const x = Array.from(names).sort(this.sortToLast("House"));
    console.log(x);
    return x;
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
