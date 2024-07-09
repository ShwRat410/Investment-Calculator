import React, { Component } from 'react';
import headerImage from '../assets/investment-calculator-logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={headerImage}/>
        <h1>Investment Calculator</h1>
      </div>
    )
  }
}
