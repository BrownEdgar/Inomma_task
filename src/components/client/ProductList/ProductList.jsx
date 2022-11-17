import React from 'react'
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Product from './Product';

import './ProductList.scss'

export default function ProductList({ variant, randomProducts }) {
  return (
    <div className='ProductList'>
      <Row align="middle" gutter={[24, 24]} wrap>
        {
          randomProducts.map(elem => {
            return (
              <Col key={elem.id} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <Product key={elem.id} product={elem} variant={variant || 'a'} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

Product.propTypes = {
  variant: PropTypes.oneOf(['a', 'b']),
}
