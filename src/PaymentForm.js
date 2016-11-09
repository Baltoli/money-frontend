import React, { Component } from 'react';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { money : '' };
    this.moneyChanged = this.moneyChanged.bind(this);
  }

  render() {
    return(
      <div>
        <select>
          <option value="f">gufe</option>
        </select>

        <span>owes</span>

        <select>
          <option value="f">gufe</option>
        </select>

        <input 
          type="text" 
          value={this.state.money}
          placeholder="£"
          onChange={this.moneyChanged}
        />
      </div>
    );
  }

  moneyChanged(event) {
    const value = event.target.value;
    const newValue = value[0] === "£" ? value.substring(1) : value;
    const regex = /^[0-9]*\.?[0-9]?[0-9]?$/g;

    if(regex.test(newValue)) {
      this.setState({money : "£" + newValue});
    }
  }
}

export default PaymentForm;
