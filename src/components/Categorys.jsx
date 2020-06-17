import React from 'react';

const Categorys = (props) => {
  return (
    <React.Fragment>
      <p>Categorias:</p>
      <label htmlFor="category-1">
        <input type="radio" name="category" id="category-1" value="category-1" />
        Categoria 1
      </label>
      <br />
      <label htmlFor="category-2">
        <input type="radio" name="category" id="category-2" value="category-2" />
        Categoria 2
      </label>
      <br />
      <label htmlFor="category-3">
        <input type="radio" name="category" id="category-3" value="category-3" />
        Categoria 3
      </label>
      <br />
      <label htmlFor="category-4">
        <input type="radio" name="category" id="category-4" value="category-4" />
        Categoria 4
      </label>
    </React.Fragment>
  );
};

export default Categorys;
