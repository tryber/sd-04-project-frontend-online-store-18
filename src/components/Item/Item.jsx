import React from 'react';
import './Item.css';

const Item = (props) => {
  const { items } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item.id} className="item">
          <p>{item.title}</p>
          <img src={item.thumbnail} alt="item" />
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
