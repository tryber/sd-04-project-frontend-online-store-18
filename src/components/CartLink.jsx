import React from 'react';
import { Link } from 'react-router-dom';

const CompoentName = () => (
  <Link to="/cart" data-testid="shopping-cart-button">
    <i className="fas fa-shopping-cart fa-2x" />
  </Link>
);
export default CompoentName;
