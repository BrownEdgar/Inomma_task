import React, { useState } from 'react'
import { Row, Col, Spin, } from 'antd';
import Selectvariant from '../UI/Select/Selectvariant';
import { useSelector } from 'react-redux';
import { selectRandomProducts } from '../../features/product/productSlice';
import { ProductList } from './ProductList';
import { AlertNoProduct } from '../Alert';

function Home() {
  const [variant, setvariant] = useState('a')
  const [loading, setLoading] = useState(false);
  const randomProducts = useSelector(selectRandomProducts);
  const handleChange = (options) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
    setvariant(options)
  }

  return (
    <>
      {randomProducts.length > 0
        ? (
          <Row justify={'end'}>
            <Col span={4} >
              <Selectvariant onChange={handleChange} />
            </Col>
            <Col span={24} >
              <Spin spinning={loading}>
                <ProductList variant={variant} randomProducts={randomProducts} />
              </Spin>
            </Col>
          </Row>
        ) : (
          <AlertNoProduct />
        )
      }
    </>
  )
}

export default Home;
