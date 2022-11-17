import React from 'react';
import { Table, Space, Typography, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { deleteProduct, selectProducts } from '../../../features/product/productSlice';
import ROUTES from '../../Routes';

import './AllProducts.scss'

const { Title } = Typography;
const { Column, ColumnGroup } = Table;

export default function AllProducts() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleDeleteById = (id) => {
    dispatch(deleteProduct({ id }))
  }

  return (
    <div className="AllProducts">
      <Title type='success'>All Products</Title>
      <Row justify="end">
        <Col span={'7'} >
          {products.length === 0
            ? (
              <Button
                className='add-btn'
                size="large"
                onClick={() => navigate(ROUTES.ADD_PRODUCT)}>
                Add your first Product
              </Button>
            )
            : null}
        </Col>
      </Row>
      <Table dataSource={products} size="large" bordered rowKey="uid">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Weight" dataIndex="weight" key="weight" />
        <ColumnGroup title="Date">
          <Column title="Start date" dataIndex={['date', 'startDate']} key="startDate" />
          <Column title="End date" dataIndex={['date', 'endDate']} key="endDate" />
        </ColumnGroup>
        <Column
          title=""
          key="action"
          render={(_, product) => (
            <Space size="middle">
              <Button
                danger
                ghost
                onClick={() => handleDeleteById(product.id)}
              >Delete</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
