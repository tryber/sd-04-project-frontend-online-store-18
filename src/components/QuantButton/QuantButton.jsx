import React, { Component } from 'react';
import './QuantButton.css';

export default class QuantButton extends Component {
  constructor(props) {
    super(props);
    const { numInitial } = props;
    this.state = { num: numInitial };
    this.backIndex = this.backIndex.bind(this);
    this.changeStorage = this.changeStorage.bind(this);
  }

  backIndex(id) {
    if (!localStorage.crlId) localStorage.crlId = JSON.stringify([]);
    const ids = JSON.parse(localStorage.crlId);
    return ids.indexOf(id);
  }

  changeStorage(index, newNum) {
    const itens = JSON.parse(localStorage.crlQuant);
    itens[index] = newNum;
    localStorage.crlQuant = JSON.stringify(itens);
  }

  changeQuant(operacao) {
    let atualNum = this.state.num;
    const { itemId } = this.props;
    if ((atualNum + operacao) >= 1) {
      atualNum += operacao;
      this.setState({ num: atualNum });
      const index = this.backIndex(itemId);
      this.changeStorage(index, atualNum);
    }
  }

  render() {
    return (
      <div className="buttons-container">
        <button onClick={() => this.changeQuant(-1)}>
          <i className="fa fa-minus fa-lg" aria-hidden="true" />
        </button>
        <div className="number">{this.state.num}</div>
        <button onClick={() => this.changeQuant(1)}>
          <i className="fa fa-plus fa-lg" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
