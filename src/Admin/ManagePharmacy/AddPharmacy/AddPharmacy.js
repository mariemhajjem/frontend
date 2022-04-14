import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, InputNumber,Form, Input, Select } from "antd";

import * as actions from "../../../redux/actions/pharmacies";
import gouvernorat from "../../../constants/gouvernorat";
import villes from "../../../constants/villes";

function AddPharmacy() {
  const isModalVisible = useSelector((state) => state.pharmacies.displayed);
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
    const pharmacy = {
      name:values.name,
      governorate: values.governorate,
      city: values.city,
      pharmacy_capacity: values.capacity,
      number_vaccine: 0,
    };
    dispatch(actions.addPharmacy(pharmacy));
  };
  return (
    <Modal
      title="Add new pharmacy"
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
          label="pharmacy_name:"
          name="name"
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
          <Select>
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
          label="pharmacy_capacity:"
          name="capacity"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0
            },
          ]}
        >
          <InputNumber/>
        </Form.Item>

        <Button type="primary" htmlType="submit" shape="round"> Add pharmacy </Button>
      </Form>
    </Modal>
  );
}
export default AddPharmacy;
