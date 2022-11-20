import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import MainHeader from '../Header/MainHeader';
import { MENU_OPTIONS } from '../utils/helpers/menuOptions';
import ROUTES from '../Routes';
import { AlertAddProduct } from '../Alert';
import { ALERT_DEFAULT_OPTIONS } from '../utils/constants';


export const AlertContext = React.createContext()

const { Content, Footer, Sider } = Layout;

const MainLayaut = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggleAlert, settoggleAlert] = useState(ALERT_DEFAULT_OPTIONS);


  useEffect(() => {
    const timeOut = setTimeout(settoggleAlert, 2000, false)
    return () => {
      clearTimeout(timeOut)
    }
  }, [toggleAlert])

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
            <AlertAddProduct
              message={toggleAlert.message}
              show={toggleAlert.isShow}
              type={toggleAlert.type}
            />
            <AlertContext.Provider value={{
              toggleSuccessAlert: settoggleAlert
            }}>
              {children}
            </AlertContext.Provider>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Design ©2022 Created for <a href={ROUTES.OWNER_SITE} rel="noreferrer">Inomma</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayaut;