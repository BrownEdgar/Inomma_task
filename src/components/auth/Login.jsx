import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Col, Row } from 'antd';
import ROUTES from '../Routes';


const Login = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    window.localStorage.setItem("login", true)
    navigate(ROUTES.ALL_PRODUCT);
  }

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "50vh" }}>
      <Col xs={2} sm={4} md={9} lg={12} xl={12} offset={'2'}>
        <Form
          layout="vertical"
          name="basic"
          size="large"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                pattern: /^admin*$/,
                message: 'invalid Username. Please cheack ReadMe file'
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              { pattern: /^admin*$/, message: 'invalid Password. Please cheack ReadMe file' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>

  );
};
export default Login;