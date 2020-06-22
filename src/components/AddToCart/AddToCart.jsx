import React from 'react';

const updateCrtQuant = (idWanted, quantity, plusQuant) => {
  console.log(quantity);
  const itemsOnCrlId = JSON.parse(localStorage.crlId);
  const itemsOnCrlQuant = JSON.parse(localStorage.crlQuant);
  const indexChange = itemsOnCrlId.indexOf(idWanted);
  if(!quantity) quantity = 1;
  if (itemsOnCrlQuant[indexChange] && /*(itemsOnCrlQuant[indexChange] + 1) >= quantity*/ !plusQuant) {
    itemsOnCrlQuant[indexChange] += 1;
  } else if (itemsOnCrlQuant[indexChange] && plusQuant) {
    itemsOnCrlQuant[indexChange] += quantity;
  } else {
    itemsOnCrlQuant[indexChange] = quantity;
  }
  localStorage.crlQuant = JSON.stringify(itemsOnCrlQuant);
};

const updateCrtId = (newId) => {
  const itemsOnCrl = JSON.parse(localStorage.crlId);
  const updateItemsOnCrl = [...itemsOnCrl, newId];
  localStorage.crlId = JSON.stringify(updateItemsOnCrl);
};

const checkEquals = (item2Put, itensSaved) => {
  const comparacaoItem = Object.values(item2Put)[0];
  let respOfCall = false;

  itensSaved.forEach((element) => {
    if (Object.values(element)[0] === comparacaoItem) {
      respOfCall = true;
    }
  });
  return respOfCall;
};

const initStorage = (itemParam, quantity, plusQuant) => {
  localStorage.itemsOnCart = JSON.stringify([]);
  // crlId === Controlador do Id;
  localStorage.crlId = JSON.stringify([]);
  updateCrtId(Object.values(itemParam)[0]);

  // crlQuant === Controlador da quantidade dos produtos;
  localStorage.crlQuant = JSON.stringify([]);
  updateCrtQuant(Object.values(itemParam)[0], quantity, plusQuant);
};

const auxAddToCart = (itemParam, itemsOnCart, updateItemsOnCart, quantity, plusQuant) => {
  if (checkEquals(itemParam, itemsOnCart)) {
    updateItemsOnCart.pop();
  } else {
    updateCrtId(Object.values(itemParam)[0]);
  }
  updateCrtQuant(Object.values(itemParam)[0], quantity, plusQuant);
  return updateItemsOnCart;
};

const AddToCart = (props) => {
  const { item, dataTestid, quantity, plusQuant } = props;

  const addToCart = (itemParam) => {
    if (!localStorage.itemsOnCart) {
      initStorage(itemParam, quantity, plusQuant);
    }
    const itemsOnCart = JSON.parse(localStorage.itemsOnCart);
    let updateItemsOnCart = [...itemsOnCart, itemParam];
    if (itemsOnCart.length !== 0) {
      updateItemsOnCart = auxAddToCart(itemParam, itemsOnCart, updateItemsOnCart, quantity, plusQuant);
    }
    localStorage.itemsOnCart = JSON.stringify(updateItemsOnCart);
  };
  return (
    <button data-testid={dataTestid} type="button" onClick={() => addToCart(item)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
