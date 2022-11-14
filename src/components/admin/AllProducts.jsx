import React from 'react'

import { Col, Row } from 'antd';
import { Typography } from 'antd';
import "./AllProducts.scss"
import ProductForm from './ProductForm';

const { Title } = Typography;
export default function AllProducts() {
  return (
    <div className='AllProducts' >
      <Title>Add Product</Title>
      <Row gutter={[16, 32]} style={{ width: '90%' }} justify="start">
        <Col span={24} >
          <ProductForm />
        </Col>

      </Row>

    </div>
  )
}
