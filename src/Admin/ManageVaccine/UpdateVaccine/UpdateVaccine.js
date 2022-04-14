import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Input,InputNumber} from "antd"; 

import * as actions from "../../../redux/actions/vaccines";

function UpdateVaccine() {
  const isModalVisible = useSelector((state) => state.vaccines.displayUpdate);
  const vaccine = useSelector((state) => state.vaccines.selectedVaccine);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(actions.setDisplayUpdate(false));
  }; 

  const handleSubmit = async (values) => {
    const Updatedvaccine = {
      id: vaccine._id,
      stock: values.stock,
    };
    dispatch(actions.updateVaccine(Updatedvaccine));
  };

  return (
    <Modal
      title="Update new vaccine"
      visible={isModalVisible} 
      footer={null}
      onCancel={closeModal}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit} 
        initialValues={{
          ["stock"]: vaccine.stock,
          ["vaccine_type"]: vaccine.vaccine_type,
        }}
      >
        <Form.Item
          label="Vaccine name:"
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
          label="Vaccine stock:"
          name="stock"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button htmlType="submit" > Update center </Button>
      </Form>
    </Modal>
  );
}

export default UpdateVaccine;
