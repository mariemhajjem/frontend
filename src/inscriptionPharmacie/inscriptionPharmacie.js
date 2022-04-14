import React from 'react'
import { Link } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";

import Navbar from "../Navbar/Navbar";
import "./inscriptionPharmacie.css";

function inscriptionPharmacie() {
  return (
    <div>
      <Navbar />
      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="inscriP"
      >
        <Form.Item
          name="CIN"
          label="CIN:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Province"
          name="Province"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="Tunis">Tunis</Select.Option>
            <Select.Option value="Tunis">Manouba</Select.Option>
            <Select.Option value="Tunis">Ben Arous</Select.Option>
            <Select.Option value="Tunis">Marsa</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Pharmacie"
          name="Pharmacie"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value=""></Select.Option>
          </Select>
        </Form.Item>
        <div className="buttonS">
          <Button type="primary" htmlType="submit" shape="round">
            Confirmer
          </Button>
          <Button type="danger" htmlType="submit" shape="round">
            <Link to="/inscriptionCenter">S'inscrire</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default inscriptionPharmacie;
