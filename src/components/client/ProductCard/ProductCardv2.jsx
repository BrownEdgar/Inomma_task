import React from 'react'
import ProductIcon from '../ProductIcon/ProductIcon';
import { Typography } from 'antd';

import "./ProductCardv2.scss"

const { Text } = Typography;

function ProductCardv2({ product }) {
  return (
    <div className='ProductItem'>
      <h4 className='ProductItem-Name'>{product.name}</h4>
      <div className='ProductItem-Info'>
        <Text>
          <Text strong>
            Price:
          </Text>
          {' '}
          <span>{product.price}</span>
        </Text>
        <Text>
          <Text strong>
            Weight:
          </Text>
          {" "}
          <span>{product.weight}</span>
        </Text>
        <Text>
          <Text strong>
            Start date:
          </Text>
          {" "}
          <span>{product.date.startDate}</span>
        </Text>
        <Text>
          <Text strong>
            End date:
          </Text>
          {" "}
          <span>{product.date.endDate}</span>
        </Text>
      </div>
      <ProductIcon />
    </div>
  )
}

export default ProductCardv2