import React, { Component } from 'react';

import './codBarras.css';

export default class codBarras extends Component {
  render() {
    return (
      <div>
        <h4>Boleto</h4>
        <div className="container-codbar">
          <input type="radio" id="code-bar" />
          <i className="fas fa-barcode fa-4x" />
        </div>
      </div>
    );
  }
}
