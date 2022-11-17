import React from 'react'
import { Layout, Image } from 'antd';
import logo from '../../assets/images/logo.png';

import './MainHeader.scss'

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header>
      <Image
        id='ant-layout-logoIamge'
        width={80}
        preview={false}
        src={logo}
        alt="App logo"
      />
    </Header>
  )
}
