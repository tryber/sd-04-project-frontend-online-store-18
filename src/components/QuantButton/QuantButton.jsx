import React, { Component } from 'react';
import './QuantButton.css';

const backIndex = (id) => {
  if (!localStorage.crlId) localStorage.crlId = JSON.stringify([]);
  const ids = JSON.parse(localStorage.crlId);
  return ids.indexOf(id);
};

const changeStorage = (index, newNum) => {
  const itens = JSON.parse(localStorage.crlQuant);
  itens[index] = newNum;
  //callPrice;
  localStorage.crlQuant = JSON.stringify(itens);
};

export default class QuantButton extends Component {
  constructor(props) {
    super(props);
    const { numInitial } = props;
    this.state = { num: numInitial };
    this.changeQuant = this.changeQuant.bind(this);
  }

  changeQuant(operacao) {
    let atualNum = this.state.num;
    const { itemId } = this.props;
    if ((atualNum + operacao) >= 1) {
      atualNum += operacao;
      this.setState({ num: atualNum });
      const index = backIndex(itemId);
      changeStorage(index, atualNum);
    }
  }

  onClick(callPrice, operacao) {
    this.changeQuant(operacao)
    callPrice();
  }

  render() {
    const { dataTestIncrease, dataTestDecreate, callPrice } = this.props;
    return (
      <div className="buttons-container">
        <button data-testid={dataTestDecreate} onClick={() => this.onClick(callPrice, -1)}>
          <i className="fa fa-minus fa-lg" aria-hidden="true" />
        </button>
        <div className="number">{this.state.num}</div>
        <button data-testid={dataTestIncrease} onClick={() => this.onClick(callPrice, 1)}>
          <i className="fa fa-plus fa-lg" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
