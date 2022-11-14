import {
  ShopOutlined,
  PushpinOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

import "./Menu.scss"
import Link from './UI/Link/Link';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to={"/admin"} linkName={'Add Products'} />, '1', <PlusCircleOutlined />),

  getItem(<Link to={"/admin/products"} linkName={'All Products'} />, '2', <PushpinOutlined />),
  getItem(<Link to={"/client/home"} linkName={'Go to shop'} />, '3', <ShopOutlined />),
];
const AdminMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </Layout>
  );
};
export default AdminMenu;