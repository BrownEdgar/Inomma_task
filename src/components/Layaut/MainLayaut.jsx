import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import MainHeader from '../Header/MainHeader';
import { MENU_OPTIONS } from '../utils/helpers/menuOptions';
import ROUTES from '../Routes';

const { Content, Footer, Sider } = Layout;

const MainLayaut = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={MENU_OPTIONS}
          style={{ marginTop: '11vh' }} />
      </Sider>
      <Layout className="site-layout">
        <MainHeader />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Design ©2022 Created  for <a href={ROUTES.OWNER_SITE} rel="noreferrer">Inomma</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayaut;