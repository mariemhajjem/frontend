import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Statistic, Row, Col } from "antd";
import SideBar from "../SideBar/SideBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import * as actions from "../redux/actions/centers";
import { data } from "./data_test";
const { Content } = Layout;

function Admin() {
  const centers = useSelector((state) => state.centers.list);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(actions.fetchCenters());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);

  return (
    // centers.list &&
    // centers.list.length > 0 && (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, marginRight: 20, minHeight: 360 }}
            >
              {/* <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} /> */}
              {/* <ResponsiveContainer width="20%" height="20%"> */}
              <BarChart
                width={1500}
                height={300}
                data={centers}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="center_capacity" fill="#8884d8" />
                <Bar dataKey="number_vaccine" fill="#82ca9d" />
              </BarChart>
              {/* </ResponsiveContainer> */}
              <br />
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Centers" value={centers.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="Vaccinated users" value={112} />
                </Col>
              </Row>
            </div>

            {/* <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, marginTop:12 }}
            >
            </div> */}
          </Content>
        </Layout>{" "}
      </Layout>
    </div>
    // )
  );
}

export default Admin;
