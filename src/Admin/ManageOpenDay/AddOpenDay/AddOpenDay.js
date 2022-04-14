import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, InputNumber,Form, Select, AutoComplete ,TimePicker, DatePicker  } from "antd"; 
import { Row, Col } from "antd";
import moment from 'moment';
import * as actions from "../../../redux/actions/openDays";


function AddOpenDay() {
  const isModalVisible = useSelector((state) => state.openDays.displayed);   
  const centers =  useSelector((state) => state.centers.list);
  const vaccines =  useSelector((state) => state.vaccines.list);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actions.setDisplayed(false));
  };
  


  const handleSubmit = async (values) => { 
    const openday = {
      center:values.centers,
      endAge: values.endAge,
      startAge: values.startAge,
      appointmentTime: moment(values.opening).format("HH:mm"),
      vaccine_type:values.vaccine_type,
      date: values.date
    };
   dispatch(actions.AddOpenDay(openday));
   dispatch(actions.setDisplayed(false));
  };

  return (
    <Modal
      title="Add new open day"
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit} 
      >
         <Form.Item
          label="centers list"
          name="centers"
          rules={[
            {
              required: true,
            },
          ]}
        >
           <Select >
            <Select.Option>--Choose center --</Select.Option>
            {centers?.map((center, key) => {
              return (
                <Select.Option key={key} value={center._id}>
                  {center.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Date:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="opening time"
          name="opening"
          rules={[
            {
              required: true,
            },
          ]}
        >
  <TimePicker  />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item
              name={"startAge"}
              label="FROM"
              rules={[
                {
                  required: true,
                  type: 'number',
                  min:1
                }
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={"endAge"} label="To">
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="vaccin type"
          name="vaccine_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select >
            <Select.Option>--Choose vaccin type--</Select.Option>
            {vaccines?.map((gov, key) => {
              return (
                <Select.Option key={key} value={gov._id}>
                  {gov.vaccine_type}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" shape="round"> Add Open Day </Button>
         
      </Form>
    </Modal>
  );
}
export default AddOpenDay;
