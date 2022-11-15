import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { Button, Form } from 'antd';
import { selectProducts, addProducts } from '../../features/product/productSlice';
import ProductFormRender from './ProductFormRender';

import './ProductForm.scss'


const ProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  console.log(products)

  const onFinish = ({ products }) => {
    const newProducts = products.map(product => {
      return {
        ...product,
        date: {
          startDate: moment(product.date[0]).format("MM-DD-YYYY"),
          endDate: moment(product.date[0]).format("MM-DD-YYYY")
        }
      }
    })
    console.log(newProducts)
    dispatch(addProducts(newProducts))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      size="large"
      layout="vertical"
      name="addProduct"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form >
  );
};
export default ProductForm;