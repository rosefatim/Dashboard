import React from 'react'

import { Layout, Menu} from 'antd';
import { 
    MenuOutlined,
    SearchOutlined,
    MessageOutlined,
    BellOutlined,
    FormOutlined
  } from '@ant-design/icons';

const { Header } = Layout;

function getItem(label, key, icon, children, type) {
    return {
      label,
      key,
      icon,
      children, 
      type 
    };
  }
  

  // menu items
  const items1 = [
    getItem(<MenuOutlined  />),
    getItem('Create new', 'sub1', <FormOutlined />, [
      getItem('File', '5'),
      getItem('folder', '6'),
    ]),     
    getItem(<SearchOutlined />),
    getItem(<BellOutlined />),
    getItem(<MessageOutlined />),

  ]

function NavBar() {
  return (
    <div>
        <Layout>
            <Header className="header" style={{ marginLeft: 200 }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal"  items={items1}  />
            </Header>
        </Layout>
    </div>
  )
}

export default NavBar