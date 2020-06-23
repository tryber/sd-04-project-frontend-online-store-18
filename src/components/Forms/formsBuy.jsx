import React, { Component } from 'react';

import './formsBuy.css';

export default class formsBuy extends Component {
  render() {
    return (
      <div>
        <div className="infoBuy-container">
          <h3>Informações do Comprador</h3>
          <form className="infoBuy-form">
            <input type="text" data-testid="checkout-fullname" placeholder="Nome Completo" />
            <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
            <input type="text" data-testid="checkout-email" placeholder="Email" />
            <input type="text" data-testid="checkout-phone" placeholder="Telefone" />
            <input type="text" data-testid="checkout-cep" placeholder="CEP" />
            <input type="text" data-testid="checkout-address" placeholder="Endereço" />
            <input type="text" name="complemento" placeholder="Complemento" />
            <input type="text" name="numero" placeholder="Numero" />
            <input type="text" name="cidade" placeholder="Cidade" />
            <select id="uf">
              <option value="" disabled selected>
                Estado
              </option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}
