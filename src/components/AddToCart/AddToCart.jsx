import React from 'react';

const AddToCart = (props) => {
  const { item, dataTestid } = props;

  const updateCrtQuant = (idWanted) => {
    const itemsOnCrlId = JSON.parse(localStorage.crlId);
    const itemsOnCrlQuant = JSON.parse(localStorage.crlQuant);
    const indexChange = itemsOnCrlId.indexOf(idWanted);
    if (itemsOnCrlQuant[indexChange]) {
      itemsOnCrlQuant[indexChange] += 1;
    } else {
      itemsOnCrlQuant[indexChange] = 1;
    }
    // console.log(itemsOnCrlQuant);
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
      };
    })
    return respOfCall;
  };

  const initStorage = (itemParam) => {
    localStorage.itemsOnCart = JSON.stringify([]);

    // crlId === Controlador do Id;
    localStorage.crlId = JSON.stringify([]);
    updateCrtId(Object.values(itemParam)[0]);

    // crlQuant === Controlador da quantidade dos produtos;
    localStorage.crlQuant = JSON.stringify([]);
    updateCrtQuant(Object.values(itemParam)[0]);
  };

  const auxiliarAddCArt = (itemParam, itemsOnCart, updateItemsOnCart) => {
    if (checkEquals(itemParam, itemsOnCart)) {
      updateItemsOnCart.pop();
      updateCrtQuant(Object.values(itemParam)[0]);
    } else {
      updateCrtId(Object.values(itemParam)[0]);
      updateCrtQuant(Object.values(itemParam)[0]);
    }
    return updateItemsOnCart;
  };

  const addToCart = (itemParam) => {
    if (!localStorage.itemsOnCart) {
      initStorage(itemParam);
    }
    const itemsOnCart = JSON.parse(localStorage.itemsOnCart);
    let updateItemsOnCart = [...itemsOnCart, itemParam];
    if (itemsOnCart.length !== 0) {
      updateItemsOnCart = auxiliarAddCArt(itemParam, itemsOnCart, updateItemsOnCart);
    }
    localStorage.itemsOnCart = JSON.stringify(updateItemsOnCart);
    // console.log();
  };
  return (
    <button data-testid={dataTestid} type="button" onClick={() => addToCart(item)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
