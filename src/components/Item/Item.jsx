import React from 'react';
import './Item.css';

const Item = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <div>
          <img src={item.thumbnail} alt="item" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
