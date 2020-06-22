import React, { Component } from 'react';
import BackLink from '../../components/BackLink';
import Form from '../../components/Forms/formsBuy';
import CodBarras from '../../components/Forms/codBarras';
import Cartao from '../../components/Forms/payCartao';

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
