import React, { Component } from "react";
import { Col, Row, } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";


export class Test extends Component {
  render() {
    return (
      <div style={{ margin: "5%" }}>
      
        <div style={{marginBottom:'5%'}}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6} style={{ background: "#048B9A", padding: "2%" }}>
                            
         
            </Col>
            <Col className="gutter-row" span={6} style={{ background: "#F9A521", padding: "2%" }}>

            </Col>
            <Col className="gutter-row" span={6} style={{ background: "#70726E", padding: "2%" }}>

            </Col>
            <Col className="gutter-row" span={6} style={{ background: "#FF6F7D", padding: "2%" }}>

            </Col>
          </Row>
        </div>

        <div>
          <Row justify="space-evenly" gutter={16}>
            <Col span={6} style={{ background: "#3B5998", padding: "2%" }}>
              <FacebookOutlined style={{ color: "white", fontSize: "40px" , marginLeft:'40%'}} />
            </Col>
            <Col span={6} style={{ background: "#C0428A", padding: "2%" }}>
              <InstagramOutlined style={{ color: "white", fontSize: "40px", marginLeft:'40%'}} />
            </Col>
            <Col span={6} style={{ background: "#00ACEE", padding: "2%" }}>
              <TwitterOutlined style={{ color: "white", fontSize: "40px", marginLeft:'40%' }} />
            </Col>
            <Col span={6} style={{ background: "#0E76A8", padding: "2%" }}>
              <LinkedinOutlined style={{ color: "white", fontSize: "40px", marginLeft:'40%' }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Test;
