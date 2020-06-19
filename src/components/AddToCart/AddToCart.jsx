import React from 'react';

const AddToCart = (props) => {
  const { item, dataTestid } = props;

  const addToCart = (itemParam) => {
    if (!localStorage.itemsOnCart) localStorage.itemsOnCart = JSON.stringify([]);
    const itemsOnCart = JSON.parse(localStorage.itemsOnCart);
    const updateItemsOnCart = [...itemsOnCart, itemParam];
    localStorage.itemsOnCart = JSON.stringify(updateItemsOnCart);
  };
  return (
    <button data-testid={dataTestid} type="button" onClick={() => addToCart(item)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
