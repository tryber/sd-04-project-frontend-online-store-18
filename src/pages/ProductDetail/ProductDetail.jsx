import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

class ProductDetail extends React.Component {
  render() {
    const { location } = this.props;
    const { item } = location.state;
    return (
      <div className="product-detail-container">
        <div className="top-buttons">
          <Link to="/" className="back-button">
            <i className="fas fa-long-arrow-alt-left fa-2x" />
            <span className="back-button-text">Voltar</span>
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart fa-2x" />
          </Link>
        </div>
        <p>{`${item.title} - R$ ${item.price}`}</p>
        <div className="product-row">
          <img src={item.thumbnail} alt="item" />
          <div className="product-details">
            <ul>
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
