import React, { Component } from 'react';
import BackLink from '../../components/BackLink';

import './InfoBuy.css';

export default class InfoBuy extends Component {
  render() {
    return (
      <div>
        <BackLink linkTo="/cart" />
        <div className="infoBuy-container">
          <h3>Informações do Comprador</h3>
          <form className="infoBuy-form">
            <input
              type="text"
              name="nome"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
            />
            <input type="text" name="cpf" data-testid="checkout-cpf" placeholder="CPF" />
            <input type="text" name="meil" data-testid="checkout-email" placeholder="Email" />
            <input
              type="text"
              name="telefone"
              data-testid="checkout-phone"
              placeholder="Telefone"
            />
            <input type="text" name="cep" data-testid="checkout-cep" placeholder="CEP" />
            <input
              type="text"
              name="endereco"
              data-testid="checkout-address"
              placeholder="Endereço"
            />
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
        <div className="payment-container">
          <h3>Método de pagamento</h3>
          <h4>Boleto</h4>
          <div className="container-codbar">
            <input type="radio" id="code-bar" />
            <i className="fas fa-barcode fa-4x" />
          </div>
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
        </div>
      </div>
    );
  }
}
