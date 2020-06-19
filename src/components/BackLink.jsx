import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = (props) => {
  console.log(props);
  const { linkTo } = props;
  return (
    <Link to={linkTo} className="back-button">
      <i className="fas fa-long-arrow-alt-left fa-2x" />
      <span className="back-button-text">Voltar</span>
    </Link>
  );
};
export default BackLink;
