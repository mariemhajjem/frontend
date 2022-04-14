import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Input, InputNumber} from "antd"; 

import * as actions from "../../../redux/actions/vaccines";

function AddVaccine() {
  const isModalVisible = useSelector((state) => state.vaccines.displayed);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(actions.setDisplayed(false));
  }; 

  const handleSubmit = async (values) => {
    const vaccine = {
      vaccine_type:values.vaccine_type,
      stock:values.stock,
    };
    dispatch(actions.addVaccine(vaccine));
  };
  return (
    <Modal
      title="Add new vaccine"
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
          label="Vaccine Name:"
          name="vaccine_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Stock:"
          name="stock"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit" shape="round"> Add Vaccine </Button>
      </Form>
    </Modal>
  );
}

export default AddVaccine;
