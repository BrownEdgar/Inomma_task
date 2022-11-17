import React from 'react'
import {
  WarningOutlined,
  DollarCircleOutlined,
  CheckSquareOutlined,
  PicCenterOutlined
} from '@ant-design/icons';
import { Card } from 'antd';
import DefaultProductImage from '../../../assets/images/default-product-placeholder.png';

import './ProductCard.scss'

const { Meta } = Card;

function ProductCard({ product }) {
  const cardContent = () => {
    return (
      <ul className='card-content-list'>
        <li>
          <DollarCircleOutlined />
          {' '}
          {product.price}
        </li>
        <li>
          <PicCenterOutlined />
          {" "}
          {product?.weight}
          {" "}
          kg
        </li>
        <li >
          <CheckSquareOutlined />
          {" "}
          {product?.date.startDate}
        </li>

        <li className='warning'>
          <WarningOutlined />
          {" "}
          {product?.date.endDate}
        </li>
      </ul>
    )
  }

  return (
    <Card
      hoverable
      cover=
      {
        <img
          alt="default product img"
          src={DefaultProductImage}
        />
      }
    >
      <Meta title={product.name} description={cardContent()} />
    </Card>
  )
}

export default ProductCard