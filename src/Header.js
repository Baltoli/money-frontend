import React, { Component } from 'react';

import './Table.css'
import Name from './Name.js'

class Header extends Component {
  render() {
    return(
      <div className="Row">
        <div className="Cell"></div>
        {this.items()}
      </div>
    );
  }

  items() {
    return this.props.columns.map((n) =>
      <div className="Cell" key={n}>
        <Name name={n} />
      </div>
    )
  }
}

export default Header;
