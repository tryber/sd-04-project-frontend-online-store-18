export async function getCategories() {
  // implement here
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categorias) => categorias.json())
    .then((data) => data)
    .catch((error) => error);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((category) => category.json())
    .then((data) => data)
    .catch((error) => error);
}
