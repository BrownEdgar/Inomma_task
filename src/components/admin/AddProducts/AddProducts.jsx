import React from 'react'
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import ProductForm from '../ProductForm/ProductForm';

import "./AddProducts.scss"

const { Title } = Typography;

function AddProducts() {
  return (
    <div className='AddProducts' >
      <Title>Add Product</Title>
      <Row gutter={[16, 32]} style={{ width: '90%' }} justify="start">
        <Col span={24} >
          <ProductForm />
        </Col>
      </Row>
    </div>
  )
}

export default AddProducts
