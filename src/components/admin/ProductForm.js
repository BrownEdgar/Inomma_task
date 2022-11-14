import React from 'react';

import { Button, Form, Input, DatePicker, Divider, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import './ProductForm.scss'
const { RangePicker } = DatePicker;

const ProductForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
      <Row gutter={{ xs: 0, sm: 16, md: 8 }} wrap>
        <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }} >
          <Form.Item
            label="Product name"
            name={['product', 'product']}
            rules={[
              { required: true, message: 'Product must have a name!' },
              { min: 2, message: 'Product name is to short!' },
              { pattern: /^[a-zA-Z\s]*$/, message: 'must  contain only letters and space!' }
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
          <Form.Item
            label="Price"
            name={['price', 'price']}
            rules={[
              { required: true, message: 'Product must have a price!' },
              { pattern: /^0*?[1-9]\d*$/, message: 'Please enter a number' },
            ]}
          >
            <Input placeholder="Price" />
          </Form.Item>
        </Col>
        <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
          <Form.Item
            label={'Weight'}
            name={['weight', 'Weight']}
            rules={[
              { required: true, message: 'Missing product Weight' },
              { pattern: /^0*?[1-9]\d*$/, message: 'Please enter a positive number' },
            ]}
          >
            <Input placeholder="Weight" />
          </Form.Item>
        </Col>
        <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 9 }}>
          <Form.Item
            label={'Date'}

            name={['date', 'Date']}
            rules={[{ required: true, message: 'Pleace fill product date!' }]}
          >
            <RangePicker />
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="products">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row key={name.key} gutter={{ xs: 0, sm: 16, md: 8 }} wrap align="middle">
                <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }} >
                  <Form.Item
                    label="Product name"
                    name={['product', 'product']}
                    rules={[{ required: true, message: 'Product must have a name!' }]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
                  <Form.Item
                    label="Price"
                    name={['price', 'price']}
                    rules={[{ required: true, message: 'Product must have a price!' }]}
                  >
                    <Input placeholder="Price" />
                  </Form.Item>
                </Col>
                <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
                  <Form.Item
                    label={'Weight'}
                    name={['weight', 'Weight']}
                    rules={[{ required: true, message: 'Missing product Weight' }]}
                  >
                    <Input placeholder="Weight" />
                  </Form.Item>
                </Col>
                <Col span={6} xs={{ span: 24 }} sm={{ span: 23 }} md={{ span: 11 }} lg={{ span: 8 }}>
                  <Form.Item
                    label={'Date'}

                    name={['date', 'Date']}
                    rules={[{ required: true, message: 'Pleace fill product date!' }]}
                  >
                    <RangePicker />
                  </Form.Item>
                </Col>
                <Col lg={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Col>
                <Divider />
              </Row>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add new Product
              </Button>
            </Form.Item>
          </>
        )}
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
    </Form>
  );
};
export default ProductForm;