import React from 'react';

const Categories = (props) => {
  console.log(props);
  const { categories } = props;
  return (
    <div>
      <p>Categorias:</p>
      {categories.map(({ name, id }) => (
        <div>
          <label data-testid="category" key={id} htmlFor={id}>
            <input type="radio" name="category" id={id} value={name} />
            {name}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Categories;
