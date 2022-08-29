import React from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "../constants/menuItems";
import { Link, Route } from "react-router-dom";

const { Sider, Header, Content, Footer } = Layout;

function Home() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        {/* add logo */}
        <Sider>
          <div style={{ height: 100 }}></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {listMenu.map((item, index) => (
              <Menu.Item key={index} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" />
          </Header>

          <Content className="site-layout-background">

              {listMenu.map((item, index) => (
                <Route exact path={item.path} component={item.component} />
              ))}
          </Content>
          <Footer style={{ textAlign: "center" }}>Powered by Xearth </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
