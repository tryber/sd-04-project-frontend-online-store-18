import React, { Component } from 'react';
import './QuantButton.css';

export default class QuantButton extends Component {
  constructor (props) {
    super(props);
    const { itemId, numInitial } = props;
    this.state = {
			num: numInitial,
		};
	}

	changeQuant(operacao) {

	}
	
	render() {
		return (
			<div className="buttons-container">
				<button><i className="fa fa-minus fa-lg" aria-hidden="true" /></button>
				<div className="number">{this.state.num}</div>
				<button><i className="fa fa-plus fa-lg" aria-hidden="true" /></button>
			</div>
		);
	}
}
