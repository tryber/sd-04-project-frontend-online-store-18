// Absolute imports
import React from 'react';
// Relative imports
import BackLink from '../../components/BackLink';

import './ShoppingCart.css';

const ShoppingCart = () => (
  <div className="shopping-cart">
    <BackLink linkTo="/" />
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
