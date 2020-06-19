import React from 'react';

const AddToCart = (props) => {
  const { item } = props;
  return (
    <button
      type="button"
      onClick={() => {
        const itemsOnCart = JSON.parse(localStorage.itemsOnCart);
        const updateItemsOnCart = [...itemsOnCart, item];
        localStorage.itemsOnCart = JSON.stringify(updateItemsOnCart);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
