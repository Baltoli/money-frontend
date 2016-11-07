import React, { Component } from 'react';

import './Header.css'
import Name from './Name.js'

class Header extends Component {
  constructor(props) {
    super(props);

    this.items = this.props.names.map((n) =>
      <div className="NameContainer" key={n}>
        <Name name={n} />
      </div>
    )
  }

  render() {
    return(
      <div className="Header">
        <div className="NameContainer"></div>
        {this.items}
      </div>
    );
  }
}

export default Header;
