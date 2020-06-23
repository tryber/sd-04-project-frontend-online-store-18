import React from 'react';
import ReactStars from 'react-stars';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', message: '', rating: null };
    this.handleRating = this.handleRating.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleRating(newRating) {
    this.setState({ rating: newRating });
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="rating-container">
        <input type="email" name="email" placeholder="Email" onChange={this.updateState} />
        <ReactStars
          count={5}
          onChange={this.handleRating}
          value={rating}
          size={24}
          color="#ffd700"
        />
        <textarea
          data-testid="product-detail-evaluation"
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensagem (opcional)"
          onChange={this.updateState}
        />
      </div>
    );
  }
}

export default Rating;
