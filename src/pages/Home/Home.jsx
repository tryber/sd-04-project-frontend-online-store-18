import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import Item from '../../components/Item/Item';

import './Home.css';
import * as api from '../../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: '',
      categories: [],
      inputValue: '',
      loading: true,
      notFound: false,
      items: [],
    };

    this.apiButton = this.apiButton.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) => this.setState({ categories, loading: false }))
      .catch((err) => console.error(err.message));
  }

  async apiButton() {
    const { categoryId, inputValue } = this.state;
    return api
      .getProductsFromCategoryAndQuery(categoryId, inputValue)
      .then((data) => data.results)
      .then((items) => this.setState({ items }));
  }

  render() {
    const { inputValue, loading, notFound, categories, items } = this.state;
    if (loading) return <div className="loading">loading...</div>;
    if (notFound) return <div className="not-found">Not found!</div>;
    return (
      <div className="container">
        <aside className="categories">
          <Categories
            setCategoryId={(event) => {
              this.setState({ categoryId: event.target.id });
            }}
            categories={categories}
          />
        </aside>
        <div className="content">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            data-testid="query-input"
            type="text"
            className="search-input"
            name="search-input"
            value={inputValue}
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
          <button data-testid="query-button" type="button" onClick={() => this.apiButton()}>
            Api
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart fa-2x" />
          </Link>
          <div className="items-list">
            <Item items={items} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
