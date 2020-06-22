import React, { Component } from 'react';

import './payCartao.css';

export default class payCartao extends Component {
  render() {
    return (
      <div className="container-card">
        <h4>Cartão</h4>
        <div className="container-card-input">
          <input type="radio" id="card-visa" />
          <label htmlFor="card-visa">Visa</label>
          <i className="far fa-credit-card fa-3x" />
          <input type="radio" id="card-master" />
          <label htmlFor="card-master">MasterCard</label>
          <i className="far fa-credit-card fa-3x" />
          <input type="radio" id="card-elo" />
          <label htmlFor="card-elo">Elo</label>
          <i className="far fa-credit-card fa-3x" />
        </div>
      </div>
    );
  }
}
