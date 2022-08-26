import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import { Line ,Column} from "@ant-design/plots";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";


const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  // replace with axios
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });

  };

  const config = {
    data,
    xField: "date",
    yField: "value",
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    seriesField: "type",
    color: ({ type }) => {
      return type === "register"
        ? "#F4664A"
        : type === "download"
        ? "#30BF78"
        : "#FAAD14";
    },
    lineStyle: ({ type }) => {
      if (type === "register") {
        return {
          lineDash: [4, 4],
          opacity: 1,
        };
      }

      return {
        opacity: 0.5,
      };
    },
  };

 
  return (
    <div style={{ margin: "5%" }}>
      <div style={{ marginBottom: "5%" }}>
        <Row justify="space-evenly" gutter={16}>
          <Col
            className="gutter-row"
            span={6}
            style={{ background: "#048B9A", padding: "2%" }}
          >
            Users
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ background: "#F9A521", padding: "2%" }}
          >Pages views</Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ background: "#70726E", padding: "2%" }}
          ></Col>
          <Col
            className="gutter-row"
            span={6}
            style={{ background: "#FF6F7D", padding: "2%" }}
          ></Col>
        </Row>
      </div>

      <Line {...config} style={{width:'50%'}}/>

      <div className="site-card-wrapper" style={{ marginTop: "5%" ,}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={
                <FacebookOutlined
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginLeft: "40%",
                    padding: "5%",
                  }}
                />
              }
              bordered={false}
              hoverable
              style={{ background: "#3B5998" ,}}
            ></Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <InstagramOutlined
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginLeft: "40%",
                    padding: "5%",
                  }}
                />
              }
              bordered={false}
              hoverable
              style={{ background: "#C0428A" }}
            ></Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <TwitterOutlined
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginLeft: "40%",
                    padding: "5%",
                  }}
                />
              }
              bordered={false}
              hoverable
              style={{ background: "#00ACEE" }}
            ></Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Chart;
