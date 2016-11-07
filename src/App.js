import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table.js'

import './App.css';

axios.defaults.baseURL = 'http://server.local'

class App extends Component {
  render() {
    return (
      <Table />
    );
  }
}

export default App;
