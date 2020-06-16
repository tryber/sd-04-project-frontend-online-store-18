import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' };
  }

  render() {
    return (
      <div className="container">
        <label data-testid="home-initial-message" htmlFor="search-input">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            name="search-input"
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
        </label>
        <div className="items-list">LISTA DE ITENS</div>
      </div>
    );
  }
}

export default Home;
