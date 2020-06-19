// Absolute imports
import React from 'react';

// Relative imports
import BackLink from '../../components/BackLink';
import CartLink from '../../components/CartLink';
import AddToCart from '../../components/AddToCart/AddToCart';

import './ProductDetail.css';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 1 };
  }

  render() {
    const { location } = this.props;
    const { item } = location;
    const { quantity } = this.state;
    return (
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
        <AddToCart dataTestid="product-detail-add-to-cart" item={item} quantity={quantity} />
      </div>
    );
  }
}

export default ProductDetail;
