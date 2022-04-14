import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux" 
import { Modal, Button, Form, Input, Select, InputNumber} from "antd"; 

import * as actions from '../../../redux/actions/pharmacies' 
import gouvernorat from '../../../constants/gouvernorat'
import villes from '../../../constants/villes'

function UpdatePharmacy() {
  const isModalVisible = useSelector((state) => state.pharmacies.displayUpdate) 
  const pharmacy = useSelector((state) => state.pharmacies.selectedPharmacy) 
  const [cities,setCities] = useState([]) 
  const dispatch = useDispatch() 
  const closeModal = () => {
    dispatch(actions.setDisplayUpdate(false))  
  };
  const changeGov = (gover) => { 
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
  const handleSubmit = async (values) =>{
    const Updatedpharmacy ={
      id:pharmacy._id,
      name:values.name,
      governorate: values.governorate,
      city: values.city,
      pharmacy_capacity: values.capacity,
      number_vaccine: 0,
    } 
    dispatch(actions.updatePharmacy(Updatedpharmacy)) 
  }
   

  return ( 
     <Modal 
        title="Update new pharmacy" 
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
        initialValues={{
          ["name"]: pharmacy.name,
          ["governorate"]: pharmacy.governorate,
          ["city"]: pharmacy.city,
          ["capacity"]: pharmacy.pharmacy_capacity,
        }}
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
                return <Select.Option key={key} value={gov} >{gov}</Select.Option>
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
              return <Select.Option key={key} value={city}>{city}</Select.Option>
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
                min: 0,
              },
            ]}
          >
           <InputNumber />
          </Form.Item>

          <Button type="primary" htmlType="submit" shape="round"> Update pharmacy </Button>
        </Form>
      </Modal>
     
  );
}
export default UpdatePharmacy;
