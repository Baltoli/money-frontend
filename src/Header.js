import React, { Component } from 'react';

import './Table.css'
import Name from './Name.js'

class Header extends Component {
  constructor(props) {
    super(props);

    this.items = this.props.names.map((n) =>
      <div className="Cell" key={n}>
        <Name name={n} />
      </div>
    )
  }

  render() {
    return(
      <div className="Row">
        <div className="Cell"></div>
        {this.items}
      </div>
    );
  }
}

export default Header;
