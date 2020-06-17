import React from 'react';
import { Link } from 'react-router-dom';

import './ShoppingCart.css';

const ShoppingCart = () => (
  <div className="shopping-cart">
    <Link to="/" className="back-button">
      <i className="fas fa-long-arrow-alt-left fa-2x" />
      <span className="back-button-text">Voltar</span>
    </Link>
    <div className="shopping-cart-container">
      <div className="row">
        <br />
        <i className="fas fa-shopping-cart fa-2x" data-testeid="shopping-cart-button" />
        <p>Carrinho de Compras</p>
      </div>
      <div className="shopping-cart-empty" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <i className="fas fa-box-open fa-5x" />
      </div>
    </div>
  </div>
);
export default ShoppingCart;
