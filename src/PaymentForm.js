import React, { Component } from 'react';

import Money from './Money';

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      money : '',
      from : '',
      to : '',
      direction: 1
    };

    this.moneyChanged = this.moneyChanged.bind(this);
    this.fromChanged = this.fromChanged.bind(this);
    this.toChanged = this.toChanged.bind(this);
    this.directionChanged = this.directionChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  render() {
    return(
      <div>
        <select onChange={this.fromChanged}>
          {this.peopleOptions()}
        </select>

        <select onChange={this.directionChanged}>
          <option value="o">owes</option>
          <option value="p">paid</option>
        </select>

        <select onChange={this.toChanged}>
          {this.peopleOptions()}
        </select>

        <input 
          type="text" 
          value={"£" + this.state.money}
          placeholder="£"
          onChange={this.moneyChanged}
        />

        <button
          onClick={this.submit}
        >Submit</button>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.from === '') {
      this.setState({ from: nextProps.people[0] || ''});
    }

    if(this.state.to === '') {
      this.setState({ to: nextProps.people[0] || ''});
    }
  }

  submit(event) {
    this.props.submit(
      this.state.from, 
      this.state.to,
      Money.toServerCurrencyFormat(this.state.money) * this.state.direction
    );
  }

  moneyChanged(event) {
    const value = event.target.value;
    const newValue = value[0] === "£" ? value.substring(1) : value;
    const regex = /^[0-9]*\.?[0-9]?[0-9]?$/g;

    if(regex.test(newValue)) {
      this.setState({money : newValue});
    }
  }

  fromChanged(event) {
    this.setState({ from : event.target.value });
  }

  toChanged(event) {
    this.setState({ to : event.target.value });
  }

  directionChanged(event) {
    const direction = event.target.value === 'p' ? -1 : 1;
    this.setState({ direction : direction });
  }

  peopleOptions() {
    return this.props.people.map((person, index) =>
        <option value={person} key={index}>{person}</option>
    );
  }
}

export default PaymentForm;
