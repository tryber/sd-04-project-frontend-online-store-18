// Absolute imports
import React from 'react';
// Relative imports
import Categories from '../../components/Categories';
import Items from '../../components/Items/Items';
import SearchInput from '../../components/SearchInput/SearchInput';
import CartLink from '../../components/CartLink';

import './Home.css';
import * as api from '../../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: '',
      categories: [],
      inputValue: '',
      notFound: false,
      items: [],
    };

    this.apiButton = this.apiButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((err) => console.error(err.message));
  }

  async apiButton() {
    const { categoryId, inputValue } = this.state;
    return api
      .getProductsFromCategoryAndQuery(categoryId, inputValue)
      .then((data) => data.results)
      .then((items) => this.setState({ items }));
  }

  handleInput(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  async handleCategory(event) {
    const categoryId = event.target.id;
    await this.setState({ categoryId });
    this.apiButton();
  }

  render() {
    const { inputValue, notFound, categories, items } = this.state;
    if (notFound) return <div className="not-found">Not found!</div>;
    return (
      <div className="container">
        <aside className="categories">
          <Categories
            setCategoryId={(event) => this.handleCategory(event)}
            refreshItems={this.apiButton}
            categories={categories}
          />
        </aside>
        <div className="content">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="row">
            <SearchInput handleInput={(event) => this.handleInput(event)} inputValue={inputValue} />
            <button data-testid="query-button" type="button" onClick={() => this.apiButton()}>
              Api
            </button>
            <CartLink />
          </div>
          <Items items={items} />
        </div>
      </div>
    );
  }
}

export default Home;
