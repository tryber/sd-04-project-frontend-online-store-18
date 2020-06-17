import React from 'react';
import { Link } from 'react-router-dom';
import Categorys from '../../components/Categorys';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '', loading: false, notFound: false };
  }

  render() {
    const { inputValue, loading, notFound } = this.state;
    if (loading) return <div className="loading">loading...</div>;
    if (notFound) return <div className="not-found">Not found!</div>;
    return (
      <div className="container">
        <aside className="categorys">
          <Categorys />
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
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart fa-2x" />
          </Link>
          <div className="items-list">ITENS LISTADOS</div>
        </div>
      </div>
    );
  }
}

export default Home;
