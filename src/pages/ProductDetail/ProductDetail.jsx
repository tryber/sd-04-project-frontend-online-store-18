// Absolute imports
import React from 'react';

// Relative imports
import BackLink from '../../components/BackLink';
import CartLink from '../../components/CartLink';

import './ProductDetail.css';

class ProductDetail extends React.Component {
  render() {
    const { location } = this.props;
    const { item } = location;
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
      </div>
    );
  }
}

export default ProductDetail;
