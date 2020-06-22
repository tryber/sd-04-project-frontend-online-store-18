import React, { Component } from 'react';
import BackLink from '../../components/BackLink';
import Form from './formsBuy';
import CodBarras from './codBarras';
import Cartao from './payCartao';

import './InfoBuy.css';

export default class InfoBuy extends Component {
  render() {
    return (
      <div>
        <BackLink linkTo="/cart" />
        <Form />
        <div className="payment-container">
          <h3>Método de pagamento</h3>
          <CodBarras />
          <Cartao />
        </div>
      </div>
    );
  }
}
