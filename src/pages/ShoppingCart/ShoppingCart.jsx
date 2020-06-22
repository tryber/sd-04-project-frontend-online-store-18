// Absolute imports
import React from 'react';
// Relative imports
import BackLink from '../../components/BackLink';
import QuantButton from '../../components/QuantButton/QuantButton';

import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [], };

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

  pickQuantify(index) {
    //let quantify = 0;

    if (!localStorage.crlQuant) localStorage.crlQuant = JSON.stringify([]);
    const quant = JSON.parse(localStorage.crlQuant);
    return quant[index];
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
        //const = 
        <div key={`${item.id}`} className="itens-container">
          <img src={item.thumbnail} alt="item"/>
          <span data-testid="shopping-cart-product-name" className="item-title">
            {item.title}
          </span>
          <div data-testid="shopping-cart-product-quantity" className="item-quantity">
            <QuantButton itemId={item.id} numInitial={this.pickQuantify(index)} />
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
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
