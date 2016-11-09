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
    axios.get('/active')
      .then((response) =>
        this.setState({
          record: response.data
        })
      )
      .catch(function(error) {
        console.log(error);
      });

    axios.get('/people')
      .then((response) =>
        this.setState({
          people: response.data["people"]
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  newTransaction(from, to, amount) {
    axios.post('/transactions', {
      to: to,
      from: from,
      amount: amount
    })
    .then(function(response) {
      this.reloadData();
    }.bind(this))
    .catch(function(error) {
      console.log(error);
    });
  }

  toServerCurrencyFormat(amount) {
    return amount;
  }
}

export default App;
