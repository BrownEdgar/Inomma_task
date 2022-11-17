import React from 'react'
import { Alert, Space, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import ROUTES from "../Routes"

import "./Alert.scss"

function AlertNoProduct() {
  const navigate = useNavigate();
  return (
    <Alert
      message="NO PRODUCTS"
      description="Please login as admin to add first products"
      type="info"
      action={
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={() => navigate(ROUTES.LOGIN)}>
            Login
          </Button>
        </Space>
      }
      closable
      showIcon
    />
  )
}
export default AlertNoProduct
