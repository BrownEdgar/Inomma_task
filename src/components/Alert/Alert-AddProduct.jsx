import React from 'react'
import { Alert } from 'antd';
import PropTypes from 'prop-types';

import "./Alert.scss"

function AlertAddProduct({ message, show, type }) {
  return (
    <Alert
      className={`ant-alert-success-product ${show ? 'show' : ''}`}
      message={message}
      type={type}
      showIcon
    />
  )
}

AlertAddProduct.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
}

export default AlertAddProduct