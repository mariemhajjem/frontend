import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

import "./SideBar.css";
const { Header, Sider } = Layout;

function SideBar() {
  const [collapsed, SetCollapsed] = useState(false);
  return (
    <div>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => SetCollapsed(!collapsed)}
      >
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link exact to="/Admin">
              {" "}
              Stats
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link exact to="/ManageCenter">
              Manage Centers
            </Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link exact to="/ManagePharmacy">
              Manage Pharmacies
            </Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<DesktopOutlined />}>
            <Link exact to="/ManageVaccines">
              Manage Vaccines
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<DesktopOutlined />}>
            <Link exact to="/ManageVolunteers">
              Manage Volunteers
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<DesktopOutlined />}>
          <Link exact to="/ManageOpenDay">
            Open Days
            </Link>
          </Menu.Item>
          
        </Menu>
      </Sider>
    </div>
  );
}

export default SideBar;
