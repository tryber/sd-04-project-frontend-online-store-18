// Absolute imports
import React from 'react';

// Relative imports
import BackLink from '../../components/BackLink';
import CartLink from '../../components/CartLink';
import AddToCart from '../../components/AddToCart/AddToCart';
import Rating from '../../components/Rating/Rating';

import './ProductDetail.css';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 1 };
  }

  changeQuant(operacao) {
    let atualNum = this.state.quantity;
    if ((atualNum + operacao) >= 1) {
      atualNum += operacao;
      this.setState({ quantity: atualNum });
      console.log(this.state.quantity);
    }
  }

  renderQuantButtons() {
    return (
      <div className="buttons-container">
        <button onClick={() => this.changeQuant(-1)}>
          <i className="fa fa-minus fa-lg" aria-hidden="true" />
        </button>
        <div className="number">{this.state.quantity}</div>
        <button onClick={() => this.changeQuant(1)}>
          <i className="fa fa-plus fa-lg" aria-hidden="true" />
        </button>
      </div>
    );
  }

  render() {
    const { location } = this.props;
    const { item } = location;
    return (
      <div>
        <div className="product-detail-container">
          <div className="top-buttons">
            <BackLink linkTo="/" />
            <CartLink />
          </div>
          <h4 data-testid="product-detail-name">{`${item.title} - R$ ${item.price}`}</h4>
          <div className="product-row">
            <img src={item.thumbnail} alt="item" />
            <div className="product-details">
              <ul className="product-detail-attributes">
                {item.attributes.map((attribute) => (
                  <li key={attribute.name}>{`${attribute.name}: ${attribute.value_name}`}</li>
                ))}
              </ul>
            </div>
          </div>
          {this.renderQuantButtons()}
          <AddToCart
            dataTestid="product-detail-add-to-cart"
            item={item}
            quantity={this.state.quantity}
            plusQuant={true}
          />
        </div>
        <div className="product-detail-container">
          <Rating />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
