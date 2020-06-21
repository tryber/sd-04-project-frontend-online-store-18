// Absolute imports
import React from 'react';
// Relative imports
import BackLink from '../../components/BackLink';

import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.getQuantity = this.getQuantity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  getQuantity(itemTitle) {
    const { items } = this.state;
    const quantity = items.filter(({ title }) => itemTitle === title).length;
    return quantity;
  }

  updateState() {
    if (!localStorage.itemsOnCart) localStorage.itemsOnCart = JSON.stringify([]);
    const items = JSON.parse(localStorage.itemsOnCart);
    // console.log(items);
    this.setState({ items });
  }

  renderItems() {
    const { items } = this.state;
    return items.length === 0 ? (
      <div className="shopping-cart-empty" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <i className="fas fa-box-open fa-5x" />
      </div>
    ) : (
      items.map((item) => (
        <div key={`${item.id}${this.getQuantity(item.title)}`}>
          <span data-testid="shopping-cart-product-name" className="item-title">
            {item.title}
          </span>
          <span data-testid="shopping-cart-product-quantity" className="item-quantity">
            {this.getQuantity(item.title)}
          </span>
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
            <i className="fas fa-shopping-cart fa-2x" data-testeid="shopping-cart-button" />
            <p>Carrinho de Compras</p>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
