import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table.js'

import './App.css';

axios.defaults.baseURL = 'http://server.local'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      record: {}
    }
  }

  render() {
    return (
      <Table record={this.state.record} />
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
}

export default App;
