import React from 'react';

class ProductDetail extends React.Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    const { item } = location.state;
    return <div data-testid="product-detail-name">{item.title}</div>;
  }
}

export default ProductDetail;
