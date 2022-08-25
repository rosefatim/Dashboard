import React from "react";
import { Layout, } from "antd";
import { Route } from "react-router-dom";
import { listMenu } from "../constants/menuItems";
const { Content } = Layout;

function Main() {
  return (
    <div>
      <Layout>
        <Content   className="site-layout-background"
          style={{
            padding: 24,
            margin: '25%',
            minHeight: 280,
          }}>
          {listMenu.map((item, index) => (
            <Route path= {item.path} component={item.component}></Route>          
          ))} 
        </Content>
      </Layout>
    </div>
  );
}

export default Main;
