import React from "react";
import { Layout, Menu,Breadcrumb } from "antd";
import { listMenu } from "../constants/menuItems";
import { Link, Route } from "react-router-dom";

const { Sider, Header, Content, Footer } = Layout;

function Tout() {
  return (
    <div>
      <Layout hasSider>
        {/* add logo */}
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            padding: 15,
            color: "white",
          }}
        >
          <div style={{ height: "7%" }}></div>
          <Menu theme="dark" 
          mode="inline" 
          defaultSelectedKeys={["0"]}
          >
            {listMenu.map((item, index) => (
              <Menu.Item key={index} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" >
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" />
          </Header>
          <Breadcrumb
          style={{
            padding: 24,
            marginLeft: "20%",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: "25%",
              minHeight: 280,
            }}
          >
            
          </Content>
          <Footer style={{ textAlign: "center" }}>Powered by Xearth </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Tout;
