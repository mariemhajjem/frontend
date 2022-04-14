import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, InputNumber,Form, Input, Select } from "antd"; 

import * as actions from "../../../redux/actions/centers";
import gouvernorat from "../../../constants/gouvernorat";
import villes from "../../../constants/villes";

function AddCenter() {
  const isModalVisible = useSelector((state) => state.centers.displayed);
  const [cities, setCities] = useState([]);    
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actions.setDisplayed(false));
  };
  

  const changeGov = (gover) => { 
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
 
  const handleSubmit = async (values) => { 
    const center = {
      name:values.name,
      governorate: values.governorate,
      city: values.city,
      center_capacity: values.capacity,
      number_vaccine: 0,
    };
    dispatch(actions.addCenter(center));
  };
  return (
    <Modal
      title="Add new center"
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
          name="name"
          label="center_name:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="gouvernorat"
          name="governorate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={changeGov}>
            <Select.Option>--Choose Governorate--</Select.Option>
            {gouvernorat?.map((gov, key) => {
              return (
                <Select.Option key={key} value={gov}>
                  {gov}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="city"
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select >
            <Select.Option>--Choose City--</Select.Option>
            {cities?.map((city, key) => {
              return (
                <Select.Option key={key} value={city}>
                  {city}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="center_capacity:"
          name="capacity"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
            },
          ]}
        >
          <InputNumber/>
        </Form.Item> 
        <Button type="primary" htmlType="submit" shape="round"> Add center </Button>
         
      </Form>
    </Modal>
  );
}
export default AddCenter;
