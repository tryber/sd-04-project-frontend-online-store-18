import React from 'react';
import { Link } from 'react-router-dom';

import './Item.css';

const Item = (props) => {
  const { items } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item.id} className="item">
          <p>{item.title}</p>
          <Link data-testid="product-detail-link" to={{ pathname: `/${item.id}`, item }}>
            <img src={item.thumbnail} alt="item" />
          </Link>
          <p>{`R$ ${item.price.toFixed(2)}`}</p>
          <button data-testid="product-add-to-cart" type="button">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Item;
