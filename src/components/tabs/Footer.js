import React from 'react'

import { Layout } from 'antd'

function Footer() {
  return (
    <div>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>         
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
    </div>
  )
}

export default Footer