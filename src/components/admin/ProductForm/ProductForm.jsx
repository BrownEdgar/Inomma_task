import { useDispatch } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { Button, Form } from 'antd';
import { addProducts } from '../../../features/product/productSlice';
import ProductFormRender from './ProductFormRender';
import { useNavigate } from "react-router-dom";


import './ProductForm.scss'
import ROUTES from '../../Routes';


const ProductForm = () => {
  const formRef = React.createRef()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = ({ products }) => {
    const newProducts = products.map(product => {
      const id = uuid();
      return {
        ...product,
        id,
        date: {
          startDate: moment(product.date[0]).format("MM-DD-YYYY"),
          endDate: moment(product.date[1]).format("MM-DD-YYYY")
        }
      }
    })
    dispatch(addProducts(newProducts))
    formRef.current.resetFields()
    navigate(ROUTES.ALL_PRODUCT)
  }

  return (
    <Form
      ref={formRef}
      size="large"
      layout="vertical"
      name="addProduct"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="products">
        {(fields, { add, remove }) => ProductFormRender(fields, { add, remove })}
      </Form.List>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 12,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProductForm;