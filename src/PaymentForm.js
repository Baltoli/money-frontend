import React, { Component } from 'react';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { money : '' };
    this.moneyChanged = this.moneyChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  render() {
    return(
      <div>
        <select>
          {this.peopleOptions()}
        </select>

        <select>
          <option value="o">owes</option>
          <option value="p">paid</option>
        </select>

        <select>
          {this.peopleOptions()}
        </select>

        <input 
          type="text" 
          value={this.state.money}
          placeholder="£"
          onChange={this.moneyChanged}
        />

        <button
          onClick={this.submit}
        >Submit</button>
      </div>
    );
  }

  submit(event) {
    this.props.submit("Bruce", "Mary", 200);
  }

  moneyChanged(event) {
    const value = event.target.value;
    const newValue = value[0] === "£" ? value.substring(1) : value;
    const regex = /^[0-9]*\.?[0-9]?[0-9]?$/g;

    if(regex.test(newValue)) {
      this.setState({money : "£" + newValue});
    }
  }

  peopleOptions() {
    return this.props.people.map((person, index) =>
        <option value={person} key={index}>{person}</option>
    );
  }
}

export default PaymentForm;
