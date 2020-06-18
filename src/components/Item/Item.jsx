import React from 'react';
import './Item.css';

const Item = (props) => {
  const { items } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item.id} className="item">
          <img src={item.thumbnail} alt="item" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
