import React from "react";
import { Layout, Menu } from "antd";
import { listMenu } from "../constants/menuItems";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function SideBar() {
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
          {/* lire la doc sur le menu */}

          <div style={{ width: "95%", marginTop: "30%" }}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["0"]}
            >
            {listMenu.map((item, index) => (
                 <Menu.Item key={index} icon={item.icon}>
                 <Link to={item.path}>
                   {item.label}
                 </Link>
                 </Menu.Item >           
            ))}              
            </Menu>
          </div>
        </Sider>
      </Layout>
    </div>
  );
}

export default SideBar;
