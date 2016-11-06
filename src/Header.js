import React, { Component } from 'react';

import Name from './Name.js'

class Header extends Component {
  constructor(props) {
    super(props);

    this.items = this.props.names.map((n) =>
      <Name name={n} key={n}/>
    )
  }

  render() {
    return(
      <div>{this.items}</div>
    );
  }
}

export default Header;
