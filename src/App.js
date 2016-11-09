import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table.js';
import PaymentForm from './PaymentForm';

import './App.css';

axios.defaults.baseURL = 'http://server.local'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      record: {},
      people: []
    }

    this.reloadData = this.reloadData.bind(this);
    this.updateState = this.updateState.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
  }

  render() {
    return (
      <div>
        <Table 
          record={this.state.record} 
        />

        <PaymentForm 
          people={this.state.people}
          submit={this.newTransaction}
        />
      </div>
    );
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    const active = axios.get('/active');
    const people = axios.get('/people');
    axios.all([active, people])
      .then(axios.spread(this.updateState))
      .catch(error => console.log(error));
  }

  updateState(active, people) {
    this.setState({
      record: active.data,
      people: people.data["people"]
    });
  }

  newTransaction(from, to, amount) {
    axios.post('/transactions', {
      to: to,
      from: from,
      amount: amount
    })
    .then(response => this.reloadData())
    .catch(error => console.log(error));
  }
}

export default App;
