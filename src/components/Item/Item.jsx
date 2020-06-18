import React from 'react';
import { Link } from 'react-router-dom';

import './Item.css';

const Item = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div className="items-container">
      {items.map(({ id, title, thumbnail, price }) => (
        <div data-testid="product" key={id} className="item">
          <p>{title}</p>
          <Link to={`/${id}`}>
            <img src={thumbnail} alt="item" />
          </Link>
          <p>{`R$ ${price.toFixed(2)}`}</p>
          <button data-testid="product-add-to-cart" type="button">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Item;
