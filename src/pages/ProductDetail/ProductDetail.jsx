import React from 'react';
import * as api from '../../services/api';

const ProductDetail = (props) => {
  const [item, setItem] = React.useState({ title: '' });

  React.useEffect(() => {
    api.getProductById(props.match.params.id).then((data) => setItem(data));
  }, [props]);

  return <div>{item.title}</div>;
};

export default ProductDetail;
