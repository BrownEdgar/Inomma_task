import { Layout, Button, Space } from 'antd';
import React from 'react';
import AdminMenu from '../Menu';
import { Image } from 'antd';
import { Col, Row } from 'antd';
import './AdminLayout.scss'

const { Header, Footer, Sider, Content } = Layout;



function AdminLayout({ children }) {
  return (
    <Layout className='AdminLayout'>
      <Header
      >
        <Row>
          <Col span={6} >
            <Image
              id='ant-layout-logoIamge'
              width={70}

              preview={false}
              src="./logo.png"
            />
          </Col>
        </Row>
      </Header>
      <Layout
        style={{
          minHeight: '90vh',
        }}>

        <Sider className='main-sidebar'>
          <AdminMenu />
        </Sider>
        <Content>
          {children}
        </Content>


      </Layout>

    </Layout>
  );
}

export default AdminLayout;
