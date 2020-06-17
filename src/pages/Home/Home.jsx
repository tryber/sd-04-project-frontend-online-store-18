import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '', loading: true, notFound: false };
  }

  render() {
    const { inputValue, loading, notFound } = this.state;
    // if (loading) return <div className="loading">loading...</div>;

    if (notFound) return <div className="not-found">Not found!</div>;

    return (
      <div className="container">
        <aside className="categorys">
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
        </aside>
        <div className="content">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            type="text"
            className="search-input"
            name="search-input"
            value={inputValue}
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
          <i className="fas fa-shopping-cart fa-2x" />
          <div className="items-list">ITENS LISTADOS</div>
        </div>
      </div>
    );
  }
}

export default Home;
