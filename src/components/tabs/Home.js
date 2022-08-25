import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Main from "./Main";
import Tout from "./Tout";

function Home() {
  return (
    <div>
       {/* <Layout>
       <SideBar />
        <NavBar />
        <Main/>    
      // </Layout>  */}
      <Tout/>
    </div>
  );
}

export default Home;
