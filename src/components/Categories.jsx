import React from 'react';

const Categories = (props) => {
  const { categories, setCategoryId } = props;
  return (
    <div>
      <p>Categorias:</p>
      {categories.map(({ name, id }) => (
        <div key={id}>
          <label data-testid="category" htmlFor={id}>
            <input
              type="radio"
              name="category"
              id={id}
              value={name}
              onClick={setCategoryId}
            />
            {name}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Categories;
