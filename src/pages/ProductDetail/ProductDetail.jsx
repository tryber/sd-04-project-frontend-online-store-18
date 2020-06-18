import React from 'react';
import * as api from '../../services/api';

const ProductDetail = (props) => {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    api.getProductById(props.match.params.id).then((data) => setItem(data));
  }, [props]);

  return <div>Olá {props.match.params.id}</div>;
};

export default ProductDetail;
