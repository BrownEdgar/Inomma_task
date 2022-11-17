import React from 'react'
import { v4 as uuid } from 'uuid';
import { Button, Form, Input, DatePicker, Divider, Col, Row, Tooltip } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker;

export default function ProductFormRender(fields, { add, remove }) {
  return (
    <>
      {
        fields.map(({ key, name, ...restField }) => {
          const id = uuid()
          return (
            <Row gutter={{ xs: 0, sm: 16, md: 8 }} wrap key={id} >
              <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }} >
                <Form.Item
                  {...restField}
                  label="Product name"
                  name={[name, 'name']}
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
                  {...restField}
                  label="Price"
                  name={[name, 'price']}
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
                  {...restField}
                  label={'Weight'}
                  name={[name, 'weight']}
                  rules={[
                    { required: true, message: 'Missing product Weight' },
                    { pattern: /^0*?[1-9]\d*$/, message: 'Please enter a positive number' },
                  ]}
                >
                  <Input placeholder="Weight" />
                </Form.Item>
              </Col>
              <Col span={6} xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 11 }} lg={{ span: 8 }}>
                <Form.Item
                  {...restField}
                  label={'Date'}
                  name={[name, 'date']}
                  rules={[{ required: true, message: 'Pleace fill product date!' }]}
                >
                  <RangePicker />
                </Form.Item>
              </Col>
              <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} className="delete_btn" >
                <Tooltip placement="topRight" title="remove this product" arrowPointAtCenter color={"#cb3c19"}>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Tooltip>
              </Col>
              <Divider />
            </Row>
          )
        })
      }
      <Form.Item>
        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
          Add new Product
        </Button>
      </Form.Item>
    </>
  )

}
