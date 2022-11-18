import React, { useState, useContext, createRef } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Button, Form } from 'antd';
import { addProducts } from '../../../features/product/productSlice';
import ProductFormRender from './ProductFormRender';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../../Layaut/MainLayaut'
import { ALERT_FAILED_OPTIONS, ALERT_SUCCESS_OPTIONS } from '../../utils/constants';
import ROUTES from '../../Routes';

import './ProductForm.scss'

const ProductForm = () => {
  const formRef = createRef()
  const [isFormEmpty, setIsFormEmpty] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggleSuccessAlert } = useContext(AlertContext)

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
    toggleSuccessAlert(ALERT_SUCCESS_OPTIONS)
    navigate(ROUTES.ALL_PRODUCT)
  }
  const onFinishFailed = (data) => {
    toggleSuccessAlert(ALERT_FAILED_OPTIONS);
  }
  const onValuesChange = ({ products }) => {
    products.length ? setIsFormEmpty(false) : setIsFormEmpty(true)
  }
  return (
    <Form
      ref={formRef}
      size="large"
      layout="vertical"
      name="addProduct"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
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
          disabled={isFormEmpty}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProductForm;