// Absolute imports
import React from 'react';
import { Link } from 'react-router-dom';
// Relative imports
import BackLink from '../../components/BackLink';
import QuantButton from '../../components/QuantButton/QuantButton';

import './ShoppingCart.css';

const pickQuantify = (index) => {
  if (!localStorage.crlQuant) localStorage.crlQuant = JSON.stringify([]);
  const quant = JSON.parse(localStorage.crlQuant);
  return quant[index];
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.updateState = this.updateState.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    if (!localStorage.itemsOnCart) localStorage.itemsOnCart = JSON.stringify([]);
    const items = JSON.parse(localStorage.itemsOnCart);
    // console.log(items);
    this.setState({ items });
  }

  finalPrice() {
    let price = 0;

    this.state.items.map((item, index) => {
      price += item.price * pickQuantify(index);
      return price;
    });
    return price;
  }

  renderItems() {
    const { items } = this.state;
    return items.length === 0 ? (
      <div className="shopping-cart-empty" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <i className="fas fa-box-open fa-5x" />
      </div>
    ) : (
      items.map((item, index) => (
        <div key={`${item.id}`} className="itens-container">
          <img src={item.thumbnail} alt="item" />
          <div data-testid="shopping-cart-product-name" className="item-title">
            {item.title}
          </div>
          <div data-testid="shopping-cart-product-quantity" className="item-quantity">
            <QuantButton
              dataTestIncrease="product-increase-quantity"
              dataTestDecreate="product-decrease-quantity"
              itemId={item.id}
              numInitial={pickQuantify(index)}
            />
          </div>
        </div>
      ))
    );
  }

  render() {
    return (
      <div className="shopping-cart">
        <BackLink linkTo="/" />
        <div className="shopping-cart-container">
          <div className="row">
            <br />
            {<i className="fas fa-shopping-cart fa-2x" data-testeid="shopping-cart-button" />}
            <p>Carrinho de Compras</p>
          </div>
          {this.renderItems()}
          <div>
            <p />
            Valor Total da Compra: R$ {this.finalPrice()}
          </div>
          <Link to="/checkout">
            <span data-testid="checkout-products">Finalizar Compra</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
