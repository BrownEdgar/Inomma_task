import React from 'react'
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardv2 from '../ProductCard/ProductCardv2';




export default function Product({ product, variant }) {

  const renderProducts = () => {
    switch (variant) {
      case 'a': return <ProductCardv2 product={product} />
      case 'b': return <ProductCard product={product} />
      default: return null
    }
  }

  return (
    <>
      {renderProducts()}
    </>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.string,
    date: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  }),
  variant: PropTypes.oneOf(['a', 'b'])
}
